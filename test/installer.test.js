import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readlink, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { parseAgentSelection } from '../src/agents.js';
import { installClove } from '../src/installer.js';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function temporaryProject(t) {
  const directory = await mkdtemp(path.join(tmpdir(), 'clove-skills-test-'));
  t.after(() => rm(directory, { force: true, recursive: true }));
  return directory;
}

test('installs the canonical skills and Codex instructions', async (t) => {
  const project = await temporaryProject(t);
  const result = await installClove({
    agents: parseAgentSelection('codex'),
    packageRoot,
    targetDirectory: project,
  });

  assert.match(await readFile(path.join(project, 'AGENTS.md'), 'utf8'), /# AGENTS\.md/);
  assert.match(
    await readFile(path.join(project, '.agents/skills/ux/SKILL.md'), 'utf8'),
    /name: ux/,
  );
  await assert.rejects(readFile(path.join(project, 'CLAUDE.md')), /ENOENT/);
  assert.equal(result.skipped.length, 0);
  assert.ok(result.created.length > 50);
});

test('installs only the adapters required by selected agents', async (t) => {
  const project = await temporaryProject(t);
  await installClove({
    agents: parseAgentSelection('gemini,copilot'),
    packageRoot,
    targetDirectory: project,
  });

  assert.match(await readFile(path.join(project, 'GEMINI.md'), 'utf8'), /Gemini CLI/);
  assert.match(
    await readFile(path.join(project, '.github/copilot-instructions.md'), 'utf8'),
    /GitHub Copilot/,
  );
  await assert.rejects(readFile(path.join(project, 'CLAUDE.md')), /ENOENT/);
});

test('links Claude to the canonical skills tree', async (t) => {
  const project = await temporaryProject(t);
  const result = await installClove({
    agents: parseAgentSelection('claude'),
    packageRoot,
    targetDirectory: project,
  });

  assert.equal(await readlink(path.join(project, '.claude/skills')), '../.agents/skills');
  assert.match(await readFile(path.join(project, 'CLAUDE.md'), 'utf8'), /@AGENTS\.md/);
  assert.deepEqual(result.links, ['.claude/skills']);
});

test('keeps conflicting files unless force is explicit', async (t) => {
  const project = await temporaryProject(t);
  await writeFile(path.join(project, 'AGENTS.md'), '# Project instructions\n');

  const result = await installClove({
    agents: parseAgentSelection('codex'),
    packageRoot,
    targetDirectory: project,
  });

  assert.equal(await readFile(path.join(project, 'AGENTS.md'), 'utf8'), '# Project instructions\n');
  assert.deepEqual(result.skipped, [
    { path: 'AGENTS.md', reason: 'already exists with different content' },
  ]);
});

test('replaces conflicting Clove files with force', async (t) => {
  const project = await temporaryProject(t);
  await writeFile(path.join(project, 'AGENTS.md'), '# Project instructions\n');

  const result = await installClove({
    agents: parseAgentSelection('codex'),
    packageRoot,
    targetDirectory: project,
    force: true,
  });

  assert.match(await readFile(path.join(project, 'AGENTS.md'), 'utf8'), /# AGENTS\.md/);
  assert.deepEqual(result.updated, ['AGENTS.md']);
});

test('does not follow a project skills symlink', async (t) => {
  const project = await temporaryProject(t);
  const outside = await temporaryProject(t);
  await mkdir(path.join(project, '.agents'), { recursive: true });
  await symlink(outside, path.join(project, '.agents/skills'), 'dir');

  const result = await installClove({
    agents: parseAgentSelection('codex'),
    packageRoot,
    targetDirectory: project,
    force: true,
  });

  assert.deepEqual(result.skipped, [
    { path: '.agents/skills', reason: 'is a symbolic link' },
  ]);
  await assert.rejects(readFile(path.join(outside, 'ux/SKILL.md')), /ENOENT/);
});

test('does not follow a project agents-directory symlink', async (t) => {
  const project = await temporaryProject(t);
  const outside = await temporaryProject(t);
  await symlink(outside, path.join(project, '.agents'), 'dir');

  const result = await installClove({
    agents: parseAgentSelection('codex'),
    packageRoot,
    targetDirectory: project,
    force: true,
  });

  assert.deepEqual(result.skipped, [
    {
      path: '.agents/skills',
      reason: 'its parent directory is a symbolic link',
    },
  ]);
  await assert.rejects(readFile(path.join(outside, 'skills/ux/SKILL.md')), /ENOENT/);
});

test('does not link Claude through an unsafe canonical skills path', async (t) => {
  const project = await temporaryProject(t);
  const outside = await temporaryProject(t);
  await symlink(outside, path.join(project, '.agents'), 'dir');

  const result = await installClove({
    agents: parseAgentSelection('claude'),
    packageRoot,
    targetDirectory: project,
    force: true,
  });

  assert.deepEqual(result.skipped, [
    {
      path: '.agents/skills',
      reason: 'its parent directory is a symbolic link',
    },
    {
      path: '.claude/skills',
      reason: 'the canonical .agents/skills path could not be installed safely',
    },
  ]);
  await assert.rejects(readlink(path.join(project, '.claude/skills')), /ENOENT/);
});

test('does not follow a Copilot parent-directory symlink', async (t) => {
  const project = await temporaryProject(t);
  const outside = await temporaryProject(t);
  await symlink(outside, path.join(project, '.github'), 'dir');

  const result = await installClove({
    agents: parseAgentSelection('copilot'),
    packageRoot,
    targetDirectory: project,
    force: true,
  });

  assert.deepEqual(result.skipped, [
    {
      path: '.github/copilot-instructions.md',
      reason: 'its parent directory is a symbolic link',
    },
  ]);
  await assert.rejects(readFile(path.join(outside, 'copilot-instructions.md')), /ENOENT/);
});

test('dry run reports changes without writing files', async (t) => {
  const project = await temporaryProject(t);
  const result = await installClove({
    agents: parseAgentSelection('claude'),
    packageRoot,
    targetDirectory: project,
    dryRun: true,
  });

  assert.ok(result.created.length > 50);
  await assert.rejects(readFile(path.join(project, 'AGENTS.md')), /ENOENT/);
  await assert.rejects(readFile(path.join(project, '.agents/skills/ux/SKILL.md')), /ENOENT/);
});

test('forced dry run handles incompatible adapter parent paths', async (t) => {
  const project = await temporaryProject(t);
  await writeFile(path.join(project, '.github'), 'not a directory');
  await writeFile(path.join(project, '.claude'), 'not a directory');

  const result = await installClove({
    agents: parseAgentSelection('claude,copilot'),
    packageRoot,
    targetDirectory: project,
    dryRun: true,
    force: true,
  });

  assert.ok(result.updated.includes('.github/copilot-instructions.md'));
  assert.ok(result.created.includes('.claude/skills'));
  assert.equal(await readFile(path.join(project, '.github'), 'utf8'), 'not a directory');
  assert.equal(await readFile(path.join(project, '.claude'), 'utf8'), 'not a directory');
});

import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { PassThrough } from 'node:stream';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { runCli } from '../src/cli.js';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function captureStream() {
  let value = '';
  return {
    stream: {
      write(chunk) {
        value += chunk;
      },
    },
    value: () => value,
  };
}

test('runs init non-interactively with an explicit agent', async (t) => {
  const project = await mkdtemp(path.join(tmpdir(), 'clove-skills-cli-'));
  t.after(() => rm(project, { force: true, recursive: true }));
  const stdout = captureStream();
  const stderr = captureStream();

  const exitCode = await runCli(['init', project, '--agent', 'cursor'], {
    isInteractive: false,
    packageRoot,
    stderr: stderr.stream,
    stdout: stdout.stream,
  });

  assert.equal(exitCode, 0);
  assert.match(stdout.value(), /Configured Clove for Cursor/);
  assert.equal(stderr.value(), '');
  assert.match(await readFile(path.join(project, 'AGENTS.md'), 'utf8'), /# AGENTS\.md/);
});

test('explains how to recover when no agent is provided outside a terminal', async () => {
  const stdout = captureStream();
  const stderr = captureStream();

  const exitCode = await runCli(['init'], {
    isInteractive: false,
    packageRoot,
    stderr: stderr.stream,
    stdout: stdout.stream,
  });

  assert.equal(exitCode, 1);
  assert.equal(stdout.value(), '');
  assert.match(stderr.value(), /Pass --agent codex, claude, cursor, gemini, copilot, or all/);
});

test('prints help without requiring an init command', async () => {
  const stdout = captureStream();
  const stderr = captureStream();

  const exitCode = await runCli(['--help'], {
    isInteractive: false,
    packageRoot,
    stderr: stderr.stream,
    stdout: stdout.stream,
  });

  assert.equal(exitCode, 0);
  assert.match(stdout.value(), /npx clove-skills init --agent codex,claude/);
  assert.equal(stderr.value(), '');
});

test('prompts for one or more agents in an interactive terminal', async (t) => {
  const project = await mkdtemp(path.join(tmpdir(), 'clove-skills-prompt-'));
  t.after(() => rm(project, { force: true, recursive: true }));
  const promptInput = new PassThrough();
  const promptOutput = new PassThrough();
  const stdout = captureStream();
  const stderr = captureStream();
  let promptText = '';
  promptOutput.on('data', (chunk) => {
    promptText += chunk.toString();
  });

  const run = runCli(['init', project], {
    isInteractive: true,
    packageRoot,
    promptInput,
    promptOutput,
    stderr: stderr.stream,
    stdout: stdout.stream,
  });
  promptInput.end(' \u001B[B \r');
  const exitCode = await run;

  assert.equal(exitCode, 0);
  assert.match(promptText, /Which agents should Clove set up/);
  assert.match(promptText, /Use Up\/Down to move, Space to select, and Enter to continue/);
  assert.match(promptText, /\[x\] OpenAI Codex/);
  assert.match(promptText, /\[x\] Claude Code/);
  assert.match(stdout.value(), /OpenAI Codex and Claude Code/);
  assert.equal(stderr.value(), '');
  assert.equal(promptInput.isPaused(), true);
});

test('supports selecting every agent with Space', async (t) => {
  const project = await mkdtemp(path.join(tmpdir(), 'clove-skills-select-all-'));
  t.after(() => rm(project, { force: true, recursive: true }));
  const promptInput = new PassThrough();
  const promptOutput = new PassThrough();
  const stdout = captureStream();
  const stderr = captureStream();

  const run = runCli(['init', project], {
    isInteractive: true,
    packageRoot,
    promptInput,
    promptOutput,
    stderr: stderr.stream,
    stdout: stdout.stream,
  });
  promptInput.end(' \u001B[B \u001B[B \u001B[B \u001B[B \r');
  const exitCode = await run;

  assert.equal(exitCode, 0);
  assert.match(stdout.value(), /OpenAI Codex, Claude Code, Cursor, Gemini CLI, and GitHub Copilot/);
  assert.match(await readFile(path.join(project, 'CLAUDE.md'), 'utf8'), /Claude Code/);
  assert.match(await readFile(path.join(project, 'GEMINI.md'), 'utf8'), /Gemini CLI/);
  assert.match(
    await readFile(path.join(project, '.github/copilot-instructions.md'), 'utf8'),
    /GitHub Copilot/,
  );
  assert.equal(stderr.value(), '');
});

test('requires at least one selection before Enter continues', async (t) => {
  const project = await mkdtemp(path.join(tmpdir(), 'clove-skills-require-selection-'));
  t.after(() => rm(project, { force: true, recursive: true }));
  const promptInput = new PassThrough();
  const promptOutput = new PassThrough();
  const stdout = captureStream();
  const stderr = captureStream();
  let promptText = '';
  promptOutput.on('data', (chunk) => {
    promptText += chunk.toString();
  });

  const run = runCli(['init', project], {
    isInteractive: true,
    packageRoot,
    promptInput,
    promptOutput,
    stderr: stderr.stream,
    stdout: stdout.stream,
  });
  promptInput.end('\r \r');
  const exitCode = await run;

  assert.equal(exitCode, 0);
  assert.match(promptText, /Select at least one agent to continue/);
  assert.match(stdout.value(), /Configured Clove for OpenAI Codex/);
  assert.equal(stderr.value(), '');
});

test('restores terminal input mode when the picker is cancelled', async () => {
  const promptInput = new PassThrough();
  const promptOutput = new PassThrough();
  const stdout = captureStream();
  const stderr = captureStream();
  const rawModeChanges = [];
  promptInput.isTTY = true;
  promptInput.isRaw = false;
  promptInput.setRawMode = (isRaw) => {
    rawModeChanges.push(isRaw);
    promptInput.isRaw = isRaw;
    return promptInput;
  };

  const run = runCli(['init'], {
    isInteractive: true,
    packageRoot,
    promptInput,
    promptOutput,
    stderr: stderr.stream,
    stdout: stdout.stream,
  });
  promptInput.end('\u0003');
  const exitCode = await run;

  assert.equal(exitCode, 130);
  assert.deepEqual(rawModeChanges, [true, false]);
  assert.equal(promptInput.isPaused(), true);
  assert.equal(stdout.value(), '');
  assert.equal(stderr.value(), 'Setup cancelled.\n');
});

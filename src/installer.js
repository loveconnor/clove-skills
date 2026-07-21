import {
  constants,
  copyFile,
  lstat,
  mkdir,
  readFile,
  readlink,
  readdir,
  realpath,
  rename,
  rm,
  symlink,
  unlink,
} from 'node:fs/promises';
import path from 'node:path';

const INSTRUCTION_ASSETS = {
  claude: ['CLAUDE.md'],
  codex: [],
  copilot: ['.github/copilot-instructions.md'],
  cursor: [],
  gemini: ['GEMINI.md'],
};

function createInstallResult() {
  return {
    created: [],
    updated: [],
    unchanged: [],
    skipped: [],
    links: [],
    warnings: [],
  };
}

async function getEntry(filePath) {
  try {
    return await lstat(filePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null;
    }

    throw error;
  }
}

function relativeDisplayPath(targetRoot, destination) {
  return path.relative(targetRoot, destination) || '.';
}

async function filesMatch(source, destination) {
  const [sourceContents, destinationContents] = await Promise.all([
    readFile(source),
    readFile(destination),
  ]);
  return sourceContents.equals(destinationContents);
}

async function replaceWithFile(source, destination) {
  const temporaryPath = path.join(
    path.dirname(destination),
    `.${path.basename(destination)}.clove-${process.pid}-${Date.now()}`,
  );

  try {
    await copyFile(source, temporaryPath, constants.COPYFILE_EXCL);
    await rm(destination, { force: true });
    await rename(temporaryPath, destination);
  } catch (error) {
    await rm(temporaryPath, { force: true });
    throw error;
  }
}

async function copyAssetFile({
  source,
  destination,
  targetRoot,
  force,
  dryRun,
  result,
}) {
  const displayPath = relativeDisplayPath(targetRoot, destination);
  const destinationEntry = await getEntry(destination);

  if (!destinationEntry) {
    result.created.push(displayPath);
    if (!dryRun) {
      await copyFile(source, destination, constants.COPYFILE_EXCL);
    }
    return;
  }

  if (destinationEntry.isFile() && (await filesMatch(source, destination))) {
    result.unchanged.push(displayPath);
    return;
  }

  if (!force) {
    result.skipped.push({ path: displayPath, reason: 'already exists with different content' });
    return;
  }

  result.updated.push(displayPath);
  if (dryRun) {
    return;
  }

  if (destinationEntry.isFile()) {
    await replaceWithFile(source, destination);
    return;
  }

  await rm(destination, { force: true, recursive: destinationEntry.isDirectory() });
  await copyFile(source, destination, constants.COPYFILE_EXCL);
}

async function copyAssetTree({
  source,
  destination,
  targetRoot,
  force,
  dryRun,
  result,
}) {
  const sourceEntry = await lstat(source);
  if (!sourceEntry.isDirectory()) {
    throw new Error(`Package asset is not a directory: ${source}`);
  }

  const destinationEntry = await getEntry(destination);
  const displayPath = relativeDisplayPath(targetRoot, destination);

  if (destinationEntry?.isSymbolicLink()) {
    result.skipped.push({ path: displayPath, reason: 'is a symbolic link' });
    return;
  }

  if (destinationEntry && !destinationEntry.isDirectory()) {
    if (!force) {
      result.skipped.push({ path: displayPath, reason: 'is not a directory' });
      return;
    }

    if (dryRun) {
      result.updated.push(displayPath);
      return;
    }

    await rm(destination, { force: true, recursive: true });
  }

  if (!dryRun) {
    await mkdir(destination, { recursive: true });
  }

  const entries = await readdir(source, { withFileTypes: true });
  entries.sort((left, right) => left.name.localeCompare(right.name));

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      await copyAssetTree({
        source: sourcePath,
        destination: destinationPath,
        targetRoot,
        force,
        dryRun,
        result,
      });
      continue;
    }

    if (entry.isFile()) {
      await copyAssetFile({
        source: sourcePath,
        destination: destinationPath,
        targetRoot,
        force,
        dryRun,
        result,
      });
      continue;
    }

    throw new Error(`Unsupported package asset type: ${sourcePath}`);
  }
}

async function createClaudeSkillsLink({
  sourceSkills,
  targetSkills,
  targetRoot,
  force,
  dryRun,
  result,
}) {
  const claudeDirectory = path.join(targetRoot, '.claude');
  const claudeSkills = path.join(claudeDirectory, 'skills');
  const displayPath = relativeDisplayPath(targetRoot, claudeSkills);
  const claudeDirectoryEntry = await getEntry(claudeDirectory);
  let claudeDirectoryWillBeReplaced = false;

  if (claudeDirectoryEntry?.isSymbolicLink()) {
    result.skipped.push({ path: '.claude', reason: 'is a symbolic link' });
    return;
  }

  if (claudeDirectoryEntry && !claudeDirectoryEntry.isDirectory()) {
    if (!force) {
      result.skipped.push({ path: '.claude', reason: 'is not a directory' });
      return;
    }

    if (!dryRun) {
      await rm(claudeDirectory, { force: true, recursive: true });
    } else {
      claudeDirectoryWillBeReplaced = true;
    }
  }

  const skillsEntry = claudeDirectoryWillBeReplaced ? null : await getEntry(claudeSkills);
  if (skillsEntry?.isSymbolicLink()) {
    const currentTarget = path.resolve(path.dirname(claudeSkills), await readlink(claudeSkills));
    if (currentTarget === targetSkills) {
      result.unchanged.push(displayPath);
      return;
    }

    if (!force) {
      result.skipped.push({ path: displayPath, reason: 'links to a different location' });
      return;
    }

    result.updated.push(displayPath);
    if (!dryRun) {
      await unlink(claudeSkills);
    }
  } else if (skillsEntry?.isDirectory()) {
    await copyAssetTree({
      source: sourceSkills,
      destination: claudeSkills,
      targetRoot,
      force,
      dryRun,
      result,
    });
    result.warnings.push(
      'Copied skills into .claude/skills because that directory already exists.',
    );
    return;
  } else if (skillsEntry) {
    if (!force) {
      result.skipped.push({ path: displayPath, reason: 'already exists and is not a directory' });
      return;
    }

    result.updated.push(displayPath);
    if (!dryRun) {
      await rm(claudeSkills, { force: true, recursive: true });
    }
  } else {
    result.created.push(displayPath);
  }

  if (dryRun) {
    result.links.push(displayPath);
    return;
  }

  await mkdir(claudeDirectory, { recursive: true });
  const relativeTarget = path.relative(claudeDirectory, targetSkills);

  try {
    await symlink(relativeTarget, claudeSkills, 'dir');
    result.links.push(displayPath);
  } catch (error) {
    if (!['EPERM', 'EACCES', 'ENOTSUP', 'UNKNOWN'].includes(error.code)) {
      throw error;
    }

    await copyAssetTree({
      source: sourceSkills,
      destination: claudeSkills,
      targetRoot,
      force,
      dryRun: false,
      result,
    });
    result.warnings.push(
      'This system could not create a Claude skills link, so Clove copied the skills instead.',
    );
  }
}

function instructionAssetsFor(agents) {
  return [
    'AGENTS.md',
    ...new Set(agents.flatMap((agent) => INSTRUCTION_ASSETS[agent.id])),
  ];
}

async function prepareAssetParent({
  destination,
  targetRoot,
  force,
  dryRun,
  result,
}) {
  const parent = path.dirname(destination);
  const parentEntry = await getEntry(parent);

  if (!parentEntry) {
    if (!dryRun) {
      await mkdir(parent, { recursive: true });
    }
    return true;
  }

  if (parentEntry.isDirectory()) {
    return true;
  }

  const displayPath = relativeDisplayPath(targetRoot, destination);
  if (parentEntry.isSymbolicLink()) {
    result.skipped.push({ path: displayPath, reason: 'its parent directory is a symbolic link' });
    return false;
  }

  if (!force) {
    result.skipped.push({ path: displayPath, reason: 'its parent path is not a directory' });
    return false;
  }

  if (dryRun) {
    result.updated.push(displayPath);
    return false;
  }

  await rm(parent, { force: true, recursive: true });
  await mkdir(parent, { recursive: true });
  return true;
}

export async function installClove({
  agents,
  packageRoot,
  targetDirectory,
  force = false,
  dryRun = false,
}) {
  if (!Array.isArray(agents) || agents.length === 0) {
    throw new Error('Choose at least one agent.');
  }

  const targetEntry = await getEntry(targetDirectory);
  if (!targetEntry) {
    throw new Error(`Project directory does not exist: ${targetDirectory}`);
  }
  if (!targetEntry.isDirectory()) {
    throw new Error(`Project path is not a directory: ${targetDirectory}`);
  }

  const targetRoot = await realpath(targetDirectory);
  const result = createInstallResult();
  const sourceSkills = path.join(packageRoot, '.agents', 'skills');
  const targetSkills = path.join(targetRoot, '.agents', 'skills');

  const isSkillsParentReady = await prepareAssetParent({
    destination: targetSkills,
    targetRoot,
    force,
    dryRun,
    result,
  });
  const targetSkillsEntry = isSkillsParentReady ? await getEntry(targetSkills) : null;
  const canUseCanonicalSkills =
    isSkillsParentReady &&
    (!targetSkillsEntry ||
      targetSkillsEntry.isDirectory() ||
      (force && !targetSkillsEntry.isSymbolicLink()));
  if (isSkillsParentReady) {
    await copyAssetTree({
      source: sourceSkills,
      destination: targetSkills,
      targetRoot,
      force,
      dryRun,
      result,
    });
  }

  for (const asset of instructionAssetsFor(agents)) {
    const source = path.join(packageRoot, asset);
    const destination = path.join(targetRoot, asset);
    const isParentReady = await prepareAssetParent({
      destination,
      targetRoot,
      force,
      dryRun,
      result,
    });
    if (!isParentReady) continue;

    await copyAssetFile({
      source,
      destination,
      targetRoot,
      force,
      dryRun,
      result,
    });
  }

  if (agents.some((agent) => agent.id === 'claude') && canUseCanonicalSkills) {
    await createClaudeSkillsLink({
      sourceSkills,
      targetSkills,
      targetRoot,
      force,
      dryRun,
      result,
    });
  } else if (agents.some((agent) => agent.id === 'claude')) {
    result.skipped.push({
      path: '.claude/skills',
      reason: 'the canonical .agents/skills path could not be installed safely',
    });
  }

  return { ...result, targetRoot };
}

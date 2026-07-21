import { emitKeypressEvents } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
import {
  AGENTS,
  formatAgentList,
  parseAgentSelection,
} from './agents.js';
import { installClove } from './installer.js';

const PACKAGE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const HELP = `Clove Agent Skills

Usage:
  clove-skills init [project-directory] [options]

Options:
  -a, --agent <names>  Agents to configure, separated by commas
                       codex, claude, cursor, gemini, copilot, or all
  -f, --force          Replace conflicting Clove files
  -n, --dry-run        Show what would change without writing files
  -h, --help           Show help
  -v, --version        Show the package version

Examples:
  npx clove-skills init
  npx clove-skills init --agent codex,claude
  npx clove-skills init ../my-project --agent cursor
`;

function parseArguments(argumentsList) {
  const options = {
    agents: null,
    command: null,
    dryRun: false,
    force: false,
    help: false,
    targetDirectory: '.',
    version: false,
  };
  const positionals = [];

  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index];

    if (argument === '--help' || argument === '-h') {
      options.help = true;
    } else if (argument === '--version' || argument === '-v') {
      options.version = true;
    } else if (argument === '--force' || argument === '-f') {
      options.force = true;
    } else if (argument === '--dry-run' || argument === '-n') {
      options.dryRun = true;
    } else if (argument === '--agent' || argument === '-a') {
      const value = argumentsList[index + 1];
      if (!value || value.startsWith('-')) {
        throw new Error(`${argument} needs an agent name.`);
      }
      options.agents = value;
      index += 1;
    } else if (argument.startsWith('--agent=')) {
      options.agents = argument.slice('--agent='.length);
    } else if (argument.startsWith('-')) {
      throw new Error(`Unknown option: ${argument}`);
    } else {
      positionals.push(argument);
    }
  }

  options.command = positionals.shift() ?? null;
  options.targetDirectory = positionals.shift() ?? '.';
  if (positionals.length > 0) {
    throw new Error(`Unexpected argument: ${positionals[0]}`);
  }

  return options;
}

function renderAgentChoices({
  promptOutput,
  focusedIndex,
  selectedAgentIds,
  validationMessage,
  hasRendered,
}) {
  const renderedLineCount = AGENTS.length + 1;
  if (hasRendered) {
    promptOutput.write(`\u001B[${renderedLineCount}A`);
  }

  AGENTS.forEach((agent, index) => {
    const cursor = index === focusedIndex ? '›' : ' ';
    const checkbox = selectedAgentIds.has(agent.id) ? '[x]' : '[ ]';
    promptOutput.write(`\u001B[2K\r${cursor} ${checkbox} ${agent.label}\n`);
  });

  const status =
    validationMessage ||
    `${selectedAgentIds.size} agent${selectedAgentIds.size === 1 ? '' : 's'} selected`;
  promptOutput.write(`\u001B[2K\r${status}\n`);
}

async function promptForAgents({ promptInput = input, promptOutput = output } = {}) {
  promptOutput.write('Which agents should Clove set up?\n');
  promptOutput.write('Use Up/Down to move, Space to select, and Enter to continue.\n\n');

  emitKeypressEvents(promptInput);
  const wasRaw = promptInput.isRaw ?? false;
  if (promptInput.isTTY && typeof promptInput.setRawMode === 'function') {
    promptInput.setRawMode(true);
  }
  promptInput.resume?.();

  return new Promise((resolve, reject) => {
    let focusedIndex = 0;
    let hasRendered = false;
    let validationMessage = '';
    const selectedAgentIds = new Set();

    const render = () => {
      renderAgentChoices({
        promptOutput,
        focusedIndex,
        selectedAgentIds,
        validationMessage,
        hasRendered,
      });
      hasRendered = true;
    };

    const cleanup = () => {
      promptInput.removeListener('keypress', handleKeypress);
      promptInput.removeListener('end', handleEnd);
      promptInput.removeListener('error', handleError);
      if (promptInput.isTTY && typeof promptInput.setRawMode === 'function') {
        promptInput.setRawMode(wasRaw);
      }
      promptInput.pause?.();
    };

    const finish = (agents) => {
      cleanup();
      promptOutput.write('\n');
      resolve(agents);
    };

    const fail = (error) => {
      cleanup();
      reject(error);
    };

    function handleKeypress(_character, key = {}) {
      if (key.ctrl && key.name === 'c') {
        const error = new Error('Setup cancelled.');
        error.code = 'USER_CANCELLED';
        fail(error);
        return;
      }

      if (key.name === 'up') {
        focusedIndex = (focusedIndex - 1 + AGENTS.length) % AGENTS.length;
        validationMessage = '';
        render();
        return;
      }

      if (key.name === 'down') {
        focusedIndex = (focusedIndex + 1) % AGENTS.length;
        validationMessage = '';
        render();
        return;
      }

      if (key.name === 'space') {
        const agentId = AGENTS[focusedIndex].id;
        if (selectedAgentIds.has(agentId)) {
          selectedAgentIds.delete(agentId);
        } else {
          selectedAgentIds.add(agentId);
        }
        validationMessage = '';
        render();
        return;
      }

      if (key.name === 'return' || key.name === 'enter') {
        if (selectedAgentIds.size === 0) {
          validationMessage = 'Select at least one agent to continue.';
          render();
          return;
        }

        finish(AGENTS.filter((agent) => selectedAgentIds.has(agent.id)));
      }
    }

    function handleEnd() {
      fail(new Error('Input ended before an agent was selected.'));
    }

    function handleError(error) {
      fail(error);
    }

    promptInput.on('keypress', handleKeypress);
    promptInput.once('end', handleEnd);
    promptInput.once('error', handleError);
    render();
  });
}

function countChangedFiles(result) {
  return result.created.length + result.updated.length;
}

function printResult({ result, agents, dryRun, stdout }) {
  const action = dryRun ? 'Would configure' : 'Configured';
  stdout.write(`${action} Clove for ${formatAgentList(agents)} in ${result.targetRoot}.\n`);
  stdout.write(
    `${result.created.length} created, ${result.updated.length} updated, ` +
      `${result.unchanged.length} unchanged, ${result.skipped.length} skipped.\n`,
  );

  if (result.links.length > 0) {
    stdout.write(`Claude skill link: ${result.links.join(', ')}.\n`);
  }

  for (const warning of result.warnings) {
    stdout.write(`Note: ${warning}\n`);
  }

  if (result.skipped.length > 0) {
    stdout.write('\nKept existing files:\n');
    for (const item of result.skipped.slice(0, 10)) {
      stdout.write(`  ${item.path} — ${item.reason}\n`);
    }
    if (result.skipped.length > 10) {
      stdout.write(`  …and ${result.skipped.length - 10} more.\n`);
    }
    stdout.write('Run again with --force only if you want to replace these conflicts.\n');
  } else if (countChangedFiles(result) === 0) {
    stdout.write('Clove is already up to date.\n');
  }
}

async function packageVersion(packageRoot) {
  const packageJson = JSON.parse(await readFile(path.join(packageRoot, 'package.json'), 'utf8'));
  return packageJson.version;
}

export async function runCli(
  argumentsList,
  {
    cwd = process.cwd(),
    isInteractive = input.isTTY && output.isTTY,
    packageRoot = PACKAGE_ROOT,
    promptInput = input,
    promptOutput = output,
    stderr = process.stderr,
    stdout = output,
  } = {},
) {
  try {
    const options = parseArguments(argumentsList);

    if (options.version) {
      stdout.write(`${await packageVersion(packageRoot)}\n`);
      return 0;
    }

    if (options.help) {
      stdout.write(HELP);
      return 0;
    }

    if (options.command !== 'init') {
      throw new Error(
        options.command
          ? `Unknown command: ${options.command}. Use "clove-skills init".`
          : 'Missing command. Use "clove-skills init".',
      );
    }

    let agents;
    if (options.agents) {
      agents = parseAgentSelection(options.agents);
    } else if (isInteractive) {
      agents = await promptForAgents({ promptInput, promptOutput });
    } else {
      throw new Error(
        'No agent selected. Pass --agent codex, claude, cursor, gemini, copilot, or all.',
      );
    }

    const result = await installClove({
      agents,
      packageRoot,
      targetDirectory: path.resolve(cwd, options.targetDirectory),
      force: options.force,
      dryRun: options.dryRun,
    });

    printResult({ result, agents, dryRun: options.dryRun, stdout });
    return result.skipped.length > 0 ? 2 : 0;
  } catch (error) {
    if (error.code === 'USER_CANCELLED') {
      stderr.write('Setup cancelled.\n');
      return 130;
    }
    stderr.write(`Clove could not finish: ${error.message}\n`);
    stderr.write('Run "clove-skills --help" for usage.\n');
    return 1;
  }
}

export const AGENTS = [
  {
    id: 'codex',
    label: 'OpenAI Codex',
    aliases: ['openai'],
  },
  {
    id: 'claude',
    label: 'Claude Code',
    aliases: ['claude-code'],
  },
  {
    id: 'cursor',
    label: 'Cursor',
    aliases: [],
  },
  {
    id: 'gemini',
    label: 'Gemini CLI',
    aliases: ['gemini-cli'],
  },
  {
    id: 'copilot',
    label: 'GitHub Copilot',
    aliases: ['github-copilot', 'github'],
  },
];

const AGENT_BY_NAME = new Map(
  AGENTS.flatMap((agent) => [agent.id, ...agent.aliases].map((name) => [name, agent])),
);

export function parseAgentSelection(input) {
  const names = input
    .split(',')
    .map((name) => name.trim().toLowerCase())
    .filter(Boolean);

  if (names.length === 0) {
    throw new Error('Choose at least one agent.');
  }

  if (names.includes('all')) {
    if (names.length > 1) {
      throw new Error('Use "all" by itself.');
    }

    return AGENTS;
  }

  const selectedAgents = [];
  const unknownNames = [];

  for (const name of names) {
    const agent = AGENT_BY_NAME.get(name);
    if (!agent) {
      unknownNames.push(name);
      continue;
    }

    if (!selectedAgents.includes(agent)) {
      selectedAgents.push(agent);
    }
  }

  if (unknownNames.length > 0) {
    throw new Error(
      `Unknown agent${unknownNames.length === 1 ? '' : 's'}: ${unknownNames.join(', ')}.`,
    );
  }

  return selectedAgents;
}

export function formatAgentList(agents) {
  if (agents.length === 1) {
    return agents[0].label;
  }

  if (agents.length === 2) {
    return `${agents[0].label} and ${agents[1].label}`;
  }

  return `${agents
    .slice(0, -1)
    .map((agent) => agent.label)
    .join(', ')}, and ${agents.at(-1).label}`;
}

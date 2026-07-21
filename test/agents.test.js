import assert from 'node:assert/strict';
import test from 'node:test';
import { parseAgentSelection } from '../src/agents.js';

test('parses agent names and aliases without duplicates', () => {
  const agents = parseAgentSelection('codex, openai, claude-code');
  assert.deepEqual(
    agents.map((agent) => agent.id),
    ['codex', 'claude'],
  );
});

test('selects all supported agents', () => {
  assert.deepEqual(
    parseAgentSelection('all').map((agent) => agent.id),
    ['codex', 'claude', 'cursor', 'gemini', 'copilot'],
  );
});

test('rejects unknown agent names', () => {
  assert.throws(() => parseAgentSelection('codex,robot'), /Unknown agent: robot/);
});

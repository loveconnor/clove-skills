# Clove Agent Skills

Clove is a platform-neutral library of reusable [Agent Skills](https://agentskills.io) for product design, content, research, accessibility, engineering, and cross-disciplinary product work.

Each skill uses the open `SKILL.md` format. The canonical library lives in [`.agents/skills`](.agents/skills); vendor-specific files only provide discovery or interface compatibility and never change a skill's core instructions.

## Supported agents

Support was checked against official documentation on July 20, 2026.

| Agent | Repository instructions | Skill discovery in this repository |
|---|---|---|
| OpenAI Codex | [`AGENTS.md`](AGENTS.md) | `.agents/skills` |
| Claude Code | [`CLAUDE.md`](CLAUDE.md) imports `AGENTS.md` | `.claude/skills` links to `.agents/skills` |
| Cursor | [`AGENTS.md`](AGENTS.md) | `.agents/skills` |
| Gemini CLI | [`GEMINI.md`](GEMINI.md) imports `AGENTS.md` | `.agents/skills` |
| GitHub Copilot | [`AGENTS.md`](AGENTS.md) plus [`.github/copilot-instructions.md`](.github/copilot-instructions.md) | `.agents/skills` |

Other agents can use the library when they support the [Agent Skills specification](https://agentskills.io/specification). If an agent does not scan `.agents/skills`, copy or link the selected skill directory into that agent's project or personal skills directory.

The compatibility files follow each tool's documented conventions: [Claude Code project memory and skills](https://code.claude.com/docs/en/memory), Cursor's [`AGENTS.md` rules](https://docs.cursor.com/context/rules-for-ai) and [Agent Skills](https://cursor.com/docs/skills), [Gemini CLI context and skill aliases](https://geminicli.com/docs/cli/skills/), and [GitHub Copilot instructions and skills](https://docs.github.com/en/copilot/reference/customization-cheat-sheet).

## What a skill contains

Each skill directory includes:

- `SKILL.md`, with the portable name, trigger description, and working instructions;
- `references/`, with supporting research or detailed guidance loaded only when needed;
- `agents/openai.yaml`, when present, with optional Codex interface labels and a starter prompt.

`agents/openai.yaml` is intentionally the only vendor YAML in a skill. It is an OpenAI interface extension, not part of the Agent Skills standard. Claude Code, Cursor, Gemini CLI, and GitHub Copilot read `SKILL.md` directly and do not define equivalent per-skill vendor YAML files.

## Available skills

- [`accessibility`](.agents/skills/accessibility) — design and verify accessible interfaces against WCAG 2.2 AA and real assistive-use conditions.
- [`adhd`](.agents/skills/adhd) — explore consequential open-ended decisions through isolated divergent ideas and structured convergence.
- [`analytics`](.agents/skills/analytics) — design trustworthy product analytics, instrumentation, experiments, and interpretation.
- [`anti-slop`](.agents/skills/anti-slop) — prevent generic, fabricated, incomplete, or inaccessible AI-assisted product work.
- [`audit`](.agents/skills/audit) — return a read-only, evidence-backed product or interface audit.
- [`awardify`](.agents/skills/awardify) — transform an existing site into a distinctive, coherent, deeply finished experience.
- [`clean-code`](.agents/skills/clean-code) — implement and review correct, secure, testable, diagnosable code.
- [`clear-writing`](.agents/skills/clear-writing) — create accurate, plain, inclusive, accessible content and documentation.
- [`color`](.agents/skills/color) — design and audit semantic color systems, themes, states, charts, and contrast.
- [`craft`](.agents/skills/craft) — refine visual hierarchy, composition, spacing, interaction quality, and polish.
- [`creative-web`](.agents/skills/creative-web) — build distinctive expressive web experiences and interactive narratives.
- [`icons`](.agents/skills/icons) — design and implement accessible, maintainable SVG icon systems.
- [`marketing`](.agents/skills/marketing) — develop evidence-based positioning, messaging, go-to-market work, and measurement.
- [`research`](.agents/skills/research) — frame questions, verify evidence, resolve contradictions, and synthesize defensible answers.
- [`security-privacy`](.agents/skills/security-privacy) — design secure, privacy-respecting systems and recovery.
- [`seo`](.agents/skills/seo) — improve public-web discovery, structured content, and answer-engine visibility.
- [`testing`](.agents/skills/testing) — build risk-based test strategy and credible release evidence.
- [`typography`](.agents/skills/typography) — choose and implement readable, expressive, accessible typography systems.
- [`ux`](.agents/skills/ux) — design flows and interactions around user goals, comprehension, accessibility, and recovery.

## Using a skill

1. Start the agent in this repository and confirm it discovered the skills.
2. Name a skill explicitly, such as `$accessibility`, or ask for work that matches its description.
3. The agent reads the complete `SKILL.md` and only the research relevant to the task.
4. Follow the skill's clarification, implementation, and verification requirements.

For Claude Code, the checked-in `.claude/skills` link exposes the same canonical directories without maintaining a second copy. On Windows, enable Git symlink support when cloning or copy the selected directories from `.agents/skills` to `.claude/skills`.

## Repository guidance

[`AGENTS.md`](AGENTS.md) defines the shared mission, skill router, clarification gate, workflow, verification standards, and definition of done. The Claude, Gemini, and Copilot files are small adapters that point back to it, so repository policy has one owner.

When adding or revising a skill:

1. Keep the scope specific and the instructions platform-neutral.
2. Put all trigger conditions in the `description` frontmatter.
3. Keep vendor tool names out of the core workflow unless the skill genuinely depends on that vendor.
4. Add optional vendor metadata only when the vendor documents and consumes that format.
5. Validate the skill against the Agent Skills specification and test it in every agent whose behavior changed.

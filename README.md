# Clove skills

Clove is a repository of reusable skills for Codex agents. Each skill provides focused guidance, research references, and—where useful—agent configuration for a particular type of product, design, content, or engineering work.

The repository is intended for contributors who are creating, improving, or applying these skills. It is not a standalone application and does not currently define a build, test, or package-install workflow.

## What is included

The skills cover:

- **Product and interface design:** avoiding generic AI-generated design, user-centered UX, visual direction, typography, color systems, and creative web experiences.
- **Content and discoverability:** clear readable content and search engine and answer engine optimization.
- **Engineering:** clean, maintainable code practices.

Each skill lives in its own directory under [`.agents/skills`](.agents/skills). Most skills include:

- `SKILL.md`, the instructions an agent follows;
- `references/research.md`, supporting research and practical guidance;
- `agents/openai.yaml`, agent-specific configuration.

## Available skills

- [`avoid-ai-design-slop`](.agents/skills/avoid-ai-design-slop) — prevent generic, fabricated, incomplete, or inaccessible AI-assisted product work.
- [`build-color-systems`](.agents/skills/build-color-systems) — design and audit semantic color systems, themes, states, charts, and contrast.
- [`build-typography-systems`](.agents/skills/build-typography-systems) — choose and implement readable, expressive, accessible typography systems.
- [`craft-design-look-and-feel`](.agents/skills/craft-design-look-and-feel) — refine visual hierarchy, composition, spacing, interaction quality, and polish.
- [`create-creative-web-design`](.agents/skills/create-creative-web-design) — build distinctive expressive web experiences and interactive narratives.
- [`design-user-centered-ux`](.agents/skills/design-user-centered-ux) — design flows and interactions around user goals, comprehension, accessibility, and recovery.
- [`optimize-seo-aeo`](.agents/skills/optimize-seo-aeo) — improve public-web discovery, structured content, and answer-engine visibility.
- [`write-clean-maintainable-code`](.agents/skills/write-clean-maintainable-code) — implement and review correct, secure, testable, diagnosable code.
- [`write-clear-readable-content`](.agents/skills/write-clear-readable-content) — create accurate, plain, inclusive, accessible content and documentation.

## Using a skill

1. Identify the skill or combination of skills that matches the work.
2. Read the complete `SKILL.md` before taking action.
3. Read only the linked research sections needed for the task.
4. Follow the skill’s workflow, including clarification, verification, and testing requirements.
5. Keep project-specific assumptions, evidence, and unresolved risks visible.

For work that crosses disciplines, combine the smallest set of skills that fully covers the task. The repository’s [`.agents/skills/`](.agents/skills) directory is the source of truth for the available skill instructions.

## Repository guidance

[`AGENTS.md`](AGENTS.md) defines the repository’s mission, instruction order, skill-selection rules, clarification gate, implementation workflow, verification standards, and definition of done. Read it before making changes.

In particular, contributors should:

- inspect the repository and establish the available evidence before editing;
- ask before making a consequential assumption that could change the result;
- preserve existing work that is unrelated to the requested change;
- verify claims, behavior, accessibility, and implementation quality in proportion to risk;
- remove fabricated, placeholder, speculative, or unused material before handoff.

## Contributing a skill

When adding or revising a skill, keep its scope specific and its instructions actionable. Document the intended audience, task, evidence, workflow, constraints, and verification expectations. Add research references when the skill depends on deeper guidance, and update the skill’s configuration when required.

Before considering a change complete, review it against `AGENTS.md`, check links and file paths, and confirm that every documented capability matches the files in the repository.


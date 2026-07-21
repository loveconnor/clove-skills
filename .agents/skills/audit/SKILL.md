---
name: audit
description: "Audit websites, web applications, product interfaces, pages, flows, components, design systems, or implementation quality across purpose, workability, information architecture, visual hierarchy, readability, typography, color, interaction states, motion, responsive behavior, accessibility, performance, resilience, content, and maintainability. Use when the user asks to audit, evaluate, assess, review, critique, inspect, score, benchmark, QA, or identify problems and priorities in an existing interface. This skill is strictly read-only: never modify code, files, content, configuration, dependencies, tests, snapshots, data, or external state; return the audit in the response only."
---

# Audit

## Operating principle

Audit the real experience, not only the screenshot. Report evidence, user impact, severity, confidence, and a testable recommendation. Keep preference, heuristics, measured facts, standards failures, and unverified hypotheses distinct.

This skill is strictly read-only. Never modify the evaluated product or any local or external state. Return the audit in the response only.

If a request combines auditing with fixing, perform only the audit while this skill is active. Recommend repairs and explain how to verify them, but do not implement them. Treat remediation as a separate follow-up task that requires an appropriate implementation skill.

## Read-only boundary

Use inspection and non-mutating diagnostics only.

Allowed:

- read source, files, rendered pages, available logs, analytics, test output, and project documentation;
- navigate interfaces without committing actions that alter real data or account state;
- run commands only when they do not write to the project, change dependencies, update snapshots, format files, apply fixes, or mutate an external system;
- collect evidence and return the audit directly in the response.

Forbidden:

- create, edit, rename, move, or delete code, content, configuration, tests, snapshots, documentation, audit artifacts, or any other file;
- run formatters, autofixers, generators, migrations, installers, updates, builds, or test modes that write files or caches into the project;
- submit forms or invoke actions that create, update, delete, publish, deploy, purchase, send, commit, push, or otherwise change data or external state;
- change persistent browser, device, account, permission, feature-flag, or environment settings; transient viewport or accessibility emulation is allowed when it cannot alter product data;
- create a Markdown, PDF, ticket, comment, or other persisted copy of the audit.

When a useful check would require mutation, do not perform it. Mark that dimension untested, explain the constraint, and describe the non-production test setup or permission needed to verify it safely.

## Load the research

Read `references/research.md` completely for a substantial, cross-dimensional, unfamiliar, or high-risk audit.

For a narrowly scoped audit, load the relevant sections and the reporting model. Search by heading or topic:

```sh
rg -n '^## ' references/research.md
rg -n 'workability|critical path|state|error|recovery|navigation' references/research.md
rg -n 'hierarchy|composition|spacing|imagery|consistency' references/research.md
rg -n 'typography|legibility|readability|line measure|font' references/research.md
rg -n 'color|contrast|theme|forced colors' references/research.md
rg -n 'motion|animation|reduced motion|frame|scroll|drag' references/research.md
rg -n 'responsive|reflow|keyboard|screen reader|accessib' references/research.md
rg -n 'performance|Core Web Vitals|resilience|implementation' references/research.md
rg -n 'severity|confidence|finding template|reporting|maturity' references/research.md
```

Re-verify time-sensitive standards, browser behavior, performance thresholds, tool capabilities, and legal requirements against authoritative current sources before presenting them as current facts.

## Clarify scope before judging

Inspect available project context first. Establish or explicitly mark unknown:

- the target product, routes, flows, components, environment, and roles;
- intended users, knowledge, abilities, languages, context, and access needs;
- primary jobs and critical paths;
- business or communication outcomes;
- supported devices, browsers, inputs, and connection conditions;
- authoritative content, design system, analytics, research, and known defects;
- required standards and risk level;
- requested audit depth and output format.

Ask the user when a missing answer would materially change the scope, severity, recommendation, or definition of done. Continue only with observations that do not depend on the unresolved choice.

## Match the method to the artifact

State what evidence is available and do not exceed it:

- **Screenshot or static design:** assess visible composition, hierarchy, typography, color, density, consistency, and obvious content issues. Do not claim runtime, responsive, keyboard, screen-reader, animation-performance, or task behavior was tested.
- **Running interface:** inspect critical paths, states, focus, responsive behavior, motion, loading, failure, and runtime performance using representative conditions. Stop before any action that would commit a mutation. If a path cannot be tested without changing state, report the verification gap.
- **Source code:** inspect semantics, source order, tokens, components, dependencies, error paths, fallbacks, and likely implementation risks. Verify consequential runtime claims in the running product when possible.
- **Automated output:** treat it as detectable evidence, not proof of accessibility, usability, comprehension, or complete conformance.
- **Analytics or research:** report population, date, context, sample, limitations, and whether the evidence supports behavior, causation, or only correlation.

If the user asks for a complete audit but provides only a screenshot, return the useful visual review plus a verification plan for the missing dimensions.

## Workflow

### 1. Define the audit contract

Record:

- scope and exclusions;
- intended users and critical paths;
- environments and conditions available for testing;
- standards and source of truth;
- audit-only boundary;
- evidence required for completion.

### 2. Establish the truth packet

Identify real content, claims, permissions, states, domain rules, risks, dependencies, and expected outcomes. Do not invent users, tasks, metrics, product behavior, or business priorities.

### 3. Inspect the product in risk order

Audit in this order unless the request is deliberately narrower:

1. truth, purpose, and critical paths;
2. workability, state, feedback, errors, recovery, and continuity;
3. structure, navigation, semantics, and source order;
4. visual hierarchy, composition, spacing, density, and imagery;
5. typography and content readability;
6. color, contrast, semantic states, and themes;
7. motion, animation, interaction, control, safety, and runtime cost;
8. responsive and adaptive behavior;
9. accessibility through automated and manual checks;
10. performance, resilience, and progressive enhancement;
11. design-system and implementation quality;
12. coherence, specificity, and depth of finish.

Do a broad first pass to identify blockers and systemic patterns. Then make a detailed pass. Do not bury major failures beneath a long list of cosmetic defects.

### 4. Stress representative conditions

Select combinations that match the product and risk:

- narrow mobile, tablet, laptop, desktop, wide, portrait, landscape, and split screen;
- keyboard, touch, pointer, screen reader, and alternate input where relevant;
- 200% text resize, 400% zoom/reflow, increased text spacing, reduced motion, dark mode, and forced colors;
- short, long, missing, translated, user-generated, and unbroken content;
- first-use, loading, empty, partial, success, warning, error, stale, offline, denied, expired, and interrupted states;
- direct links, back/forward, refresh, resume, repeated input, and duplicate submission;
- slow network, lower-powered hardware, and failed optional enhancements.

Record what was actually tested. Never imply coverage from a checklist alone.

### 5. Classify evidence

Label each finding with one or more of:

- **Observed:** directly reproduced.
- **Measured:** supported by recorded values or tool output.
- **Standards-based:** mapped to a named requirement.
- **Research-supported:** consistent with applicable published evidence.
- **Heuristic:** expert judgment requiring validation when consequential.
- **User-observed:** seen in a defined research session.
- **Analytics-supported:** visible in representative telemetry.
- **Unknown:** required evidence is unavailable.

Do not write “users will” when the evidence only supports “users may.” Do not convert preference into performance evidence.

### 6. Assign severity and confidence separately

Use severity to describe user and product harm:

- **Critical:** blocks a critical path, creates serious harm, causes an unrecoverable action, exposes sensitive information, or excludes a substantial user group from core content.
- **High:** creates likely failure, exclusion, major misunderstanding, severe friction, or loss of work in an important path.
- **Medium:** causes repeated confusion, delay, mistrust, or a secondary-path failure with a discoverable workaround.
- **Low:** creates a localized craft or consistency defect with limited task impact.

Consider impact, reach, frequency, persistence, recoverability, task criticality, and risk. Difficulty of implementation does not reduce severity.

Use confidence to describe evidence strength:

- **High:** reproduced, measured, standards-mapped, or repeatedly observed.
- **Medium:** strong heuristic or source evidence with incomplete runtime or user verification.
- **Low:** plausible hypothesis requiring user, analytics, domain, device, or production evidence.

Report a potentially severe low-confidence issue as an urgent verification need, not as a confirmed failure.

### 7. Write causal findings

Each finding must include:

- concise problem statement;
- severity and confidence;
- evidence type;
- precise location;
- test conditions;
- affected user or critical path;
- what happens;
- why it matters;
- applicable standard or principle;
- concrete recommendation;
- how to verify the repair.

Avoid vague findings such as “the typography feels off” or “there is too much animation.” Name the observed setting or behavior, consequence, repair direction, and verification.

### 8. Preserve strengths

Record positive patterns worth keeping when they are supported by evidence. Explain the principle they demonstrate so remediation does not accidentally remove them.

### 9. Report limits

State routes, roles, devices, states, assistive technologies, browsers, source files, analytics, production conditions, or research populations not evaluated. Do not claim compliance, user validation, field performance, or cross-platform behavior without performing the relevant work.

## Dimension guidance

### Purpose, truth, and content

- Confirm the interface states what it is, whom it serves, what matters, and what happens next.
- Verify public claims, prices, dates, media, evidence, and system behavior.
- Test whether the intended audience can find, understand, and act.
- Treat readability formulas as weak surface signals, not comprehension proof.

### Workability and interaction

- Walk critical tasks end to end without privileged knowledge.
- Inspect affordance, status, feedback, error prevention, diagnosis, recovery, work preservation, interruption, and resume.
- Cover realistic component and system states rather than only the happy path.
- Verify links, buttons, forms, navigation, history, deep links, permissions, and failure behavior.

### Visual design

- Test attention order, grouping, grid logic, alignment, rhythm, density, focal points, and section transitions.
- Use glance, five-second, blur/squint, grayscale, thumbnail, and content-stress methods only for the claims they can support.
- Distinguish coherent variation from inconsistency and meaningful whitespace from empty space.
- Evaluate whether imagery, icons, illustration, and material support the product rather than decorate it generically.

### Typography and readability

- Separate legibility, sustained readability, hierarchy, and voice.
- Inspect typeface suitability, body settings, measure, line height, alignment, contrast, links, numerals, glyph coverage, responsive scaling, and font loading.
- Test long and translated content, fallback fonts, 200% text resize, 400% zoom/reflow, and user text-spacing overrides.
- Treat numeric typography ranges as starting hypotheses, never universal conformance rules.

### Color and themes

- Inventory semantic roles and interaction states.
- Measure rendered contrast against actual adjacent backgrounds across gradients, overlays, imagery, and states.
- Verify meaning does not depend on color alone.
- Test light, dark, and forced-color behavior; do not treat dark mode as inversion.

### Motion and animation

- Inventory triggers, purpose, information, timing, easing, interruption, fallback, reduced-motion behavior, input alternatives, and runtime cost.
- Reject motion that delays content, hides state, breaks orientation, competes with reading, or recreates harmful effects under reduced motion.
- Test autoplay controls, flashing, parallax, drag alternatives, repeated input, keyboard/touch equivalence, and enhancement failure.
- Measure frames, long tasks, layout, paint, compositing, memory, and device behavior before making performance claims.

### Responsive behavior and accessibility

- Verify content priority and task continuity across space, orientation, input, zoom, text settings, preferences, and capability.
- Combine automated checks with keyboard, focus, reflow, contrast, semantic-structure, dynamic-update, screen-reader, reduced-motion, and forced-color evaluation.
- Treat standards conformance and usability as related but different questions.
- Record the exact assistive-technology, browser, platform, route, state, and task tested.

### Performance, resilience, and implementation

- Separate field evidence from controlled lab evidence.
- Measure representative page types and critical interactions, not only the homepage.
- Inspect delivery, main-thread work, media, fonts, third parties, hydration, layout stability, long sessions, cleanup, and optional-layer failure.
- Prefer semantic HTML, native controls, clear component ownership, semantic tokens, explicit states, progressive enhancement, and tests for observable behavior.
- Do not recommend abstraction merely because two objects look similar; extract stable shared concepts or policies.

## Reporting format

Lead with the outcome. Use this order:

1. **Scope and evidence:** target, users, critical paths, environment, methods, and exclusions.
2. **Executive assessment:** the dominant pattern and its consequence.
3. **Top three priorities:** the highest-impact repairs in dependency order.
4. **Findings:** ordered by severity, then reach and dependency.
5. **Strengths to preserve:** supported positive patterns.
6. **Dimension summary:** separate maturity assessments when useful; never average them into false precision.
7. **Verification gaps:** what remains untested and what evidence is needed.

Use this finding structure:

```md
### [Problem and consequence]

- Severity: Critical | High | Medium | Low
- Confidence: High | Medium | Low
- Evidence: Observed | Measured | Standards-based | Research-supported | Heuristic | User-observed | Analytics-supported | Unknown
- Location: [route > section > component or file:line]
- Conditions: [browser, viewport, input, state, preference, data]
- Affected path: [user goal]

What happens:
[Reproducible observation]

Why it matters:
[User and product impact]

Standard or principle:
[Named requirement or evaluation principle]

Recommendation:
[Concrete repair direction]

Verification:
[Specific retest]
```

## Non-compensable gates

Never describe an interface as high quality while any applicable condition remains:

- a critical path is broken, deceptive, or unsafe;
- core content or controls are unavailable through required inputs;
- focus is lost, invisible, trapped, or obscured in an important path;
- required information depends only on color, motion, sound, hover, drag, or pointer precision;
- motion creates an unmitigated safety risk;
- destructive, privacy-sensitive, financial, or other material consequences are unclear;
- important input or progress is lost without recovery;
- severe responsive or reflow failure blocks use;
- performance prevents the core experience from becoming usable;
- content, proof, or behavior is materially false;
- a fragile enhancement carries core meaning without a workable fallback.

## Final audit check

Before returning the report, verify:

- the most serious findings appear first;
- every finding has evidence, impact, recommendation, and verification;
- severity and confidence are separate;
- measured facts and hypotheses are labeled correctly;
- positive patterns are preserved;
- no tool score is presented as complete proof;
- no unperformed test is claimed;
- no local file, code, content, configuration, dependency, test, snapshot, data, persistent browser setting, account, or external state was modified;
- the audit in the response is the only deliverable;
- the reader can identify the next decision or action.

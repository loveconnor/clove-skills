---
name: testing
description: Plan, implement, review, and operate risk-based software testing across unit, integration, contract, browser, end-to-end, visual-regression, accessibility, release, and production verification. Use for test strategies, test cases, CI gates, coverage decisions, flaky tests, fixtures and test data, compatibility, migrations, progressive delivery, rollback, defect evidence, and determining whether a change has enough release confidence.
---

# Testing

## Operating principle

Test meaningful failure risk at the lowest layer that can produce credible evidence. A green pipeline reduces uncertainty only within its stated behavior, data, environment, and assertions.

## Load the detailed research

Read `references/research.md` for substantial strategies, high-risk changes, unfamiliar test boundaries, release gates, flaky systems, or disputed coverage claims.

Useful searches:

```sh
rg -n '^## (2|3|4)\.|principle|risk-based|test layer' references/research.md
rg -n '^## (5|6|7|8|9|10|11)\.|unit|integration|contract|browser|visual|accessibility|release' references/research.md
rg -n '^## (12|13|14|15)\.|test data|determin|flak|pipeline|coverage|mutation' references/research.md
rg -n '^## (16|17|18)\.|plan|defect|evidence|done|source' references/research.md
```

## Workflow

### 1. Build the change-risk packet

State the user or system outcome, changed behavior, dependencies, data, permissions, environments, normal and boundary states, and potential failures. Assess likelihood, consequence, detectability, reversibility, blast radius, and prior incidents without false numeric precision.

### 2. Map risks to evidence

For each material failure, name the control intended to catch it and why that layer is sufficient:

- unit for rules, invariants, transformations, and state transitions;
- integration for databases, queues, files, runtimes, adapters, and failure semantics;
- contract for producer-consumer shape, semantics, and compatibility;
- browser or end-to-end for assembled journeys, browser behavior, and deployment-critical paths;
- visual regression for reviewed rendering states and layout change;
- accessibility for semantics plus manual assistive-use behavior;
- release testing for artifact, configuration, migration, progressive exposure, monitoring, and rollback.

### 3. Specify observable tests

Name preconditions, action, expected outcome, side effects, prohibited effects, environment, data, and diagnostic evidence. Test public behavior and policy rather than incidental implementation. Include invalid, malicious, concurrent, timeout, retry, cancellation, permission, and partial-failure cases where relevant.

### 4. Make tests trustworthy

Control time, randomness, identity, locale, network, and state. Use representative data without copying unnecessary production personal data. Prefer real dependencies when their semantics are the risk. Keep failures reproducible and artifacts diagnostic.

### 5. Design the pipeline

Order fast, high-signal checks before expensive suites. Test the exact release artifact. Define required, conditional, quarantined, and production gates; ownership; retry policy; time budgets; and evidence retention. Do not hide flaky failures behind unlimited retries.

### 6. Verify release and recovery

Rehearse migrations, compatibility, canary or progressive delivery, stop conditions, observability, rollback, data repair, and restoration where the change can cause durable harm. Check user-visible outcomes after deployment.

### 7. Learn from failure

Classify failures as product defect, test defect, environment defect, or unknown. Preserve evidence, fix root causes, add regression protection at the appropriate layer, and update the risk model when defects escape.

## Testing rules

- Do not optimize for test count or a universal pyramid.
- Do not mock the behavior under test or a boundary whose fidelity is the risk.
- Do not use snapshot approval as a substitute for behavioral assertions or intentional visual review.
- Do not claim cross-browser support from one engine or accessibility from one scanner.
- Treat coverage as a map of exercised code, not proof of behavior.
- Quarantine only with an owner, impact assessment, expiry, and repair plan.
- Keep security, privacy, accessibility, performance, and recovery as distinct evidence streams.
- Discover and run project commands from the repository; never invent them.

## Handoff

Report scope, risk rationale, environments, data, layers used, exact checks run, actual results, failure artifacts, coverage limits, untested risk, release gates, rollback evidence, and owner. Never claim a test or environment was exercised unless it was.

Combine with `clean-code` for implementation, `accessibility` for manual accessibility protocols, and `security-privacy` for adversarial and recovery requirements.

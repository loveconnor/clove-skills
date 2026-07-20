---
name: clean-code
description: Implement, refactor, review, and operate software that is correct, readable, secure, testable, changeable, diagnosable, and removable. Use for application code, APIs, data models, modules, dependencies, tests, error handling, concurrency, performance, configuration, feature flags, migrations, observability, security, code review, legacy modernization, or AI-generated code that needs verification and maintainable integration.
---

# Clean Code

## Operating principle

Write code a team can understand, verify, change, operate, and remove with justified confidence. Correctness, safety, accessibility, compatibility, and user-visible behavior outrank elegance.

## Load the detailed research

Read `references/research.md` for substantial implementation, architectural or API decisions, refactors, security-sensitive work, concurrency, migrations, operations, reviews, or disputed clean-code advice.

Useful searches:

```sh
rg -n '^## (5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24)\.' references/research.md
rg -n '^## 26\.|^## 27\.|^## 28\.' references/research.md
rg -n 'naming|invariant|contract|error|security|retry|idempot|migration|observability|AI-generated' references/research.md
```

## Workflow

### Before coding

1. State the user or system outcome and non-goals.
2. List normal, boundary, invalid, failure, security, privacy, performance, and compatibility cases.
3. Locate the current owner of the behavior and inspect local conventions.
4. Define observable contracts, invariants, state transitions, and acceptance evidence.
5. Choose the smallest coherent change.
6. Characterize unfamiliar behavior before changing it.

### While coding

1. Make behavior correct in the simplest clear shape.
2. Use domain names and explicit types.
3. Keep dependencies, side effects, I/O, units, and ownership visible.
4. Handle failure at the layer able to decide.
5. Add behavior-focused tests with the implementation.
6. Refactor in small verified steps.
7. Remove unused branches, imports, helpers, comments, flags, and dependencies.

### Before review

1. Read the diff, not only final files.
2. Confirm every changed line serves the stated purpose.
3. Run discovered project format, lint, type, test, build, and relevant scans.
4. Check validation, authorization, data exposure, errors, cleanup, timeouts, retries, compatibility, migration, and rollback.
5. Add evidence such as tests, benchmarks, screenshots, traces, or rationale.
6. Ensure names and documentation match the final design.

### After deployment

1. Observe user-visible outcomes and actionable technical signals.
2. Confirm migrations and background work complete.
3. Remove temporary flags and compatibility paths on schedule.
4. Capture surprising decisions and incidents.
5. Feed production learning into tests, contracts, and design.

## Code design rules

### Naming and readability

- Name the domain role, not only the representation.
- Reveal units, lifecycle, ownership, optionality, mutability, and state when relevant.
- Make booleans read as propositions.
- Use one vocabulary for one concept and match scope to name length.
- Make the main path easy to read before detail.
- Avoid clever compression and deep nesting when named intermediate concepts clarify intent.

### Functions and state

- Give each function one coherent purpose, not an arbitrary line limit.
- Keep abstraction levels coherent.
- Limit hidden inputs, outputs, global mutation, and temporal coupling.
- Make state transitions explicit and invalid states hard to represent.
- Parse at trusted boundaries into validated domain types instead of repeatedly validating raw data.
- Deliberately model nullability, collection ordering, uniqueness, emptiness, and ownership.
- Preserve one source of truth.

### Modules, dependencies, and abstractions

- Aim for high cohesion and intentional coupling.
- Depend toward stable policy and keep I/O at understandable boundaries.
- Encapsulate decisions and invariants, not arbitrary groups of lines.
- Prefer composition when behaviors vary independently.
- Add an abstraction only when it represents a real concept, stable detail, enforceable policy, or repeated knowledge.
- Do not create layers for hypothetical reuse, fashion, or mechanical DRY.
- Justify every new dependency by capability, maintenance, security, size, licensing, and removal cost.

### APIs and contracts

- Optimize contracts for callers and make misuse difficult.
- Define inputs, outputs, validation, errors, side effects, idempotency, ordering, pagination, timing, compatibility, and lifecycle.
- Do not leak storage or implementation details.
- Evolve public APIs and schemas deliberately with deprecation and migration plans.

### Errors and cleanup

- Distinguish expected domain outcomes from unexpected failures.
- Preserve useful cause and context across boundaries without exposing sensitive data.
- Fail safely and do not swallow evidence.
- Release resources on success, failure, timeout, and cancellation.
- Design retries with idempotency, backoff, limits, ordering, and partial failure.
- Make recovery, rollback, and operator action part of the design.

### Comments and documentation

- Let code explain what; use comments for why, constraints, risks, units, sources, non-obvious algorithms, and intentional tradeoffs.
- Remove comments that narrate syntax or no longer match behavior.
- Document for the actual audience: caller, maintainer, operator, integrator, or reviewer.
- Treat docs, examples, generated files, schemas, and runbooks as versioned code.

## Security, privacy, and operations

- Validate untrusted input at a trust boundary.
- Check authorization independently from authentication.
- Parameterize or encode data for its destination.
- Minimize privilege, collected data, retention, dependencies, and exposed details.
- Keep secrets and unnecessary personal data out of source, fixtures, logs, analytics, and errors.
- Make secure behavior the easiest path and safe failure the default.
- State concurrency and ownership models; prefer structured lifetimes and cancellation.
- Treat partial failure as normal in distributed systems.
- Design actionable logs, metrics, and traces around user-visible outcomes.
- Make configuration ownership, defaults, validation, and environment variation explicit.
- Give feature flags an owner, purpose, expiration, and removal condition.
- Make data and event migrations compatible, observable, restartable, and reversible where possible.

## Tests and evidence

- Test observable behavior, contracts, boundaries, invariants, state transitions, and important risks.
- Choose the lowest test level that provides useful confidence; test integration where boundaries are the risk.
- Keep tests deterministic, focused, readable, independent, and able to fail for the intended defect.
- Treat coverage as a map of exercised code, not proof of quality.
- Measure real bottlenecks before optimizing.
- Make algorithmic, network, storage, memory, and resource costs visible.
- Document complexity justified by measurement.
- Separate structural refactoring from behavior changes when that improves review.
- Prefer incremental replacement to broad rewrites.

## AI-assisted code

- Keep full author ownership for behavior, fit, security, dependencies, licensing implications, tests, and maintenance.
- Verify APIs, versions, types, error semantics, and edge cases against actual project sources.
- Reject fabricated functions, obsolete patterns, excessive abstraction, blanket exception handling, duplicated logic, and verbose comments that hide uncertainty.
- Use AI to reduce and clarify code, not merely produce more of it.
- Require independent review proportional to the risk.

Do not call code clean because it is formatted, short, abstract, fully covered, heavily commented, or generated confidently. Judge the complete change in context.

# Risk-Based Software Testing Strategy

> A research-backed operational guide to unit, integration, contract, browser, visual-regression, accessibility, and release testing

- **Research date:** July 20, 2026
- **Primary scope:** Web applications, APIs, services, libraries, data changes, and deployable software artifacts
- **Goal:** Produce evidence proportional to product and change risk without mistaking test volume, coverage, or a green pipeline for proof

## Contents

1. [What this guide is for](#1-what-this-guide-is-for)
2. [Testing principles and source authority](#2-testing-principles-and-source-authority)
3. [Risk-based test planning](#3-risk-based-test-planning)
4. [Choose the right test layer](#4-choose-the-right-test-layer)
5. [Unit testing](#5-unit-testing)
6. [Integration testing](#6-integration-testing)
7. [Contract and compatibility testing](#7-contract-and-compatibility-testing)
8. [Browser and end-to-end testing](#8-browser-and-end-to-end-testing)
9. [Visual-regression testing](#9-visual-regression-testing)
10. [Accessibility testing](#10-accessibility-testing)
11. [Release testing and progressive delivery](#11-release-testing-and-progressive-delivery)
12. [Test data, doubles, time, and determinism](#12-test-data-doubles-time-and-determinism)
13. [Flaky tests and failure diagnosis](#13-flaky-tests-and-failure-diagnosis)
14. [Pipeline design and test gates](#14-pipeline-design-and-test-gates)
15. [Coverage, mutation, and test metrics](#15-coverage-mutation-and-test-metrics)
16. [Plans, cases, defects, and evidence](#16-plans-cases-defects-and-evidence)
17. [Definition of done](#17-definition-of-done)
18. [Research basis and source notes](#18-research-basis-and-source-notes)

---

## 1. What this guide is for

This guide helps a team decide what to test, at which layer, in which environment, and with what release evidence. It treats tests as controls for specific failure risks, not as inventory.

Use it to:

- turn a change into an explicit risk and evidence plan;
- separate unit, integration, contract, browser, visual, accessibility, and release responsibilities;
- avoid duplicating the same weak assertion at every layer;
- decide when a fake, real dependency, browser, production-like environment, or production canary is necessary;
- build fast presubmit feedback without leaving high-risk boundaries unverified;
- design reproducible fixtures, environments, and failure artifacts;
- manage flaky tests without hiding them behind retries;
- define release gates, rollback conditions, and post-deployment checks;
- report exactly what was tested and what remains uncertain.

This guide is not:

- a universal test pyramid or mandated percentage of test types;
- a claim that automation replaces exploratory, accessibility, security, usability, or domain review;
- permission to copy production personal data into test systems;
- a fixed tool prescription;
- proof that a release is safe because all known tests passed.

### 1.1 The practical standard

A testing strategy is credible when another responsible person can answer:

1. What user, business, data, security, accessibility, compatibility, and operational failures matter?
2. Which test or review is intended to detect each important failure?
3. Why is that test running at that layer?
4. How close is the environment to the behavior under risk?
5. What cannot be learned until release or production traffic?
6. What evidence gates the change, and who can accept the remaining risk?
7. How will the team detect, stop, roll back, or repair a bad release?

Passing tests reduce uncertainty only inside their stated scope. Confidence should never be broader than the protected behavior, input space, environment, and assertions.

---

## 2. Testing principles and source authority

### 2.1 Core principles

1. **Test risk, not implementation volume.** A five-line authorization rule can deserve more verification than a 500-line internal report formatter.
2. **Test observable contracts.** Protect outcomes, invariants, state transitions, errors, and side effects that callers or users rely on.
3. **Use the lowest sufficient layer.** Prefer the fastest, most isolated test that can fail for the intended defect. Move outward when the risk exists at a boundary, runtime, browser, artifact, or deployment.
4. **Use real boundaries where fidelity matters.** A mock cannot establish database constraints, wire compatibility, browser layout, provider behavior, or migration safety.
5. **Keep a small number of broad journey tests.** They verify assembly and release-critical paths, but are slower, less diagnostic, and more exposed to environmental noise.
6. **Make failure useful.** A failed test should identify the protected behavior, expected outcome, actual outcome, and reproducible evidence.
7. **Treat determinism as product infrastructure.** Untrusted test signals slow delivery and train people to ignore real failures.
8. **Test the release artifact.** Rebuilding after testing can produce a different artifact than the one that ships.
9. **Verify recovery, not only prevention.** Timeouts, retries, cancellation, rollback, migration restart, and repair paths are production behavior.
10. **Feed escaped defects back into the strategy.** Incidents expose a missing risk model, oracle, state, environment, or gate—not merely a missing test case.

The ISTQB Foundation syllabus defines risk-based testing as selecting, prioritizing, and managing test activities through risk analysis and control ([CTFL 4.0.1 syllabus](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf)). Use that as a planning model, not a reason to assign decorative risk numbers.

### 2.2 Source hierarchy

| Authority | Use | Limit |
|---|---|---|
| Product requirements, domain rules, incident history, contracts, and support policy | Define real behavior, consequence, and supported environments | May be incomplete, contradictory, or stale; verify ownership |
| Standards and specifications | Define compatibility, security, accessibility, protocol, and artifact requirements | Usually do not prescribe one test architecture |
| Official framework and tool documentation | Define supported APIs, configuration, environment behavior, and known limits | Tool capability is not a product strategy |
| Maintainer guidance and engineering research | Explain patterns, evidence, and tradeoffs | Context may not match the product |
| Repository tests, fixtures, pipelines, and runbooks | Establish current executable conventions and operational practice | Existing practice may encode debt or false assumptions |
| Test result from the current change | Establish one outcome in one environment and state | Does not generalize beyond its inputs and oracle |

When sources conflict, distinguish the layer. An OpenAPI document can define message shape, a consumer contract can define used examples, an integration test can verify the actual adapter, and a browser journey can verify that a user completes the task. These are complementary claims.

### 2.3 Evidence language

Prefer bounded claims:

- “The pricing unit suite exercises all documented boundary classes and invariants.”
- “The PostgreSQL integration suite passed against version 17.2 using migration set `abc123`.”
- “All active consumer contracts were verified by provider build `sha256:…`.”
- “The checkout journey passed in the listed Chromium, Firefox, and WebKit projects.”
- “No unexpected visual differences were found in the 84 reviewed component states.”
- “The release candidate passed smoke tests, migration rehearsal, rollback rehearsal, and the 5% canary gate.”

Avoid:

- “Fully tested.”
- “100% safe.”
- “Covered by end-to-end tests” without naming the behavior and states.
- “Cross-browser compatible” after running only one engine.
- “No regressions” when only automated checks ran.

---

## 3. Risk-based test planning

### 3.1 Start with failure, not test type

For each change, ask what could go wrong:

- the rule returns an incorrect result;
- invalid or hostile input crosses a trust boundary;
- authorization is bypassed;
- money, inventory, messages, or records are duplicated or lost;
- a database, queue, cache, file system, or provider behaves differently from a fake;
- a consumer and provider disagree about a message;
- a browser or device renders or operates the interface incorrectly;
- a visual state changes unintentionally;
- a keyboard or screen-reader user cannot complete the task;
- a migration locks, corrupts, partially applies, or cannot resume;
- packaging omits assets or includes the wrong configuration;
- deployment degrades latency, errors, saturation, or user outcomes;
- rollback fails because data or contracts moved forward irreversibly.

Then attach a control to each material failure.

### 3.2 Assess risk without false precision

Risk usually combines likelihood and impact. Use explicit evidence for both.

**Likelihood signals:**

- large or conceptually broad change;
- new technology, provider, algorithm, or team-owned area;
- high churn, complex branches, concurrency, or shared mutable state;
- many dependencies or cross-team boundaries;
- data, event, API, configuration, or infrastructure migration;
- weak observability or hard-to-reproduce environment;
- prior defects or flaky tests in the area;
- uncommon input space or many feature-flag combinations;
- difficult rollback or long feedback delay.

**Impact signals:**

- safety, health, legal, financial, privacy, security, or accessibility harm;
- data loss, corruption, duplication, or unauthorized disclosure;
- inability to authenticate, pay, communicate, or recover;
- high traffic, many tenants, or a shared platform blast radius;
- breach of a public API, SLA, SLO, contract, or regulatory requirement;
- irreversible state or expensive manual repair;
- loss of user trust or operational control.

Use low/medium/high or a product-specific scale, but write the rationale. Multiplying ordinal labels into a risk-priority number creates precision the inputs do not have. Detectability and reversibility are useful prioritization dimensions, but should remain visible rather than buried in a score.

### 3.3 Change-risk packet

Before implementation, record:

```md
## Change-risk packet

- User/system outcome:
- Non-goals:
- Changed components and boundaries:
- Important contracts and invariants:
- Normal, boundary, invalid, and hostile inputs:
- Failure modes and user consequences:
- Data, privacy, security, accessibility, and compatibility risks:
- Dependencies, versions, and environment assumptions:
- Migration, rollout, rollback, and repair behavior:
- Observability and success signals:
- Required evidence by test layer:
- Remaining uncertainty and risk owner:
```

### 3.4 Risk-to-evidence matrix

| Risk | Best first control | Additional evidence when needed |
|---|---|---|
| Pure calculation or invariant | Unit/property test | Mutation test for high-risk rule |
| Serialization or validation boundary | Unit + schema/contract test | Integration against real parser/provider |
| Database query, transaction, or constraint | Integration with production-compatible database | Migration and concurrency test |
| Consumer/provider compatibility | Contract verification | Targeted integration and production canary |
| UI state and interaction | Browser component test | Critical browser journey |
| Complete customer process | Narrow end-to-end journey | Exploratory and release smoke test |
| Layout, typography, responsive presentation | Visual regression | Manual responsive/content-extreme review |
| Keyboard, screen reader, zoom, forced colors, motion | Accessibility automation + manual protocols | Disabled-user task testing |
| Migration or configuration rollout | Rehearsal using production-like scale and shape | Canary, observability, stop/rollback test |
| Performance or resource regression | Targeted benchmark/load test with budget | Canary comparison and production signals |
| Security control | Unit/integration negative tests and static/dynamic analysis | Threat-led manual verification or penetration test |

### 3.5 Increase evidence when risk increases

For a low-risk text correction, lint, build, focused browser render, and review may be enough. For payment idempotency, use rule tests, property tests, real storage integration, provider contracts, concurrency/fault tests, critical browser flow, release smoke checks, canary metrics, and rollback/repair evidence.

Risk-based does not mean “skip tests for small changes.” It means choose a proportionate minimum and spend deeper effort where failure is consequential or likely.

---

## 4. Choose the right test layer

### 4.1 Layers answer different questions

| Layer | Primary question | Fidelity | Speed/diagnosis | Common false confidence |
|---|---|---|---|---|
| Static/type analysis | Does source obey structural, type, dataflow, or policy constraints? | Source-level | Very fast and local | Believing typed or linted code behaves correctly |
| Unit | Does one rule or cohesive unit satisfy its contract across input classes? | In-process, isolated | Fast and precise | Mocks reproduce the implementation's assumptions |
| Integration | Does code work with a real boundary and its failure semantics? | Real dependency or adapter | Moderate | A convenient substitute differs from production |
| Contract | Do independently changing parties agree on messages and compatibility? | Contract artifact + verification | Fast to moderate | Matching schema is mistaken for semantic correctness |
| Browser/component | Does rendered UI behavior work in a real browser for a component or page slice? | Browser engine | Moderate and reasonably diagnostic | Mocked backend hides assembly defects |
| End-to-end | Can a critical task cross the assembled system? | Broad system | Slow and harder to diagnose | A few happy journeys are mistaken for state coverage |
| Visual regression | Did rendered pixels/layout change from an approved baseline? | Rendering environment | Moderate; review-dependent | A stable screenshot is mistaken for functional correctness |
| Accessibility | Can disabled users perceive, operate, understand, and recover? | Automated + manual + AT | Mixed | A scanner score is mistaken for conformance |
| Release | Is the exact artifact safe to promote, operate, stop, and recover? | Artifact and deployment environment | Slowest; highest fidelity | Staging success is mistaken for production safety |

### 4.2 Lowest sufficient layer rule

Put a test at the lowest layer where it can observe the defect without reproducing the production implementation inside the test.

Examples:

- Tax rounding belongs in unit tests, not browser tests.
- A unique database constraint belongs in a real database integration test, not a mocked repository unit test.
- An API compatibility promise belongs in schema and consumer/provider contract checks, not only a shared type package.
- A focus return after closing a dialog belongs in a browser test, not a DOM-free reducer test.
- Font loading and line wrapping belong in browser/visual checks, not string snapshots.
- A deploy-time missing environment variable belongs in artifact/configuration validation and release smoke testing.

### 4.3 Do not duplicate without a reason

The same business rule may appear at several layers only when each test controls a different risk:

- unit: discount eligibility boundaries;
- integration: persisted customer state is loaded correctly;
- contract: provider exposes the fields the consumer relies on;
- browser: the eligible customer sees and can apply the discount;
- release smoke: the deployed checkout can calculate and submit an order.

Repeating the same happy-path assertion through five layers adds maintenance without five times the confidence.

### 4.4 Specialized techniques

Use these when the input space or defect type warrants them:

- **Property-based testing:** generate many inputs and check invariants, round trips, ordering, conservation, monotonicity, or idempotency. Hypothesis describes generating edge cases from a declared input domain ([Hypothesis documentation](https://hypothesis.readthedocs.io/en/latest/)).
- **Mutation testing:** deliberately alter production code and confirm tests detect the change. Surviving mutants identify weak assertions or untested distinctions ([Stryker documentation](https://stryker-mutator.io/docs/)).
- **Fuzz testing:** feed malformed, unexpected, or adversarial inputs into parsers and trust boundaries.
- **Model/state-machine testing:** explore legal and illegal sequences against a state model.
- **Concurrency/stress testing:** repeat interleavings, races, ordering, and contention with deterministic schedulers or race detectors where available.
- **Fault injection:** force timeouts, partial failure, dependency errors, process death, and retry paths.
- **Exploratory testing:** use a time-bounded charter to investigate risks that scripted cases cannot enumerate well.

---

## 5. Unit testing

### 5.1 Unit-test outcome

A unit test should fail because an observable rule, invariant, state transition, or error contract changed—not because a private helper was renamed or calls were reorganized safely.

Good candidates:

- validation and normalization;
- calculations, thresholds, rounding, and units;
- state machines and authorization policy;
- parsing and serialization owned by the unit;
- selection, sorting, filtering, and matching rules;
- retry classification and backoff calculations;
- error mapping;
- pure view-model transformations;
- accessibility state derivation;
- configuration parsing and defaults.

### 5.2 Test input classes

Cover meaningful classes rather than many arbitrary examples:

- typical valid values;
- lower and upper boundaries, just inside and outside;
- empty, absent, null, zero, negative, and maximum values where meaningful;
- duplicates, ordering, casing, normalization, time zones, locale, and units;
- invalid combinations and impossible states;
- hostile or oversized input at trust boundaries;
- error, timeout, cancellation, and partial-result paths;
- prior regression cases.

Use decision tables when rules combine conditions. Use equivalence partitions when many values should behave the same. Use properties when examples leave a broad combinatorial space.

### 5.3 Arrange tests around behavior

```ts
describe('reservation expiry', () => {
  it('expires at the exact deadline', () => {
    const now = instant('2026-07-20T15:00:00Z');
    const reservation = activeReservation({ expiresAt: now });

    expect(statusAt(reservation, now)).toBe('expired');
  });
});
```

The test names the boundary and injects time. It does not sleep or inspect private calls.

### 5.4 Mocks and interaction assertions

Use an interaction assertion only when the interaction is the contract: do not charge after inventory failure, emit one audit event, release a lease, or avoid a sensitive call. Prefer state/output assertions when call order and helper selection are implementation details.

Risks of over-mocking:

- the mock accepts behavior the real dependency rejects;
- refactors break tests without changing outcomes;
- tests assert the code's assumptions rather than the external contract;
- error, timeout, serialization, and concurrency behavior disappear;
- a shared mock library lets consumer and provider be wrong in the same way.

### 5.5 Unit-test quality checklist

- One clear behavioral reason for existence.
- Deterministic inputs, clock, randomness, and identifiers.
- Focused assertions with useful differences on failure.
- No network, production service, or hidden environment dependency.
- No dependence on test order or shared mutable state.
- Minimal fixture data relevant to the behavior.
- Public behavior preferred over private structure.
- Failure and cleanup paths covered where the unit owns them.
- Regression tests explain the defect distinction they protect.

---

## 6. Integration testing

### 6.1 Integration-test outcome

Integration tests verify behavior at a real boundary: database, queue, cache, file system, operating-system API, framework wiring, identity provider, payment sandbox, cloud emulator, or provider adapter.

They are required when the risk includes:

- query semantics, indexes, constraints, collation, transactions, or isolation;
- serialization, headers, encodings, protocol behavior, or error mapping;
- dependency version compatibility;
- queue delivery, acknowledgement, ordering, deduplication, or retry;
- file permissions, paths, atomic writes, or cleanup;
- dependency startup, configuration, credentials, or TLS;
- framework binding, dependency injection, middleware, routing, or persistence mapping.

### 6.2 Prefer production-compatible dependencies

An in-memory substitute can differ in SQL, constraints, transactions, collation, timing, or failure behavior. Use the same product and a supported version when those differences matter. Testcontainers documents running short-lived, isolated instances of real service types for integration tests ([Testcontainers introduction](https://testcontainers.com/guides/introducing-testcontainers/)). Containers improve reproducibility but do not reproduce managed-service configuration, network policy, scale, or operational limits automatically.

Record:

- dependency image/product and exact version;
- schema and migration version;
- configuration that affects semantics;
- fixture/seed identity;
- platform architecture when relevant;
- whether an emulator or sandbox differs from production.

### 6.3 Integration test design

1. Start the narrowest real boundary.
2. Initialize known state through supported APIs or migrations.
3. Exercise the production adapter or entry point.
4. Assert externally meaningful results and durable side effects.
5. Force defined error and timeout cases.
6. Verify cleanup, rollback, idempotency, and retry behavior.
7. Isolate each test's data so parallel runs cannot interfere.
8. Capture dependency logs on failure without leaking secrets.

### 6.4 Database testing

Test:

- fresh schema creation and every supported upgrade path;
- constraints, defaults, generated values, and index-dependent queries;
- transaction boundaries and rollback;
- concurrent writes, version conflicts, locks, and deadlocks where relevant;
- pagination ordering and stable cursors;
- empty, large, and realistic-shaped data;
- time zone, precision, encoding, collation, and null behavior;
- migration interruption, restart, and partial backfill;
- compatibility between old/new application versions during rolling deployment;
- rollback or forward-repair strategy.

Do not wrap every test in a transaction if production behavior under commit, background processing, or multiple connections is the risk.

### 6.5 External providers

Use three levels deliberately:

- local fake for fast consumer logic and rare failures;
- contract/provider verification for message compatibility;
- provider sandbox or controlled live test for credentials, protocol, and environment behavior.

Never send real money, email, messages, destructive writes, or personal data unintentionally. Use provider idempotency keys, test accounts, allow-listed recipients, and explicit environment guards.

### 6.6 Integration tests do not replace contract tests

An integration environment usually contains one combination of versions at one moment. It may miss whether independently deployable consumers remain compatible across their supported versions. Contract tests make that compatibility relationship explicit.

---

## 7. Contract and compatibility testing

### 7.1 What is a contract?

A contract is any externally relied-upon interface:

- HTTP method, path, parameters, headers, status, and body;
- event topic, key, schema, ordering, delivery, and retry semantics;
- function/package API, types, errors, and side effects;
- command-line arguments, exit codes, stdout/stderr, and files;
- database view or data export;
- configuration keys, defaults, and validation;
- accessibility semantics exposed by a reusable component;
- artifact name, version, manifest, and install behavior.

Define accepted inputs, outputs, errors, idempotency, authorization, pagination, ordering, timeouts, compatibility, and deprecation. Shape alone is rarely the complete contract.

### 7.2 Schema conformance and behavioral contracts

Schema/provider conformance checks whether an implementation matches a declared specification such as [OpenAPI 3.2.0](https://spec.openapis.org/oas/v3.2.0.html). It can catch missing fields, invalid types, status mismatches, and undocumented changes.

Consumer-driven contract testing captures examples that actual consumers depend upon and verifies them against the provider. Pact describes the consumer generating interactions and provider verification replaying them against provider behavior ([Pact introduction](https://docs.pact.io/), [provider verification](https://docs.pact.io/getting_started/provider_verification)).

Use either or both depending on ownership:

- specification-first API: lint and diff the specification, validate implementation, and test consumers against generated or verified clients;
- consumer-driven distributed system: publish consumer expectations, verify providers, and gate deployment on compatible verified versions;
- public API: combine comprehensive provider specification, compatibility policy, examples, and representative consumer tests.

### 7.3 Contract cases

Test:

- required, optional, nullable, and defaulted fields;
- unknown fields and forward compatibility;
- enum growth and unknown enum handling;
- numeric precision, units, formats, encodings, and dates;
- pagination, sorting, filtering, and stable ordering;
- success, expected domain errors, authorization errors, throttling, and unexpected failure model;
- headers, content types, caching, correlation, and idempotency;
- minimal responses consumers can accept;
- event evolution, duplicate delivery, ordering, and poison messages;
- old consumer/new provider and new consumer/old provider combinations supported during rollout;
- deprecation warnings, windows, and removal conditions.

### 7.4 Provider state and determinism

Provider verification needs explicit state setup: named, minimal, repeatable, and isolated. Do not depend on a shared mutable staging database. A contract that passes only because unrelated data happens to exist is not reproducible.

### 7.5 Deployment gating

For independently deployed parties:

1. Publish contracts with immutable consumer version identity.
2. Verify the provider build against all relevant active consumer contracts.
3. Publish verification results with provider version and environment.
4. Query compatibility before deployment.
5. Retain enough history for rollback versions.
6. Define how inactive, abandoned, or emergency consumers leave the matrix.

### 7.6 Contract limits

Contract tests do not prove:

- both sides interpret domain meaning correctly;
- authentication and authorization are secure;
- the provider meets latency, capacity, availability, or ordering guarantees under load;
- a complete user task works;
- production configuration and routing are correct;
- every optional feature is covered by current consumers.

Keep targeted integration, journey, security, and release checks.

---

## 8. Browser and end-to-end testing

### 8.1 Separate browser component tests from full journeys

**Browser component tests** render a component or page slice in a real engine with controlled dependencies. They are useful for DOM behavior, focus, events, CSS, layout, browser APIs, and component states.

**End-to-end tests** cross the assembled frontend, backend, storage, and other services. Use them for a small number of release-critical journeys and assembly risks.

Do not force all browser tests through a fully deployed system. A focused component test often catches browser behavior faster and more precisely.

### 8.2 Browser matrix

Choose browsers, engines, devices, operating systems, and viewports from:

- product support policy;
- audience analytics and contractual requirements;
- accessibility browser/assistive-technology pairs;
- web features and known engine differences;
- mobile/touch and responsive risk;
- embedded or enterprise environments.

Playwright can run projects across Chromium, Firefox, WebKit, branded channels, and emulated devices ([browser documentation](https://playwright.dev/docs/browsers), [test projects](https://playwright.dev/docs/test-projects)). A bundled browser build or emulated device profile is not always equivalent to the branded browser on its actual operating system and hardware. Use real device/browser services or manual device checks where OS integration, touch, virtual keyboard, font rendering, or assistive technology matters.

The [web-platform-tests project](https://web-platform-tests.org/) is a shared cross-browser suite for web-platform behavior. Consult its results when a suspected issue concerns platform interoperability, but still test the product's use of the feature.

### 8.3 Browser test design

- Locate by user-facing role, name, label, text, or an explicit stable test contract—not DOM nesting or generated classes.
- Use browser-aware waiting and retrying assertions, not arbitrary sleeps.
- Begin from a known state through public setup APIs or isolated fixtures.
- Assert visible user outcome, persisted state, and critical side effects.
- Cover errors, cancellation, retry, resume, and duplicate submission.
- Test responsive, keyboard, and permission variants where they change behavior.
- Capture trace, screenshot, console, request, and server correlation evidence on failure.
- Keep one journey's responsibility bounded.

Playwright recommends user-facing locators and auto-retrying web assertions because they wait for actionable, observable conditions ([best practices](https://playwright.dev/docs/best-practices), [assertions](https://playwright.dev/docs/test-assertions)). The same principle applies across browser frameworks.

```ts
test('customer can recover from a declined payment', async ({ page }) => {
  await checkout.openWithCart(page, declinedCardCart);

  await page.getByRole('button', { name: 'Place order' }).click();
  await expect(page.getByRole('alert')).toContainText('Your card was declined');

  await page.getByLabel('Card number').fill(testCard.approved);
  await page.getByRole('button', { name: 'Try payment again' }).click();

  await expect(page.getByRole('heading', { name: 'Order confirmed' })).toBeVisible();
  await expectOrderCreatedOnce(testOrderId);
});
```

### 8.4 Critical journey selection

Include journeys for:

- authentication, recovery, and session expiry;
- primary value creation or transaction;
- financial, legal, privacy, safety, or destructive actions;
- cross-service workflows;
- permissions and role boundaries;
- high-volume or historically fragile paths;
- data creation, editing, cancellation, and resumption;
- one representative failure and recovery path.

Do not turn the browser suite into an exhaustive rule matrix. Keep detailed combinations at unit and integration layers.

### 8.5 End-to-end environment risks

Document:

- which services are real, fake, sandboxed, or shared;
- build and schema versions;
- feature flags and configuration;
- seeded accounts and data ownership;
- outbound side-effect controls;
- browser binaries and operating system;
- isolation and cleanup;
- expected eventual-consistency windows.

An end-to-end test is only as representative as this environment.

---

## 9. Visual-regression testing

### 9.1 Visual-test outcome

Visual regression detects unexpected rendered differences from an approved baseline. It is especially useful for:

- layout, spacing, alignment, and overlap;
- typography, wrapping, truncation, and font fallback;
- color, border, icon, illustration, and shadow changes;
- responsive composition;
- component states and themes;
- content extremes and localization;
- CSS regressions that semantic assertions do not see.

Playwright's screenshot assertions compare against reference images and warn that rendering varies with OS, browser version, settings, hardware, power state, and headless mode; baseline and comparison environments should match ([visual comparisons](https://playwright.dev/docs/test-snapshots)).

### 9.2 Baseline state matrix

Capture states intentionally:

- default, hover, focus, active, selected, checked, expanded, disabled, read-only;
- loading, skeleton, empty, populated, partial, stale, warning, error, success;
- short, long, missing, translated, bidirectional, and user-generated content;
- narrow mobile, tablet, desktop, wide, and zoomed layouts as applicable;
- light, dark, forced-color emulation, reduced motion, and high-contrast variants where useful;
- dialogs, menus, popovers, tooltips, and sticky regions open;
- validation and permission states.

Storybook treats component stories as named UI states that can feed visual testing ([Storybook testing overview](https://storybook.js.org/docs/writing-tests/index)). The concept is portable: a visual baseline should have an owned semantic state, not only a screenshot file.

### 9.3 Stabilize what is irrelevant

Pin or control:

- OS image, browser build, viewport, device scale, locale, time zone, color scheme, and fonts;
- animation and caret/cursor rendering;
- clock, random values, IDs, and ordering;
- network responses and image assets;
- ads, analytics, rotating content, and personalized data;
- font loading and image decode completion.

Mask a dynamic region only when its content is outside the visual contract. If the region's size, wrapping, placement, or state matters, stabilize its data instead. Excessive masking can hide the defect.

### 9.4 Review differences, do not auto-bless them

For every changed baseline:

1. Inspect expected, actual, and diff.
2. Identify the product or design change that explains it.
3. Check nearby states and responsive variants.
4. Confirm content, accessibility, and behavior still meet their contracts.
5. Approve with reviewer identity and change context.
6. Commit or store the new immutable baseline according to project policy.

Never run a blanket baseline update merely to make CI green. Snapshot approval is a product decision.

### 9.5 Pixel thresholds

Keep thresholds as small as the controlled environment permits. A wide tolerance reduces noise but can erase real thin-border, focus-ring, text, or alignment changes. Prefer environment determinism, region-level snapshots, and semantic assertions over a generous global threshold.

### 9.6 Visual-test limits

A matching screenshot does not establish:

- correct interaction or persistence;
- correct accessible name, reading order, or screen-reader behavior;
- correct offscreen or hidden content;
- acceptable contrast under computed colors;
- performance, security, or API behavior;
- correctness outside captured states, viewports, and content.

Pair visual checks with behavior and accessibility evidence.

---

## 10. Accessibility testing

Accessibility testing is a separate evidence stream, not a visual or browser-testing checkbox. Use the project's detailed [Web Accessibility Implementation and Verification guide](../../accessibility/references/research.md) for WCAG 2.2 AA implementation, keyboard, screen-reader, zoom/reflow, text spacing, forced colors, reduced motion, automation, and manual protocols.

### 10.1 Layered accessibility evidence

- **Static lint:** invalid ARIA and detectable source patterns.
- **Unit/component:** accessible names, roles, states, relationships, and error association.
- **Browser automation:** rendered rule scans and keyboard/focus contracts in material states.
- **Visual checks:** focus visibility, content reflow, forced-color appearance, and content extremes.
- **Manual keyboard:** reachability, order, operation, focus visibility, traps, and obscuration.
- **Screen reader:** structure, names, roles, state, validation, status, and task completion in supported pairs.
- **Adaptation:** 200% text, 320 CSS px/400% reflow, text spacing, forced colors, and reduced motion.
- **Disabled-user research:** real strategies, effort, comprehension, and recovery.

The W3C states that no evaluation tool can determine accessibility or conformance by itself ([Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/)).

### 10.2 Release gates

For material user-facing changes, require:

- no unresolved automated violations in changed states unless an owned risk exception exists;
- keyboard completion of the changed task;
- focused manual screen-reader and adaptation checks proportional to risk;
- regression coverage for deterministic defects;
- complete expert review for formal conformance claims or high-risk public services.

An accessibility scanner score is not a release-quality metric.

---

## 11. Release testing and progressive delivery

### 11.1 Test the immutable release candidate

Build once, identify the artifact by digest, test it, and promote that same artifact. Do not rebuild from the same source for production and assume equivalence.

Record:

- source commit and clean/dirty state;
- build workflow identity and inputs;
- dependency lockfile and toolchain versions;
- artifact name, version, digest, manifest, and provenance;
- test report identities tied to the digest;
- environment configuration version;
- schema/migration version;
- approvals and risk exceptions.

[SLSA 1.2](https://slsa.dev/spec/v1.2/) defines supply-chain security tracks and provenance formats. Artifact provenance links a build to its source and process; it does not prove the software is correct or secure.

### 11.2 Pre-release verification

Choose from this matrix according to risk:

| Area | Release checks |
|---|---|
| Artifact | Build, start, package contents, signatures/attestations, SBOM, licenses, dependency and secret scans |
| Installation | Fresh install, upgrade from supported versions, downgrade if supported, uninstall/cleanup |
| Configuration | Schema validation, required values, safe defaults, secrets references, feature flags, environment-specific routes |
| Data | Migration on realistic shape/scale, interruption/restart, compatibility window, backfill reconciliation, backup/restore, rollback or forward repair |
| Contracts | API/schema diff, consumer/provider verification, event compatibility, CLI/config compatibility, version policy |
| Function | Critical smoke paths, high-risk regression suite, error/recovery, permissions, background work |
| Browser/UI | Supported browser smoke matrix, visual review, accessibility protocols, responsive/content extremes |
| Nonfunctional | Targeted load/latency/resource budgets, security verification, privacy/data handling, resilience/fault checks |
| Operations | Health/readiness, metrics/logs/traces, alerts, dashboards, runbook, deployment stop, rollback, repair tools |

NIST's [Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) supplies secure-development practices that can be integrated into an SDLC. OWASP [ASVS](https://owasp.org/www-project-application-security-verification-standard/) provides versioned web-application security verification requirements. Select requirements through the product threat model and obligations; a generic vulnerability scan is not sufficient security evidence.

### 11.3 Migration release testing

For data, event, and schema changes:

1. Rehearse from every supported starting version.
2. Use production-like data shape and enough scale to expose locks, duration, and resource use without copying unnecessary personal data.
3. Test old and new application versions during the rolling compatibility window.
4. Interrupt the migration and restart it.
5. Test idempotency and partial backfill reconciliation.
6. Verify counts, invariants, checksums, samples, and business outcomes.
7. Exercise rollback if safe; otherwise rehearse forward repair and restoration.
8. Confirm observability, rate limiting, pause, resume, and operator control.
9. Separate schema expansion, code rollout, data movement, read switch, and cleanup when risk warrants staged change.

### 11.4 Smoke, regression, exploratory, and acceptance

- **Smoke testing:** a narrow, fast check that the artifact starts, dependencies connect, and critical functions are available. It is not broad regression.
- **Regression testing:** selected tests that protect established behavior affected directly or indirectly by the change.
- **Exploratory testing:** time-bounded investigation using a risk charter, realistic data, and tester judgment.
- **User acceptance testing:** stakeholders or representative users determine whether the product meets intended needs and acceptance criteria. It does not replace engineering verification.
- **Operational acceptance:** operators verify deployment, observability, capacity, recovery, and runbook readiness.

### 11.5 Rollback and repair are test cases

Verify:

- deployment can stop before full rollout;
- the previous artifact can be selected and started;
- configuration remains compatible;
- database/event changes permit rollback or have a documented forward-repair path;
- caches, queues, sessions, and background jobs tolerate version reversal;
- partial side effects are reconciled;
- operator permissions and tools work;
- time to detect and time to recover meet the product's risk target.

Do not say “rollback available” if it has not been rehearsed for the current change class.

### 11.6 Canary and progressive rollout

Google SRE defines canarying as a partial, time-limited deployment evaluated to decide whether rollout should continue ([Canarying Releases](https://sre.google/workbook/canarying-releases/)). A useful canary needs:

- a representative, controlled population;
- enough traffic and duration for the failure modes;
- candidate-versus-control and absolute SLO/SLI checks;
- metrics attributable to the release;
- automatic or clearly owned pause/rollback thresholds;
- guardrails for privacy, security, data integrity, and irreversible side effects;
- increasing stages that limit initial blast radius;
- post-rollout observation.

Test canary automation itself. A false-negative gate exposes users; a noisy false-positive gate trains operators to override it.

### 11.7 Post-deployment verification

After each stage:

- run read-only or safely idempotent smoke checks against the deployed artifact;
- confirm version/digest and effective non-secret configuration;
- compare user-visible success, error, latency, and saturation signals;
- inspect security, accessibility, and business-critical signals where observable;
- confirm migrations, backfills, queues, and scheduled work progress;
- check logs/traces for new error categories without exposing secrets;
- verify alerts and rollback controls;
- document the release decision and remaining observation window.

Production checks must not create fake customer records, send messages, charge cards, alter analytics, or leak test data without explicit controls.

---

## 12. Test data, doubles, time, and determinism

### 12.1 Test-data principles

- Use the smallest data set that exposes the distinction under test.
- Name fixtures by scenario, not generic personas such as `user1`.
- Generate unique IDs/namespaces for parallel runs.
- Keep builders explicit about values that affect behavior.
- Seed randomness and record the seed on failure.
- Use synthetic data by default; do not copy production personal, financial, health, credential, or secret data into lower environments.
- If production-shaped data is needed, generate it or apply an approved minimization and de-identification process.
- Model long, missing, translated, hostile, boundary, and legacy values.
- Give fixtures an owner and delete stale global fixtures.
- Ensure cleanup on success, failure, timeout, and cancellation.

### 12.2 Test doubles

| Double | Purpose | Main risk |
|---|---|---|
| Stub | Return controlled responses | May oversimplify protocol and error behavior |
| Fake | Lightweight working implementation | Can drift semantically from production |
| Spy | Record interactions for later assertions | Encourages implementation-detail assertions |
| Mock | Enforce expected interactions | Can make internal choreography the contract |
| Emulator | Reproduce a platform/service interface | Often omits managed-service behavior, limits, and failure modes |

Use doubles to isolate the behavior under test, not to claim the real boundary works. Pair a double with contract or integration verification when production compatibility matters.

### 12.3 Time

- Inject a clock into domain behavior.
- Use fixed instants and explicit time zones.
- Test exact deadline boundaries and daylight-saving transitions when relevant.
- Avoid wall-clock sleeps; advance a fake scheduler for unit behavior or poll observable state with a deadline in integration tests.
- Record timestamps and deadlines in failure output.
- Test lease expiry, token expiry, retry windows, scheduled jobs, and clock skew according to their contracts.

### 12.4 Randomness and identifiers

Inject a seeded generator for unit/property tests. Preserve the failing seed and minimized example. For cryptographic randomness, test interface and invariants without replacing production entropy in a way that ships accidentally.

### 12.5 Parallelism and isolation

- Do not depend on suite order.
- Allocate unique ports, schemas, buckets, topics, tenants, and accounts.
- Avoid global mutable caches or reset them explicitly.
- Make cleanup robust even when the worker crashes.
- Run the suite repeatedly and with shuffled order to expose coupling.
- Test the level of parallelism used in CI; serial local success does not prove parallel safety.

---

## 13. Flaky tests and failure diagnosis

### 13.1 Definition and cost

A flaky test produces both passing and failing results for the same relevant code and configuration. It may indicate a test defect, infrastructure defect, dependency instability, or real nondeterminism in production code.

Google's testing guidance identifies flakiness as a serious loss of test-signal trust and reports that larger tests are more exposed to environmental sources of nondeterminism ([flaky tests](https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html), [sources of flakiness](https://testing.googleblog.com/2020/12/test-flakiness-one-of-main-challenges.html)). Do not copy Google's historical rates as project targets.

### 13.2 Common causes

- arbitrary sleeps and timing races;
- eventual consistency without a bounded observable wait;
- shared mutable data or test-order dependence;
- unseeded random values and unstable ordering;
- real current time, time zones, or daylight-saving transitions;
- ports, files, processes, or database state not cleaned up;
- concurrency and production race conditions;
- overloaded CI workers, memory pressure, or parallel interference;
- network, provider, browser, or infrastructure instability;
- selectors tied to transient DOM structure;
- animation, font, image, or layout not settled;
- environment/version drift;
- assertions made before the system reaches the specified state.

### 13.3 Triage protocol

1. Preserve the first failure artifact before rerunning.
2. Record commit, environment, worker, seed, order, timing, dependency versions, and resource state.
3. Reproduce with the same parameters.
4. Classify test, product, dependency, or infrastructure cause.
5. Reduce to the smallest failing scope.
6. Replace sleeps with condition-based synchronization.
7. Remove hidden state and make dependencies explicit.
8. Add diagnostic evidence and a focused regression check.
9. Run repeatedly, in parallel, and with varied order as appropriate.
10. Close the flake only after the defined reliability window passes.

### 13.4 Retry policy

Retries are diagnostic and availability tools, not evidence that the first failure did not matter.

- Report first-attempt failures and retry outcomes separately.
- Do not turn a fail-then-pass test green without a flaky status.
- Limit retries and retain traces from the first failure.
- Use a framework option that can fail CI on flaky classification where appropriate; Playwright, for example, exposes `--fail-on-flaky-tests` ([CLI documentation](https://playwright.dev/docs/test-cli)).
- Do not retry deterministic unit failures.
- Do not let retries repeat harmful external side effects.

### 13.5 Quarantine policy

Quarantine only when the suite must continue while diagnosis proceeds. Require:

- issue, owner, date, failure rate, and user risk;
- exact excluded test and gate impact;
- retained scheduled execution and failure artifacts;
- deadline and removal condition;
- compensating manual or lower-layer evidence if critical behavior is affected.

A quarantined critical-path test means the release risk is unresolved. Do not silently remove it from release decisions.

---

## 14. Pipeline design and test gates

### 14.1 Feedback stages

An effective pipeline narrows fast and grows in fidelity:

1. **Editor/local:** focused unit/component test, type, lint, formatter.
2. **Presubmit:** impacted unit and integration tests, contract generation/verification, build, static security, focused browser/accessibility checks.
3. **Post-merge:** complete unit/integration/contract suites, broader browser matrix, visual review, package verification.
4. **Release candidate:** immutable artifact tests, migrations, critical journeys, accessibility/manual checks, security/performance checks, rollback rehearsal.
5. **Deployment:** smoke, canary analysis, staged promotion, post-deploy verification.
6. **Scheduled:** broad compatibility, mutation, fuzz, long-running performance, resilience, and debt scans.

Google's test-size model separates small, medium, and large tests by resource and environment access, which helps control feedback time even when naming differs ([Test Sizes](https://testing.googleblog.com/2010/12/test-sizes.html)). Size and purpose are separate labels: a contract test can be small or medium depending on execution.

### 14.2 Required versus advisory checks

Make a check required when:

- it detects a material risk with acceptable false-positive cost;
- the result is reproducible and actionable;
- an owner exists for failures and infrastructure;
- bypass requires explicit, auditable risk acceptance;
- runtime fits the stage's feedback goal.

Keep a check advisory while its signal is being calibrated. A required noisy gate will be bypassed; an advisory permanent gate will be ignored. Define the promotion condition.

### 14.3 Change-based selection

Impact analysis can accelerate presubmit checks, but it can miss dynamic dependencies, configuration, generated code, migrations, shared packages, and runtime wiring. Use:

- dependency graphs and ownership maps;
- changed contracts and schemas;
- risk labels for security, data, accessibility, infrastructure, and public APIs;
- a complete post-merge/release suite as backstop;
- periodic validation that selection still catches known dependencies.

### 14.4 Parallelism, sharding, and caching

- Parallelize isolated tests and prove they are isolation-safe.
- Shard by measured duration rather than file count when suites are uneven.
- Pin environment images and browser/tool versions.
- Cache immutable dependencies and build outputs with complete keys.
- Never cache mutable test state or conceal generated-file staleness.
- Aggregate reports without losing shard identity and first failures.
- Include cancellation and cleanup when a stage fails fast.

### 14.5 Failure artifacts

Retain according to sensitivity:

- structured test results;
- application/dependency logs with secrets removed;
- browser traces, screenshots, videos, and network summaries;
- visual expected/actual/diff;
- random seed and minimized counterexample;
- artifact digest, environment, configuration, schema, and browser versions;
- contract and provider verification identities;
- migration progress and invariant checks;
- canary metrics and release decision.

Artifacts can contain tokens, personal data, form input, URLs, and internal topology. Apply access control, redaction, retention, and deletion policy.

### 14.6 Pipeline integrity

- Protect required workflow definitions and test configuration through review.
- Detect focused/skipped tests and unexpected suite-count drops.
- Pin or verify third-party actions and build dependencies according to supply-chain policy.
- Separate untrusted pull-request code from secrets and privileged environments.
- Bind reports and attestations to the artifact digest.
- Make manual approvals name the evidence and risk, not a generic button click.

---

## 15. Coverage, mutation, and test metrics

### 15.1 Coverage is a map

Line, branch, function, and condition coverage show what executed. They do not show whether assertions were correct, inputs were representative, outputs were meaningful, or environments matched production.

Google's coverage guidance calls coverage lossy and indirect and recommends inspecting uncovered important behavior instead of treating a universal percentage as proof ([Code Coverage Best Practices](https://testing.googleblog.com/2020/08/code-coverage-best-practices.html)).

Use coverage to:

- find high-risk branches and modules that no automated test exercises;
- review changed-code coverage in context;
- compare unit and integration contribution;
- locate dead or unreachable code for investigation;
- guide mutation or property testing.

Do not:

- write assertion-free tests to raise a number;
- give generated, trivial, or defensive code equal weight to authorization or money rules;
- exclude hard code merely to protect the threshold;
- assume incidental end-to-end execution evaluates a line's behavior;
- compare percentages across languages/tools without understanding instrumentation.

### 15.2 Mutation testing

Use mutation testing selectively for stable, high-risk rules where ordinary coverage is high but assertion strength is uncertain. Review surviving mutants:

- missing boundary case;
- assertion too broad;
- equivalent mutation with no observable distinction;
- unreachable/dead behavior;
- test coupled to the wrong outcome.

Mutation score is also a metric that can be gamed. Use survivors as review prompts, not a universal target.

### 15.3 Useful test-system metrics

| Metric | Useful question | Misuse to avoid |
|---|---|---|
| First-attempt pass/fail by suite | Is the gate signal trustworthy? | Hiding failures after retries |
| Flake rate and quarantined tests | Where is signal debt accumulating? | Accepting a “normal” flake budget |
| p50/p95 feedback duration | Can developers verify changes promptly? | Optimizing runtime by removing valuable tests |
| Failure diagnosis time | Are artifacts and ownership useful? | Blaming individuals for complex failures |
| Uncovered changed/high-risk behavior | Where is evidence weak? | Universal coverage percentage |
| Escaped defects by risk and layer | What did the strategy miss? | Judging testers by defect count |
| Contract compatibility status | Can versions deploy independently? | Treating schema pass as whole-system pass |
| Visual baseline churn | Are changes reviewed and stable? | Rewarding few changes regardless of product evolution |
| Rollback rehearsal and recovery time | Can release impact be limited? | Claiming recovery from a runbook alone |
| Change failure rate and incident attribution | Does release quality improve? | Avoiding necessary releases to improve the metric |

Track trends and investigate causes. Test counts and pass percentages say little when most tests protect trivial behavior.

### 15.4 Exit criteria

Define release exit criteria in evidence terms:

- all required gates passed on artifact digest `X`;
- no open blocker/major defects in the release scope;
- named risk exceptions approved by the responsible owner;
- contract matrix compatible with supported consumers;
- migration and rollback/repair rehearsal complete;
- accessibility, security, and performance evidence complete for applicable risks;
- canary thresholds, stop conditions, and operator ownership ready;
- known limits documented for the release decision.

---

## 16. Plans, cases, defects, and evidence

### 16.1 Test strategy template

```md
# Test strategy: [change or release]

## Scope
- Outcome:
- In scope:
- Out of scope:
- Release artifact/build:

## Risk
| Failure | Likelihood evidence | Impact | Control/test | Owner |
|---|---|---|---|---|

## Environments and data
- Versions/configuration:
- Real, fake, sandboxed, and shared dependencies:
- Fixtures and privacy controls:
- Supported browser/device/AT matrix:

## Evidence plan
- Unit/property/mutation:
- Integration/fault/concurrency:
- Contract/compatibility:
- Browser/journeys:
- Visual states:
- Accessibility:
- Security/performance:
- Artifact/migration/rollback:
- Canary/post-deploy:

## Gates and ownership
- Required checks:
- Advisory checks:
- Stop/rollback conditions:
- Exception authority:
- Remaining uncertainty:
```

### 16.2 Test case template

```md
## [TEST-ID] Behavioral title

- Protected risk/contract:
- Layer and why:
- Preconditions and controlled data:
- Environment and versions:
- Action/input:
- Expected observable result:
- Expected side effects/non-effects:
- Failure evidence:
- Cleanup:
```

A long series of UI clicks is usually better implemented as executable automation or a concise exploratory charter. Manual cases should preserve meaningful decisions and expected outcomes, not imitate automation syntax.

### 16.3 Exploratory charter

```md
Explore [area]
with [data, role, environment, and tools]
to discover [named risks]
while varying [states, interruptions, inputs, timing, and dependencies].

Time box:
Evidence to capture:
Known constraints:
```

### 16.4 Defect record

```md
## [DEFECT-ID] User/system impact title

- Risk and affected outcome:
- Environment/build/artifact digest:
- Preconditions/data/role:
- Steps or triggering input:
- Actual result:
- Expected contract:
- Scope and affected versions:
- Evidence and correlation ID:
- Severity and rationale:
- Workaround/recovery:
- Owner:
- Fix verification:
- Regression control and layer:
```

### 16.5 Release evidence record

```md
# Release evidence: [version/digest]

- Source commit and build provenance:
- Configuration and schema version:
- Required checks and report links:
- Contract compatibility result:
- Migration/rollback or repair result:
- Accessibility/security/performance result:
- Open defects and approved exceptions:
- Canary stages, thresholds, and owner:
- Post-deployment checks:
- Decision, approver, and time:
```

### 16.6 Regression rule

When a defect is fixed:

1. Reproduce it before the fix where feasible.
2. Identify the missing distinction or invariant.
3. Add the lowest-layer reliable regression control.
4. Add a boundary or release control only if the escaped defect depended on that layer.
5. Verify the test fails without the fix and passes with it.
6. Improve diagnostics or observability if detection was slow.
7. Update the risk model if similar defects can occur elsewhere.

---

## 17. Definition of done

### Risk and scope

- [ ] User/system outcome, non-goals, changed boundaries, and release scope are explicit.
- [ ] Normal, boundary, invalid, failure, hostile, accessibility, security, privacy, compatibility, performance, and operational cases were considered where applicable.
- [ ] Important contracts, invariants, state transitions, side effects, and recovery behavior are documented.
- [ ] Each material risk has a named test, review, monitor, rollout control, or explicit accepted uncertainty.
- [ ] Test depth reflects likelihood, impact, detectability, exposure, and reversibility.

### Unit and integration

- [ ] Rules and transformations are tested at meaningful boundaries and input classes.
- [ ] Tests protect observable behavior rather than private structure.
- [ ] Real dependencies are used where database, protocol, serialization, framework, or provider behavior is the risk.
- [ ] Integration dependencies, schema, configuration, and versions are recorded.
- [ ] Transactions, concurrency, timeouts, retries, cancellation, cleanup, and partial failure are tested where owned.
- [ ] Property, mutation, fuzz, model, or fault testing is used for high-risk input/state spaces where useful.

### Contracts

- [ ] Public APIs, events, packages, CLIs, configuration, and artifact contracts are identified.
- [ ] Schemas/specifications are linted, diffed, and verified against implementations where applicable.
- [ ] Consumer/provider contracts cover active consumers and supported rollback versions.
- [ ] Errors, unknown fields/enums, ordering, pagination, idempotency, and compatibility windows are deliberate.
- [ ] Deprecation and breaking-change policy matches release versioning and communication.

### Browser, visual, and accessibility

- [ ] Browser/component tests cover rendered behavior that lower layers cannot establish.
- [ ] A small set of critical journeys verifies assembled-system behavior and recovery.
- [ ] Browser/device/viewport selection follows the product support policy and audience evidence.
- [ ] Locators and assertions follow user-visible or explicit stable contracts.
- [ ] Visual baselines cover material states, content extremes, themes, and responsive variants.
- [ ] Every visual baseline change received intentional review; no blanket update was used.
- [ ] Accessibility automation and required keyboard, screen-reader, zoom/reflow, forced-color, and reduced-motion protocols passed.

### Reliability and data

- [ ] Tests are isolated, order-independent, deterministic, and safe in CI parallelism.
- [ ] Time, randomness, identifiers, and eventual consistency are controlled explicitly.
- [ ] Test data is minimal, synthetic by default, privacy-safe, and cleaned up.
- [ ] External side effects cannot reach real users, money, messages, or destructive production state accidentally.
- [ ] First failures and diagnostic artifacts are preserved.
- [ ] Flaky tests are fixed or quarantined with owner, risk, evidence, deadline, and compensating control.
- [ ] Retries do not convert flakes into silent passes.

### Release

- [ ] The exact immutable artifact being promoted was tested and identified by digest.
- [ ] Build provenance, package contents, configuration, dependencies, and required scans are verified.
- [ ] Fresh install/start, upgrade, migration, compatibility, and rollback/repair were tested as applicable.
- [ ] Smoke, regression, exploratory, operational, security, performance, and accessibility evidence matches the change risk.
- [ ] Observability, alerts, runbooks, stop controls, and operator permissions are ready.
- [ ] Canary stages use representative, attributable signals and explicit promotion/rollback thresholds.
- [ ] Post-deployment verification is safe, owned, and time-bounded.

### Evidence and governance

- [ ] Required and advisory gates are explicit and reproducible.
- [ ] Tool, browser, dependency, environment, fixture, and report versions are recorded.
- [ ] Coverage is reviewed as a risk map, not proof or a universal percentage target.
- [ ] Test and release artifacts follow privacy, access, redaction, and retention rules.
- [ ] Open defects, exclusions, assumptions, and risk acceptances have owners and review dates.
- [ ] The final claim is no broader than the tested scope and evidence.

---

## 18. Research basis and source notes

### 18.1 Risk, test design, and evidence

- International Software Testing Qualifications Board. [Certified Tester Foundation Level Syllabus v4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf). Risk-based testing, test levels/types, techniques, planning, and reporting. Certification guidance is useful vocabulary, not a substitute for product-specific evidence.
- Google Testing Blog. [Test Sizes](https://testing.googleblog.com/2010/12/test-sizes.html). Resource- and environment-based small/medium/large classification.
- Google Testing Blog. [How Much Testing Is Enough?](https://testing.googleblog.com/2021/06/how-much-testing-is-enough.html). Layered testing, documentation, and production feedback.
- Google Testing Blog. [Code Coverage Best Practices](https://testing.googleblog.com/2020/08/code-coverage-best-practices.html). Coverage as a lossy risk signal and the danger of universal targets.
- Google Testing Blog. [Flaky Tests at Google and How We Mitigate Them](https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html) and [Test Flakiness](https://testing.googleblog.com/2020/12/test-flakiness-one-of-main-challenges.html). Definitions, causes, signal cost, and mitigation experience.
- Google Testing Blog. [How I Learned to Stop Writing Brittle Tests and Love Expressive APIs](https://testing.googleblog.com/2024/04/how-i-learned-to-stop-writing-brittle.html). Resilient, behavior-oriented assertions.
- Hypothesis. [Property-based testing documentation](https://hypothesis.readthedocs.io/en/latest/). Generated examples, declared input domains, and minimized failures.
- Stryker Mutator. [What is mutation testing?](https://stryker-mutator.io/docs/). Mutants, killed/surviving changes, and assertion-strength feedback.

### 18.2 Integration, contracts, and compatibility

- Testcontainers. [Introduction](https://testcontainers.com/guides/introducing-testcontainers/). Isolated integration testing with real service types.
- OpenAPI Initiative. [OpenAPI Specification 3.2.0](https://spec.openapis.org/oas/v3.2.0.html). Current published HTTP API description specification at the research date.
- Pact. [Contract testing introduction](https://docs.pact.io/), [How Pact works](https://docs.pact.io/getting_started/how_pact_works), and [Provider verification](https://docs.pact.io/getting_started/provider_verification). Consumer-driven interaction generation and provider verification.
- Semantic Versioning. [Semantic Versioning 2.0.0](https://semver.org/). Version promises tied to a declared public API.
- web-platform-tests. [Project documentation](https://web-platform-tests.org/). Shared cross-browser web-platform test suite and results.

### 18.3 Browser, visual, and accessibility

- Microsoft Playwright. [Browsers](https://playwright.dev/docs/browsers), [projects](https://playwright.dev/docs/test-projects), [best practices](https://playwright.dev/docs/best-practices), [assertions](https://playwright.dev/docs/test-assertions), [visual comparisons](https://playwright.dev/docs/test-snapshots), [CI](https://playwright.dev/docs/ci), and [trace viewer](https://playwright.dev/docs/trace-viewer-intro). Browser matrices, observable waiting, screenshot environment limits, CI, and failure artifacts.
- Storybook. [UI testing overview](https://storybook.js.org/docs/writing-tests/index) and [visual tests](https://storybook.js.org/docs/writing-tests/visual-testing). Component state inventories and reviewed visual baselines. Some integrations are vendor services; the general state/baseline principles remain tool-independent.
- W3C Web Accessibility Initiative. [Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/). Automation limits and need for knowledgeable human evaluation.
- Project reference. [Web Accessibility Implementation and Verification](../../accessibility/references/research.md). Detailed WCAG 2.2 AA and manual/automated protocols.

### 18.4 Security, artifacts, and releases

- NIST. [Secure Software Development Framework, SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final). Secure-development practices integrated across the lifecycle.
- OWASP. [Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/). Versioned requirements for web-application security verification.
- SLSA. [Specification v1.2](https://slsa.dev/spec/v1.2/). Source/build tracks, provenance, attestations, and supply-chain guarantees.
- Google SRE Workbook. [Canarying Releases](https://sre.google/workbook/canarying-releases/). Reproducible release engineering, partial rollout, control comparison, attributable metrics, and rollback.
- Google SRE Book. [Release Engineering](https://sre.google/sre-book/release-engineering/). Automated, repeatable build and release processes.

### 18.5 Interpretation limits

- Test taxonomies overlap. Classify a test by the risk, boundary, and environment it exercises, not only its filename or framework.
- Tool documentation describes capability and constraints; it does not establish that the tool is appropriate for this repository.
- A test passing establishes only that its setup, action, oracle, and environment did not expose a failure in that run.
- Risk assessment is contextual and changes with architecture, audience, incidents, regulation, dependencies, and release method.
- Coverage, mutation score, pass count, flake rate, and canary metrics compress context. They need human interpretation and cannot replace product outcomes.
- Staging and synthetic load cannot reproduce every production state. Progressive delivery limits exposure; it does not make defects harmless.
- Security, accessibility, performance, privacy, safety, and legal testing require specialized requirements and qualified review proportional to risk.

The defensible synthesis is: identify consequential failures, put each control at the layer that can genuinely observe it, preserve deterministic and reproducible evidence, test the exact artifact and recovery path, release progressively, and state uncertainty no more narrowly or broadly than the evidence permits.

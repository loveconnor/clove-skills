---
name: analytics
description: Design, implement, audit, and interpret trustworthy product analytics. Use for measurement questions, metric trees, event taxonomies and contracts, instrumentation, identity and sessions, funnels, cohorts, retention, experiments, guardrails, dashboards, data-quality monitoring, privacy and consent, attribution limits, and deciding what product metrics do or do not establish.
---

# Analytics

## Operating principle

Start with a decision and observable behavior, then design the minimum data needed to answer it. Treat analytics as a versioned data product whose semantics, quality, privacy, and uncertainty require ownership.

## Load the detailed research

Read `references/research.md` for new measurement systems, consequential metrics, experiments, identity changes, instrumentation audits, or disputed interpretations.

Useful searches:

```sh
rg -n '^## (2|3|4|5)\.|source hierarchy|measurement question|taxonomy|event contract' references/research.md
rg -n '^## (6|7|8)\.|instrument|identity|session|privacy|consent|governance' references/research.md
rg -n '^## (9|10|11|12)\.|funnel|cohort|retention|metric|guardrail|experiment' references/research.md
rg -n '^## (13|14|15|16)\.|interpret|quality|synthesi|specification|checklist' references/research.md
```

## Workflow

### 1. Frame the decision

Define the decision, actor, behavior, population, time horizon, comparison, expected mechanism, guardrails, and action thresholds. Separate user outcome, business outcome, system health, and diagnostic signals.

### 2. Model events and entities

Inventory product objects, actors, states, transitions, and durable outcomes. Create a governed taxonomy with stable event names, ownership, versions, and prohibited data. Prefer semantic business events over UI clicks when the decision concerns completed behavior.

### 3. Write event contracts

For every event, define trigger, non-trigger cases, source of truth, actor and object identifiers, timestamp semantics, properties, eligibility, consent behavior, deduplication key, schema version, examples, owner, and tests. State whether the event represents intent, attempt, acceptance, completion, failure, reversal, or observation.

### 4. Implement at the trustworthy boundary

Emit events where the system can know the claimed outcome. Make retries idempotent, handle offline and delayed delivery, preserve event time and processing time, validate schemas, and prevent test or internal traffic contamination. Keep analytics failure from corrupting the core product path.

### 5. Define identity and eligibility

Specify anonymous and authenticated identity, account linking, devices, users, organizations, sessions, time zones, bots, employees, test accounts, consent, and experiment eligibility. Never silently merge people or let denominator rules vary between reports.

For multi-tenant products, keep person, account, tenant, membership, and journey identities distinct. Freeze or explicitly version the tenant and eligibility context at funnel entry; do not join one global entry to every tenant the person later enters or count correlated tenant episodes as independent people.

### 6. Specify analysis before reading results

For funnels, cohorts, retention, experiments, and metrics, define population, unit, event sequence, windows, exclusions, late data, reversals, aggregation, uncertainty, guardrails, and decision rule. Freeze or version the specification before interpreting an experiment.

### 7. Verify data quality

Test event emission, schema, semantics, deduplication, ordering, identity, consent, and warehouse transformations. Reconcile critical events with a system of record. Monitor volume, nulls, uniqueness, latency, duplicates, drift, and invariant violations by version and environment.

### 8. Interpret conservatively

Distinguish description, association, attribution, and causal evidence. Examine absolute and relative change, denominator, distribution, segments, novelty, seasonality, concurrent changes, missing data, and guardrails. Do not explain a metric movement with a story the design cannot test.

## Analytics rules

- Collect only data needed for an explicit current purpose.
- Keep secrets, message content, free text, sensitive attributes, and unnecessary personal data out of events.
- Suppress optional analytics when applicable consent or processing-authority signals are denied, unknown, stale, or conflicting; do not retrospectively stitch or backfill pre-permission behavior after permission changes.
- Do not use event properties as an ungoverned dumping ground.
- Separate event, metric, report, target, and decision definitions.
- Version semantic changes and protect historical comparability.
- Treat experiment exposure, assignment, eligibility, and outcome as separate facts.
- Do not optimize one metric without guardrails for user harm, reliability, accessibility, privacy, and long-term value.
- Re-verify vendor behavior, privacy rules, and experiment methods when time-sensitive.

## Handoff

Provide the decision question, metric and event specifications, identity and eligibility rules, privacy basis, implementation points, validation results, data-quality status, analysis method, uncertainty, guardrails, and recommended action. State what the data cannot establish.

Combine with `testing` for instrumentation verification, `security-privacy` for personal-data and abuse risks, and `marketing` when interpreting acquisition, lifecycle, brand, or campaign outcomes.

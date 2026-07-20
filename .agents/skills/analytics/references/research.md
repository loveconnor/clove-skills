# Product Analytics: Measurement, Experimentation, and Interpretation

> A practical, evidence-based reference for event taxonomy, instrumentation, funnels, cohorts, experiments, guardrails, data quality, and metric interpretation.
>
> **Scope:** Product and service analytics. This is not a substitute for jurisdiction-specific privacy or legal review, financial audit standards, clinical statistics, or a platform's current documentation.
>
> **Last researched:** 2026-07-20. Re-check vendor behavior, privacy requirements, and statistical tooling before consequential use.

## Contents

1. [Purpose and operating principles](#1-purpose-and-operating-principles)
2. [Evidence and source hierarchy](#2-evidence-and-source-hierarchy)
3. [Frame the measurement question](#3-frame-the-measurement-question)
4. [Design an event taxonomy](#4-design-an-event-taxonomy)
5. [Define event contracts](#5-define-event-contracts)
6. [Implement trustworthy instrumentation](#6-implement-trustworthy-instrumentation)
7. [Identity, time, sessions, and eligibility](#7-identity-time-sessions-and-eligibility)
8. [Privacy, consent, and governance](#8-privacy-consent-and-governance)
9. [Specify and interpret funnels](#9-specify-and-interpret-funnels)
10. [Specify and interpret cohorts and retention](#10-specify-and-interpret-cohorts-and-retention)
11. [Define metrics and guardrails](#11-define-metrics-and-guardrails)
12. [Design and analyze experiments](#12-design-and-analyze-experiments)
13. [Interpret metrics without overclaiming](#13-interpret-metrics-without-overclaiming)
14. [Verify analytics and monitor data quality](#14-verify-analytics-and-monitor-data-quality)
15. [Synthesize evidence for decisions](#15-synthesize-evidence-for-decisions)
16. [Reusable specifications and checklists](#16-reusable-specifications-and-checklists)
17. [Primary and official sources](#17-primary-and-official-sources)

## 1. Purpose and operating principles

Product analytics is a measurement system, not a dashboard collection. It should connect an explicit decision to observable behavior through defined events, populations, transformations, metrics, quality checks, and uncertainty. A chart is only the final rendering of that chain.

Use analytics to answer questions such as:

- What happened, how often, to whom, and under what defined conditions?
- Where does an observable workflow fail or require recovery?
- How does behavior differ across comparable entry cohorts?
- Did a randomized intervention cause a meaningful change in a specified population during a specified period?
- Did a release preserve safety, accessibility, trust, reliability, and long-term value while improving its primary outcome?

Do not ask event data to establish a person's motive, understanding, satisfaction, or welfare by itself. Analytics observes recorded behavior. Interviews, usability work, support evidence, accessibility testing, domain review, and operational records answer different questions.

### 1.1 Core principles

1. **Start with a decision, not an event.** Record data because a named owner needs to make or monitor a decision.
2. **Measure outcomes and failure states, not only clicks.** A click proves an input was recorded; it does not prove the requested outcome occurred.
3. **Define the denominator.** Every rate needs an eligible population, unit of analysis, time window, exclusions, and maturity rule.
4. **Preserve provenance.** Keep the path from source occurrence through ingestion and transformation to reported metric inspectable.
5. **Separate measurement from interpretation.** Store source facts, calculations, assumptions, and conclusions as different layers.
6. **Treat missing and duplicate data as expected failure modes.** Instrumentation has retries, blockers, offline use, late arrival, and version skew.
7. **Pair success metrics with guardrails.** A local gain is not acceptable if it increases harm, errors, exclusion, latency, regret, support burden, or privacy risk.
8. **Use uncertainty honestly.** A precise-looking estimate can still be weak because of measurement error, sampling variation, confounding, interference, or limited external validity.
9. **Make definitions versioned and owned.** Events, metrics, cohorts, and dashboards are production interfaces.
10. **Prefer the smallest sufficient dataset.** More behavioral data increases operational, interpretive, and privacy risk.

### 1.2 What analytics can and cannot establish

| Claim | Analytics can support | Analytics alone cannot establish |
|---|---|---|
| Adoption | A defined actor emitted a defined use or outcome event | The feature was useful, understood, or used voluntarily |
| Conversion | Eligible units completed defined steps within a window | A particular step caused abandonment |
| Retention | A defined cohort returned for a defined outcome | Return implies value, satisfaction, or healthy dependence |
| Experiment effect | Random assignment changed a measured outcome under stated assumptions | The effect will persist, generalize, or be fair to every subgroup |
| Error rate | Recorded failures divided by a defined opportunity count | All failures were observable or equally likely to be recorded |
| Engagement | Recorded activity, frequency, or duration | User benefit; high duration can also signal difficulty |

The durable rule is: **describe what the data records before explaining what the behavior means.**

## 2. Evidence and source hierarchy

Analytics guidance mixes formal standards, statistical research, platform semantics, and local product knowledge. Use each for the claim it is qualified to support.

### 2.1 Source hierarchy

Use this order when definitions conflict:

1. **Local product and operational truth:** authoritative backend state, domain rules, identity model, permissions, billing ledger, incident records, release history, and agreed business definitions.
2. **Formal and public specifications:** event envelopes, schema formats, provenance models, privacy frameworks, and relevant statistical standards.
3. **Primary methodological research:** peer-reviewed or first-party research on online experimentation, variance, interference, telemetry loss, and interpretation.
4. **Current platform documentation:** the exact counting, filtering, identity, window, and retention behavior of the deployed analytics product.
5. **Practitioner guidance:** useful for implementation patterns, never sufficient to override the actual system or statistical assumptions.

Examples are not mandates. [OpenTelemetry's event guidance](https://opentelemetry.io/docs/specs/semconv/general/events/) is useful for stable names and attributes, but OpenTelemetry is an observability standard, not a universal product-analytics taxonomy. [Google Analytics funnel behavior](https://support.google.com/analytics/answer/9327974) and [Amplitude retention behavior](https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-time) describe those tools, not a platform-independent definition.

### 2.2 Build a truth chain

For every material metric, make this chain recoverable:

```text
real occurrence
  -> producing system and code version
  -> event contract and schema version
  -> event-time record
  -> transport and ingestion
  -> raw immutable or reconstructable record
  -> identity and eligibility rules
  -> transformations and exclusions
  -> metric or experiment estimator
  -> chart/table
  -> interpretation
  -> decision and owner
```

The [W3C PROV model](https://www.w3.org/TR/prov-overview/) distinguishes entities, activities, and agents. That is a useful minimum vocabulary for analytics lineage: identify the data artifact, the transformation that produced it, and the responsible system or owner.

### 2.3 Record provenance at three levels

**Event provenance**

- producer and environment;
- application, API, and schema version;
- occurrence time and observation/ingestion time;
- source event identifier and correlation identifiers;
- consent or collection state where relevant.

**Dataset provenance**

- input tables or streams and versions;
- transformation code and release;
- identity stitching, filtering, deduplication, and backfill rules;
- schedule, freshness, and known gaps;
- data owner and quality status.

**Analysis provenance**

- query, notebook, semantic-layer metric, or report version;
- run time and data cutoff;
- population, window, exclusions, and dimensions;
- estimator and uncertainty method;
- analyst, reviewer, decision, and later correction.

## 3. Frame the measurement question

Do not begin with “What should we track?” Begin with “What decision must this evidence improve?”

### 3.1 Write a measurement brief

A useful brief answers:

| Field | Question |
|---|---|
| Decision | What will someone do differently based on this evidence? |
| Owner | Who is accountable for the decision and metric definition? |
| Population | Which users, accounts, devices, transactions, or opportunities are eligible? |
| User outcome | What observable state indicates the person completed the intended job? |
| Business outcome | What legitimate product or organizational result matters? |
| Failure | Which error, abandonment, reversal, complaint, or harm states matter? |
| Intervention | What product or operational change is being evaluated? |
| Comparison | Baseline, historical period, cohort, control group, or target? |
| Time | Event window, observation window, data cutoff, seasonality, and maturity lag? |
| Decision threshold | What magnitude would change the decision? |
| Guardrails | What must not materially worsen? |
| Evidence limits | Which motives, offline outcomes, or populations are not observed? |

### 3.2 Convert vague questions into computable questions

Weak: “Are people using onboarding?”

Better: “Among newly created eligible accounts whose first administrator saw onboarding version 3 between July 1 and July 31, what proportion completed the required setup state within seven event-time days, and how did median time, validation failures, abandonment, support contacts, and 30-day retained setup compare with the prior version?”

Weak: “Did the redesign improve conversion?”

Better: “For eligible checkout attempts randomized at account level, what was the intent-to-treat difference in server-confirmed paid orders per assigned account over 14 days, with refund, duplicate-order, payment-error, accessibility-support, and page-performance guardrails?”

The stronger questions expose the actor, unit, eligibility, source of truth, window, comparison, and possible harm.

### 3.3 Define observable outcomes before proxies

Use the closest feasible record to the real outcome:

| Intended outcome | Weak proxy | Better observable record |
|---|---|---|
| Order completed | Pay button clicked | Server-confirmed order transitioned to `paid` |
| File shared | Share dialog opened | Permission persisted and recipient access succeeded |
| Form submitted | Submit control activated | Valid form accepted and durable record created |
| Recovery succeeded | Retry clicked | Failed operation later reached the intended state |
| Content understood | Page viewed | Task evidence plus comprehension research; analytics alone is insufficient |

Proxies are sometimes necessary. Label them as proxies, state why the direct outcome is unavailable, and record the failure modes of the proxy.

### 3.4 Predefine the interpretation boundary

Before data is visible, write:

- what result would support the hypothesis;
- what would contradict it;
- what would be inconclusive;
- what data-quality failure would invalidate the analysis;
- which subgroup views are confirmatory and which are exploratory;
- what follow-up evidence would be required to explain the result.

This reduces outcome-driven reframing and selective reporting.

## 4. Design an event taxonomy

An event is a named record of an occurrence or state change. The name defines a stable event class; properties carry the variable context. OpenTelemetry similarly describes events as named, point-in-time occurrences and warns against dynamic values in names ([event semantic conventions](https://opentelemetry.io/docs/specs/semconv/general/events/)).

### 4.1 Model domain occurrences, not the DOM

Prefer events that survive UI redesigns:

- `checkout_started`, not `green_button_clicked`;
- `payment_method_selected`, not `radio_3_clicked`;
- `order_submitted`, `order_completed`, and `order_failed`, not one ambiguous `checkout` event;
- `subscription_cancelled`, not `modal_confirmed`;
- `report_export_completed`, not `download_icon_clicked`.

UI interaction events can be useful for diagnosing discoverability or interaction problems, but they should not replace durable domain events.

### 4.2 Use a small set of event classes

| Class | What it records | Examples | Typical authority |
|---|---|---|---|
| Eligibility or exposure | The unit could actually encounter a surface or treatment | `onboarding_shown`, `experiment_exposed` | Client plus assignment service |
| Intent or command | The actor requested an action | `order_submitted`, `invite_sent` | Client or API boundary |
| State transition | A domain object changed state | `order_completed`, `invite_accepted` | Authoritative service |
| Failure | A requested action failed in a classified way | `payment_failed`, `export_failed` | Service or client boundary |
| Recovery | The intended outcome occurred after failure or interruption | `payment_recovered`, `draft_resumed` | Derived or authoritative service |
| Lifecycle | An entity entered a durable stage | `account_activated`, `subscription_cancelled` | Authoritative service |
| Quality | Reliability, performance, or integrity evidence | `render_failed`, `sync_delayed` | Observability or service layer |
| Governance | Collection or preference state changed | `analytics_consent_changed` | Consent authority |

Keep assignment, exposure, action, and outcome distinct. Assignment means a unit was allocated to a treatment. Exposure means the treatment could affect that unit. Action means the unit did something observable. Outcome means the relevant state was reached.

### 4.3 Choose and enforce a naming grammar

A practical default is a stable lower-case past-tense occurrence:

```text
<domain_object>_<occurrence>

order_submitted
order_completed
order_failed
refund_completed
```

Another coherent convention, such as `commerce.order_completed`, is acceptable. Consistency matters more than the separator.

Rules:

- name what occurred, not what a hoped-for result means;
- use one canonical term for each domain object;
- keep dynamic IDs, variants, locales, and error codes in properties;
- do not include UI position, campaign name, or user-entered text in the name;
- avoid overloaded events whose meaning changes based on unrelated properties;
- do not encode version in the name unless the occurrence itself changed incompatibly;
- reserve names before implementation to prevent near-duplicates.

### 4.4 Separate attempts, outcomes, and reversals

For consequential flows, one “success” event is insufficient:

```text
order_started
order_submitted
order_rejected
order_completed
order_cancelled
refund_completed
```

This supports these different questions:

- Did the user express intent?
- Did the system accept the request?
- Did the durable business outcome occur?
- Was it later reversed?
- Did a retry recover a failure?

Do not infer one state from another when the domain has asynchronous processing, third-party dependencies, cancellation, or rollback.

### 4.5 Keep event properties semantic

A property should answer a stable analytical question.

Good properties include:

- domain classification, such as `payment_method_type`;
- explicit lifecycle state;
- stable feature or flow identifier;
- release and schema version;
- error class, not raw exception text;
- numeric quantity with an explicit unit;
- experiment assignment and exposure metadata;
- accessibility-relevant product mode only when necessary, consented, and appropriately governed.

Avoid:

- free-form user-entered content;
- emails, phone numbers, full IP addresses, secrets, session tokens, or authentication material;
- full URLs that may contain query parameters or personal data;
- raw stack traces or error messages in product analytics;
- unbounded IDs used only for debugging;
- properties whose meaning depends on current UI labels;
- guessed motive, sentiment, ability, identity, or demographic category.

### 4.6 Manage taxonomy lifecycle

Give every event one lifecycle state:

```text
proposed -> active -> deprecated -> retired
```

For each transition:

- name the owner and reviewer;
- record the introduction, deprecation, and retirement dates;
- state the replacement and migration window;
- preserve old schema interpretation for historical queries;
- warn downstream metric and cohort owners before incompatible change;
- prohibit silent semantic reuse of a retired event name.

Version the schema when properties or meaning change. A new optional property can often be backward-compatible. Changing the unit, authoritative producer, event timing, or meaning is not.

## 5. Define event contracts

An event contract states what an event means, when it occurs, who emits it, and how consumers can trust it. Treat it like an API contract.

### 5.1 Minimum event envelope

The OpenTelemetry log data model distinguishes occurrence time from observed time and includes fields for event name, trace correlation, resource, instrumentation scope, and attributes ([logs data model](https://opentelemetry.io/docs/specs/otel/logs/data-model/)). Product analytics can reuse the principle without copying the model wholesale.

| Field | Purpose | Rule |
|---|---|---|
| `event_id` | Idempotency and deduplication | Globally unique for one logical occurrence |
| `event_name` | Stable event class | No dynamic values |
| `schema_version` | Decode historical meaning | Increment on contract change |
| `occurred_at` | When the occurrence happened | UTC timestamp plus documented precision |
| `observed_at` | When collection received it | Preserve separately for delay analysis |
| `source` | Authoritative producer | Stable system/component identifier |
| `environment` | Production, staging, test | Never infer from hostname alone |
| `actor_id` | Pseudonymous analysis unit when needed | Governed identity, not an email |
| `anonymous_id` | Pre-authentication continuity when needed | Define merge and rotation policy |
| `entity_id` | Account, order, document, or other object | Include entity type when ambiguous |
| `correlation_id` | Connect related attempt/outcome records | Not a substitute for `event_id` |
| `release_version` | Attribute changes and regressions | Stable deploy/build identifier |
| `properties` | Event-specific context | Typed, bounded, documented |

Not every event needs every identity field. Collect only what the defined measurement purpose requires.

### 5.2 Event contract template

```markdown
## `order_completed`

- Purpose: Measure durable paid-order completion.
- Owner: Commerce domain team.
- Lifecycle: Active.
- Authoritative producer: Order service after committed `paid` transition.
- Trigger: Emit once when an order first commits from an unpaid state to `paid`.
- Non-trigger: Page view, pay-button activation, pending authorization, retry, replay.
- Unit: One logical order.
- Identity: `order_id`; pseudonymous `account_id` when analysis requires it.
- Required properties:
  - `currency`: ISO 4217 code.
  - `amount_minor`: integer minor currency units.
  - `payment_method_type`: controlled enum.
- Correlation: `checkout_attempt_id` connects submission and outcome.
- Deduplication: `event_id`; unique transition constraint on `order_id` and state.
- Timing: `occurred_at` is commit time; `observed_at` is ingestion time.
- Privacy: No payment credentials, email, address, or free-form text.
- Known loss modes: Ingestion outage; repaired from the order-state change log.
- Verification: Contract, integration, reconciliation, and production-volume checks.
- Downstream consumers: Paid-order conversion, revenue, experiment guardrails.
```

### 5.3 Define every property

For each property, record:

- type and nullability;
- semantic definition;
- unit and precision;
- allowed enum or expected cardinality;
- source and authority;
- whether it is event-time or current-state data;
- default behavior and whether missing differs from zero or false;
- privacy classification and retention;
- introduction/deprecation versions.

Use [JSON Schema Draft 2020-12](https://json-schema.org/draft/2020-12) or an equivalent schema system when it fits the stack. Schema validation checks structure; it does not prove semantic correctness.

### 5.4 Example payload

```json
{
  "event_id": "01J...",
  "event_name": "order_completed",
  "schema_version": 2,
  "occurred_at": "2026-07-20T14:21:03.418Z",
  "observed_at": "2026-07-20T14:21:04.029Z",
  "source": "order-service",
  "environment": "production",
  "actor_id": "usr_pseudo_...",
  "entity_id": "ord_...",
  "correlation_id": "checkout_...",
  "release_version": "orders-2026.07.20.2",
  "properties": {
    "currency": "USD",
    "amount_minor": 4900,
    "payment_method_type": "card"
  }
}
```

The values are illustrative. Production identifiers must follow the project's privacy and security model.

## 6. Implement trustworthy instrumentation

### 6.1 Put each fact at its authoritative boundary

| Fact | Preferred producer | Reason |
|---|---|---|
| Surface became perceivable | Client | Only the rendered client knows actual presentation |
| Control was activated | Client | It owns the interaction |
| Request was accepted | API/service boundary | It owns validation and acceptance |
| Durable state changed | Authoritative domain service | It owns committed state |
| External provider completed work | Verified webhook plus domain service | Provider result must be reconciled into local truth |
| Experiment assignment | Assignment service | It owns stable allocation |
| Experiment exposure | Client/service where treatment became effective | Assignment is not exposure |

Do not emit a durable-success event optimistically from a client. Do not use a server request event to claim the user actually saw a surface.

### 6.2 Design for delivery reality

Analytics transport can be at-least-once, delayed, reordered, blocked, or partially unavailable. Define:

- retry and backoff;
- batching and flush behavior;
- offline queue limits and expiry;
- idempotency and deduplication;
- maximum accepted lateness;
- event-time versus processing-time queries;
- behavior during navigation, process exit, and backgrounding;
- quarantine or rejection for invalid events;
- monitoring for loss rather than silent discard.

An event ID should identify one logical occurrence across retries. A correlation ID groups different occurrences in one workflow; it must not collapse attempt, outcome, failure, and recovery into a single event.

### 6.3 Avoid double counting client and server records

If both sides record the same logical occurrence, choose one of these designs:

1. Make one canonical and keep the other in an observability stream.
2. Model them as different events, such as `order_submitted` and `order_accepted`.
3. Reconcile them with a shared correlation ID and explicit canonicalization.

Never union near-duplicate client and server events and hope a later `distinct` operation repairs them.

### 6.4 Preserve event-time truth

Store both occurrence and observation times. This permits:

- late-data completeness checks;
- replay and backfill identification;
- event-time funnel ordering;
- ingestion-latency monitoring;
- separation of user behavior from pipeline delay.

Do not overwrite `occurred_at` with ingestion time. Flag records whose client clocks are implausible and define the fallback rather than silently changing history.

### 6.5 Treat derived events as transformations

Some concepts are computed rather than emitted: `account_activated`, `setup_recovered`, or `high_intent_session`. For each derived event:

- keep the source event or domain records;
- version the derivation;
- record its query/code and owner;
- state whether past results are recomputed after logic changes;
- distinguish it visibly from source occurrences;
- monitor the inputs and output.

### 6.6 Instrument experiment assignment and exposure separately

Record assignment once for the randomization unit. Record exposure only when the treatment can affect that unit. Include:

- experiment and variant IDs;
- assignment unit and pseudonymous unit ID;
- assignment version and timestamp;
- eligibility version;
- exposure surface and timestamp;
- release/configuration version.

Post-assignment filtering can break randomization. If triggered analysis is planned, define it before launch and ensure the trigger is not itself affected in a way that creates selection bias.

### 6.7 Keep analytics non-blocking but observable

Product analytics failure should rarely block the user's core task. Still:

- expose collection failures to operational telemetry;
- bound memory and network use;
- avoid retry storms;
- avoid leaking payloads in logs;
- preserve consent choices during failure;
- define which critical records can be reconstructed from authoritative state.

## 7. Identity, time, sessions, and eligibility

Most metric disagreements are denominator or identity disagreements disguised as chart disagreements.

### 7.1 Choose the unit that matches the decision

Common units include:

- person or pseudonymous user;
- account, tenant, organization, household, or team;
- device or browser;
- session;
- transaction, order, document, job, or request;
- eligible opportunity or exposure.

Do not mix them. “Conversion” per session, user, account, and checkout attempt are four different metrics.

For collaborative or B2B products, a person-level outcome may overrepresent large accounts. Report both account and actor views when each answers a legitimate question.

### 7.2 Specify anonymous-to-known identity behavior

Define:

- how anonymous identifiers are created and rotated;
- whether pre-authentication events are linked after sign-in;
- merge precedence when devices or accounts conflict;
- logout and shared-device behavior;
- cross-device limitations;
- account transfer and deletion behavior;
- whether historical records are restitched after rule changes.

Do not pretend device identity is person identity. Do not merge accounts based on weak signals merely to increase apparent continuity.

### 7.3 Separate actor, entity, and payer

One person may act for an account, affect a document, and generate an order paid by an organization. Keep these identities distinct so that:

- authorization and privacy boundaries remain visible;
- account-level metrics do not double-count people;
- transaction outcomes retain their own lifecycle;
- experiment randomization aligns with interference boundaries.

### 7.4 Treat sessions as derived conventions

A session is not a natural fact. Document:

- start condition;
- inactivity timeout;
- events that extend the session;
- midnight and timezone behavior;
- background/foreground handling;
- cross-tab and cross-device behavior;
- authentication changes;
- whether a long task can span sessions.

Prefer task or entity windows when the product workflow has a durable beginning and end. A 30-minute inactivity rule may be convenient, but it should not redefine a multi-day application or approval process.

### 7.5 Define time precisely

State:

- event time or processing time;
- UTC storage and display timezone;
- rolling duration or calendar boundary;
- week start and fiscal calendar;
- daylight-saving behavior;
- inclusion of window endpoints;
- maximum lateness and finalization lag;
- release and incident intervals.

“Day 1 retention” can mean a rolling 24–48-hour interval or the next calendar date. Amplitude documents both and shows that the choice changes the result ([retention time semantics](https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-time)).

### 7.6 Define eligibility before outcome

For every rate, specify who or what had a real opportunity to succeed:

- necessary permission and product availability;
- supported platform and release;
- feature flag or treatment assignment;
- geographic or contractual eligibility;
- required prior state;
- test, employee, bot, abuse, and synthetic-traffic exclusion;
- data-quality and maturity requirements.

Do not define the denominator using a post-outcome property. That creates survivorship or collider bias.

## 8. Privacy, consent, and governance

Analytics is data processing about behavior. Treat privacy as a design constraint, not a cleanup step. The [NIST Privacy Framework](https://www.nist.gov/privacy-framework) is a voluntary risk-management tool intended to help organizations manage privacy risk while protecting individuals.

### 8.1 Establish purpose before collection

For each event and property, name:

- the decision or operational need it supports;
- the lawful and organizational basis determined by qualified owners;
- the users and regions affected;
- collection, use, sharing, and retention boundaries;
- who can access raw and aggregated forms;
- deletion, export, and preference behavior;
- every destination and processor.

If no owner can name a valid use, do not collect it “just in case.”

### 8.2 Minimize data

Prefer:

- pseudonymous identifiers over direct identifiers;
- controlled categories over free text;
- coarse location or no location over precise coordinates;
- bounded numeric values over full payloads;
- server-derived classifications over raw sensitive inputs;
- aggregate reporting where individual detail is unnecessary;
- short, purpose-linked retention.

Hashing an email makes it less readable, not anonymous. It remains stable and linkable, so treat it as sensitive identifier data.

### 8.3 Respect collection and preference state

Where consent or user choice applies:

- evaluate it before collection and before every downstream destination;
- make the choice specific, understandable, and revocable;
- propagate change and deletion through queues, warehouses, profiles, exports, and vendors;
- do not encode refusal as a dark pattern or product penalty unless strictly necessary and truthfully explained;
- retain only the minimum record needed to enforce the preference;
- test pre-consent, post-consent, revocation, expiration, and conflicting-device states.

Jurisdiction, product role, contract, and data category change the requirements. Re-verify them with privacy and legal owners rather than copying a generic cookie rule.

### 8.4 Limit sensitive inference

Do not infer health, disability, financial hardship, identity, emotion, vulnerability, or protected status from behavior unless there is an explicit legitimate purpose, appropriate consent or authority, strong governance, and a validated need. Accessibility telemetry should normally measure product behavior and failures, not identify disabled people.

### 8.5 Govern access and exports

- use least-privilege access;
- separate production raw data from broadly shared aggregates;
- audit access to individual-level records;
- suppress or combine small cells where re-identification risk is material;
- restrict cohort exports and audience activation;
- prohibit secrets and authentication material at ingestion;
- review vendor destinations and retention;
- expire unused dashboards, cohorts, and exports;
- document incident response and deletion repair.

## 9. Specify and interpret funnels

A funnel is a query over ordered occurrences for a defined unit, population, and window. It is not inherently the user's mental model and is not causal evidence.

### 9.1 Funnel specification

Write these fields before opening a chart tool:

| Field | Definition |
|---|---|
| Question | Decision the funnel should inform |
| Unit | User, account, session, attempt, order, or another entity |
| Eligible population | Who could start and complete the task |
| Entry | Exact first event and conditions |
| Steps | Exact events, property filters, and order |
| Ordering | Strict adjacency or ordered with intervening events |
| Entry mode | Closed at step 1 or open at later steps |
| Repetition | First attempt, every attempt, or one sequence per unit |
| Conversion window | Maximum event-time duration from entry or between steps |
| Completion | Authoritative outcome event |
| Exclusions | Bots, tests, invalid states, incidents, unsupported releases |
| Identity | Unit stitching and merge behavior |
| Maturity | How long a unit must be observable before inclusion |
| Breakdown | Event-time property, assignment-time property, or current property |

Tool defaults differ. Google Analytics, for example, distinguishes open and closed funnels, ordered and directly adjacent steps, and counts only one sequence per user in the documented exploration behavior ([GA4 Funnel exploration](https://support.google.com/analytics/answer/9327974)). Never assume another tool or SQL query matches those semantics.

### 9.2 Compute the rates explicitly

For a closed funnel with step counts \(N_1, N_2, \ldots, N_k\):

```text
overall conversion to step k = N_k / N_1
step conversion k-1 -> k = N_k / N_(k-1)
step loss k-1 -> k = 1 - N_k / N_(k-1)
```

Report the counts beside the rates. A high percentage on a tiny denominator is different evidence from the same percentage at large scale.

For occurrence-based funnels, state whether one unit can contribute multiple attempts and whether attempts can overlap. For user-based funnels, state which attempt is chosen.

### 9.3 Use authoritative completion

The last step should reflect the real outcome. If it is asynchronous, allow for its normal delay. For example:

```text
checkout_started
  -> order_submitted
  -> payment_authorized
  -> order_completed
```

If the product only records `confirmation_page_viewed`, call the metric “confirmation page reach,” not “order completion.”

### 9.4 Model branches and recovery

Linear funnels hide legitimate behavior:

- saved and resumed work;
- backtracking and correction;
- alternate payment or authentication paths;
- cancellation after learning new information;
- support-assisted completion;
- failure followed by retry;
- a user choosing a valid alternative outcome.

Pair the main funnel with path, state-transition, retry, and time-to-complete analysis. Leaving a sales funnel can be a good user outcome if the product helped someone avoid an unsuitable purchase.

### 9.5 Analyze time without hiding the tail

Report a distribution, not only an average:

- median time to next step;
- 75th, 90th, or 95th percentile when operationally useful;
- share completed within meaningful thresholds;
- right-censoring and maturity rules;
- separate active work time from long pauses when the data supports it.

Average elapsed time can be dominated by a few long cases. Fast completion can mean efficiency or rushed misunderstanding; pair it with error, reversal, and comprehension evidence.

### 9.6 Diagnose funnel movement in the right order

When a step changes:

1. Check instrumentation, schema, volume, identity, and maturity.
2. Check release, incident, traffic source, eligibility, and population mix.
3. Inspect the absolute counts and neighboring steps.
4. Segment only on pre-existing, decision-relevant dimensions.
5. Review representative raw event sequences.
6. Use qualitative or task evidence to investigate why.
7. Use a randomized experiment when a causal product claim matters.

Do not call every non-completer “drop-off.” Some units are in progress, ineligible, blocked externally, duplicated, or making a legitimate choice.

## 10. Specify and interpret cohorts and retention

A cohort is a defined group of units sharing an entry condition or property. A retention measure asks whether eligible cohort members perform a defined return behavior after enough time has elapsed.

### 10.1 Distinguish cohort types

| Cohort type | Membership | Suitable use |
|---|---|---|
| Acquisition/entry cohort | Fixed by first qualifying occurrence and period | Compare lifecycle behavior over age |
| Static cohort | Fixed list at a recorded cutoff | Audit or a predefined study population |
| Behavioral cohort | Membership based on behavior in a specified interval | Study usage patterns; beware circular definitions |
| Property cohort | Membership based on an event-time or current property | Compare known segments with explicit time semantics |
| Experiment cohort | Fixed by randomized assignment | Causal comparison under experiment assumptions |

Amplitude's documentation distinguishes static and behavioral cohorts and notes that interval cohorts can be reevaluated for each chart bucket ([create cohorts](https://amplitude.com/docs/analytics/create-cohorts)). A saved cohort name is therefore not enough; preserve its full definition and evaluation time.

### 10.2 Retention specification

Define:

- cohort entry event and first/any occurrence rule;
- unit and identity policy;
- entry period and timezone;
- return event that represents renewed value;
- `Return On`, `Return On or After`, rolling, unbounded, or custom-bracket behavior;
- rolling duration versus calendar interval;
- required eligibility at each period;
- reactivation and repeated entry behavior;
- maturity and right-censoring rules;
- exclusions and data cutoff;
- account/user weighting.

“Any activity” is often a weak return event. Prefer an outcome connected to the product's purpose.

### 10.3 Basic cohort table

Rows are entry periods. Columns are time since entry.

```text
retention(c, t) = returned eligible units from cohort c at interval t
                  --------------------------------------------------
                  cohort c units mature and eligible for interval t
```

Show numerator, denominator, and percentage. Do not include a recent cohort in Day 30 until its members have had 30 complete days to return.

Amplitude's current documentation explicitly excludes incomplete periods in certain retention calculations and describes changing denominators ([Retention Analysis FAQ](https://amplitude.com/docs/analytics/charts/retention-analysis/faq)). This illustrates why maturity rules and tool behavior belong in the metric definition.

### 10.4 Distinguish retention questions

- **Return On:** Did the unit return in interval X?
- **Return On or After:** Did the unit return in interval X or any later observed interval?
- **Rolling retention:** Has the unit returned by or after a threshold?
- **Bracket retention:** Did the unit return within a meaningful custom interval?
- **Survival:** What share has not yet experienced a defined terminal event?
- **Hazard:** Among units still at risk, what is the rate of the event in this interval?
- **Reactivation:** Did a previously inactive unit resume the value event?

These are not interchangeable. Label the one actually computed.

### 10.5 Compare cohorts fairly

Control or stratify for relevant pre-entry differences:

- acquisition source and campaign;
- release and onboarding version;
- region and calendar season;
- account size and plan eligibility;
- platform and device capability;
- incident exposure;
- product maturity and prior experience.

Composition changes can move aggregate retention even when every subgroup is stable. Inspect both aggregate and decision-relevant strata, and check whether weighting changed.

### 10.6 Avoid circular cohort conclusions

If “power users” are defined as users who complete five reports weekly, it is circular to conclude that power users complete more reports. Use the cohort to explore other later outcomes, or define membership in a prior window and outcomes in a subsequent window.

Behavioral cohorts are descriptive unless assignment or another credible causal design supports a causal claim.

## 11. Define metrics and guardrails

A metric is executable policy: it decides what counts, who counts, when counting starts and stops, and how observations are aggregated.

### 11.1 Metric specification

Every production metric should state:

| Field | Requirement |
|---|---|
| Name | Unique, stable, and non-promotional |
| Decision | What action it informs |
| Meaning | Plain-language description of what is counted |
| Type | Outcome, diagnostic, guardrail, quality, or financial/operational |
| Unit | User, account, attempt, transaction, time, amount, etc. |
| Population | Eligibility and exclusions |
| Numerator | Exact event/state/query |
| Denominator | Exact opportunity set |
| Aggregation | Count, sum, ratio of sums, mean, median, percentile, rate |
| Time | Event window, timezone, maturity, and freshness |
| Dimensions | Permitted breakdowns and event-time semantics |
| Source | Authoritative systems and transformations |
| Quality | Completeness, validity, uniqueness, timeliness checks |
| Owner | Definition and operational owner |
| Direction | Better/worse interpretation and exceptions |
| Threshold | Practical decision boundary and uncertainty rule |
| Guardrails | Metrics that constrain optimization |
| Version | Effective date and migration history |

### 11.2 Build a balanced metric set

For a change or experiment, use distinct roles:

- **Primary outcome:** the predeclared metric most directly tied to the intended value.
- **Secondary outcomes:** other meaningful results, interpreted with multiplicity awareness.
- **Diagnostic metrics:** explain the mechanism or where behavior changed.
- **Guardrails:** detect unacceptable harm or degradation.
- **Data-quality metrics:** check whether assignment and telemetry are trustworthy.
- **Long-term measures:** check whether short-term movement persists or reverses.

Microsoft's experimentation guidance describes similar roles, including data-quality, overall evaluation, local/diagnostic, and guardrail metrics ([patterns of trustworthy experimentation](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)).

### 11.3 Do not equate activity with value

Clicks, sessions, messages, time spent, and notifications opened are activity measures. They can rise because a product became confusing, coercive, slow, or hard to leave.

Pair activity with evidence such as:

- task completion and durable outcome;
- error and recovery;
- time or effort where lower is genuinely better;
- reversal, refund, cancellation, or regret;
- support contacts and complaint themes;
- accessibility task success;
- latency, crash, and failure rate;
- informed choice or comprehension research;
- long-term retention tied to a value event.

### 11.4 Choose aggregation intentionally

These often differ:

```text
ratio of sums = sum(successes) / sum(opportunities)
mean of ratios = mean(successes_i / opportunities_i)
```

The first weights units with more opportunities more heavily. The second gives each included unit equal weight but behaves poorly for small or zero denominators. Choose based on the decision unit and show the distribution where concentration matters.

For skewed measures such as latency, spend, or time, report median and relevant tail percentiles. A mean can remain useful, especially for additive totals, but it should not hide the tail.

### 11.5 Design guardrails around plausible harm

Guardrails should follow the mechanism, not a generic checklist.

| Risk | Possible guardrail |
|---|---|
| Faster flow causes errors | Validation failure, correction, reversal, or support rate |
| New UI excludes keyboard users | Keyboard task completion and accessibility defect rate |
| Recommendation boosts clicks but harms trust | Hide/report rate, complaint rate, long-term return |
| Checkout lift increases regret | Refund, chargeback, cancellation, duplicate-order rate |
| Rich client slows the task | Core Web Vitals, interaction latency, crash/error rate |
| More notifications create pressure | Opt-out, mute, complaint, and return-quality measures |
| Automation creates unsafe results | Human correction, escalation, severe-error, and audit rate |
| Experiment changes load | Product-wide latency and reliability, not only treatment endpoint |

Accessibility, privacy, safety, and fairness may require manual evidence or policy review as well as numeric guardrails.

### 11.6 Define guardrail action levels

Use explicit levels:

- **Hard stop:** credible evidence of severe safety, privacy, integrity, or operational harm.
- **Pause and investigate:** threshold crossed but data quality or mechanism needs diagnosis.
- **Non-inferiority constraint:** allow at most a predeclared practically acceptable degradation.
- **Monitor:** informative movement that does not yet determine the decision.

A statistically non-significant guardrail result is not proof of safety. Check whether the interval excludes the unacceptable degradation.

## 12. Design and analyze experiments

Randomized controlled experiments can estimate causal effects when assignment, analysis, telemetry, and interference assumptions hold. They do not automatically establish long-term value, fairness, comprehension, or generalizability.

### 12.1 Pre-register the experiment contract

Before exposure, write:

- decision and accountable owner;
- hypothesis and proposed mechanism;
- eligible population and exclusions;
- randomization unit and allocation ratio;
- control and treatment definitions;
- assignment and exposure events;
- primary metric and analysis unit;
- guardrails and stop conditions;
- expected direction and minimum meaningful effect;
- sample size, power, significance level, and duration method;
- variance-reduction method, if any;
- planned segments and multiplicity handling;
- treatment of missing, late, duplicate, and outlier data;
- novelty, seasonality, interference, and concurrent-experiment risks;
- decision rules for ship, do not ship, iterate, or inconclusive.

NIST's sample-size guidance for comparing proportions shows that required size depends on the significance level, power, baseline proportion, and difference the study aims to detect ([sample sizes for two proportions](https://www.itl.nist.gov/div898/handbook/prc/section2/prc242.htm)). Do not choose sample size only from desired duration.

### 12.2 Choose the randomization unit around interference

Randomize at the lowest unit that preserves independence and prevents contamination:

- user for independent personal experiences;
- account or tenant for collaborative settings;
- household, classroom, marketplace region, or network cluster where units affect one another;
- request only when repeated exposure and carryover cannot contaminate later behavior.

Analyze with a method consistent with the assignment unit. Randomizing accounts and treating every user event as independent understates uncertainty.

Connected products can violate the assumption that one unit's treatment does not affect another. Google's research on collaboration networks shows why cluster or graph-aware designs may be needed ([designing A/B tests in a collaboration network](https://research.google/pubs/designing-ab-tests-in-a-collaboration-network/)).

### 12.3 Keep assignment stable and exposure honest

- allocate with a deterministic or auditable assignment method;
- avoid re-randomizing returning units;
- preserve allocation across devices when the unit is a person or account and identity permits it;
- log configuration and assignment version;
- distinguish assigned, eligible, and actually exposed populations;
- use intent-to-treat as the default confirmatory analysis;
- predefine any triggered or exposure analysis.

Filtering to people who complied with or liked treatment breaks the randomized comparison.

### 12.4 Validate with A/A tests and sample-ratio checks

Before trusting lift:

- verify assignment balance;
- run A/A or simulated checks when the platform or metric is new;
- inspect pre-treatment covariate balance;
- compare event counts and missingness by variant;
- test exposure and metric logging in both paths;
- check sample ratio mismatch (SRM).

SRM occurs when observed allocation differs unexpectedly from planned allocation. Microsoft's taxonomy treats it as a symptom of assignment, telemetry, or data-processing problems that must be diagnosed before results are trusted ([SRM taxonomy](https://www.microsoft.com/en-us/research/publication/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonomy-and-rules-of-thumb-for-practitioners/)).

### 12.5 Prevent optional stopping and metric shopping

Repeatedly checking a conventional fixed-horizon p-value and stopping when it crosses a threshold inflates false positives. Use one of these approaches:

- fix the sample and duration in advance;
- use a valid sequential method with its stopping boundaries;
- use a Bayesian method with predeclared decision rules and validated operating characteristics.

Name one primary metric. If many outcomes or segments are tested, adjust or otherwise account for multiplicity and label exploratory findings. Do not quietly switch the primary metric after seeing results.

### 12.6 Use variance reduction carefully

Pre-treatment covariates can improve precision. Microsoft's explanation of CUPED emphasizes that it reduces estimator variance using pre-experiment information; it does not change the underlying outcome data ([variance reduction deep dive](https://www.microsoft.com/en-us/research/articles/deep-dive-into-variance-reduction/)).

Validate that the covariate:

- is measured before treatment;
- cannot be changed by treatment;
- has adequate quality and coverage;
- is applied consistently across variants;
- is specified before looking at the result.

### 12.7 Report effect and uncertainty

For each primary result, report:

- control and treatment counts;
- control and treatment metric values;
- absolute difference;
- relative difference when useful;
- confidence or credible interval;
- analysis population and unit;
- data cutoff and experiment duration;
- guardrail results;
- SRM and telemetry checks;
- practical threshold;
- known assumption violations.

Example:

```text
Paid-order conversion was 20.0% in control and 21.6% in treatment:
+1.6 percentage points, or +8.0% relative.
95% confidence interval for the absolute difference: +0.4 to +2.8 points.
```

Never write “conversion increased 8%” without baseline, unit, interval, and absolute change.

### 12.8 Interpret non-significant and guardrail results correctly

“Not statistically significant” does not mean “no effect.” The interval may include both worthwhile benefit and unacceptable harm. Ask what effects the data can rule out.

The American Statistical Association states that conclusions should not rest only on whether a p-value crosses a threshold, and that p-values do not measure effect size or practical importance ([ASA statement on p-values](https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf)).

Likewise, a guardrail that did not cross a significance threshold is not automatically safe. Use a non-inferiority or harm boundary when the decision requires ruling out degradation.

### 12.9 Account for telemetry loss and long-term validity

Telemetry loss can reduce power or bias an estimate when missingness differs by treatment or outcome. Microsoft research specifically examines trustworthy experimentation under telemetry loss ([paper](https://www.microsoft.com/en-us/research/publication/trustworthy-experimentation-under-telemetry-loss/)). Monitor delivery, missingness, and reconciliation by variant.

Short experiments can also mispredict lasting effects because of novelty, primacy, adaptation, seasonality, and changing population. Use extended measurement, staged rollout, or long-term holdouts for material decisions. Microsoft and Google both discuss limits of short-term results ([external validity](https://www.microsoft.com/en-us/research/articles/external-validity-of-online-experiments-can-we-predict-the-future/), [long-term experiments](https://research.google/pubs/focus-on-the-long-term-its-better-for-users-and-business/)).

## 13. Interpret metrics without overclaiming

### 13.1 Label the claim type

| Claim type | Supported wording | Required design |
|---|---|---|
| Descriptive | “Recorded completion was 42% in this defined population.” | Valid measurement and denominator |
| Comparative | “Cohort A recorded higher completion than cohort B.” | Comparable definitions and uncertainty |
| Diagnostic | “The change is concentrated after payment authorization.” | Valid step and segmentation evidence |
| Causal | “Assignment to treatment increased completion.” | Credible randomized or causal design |
| Predictive | “The model predicts a 0.7 probability.” | Validated model, calibration, population match |
| Explanatory | “Users left because instructions were unclear.” | Research or evidence about mechanism, not event counts alone |

Prefer the least ambitious claim the design supports.

### 13.2 Check common failure modes

Before interpreting a change, test:

- **Instrumentation drift:** did event meaning, producer, or schema change?
- **Coverage change:** did blockers, consent, platform mix, or telemetry loss change?
- **Identity drift:** did stitching, login, or anonymous-ID behavior change?
- **Denominator drift:** did eligibility or opportunity volume change?
- **Composition:** did region, plan, acquisition, account size, or platform mix change?
- **Seasonality:** weekday, holiday, billing, school, or campaign cycles?
- **Incidents:** outages, latency, vendor failure, or support intervention?
- **Duplicates and retries:** did at-least-once delivery inflate counts?
- **Late data and censoring:** are recent units mature?
- **Selection:** is a segment defined using post-outcome behavior?
- **Survivorship:** are failed or deleted units absent?
- **Regression to the mean:** was the comparison chosen after an extreme value?
- **Interference:** could one unit's treatment affect another?
- **Multiplicity:** were many slices searched for a favorable result?

Microsoft's “Dirty Dozen” catalog is a useful primary source on recurring metric-interpretation pitfalls in online experiments ([paper](https://www.microsoft.com/en-us/research/publication/a-dirty-dozen-twelve-common-metric-interpretation-pitfalls-in-online-controlled-experiments/)).

### 13.3 Keep percentage points and percent change distinct

If a rate moves from 20% to 22%:

```text
absolute change = 22% - 20% = +2 percentage points
relative change = (22% - 20%) / 20% = +10%
```

Both can be useful. Neither should appear without the baseline and denominator.

### 13.4 Interpret confidence intervals carefully

A frequentist 95% confidence interval is produced by a method that would cover the true parameter in 95% of repeated samples under its assumptions. It is not literally a 95% probability that this already-computed interval contains the fixed parameter.

Use the interval to discuss:

- direction;
- range of effects compatible with the design and model;
- whether worthwhile benefit is plausible;
- whether unacceptable harm is excluded;
- precision and the value of more evidence.

NIST provides standard reference material for confidence intervals and proportions ([confidence intervals](https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm), [proportion intervals](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm)). Use a method appropriate to the estimator rather than defaulting blindly to a normal approximation.

### 13.5 Separate uncertainty sources

Report uncertainty beyond sampling error:

| Source | Example | Response |
|---|---|---|
| Measurement | Client event missed or duplicated | Reconcile, monitor, sensitivity analysis |
| Definition | “Active user” has multiple reasonable meanings | Version and compare definitions |
| Sampling | Finite experiment population | Interval or posterior distribution |
| Causal | Confounding or interference | Randomization, design change, cautious claim |
| Model | Distribution or independence assumption fails | Robust/clustered method, diagnostics |
| External validity | Effect may not generalize to other periods or users | Replication, holdout, staged rollout |
| Decision | Practical value or harm threshold is disputed | Name owner and threshold before analysis |

A narrow confidence interval does not repair a biased measure.

### 13.6 Watch for Simpson's paradox and weighting

An aggregate can move opposite to every subgroup when group sizes change. When aggregate and segmented results disagree:

- inspect the population mix;
- verify the segment is pre-treatment and decision-relevant;
- show subgroup counts and rates;
- select weighting that matches the target population;
- avoid choosing the view solely because it supports a preferred narrative.

### 13.7 Treat anomalies as hypotheses

An anomaly is a prompt to investigate. First check pipeline and product changes; then formulate competing explanations. Preserve the exact detection rule, baseline, seasonality adjustment, and false-alert history.

Do not publish an automated explanation unless its evidence and limitations are inspectable.

## 14. Verify analytics and monitor data quality

Analytics code needs risk-based testing. Use the broader [testing strategy](../../testing/references/research.md) for test selection and release confidence.

### 14.1 Pre-release verification stack

| Layer | Check | Evidence |
|---|---|---|
| Contract | Required fields, types, enums, units, sensitive-data denylist | Schema and unit tests |
| Producer | Exact trigger and non-trigger behavior | Unit/component tests |
| Boundary | Client/API/service emits the canonical occurrence once | Integration tests |
| Journey | Representative browser/app task produces expected sequence | Browser/E2E assertion |
| Pipeline | Ingestion, transformation, identity, and destination behavior | Staging/synthetic trace |
| Reconciliation | Analytics outcome matches authoritative state | Comparison query |
| Release | Production canary volume, nulls, cardinality, and latency | Monitors and sampled traces |

Do not mock the entire path and call it verified. At least one test should cross each real boundary that can corrupt meaning.

### 14.2 Test triggers and non-triggers

For each event, verify:

- it emits on the precise occurrence;
- it does not emit on render retry, double click, validation failure, cancellation, or replay unless specified;
- it emits once per logical occurrence under retry;
- required properties come from the documented event-time source;
- error classifications are bounded and correct;
- consent and environment filters work;
- release and schema versions are present;
- timestamps and IDs remain stable across retry.

### 14.3 Define data-quality dimensions

Monitor at least:

- **completeness:** expected authoritative occurrences represented;
- **validity:** schema and semantic constraints satisfied;
- **uniqueness:** logical occurrences not duplicated;
- **timeliness:** data arrives within the documented freshness target;
- **consistency:** totals and states reconcile across trusted sources;
- **coverage:** relevant platforms, releases, and populations represented;
- **lineage:** transformations and owners recoverable.

Turn these into service-level indicators with explicit windows and thresholds. “Data looks normal” is not a control.

### 14.4 Monitor production behavior

Alert on:

- volume discontinuities by event, release, platform, and variant;
- unexpected null or enum rates;
- schema rejection and quarantine;
- cardinality explosion;
- duplicate `event_id` rate;
- event-time skew and ingestion latency;
- identity merge and anonymous/known ratio changes;
- experiment SRM;
- consent-state or destination mismatch;
- divergence from backend truth;
- stale transformations and dashboards.

Microsoft's experimentation platform describes alerting for issues such as SRM and metrics outside expected ranges ([alerting article](https://www.microsoft.com/en-us/research/articles/alerting-in-microsofts-experimentation-platform-exp/)). Alerts still require runbooks, owners, and false-positive review.

### 14.5 Reconcile against authoritative truth

For durable outcomes:

```text
coverage = canonical analytics outcomes / authoritative domain outcomes
duplicate rate = excess canonical event records / authoritative outcomes
```

Break reconciliation down by release, platform, region, and variant when those paths differ. A total can match while one subgroup is overcounted and another undercounted.

Define acceptable lag. Do not compare an event-time total with a still-processing ledger and label the difference loss.

### 14.6 Make backfills visible

For repair or replay:

- preserve original occurrence time;
- record backfill batch, method, and run time;
- use stable source occurrence identifiers;
- prevent duplicate downstream actions;
- rerun affected aggregates reproducibly;
- annotate dashboards and experiment windows;
- record which past decisions may need review.

Never make synthetic backfill indistinguishable from live collection.

### 14.7 Review analytics at release time

Before full rollout:

1. Run the golden task in production-like conditions.
2. Inspect the raw event sequence and properties.
3. Confirm the canonical backend state.
4. Verify transformation and metric output.
5. Compare treatment/control or old/new release coverage.
6. Check privacy and destination behavior.
7. Establish baseline monitors.
8. Name the person who responds if quality degrades.

## 15. Synthesize evidence for decisions

A decision-ready analytics report should make its reasoning auditable without forcing the reader to reverse-engineer a dashboard.

### 15.1 Separate four layers

1. **Observation:** what the validated records show.
2. **Calculation:** how records became the reported estimates.
3. **Interpretation:** what explanations are supported, plausible, or contradicted.
4. **Decision:** what action follows, who owns it, and what would reverse it.

Example:

```markdown
Observation: Server-confirmed completion was 42.1% (12,481 / 29,646),
down 1.8 percentage points from the comparable prior four weeks.

Calculation: Eligible account-level attempts; first attempt per account;
14-day maturity; employee, bot, and outage intervals excluded under v3 rules.

Interpretation: The decline begins after authorization and is concentrated in
release 8.4 on Safari. This supports a release-specific failure hypothesis.
It does not establish user confusion as the cause.

Decision: Pause release 8.4 expansion, investigate the authorization callback,
and restore only after reconciliation coverage and completion recover.
Owner: Checkout team. Review: 2026-07-22.
```

### 15.2 Lead with the result and boundary

Report:

- answer to the framed question;
- population and time;
- absolute counts and rates;
- comparison and uncertainty;
- data-quality status;
- guardrails and contrary evidence;
- supported claim and unsupported inference;
- decision, owner, and follow-up.

Do not lead with a chart screenshot. A screenshot rarely preserves filters, definitions, freshness, or query version.

### 15.3 Triangulate rather than average unlike evidence

Combine evidence by role:

- analytics for frequency, distribution, and observed paths;
- experiments for causal effects under the design;
- usability and interviews for comprehension, motive, and mental models;
- accessibility testing for task access with assistive technology;
- support and operations for failure narratives and severity;
- performance and incident telemetry for technical mechanisms;
- domain records for authoritative outcomes.

Do not average these into a single “confidence score.” Explain where they converge, conflict, and leave uncertainty.

### 15.4 Preserve negative and inconclusive results

Record:

- experiments with no decision-relevant resolution;
- metrics that failed quality checks;
- hypotheses contradicted by evidence;
- segments explored after the fact;
- analysis choices that changed the result;
- stopped or rolled-back releases.

This prevents repeated work and publication bias inside the organization.

### 15.5 Use explicit decision outcomes

- **Ship:** benefit is decision-relevant, guardrails acceptable, and operational evidence supports rollout.
- **Do not ship:** evidence contradicts the expected value or shows unacceptable harm.
- **Iterate:** mechanism evidence supports a specific revision, without claiming the current treatment succeeded.
- **Inconclusive:** data does not distinguish decision-relevant benefit, no effect, and harm well enough.
- **Invalid:** measurement, assignment, telemetry, or analysis failure prevents interpretation.

“Inconclusive” and “invalid” are different. The first can be valid but imprecise; the second cannot support the planned inference.

## 16. Reusable specifications and checklists

### 16.1 Measurement brief

```markdown
# Measurement brief: <decision>

- Decision and owner:
- User and business outcome:
- Eligible population and unit:
- Observable success:
- Observable failures and reversals:
- Comparison or causal design:
- Window, maturity, and data cutoff:
- Primary metric:
- Diagnostics:
- Guardrails:
- Practical threshold:
- Data sources and known gaps:
- Evidence analytics cannot provide:
- Review date:
```

### 16.2 Event contract

```markdown
# Event: `<event_name>`

- Meaning:
- Purpose and consumers:
- Owner and lifecycle:
- Authoritative producer:
- Exact trigger:
- Explicit non-triggers:
- Unit and identity:
- Required properties:
- Optional properties:
- Event and correlation IDs:
- Occurrence and observation time:
- Deduplication and late-arrival behavior:
- Privacy classification and retention:
- Schema version and compatibility:
- Expected volume/cardinality:
- Known loss modes and reconstruction:
- Verification and monitors:
```

### 16.3 Funnel specification

```markdown
# Funnel: <name>

- Question and decision:
- Unit:
- Eligible population:
- Entry event:
- Ordered steps and filters:
- Direct or indirect ordering:
- Open or closed entry:
- First/all/repeated attempt rule:
- Conversion window:
- Completion authority:
- Identity and deduplication:
- Timezone and event-time rule:
- Exclusions and maturity:
- Branches, recovery, and alternate success:
- Breakdowns:
- Data-quality checks:
```

### 16.4 Cohort and retention specification

```markdown
# Cohort/retention: <name>

- Question and decision:
- Unit:
- Entry condition and period:
- Static or dynamic membership:
- Event-time/current property semantics:
- Return/value event:
- Return On / On or After / rolling / bracket definition:
- Calendar or rolling interval:
- Timezone:
- Reactivation and repeated entry:
- Eligibility and exclusions:
- Maturity/right-censoring:
- Numerator and denominator:
- Weighting:
- Comparison cohorts:
- Privacy threshold:
```

### 16.5 Metric specification

```markdown
# Metric: <name> v<version>

- Plain-language meaning:
- Decision and owner:
- Metric role:
- Unit and population:
- Numerator:
- Denominator:
- Aggregation and weighting:
- Window, timezone, maturity, and freshness:
- Dimensions and property-time semantics:
- Source events/tables and lineage:
- Exclusions:
- Expected direction and exceptions:
- Practical threshold:
- Uncertainty method:
- Quality SLOs:
- Guardrails:
- Effective date and migration notes:
```

### 16.6 Experiment plan and result

```markdown
# Experiment: <name>

## Before launch

- Decision and hypothesis:
- Mechanism:
- Eligibility and randomization unit:
- Variants and stable assignment:
- Assignment and exposure events:
- Primary metric and MDE:
- Guardrails and stop rules:
- Sample size, power, alpha, and duration:
- Analysis population and estimator:
- Variance reduction:
- Planned segments and multiplicity:
- Missing/late/duplicate/outlier policy:
- Interference, novelty, and telemetry risks:
- Ship / no-ship / iterate / inconclusive rules:

## After completion

- Actual population, counts, and duration:
- SRM and telemetry result:
- Primary absolute and relative effect with interval:
- Guardrail effects with intervals:
- Diagnostic and exploratory findings:
- Assumption violations and limitations:
- Decision, owner, and rollout plan:
- Long-term validation:
```

### 16.7 Analytics definition of done

- The decision, owner, population, unit, and time boundary are explicit.
- Success, failure, reversal, and recovery are represented by authoritative occurrences.
- Event names are stable; properties are typed, bounded, versioned, and documented.
- Identity, session, event-time, deduplication, lateness, and backfill behavior are defined.
- Privacy purpose, minimization, preferences, access, destinations, retention, and deletion are reviewed.
- Funnel and cohort semantics do not depend on undocumented tool defaults.
- Every rate has visible counts and a defined denominator.
- Primary, diagnostic, guardrail, and data-quality metrics have distinct roles.
- Experiment assignment, exposure, SRM, power, stopping, multiplicity, telemetry, and interference are addressed.
- Results show absolute and relative effects, uncertainty, practical significance, and known limits.
- Contract, integration, journey, pipeline, reconciliation, and production checks are proportional to risk.
- Quality monitors have thresholds, owners, and runbooks.
- Source facts, transformations, calculations, interpretations, and decisions retain provenance.
- Analytics is combined with other evidence for motive, comprehension, accessibility, fairness, trust, and long-term value.
- No test data, personal data, secrets, raw free text, placeholder claims, or unsupported causal language remains.

## 17. Primary and official sources

These sources support the principles above. Platform documentation is included to demonstrate why tool semantics must be specified; it is not treated as a universal definition.

### Event structure, schema, and provenance

- [OpenTelemetry Logs Data Model](https://opentelemetry.io/docs/specs/otel/logs/data-model/)
- [OpenTelemetry General Event Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/general/events/)
- [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/)
- [JSON Schema specification](https://json-schema.org/specification)
- [JSON Schema Draft 2020-12](https://json-schema.org/draft/2020-12)
- [CloudEvents specification repository](https://github.com/cloudevents/spec)
- [W3C PROV Overview](https://www.w3.org/TR/prov-overview/)

### Privacy and governance

- [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
- [NIST Privacy Framework 1.0](https://doi.org/10.6028/NIST.CSWP.01162020)

### Funnel, cohort, and retention semantics

- [Google Analytics Funnel exploration](https://support.google.com/analytics/answer/9327974)
- [Amplitude: Create cohorts](https://amplitude.com/docs/analytics/create-cohorts)
- [Amplitude: Retention Analysis FAQ](https://amplitude.com/docs/analytics/charts/retention-analysis/faq)
- [Amplitude: How time works in retention analysis](https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-time)

### Experiment design and reliability

- [Microsoft Research: Diagnosing Sample Ratio Mismatch](https://www.microsoft.com/en-us/research/publication/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonomy-and-rules-of-thumb-for-practitioners/)
- [Microsoft Research: Trustworthy Analysis of Online A/B Tests](https://www.microsoft.com/en-us/research/publication/trustworthy-analysis-of-online-a-b-tests-pitfalls-challenges-and-solutions/)
- [Microsoft Research: Trustworthy Experimentation Under Telemetry Loss](https://www.microsoft.com/en-us/research/publication/trustworthy-experimentation-under-telemetry-loss/)
- [Microsoft Research: Deep Dive into Variance Reduction](https://www.microsoft.com/en-us/research/articles/deep-dive-into-variance-reduction/)
- [Microsoft Research: Patterns of Trustworthy Experimentation During the Experiment Stage](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)
- [Microsoft Research: Alerting in Microsoft's Experimentation Platform](https://www.microsoft.com/en-us/research/articles/alerting-in-microsofts-experimentation-platform-exp/)
- [Microsoft Research: External Validity of Online Experiments](https://www.microsoft.com/en-us/research/articles/external-validity-of-online-experiments-can-we-predict-the-future/)
- [Google Research: Designing A/B Tests in a Collaboration Network](https://research.google/pubs/designing-ab-tests-in-a-collaboration-network/)
- [Google Research: Focus on the Long-Term](https://research.google/pubs/focus-on-the-long-term-its-better-for-users-and-business/)
- [NIST: Sample Sizes Required for Two-Sample Tests of Proportions](https://www.itl.nist.gov/div898/handbook/prc/section2/prc242.htm)

### Statistical interpretation

- [American Statistical Association Statement on Statistical Significance and P-Values](https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf)
- [NIST: Confidence Intervals](https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm)
- [NIST: Confidence Intervals for Proportions](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm)
- [NIST/SEMATECH Engineering Statistics Handbook](https://www.nist.gov/programs-projects/nistsematech-engineering-statistics-handbook)
- [Microsoft Research: A Dirty Dozen—Twelve Common Metric Interpretation Pitfalls](https://www.microsoft.com/en-us/research/publication/a-dirty-dozen-twelve-common-metric-interpretation-pitfalls-in-online-controlled-experiments/)

### Local companion references

- [Research methods: framing, provenance, fact-checking, uncertainty, and synthesis](../../research/references/research.md)
- [Testing strategy: unit through release testing](../../testing/references/research.md)
- [Accessibility implementation and verification](../../accessibility/references/research.md)

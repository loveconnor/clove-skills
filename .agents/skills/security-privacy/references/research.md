# Evidence-Based Security and Privacy Engineering

> An operational guide to threat modeling, authentication, authorization, personal data, abuse resistance, dependency risk, logging, and incident recovery

- **Research date:** July 20, 2026
- **Primary scope:** Web applications, APIs, services, internal tools, data pipelines, software supply chains, and their operating environments
- **Goal:** Turn security and privacy risk into explicit system requirements, testable controls, useful evidence, and recoverable operations

## Contents

1. [What this guide is for](#1-what-this-guide-is-for)
2. [Source authority and evidence language](#2-source-authority-and-evidence-language)
3. [Security and privacy as one risk system](#3-security-and-privacy-as-one-risk-system)
4. [Build the system and data truth packet](#4-build-the-system-and-data-truth-packet)
5. [Threat modeling](#5-threat-modeling)
6. [Abuse and misuse cases](#6-abuse-and-misuse-cases)
7. [Turn risks into requirements and controls](#7-turn-risks-into-requirements-and-controls)
8. [Authentication and account lifecycle](#8-authentication-and-account-lifecycle)
9. [Sessions, federation, and service identity](#9-sessions-federation-and-service-identity)
10. [Authorization and tenant isolation](#10-authorization-and-tenant-isolation)
11. [Personal data and privacy engineering](#11-personal-data-and-privacy-engineering)
12. [Secrets, cryptography, and key lifecycle](#12-secrets-cryptography-and-key-lifecycle)
13. [Dependencies and software supply-chain risk](#13-dependencies-and-software-supply-chain-risk)
14. [Security logging, monitoring, and audit evidence](#14-security-logging-monitoring-and-audit-evidence)
15. [Secure implementation and verification](#15-secure-implementation-and-verification)
16. [Vulnerability management and disclosure](#16-vulnerability-management-and-disclosure)
17. [Incident response and recovery](#17-incident-response-and-recovery)
18. [Governance, review gates, and metrics](#18-governance-review-gates-and-metrics)
19. [Reusable specifications and templates](#19-reusable-specifications-and-templates)
20. [Definition of done](#20-definition-of-done)
21. [Research basis and sources](#21-research-basis-and-sources)

---

## 1. What this guide is for

This guide helps a product and engineering team decide what must be protected, from whom, for whose benefit, with which controls, and with what proof. It covers security failures caused by malicious actors, mistakes, broken assumptions, compromised dependencies, excessive data use, and failed recovery.

Use it to:

- scope a threat model before a consequential change;
- turn architecture, data flows, identities, roles, and business rules into security requirements;
- separate authentication, session, authorization, and account-recovery decisions;
- inventory personal data and assess harm across collection, use, inference, sharing, retention, and deletion;
- identify fraud, spam, harassment, scraping, automation, denial, and business-logic abuse;
- evaluate direct and transitive dependencies, build systems, release artifacts, and provenance;
- define security events without leaking secrets or unnecessary personal data into logs;
- choose verification proportional to exposure and consequence;
- prepare for containment, investigation, restoration, communication, and recurrence prevention;
- report security posture with bounded evidence instead of vague assurances.

This guide is not:

- legal advice or a substitute for jurisdiction-specific privacy, breach, employment, sector, or contractual review;
- a universal control checklist detached from a system and threat model;
- a promise that compliance establishes security or that security establishes legal compliance;
- a requirement to build custom identity, cryptography, secrets, or detection infrastructure;
- proof that a system is secure because a scanner, audit, or penetration test found no issue;
- permission to collect more data because it may someday help fraud detection or incident analysis.

### 1.1 The practical standard

A defensible security and privacy plan lets another responsible person answer:

1. What system, environment, release, and data processing are in scope?
2. Which people, data, capabilities, money, operations, and public interests could be harmed?
3. Who or what can act, with which access, incentives, resources, and constraints?
4. Where do data and control cross trust, tenancy, privilege, or organizational boundaries?
5. What can go wrong through attack, abuse, error, compromise, or unexpected data use?
6. Which preventive, detective, responsive, and recovery controls address each material scenario?
7. What evidence shows that each control exists, works, remains configured, and fails safely?
8. Which residual risks remain, who accepted them, and when will they be reviewed?
9. How will the team detect, contain, investigate, communicate, restore, and learn from failure?

Security is not the absence of findings. Privacy is not a policy page. Both are maintained risk-management capabilities.

### 1.2 Four kinds of claim

Keep these claims separate:

| Claim | Example | Appropriate evidence |
|---|---|---|
| **Requirement** | “Only tenant administrators may export all tenant members.” | Product rule, contract, law, policy, or approved risk decision |
| **Control design** | “The export handler asks the policy engine for `member.export_all` using server-derived tenant membership.” | Architecture, policy model, code, configuration, threat response |
| **Control operation** | “Denied cross-tenant export attempts generate an alertable audit event.” | Tests, deployed configuration, representative event, alert exercise |
| **Outcome** | “No unauthorized export occurred during the assessed period.” | Investigation-quality telemetry with stated coverage and limits; rarely provable absolutely |

Do not replace one with another. A control in a diagram is not operating evidence. A passing test is not a production outcome. No observed incident is not proof of no compromise.

---

## 2. Source authority and evidence language

### 2.1 Source hierarchy

Use the narrowest authoritative source that governs the decision:

| Priority | Source | What it can establish | Main limitation |
|---:|---|---|---|
| 1 | Applicable law, regulation, regulator guidance, court order, contract, and binding organizational policy | Duties, prohibited processing, notification, retention, assurance, and evidence requirements | Scope depends on jurisdiction, role, data, sector, and facts; obtain qualified review |
| 2 | Current technical standards and protocols | Normative interoperability and security behavior | Applicability and implementation profile still need a system decision |
| 3 | Product rules, data agreements, risk appetite, service objectives, and incident history | Actual assets, permissions, consequences, tolerated failure, and recovery needs | May be incomplete or internally inconsistent |
| 4 | NIST, CISA, OWASP, FIRST, IETF, W3C, MITRE, OpenSSF, and similar primary guidance | Risk methods, control baselines, threat knowledge, verification requirements, and operational practices | Guidance is not automatically binding and may target a different environment |
| 5 | Vendor and framework documentation | Exact configuration, guarantees, defaults, and supported behavior | Vendor incentives and product scope limit generality |
| 6 | Independent research, assessments, and incident reports | Effectiveness evidence, attacker behavior, failure patterns, and limitations | Context and publication quality vary |
| 7 | Blog posts, examples, checklists, and generated guidance | Discovery terms and implementation ideas | Never sufficient authority for a material claim by themselves |

Version and date all time-sensitive sources. For example, this guide uses OWASP ASVS 5.0.0, NIST SP 800-63 Revision 4, NIST SP 800-61 Revision 3, RFC 9700, CISA’s 2025 SBOM minimum elements, and SLSA 1.2. It treats NIST Privacy Framework 1.0 as the current final version and the published Privacy Framework 1.1 Initial Public Draft as a draft.

### 2.2 Normative language

Use requirement words consistently:

- **Must**: required by an applicable source or necessary to meet an approved system requirement.
- **Must not**: prohibited because it violates a requirement or creates an unacceptable risk.
- **Should**: recommended default with a documented exception when another control provides equivalent or better risk reduction.
- **May**: allowed option whose applicability depends on context.

Name the source of a “must.” Do not turn every framework recommendation into a universal mandate. Conversely, do not weaken a legal, protocol, or contractual requirement into “best practice.”

### 2.3 Evidence strength

Security evidence becomes stronger as it moves from assertion toward independent, production-relevant verification:

1. owner assertion or questionnaire response;
2. policy, diagram, or design description;
3. code or configuration review;
4. automated control check or test in a controlled environment;
5. integration or adversarial test of the real boundary;
6. deployment evidence from the release artifact and target environment;
7. monitored exercise, red-team result, incident evidence, or independent assessment;
8. repeated evidence showing the control stays effective as the system changes.

Higher is not always necessary. Match evidence to risk, and record coverage and limitations. A password-storage unit test can be strong evidence for parameter selection; tenant isolation may require policy tests, API integration tests, database constraints, and production audit signals.

### 2.4 Calibrated language

Prefer:

- “The assessed release passed the listed ASVS-derived tests.”
- “The authorization matrix was exercised for all documented role, action, resource-state, and tenant combinations.”
- “No secrets were found by the named scanners in repository history and the release artifact; manual review covered the changed configuration paths.”
- “The tabletop restored the service from the isolated backup within the stated recovery objective, using the documented dependencies.”
- “Residual risk remains because the third-party provider does not expose per-object authorization logs.”

Avoid:

- “Unhackable,” “military-grade,” or “bank-level security.”
- “GDPR compliant” without scope, role, processing, and legal review.
- “End-to-end encrypted” unless endpoints, metadata, key custody, recovery, and exceptions are defined.
- “Zero trust” as a product label without resource-level policy and continuous decision evidence.
- “No vulnerabilities” after a finite assessment.
- “Anonymized” when data is merely pseudonymized or still reasonably linkable.

---

## 3. Security and privacy as one risk system

### 3.1 Related but distinct harms

Cybersecurity risk commonly concerns loss of confidentiality, integrity, availability, authenticity, accountability, or control of systems and information. Privacy risk concerns problems people may experience because data is processed, including unwanted observation, inference, exposure, exclusion, manipulation, loss of autonomy, economic harm, reputational harm, or inability to correct a consequential record.

The two overlap but are not identical:

- encrypted, access-controlled tracking can still create privacy harm if collection or inference is unexpected and unnecessary;
- a public profile field may create safety harm even when no security control failed;
- a security log may improve detection while creating a new high-value behavioral dataset;
- deleting fraud signals too early can weaken abuse defense, while retaining them indefinitely can create disproportionate surveillance and breach impact;
- identity proofing may reduce impersonation while excluding people who lack expected documents or exposing highly sensitive evidence.

Use a combined process but record security and privacy consequences separately.

### 3.2 Control objectives

Every material risk response should consider four control functions:

| Function | Question | Examples |
|---|---|---|
| **Prevent** | How do we make the event less likely or reduce its reachable impact? | Least privilege, data minimization, parameterized queries, phishing-resistant authentication, quotas |
| **Detect** | How will we know the control failed or the scenario began? | Integrity checks, authorization-denial events, anomaly rules, dependency advisories |
| **Respond** | How will we stop expansion and protect people? | Token revocation, feature isolation, credential rotation, support escalation, emergency access review |
| **Recover** | How will we restore trustworthy service and data? | Tested backups, rebuild from verified artifacts, reconciliation, user remediation, lessons learned |

Prevention without detection leaves blind failure. Detection without response creates dashboards. Recovery without integrity verification can restore compromised state.

### 3.3 Risk decisions

For each material scenario, choose and record one treatment:

- **Avoid** the risky feature, data, dependency, permission, or integration.
- **Reduce** likelihood or impact with controls.
- **Transfer or share** defined financial or operational consequences through a supplier, contract, or insurance; responsibility and user harm do not disappear.
- **Accept** residual risk explicitly within authority, duration, and monitoring limits.

An exception needs an owner, rationale, affected assets and people, compensating controls, evidence, expiry, and review trigger. “Accepted by engineering” is insufficient when the decision affects legal duties, customers, safety, or enterprise risk.

---

## 4. Build the system and data truth packet

Threat models fail when they model an imagined diagram rather than the deployed system. Begin with current, reviewable facts.

### 4.1 Scope packet

Record:

- exact feature, service, API, job, client, environment, and release artifact;
- users, administrators, support staff, developers, service accounts, partners, vendors, and anonymous actors;
- assets: money, data, credentials, permissions, content, computation, reputation, availability, and recovery capability;
- entry and exit points: UI, APIs, webhooks, queues, uploads, exports, logs, analytics, support tools, backups, and admin paths;
- trust boundaries: browser/server, service/service, tenant/tenant, user/admin, production/support, company/vendor, online/offline, build/release;
- runtime, hosting, network, identity provider, databases, object stores, caches, queues, CI/CD, artifact registry, and observability systems;
- geographic processing and storage locations;
- current owners, on-call path, vendors, contracts, data-processing roles, and escalation contacts;
- known incidents, support complaints, abuse patterns, audit findings, and accepted risks;
- availability, integrity, recovery-time, and recovery-point objectives.

Mark facts as observed, documented, inferred, or unknown. Unknown production behavior is a risk to resolve, not an empty box to ignore.

### 4.2 Data inventory

Inventory data by element and use, not only by database:

| Field | Question |
|---|---|
| Data element or derived attribute | What exact value, content, identifier, score, inference, or metadata exists? |
| Person or entity | Who or what does it concern? Can it identify, single out, link, infer, or affect a person? |
| Source | Person, device, employee, partner, public source, model, or system derivation? |
| Purpose | Which current, specific user or operational purpose needs it? |
| Authority or legal basis | Which contract, consent, obligation, legitimate purpose, or other basis applies? Obtain legal review where required. |
| Processing | Collection, validation, transformation, inference, matching, ranking, sharing, logging, export, or deletion? |
| Location and copies | Primary store, replicas, cache, index, client, log, analytics, backup, warehouse, sandbox, and vendor? |
| Access | Which human and service roles can read, change, export, or administer it? |
| Sensitivity and harm | What could disclosure, alteration, unavailability, misuse, or unexpected inference do? |
| Retention | Active period, archive period, deletion trigger, backup expiry, and legal hold? |
| Rights and correction | How can a person learn, access, correct, export, object, restrict, or delete where applicable? |
| Security | Classification, encryption, integrity, access, monitoring, and disposal controls? |
| Evidence | Schema, code path, data-flow trace, vendor record, test, configuration, and owner? |

Do not label an entire table “PII” and stop. Email, IP address, support note, free text, device signal, precise location, government identifier, biometric template, health fact, access token, and fraud score have different risks and controls.

### 4.3 Architecture and data-flow model

Create the smallest diagram that still shows:

- processes and privilege levels;
- data stores and classifications;
- external entities and suppliers;
- data flows, protocols, authentication, and encryption boundaries;
- trust and tenant boundaries;
- asynchronous paths, retries, caches, exports, logs, backups, and deletion flows;
- administrative and emergency paths;
- build, deployment, update, and artifact flow.

Number flows so threats and requirements can cite them. Show actual server-side decisions; a UI hiding an action is not an authorization control. Show recovery and support tooling because attackers and insiders use operational paths too.

### 4.4 Change triggers

Refresh the truth packet when a change adds or alters:

- an internet-facing endpoint, upload, parser, webhook, or redirect;
- authentication, federation, account linking, recovery, or session behavior;
- a role, permission, administrative action, or tenancy rule;
- payment, credit, messaging, sharing, export, invitation, search, or bulk action;
- sensitive data, inference, tracking, logging, analytics, or new processing purpose;
- third-party code, hosted service, model, data source, or cross-border transfer;
- secrets, cryptography, key custody, or certificate behavior;
- background automation, concurrency, rate, or resource consumption;
- deployment, build, infrastructure, backup, migration, or recovery behavior;
- a material incident, exploit technique, regulatory rule, or supplier change.

---

## 5. Threat modeling

OWASP describes threat modeling as a structured and repeatable process for modeling a system, identifying applicable threats, deciding responses, and validating whether the work is sufficient. Use its four questions: what are we working on, what can go wrong, what will we do, and did we do enough?

### 5.1 Choose the level

Use progressive depth:

- **Feature review:** a short model for a bounded, familiar change with limited data and privilege.
- **System model:** architecture, data, roles, dependencies, and deployment for a service or product area.
- **Deep dive:** high-impact identity, authorization, payments, sensitive data, cryptography, untrusted content, infrastructure, or recovery path.
- **Adversarial exercise:** expert review, penetration test, red team, abuse simulation, privacy assessment, or tabletop for high consequence or strong attacker interest.

Depth depends on consequence, exposure, novelty, attacker incentive, privilege, data sensitivity, complexity, detectability, and recoverability—not line count.

### 5.2 Participants

Include people who know different truths:

- product or domain owner for intended rules and harm;
- engineers for implementation and failure behavior;
- operations for deployment, telemetry, dependencies, and recovery;
- security for attacker methods and control validation;
- privacy or legal for data processing, rights, and jurisdiction;
- trust and safety, fraud, support, or community specialists for abuse and victim impact;
- accessibility and UX specialists when a security control can exclude or trap users;
- supplier or platform owners where material behavior is outsourced.

A security reviewer cannot invent the product’s authorization policy. A product owner cannot validate cryptographic design by preference.

### 5.3 Identify threats systematically

Use several lenses; no taxonomy is complete.

**STRIDE prompts:**

- spoofing: can an actor impersonate a user, service, administrator, device, webhook, or build system?
- tampering: can data, code, policy, logs, messages, configuration, or artifacts be changed without authority?
- repudiation: can consequential action occur without reliable attribution, integrity, or dispute evidence?
- information disclosure: can data, metadata, secrets, errors, timing, or existence leak?
- denial of service: can a person or automation exhaust accounts, queues, storage, money, inventory, support, or recovery capacity?
- elevation of privilege: can an identity acquire a stronger role, scope, tenant, resource, or execution capability?

**Privacy prompts:**

- can people be linked, singled out, surveilled, inferred about, or exposed unexpectedly?
- does processing exceed the stated purpose or reasonable expectation?
- can a person understand, contest, correct, or stop consequential processing?
- does identity proofing or anti-abuse processing create exclusion or disproportionate harm?
- can supposedly de-identified data be joined with other information?
- will logs, backups, exports, or vendors defeat deletion and retention promises?

**Operational prompts:**

- what happens if a dependency is compromised, unavailable, malicious, or silently changes behavior?
- can an attacker use support, recovery, migration, or emergency access as the easier path?
- can rollback restore vulnerable code or incompatible data?
- can detection be disabled, flooded, evaded, or deprived of context?
- can secrets be recovered from history, artifacts, telemetry, crash dumps, clients, or backups?

### 5.4 Write threat scenarios

Use a causal form:

```md
Because [precondition or weakness],
[actor] can [action/path]
against [asset, person, or process],
causing [security, privacy, user, business, or operational consequence].
Existing controls: [prevent/detect/respond/recover].
Evidence: [what shows those controls work].
Residual uncertainty: [gap].
```

Example:

> Because the export API accepts a tenant identifier from the request without binding it to server-derived membership, an authenticated tenant administrator can request another tenant’s member export, causing personal-data disclosure. The UI restriction does not mitigate direct API access.

This is more actionable than “broken access control risk.”

### 5.5 Assess and prioritize

Assess each scenario using visible factors:

- likely actor and demonstrated capability;
- reachability and required preconditions;
- current control strength and bypass difficulty;
- affected people, records, money, permissions, and systems;
- confidentiality, integrity, availability, privacy, safety, legal, and trust consequences;
- blast radius and whether one compromise crosses tenants or environments;
- speed and duration of harm;
- detectability and investigation quality;
- containment, reversibility, and repair cost;
- evidence of active exploitation, incident history, or attacker interest.

Use labels such as critical, high, moderate, and low only after writing rationale. Avoid multiplying subjective ordinal values into decorative precision. A low-likelihood catastrophic scenario may still require resilience or avoidance; a frequent low-value abuse path may deserve automation because aggregate harm is high.

### 5.6 Maintain the model

Store the model beside the system decision record or code it governs. Give it an owner, review date, source version, and change triggers. Link scenarios to requirements, tests, alerts, runbooks, and accepted risks. Close a threat only when the response and evidence are traceable.

---

## 6. Abuse and misuse cases

Threat modeling often overfocuses on technical compromise. A legitimate account can use intended functionality in harmful ways without bypassing a control.

### 6.1 Abuse domains

Consider:

- credential stuffing, account farming, account resale, and recovery abuse;
- spam, phishing, scams, impersonation, and malicious links;
- harassment, stalking, doxxing, non-consensual sharing, and coordinated reporting;
- scraping, enumeration, bulk export, competitive intelligence, and model-training extraction;
- inventory hoarding, scalping, coupon abuse, refund fraud, card testing, and marketplace collusion;
- fake reviews, vote manipulation, referral fraud, and metric poisoning;
- resource exhaustion through search, uploads, rendering, AI inference, notifications, or expensive queries;
- workflow bypass: replay, reordering, duplicate submission, race conditions, stale state, and partial completion;
- privilege laundering through invitations, shared objects, account linking, delegation, or support;
- malware, hostile documents, decompression bombs, parser differentials, and stored active content;
- insider browsing, unauthorized support access, bulk lookup, and misuse of emergency privilege;
- privacy abuse through inference, correlation, re-identification, or repurposing lawful access.

### 6.2 Model actors without stereotypes

Describe capability and access, not demographic identity:

- unauthenticated automation with rotating network addresses;
- authenticated user controlling many low-cost accounts;
- tenant administrator acting outside organizational policy;
- compromised employee session;
- support agent with legitimate lookup access;
- malicious or coerced insider;
- partner sending signed but semantically harmful input;
- compromised dependency maintainer or build credential;
- curious user discovering an object identifier;
- person targeted by an abusive user who knows their real-world details.

Include accidental actors: a tired operator, misconfigured integration, buggy retry worker, or user misunderstanding a destructive action can produce the same harm as an attacker.

### 6.3 Abuse-case template

```md
## Abuse case: [specific outcome]

- Actor and access:
- Target or harmed party:
- Attacker goal or incentive:
- Intended feature being used:
- Preconditions and acquisition cost:
- Step-by-step path:
- Scale or automation potential:
- Observable signals:
- False-positive and evasion risks:
- Prevention controls:
- Friction imposed on legitimate users:
- Detection and review controls:
- Containment and appeal:
- Recovery or remediation:
- Data collected for defense and retention:
- Test or exercise:
- Owner and review trigger:
```

### 6.4 Layered abuse response

Do not make “block or allow” the only response. Depending on confidence and consequence, use:

- serve normally and observe;
- rate or concurrency limit;
- require additional proof or transaction confirmation;
- reduce bulk capability or delay irreversible effects;
- isolate content or recipients;
- challenge automation with an accessible alternative;
- queue for proportionate human review;
- temporarily restrict a capability;
- revoke sessions or credentials;
- suspend an account with notice, evidence preservation, and appeal where appropriate;
- protect and support the targeted person;
- share indicators or escalate under an approved process.

Controls themselves can be abused. Reporting systems enable brigading; lockouts enable denial of service; device fingerprinting creates privacy risk; CAPTCHAs can exclude disabled users; IP blocks harm shared networks; identity proofing can expose sensitive documents. Model these second-order effects.

### 6.5 Anti-automation design

Apply controls at the valuable action, not only at login:

- define quotas by actor, account, tenant, target, resource, and time window;
- cap expensive fan-out, recursion, file size, parsing, and asynchronous work;
- make retries idempotent and bound queue growth;
- use progressive response based on multiple signals rather than one opaque score;
- monitor success patterns, not only failed requests;
- protect enumeration-sensitive differences in response content and timing where material;
- preserve a usable path for legitimate high-volume and accessibility needs;
- record why a restriction happened and how support can investigate it;
- minimize and expire device or behavioral signals that are no longer necessary.

---

## 7. Turn risks into requirements and controls

### 7.1 Security requirement structure

A testable requirement names the actor, action, object, condition, outcome, failure behavior, and evidence:

```md
Given [trusted state and preconditions],
when [actor] attempts [action] on [resource],
the system must [allow/deny/transform/record]
based on [server-trusted policy inputs].
On control failure it must [safe behavior].
Verification: [test, review, configuration, exercise, or signal].
Source: [threat, privacy risk, law, protocol, contract, or product rule].
```

Example:

> When an authenticated tenant administrator requests a member export, the server must derive the tenant from the administrator’s active membership, require `member.export_all` for that tenant, and scope the query by the same tenant identifier. Missing policy context or policy-service failure must deny the export. Contract and integration tests must cover another tenant’s member identifier and a stale membership.

### 7.2 Control layers

Use defense in depth when layers fail independently and protect the same outcome:

- product constraint: no unaudited bulk export;
- policy: only a defined role under defined conditions;
- application: object-level authorization at the trusted boundary;
- data: tenant key required in query or enforced by row-level policy;
- infrastructure: service identity and minimal database permission;
- monitoring: export and denied cross-tenant attempt events;
- response: session revocation and export disablement;
- recovery: determine affected objects and notify under applicable process.

Duplicating the same flawed check in two wrappers is not defense in depth.

### 7.3 Control selection criteria

For each candidate control, ask:

- Which exact scenario and causal step does it address?
- Does it reduce likelihood, blast radius, duration, or consequence?
- What new security, privacy, accessibility, operational, or support risk does it create?
- Can a user or attacker bypass it through another client or path?
- Does it rely on secret behavior, user vigilance, network location, or an unverifiable vendor claim?
- What happens if it is unavailable, misconfigured, stale, or partially applied?
- Who owns it, monitors it, updates it, and removes it?
- Which evidence shows correct design, implementation, deployment, and continuing operation?

### 7.4 Baselines and tailoring

Use OWASP ASVS 5.0.0 as a web-application verification baseline and NIST SSDF 1.1 as a secure-development baseline. Record the exact version and selected assurance or requirement set. Tailor through the system threat model, not convenience.

Do not claim ASVS conformance because a scanner checked common weaknesses. ASVS includes requirements across architecture, validation, authentication, session, authorization, data protection, communication, configuration, logging, and other areas that require different evidence.

---

## 8. Authentication and account lifecycle

Authentication establishes confidence that a claimant controls authenticators bound to an account. It does not decide what the account may do.

### 8.1 Start with identity risk

Define separately:

- whether the service needs a persistent account at all;
- whether it needs to know a real-world identity or only account continuity;
- identity proofing assurance, if any;
- authentication assurance for ordinary and high-risk actions;
- federation assurance and acceptable identity providers;
- impacted user groups and people harmed by false acceptance or false rejection;
- recovery assurance and support override;
- reauthentication and transaction-confirmation conditions.

NIST SP 800-63 Revision 4 separates identity proofing, authentication, and federation assurance. Do not demand identity documents merely because strong authentication is needed. Proofing more identity can add privacy, exclusion, fraud, storage, and breach risk.

### 8.2 Authenticator strategy

Prefer phishing-resistant, public-key authentication such as properly implemented WebAuthn/passkeys for higher-risk use. NIST SP 800-63B-4 states that manually entered OTPs are not phishing-resistant because they are not bound to the authenticating session.

If passwords are supported:

- permit password managers, paste, and long passwords;
- use blocklists of common and compromised values rather than arbitrary composition rituals;
- rate-limit online attempts without enabling cheap account lockout denial;
- use generic external responses where account existence is sensitive;
- transmit only over an authenticated protected channel;
- store with a current, adaptive password-hashing function and per-password salt;
- choose and benchmark parameters against current authoritative guidance and operational capacity;
- rehash on successful authentication as parameters age;
- never store reversible passwords or log them;
- treat password reset as account recovery, not a lower-assurance side door.

Do not copy numeric parameters from this guide indefinitely. OWASP’s Password Storage Cheat Sheet currently prefers Argon2id and publishes minimum configurations, but parameter guidance changes with hardware and threat conditions.

### 8.3 Enrollment and authenticator binding

Protect:

- account creation and invitation authority;
- verified binding of contact channels;
- enrollment of each new authenticator;
- display of what was bound and how to recognize it later;
- notification through an existing trusted channel;
- recovery codes and backup authenticators;
- removal and replacement of authenticators;
- recent-authentication requirements for binding changes;
- resistance to session theft, QR-code substitution, and social engineering.

An already compromised session should not silently bind a durable new authenticator. For consequential accounts, use step-up authentication, clear out-of-band notice, cooling periods or restricted actions where justified, and a recovery path.

### 8.4 Account recovery

Recovery is often the strongest attacker path and the weakest designed flow. Specify:

- acceptable evidence and assurance relative to normal authentication;
- lost authenticator, lost device, compromised email, changed phone, deceased owner, and inaccessible organization scenarios;
- recovery-code issuance, storage, single use, and regeneration;
- support-agent visibility and authority;
- protection against SIM swap, mailbox compromise, forged documents, and social pressure;
- waiting periods and notifications for high-impact changes;
- effects on existing sessions, API keys, federated links, and recovery factors;
- dispute, reversal, escalation, and lockout support;
- events, monitoring, and review evidence;
- data collected during proofing and its deletion schedule.

Do not use knowledge-based questions built from discoverable personal facts. Do not make recovery depend solely on an inaccessible factor. Test recovery with people using assistive technology and under realistic stress.

### 8.5 Authentication abuse and telemetry

Detect and respond to:

- password spraying and credential stuffing;
- high-rate and distributed attempts;
- successful access following repeated failure;
- authenticator enrollment after suspicious session creation;
- recovery followed by email, payout, role, or export change;
- unusual session or token reuse;
- impossible or implausible travel only as a fallible signal, not unquestionable proof;
- MFA fatigue and repeated push prompting;
- account enumeration and registration farming.

Avoid turning device, location, or behavioral telemetry into indefinite surveillance. Document purpose, access, retention, error rates, user impact, and appeal.

---

## 9. Sessions, federation, and service identity

### 9.1 Session specification

Define:

- how a session begins and which authentication event it represents;
- token or cookie format, custody, transport, and server-side state;
- audience, issuer, subject, tenant, scope, and device or client binding where applicable;
- idle, absolute, and risk-triggered expiry;
- rotation after authentication and privilege change;
- revocation behavior and propagation delay;
- concurrent-session policy and user visibility;
- reauthentication for sensitive actions;
- logout from one session, all sessions, and federated providers;
- behavior after password reset, authenticator removal, role loss, account disablement, or organization departure;
- CSRF, token replay, fixation, theft, leakage, and cross-origin defenses;
- what appears in URLs, browser storage, referrers, logs, crash reports, and analytics.

For browser sessions, prefer secure platform mechanisms and hardened cookies rather than exposing long-lived bearer tokens to script-accessible storage. Set cookie scope, `Secure`, `HttpOnly`, and appropriate `SameSite` behavior deliberately; these attributes address different threats and do not replace CSRF design or origin validation.

### 9.2 Reauthentication and transaction authorization

Require fresh or stronger proof when consequence increases, such as:

- changing authenticators, recovery channels, or primary contact;
- viewing or exporting sensitive data;
- adding an administrator or changing role policy;
- moving money, changing payout destination, or issuing credentials;
- disabling security controls;
- creating a durable integration or API key;
- accessing an emergency or break-glass capability.

Bind confirmation to the actual transaction: show the meaningful target, amount, scope, or effect; protect it against tampering; and avoid treating a generic “Are you sure?” as authorization.

### 9.3 OAuth and OpenID Connect

Use the protocol specification and current security profile, not an old tutorial. RFC 9700 is the current OAuth 2.0 Security Best Current Practice and updates earlier OAuth security guidance.

At minimum:

- use exact redirect URI matching as required by the profile;
- use authorization code flow with PKCE for public clients;
- do not use deprecated or insecure grant patterns merely for compatibility;
- validate issuer, audience, signature, expiry, nonce or state, and other context required by the protocol;
- prevent authorization-server mix-up, code injection, token leakage, and open redirectors;
- give access and refresh tokens the smallest audience, scope, and lifetime that meets the job;
- rotate or sender-constrain refresh tokens where the profile and risk require;
- keep client secrets out of public clients;
- model logout, revocation, provider compromise, key rotation, and account-linking collisions;
- separate “sign in with” identity from delegated authorization to another resource.

### 9.4 Federation and account linking

Define:

- trusted issuers and discovery or metadata mechanism;
- immutable subject key used to identify the account;
- which claims are authoritative and how freshness is established;
- domain or organization membership semantics;
- just-in-time provisioning and deprovisioning;
- role mapping and whether upstream roles may grant local privilege;
- provider key rotation and outage behavior;
- account-linking proof and collision handling;
- what happens if an email address changes or is reassigned;
- local recovery when the provider is unavailable or the relationship ends.

Do not key identity solely by an email address if the protocol supplies a stable issuer-and-subject pair. Do not treat a verified email domain as sufficient authorization for every organization resource.

### 9.5 Workload and service identity

Machines need explicit identity and authorization too:

- issue distinct identities per workload and environment;
- avoid shared long-lived credentials;
- bind credentials to intended audience and service;
- use short-lived, automatically rotated credentials when supported;
- define bootstrap trust and protect the credential issuer;
- authorize service calls by workload identity, action, and resource—not network location alone;
- separate build, deploy, runtime, operator, and emergency identities;
- record human delegation for consequential automated actions;
- revoke and replace without full-system downtime.

NIST SP 800-207 emphasizes resource-focused policy and no implicit trust based only on network location or asset ownership. “Internal” is a routing fact, not an authorization rule.

---

## 10. Authorization and tenant isolation

Authentication asks who is presenting an identity. Authorization asks whether that identity may perform this action on this resource under current conditions.

### 10.1 Authorization policy model

Model at least:

- **subject:** user, service, support agent, administrator, anonymous actor, or delegated principal;
- **action:** precise verb such as view, edit, approve, export, invite, impersonate, refund, or delete;
- **resource:** object type and identifier;
- **relationship:** owner, member, assignee, parent, tenant, organization, or delegation;
- **state:** draft, locked, paid, archived, restricted, deleted, or under review;
- **context:** tenant, authentication strength, time, source service, risk, purpose, or contractual boundary;
- **effect:** allow, deny, filter, redact, require approval, or require stronger proof;
- **obligation:** audit, notification, masking, reason capture, or dual control.

Role-based access control is useful for stable job groupings, but roles alone often become broad and ambiguous. Add resource relationships and attributes where policy depends on ownership, tenancy, state, or purpose. Keep policy understandable enough to review and test.

### 10.2 Core rules

- Deny by default when no explicit policy applies.
- Enforce at a trusted server or resource boundary for every client.
- Use server-derived identity, tenant, role, and resource facts.
- Check the action against the specific object, not only the endpoint or object type.
- Apply policy consistently to reads, writes, search, count, export, batch, webhook, background job, and indirect references.
- Recheck when a queued or delayed action executes if authority can change.
- Prevent mass assignment from changing ownership, tenant, role, status, or protected attributes.
- Treat support and administrative tools as production access paths.
- Fail closed on missing or invalid policy context unless a deliberately designed availability exception applies.
- Avoid leaking object existence through inconsistent errors when existence is sensitive.

### 10.3 Tenant isolation

Tenant isolation needs redundant, reviewable boundaries:

- derive active tenant membership server-side;
- include tenant in every relevant resource key and query;
- make cross-tenant joins explicit and rare;
- constrain database or storage access where supported;
- isolate cache keys, search indexes, object paths, queues, exports, analytics, and logs;
- separate tenant-scoped service credentials where consequence justifies it;
- prohibit trusting a request tenant identifier without membership validation;
- test object identifiers from another tenant across every operation;
- test stale role, removed membership, transfer, invitation, and organization-merge states;
- log denied cross-tenant attempts without recording exposed data.

Tenant UI context is not a security boundary. A query that fetches by global object ID and checks tenant afterward may already have leaked data through timing, logs, side effects, or exceptions.

### 10.4 Privileged and support access

Define:

- eligible roles and approval path;
- narrow task-scoped privilege and duration;
- strong authentication and managed device requirements where appropriate;
- reason, case, ticket, or customer authorization;
- user notice and consent where appropriate and safe;
- which fields are masked by default;
- whether impersonation is allowed and how it is visibly distinguished;
- full, tamper-resistant audit of access and actions;
- review of unusual or bulk access;
- emergency access, after-the-fact review, and revocation;
- prohibition on using personal accounts or shared administrator credentials.

Never display or ask support agents to retrieve user passwords. Make high-risk actions require deliberate escalation rather than a hidden URL or role toggle.

### 10.5 Authorization verification

Build an executable matrix:

| Subject | Tenant/relationship | Resource state | Action | Expected effect | Audit expectation |
|---|---|---|---|---|---|
| owner | same tenant | active | view | allow | normal access event if sensitive |
| member | same tenant | locked | edit | deny | policy denial |
| admin | other tenant | active | export | deny | high-signal cross-tenant denial |
| worker | stale delegation | active | update | deny | revoked delegation event |

Test:

- horizontal access between peer users;
- vertical access from ordinary to privileged role;
- cross-tenant object and collection access;
- field-level read and write restrictions;
- bulk, search, export, count, and indirect object reference;
- stale sessions and delayed jobs after permission loss;
- missing context, policy timeout, cache staleness, and partial failure;
- alternate methods, content types, clients, and API versions;
- race conditions around role or resource-state transitions.

Frontend tests can verify affordances; only trusted-boundary tests establish enforcement.

---

## 11. Personal data and privacy engineering

### 11.1 Begin with people and data actions

NIST’s Privacy Risk Assessment Methodology evaluates problematic data actions and their potential adverse effects on individuals. Apply that lens to every stage:

- collection and observation;
- generation and inference;
- transformation, matching, and enrichment;
- storage and indexing;
- use in decisions or personalization;
- sharing and sale;
- access by employees, vendors, and partners;
- publication and export;
- retention, archive, backup, and deletion.

Security asks whether an unauthorized party can access a location history. Privacy also asks whether collecting, inferring, or using that history is appropriate at all.

### 11.2 Data-processing specification

For each purpose, record:

```md
## Processing purpose: [specific outcome]

- People affected:
- Data elements and inferences:
- Source and collection context:
- Exact purpose and expected benefit:
- Necessity: why less or no data cannot reasonably achieve it:
- Applicable legal basis or authority:
- Notice and user control:
- Decision or action using the data:
- Recipients, processors, and transfers:
- Retention and deletion:
- Security classification and controls:
- Potential problems for people:
- Mitigations and residual risk:
- Rights and request handling:
- Evidence, owner, and review date:
```

Do not combine unrelated purposes into “improve services.” Fraud prevention, product analytics, personalization, advertising, safety review, and model training are different processing purposes with different necessity and expectations.

### 11.3 Data minimization

Minimize across several dimensions:

- **elements:** collect only necessary fields;
- **precision:** use coarse location, age band, or derived eligibility when exact values are unnecessary;
- **population:** process only affected users or records;
- **frequency:** sample or process on demand rather than continuously;
- **access:** expose only to roles and services that need it;
- **copies:** avoid uncontrolled exports, logs, caches, and test replicas;
- **retention:** delete after the purpose and obligations end;
- **linkability:** use purpose-specific identifiers and separation where useful;
- **output:** return the decision or aggregate rather than raw data.

The European Commission’s GDPR guidance identifies purpose limitation, data minimization, storage limitation, accuracy, integrity and confidentiality, and accountability among the applicable principles for in-scope processing. These are sound engineering prompts beyond the EU, but the actual legal basis and duties require jurisdiction-specific review.

### 11.4 Consent and user choice

Where consent is the applicable mechanism, it should be:

- specific to the processing purpose;
- informed in clear language at the relevant moment;
- freely given rather than coerced through unnecessary service denial;
- expressed through a clear affirmative action;
- recorded with notice and policy version;
- as easy to withdraw as to grant;
- propagated to downstream processing and vendors;
- separated from other bases or mandatory processing.

Do not use consent as a decorative checkbox for processing that cannot actually stop. Do not treat acceptance of general terms as permission for every future use.

### 11.5 Access, correction, portability, restriction, and deletion

Design request handling as a system capability:

- authenticate the requester proportionately without collecting unnecessary new data;
- locate records across primary stores, derived systems, vendors, support tools, logs, archives, and backups;
- distinguish data supplied by the person, observed data, derived data, system records, and records about other people;
- preserve other people’s rights and necessary security evidence;
- correct source data and propagate correction to material derivatives;
- use a stable, documented export format and explain codes or inferences;
- delete or restrict according to applicable obligations and exceptions;
- prevent routine restoration of deleted data from backups;
- record request, decisions, completion, and authorized exceptions;
- test deadlines, partial failure, vendor response, and appeals.

Deletion is a distributed workflow, not one SQL statement. Define semantic deletion, physical deletion, backup expiry, search-index removal, cache invalidation, event-stream handling, derived-model behavior, and legal hold.

### 11.6 De-identification and pseudonymization

- **Pseudonymized data** replaces direct identifiers but can still be linked using additional information; treat it as personal data when applicable.
- **De-identified data** requires a defensible assessment of re-identification risk considering available auxiliary data, uniqueness, population, release detail, and future use.
- **Aggregated data** can still expose small groups or individuals through sparse cells, repeated queries, or differencing.
- **Synthetic data** can memorize or reveal source records and needs evaluation.

Separate linkage keys, restrict access, rotate identifiers when compatible with purpose, use minimum cohort thresholds where useful, and test re-identification risk. Do not call a dataset anonymous because names were removed.

### 11.7 Sensitive and free-form data

Apply stronger controls to data whose misuse has higher consequence, including credentials, government identifiers, financial, health, biometric, precise location, communications, children’s data, protected traits, intimate information, and safety-related records.

Free text and uploaded files can contain any category. Do not copy support tickets, production payloads, or user content into fixtures, prompts, logs, analytics, or issue trackers by default. Provide redaction, access restriction, and safe review environments.

### 11.8 Retention schedule

For each record class, define:

- business and user purpose;
- legal or contractual minimum and maximum;
- active retention;
- archive or backup retention;
- deletion event and execution window;
- legal hold authority and release process;
- owner and review date;
- enforcement mechanism;
- evidence of deletion and exceptions.

“Keep indefinitely” is a risk decision requiring exceptional justification. Storage cost is not the main issue; prolonged availability expands exposure, misuse, discovery, and breach consequence.

### 11.9 Privacy review triggers

Require a deeper privacy assessment for:

- new sensitive data or identity proofing;
- systematic tracking or monitoring;
- large-scale profiling, scoring, or automated decisions;
- data matching, enrichment, or inference;
- children or vulnerable populations;
- precise location, biometrics, health, communications, or financial behavior;
- new sharing, sale, public release, or cross-border transfer;
- repurposing existing data;
- model training or evaluation using personal data;
- anti-abuse signals that fingerprint people or devices;
- materially changed retention, rights, or user expectations.

---

## 12. Secrets, cryptography, and key lifecycle

### 12.1 Do not invent cryptography

Use current, reviewed protocols and platform libraries. Cryptographic design includes algorithm, mode, randomness, key generation, custody, use, rotation, revocation, backup, and destruction. Choosing “AES-256” names only one component and proves little.

Define the security property:

- confidentiality from which actors;
- integrity and authenticity of which message or artifact;
- password verification;
- digital signature and signer identity;
- transport protection;
- storage protection;
- token unforgeability;
- key derivation;
- forward secrecy or compromise containment where required.

Encryption does not establish authorization, accuracy, deletion, purpose limitation, endpoint safety, or protection while an authorized system processes plaintext.

### 12.2 Secret inventory

Inventory:

- database and provider credentials;
- API keys and webhook secrets;
- OAuth clients and refresh tokens;
- signing and encryption keys;
- TLS private keys and certificates;
- CI/CD and registry credentials;
- recovery and break-glass credentials;
- employee and service-account credentials;
- customer-created integration keys;
- seeds, salts where separately managed, and peppers;
- backup encryption and restoration credentials.

For each, record owner, purpose, issuer, consumers, environment, storage, access policy, creation, lifetime, rotation, revocation, audit, recovery, and destruction.

### 12.3 Secret management

- Generate secrets with an approved cryptographic random source.
- Store them in a dedicated secret or key-management system where feasible.
- Deliver them through authenticated channels to named workloads or people.
- Keep them out of source, environment dumps, images, client bundles, issue trackers, chat, logs, metrics, traces, and test snapshots.
- Scope by environment, workload, action, resource, and lifetime.
- Prefer short-lived credentials derived from workload identity over static shared values.
- Rotate automatically and verify consumers can tolerate overlap and revocation.
- Audit retrieval and administrative change without logging secret values.
- Scan current content, history, artifacts, and configuration for accidental exposure.
- On exposure, revoke or rotate first; deleting the visible string does not invalidate it.

### 12.4 Key lifecycle

Follow current key-management guidance such as NIST SP 800-57 for applicable systems. Define:

- key type and approved algorithm profile;
- generation environment and entropy source;
- custody and separation of duties;
- usage restrictions and cryptoperiod;
- wrapping, storage, replication, and backup;
- public key or certificate distribution;
- rotation and compatibility window;
- compromise, revocation, and re-encryption path;
- archival verification needs;
- destruction and evidence;
- disaster recovery without creating an uncontrolled copy.

Separate data-encryption keys from key-encryption keys where the architecture benefits. Separate keys by environment and purpose. Never rely on algorithm secrecy.

### 12.5 Webhooks and signed messages

For incoming signed messages:

- authenticate the sender or signing key;
- verify the signature over the exact raw representation required by the protocol;
- enforce timestamp or nonce freshness and a replay window;
- bind message to intended receiver or endpoint where supported;
- parse only after required authenticity checks;
- validate schema and business semantics separately;
- process idempotently and deduplicate delivery identifiers;
- protect key rotation and multiple active-key windows;
- log safe identifiers and verification outcome, not the secret or full sensitive payload.

A valid signature establishes that an authorized key signed bytes; it does not establish that the message is safe, current, non-duplicated, or permitted by business policy.

---

## 13. Dependencies and software supply-chain risk

Dependencies include packages, base images, actions, compilers, build plugins, hosted APIs, models, datasets, operating systems, package registries, and the infrastructure that turns source into a release.

### 13.1 Before adoption

Assess:

- exact capability needed and whether the platform already provides it;
- project or vendor ownership, governance, and maintenance;
- release and support history;
- direct and transitive dependency graph;
- runtime, build-time, install-time, and network permissions;
- native code, post-install scripts, macros, code generation, and dynamic loading;
- vulnerability and incident history in context;
- secure development, review, signing, and disclosure practices;
- license and usage constraints;
- artifact provenance and reproducibility evidence;
- data sent to a hosted service, vendor access, retention, and deletion;
- update mechanism and risk of automatic major change;
- operational criticality, failure behavior, and exit cost;
- internal ability to test the behavior relied upon.

OpenSSF Scorecard can supply automated heuristics about a project’s practices. Treat the result as one input, not a trust verdict. A high score does not establish code correctness; a low score may reflect missing visible evidence rather than known compromise.

### 13.2 Inventory and provenance

Maintain a machine-readable software bill of materials for released artifacts where appropriate. CISA’s 2025 SBOM minimum elements describe a current U.S. federal baseline for component transparency. Include enough identity and relationship data to map components to advisories, support status, and deployed products.

An SBOM answers “what components are represented,” not:

- whether a vulnerable code path is reachable;
- whether a package is malicious;
- whether the build used only declared inputs;
- whether an artifact was tampered with;
- whether a supplier follows secure development;
- whether the running environment matches the inventory.

Use provenance to connect an artifact to source, builder, process, and inputs. SLSA 1.2 defines source and build tracks with increasing guarantees. Provenance must be verified against policy; merely publishing an attestation does not establish trust.

### 13.3 Secure build and release

- Protect source and build identities with strong authentication.
- Require review and branch protections proportional to risk.
- Pin or otherwise control build inputs and verify integrity.
- Isolate builds and minimize network and secret access.
- Separate untrusted pull-request execution from release credentials.
- Generate release artifacts in controlled automation, not a developer laptop.
- sign or attest artifacts and provenance where the ecosystem supports it;
- test the exact artifact that will be deployed;
- promote an immutable artifact rather than rebuilding per environment;
- restrict registry publication and protect namespaces;
- retain enough evidence to reproduce the release decision;
- verify provenance and policy at consumption or deployment.

### 13.4 Vulnerability prioritization

Do not prioritize only by a base severity score. Combine:

- affected version and actual deployment;
- reachability and exposed feature;
- privilege and preconditions;
- exploit maturity and evidence of active exploitation;
- CISA Known Exploited Vulnerabilities status where relevant;
- internet exposure and available compensating controls;
- asset, data, tenant, and user consequence;
- ease of detection and containment;
- supplier fix and upgrade compatibility;
- end-of-life or abandonment status.

CVSS 4.0 communicates technical severity and supports threat and environmental metrics. It is not an organizational risk score by itself.

### 13.5 Update policy

Define:

- supported ecosystems and registries;
- version pinning and lockfile rules;
- automated update scope;
- required checks and approval by risk;
- service-level objectives for actively exploited and other material vulnerabilities;
- exception authority and expiry;
- end-of-life replacement triggers;
- emergency patch and rollback path;
- how deployed inventory is queried;
- how false positives and not-affected decisions are evidenced;
- removal of unused components.

An unused dependency is still update and supply-chain surface if it remains in source, build, or artifact.

### 13.6 Supplier and hosted-service risk

For a service that receives data or performs a critical control, document:

- exact data, purpose, location, subprocessors, and retention;
- authentication, authorization, encryption, and tenant isolation promises;
- incident and vulnerability notification terms;
- logs and evidence available to your incident team;
- availability, rate, quota, retry, and degradation behavior;
- backup, deletion, export, and termination handling;
- material changes and dependency on provider roadmap;
- independent reports and their exact scope and period;
- exit plan, migration format, and credential revocation.

A certification report is scoped evidence, not proof of every application behavior or current configuration.

---

## 14. Security logging, monitoring, and audit evidence

Logging must serve explicit detection, investigation, accountability, operations, or compliance purposes. More logging can increase exposure, cost, noise, and privacy harm.

### 14.1 Separate signal types

| Signal | Primary job | Integrity/access need |
|---|---|---|
| Application log | Diagnose a discrete operational event | Protected operational access; avoid sensitive payloads |
| Metric | Measure rates, distributions, saturation, and aggregate outcomes | Stable definitions; labels must not create personal-data leakage or cardinality failure |
| Trace | Connect a request across boundaries | Sample and redact; control baggage propagation |
| Security event | Detect or investigate security-relevant behavior | Central, timely, protected, queryable, alertable |
| Audit record | Establish consequential actor, action, resource, and result | Stronger integrity, retention, review, and access controls |

Do not assume an ordinary debug log is a compliant audit trail. Do not use audit records as an unrestricted analytics dataset.

### 14.2 Event specification

For each event, define:

```md
- Event name and version:
- Security or operational purpose:
- Trigger and non-trigger cases:
- Actor type and safe identifier:
- Subject or target using a safe identifier:
- Action, result, reason category, and policy version:
- Tenant or scope where safe and necessary:
- Event time, processing time, and clock source:
- Request, session, trace, and deployment correlation:
- Source service and environment:
- Fields prohibited from capture:
- Access and retention:
- Alert or investigation using it:
- Expected volume and loss tolerance:
- Test and sample redacted record:
- Owner and change policy:
```

Use stable names and enumerated reason categories. Keep user-facing errors safe and helpful while retaining protected internal diagnostic context.

### 14.3 Events to consider

Depending on risk, include:

- authentication success, failure, factor use, lockout, and recovery;
- authenticator, contact, password, session, and API-key lifecycle changes;
- authorization denial and high-impact authorization decisions;
- role, membership, tenant, delegation, and policy changes;
- administrative and support access;
- sensitive read, bulk search, export, deletion, and sharing;
- input or output validation failure indicating protocol violation;
- webhook signature, replay, and schema failure;
- rate limit, anti-automation, fraud, and abuse enforcement;
- secret, key, certificate, and security-configuration changes;
- build, release, artifact, and deployment decisions;
- log pipeline interruption, event loss, clock drift, and alert failure;
- backup, restoration, migration, and break-glass actions.

OWASP ASVS 5.0.0 requires authentication operations and failed authorization attempts to be logged at relevant verification levels; higher assurance can require broader authorization-decision and sensitive-access evidence. Reference exact versioned requirement IDs in a formal verification plan.

### 14.4 Never log by default

- passwords, recovery codes, private keys, full tokens, session secrets, or client secrets;
- full payment card or government identification data;
- raw biometric data;
- sensitive request or response bodies;
- unnecessary email, phone, precise location, message content, or uploaded document;
- database connection strings or secret-bearing URLs;
- authentication headers and cookies;
- decryption keys or plaintext generated only for processing;
- unrestricted exception objects that can contain payloads or environment values.

Use allow-listed structured fields rather than attempting to redact arbitrary objects after serialization. Redaction is a control with tests and failure behavior, not a regular expression added at the end.

### 14.5 Log pipeline security

- authenticate sources and encrypt transport;
- restrict write, read, export, retention, and deletion permissions separately;
- prevent application identities from altering centralized records;
- protect integrity and preserve chain-of-custody needs;
- synchronize clocks and retain source timezone semantics;
- detect pipeline delay, drop, duplication, schema rejection, and storage exhaustion;
- isolate production from lower environments;
- define retention by event purpose and investigation need;
- delete or de-identify when purpose expires;
- rehearse access during an incident;
- record and review access to sensitive logs.

NIST’s SP 800-92 Revision 1 remains an Initial Public Draft as of this research date. Use it as draft planning guidance, and label it accordingly.

### 14.6 Detection engineering

Every alert needs:

- threat or failure scenario;
- required events and field quality;
- logic, threshold, and aggregation window;
- expected benign causes;
- severity based on potential consequence and confidence;
- owner and response playbook;
- suppression, deduplication, and escalation;
- evidence preserved;
- test using generated or replayed safe events;
- review of false positives, false negatives, and attacker evasion;
- retirement condition.

Alert volume is not detection quality. Measure whether material scenarios are observable and whether responders can act before harm expands.

---

## 15. Secure implementation and verification

### 15.1 Boundary rules

- Parse and validate untrusted input at a trusted boundary into explicit types.
- Apply length, range, cardinality, encoding, and resource limits before expensive processing.
- Normalize only when the protocol requires it and test ambiguity.
- Parameterize interpreter inputs; use contextual encoding at the final output destination.
- Avoid shell construction and unsafe deserialization.
- Treat database, queue, cache, file, environment, and vendor data according to their trust, not their location.
- Validate uploaded type by content and safe parser behavior, not filename alone.
- Store untrusted active content separately and serve with safe content type, disposition, and origin policy.
- Use safe defaults when required configuration is missing.
- Do not reveal stack traces, internal paths, query text, secrets, or sensitive object existence externally.

### 15.2 Security test strategy

Connect each material threat to the lowest sufficient evidence layer. Use the companion [risk-based testing guide](../../testing/references/research.md) for test architecture.

| Risk | Useful evidence |
|---|---|
| Policy logic | Table-driven unit/property tests over roles, resources, states, and conditions |
| Tenant isolation | API and data-store integration tests with cross-tenant identifiers and stale membership |
| Protocol implementation | Conformance and negative tests against current specification |
| Parser or upload | Malformed, oversized, ambiguous, recursive, and adversarial corpus; fuzzing where valuable |
| Authentication/session | Browser and API tests for enrollment, theft, fixation, expiry, revocation, and recovery |
| Dependency/build | Lockfile and SBOM generation, provenance verification, artifact scanning, build-isolation review |
| Logging | Event schema tests, prohibited-field tests, pipeline-loss test, alert exercise |
| Recovery | Restore rehearsal, credential rotation, rebuild from trusted artifacts, reconciliation |
| Abuse | Rate, concurrency, multi-account, replay, race, and appeal simulations |

### 15.3 Security tools and limits

- **Static analysis** finds certain code patterns; it rarely understands full authorization or business intent.
- **Dependency scanning** maps known advisories; it can miss malicious packages, unknown issues, reachability, and deployed reality.
- **Dynamic scanning** probes a running surface; authentication, state, rate, and business workflow constrain coverage.
- **Secret scanning** detects recognizable patterns; it cannot prove absence or invalidate an exposed credential.
- **Container and infrastructure scanning** identifies known package and configuration issues; runtime identities and organizational controls still matter.
- **Fuzzing** explores input handling; an oracle and representative harness determine value.
- **Penetration testing** samples paths in a period and scope; it does not provide continuous assurance.
- **Red teaming** tests detection and response against goals; it is not a comprehensive vulnerability inventory.
- **Privacy review** assesses processing and harm; a security test cannot determine necessity or fairness.

Automate repeatable controls, but never convert tool silence into “secure.”

### 15.4 Review triggers

Require qualified security review for:

- identity proofing, authentication, federation, sessions, or recovery;
- new role, tenant boundary, privileged action, or support path;
- money movement, entitlements, signing, or destructive operation;
- new sensitive data or public sharing;
- cryptography, secret management, key custody, or certificate logic;
- untrusted file, markup, archive, parser, redirect, or code execution;
- internet-facing infrastructure, webhook, or administrative interface;
- high-volume abuse, scraping, or adversarial user interaction;
- new critical dependency, build path, or supplier;
- migration that changes access, retention, encryption, or recovery;
- a workaround for a known vulnerability or accepted high risk.

### 15.5 Release evidence

For a consequential release, record:

- commit and immutable artifact identifier;
- threat-model and privacy-review version;
- changed attack surface, data, permissions, and dependencies;
- selected requirements and control owners;
- test and scan results with versions and scope;
- manual reviews and unresolved findings;
- SBOM and provenance location;
- deployment and configuration evidence;
- monitoring and alert readiness;
- migration, rollback, and data-repair plan;
- incident and support readiness;
- accepted risk and approval;
- post-deployment verification.

---

## 16. Vulnerability management and disclosure

### 16.1 Intake

Maintain a monitored security contact and vulnerability disclosure policy. RFC 9116 defines `security.txt`, a machine-readable way to publish reporting information. A reporting channel needs a human process behind it.

Intake should:

- acknowledge receipt without admitting unsupported facts;
- protect reporter and vulnerability information;
- capture product, version, environment, steps, impact, and evidence;
- avoid asking for unnecessary personal data;
- prohibit unsafe testing boundaries clearly and proportionately;
- deduplicate without losing independent evidence;
- assign owner, severity assessment, and communication cadence;
- coordinate supplier and downstream notifications;
- preserve an audit trail;
- provide safe-harbor language only with qualified legal approval.

### 16.2 Triage

Separate:

- vulnerability validity;
- technical severity;
- exploitability in the deployed environment;
- affected products and versions;
- evidence of active exploitation;
- confidentiality, integrity, availability, privacy, safety, and fraud impact;
- detectability, containment, and recovery;
- affected users and notification obligations;
- public disclosure risk;
- remediation and regression risk.

Track source and confidence. A CVE, scanner result, researcher report, customer ticket, anomaly, or incident creates different evidence.

### 16.3 Remediation

- Contain active exposure first where safe.
- Identify root cause and variants, not only the reported instance.
- Search for the same assumption across clients, versions, services, and tenants.
- Add tests that fail for the actual defect.
- Review whether logs can identify exploitation without exposing more data.
- Patch the supported range and define unsupported-product action.
- Test migration, compatibility, rollback, and emergency configuration.
- rotate or revoke credentials when exposure cannot be ruled out;
- communicate accurately to customers, suppliers, and authorities under the applicable plan;
- validate deployment and close only with evidence.

### 16.4 Coordinated disclosure

Set a disclosure policy before pressure rises:

- reporter contact and status cadence;
- target remediation window based on risk;
- handling of active exploitation or imminent harm;
- CVE assignment and advisory format where relevant;
- credit preferences and protection of identities;
- customer pre-notification and mitigation;
- supplier coordination;
- public technical detail timing;
- exceptions approved by accountable owners.

Do not threaten good-faith reporters for using the published channel. Do not promise a fixed timeline you cannot meet. Do not hide user-protective action merely to avoid reputational discomfort.

### 16.5 Vulnerability metrics

Useful measures include:

- time from introduction and first detection to validation;
- time to containment and complete remediation;
- exposure duration by affected deployed asset;
- percentage of deployed inventory with known status;
- recurrence and variant findings;
- actively exploited vulnerability response against objective;
- exception age and overdue reviews;
- reporter acknowledgment and update reliability;
- escaped issues by causal control gap.

Avoid rewarding closure count or low finding count. These can incentivize shallow scanning, duplicate tickets, or suppressed reporting.

---

## 17. Incident response and recovery

NIST SP 800-61 Revision 3 integrates incident response into all six NIST CSF 2.0 functions: Govern, Identify, Protect, Detect, Respond, and Recover. Preparation, detection, response, and learning are continuous capabilities, not a binder opened after compromise.

### 17.1 Define incident and severity

Distinguish:

- **event:** observable occurrence;
- **alert:** event or pattern needing evaluation;
- **security incident:** occurrence that actually or imminently jeopardizes security, privacy, policy, or operations under the organization’s definition;
- **personal-data breach:** legal term whose definition and notification duties depend on applicable law;
- **crisis:** incident requiring broader executive, safety, continuity, or public coordination.

Severity should reflect actual or plausible harm, scope, privilege, data, active adversary, persistence, operational disruption, legal deadlines, public exposure, and recoverability—not only technical novelty.

### 17.2 Preparation

Maintain and exercise:

- incident commander and alternates;
- security, engineering, operations, privacy, legal, communications, support, HR, leadership, vendor, insurer, and law-enforcement contacts as applicable;
- decision rights for containment, shutdown, credential rotation, disclosure, and customer remediation;
- out-of-band communication if primary identity or chat is compromised;
- asset, data, dependency, owner, and deployed-version inventory;
- log access, retention, clock quality, and forensic collection;
- evidence handling and chain-of-custody requirements;
- emergency accounts and break-glass review;
- clean devices, trusted build path, and restoration credentials;
- isolated, encrypted, tested backups;
- customer and regulator notification matrix;
- pre-reviewed message structures and status channels;
- vendor escalation and shared-responsibility expectations;
- tabletop and technical exercise schedule.

Do not store the only incident plan, contact list, keys, or recovery instructions inside the system likely to be unavailable.

### 17.3 Detection and analysis

Establish:

- initial reporter, time, and evidence;
- what is known, observed, inferred, and unknown;
- affected identities, assets, versions, tenants, data, regions, and suppliers;
- earliest known activity and possible persistence;
- initial access, execution, privilege, lateral movement, collection, exfiltration, tampering, and disruption hypotheses;
- control and telemetry blind spots;
- whether personal data, payment, safety, or contractual duties are implicated;
- confidence and next decision deadline;
- evidence that must be preserved before action changes it.

Build a timestamped decision log. Preserve raw evidence where appropriate; work from copies. Avoid prematurely stating cause, actor, data impact, or completeness.

### 17.4 Containment

Choose containment based on harm and evidence needs:

- disable a feature, endpoint, integration, tenant, or account;
- revoke sessions, API keys, certificates, or service credentials;
- isolate workloads or networks;
- block known malicious indicators while expecting evasion;
- preserve affected systems or snapshots;
- stop data exports, queue consumers, or destructive automation;
- deploy a temporary configuration or virtual patch;
- increase logging only after reviewing sensitivity and attacker awareness;
- protect affected people with warnings, transaction holds, or support;
- maintain essential service through a clean alternative.

Containment can destroy evidence, alert the actor, cause data loss, or harm availability. Record the tradeoff and decision owner.

### 17.5 Eradication and remediation

- remove persistence and unauthorized access;
- patch the root cause and plausible variants;
- rebuild from trusted source and verified artifacts when integrity is uncertain;
- rotate credentials and keys according to exposure scope and dependency order;
- correct policy, configuration, and identity state;
- review supplier and downstream impact;
- add detections for observed techniques;
- validate that attacker-controlled data, jobs, users, and tokens are removed;
- preserve required evidence before disposal;
- update threat model and tests.

Do not declare eradication because malware was deleted from one host. Define confidence and unresolved uncertainty.

### 17.6 Recovery

Define a trusted recovery sequence:

1. Establish clean administrative identity and communication.
2. Verify source, build, artifact, configuration, and backup integrity.
3. Restore foundational identity, secrets, network, data, and dependency services in order.
4. Apply remediations before exposing restored systems.
5. Reconcile transactions, messages, records, and permissions since the recovery point.
6. Validate critical user journeys, tenant isolation, monitoring, and support.
7. Restore progressively with stop conditions.
8. Watch for reinfection, persistence, data inconsistency, and renewed abuse.
9. communicate status, protective actions, and remaining limits accurately.
10. Retire temporary access and controls after review.

Backups are useful only if they are complete, protected from the incident, restorable, current enough, and trustworthy. Test restoration, not only backup-job success. NIST guidance on ransomware and data integrity emphasizes maintaining and testing backups and verifying recovered data.

### 17.7 Recovery objectives

- **RTO:** target time to restore an acceptable service level.
- **RPO:** maximum tolerable data loss measured in time.
- **MTPD or maximum tolerable downtime:** business limit before harm becomes unacceptable.
- **Integrity objective:** evidence required to trust restored data and software.

Define objectives per capability and dependency. A global “four-hour RTO” is meaningless if identity, DNS, keys, database, vendor, and staff access have different restoration paths.

### 17.8 Communication and notification

Prepare messages for affected people, employees, customers, partners, authorities, and the public as applicable. State:

- what happened and when, bounded by current evidence;
- which systems, data, and people are known or reasonably believed affected;
- what the organization has done;
- what the recipient should do and why;
- how to obtain help and accessible alternatives;
- how future legitimate contact will occur to reduce follow-on phishing;
- what remains unknown and when an update is expected.

Do not speculate, minimize, blame, or use vague reassurance. Protect investigation-sensitive detail without withholding information people need to reduce harm.

Notification obligations vary. For example, applicable GDPR rules can require supervisory-authority notification within 72 hours of awareness when the breach is likely to risk individuals’ rights and freedoms, with additional communication for high risk. U.S. duties vary by state, sector, data, and role. Maintain a current legal matrix and involve qualified counsel immediately; do not copy one deadline into a universal runbook.

### 17.9 Post-incident learning

Within a defined period:

- build an evidence-backed timeline;
- distinguish initiating cause, contributing conditions, detection gaps, response friction, and recovery weakness;
- identify why safeguards did not prevent, limit, or reveal the event;
- assess harm and whether remediation reached affected people;
- update threats, privacy risks, abuse cases, requirements, tests, alerts, inventories, and runbooks;
- assign actions with owner, priority, evidence, and deadline;
- review supplier and governance decisions;
- remove temporary access and emergency exceptions;
- communicate durable changes without unsupported claims;
- schedule verification of corrective actions.

Avoid a shallow “human error” root cause. Ask why the system allowed one action to create the consequence and why detection or recovery took as long as it did.

### 17.10 Exercises

Use:

- discussion tabletop for roles and decisions;
- notification exercise for legal and communication timing;
- log and investigation drill for evidence access;
- credential-compromise exercise for revocation order;
- restore test for actual data and service dependencies;
- purple-team exercise for a modeled attacker path;
- supplier outage or compromise scenario;
- lost identity-provider or build-system scenario;
- mass authorization error or cross-tenant exposure scenario;
- abuse surge with false-positive and appeal handling.

An exercise passes only when it produces the required decision and operational evidence within the objective. Attendance is not recovery proof.

---

## 18. Governance, review gates, and metrics

### 18.1 Ownership

Assign accountable owners for:

- enterprise security and privacy risk;
- product security and privacy requirements;
- identity, authorization, and privileged access;
- data inventory, purpose, retention, and rights;
- dependency and supplier decisions;
- build and release integrity;
- logging, detection, and alert response;
- vulnerability intake and remediation;
- incident command, legal assessment, communication, and recovery;
- exceptions and residual-risk acceptance.

Security may facilitate a threat model, but the system owner owns the system risk. Privacy may assess processing, but product and data owners must explain why the processing exists. An outsourced service does not outsource accountability for the product decision.

### 18.2 Review gates

Use risk-based gates rather than requiring the same ceremony for every change.

**Design gate:**

- scope, actors, assets, data, and boundaries are current;
- product and authorization rules are explicit;
- material threats, privacy risks, and abuse cases are written;
- selected controls map to risks and requirements;
- legal, security, privacy, safety, accessibility, or supplier review is scheduled where triggered;
- residual risk and non-goals are visible.

**Implementation gate:**

- trusted boundaries and secure defaults are implemented;
- authentication and authorization are independently enforced;
- personal data and secrets are minimized in code, fixtures, telemetry, and tooling;
- dependency and build changes are reviewed;
- control-focused tests exist;
- logging and alert requirements are implemented and redaction is verified;
- migration, compatibility, partial failure, and recovery are addressed.

**Release gate:**

- exact artifact and environment are identified;
- required tests, scans, reviews, and exercises passed;
- findings are resolved or explicitly accepted by authorized owners;
- deployed configuration and provenance are verified;
- monitoring and incident response are ready;
- rollback, credential rotation, data repair, and customer support are feasible;
- time-sensitive sources and supplier status were rechecked.

**Operating gate:**

- material changes trigger model refresh;
- inventories match deployed reality;
- access, exceptions, secrets, dependencies, retention, and alerts are reviewed on schedule;
- restore, response, and communication exercises occur;
- incidents and near misses feed requirements and tests;
- unsupported paths and expired controls are removed.

### 18.3 Exception record

```md
## Security/privacy exception

- Requirement not met:
- Source and version:
- Affected system, release, data, people, and environments:
- Threat or privacy scenario:
- Reason compliance is not currently feasible:
- Compensating controls and evidence:
- Residual likelihood, consequence, and uncertainty:
- Detection and response plan:
- Owner:
- Authorized risk acceptor:
- Created and expiry dates:
- Remediation plan and milestone:
- Review triggers:
```

Do not make permanent exceptions through repeatedly extended expiry dates. Reassess the premise, architecture, or feature if remediation keeps failing.

### 18.4 Security and privacy metrics

Metrics should answer a management question and lead to action.

**Coverage and readiness:**

- percentage of material systems with current owners, data maps, threat models, and recovery plans;
- percentage of high-risk authorization rules represented in executable matrices;
- percentage of released artifacts with verified inventory and provenance;
- percentage of critical services with successful restore exercises inside objectives;
- detection coverage for prioritized scenarios;
- supplier and dependency inventory freshness.

**Control operation:**

- privileged-access use and overdue review;
- credential and key rotation failures;
- security-event pipeline completeness and delay;
- deletion and rights-request completion with exception reasons;
- rate-limit and anti-abuse outcomes, false positives, appeals, and targeted-user remediation;
- vulnerability exposure duration on deployed assets.

**Response and learning:**

- time to validate, contain, eradicate, restore, and notify by incident type;
- percentage of incidents with sufficient evidence to determine scope;
- recurrence of the same control failure;
- corrective-action age and verification;
- exercise findings closed with evidence.

### 18.5 Metric cautions

Avoid using:

- raw vulnerability count as posture;
- average patch time without exposure and consequence;
- phishing-click rate as a verdict on employees;
- blocked-request count as proof of effective abuse defense;
- alert count or low false-positive rate without missed detection analysis;
- audit completion as proof controls still operate;
- “number of records” alone as breach severity;
- absence of incidents as evidence of safety;
- a composite maturity score that hides critical failure.

Good metrics preserve denominator, scope, severity, trend, uncertainty, and decision. Pair lagging outcomes with leading capability evidence, and protect metric systems against personal-data misuse and Goodhart effects.

### 18.6 Independent assurance

Use independent review proportional to consequence:

- peer review outside the implementing pair;
- qualified security and privacy review;
- protocol or cryptographic specialist;
- penetration test scoped by threat model;
- red or purple team focused on prioritized objectives;
- supplier assessment and evidence review;
- external audit or certification where required;
- legal and regulatory review;
- representative user and accessibility testing of identity, security warning, consent, recovery, and appeal flows.

The system that generated a control should not be its only reviewer. Independence does not remove the product team’s ownership.

---

## 19. Reusable specifications and templates

### 19.1 Security and privacy brief

```md
# Security and privacy brief: [change]

## Outcome and scope
- User/system outcome:
- In scope:
- Out of scope:
- Environments and artifact:
- Owners:

## Assets and people
- Protected assets and capabilities:
- People who can be harmed:
- Security objectives:
- Privacy objectives:
- Availability and recovery objectives:

## System and data
- Architecture/data-flow reference:
- Trust and tenant boundaries:
- Identities and roles:
- Data elements, purposes, locations, retention, and recipients:
- Dependencies and suppliers:

## Risk
- Threat scenarios:
- Privacy risks:
- Abuse cases:
- Prior incidents/findings:

## Controls and evidence
- Prevent:
- Detect:
- Respond:
- Recover:
- Tests/reviews/exercises:
- Deployment evidence:

## Residual risk
- Accepted risk and authority:
- Unknowns:
- Monitoring:
- Expiry/review triggers:
```

### 19.2 Threat register

```md
| ID | Scenario | Affected people/assets | Existing controls | Evidence | Priority rationale | Treatment | Owner | Status |
|---|---|---|---|---|---|---|---|---|
```

Use stable identifiers so requirements, commits, tests, detections, incidents, and exceptions can cite the same scenario.

### 19.3 Authorization specification

```md
# Authorization policy: [resource]

- Policy owner:
- Resource and tenant owner:
- Subjects and trusted identity sources:
- Actions:
- Resource relationships and states:
- Context attributes:
- Default effect:
- Field-level restrictions:
- Bulk/search/export behavior:
- Delegation and expiry:
- Support/admin/emergency access:
- Failure behavior:
- Audit events:
- Policy matrix:
- Enforcement points:
- Cache and revocation behavior:
- Verification:
- Migration and compatibility:
```

### 19.4 Authentication and recovery specification

```md
# Identity specification: [service]

- User groups and impacted parties:
- Need for account continuity or identity proofing:
- IAL/AAL/FAL or equivalent risk decision:
- Supported authenticators:
- Enrollment and binding:
- Session lifetime and reauthentication:
- Federation and account linking:
- Recovery evidence and process:
- Support override:
- Notifications and dispute path:
- Rate and abuse controls:
- Privacy, accessibility, and exclusion risks:
- Security events and alerts:
- Tests and exercises:
```

### 19.5 Personal-data inventory row

```md
| Data/derivation | Person | Source | Purpose | Authority | Processing/decision | Store/copies | Access | Recipients/transfers | Retention/deletion | Rights | Harm | Controls | Owner/evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
```

### 19.6 Dependency decision

```md
# Dependency decision: [component/service and version]

- Capability required:
- Alternatives considered:
- Owner/maintainer/vendor:
- Direct and transitive surface:
- Install/build/runtime permissions:
- Data and network access:
- Maintenance/support/end-of-life:
- Security, disclosure, and incident history:
- SBOM identity and license:
- Source/build provenance:
- Known vulnerabilities and deployment relevance:
- Update and emergency replacement path:
- Failure and exit behavior:
- Approval, evidence, and review date:
```

### 19.7 Security-event specification

```json
{
  "event_name": "authorization.decision",
  "schema_version": 1,
  "occurred_at": "2026-07-20T14:31:00Z",
  "actor": { "type": "user", "id": "opaque-safe-id" },
  "action": "member.export_all",
  "resource": { "type": "tenant", "id": "opaque-safe-id" },
  "result": "denied",
  "reason": "cross_tenant_scope",
  "policy_version": "authz-2026-07-18",
  "request_id": "opaque-correlation-id",
  "service": "member-api",
  "environment": "production"
}
```

Prohibit raw tokens, passwords, export contents, email addresses, and request bodies from this event. Adapt identifiers and fields to the actual threat and privacy model.

### 19.8 Incident status packet

```md
# Incident status: [ID and time]

- Commander and decision owners:
- Severity and rationale:
- Current user/business impact:
- Known affected assets, identities, data, tenants, and regions:
- Observed timeline:
- Confirmed facts:
- Working hypotheses and confidence:
- Unknowns that affect decisions:
- Containment completed/in progress:
- Evidence preserved and gaps:
- Legal/privacy assessment and next deadline:
- Recovery status and integrity evidence:
- Communication sent and next update:
- Decisions needed now:
- Next checkpoint:
```

### 19.9 Incident review

```md
# Incident review: [ID]

- Intended audience and sensitivity:
- User and organizational impact:
- Evidence-backed timeline:
- Initial access or initiating event:
- Root and contributing conditions:
- Why prevention did not stop it:
- Why detection took this long:
- Why containment/recovery took this long:
- Privacy and notification analysis:
- What worked:
- What made response harder:
- Corrective actions, owners, dates, and proof:
- Threat model, tests, alerts, and runbook updates:
- Residual uncertainty:
- Follow-up verification date:
```

---

## 20. Definition of done

A security- and privacy-relevant change is done only when every applicable statement is true.

### Scope and evidence

- [ ] The exact change, environment, artifact, owners, non-goals, and acceptance evidence are explicit.
- [ ] Architecture, trust boundaries, identities, roles, data flows, dependencies, and recovery paths match deployed reality.
- [ ] Facts, inferences, unknowns, requirements, recommendations, and accepted risks are distinguishable.
- [ ] Current versions of time-sensitive standards, protocols, vendor behavior, and legal requirements were checked.

### Threats, privacy, and abuse

- [ ] Material threat scenarios name actor, path, asset or person, and consequence.
- [ ] Privacy risks cover legitimate processing as well as unauthorized disclosure.
- [ ] Abuse cases cover intended-function misuse, automation, business logic, and harm to targeted people.
- [ ] Risk rationale includes blast radius, detectability, reversibility, and evidence rather than a score alone.
- [ ] Each material scenario has an explicit treatment and owner.

### Identity and access

- [ ] Identity proofing, authentication, federation, session, authorization, transaction confirmation, and recovery are separate decisions.
- [ ] Authentication strength matches risk and offers phishing-resistant options where required.
- [ ] Recovery does not create a weaker, unmonitored bypass.
- [ ] Authorization is enforced at trusted boundaries using server-trusted subject, resource, tenant, state, and context.
- [ ] Horizontal, vertical, cross-tenant, field, collection, batch, delayed, and privileged paths are verified.
- [ ] Permission loss, revocation, cache staleness, and control failure deny or degrade safely.

### Personal data

- [ ] Every data element and inference has a current, specific purpose, authority, owner, access rule, recipient, and retention schedule.
- [ ] Collection, precision, frequency, linkage, copies, access, output, and retention are minimized.
- [ ] Notices and choices match actual processing and can be honored operationally.
- [ ] Access, correction, export, restriction, deletion, legal hold, backup, and vendor handling are designed where applicable.
- [ ] Pseudonymized, de-identified, aggregate, synthetic, and free-form data are not overclaimed or underprotected.

### Secrets, dependencies, and implementation

- [ ] Secrets and keys have defined custody, scope, lifetime, rotation, revocation, audit, and recovery.
- [ ] No unnecessary secrets or personal data appear in source, history, fixtures, artifacts, clients, logs, analytics, errors, or support tools.
- [ ] New dependencies and suppliers have justified capability, inventory, permissions, provenance, maintenance, incident, update, and exit decisions.
- [ ] The release artifact has a current dependency inventory and verified provenance where required.
- [ ] Untrusted input, interpreters, uploads, redirects, background work, retries, and resource limits fail safely.

### Logging and response

- [ ] Security events have a purpose, schema, prohibited fields, access, retention, pipeline, alert, test, and owner.
- [ ] Logs support the prioritized investigations without becoming an uncontrolled personal-data store.
- [ ] Detection includes pipeline and control failure, not only attacker events.
- [ ] Incident roles, contacts, evidence, containment, legal assessment, communication, and recovery paths are ready.
- [ ] Backups and rebuild inputs are isolated, complete, restorable, and integrity-checked through an actual exercise.
- [ ] Recovery objectives and progressive restoration stop conditions are defined.

### Verification and ownership

- [ ] Controls trace to requirements and threats, with design, implementation, deployment, and operating evidence proportional to risk.
- [ ] Automated checks are supplemented by qualified manual, adversarial, privacy, legal, accessibility, or operational review where triggered.
- [ ] Findings and exceptions have owners, authority, compensating controls, expiry, and verification plans.
- [ ] Metrics answer decisions without rewarding suppressed findings or excessive surveillance.
- [ ] A responsible contributor can explain the complete system, its limits, residual risks, and recovery path.

---

## 21. Research basis and sources

### 21.1 How to use these sources

The sources below are primary standards, regulator guidance, protocol specifications, and maintainer documentation where possible. They support methods and control decisions; they do not make every recommendation universally applicable.

Before relying on a source:

1. Confirm its version and status: final, draft, withdrawn, superseded, or living guidance.
2. Confirm scope: federal system, web application, OAuth client, EU processing, supplier, or general risk practice.
3. Separate normative requirements from informative examples.
4. Map it to the actual system, jurisdiction, contract, and threat model.
5. Record the exact requirement or section used.
6. Re-verify before a high-risk release, assessment, incident, or public claim.

### 21.2 Governance, secure development, and verification

1. [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) — Outcome-oriented governance and the Govern, Identify, Protect, Detect, Respond, and Recover functions.
2. [NIST SP 800-218, Secure Software Development Framework 1.1](https://csrc.nist.gov/pubs/sp/800/218/final) — Secure-development practices across organizational preparation, software protection, production, and vulnerability response.
3. [OWASP Application Security Verification Standard 5.0.0](https://owasp.org/www-project-application-security-verification-standard/) — Versioned technical application-security verification requirements.
4. [CISA, Shifting the Balance of Cybersecurity Risk: Secure by Design](https://www.cisa.gov/sites/default/files/2023-10/Shifting-the-Balance-of-Cybersecurity-Risk-Principles-and-Approaches-for-Secure-by-Design-Software.pdf) — Product security as a manufacturer responsibility, with secure defaults and reduced customer burden.

### 21.3 Threats, attack surface, and abuse

5. [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) — System modeling, threat identification, response, and validation using the four-question structure.
6. [OWASP Attack Surface Analysis Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html) — Entry/exit paths, valuable data, protective code, and change triggers.
7. [MITRE CAPEC](https://capec.mitre.org/) — Catalog of attack patterns for systematic threat discovery.
8. [MITRE ATT&CK](https://attack.mitre.org/) — Observed adversary tactics and techniques useful for detection and exercise planning.
9. [OWASP Business Logic Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Business_Logic_Security_Cheat_Sheet.html) — Abuse of valid workflows, state, sequence, and product rules.
10. [OWASP Bot Management and Anti-Automation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Bot_Management_and_Anti-Automation_Cheat_Sheet.html) — Risk-based defense for credential abuse, scraping, hoarding, fake accounts, and other automation.
11. [OWASP Abuse Case Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Abuse_Case_Cheat_Sheet.html) — Historical material and caveats on translating identified attacks into trackable abuse cases.

### 21.4 Authentication, federation, sessions, and authorization

12. [NIST SP 800-63-4, Digital Identity Guidelines](https://pages.nist.gov/800-63-4/) — Current 2025 risk model and suite for identity proofing, authentication, and federation.
13. [NIST SP 800-63B-4, Authentication and Authenticator Management](https://pages.nist.gov/800-63-4/sp800-63b.html) — Authenticator assurance, password, phishing resistance, lifecycle, session, privacy, and user-experience requirements.
14. [RFC 9700, Best Current Practice for OAuth 2.0 Security](https://datatracker.ietf.org/doc/html/rfc9700) — Current OAuth attacker model, required mitigations, and deprecated patterns.
15. [NIST SP 800-207, Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) — Resource-focused, explicit authentication and authorization without implicit network-location trust.
16. [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) — Practical enrollment, authentication, response, and monitoring guidance.
17. [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) — Least privilege, deny by default, per-request and object authorization, logging, and testing.
18. [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) — Browser session identifier, cookie, lifecycle, fixation, and expiry guidance.
19. [OWASP Transaction Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Authorization_Cheat_Sheet.html) — Binding user authorization to consequential transaction data and process.

### 21.5 Privacy and personal data

20. [NIST Privacy Framework](https://www.nist.gov/privacy-framework) — Voluntary enterprise privacy-risk management; Version 1.0 is final and 1.1 was an Initial Public Draft at the research date.
21. [NIST Privacy Risk Assessment Methodology](https://www.nist.gov/itl/applied-cybersecurity/privacy-engineering/collaboration-space/privacy-risk-assessment/tools) — Worksheets for business objectives, data maps, problematic data actions, risk prioritization, and control selection.
22. [NISTIR 8062, Privacy Engineering and Risk Management](https://www.nist.gov/publications/introduction-privacy-engineering-and-risk-management-federal-information-systems) — Privacy engineering objectives and a risk model focused on problems for individuals.
23. [European Commission, Principles of personal data processing under the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en) — Official explanation of purpose limitation, minimization, storage, accuracy, security, and accountability for in-scope processing.
24. [European Commission, Data breach obligations](https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/obligations/what-data-breach-and-what-do-we-have-do-case-data-breach_en) — Official explanation of GDPR breach risk assessment and notification duties.
25. [FTC, Start with Security](https://www.ftc.gov/business-guidance/resources/start-security-guide-business) — Case-based U.S. regulator guidance on minimizing, protecting, and disposing of personal information.

### 21.6 Cryptography, secrets, and supply chain

26. [NIST SP 800-57 Part 1 Revision 5, Recommendation for Key Management](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final) — General cryptographic key lifecycle and protection guidance; the later Revision 6 publication was still a draft during the research window.
27. [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html) — Data minimization, reviewed algorithms, randomness, and key management.
28. [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) — Current password-hashing algorithm and parameter guidance.
29. [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) — Secret generation, storage, access, rotation, revocation, and recovery.
30. [CISA, 2025 Minimum Elements for a Software Bill of Materials](https://www.cisa.gov/sites/default/files/2025-08/2025_CISA_SBOM_Minimum_Elements.pdf) — Current U.S. federal baseline for SBOM data fields, practices, and processes.
31. [SLSA Specification 1.2](https://slsa.dev/spec/v1.2/) — Source and build tracks, levels, provenance, attestations, and verification.
32. [OpenSSF Scorecard](https://openssf.org/projects/scorecard/) — Automated open-source project security-practice heuristics.
33. [FIRST CVSS 4.0](https://www.first.org/cvss/v4.0/specification-document) — Standard vocabulary for vulnerability severity, threat, environmental, and supplemental characteristics.
34. [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) — Living list of vulnerabilities with evidence of active exploitation.
35. [OWASP Vulnerable Dependency Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html) — Inventory, monitoring, prioritization, patching, and exception guidance.

### 21.7 Logging, vulnerability disclosure, and incidents

36. [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) — Event selection, structure, sensitive-data exclusion, integrity, monitoring, and testing.
37. [NIST Log Management Project](https://csrc.nist.gov/projects/log-management) — Status and planning resources; explicitly notes SP 800-92 Revision 1 is still being finalized after its public draft.
38. [RFC 9116, `security.txt`](https://datatracker.ietf.org/doc/html/rfc9116) — Machine-readable vulnerability disclosure contact format.
39. [NIST SP 800-61 Revision 3, Incident Response Recommendations](https://csrc.nist.gov/pubs/sp/800/61/r3/final) — Current incident-response guidance aligned with CSF 2.0.
40. [FTC, Data Breach Response: A Guide for Business](https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business) — U.S. business guidance on securing operations, preserving evidence, investigating, communicating, and determining notifications.
41. [CISA StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide) — Response, recovery, isolated backups, restoration, and lessons-learned guidance.
42. [NIST SP 1800-11, Data Integrity: Recovering from Ransomware and Other Destructive Events](https://csrc.nist.gov/pubs/sp/1800/11/final) — Integrity-focused recovery architecture and practice.
43. [NIST IR 8374 Revision 1, Ransomware Risk Management Profile](https://csrc.nist.gov/pubs/ir/8374/r1/final) — 2026 CSF 2.0 community profile for ransomware risk prevention, response, and recovery.

### 21.8 Local companion references

- [Risk-Based Software Testing Strategy](../../testing/references/research.md) — Selecting unit, integration, contract, browser, accessibility, release, and recovery evidence by risk.
- [Research Methods](../../research/references/research.md) — Question framing, search strategy, source hierarchy, provenance, fact-checking, uncertainty, and synthesis.
- [Product Analytics](../../analytics/references/research.md) — Event governance, instrumentation, guardrails, and interpretation; use with the stricter sensitive-data and security-event rules in this guide.
- [Accessibility Implementation](../../accessibility/references/research.md) — Keyboard, screen-reader, zoom, forced-colors, reduced-motion, and verification requirements for identity, warning, consent, recovery, and appeal flows.

---

## Final principle

> A secure and privacy-respecting system is one whose owners can explain what it protects, how it can fail, which people can be harmed, why each control exists, what evidence supports it, what remains uncertain, and how trustworthy service and user agency will be restored after failure.

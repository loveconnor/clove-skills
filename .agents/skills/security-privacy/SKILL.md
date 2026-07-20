---
name: security-privacy
description: Design, implement, audit, and operate secure and privacy-respecting software systems. Use for threat modeling, attack surfaces, abuse and misuse cases, authentication, sessions, federation, authorization, tenant isolation, personal data and privacy engineering, secrets and cryptography, dependency and software-supply-chain risk, security logging and detection, vulnerability management and disclosure, incident response, breach communication, recovery, and security or privacy evidence.
---

# Security and Privacy

## Operating principle

Model the system and the people who can be harmed, select controls from explicit threats and privacy risks, and require evidence for prevention, detection, response, and recovery. Security and privacy overlap but are not interchangeable.

## Load the detailed research

Read `references/research.md` for security-sensitive implementation, personal-data processing, identity, authorization, critical dependencies, incidents, recovery, or public assurance claims.

Useful searches:

```sh
rg -n '^## (2|3|4|5|6|7)\.|source authority|risk system|truth packet|threat|abuse|requirement' references/research.md
rg -n '^## (8|9|10)\.|authentication|session|federation|authorization|tenant' references/research.md
rg -n '^## (11|12|13)\.|personal data|privacy|secret|cryptograph|dependency|supply-chain' references/research.md
rg -n '^## (14|15|16|17)\.|logging|monitor|verification|vulnerab|incident|recovery' references/research.md
rg -n '^## (18|19|20)\.|governance|template|definition of done' references/research.md
```

## Workflow

### 1. Build the truth packet

Define scope, environments, actors, identities, assets, data, purposes, entry and exit points, trust and tenant boundaries, dependencies, privileged paths, deployment, logs, backups, owners, prior incidents, and recovery objectives. Mark observed facts, documented claims, inferences, and unknowns.

### 2. Model threats, privacy risks, and abuse

Write causal scenarios naming precondition, actor, path, target, harmed party, and consequence. Include technical compromise, legitimate-function abuse, automation, fraud, insider and support access, dependency compromise, accidental failure, unexpected processing, inference, exclusion, and loss of user agency.

### 3. Select and specify controls

Choose avoid, reduce, transfer, or explicit acceptance. For each material scenario, define preventive, detective, responsive, and recovery controls. Turn them into testable requirements with actor, action, resource, condition, trusted inputs, safe failure, evidence, owner, and source.

### 4. Separate identity decisions

Specify identity proofing, authentication assurance, authenticator enrollment, account recovery, session lifecycle, federation, service identity, authorization, transaction confirmation, and emergency access independently. Enforce object- and tenant-level authorization at trusted server boundaries using server-derived context.

For invitations and one-time action links, define recipient and tenant binding, requested role, token generation and hashed storage, expiry, revocation, single use, atomic consumption, scanner and prefetch behavior, forwarding policy, referrer and log leakage, provider link rewriting, and safe failure. A link visit must not silently perform a consequential action.

For role grants, define which roles may grant which roles, prohibit self-promotion and client-controlled privilege, and require separate authorization or stronger proof for administrative grants. For support impersonation, preserve both the support principal and effective user in audit records, show the mode visibly, time-bound it, and prohibit privilege-changing, credential, export, payment, and destructive actions unless a distinct approved workflow authorizes them.

### 5. Engineer the data lifecycle

Inventory each personal-data element and inference, source, purpose, authority, processing, copies, access, recipient, retention, deletion, rights, harm, and control. Minimize collection, precision, population, frequency, linkage, copies, access, output, and retention. Obtain jurisdiction-specific review for legal requirements.

### 6. Protect secrets, dependencies, and releases

Use approved cryptography and managed secret lifecycles. Assess direct and transitive dependencies, hosted suppliers, build identities, artifacts, SBOMs, provenance, update behavior, vulnerabilities, and exit plans. Test and deploy the same immutable artifact where possible.

### 7. Design evidence and detection

Define security events by purpose, trigger, safe identifiers, prohibited fields, retention, integrity, alert, and test. Verify controls with code and configuration review, unit and integration tests, adversarial tests, release evidence, exercises, and independent review proportional to risk.

### 8. Prepare and recover

Define incident roles, out-of-band contacts, evidence, severity, containment authority, credential rotation, legal and privacy assessment, communication, clean rebuild, isolated backups, integrity verification, reconciliation, progressive restoration, and post-incident learning. Exercise the actual recovery path.

## Security and privacy rules

- Validate untrusted data at trusted boundaries and encode or parameterize for its destination.
- Check authorization independently from authentication and deny safely on missing policy context.
- Never build custom cryptography, password storage, identity protocols, or secret distribution without exceptional evidence and expert review.
- Keep secrets and unnecessary personal data out of source, fixtures, clients, URLs, logs, analytics, errors, crash reports, and support tools.
- Treat logs as a sensitive data system and log pipelines as security controls.
- Prioritize vulnerabilities using deployment, exposure, exploitation, consequence, and compensating controls—not severity score alone.
- Do not claim compliance, zero trust, anonymity, end-to-end encryption, or absence of vulnerabilities beyond the evidence and scope.
- Version time-sensitive standards and re-verify legal, protocol, browser, dependency, and vendor facts.

## Handoff

Report system scope, assets and affected people, threats and privacy risks, selected controls, evidence, findings, residual risks, exceptions, owners, incident readiness, recovery results, and unresolved uncertainty. Never claim an audit, penetration test, restore, or incident action occurred unless it did.

Combine with `clean-code` for implementation, `testing` for risk-based verification, `accessibility` for identity and recovery access, and `clear-writing` for warnings, notices, and incident communication.

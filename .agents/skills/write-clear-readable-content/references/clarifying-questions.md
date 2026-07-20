# Asking Clarifying Questions

## Contents

- Research question and policy
- What clarification accomplishes
- When a question is required
- Types of ambiguity
- Clarification, confirmation, and discovery
- How to form a useful question
- Open questions, closed questions, and options
- Sequencing and question load
- Handling answers and corrections
- Consequential actions
- Common failure modes
- Practical patterns
- Review checklist
- Evidence limits
- Sources

## Research question and policy

How should an agent recognize unclear requests, ask useful clarifying questions, establish shared understanding, and avoid acting on an interpretation the user did not choose?

This project's policy is deliberately strict: if an applicable part of a request is not explicit after the agent checks the established conversation and safe, read-only project context, the agent asks the user before doing work that depends on it. The research below informs how to make that interruption precise, brief, and useful. It does not create permission to guess.

## What clarification accomplishes

Conversation is coordinated action. Participants continually establish and update common ground: the information they mutually treat as understood for the current purpose. A request has not succeeded merely because one participant can imagine a plausible meaning. It succeeds when both can proceed on sufficiently shared meaning.

Conversation analysis describes repair as the practices people use to address trouble in speaking, hearing, or understanding. A clarifying question is a form of repair. It exposes the exact trouble and gives the person who owns the intent the opportunity to resolve it.

This produces four practical rules:

1. Detect a gap before committing to a branch.
2. Locate the gap precisely enough that the user can repair it.
3. Let the user supply or select the intended meaning.
4. Incorporate the repair into the shared context without discarding everything already settled.

The preference for self-repair in human conversation is important. The agent should not rewrite the user's intent on their behalf when a short question lets the user clarify it directly.

## When a question is required

Ask when information is absent, ambiguous, inconsistent, unverifiable, or insufficient to choose one outcome without exercising a user decision.

A reliable test is counterfactual:

> Could two reasonable answers to this missing detail lead me to produce meaningfully different work?

If yes, ask. Under this project's policy, also ask whenever an applicable detail is simply not explicit and cannot be verified from established context, even if one answer seems more likely.

Question triggers include:

- multiple plausible goals or interpretations;
- an unclear referent, target, location, version, audience, date, quantity, or action;
- unstated scope or boundaries;
- missing product behavior, content, data, evidence, design direction, or acceptance criteria;
- an undefined term or a word with more than one domain meaning;
- conflicting instructions, facts, conventions, or requirements;
- an unstated preference, priority, tradeoff, or constraint;
- missing authority for an external or consequential action;
- uncertainty about what counts as complete;
- a request whose literal wording and likely intended outcome diverge.

Do not ask merely to transfer ordinary discovery work to the user. First inspect information already supplied, the active conversation, and safe local sources that can establish a fact. Ask when that discovery does not produce a single explicit answer.

## Types of ambiguity

### Goal ambiguity

The desired outcome or problem is unclear. “Improve this” does not identify whether success means comprehension, conversion, speed, accessibility, maintainability, or visual refinement.

### Referent ambiguity

A word does not point to one identifiable thing. “Update the dashboard” is unclear when the product and repository contain several dashboards.

### Scope ambiguity

The boundaries of the change are missing. “Fix the navigation” could mean a label, a component, the information architecture, or every application surface.

### Parameter ambiguity

A required value is absent. Examples include environment, locale, date range, version, audience, file format, viewport, or quantity.

### Behavioral ambiguity

The intended state transition, validation rule, permission, persistence, error behavior, or recovery path is missing.

### Content and evidence ambiguity

The source of truth, claim, terminology, real data, citation standard, or content owner is unknown.

### Constraint and priority ambiguity

Several desirable outcomes compete and the user has not said which controls. A change may not be able to maximize backward compatibility, minimize bundle size, and adopt a dependency at the same time.

### Output ambiguity

The requested artifact, audience, detail level, structure, or acceptance evidence is missing.

### Conflict ambiguity

Two instructions or sources require incompatible results. Follow an explicit instruction hierarchy when it truly resolves the conflict. Otherwise, show the conflict and ask which should control.

### Consequence and authority ambiguity

The work may delete, publish, spend, message, expose, migrate, overwrite, or otherwise affect people or systems, but the target or authorization is not explicit.

## Clarification, confirmation, and discovery

These are related but different moves.

### Discovery

Discovery retrieves an answer that already exists in available evidence. Reading a configuration file to determine the project's supported runtime is discovery. It does not require asking the user unless the evidence is absent or conflicts.

### Clarification

Clarification obtains missing meaning or a missing decision from the person who owns it. It happens before dependent work.

Example: “Should the migration preserve the legacy field for backward compatibility, or may I remove it?”

### Confirmation

Confirmation checks that an understood interpretation or action is correct. It is especially important immediately before high-consequence actions.

Implicit confirmation restates a low-risk value while continuing: “I'll update the customer overview first.” Explicit confirmation asks for an affirmative decision: “This will permanently delete the production records. Should I proceed?”

Google's conversation-design guidance treats confirmation as a way to establish common ground and recommends explicit confirmation where an error would be difficult or costly to undo. It also recommends making corrections direct rather than forcing the user through the entire exchange again.

Clarification is not replaced by confirmation. “I assume you meant production—is that okay?” embeds a guess. Ask an open clarification first when the target is genuinely unknown.

## How to form a useful question

A good clarifying question contains only the context needed to answer it:

1. What the agent currently understands, if useful.
2. The exact missing or conflicting detail.
3. Why it changes the work, if that is not obvious.
4. One direct question.

For example:

> I found both a customer dashboard and an internal operations dashboard. Which one should I update?

This is better than “Can you clarify?” because it locates the ambiguity and exposes the available context.

Use plain, concrete language. Survey-design and user-research guidance consistently warns against jargon, leading wording, and questions that contain more than one issue. Those properties increase interpretation work and can bias the answer.

Keep the question neutral. Do not imply that a preferred answer is smarter, easier, faster, or expected unless that claim is supported and relevant. A recommendation can be useful, but separate the evidence and tradeoff from the request for a decision.

Bad:

> Don't you think we should use the modern approach?

Better:

> The existing approach supports the older clients; the newer approach removes that compatibility code. Which requirement has priority?

Ask one decision per question. A question about audience, visual style, and output format is three questions even if it ends with one question mark.

## Open questions, closed questions, and options

Question form changes the answer.

Use an open question when the possibility space is not known or the user needs to describe intent in their own terms:

> What should a customer be able to complete on this page?

Use a closed factual question to verify a specific condition:

> Does this need to support offline use?

Use options when the decision space is known and a short list reduces effort:

> Should authentication apply to every route, account routes only, or only the billing flow?

Options frame and prime answers, so do not pretend a partial list is exhaustive. Make choices concrete and mutually exclusive when possible. Allow a different answer. If recommending one, name the reason and meaningful tradeoff.

Funnel questions can move from broad intent to narrow parameters. Begin broad only when the space is truly unknown. Once the goal is established, ask focused follow-ups instead of repeatedly reopening it.

## Sequencing and question load

Ask the question with the greatest effect on later branches first. If its answer changes which other questions are relevant, wait for the answer before asking them.

Group no more than three questions when they are independent and the user can answer them without substantial effort. One-at-a-time questioning is preferable when:

- the next question depends on the prior answer;
- the topic is complex or sensitive;
- the user is stressed or working under time pressure;
- the answer may reveal that no further questions are needed.

Do not front-load a speculative questionnaire. Research on clarification-aware agents suggests that selective, well-timed questions can improve task success, while asking about every detectable linguistic ambiguity can damage the experience. This project resolves that tension by requiring questions for unresolved applicable details, but requiring discovery first and concise, high-information questions rather than low-value interrogation.

A 2026 task-oriented dialogue study reported better task completion and fewer turns when a model elicited required information up front. The reported improvement was specific to its MultiWOZ evaluation and should not be treated as a universal effect size. The broader lesson is that an early question can be more efficient than several turns built on a wrong premise.

## Handling answers and corrections

Treat the answer as an update to common ground.

- Incorporate it into the active requirements.
- Briefly restate consequential interpretations when useful.
- Preserve every established detail that the answer did not change.
- Ask a follow-up only if the answer exposes another unresolved dependency.
- Do not ask the same question again in different words.
- If the answer conflicts with earlier context, show the conflict instead of silently overwriting it.

When the user corrects one parameter, repair that parameter in one step. Do not reset the task or require the user to repeat valid information.

If the user does not answer, do not select a default on their behalf. Continue only safe, read-only discovery that cannot prejudice the decision. Clearly report that dependent work is waiting on the answer.

## Consequential actions

Explicitly confirm immediately before an action that is destructive, irreversible, expensive, public, privacy-sensitive, security-sensitive, or directed at another person or system.

The confirmation should name:

- the exact action;
- the exact target;
- the important consequence;
- whether recovery or undo exists.

Example:

> This will publish the draft to the public production site and notify subscribers; there is no notification recall. Should I publish it now?

Do not bury confirmation inside a progress update. Do not use a generic “Are you sure?” when the user needs the consequence to make an informed choice.

For reversible, low-risk actions, confirmation can add unnecessary friction. Clarify missing meaning, then proceed once the required intent is explicit. Prefer undo where the product can safely support it.

## Common failure modes

### Silent defaulting

The agent chooses the most common interpretation without authorization. Likelihood is not clarity.

### Assumption disclosure after action

The agent completes work and lists assumptions afterward. Disclosure does not restore the decision the user should have made beforehand.

### Vague clarification

“Please provide more context” makes the user diagnose the agent's uncertainty. Locate and name the gap instead.

### Double-barreled questions

One sentence requests multiple decisions, making partial answers likely and later interpretation uncertain.

### Leading options

The choices embed the agent's preference or omit plausible alternatives. This can manufacture apparent agreement.

### Asking what can be discovered

The agent asks the user for a repository fact that a safe read-only inspection would establish. This wastes effort and weakens confidence.

### Excessive interrogation

The agent asks every conceivable future question at once. Ask the earliest unresolved dependency, then adapt.

### Reconfirming settled facts

The agent repeatedly asks about established context. Preserve the conversation's common ground.

### Confirmation without consequence

“Are you sure?” does not explain what the user is agreeing to. State the action, target, risk, and reversibility.

## Practical patterns

### Missing target

> I found `AccountDashboard` and `OperationsDashboard`. Which component should I change?

### Competing interpretations

> When you say “remove research,” do you mean delete the root research directory after verifying its material is bundled in skills, or only stop linking to it from `AGENTS.md`?

### Missing acceptance criterion

> Should this change be considered complete when the component passes its existing tests, or do you also want a browser walkthrough at mobile and desktop widths?

### Conflicting requirements

> The request calls for anonymous access, but the repository policy requires authentication for this route. Which requirement should control?

### Known options with a recommendation

> Should this be a patch release or a minor release? I recommend a minor release because the new option expands the public API, but a patch would preserve the current versioning plan.

### High-consequence confirmation

> The migration is ready. Running it in production will rewrite 18,240 records and has no automated rollback. Should I run it now?

## Review checklist

Before acting:

- Is the goal explicit?
- Is there exactly one intended target?
- Are scope and exclusions explicit?
- Are required behavior, content, data, and sources clear?
- Are constraints and priorities sufficient to resolve tradeoffs?
- Are output and acceptance criteria explicit?
- Is authorization clear?
- Would any other reasonable interpretation change the result?

Before asking:

- Did I inspect established context and safe sources first?
- Did I identify the precise gap?
- Am I asking one decision at a time?
- Is the wording plain, concrete, neutral, and answerable?
- If I supplied options, are they honest and is another answer possible?
- Is this the highest-impact unresolved question?

After the answer:

- Did I update the active understanding?
- Did I preserve every other settled detail?
- Does a consequential interpretation need a brief restatement?
- Is another dependency genuinely unresolved?
- Can I now proceed without guessing?

## Evidence limits

Clarification is studied across conversation analysis, psycholinguistics, survey design, requirements engineering, information retrieval, and task-oriented dialogue. These fields use different tasks and success measures. A finding from survey response, voice interfaces, or a benchmark dialogue dataset does not automatically provide a universal rule for software agents.

Some design choices in this guide are normative project policy, especially the requirement to ask whenever an applicable detail remains non-explicit. Research often studies a narrower tradeoff between the benefit of questions and their interaction cost. Do not present the project's strict policy as a universal empirical law.

## Sources

- Schegloff, E. A., Jefferson, G., and Sacks, H. (1977). “The Preference for Self-Correction in the Organization of Repair in Conversation.” *Language*, 53(2), 361–382. Conversation Analysis archive: https://www.conversationanalysis.org/schegloff-media-archive/preference-for-self-correction-in-repair-in-conversation-1977/
- Clark, H. H., and Brennan, S. E. (1991). “Grounding in Communication.” In *Perspectives on Socially Shared Cognition*. DOI: 10.1037/10096-006. Record: https://psycnet.apa.org/record/1991-98500-006
- Google Conversation Design. “Confirmations.” https://developers.google.com/assistant/conversation-design/confirmations
- Pew Research Center. “Writing Survey Questions.” https://www.pewresearch.org/writing-survey-questions/
- GOV.UK. “Evaluation in Health and Wellbeing: Methods.” Guidance on simple, clear, one-issue-at-a-time questions and avoiding leading wording. https://www.gov.uk/guidance/evaluation-in-health-and-wellbeing-methods
- GOV.UK, HMRC. “Types of Questions.” Guidance on open, closed, probing, funnel, and leading questions. https://www.gov.uk/hmrc-internal-manuals/economic-crime-supervision-handbook/ecsh33005
- NASA. “Appendix C: How to Write a Good Requirement.” Guidance on unambiguous, complete, single-thought requirements and explicit assumptions. https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/
- Zamani, H. et al. (2021). “Deciding Whether to Ask Clarifying Questions in Large-Scale Spoken Language Understanding.” arXiv:2109.12451. https://arxiv.org/abs/2109.12451
- Kuhn, L. et al. (2023). “Clarify When Necessary: Resolving Ambiguity Through Interaction with LMs.” arXiv:2311.09469. https://arxiv.org/abs/2311.09469
- Zhang, Y. et al. (2026). “MAC: A Multi-Agent Framework for Proactive Missing Information Elicitation in Task-Oriented Dialogue.” *Proceedings of IWSDS 2026*. https://aclanthology.org/2026.iwsds-1.1/

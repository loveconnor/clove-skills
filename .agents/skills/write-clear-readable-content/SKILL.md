---
name: write-clear-readable-content
description: Create and revise natural, plain, accurate, inclusive, accessible content that people can find, understand, and use. Use for assistant responses, clarifying questions, conversational flow and voice, UX copy, labels, instructions, errors, onboarding, policies, legal or health information, technical documentation, marketing, help content, forms, localization-ready strings, content audits, or AI-assisted writing that needs human verification and a clear reader outcome.
---

# Write Clear Readable Content

## Operating principle

Enable the intended audience to find what they need, understand it accurately, and use it correctly. Optimize for relevance, findability, understanding, and usability—not a mechanical readability score.

## Load the detailed research

Read `references/research.md` for substantial content work, high-stakes communication, accessibility or localization decisions, testing plans, metrics, or questions about plain-language evidence. Read `references/natural-human-language.md` when writing or reviewing assistant replies, conversational interfaces, brand voice, dialogue, or prose that feels stiff, synthetic, uniform, over-formatted, or socially mismatched. Read `references/clarifying-questions.md` whenever a request is not fully explicit, several interpretations are possible, terms or requirements conflict, a user decision is missing, or a consequential action needs confirmation.

Useful searches:

```sh
rg -n '^## (3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)\.' references/research.md
rg -n '^## 23\.|^## 25\.|^## 26\.' references/research.md
rg -n 'error|inclusive|locali|Easy Read|readability|AI|legal|health|number' references/research.md
rg -n '^## |recipient|turn|grammar|rhythm|flow|synthetic|ear edit' references/natural-human-language.md
rg -n '^## |ambigu|clarif|question|confirm|repair|ground|leading|sequence|consequence' references/clarifying-questions.md
```

## Workflow

### 1. Frame

Define the audience, task, context, risk, channel, access needs, authoritative sources, one-sentence content intent, and successful use. Learn the audience's vocabulary, knowledge, stress, and constraints.

### 2. Model the information

List facts, actions, conditions, exceptions, evidence, dates, units, consequences, and owners. Separate audience needs from organizational wants. Decide what belongs now, later, or elsewhere.

### 3. Outline for finding

Write the title and main message first. Use descriptive headings and reader-centered sequence. Choose prose for explanation, lists for real lists, tables for comparisons, and visuals only when they improve understanding.

### 4. Draft directly

Lead with the answer, status, decision, or required action. Address the reader as “you” when appropriate. Name the actor, use strong verbs, keep conditions near the controlled action, explain necessary jargon, and state dates, costs, requirements, uncertainty, and consequences explicitly.

### 5. Edit in passes

Review separately for:

1. Meaning and factual accuracy.
2. Relevance to the audience and task.
3. Findable structure and headings.
4. Visible, feasible next action.
5. Familiar, precise language.
6. Cohesion and explicit relationships.
7. Proportionate tone and inclusion.
8. Accessibility and localization.
9. Typography and presentation.

### 6. Review with the right expertise

Use subject-matter, policy, legal, clinical, security, accessibility, localization, or community review in proportion to risk. Ask reviewers to identify a requirement or concrete reader risk, not rewrite by personal taste.

### 7. Test and publish with ownership

Ask representative users to find information, explain it in their own words, decide, or act. Revise recurring patterns and re-test material changes. Assign an owner, record source/review/update dates, provide feedback and support paths, and monitor real outcomes.

## Writing rules

### Select and organize

- Put the main message before background.
- Keep one main topic per section and paragraph.
- Make headings describe the real topic or purpose.
- Keep scope, evidence, exceptions, and uncertainty close to the claim.
- Use meaningful link text; do not write “click here.”
- Do not force a scanning-pattern template onto content that needs deep reading.

### Choose words

- Use the simplest word that preserves exact meaning.
- Prefer specific words over vague ones and one term per concept.
- Explain necessary jargon and expand unfamiliar abbreviations on first use.
- Prefer literal language where misunderstanding carries risk.
- Remove filler, throat-clearing, minimizing words, synthetic warmth, and unsupported certainty.
- Mark requirements consistently; distinguish must, should, and may when those differences matter.

### Build sentences

- Keep actor, action, and object visible.
- Prefer active voice unless passive voice better serves the reader.
- Turn nominalizations into verbs.
- Keep subjects and verbs close.
- Put conditions near the actions they govern.
- Avoid stacked clauses, ambiguous pronouns, and unnecessary negatives.
- Use parallel structure.
- Vary sentence length; brevity alone does not produce clarity.

### Sound natural in conversation

- Respond to the current turn and preserve shared facts, terms, and corrections.
- Match the reader's expertise, directness, formality, and desired detail without imitating errors or performing a dialect.
- Use common contractions, personal pronouns, active voice, and occasional fragments when they fit the context.
- Vary sentence and paragraph shape according to meaning rather than a fixed cadence.
- Use ordinary discourse markers to make cause, contrast, sequence, and topic shifts clear.
- Prefer coherent prose; use headings and lists only when they help the reader navigate real structure.
- Remove canned praise, fake empathy, repetitive summaries, grand conclusions, and formulaic rhetorical patterns.
- State uncertainty and judgment honestly. Never invent lived experience or emotion to create rapport.
- Perform the ear edit in `references/natural-human-language.md` before sending important user-facing prose.

### Ask clarifying questions

- Treat clarity as shared understanding, not a private guess about what the user probably meant.
- Inspect established conversation and safe, read-only project context first. If an applicable detail is still not explicit, ask before doing dependent work.
- Ask whenever reasonable interpretations lead to different goals, scope, targets, behavior, content, evidence, constraints, risks, or definitions of done.
- Name the precise gap and ask one neutral, concrete question at a time. Ask up to three together only when they are independent.
- Use open questions for unknown possibility spaces and a short set of options for known decision spaces. Explain material tradeoffs and offer a recommendation without silently applying it.
- Avoid vague requests for “more details,” leading questions, double-barreled questions, jargon, and questions the user has already answered.
- Distinguish clarification from confirmation. Clarify missing intent before acting; explicitly confirm understood destructive, irreversible, financial, public, privacy-sensitive, security-sensitive, or third-party actions immediately before acting.
- Preserve settled context when an answer or correction arrives. Update only the affected understanding and continue.
- Do not guess when the user does not answer. Continue only read-only work that is independent of the unresolved decision.

### Write UI content

- Make labels name the control, action, or destination.
- Put instructions at the point of action.
- Write error messages that state what happened, the valid requirement, how to recover, and whether work was saved.
- Use calm, direct language in sensitive moments; avoid “Oops,” jokes, and celebration when the user is blocked or at risk.
- Make dates, time zones, money, quantities, probabilities, and comparisons concrete and consistent.
- Never invent testimonials, metrics, claims, proof, capabilities, or confidence.

## Accessibility and localization

- Use semantic headings, lists, tables, labels, and language metadata.
- Do not rely on color, position, shape, sound, or other sensory descriptions alone.
- Make sequence and timing explicit; reduce recall demands.
- Avoid concatenated strings and assumptions about word order, gender, plural, date, number, currency, address, or name formats.
- Expect expansion, wrapping, and different scripts.
- Distinguish mainstream plain language from Easy Read, which is a separate accessible format with highly focused text and supportive imagery.
- Use inclusive language contextually and consult affected communities when stakes or identity warrant it.

## Evidence and AI use

- Treat readability scores as weak signals about surface features, not comprehension proof.
- Separate preference from successful understanding and action.
- Use AI for options, pattern detection, and editing assistance only after defining the audience and intent.
- Verify every generated claim and restore missing nuance, uncertainty, source context, and human voice.
- Keep a responsible human owner for meaning, accuracy, tone, inclusion, and publication.

Apply the final test: can the intended person find the point, explain it accurately, and do the right next thing under realistic conditions?

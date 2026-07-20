# Bundled Research Reference

This file contains the complete research source for this skill. Use this contents list and targeted searches to load only the sections required by the task.

## Contents

- Plain language, information design, UX writing, cognitive accessibility, inclusive communication, localization, testing, and responsible AI assistance
- Executive summary
- 1. What clear language is—and is not
- 2. A model of reader effort
- 3. Start with the audience, task, and context
- 4. Select the right information
- 5. Organize for finding and understanding
- 6. Choose precise, familiar words
- 7. Build sentences readers can follow
- 8. Create coherent paragraphs and explanations
- 9. Readability on screens
- 10. Cognitive accessibility
- 11. Plain language and Easy Read
- 12. Inclusive and respectful language
- 13. Writing for multilingual and global audiences
- 14. Tone, voice, and trust
- 15. UX writing and interface language
- 16. Error messages and recovery language
- 17. Instructions, procedures, and technical documentation
- 18. Numbers, risk, and high-stakes communication
- 19. Legal and policy content
- 20. AI-assisted writing without AI slop
- 21. Readability formulas: useful signal, poor verdict
- 22. Test whether people can use the writing
- 23. A practical writing and editing workflow
- 24. Before-and-after examples
- 25. Common anti-patterns
- 26. Checklists
- 27. Organizational practice and governance
- 28. A compact evaluation rubric
- 29. Final principles
- Research notes and sources

---

# Clear, Readable Language: A Detailed Research and Practice Guide

## Plain language, information design, UX writing, cognitive accessibility, inclusive communication, localization, testing, and responsible AI assistance

**Research date:** July 2026  
**Scope:** Websites, apps, services, product interfaces, instructions, technical documentation, policies, forms, email, support content, and high-stakes communication  
**Purpose:** Explain what clear writing means, what it looks like, why it works, how to create it, how to test it, and where simplistic readability advice fails

---

## Executive summary

Clear writing lets the intended audience **find what they need, understand what they find, and use it correctly**. It is not merely writing with short words. Wording, structure, visual presentation, context, timing, and the reader's prior knowledge all contribute to clarity.

[ISO 24495-1:2023](https://www.iso.org/standard/78907.html), the international plain-language standard, provides a useful four-part model:

1. **Relevant:** people get the information they actually need.
2. **Findable:** they can locate it without unnecessary effort.
3. **Understandable:** they can form the intended meaning accurately.
4. **Usable:** they can apply the information to decide or act.

This outcome-based model is stronger than mechanical rules. A document can have short sentences and still fail because it answers the wrong question, hides the deadline, uses unexplained concepts, fragments related information, or never tells the reader what to do.

The central conclusions of this research are:

1. **Clarity is audience-relative.** The clearest term for a specialist may be unfamiliar to the public. Research the audience's goals, vocabulary, knowledge, stress, access needs, and context before choosing a reading level or tone.
2. **Lead with the outcome.** State the main message, decision, status, or required action before background detail. People should not have to reconstruct the point.
3. **Structure carries meaning.** Descriptive headings, a logical sequence, short topical sections, lists, tables, labels, and meaningful links make information findable and reduce memory demands.
4. **Prefer precise familiar language.** Use the simplest wording that preserves the necessary meaning. Replace jargon when it adds no value; explain it when it is necessary.
5. **Make actors and actions visible.** Concrete subjects and strong verbs usually outperform abstractions, nominalizations, and long chains of passive voice.
6. **Short is not automatically clear.** Vary sentence length, keep related ideas together, and preserve cohesion. A string of tiny sentences can feel abrupt and make relationships harder to understand.
7. **Write for real conditions.** Readers may be rushed, worried, interrupted, using a small screen, reading in a second language, or using assistive technology. Good content tolerates these conditions.
8. **Accessibility is broader than easy wording.** Semantic headings, visible labels, understandable errors, language metadata, alternatives to sensory instructions, and compatible formats are also part of readable communication.
9. **Inclusive language requires context and participation.** Describe people accurately, respectfully, and only as specifically as the subject requires. Community preferences can differ and change; a static forbidden-word list is not enough.
10. **Plain language and Easy Read are different.** Plain language improves mainstream communication. Easy Read is a distinct accessible format that pairs highly focused text with supportive images, particularly for people with learning disabilities.
11. **Readability scores are weak proxies.** They mostly count word and sentence characteristics. They do not prove comprehension, accuracy, organization, usefulness, accessibility, or trust.
12. **Test behavior, not approval.** “Does this make sense?” produces weak evidence. Ask representative users to locate information, explain it in their own words, make a decision, or complete a task.
13. **AI can assist but cannot own clarity.** Generative tools can suggest variants and flag complexity, but they also produce generic framing, fabricated certainty, repetitive cadence, and plausible errors. A responsible human must define the audience, verify claims, preserve intent, edit the voice, and test the result.
14. **Clarity is an organizational capability.** A style guide helps, but clear content also needs ownership, evidence, review criteria, content design in product development, and continuing measurement after publication.

A compact quality test is:

> **Can the intended person find the point, explain it accurately, and do the right next thing under realistic conditions?**

---

## 1. What clear language is—and is not

### Clear language is a successful communication outcome

The [Plain Writing Act of 2010](https://www.law.cornell.edu/uscode/text/5/301) defines plain writing as clear, concise, well-organized, and appropriate to the subject, field, and intended audience. This last condition matters: plain language is not one universal vocabulary. It is communication fitted to a particular audience and purpose.

A communication succeeds when the reader can:

- recognize whether it applies to them;
- identify the main point and important conditions;
- understand the terms and relationships;
- distinguish required, recommended, and optional actions;
- find supporting detail when needed;
- predict what will happen next;
- act without avoidable errors or outside help.

### It is not “dumbing down”

Plain language removes **unnecessary difficulty**, not necessary detail. It does not require the writer to:

- omit qualifications that affect the decision;
- replace a precise technical term with a misleading everyday word;
- hide uncertainty;
- remove evidence or nuance;
- write in a childish or patronizing voice;
- force every sentence below an arbitrary word count.

The [CDC](https://www.cdc.gov/health-literacy/php/develop-materials/develop-test-materials.html) and [NIH](https://www.nih.gov/institutes-nih/nih-office-director/office-communications-public-liaison/clear-communication/plain-language-nih) both explicitly distinguish plain language from oversimplification or unprofessional writing.

### It is not merely brevity

Conciseness means removing material that does not help the audience. It does not mean minimizing character count.

> Too compressed: **Claims denied after 30 days.**  
> Clearer: **Submit your claim within 30 days after the incident. We may deny claims submitted later.**

The first version is shorter, but it hides the actor, starting event, required action, and consequence.

### It is not the same as a casual tone

Plain language concerns comprehension and use. Tone concerns the relationship a voice creates. A tax notice, cancer-screening result, game tutorial, and luxury product page can all use plain language while sounding different. GOV.UK's [research background for content principles](https://www.gov.uk/government/publications/govuk-content-principles-conventions-and-research-background/govuk-content-principles-conventions-and-research-background) makes this distinction: a consistent plain-English foundation can support different contextual tones.

### It is not a synonym for accessibility

Clear words help many disabled people, but accessible communication also depends on:

- semantic structure and correct reading order;
- text resizing and reflow;
- sufficient visual contrast and usable typography;
- captions, transcripts, and text alternatives;
- labels that assistive technology can identify;
- language identification and pronunciation support;
- accessible HTML rather than inaccessible document formats;
- alternative formats when one format cannot meet the audience's needs.

Plain language is one layer of accessibility, not a substitute for the others.

---

## 2. A model of reader effort

Readers spend effort in several different ways. Improving only sentence style leaves other burdens intact.

| Burden | Question in the reader's mind | Common causes | Design response |
|---|---|---|---|
| Relevance | “Is this for me?” | generic introductions, missing eligibility, irrelevant history | name the audience, situation, outcome, and scope early |
| Navigation | “Where is the answer?” | weak headings, long blocks, misleading links, duplicated content | create descriptive structure and predictable pathways |
| Vocabulary | “What does that mean?” | jargon, uncommon senses, acronyms, idioms | use familiar terms or define necessary ones immediately |
| Syntax | “How do these parts relate?” | embedded clauses, distant subjects and verbs, multiple negatives | use direct sentence structures and explicit relationships |
| Conceptual | “How does this work?” | unexplained models, missing examples, assumed knowledge | layer explanation and connect new ideas to known ones |
| Memory | “What did the earlier step say?” | long instructions, cross-references, separated conditions | keep dependencies close and externalize memory with structure |
| Decision | “Which option applies?” | vague criteria, incomparable choices, hidden tradeoffs | state criteria, consequences, defaults, and recommendations |
| Action | “What do I do now?” | background-first writing, passive requirements, absent next step | name the action, actor, timing, location, and result |
| Emotional | “Am I safe or being blamed?” | accusatory errors, alarmist warnings, false cheerfulness | use calm, respectful, proportionate language |
| Trust | “Can I rely on this?” | unsupported claims, false certainty, hidden ownership, stale dates | show evidence, limits, sources, owners, and update context |

This model explains why readers can “understand every word” and still fail. The failure may be navigation, inference, memory, decision-making, or trust—not vocabulary.

### Processing fluency: useful but easy to misuse

People often experience information that is easier to process as more familiar or credible. That makes fluent writing valuable, but it creates an ethical responsibility. Smooth prose can make a false claim feel persuasive. Clarity should expose the evidence and uncertainty, not make manipulation more efficient.

### Stress changes reading behavior

Under time pressure or anxiety, working memory and attention are constrained. People are more likely to scan, miss qualifiers, repeat actions, or abandon a task. In stressful flows:

- put the status and next action first;
- reduce choices;
- state deadlines and consequences explicitly;
- preserve entered information;
- avoid jokes and decorative language;
- show how to recover or get human help;
- repeat critical details at the point of action.

The best wording cannot repair a fundamentally confusing process. If a message requires several paragraphs to explain an arbitrary interaction, redesign the interaction.

---

## 3. Start with the audience, task, and context

[Digital.gov](https://digital.gov/guides/plain-language/principles) calls writing for the audience the first plain-language rule. A useful content brief answers the following before drafting.

### Audience

- Who must use this information?
- Who may be excluded by the current form?
- What words do these people already use?
- What relevant knowledge can be safely assumed?
- Are they reading in their strongest language?
- What literacy, cognitive, sensory, motor, or digital access needs may affect use?
- Are there distinct audience groups that need separate paths?

Do not reduce the audience to age, education, or a fictional persona. Useful segmentation reflects differences that change the content: goal, authority, experience, risk, language, channel, or service situation.

### Task

- What question brought the person here?
- What decision or action should the content support?
- What must they know to avoid harm or error?
- What can wait until later?
- What evidence of success will they receive?

A page about “account administration” may actually serve several tasks: change a password, add a colleague, close an account, or resolve suspicious access. Organize around those tasks, not the internal department that owns them.

### Context

- Where and on what device will people read?
- What happened immediately before this message?
- Are they calm, rushed, embarrassed, frightened, or interrupted?
- Does the interface already communicate some of the meaning visually?
- Will the text be read aloud by assistive technology?
- Will it be translated or reused in another channel?
- What happens if the person misunderstands?

### Evidence sources

Good language draws on more than stakeholder preference. Useful evidence includes:

- search queries and internal search logs;
- contact-center questions and complaint themes;
- form errors, abandonment points, and repeat attempts;
- interview language and field observation;
- support transcripts and sales objections;
- accessibility research;
- terminology used in the audience's real environment;
- legal, policy, clinical, or technical source material;
- usability and comprehension tests.

The [GOV.UK Service Manual](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) recommends treating opinions not grounded in user evidence as assumptions to test.

### A one-sentence content intent

Before drafting, write:

> **After reading this, [audience] should be able to [action or decision] because they understand [critical information].**

If the sentence contains several unrelated actions, the content may need multiple sections, pages, or moments in the flow.

---

## 4. Select the right information

Clarity begins before wording. A well-written answer to the wrong question is still poor content.

### Separate needs from organizational wants

Organizations commonly frontload:

- mission statements;
- product claims;
- policy history;
- internal process names;
- legal background;
- every exception;
- links to adjacent services.

Readers usually need:

- what happened or what the offer is;
- whether it applies to them;
- what they need to do;
- what they need before starting;
- cost, time, deadline, and consequence;
- how to correct a problem;
- how their data or money will be handled;
- where to get help.

### Use progressive disclosure

Layer information by need:

1. **Orientation:** the point, status, or outcome.
2. **Action:** what to do now.
3. **Decision detail:** conditions, tradeoffs, examples, and exceptions.
4. **Evidence or reference:** methodology, policy text, technical details, and sources.

Progressive disclosure should not hide material risks, costs, or limitations. If a fact could change a reasonable person's decision, present it before commitment—not behind a tooltip or after purchase.

### Distinguish essential, useful, and reference material

For every detail, ask:

- Does the person need this to start?
- Does it change eligibility, cost, risk, or outcome?
- Does it prevent a predictable mistake?
- Is it evidence that supports trust?
- Would a link or later stage serve it better?

Removing content is not automatically user-centered. Sometimes the clearest choice is to add an example, definition, rationale, or recovery instruction.

---

## 5. Organize for finding and understanding

### Put the main message first

The [CDC Clear Communication Index](https://www.cdc.gov/ccindex/) treats a clear, prominent main message as a core communication quality. State it in the title, first useful sentence, or immediate status region.

> Background-first: **As part of our continuing migration to a more secure account infrastructure, several authentication changes will take effect...**  
> Outcome-first: **Set up a passkey by 30 September to keep access to your account.**

The background can follow if readers need it.

### Use a reader-centered sequence

Common useful sequences include:

- answer → reason → detail → next step;
- status → effect → action → recovery;
- goal → prerequisites → steps → expected result;
- recommendation → evidence → limitations → alternatives;
- risk → who is affected → protective action → uncertainty → source;
- problem → options → tradeoffs → decision criteria.

Choose the sequence that matches the task, not an academic essay template.

### Write descriptive headings

Headings should summarize the section's subject or answer a likely question.

| Weak | Stronger |
|---|---|
| Overview | What the plan covers |
| Important information | Apply by 30 September |
| Details | Documents you need |
| Other | If you cannot verify your identity |
| FAQ | Refund timing and eligibility |

[W3C's page-structure guidance](https://www.w3.org/WAI/tutorials/page-structure/) explains that meaningful structure helps people navigate and process content; [semantic headings](https://www.w3.org/WAI/tutorials/page-structure/headings/) also give assistive-technology users a navigable outline. Do not select heading levels for visual size. Use them to represent hierarchy.

### Keep one main topic per section and paragraph

A paragraph should develop one controlling idea. Start a new paragraph when the purpose, subject, time, or action changes. Short paragraphs support scanning, but do not split a tightly connected explanation merely to make the page look airy.

### Use lists for actual lists

Use bullets when order does not matter and numbers when sequence or count matters. Keep list items parallel:

> Before you start:
>
> - confirm your email address;
> - download your transaction history;
> - remove other account users.

Avoid a bullet list when the relationship among ideas needs connected prose. Avoid nesting more levels than readers can easily track.

### Use tables for comparison, not layout

Tables work well when readers compare the same attributes across options. Give columns meaningful headers and ensure the reading order remains understandable on small screens and to screen readers. A long table may need a mobile alternative.

### Write meaningful links

The link should make sense out of context and set an accurate expectation.

- Weak: **Click here**
- Better: **Download the application checklist (PDF, 220 KB)**
- Better: **Learn how we calculate your refund**

Avoid making multiple different destinations share the same vague link text.

### Do not confuse scanning patterns with design templates

Eye-tracking research summarized by [Nielsen Norman Group](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) shows that people may scan web pages in an F-shaped pattern, particularly when content is poorly structured or they seek a quick answer. It is one observed pattern, not a mandate to put all meaningful content on the left. Strong headings, frontloaded sentences, short sections, and visible cues help people scan more completely.

---

## 6. Choose precise, familiar words

### Use the simplest word that preserves meaning

| Often needlessly formal | Usually clearer |
|---|---|
| utilize | use |
| approximately | about |
| commence | start |
| terminate | end, stop, or cancel |
| in the event that | if |
| at this point in time | now |
| with regard to | about |
| has the capability to | can |
| prior to | before |
| subsequent to | after |

These are not automatic substitutions. “Terminate” may be the defined contractual term; “approximately” may express a specific kind of estimate. Meaning comes first.

### Prefer specific words over vague ones

> Vague: **Process the item soon.**  
> Specific: **Review the invoice within 2 business days.**

Watch for words such as *soon, regularly, appropriate, adequate, normally, may, issue,* and *item*. They can be legitimate, but often conceal a threshold, actor, or action the reader needs.

### Use one term per concept

Do not call the same object an *application*, *request*, *submission*, and *case* unless they are different things. Variation may make prose sound less repetitive, but it makes interfaces, instructions, translation, and memory less reliable. [Microsoft's style guidance](https://learn.microsoft.com/en-us/style-guide/word-choice/use-simple-words-concise-sentences) recommends consistent terms for concepts.

### Handle jargon deliberately

Jargon has three forms:

1. **Unnecessary organizational jargon:** replace it.  
   *“Operationalize the engagement pathway”* → *“Start the support process.”*
2. **Necessary technical terminology for specialists:** use it precisely.  
   Replacing *myocardial infarction* with a vague phrase can reduce accuracy in clinical material.
3. **Necessary term for a mixed or public audience:** define it at first use, then use it consistently.  
   *“A chargeback is a card payment your bank reverses after a dispute.”*

The [Department for Education's plain-language guidance](https://design.education.gov.uk/content-design/plain-language) notes that language should follow user need: jargon familiar to a specialist audience can be appropriate, while mixed audiences may need a definition.

### Expand unfamiliar abbreviations

Write the full term at first meaningful use, followed by the abbreviation if it will recur:

> **content delivery network (CDN)**

Do not introduce an abbreviation used only once or twice. Common abbreviations are audience-dependent. WCAG 2.2 includes advisory success criteria for identifying [abbreviations](https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html) and [unusual words](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html).

### Prefer literal language where misunderstanding matters

Idioms and metaphors can be expressive, but they can confuse people with cognitive disabilities, people reading in another language, and translation systems.

- “Hit the ground running” → “Start quickly”
- “Your request fell through the cracks” → “We did not process your request”
- “This feature is a silver bullet” → “This feature does not solve every case”

Use figurative language intentionally in brand or editorial writing, not accidentally in safety instructions, errors, policies, or transactional content.

### Remove filler and false throat-clearing

Common openings that delay the point include:

- “It is important to note that…”
- “In today's rapidly evolving landscape…”
- “When it comes to…”
- “As you may already know…”
- “We are pleased to announce that…”

Delete the frame and state the information. Keep an introduction only if it genuinely orients the reader.

### Avoid minimizing words

Words such as *just, simply, easily,* and *obviously* often describe the writer's experience, not the reader's. They can blame people when a task fails.

> Weak: **Simply enter your recovery key.**  
> Better: **Enter the 24-character recovery key you saved when you created the account.**

### Mark requirements consistently

Where precision matters, define modal verbs:

- **must** — required;
- **must not** — prohibited;
- **should** — recommended, with legitimate exceptions;
- **may** — permitted or possible, depending on context;
- **can** — capability.

Do not hide requirements in *should* or overstate recommendations as *must*.

---

## 7. Build sentences readers can follow

### Make the actor, action, and object visible

A direct sentence often follows:

> **Actor + action + object + necessary condition**

> Indirect: **Notification of approval will be provided following completion of verification.**  
> Direct: **We will email you after we verify your identity.**

The direct version names responsibility, channel, sequence, and event.

### Prefer active voice—but keep useful passive voice

[Digital.gov](https://digital.gov/guides/plain-language/writing) recommends active voice because it often clarifies who is responsible. Active voice should be the default, not a ban on passive voice.

Passive voice can be useful when:

- the actor is unknown: **The server was damaged overnight.**
- the actor is irrelevant: **Your payment was received.**
- the action or affected person deserves emphasis: **Three residents were displaced.**
- the writer must avoid revealing a protected actor.

Passive voice becomes harmful when it hides responsibility:

> **Your account was closed** does not say who closed it or why.  
> **We closed your account because we could not verify your identity** does.

### Turn nominalizations into verbs

Nominalizations turn actions into abstract nouns, often ending in *-tion, -ment,* or *-ance*.

| Abstract | Direct |
|---|---|
| make a determination | decide |
| conduct an evaluation of | evaluate |
| provide assistance to | help |
| perform the installation of | install |
| give consideration to | consider |

Not every noun form is bad. “Application” may be a real object. Revise when the noun obscures the action or creates unnecessary helper verbs.

### Keep subjects and verbs close

> Harder: **The account owner, after completing verification and receiving approval from an administrator, can export the data.**  
> Clearer: **The account owner can export the data after verification and administrator approval.**

Readers should not have to hold a long interruption before learning what the subject does.

### Put conditions near the actions they control

> Ambiguous: **Submit the form on Friday if your manager approves it.**  
> Clearer: **If your manager approves the form, submit it by Friday.**

State exceptions before the irreversible action when readers need them to decide safely.

### Avoid stacked clauses

One sentence should not carry the policy, exception, rationale, deadline, and consequence all at once.

> Dense: **Applicants who received a notice after 1 June and who have not previously requested an extension may, provided that supporting evidence is attached, submit a request within 14 days of the date shown on the notice.**

> Layered: **You can request an extension if:**
>
> - your notice is dated after 1 June; and
> - you have not requested an extension before.
>
> **Submit the request within 14 days of the date on your notice. Attach supporting evidence.**

### Use positive constructions when possible

> Harder: **Do not submit the form unless you have not received a cancellation notice.**  
> Clearer: **Submit the form only if your booking is still active.**

Negative language is sometimes essential, especially for prohibitions and safety. The problem is multiple or indirect negatives, not the word *not* itself.

### Make pronouns unambiguous

> Ambiguous: **When the manager spoke to the supplier, they said the deadline had changed.**  
> Clearer: **The supplier told the manager that the deadline had changed.**

Repeat a noun when a pronoun could refer to more than one person or object. Repetition is cheaper than ambiguity.

### Use parallel structure

> Not parallel: **The role includes reviewing claims, reports must be written, and communication with customers.**  
> Parallel: **The role includes reviewing claims, writing reports, and communicating with customers.**

Parallel forms expose relationships and make lists easier to scan.

### Control sentence length without worshipping a number

Average sentence length is a diagnostic, not a law. A short sentence can be obscure. A longer sentence can be easy when its structure is familiar and relationships are explicit.

Use a short sentence for the key action or warning. Use a longer sentence when ideas genuinely belong together. Then vary rhythm so prose does not become mechanical.

---

## 8. Create coherent paragraphs and explanations

### Start with a useful topic sentence

Readers often scan the beginnings of paragraphs. Put the conclusion or subject there, not in the last line.

> **You can cancel at any time.** Your access continues until the end of the billing period, and we will not charge you again.

### State relationships explicitly

Words such as *because, but, if, before, after, therefore,* and *for example* reduce inference.

> Fragmented: **The device is offline. Sync is unavailable. Local edits are saved.**  
> Connected: **Because the device is offline, it cannot sync. Your local edits are still saved.**

### Introduce one new model at a time

When explaining a complex idea:

1. name the concept;
2. define it in audience language;
3. explain why it matters;
4. give a representative example;
5. show a counterexample or boundary if needed;
6. connect it to the next action.

### Use examples to reveal application

Definitions state a rule. Examples show how it behaves. Choose examples that:

- resemble the audience's real situations;
- demonstrate the difficult boundary, not only the obvious case;
- avoid cultural stereotypes;
- use plausible data;
- distinguish sample content from real values.

### Summarize long or complex material

[W3C's cognitive accessibility guidance](https://www.w3.org/TR/coga-usable/) recommends summaries for long documents and media. A good summary presents the main outcome and actions; it does not replace critical qualifications. Link summary statements to the detail they condense.

---

## 9. Readability on screens

Readable writing and readable typography are interdependent. Content cannot compensate for tiny, crowded, low-contrast text, and visual polish cannot rescue incoherent prose.

### Design for scanning and deep reading

Support both modes:

- descriptive title and summary;
- informative headings;
- frontloaded paragraphs;
- short topical sections;
- visible lists and comparison tables;
- emphasized key terms, used sparingly;
- stable navigation and anchors for long pages;
- a comfortable text measure and line height;
- adequate spacing between related and unrelated elements.

Do not bold whole paragraphs. When everything is emphasized, nothing is.

### Match text to its container

- Avoid narrow columns that produce one- or two-word lines.
- Avoid very wide lines that make the next line hard to locate.
- Do not place essential copy in carousels, transient toasts, or hover-only surfaces.
- Ensure zoom and text enlargement do not hide or overlap content.
- Allow localized text to expand.
- Keep labels visible after a field has a value; placeholders are not durable labels.

### Prefer structured HTML for digital information

[GOV.UK accessible-document guidance](https://www.gov.uk/guidance/publishing-accessible-documents) recommends HTML where possible because it is generally easier to adapt, navigate, search, resize, and maintain than office documents or PDFs. If a downloadable document is necessary, it still needs correct headings, reading order, link text, table structure, document language, and alternatives for images.

### Write without sensory assumptions

Avoid instructions that work only for one mode:

- “Click the green button on the right.”
- “See the image below.”
- “Listen for the tone.”

Use the control's accessible name or the information's purpose:

- “Select **Approve request**.”
- “The account diagram shows three permission levels.”

Directional language can also break when layout changes or content is translated.

---

## 10. Cognitive accessibility

Clear content helps people with attention, memory, language, learning, and executive-function differences, as well as anyone who is tired, distracted, stressed, or unfamiliar with the subject.

[W3C's Making Content Usable for People with Cognitive and Learning Disabilities](https://www.w3.org/TR/coga-usable/) recommends clear words, simple sentence structures, literal language where needed, short blocks, summaries, whitespace, explicit instructions, and explanations of implied meaning.

### Reduce working-memory demands

- Keep the instruction close to the control it governs.
- Show requirements before input begins.
- Keep visible progress and current status.
- Preserve entered data after errors.
- Do not require people to copy a code from memory when paste or autofill is safe.
- Repeat critical context on confirmation screens.
- Use recognition—clear options and examples—rather than recall.

### Make time and sequence concrete

> Vague: **Respond promptly.**  
> Clear: **Respond by 5:00 p.m. Eastern time on 18 July 2026.**

Use explicit dates when relative terms such as *today* or *next Friday* could be read later. Include a time zone when audiences cross zones.

### Explain implied meaning

Sarcasm, indirect refusals, and unexplained conventions can exclude readers.

> Indirect: **You may want to reconsider your entry.**  
> Direct: **Enter a date after 1 January 2020.**

### Prevent and support errors

Do not rely on an error message to teach a hidden rule. Show formatting and eligibility requirements before submission. When an error occurs, identify the field, describe the problem in text, and provide a correction. This aligns with WCAG 2.2 guidance on [error identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html), [labels or instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html), and [error suggestions](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html).

### Offer more than one representation when necessary

Complex information may need text plus a diagram, worked example, video, audio, or demonstration. Each representation should reinforce the same meaning, not introduce contradictions. Visuals need text alternatives appropriate to their purpose.

---

## 11. Plain language and Easy Read

These formats overlap but are not interchangeable.

### Plain language

Plain language is audience-centered mainstream communication. It improves wording, structure, and design so the intended audience can find, understand, and use the information.

### Easy Read

[GOV.UK's accessible communication guidance](https://www.gov.uk/government/publications/inclusive-communication/accessible-communication-formats) describes Easy Read as a format created to help people with learning disabilities. It uses simple, highly focused text supported by clear images. The guidance recommends expert production because image choice, layout, testing, and the amount of information require specialized judgment.

Easy Read commonly involves:

- one main idea at a time;
- short, direct sentences;
- generous spacing;
- a clear supporting image beside the relevant text;
- limited jargon and background detail;
- expert review and testing with people who use Easy Read.

An ordinary document does not become Easy Read because an author adds stock icons. Images must make the meaning more concrete, and the content still needs an accessible source format. Some people may need audio, video, sign language, Braille, large print, or supported communication instead.

---

## 12. Inclusive and respectful language

Inclusive writing is accurate, relevant, respectful, and attentive to power. It avoids turning people into problems or stereotypes.

### Use audience-preferred and context-appropriate terms

Preferences vary among and within communities. For example, some people prefer person-first language (“person with a disability”); others prefer identity-first language (“disabled person,” “Autistic person”). When possible:

1. ask people how they describe themselves;
2. follow established community or organizational guidance;
3. preserve a person's own terms in direct reference;
4. explain a choice when a broad audience may interpret it differently;
5. revisit the guidance as language changes.

The [CDC's inclusive communication principles](https://stacks.cdc.gov/view/cdc/112847) recommend non-stigmatizing language, avoiding unintentional blame, considering audience needs, and recognizing that preferred terms are not always universally agreed.

### Mention identity only when relevant

Do not mention age, disability, ethnicity, gender, religion, sexual orientation, family structure, immigration status, or socioeconomic status merely as decorative detail. When identity affects the subject, describe it specifically enough to be meaningful.

### Do not define people by a condition or outcome

Avoid labels that collapse a person into a diagnosis, behavior, or service status. Also avoid pitying constructions such as *suffers from* unless the person uses that language about their own experience.

### Avoid blame in systemic contexts

> Blaming: **People who fail to attend preventive appointments…**  
> Contextual: **People may miss preventive appointments when transportation, cost, scheduling, or trust creates a barrier.**

Context does not remove personal agency; it prevents communication from presenting an outcome as a character flaw without evidence.

### Use gender-inclusive constructions

[Microsoft's bias-free communication guidance](https://learn.microsoft.com/en-us/style-guide/bias-free-communication) recommends second person, plural constructions, role names, or singular *they* instead of generic *he* or *she*. Use a real person's stated pronouns.

### Do not encode stereotypes in examples

Vary names, roles, family structures, locations, ages, abilities, and economic circumstances. Do not make diversity decorative while every person in authority still shares one identity. Check both words and images.

### Respect is not euphemism

Inclusive language should increase truthfulness, not obscure harm. Say *fired*, *evicted*, *died*, or *discriminated against* when those are the accurate facts. Corporate euphemisms such as *rightsizing* or *negative patient outcome* can protect the institution at the reader's expense.

---

## 13. Writing for multilingual and global audiences

Writing that is clear in one dialect can become ambiguous, expensive, or culturally inappropriate in translation.

[Google's global-writing guidance](https://developers.google.com/style/translation) and [Microsoft's globalization guidance](https://learn.microsoft.com/en-us/style-guide/global-communications/writing-tips) both emphasize short, unambiguous sentences; consistent terminology; active, direct constructions; and avoiding unnecessary idioms.

### Write source text that travels well

- Use the primary meaning of a word.
- Avoid idioms, slang, puns, rhymes, and culture-bound metaphors in functional content.
- Keep the subject explicit; some languages and machine systems resolve pronouns differently.
- Avoid strings of nouns such as “customer account access status update.”
- Use complete sentences when fragments would make grammatical role unclear.
- Repeat the term instead of using a clever synonym.
- Use internationally unambiguous dates, units, currencies, and time zones.
- State what a symbol means; do not rely on color or icon familiarity alone.

### Be careful with phrasal verbs

English phrasal verbs can be difficult because the meaning is not the sum of the parts.

| Phrasal verb | More direct alternative |
|---|---|
| set up | configure or create, depending on meaning |
| put off | postpone |
| look into | investigate |
| fill out | complete |
| turn down | reject or lower |

Do not replace a familiar word with a more formal one blindly. Confirm which term the audience and translators find clearest.

### Design the interface for localization

- Do not concatenate sentence fragments in code.
- Allow text expansion and different line-breaking behavior.
- Keep variables semantically labeled for translators.
- Provide context for short strings such as “Open,” “Apply,” or “Charge.”
- Support plural rules, grammatical gender, and locale-specific order.
- Keep UI screenshots and help content synchronized.
- Test the localized interface, not only the translation file.

### Test with people, not translation alone

The Home Office's [guidance for people with limited English](https://design.homeoffice.gov.uk/design-and-content/content/designing-for-limited-english) recommends testing both language and translation with intended users. Machine translation can be useful for access, but it does not validate terminology, cultural fit, or task success.

---

## 14. Tone, voice, and trust

### Voice is stable; tone responds to context

A product may have a consistent voice—direct, calm, expert, warm—while changing tone by moment.

| Moment | Appropriate tone |
|---|---|
| Routine setup | concise, encouraging, practical |
| Successful completion | positive, specific, restrained |
| User input error | neutral, helpful, non-blaming |
| Service outage | direct, accountable, informative |
| Fraud warning | serious, specific, action-oriented |
| Bereavement or health crisis | humane, calm, unhurried |

### Earn trust through information, not adjectives

“Secure,” “transparent,” “world-class,” and “trusted” are claims. Show the mechanism:

> Weak: **We take your privacy seriously.**  
> Stronger: **We encrypt your files in transit and at rest. Only workspace administrators can change retention settings.**

### Use empathy as useful recognition

Empathy is not adding “We understand this may be frustrating” to every error. Useful empathy acknowledges the consequence and supports recovery:

> **We could not save your changes. They remain in this browser. Check your connection, then select Try again.**

### Apologize when the organization caused harm or delay

An apology is appropriate when the organization is responsible and the apology is paired with ownership, effect, remedy, and next update. Avoid apologizing for a user's valid action or using “sorry” as a substitute for recovery information.

### Avoid forced personality

Humor, exclamation points, emojis, and clever metaphors can strengthen low-risk brand moments. They are dangerous when they obscure errors, money, privacy, safety, rejection, loss, or legal consequences. A failed payment is not a moment for a joke.

---

## 15. UX writing and interface language

Interface copy is part of the interaction model. It should make the available action, state, consequence, and recovery visible.

### Labels

A label should name the information requested in the terms users know.

- Prefer **Email address** to **User identifier**.
- Prefer **Name on the card** to **Cardholder nomenclature**.
- Do not put essential requirements only in placeholder text.
- Keep a visible label after entry.
- Add hint text only when the label cannot carry the needed instruction.

[DWP hint-text guidance](https://design-system.dwp.gov.uk/guidance/hint-text) recommends first improving the question, then using a short hint only when users still need help. Essential information should not be relegated to visually secondary text.

### Buttons and actions

Use a specific verb, often with an object:

- **Save changes**
- **Send invitation**
- **Download invoice**
- **Delete project**
- **Return to dashboard**

Avoid **Yes** and **No** when the question may be out of context. On a confirmation screen, use **Delete project** and **Keep project**.

Match the verb to the actual behavior. *Continue* should advance, *Save* should persist, *Submit* should send, and *Download* should produce a file. Do not use *Learn more* when the destination is a purchase form.

### Hint and helper text

Good helper text answers a known question or prevents a known error:

> **Use the address where your bank sends statements.**

Avoid repeating the label or explaining an obvious control.

### Empty states

An empty state should explain:

1. what belongs here;
2. why it is empty, if useful;
3. the best next action;
4. any prerequisite.

> **No reports yet**  
> Reports appear after your first full day of activity. **View setup checklist**

Do not blame the user with “You haven't bothered to…” or fill the state with promotional copy unrelated to the task.

### Confirmations

Confirm the outcome and any next step:

> **Your claim was submitted**  
> Reference: CL-20418. We will email you within 2 business days.

“Success!” alone is not enough.

### Warnings and destructive actions

State the consequence before the action:

> **Delete “Quarterly research”?**  
> This permanently deletes the project and its 18 recordings. You cannot undo this action.

Use a destructive button label that repeats the action. Do not make the safe and dangerous options visually or linguistically ambiguous.

### Notifications and permission requests

Explain value and control before asking:

> **Allow location while using the app to show nearby pickup points. You can enter a postcode instead.**

Avoid invented urgency and vague benefit claims.

---

## 16. Error messages and recovery language

The GOV.UK Design System's [error-message guidance](https://design-system.service.gov.uk/components/error-message/) recommends messages that are specific, concise, positive, and explicit about how to fix the problem. It warns against blame, technical jargon, humor, and generic “valid/invalid” phrasing.

### A useful error pattern

> **What happened + where + how to fix it + what remains safe**

Not every message needs all four parts, but the reader needs enough to recover.

| Weak | Better |
|---|---|
| Invalid input | Enter a date after 1 January 2020 |
| Something went wrong | We could not upload “interview.mp4.” The file is larger than 2 GB |
| Authentication failure | Your email address or password does not match our records |
| You forgot a required field | Enter your postcode |
| Error 503 | The service is temporarily unavailable. Your draft is saved. Try again in a few minutes |

### Do not expose internal failure language

Map stack traces, HTTP status codes, database constraints, and internal service names to user-relevant explanations. Preserve a reference code for support when useful, but do not make it the explanation.

### Do not claim certainty you do not have

If several causes are possible, say what is known and offer a safe next step:

> **We could not connect to the payment service. Your card has not been charged. Try again, or use another payment method.**

Only promise “not charged” if the system can establish it reliably.

### Preserve work and explain recovery

An excellent error message cannot compensate for erased input. Recovery design includes retained data, focus placement, error summary, inline message, retry behavior, support path, and idempotent operations where appropriate.

### Track errors as product evidence

High-frequency messages may reveal a bad label, hidden requirement, technical fault, or policy problem. Measure occurrence, repeat occurrence, recovery rate, abandonment, and support contact—not just whether the copy meets a template.

---

## 17. Instructions, procedures, and technical documentation

### Begin with the outcome and prerequisites

Tell readers what they will accomplish, what authority or tools they need, and how long or risky the task is.

> **Create an API key for a test environment**  
> You need administrator access. The key is shown once, so prepare a secure place to store it.

### Use one actionable step per numbered item

Each step should normally include:

1. the action;
2. the location or object;
3. a condition, if necessary;
4. the expected result when it helps orientation.

> 1. In **Settings**, select **API keys**.  
> 2. Select **Create test key**.  
> 3. Enter a name that identifies the application, then select **Create**.  
>    The new key appears once.

Do not hide two important actions inside one long step.

### Use the imperative for direct instructions

[Google's developer style guidance](https://developers.google.com/style/person) recommends second person and imperative verbs for procedures. “Select Save” is shorter and clearer than “The user should then select the Save button.”

### Put warnings before the danger

> **Before deleting the cluster, export any logs you need. Deletion cannot be undone.**

A warning after the step has failed its purpose. Use warning levels consistently and reserve strong visual treatment for material risk.

### Separate explanation from procedure

People performing a task need a clean action path. Put conceptual explanation before or after the steps, or in a clearly labeled note. Do not interrupt each action with a paragraph of architecture history.

### Show expected results

Expected results help readers detect divergence early:

> **The status changes to Connected. This may take up to 30 seconds.**

### Write troubleshooting around symptoms and decisions

A troubleshooting entry should state:

- observable symptom;
- likely causes, ordered by probability or safety;
- checks that distinguish the causes;
- corrective actions;
- escalation and diagnostic information.

Avoid “Try everything” lists with no decision logic.

### Keep documentation synchronized with the product

Test instructions against the current interface, permissions, default values, and error states. Version important documentation. Stale clarity is still wrong.

---

## 18. Numbers, risk, and high-stakes communication

### Make numbers interpretable

The [CDC Clear Communication Index](https://www.cdc.gov/ccindex/widget.html) recommends familiar forms, doing unnecessary calculations for readers, and explaining qualitative terms with numbers.

- Prefer whole numbers when decimals add no useful precision.
- Use consistent units and denominators.
- Give the time period: “3 in 100 people each year.”
- Place compared numbers together.
- Label estimates as estimates.
- Explain what “high,” “low,” “rare,” or “significant” means.
- Avoid decorative precision such as 43.782% when the evidence supports only about 44%.

### Use absolute risk as well as relative risk

> Relative only: **The treatment reduces risk by 50%.**  
> More interpretable: **Over 5 years, risk fell from 2 in 100 people to 1 in 100—a 50% relative reduction and a 1 percentage-point absolute reduction.**

Use a consistent population and time frame. State whether values come from an experiment, model, or observational data.

### Communicate uncertainty directly

Good uncertainty language states:

- what is known;
- what is not known;
- why uncertainty exists;
- the plausible range or confidence interval, when useful;
- what would change the conclusion;
- what action is reasonable now.

Avoid both false certainty and empty disclaimers such as “Anything could happen.”

### Pair risk with a proportionate action

> **The charger may overheat if its cable is damaged. Stop using it if you see exposed wire, and request a free replacement.**

Fear without agency can produce panic or avoidance. Reassurance without evidence can produce harm.

### Place critical limits before consent or commitment

Fees, exclusions, side effects, data sharing, renewal terms, and irreversible consequences belong where people make the decision. Plain wording hidden after the action is still deceptive.

### Use domain review without surrendering clarity

Clinical, legal, security, policy, and financial content needs subject-matter review. Ask reviewers to identify the exact risk introduced by a revision. This enables a clearer alternative instead of reverting entire passages to source-language complexity.

---

## 19. Legal and policy content

### Preserve obligations and rights

Plain-language legal content must accurately communicate:

- who has a duty or right;
- what action is required, allowed, or prohibited;
- when it applies;
- deadlines and triggers;
- exceptions;
- consequences and remedies;
- governing definitions.

Do not trade away a right or qualification for a low reading score.

### Layer summaries and authoritative terms

A useful pattern is:

1. short explanation in audience language;
2. action or consequence;
3. important exceptions;
4. link or expandable section with the complete policy or contract;
5. route to challenge, appeal, or get help.

The summary must not contradict or materially understate the governing text. Label which text is authoritative.

### Replace ceremony with meaning

> Legalistic: **Notwithstanding the foregoing, failure to remit payment within the prescribed period shall result in termination.**  
> Clearer: **We will end your subscription if we do not receive payment within 14 days after the due date.**

### Make discretion visible

Words such as *may* can describe permission, possibility, or institutional discretion. State which:

> Ambiguous: **We may waive the fee.**  
> Clearer: **We can choose to waive the fee after reviewing evidence of financial hardship. A waiver is not guaranteed.**

---

## 20. AI-assisted writing without AI slop

Generative AI can accelerate research organization, variant generation, summarization, terminology checks, and first-pass editing. It can also make writing confidently generic and quietly inaccurate.

### Common AI-writing failure modes

#### Generic scene-setting

> “In today's fast-paced digital landscape, clear communication has become more important than ever.”

This sentence sounds finished but conveys little. Start with the actual claim.

#### Repetitive architecture

AI drafts often produce the same rhythm repeatedly: abstract introduction, three bullets, “why it matters,” and broad conclusion. The result feels exhaustive without developing a useful argument.

#### Unnecessary signposting

Phrases such as *It is worth noting, It is important to remember,* and *At its core* inflate prose and manufacture emphasis. Use hierarchy and direct statements.

#### Synonym churn

Models vary terms to avoid repetition, causing one feature to become a *tool, solution, platform, system,* and *experience*. Functional writing benefits from controlled repetition.

#### False balance and unsupported completeness

AI may invent neat categories, present disputed advice as consensus, or add “benefits” and “challenges” without evidence. A symmetrical answer is not necessarily a truthful one.

#### Fabricated facts and sources

A credible style does not establish accuracy. Verify every factual claim, quote, statistic, date, standard, legal rule, medical statement, URL, and attribution against an authoritative source.

#### Excessive polish

Smooth transitions can hide gaps in reasoning. Ask whether each conclusion follows from evidence and whether important uncertainty has been erased.

#### Homogenized voice

AI tends toward polite, balanced, impersonal prose. It can remove the subject-matter expert's useful conviction, the user's vocabulary, and the organization's distinctive but appropriate voice.

#### Decorative formatting

Overuse of headings, bold fragments, em dashes, parallel trios, icons, and summary boxes can make writing look generated and impair reading. Format only when it exposes structure.

### A responsible AI-assisted workflow

1. **Human defines the brief:** audience, task, context, risk, evidence, voice, and constraints.
2. **Ground the model:** provide approved facts, terminology, source excerpts, and examples. Do not treat model memory as a source.
3. **Use bounded tasks:** ask for alternatives, ambiguity detection, terminology consistency, or a structural critique rather than “make this good.”
4. **Preserve source traceability:** keep claims connected to their evidence.
5. **Edit for meaning:** verify actors, conditions, numbers, obligations, exceptions, and next steps.
6. **Edit for voice:** remove filler, repetitive cadence, canned empathy, and generic conclusions.
7. **Review for inclusion and accessibility:** AI can surface questions but cannot speak for communities.
8. **Use qualified reviewers:** subject-matter, legal, safety, security, or clinical review as the risk requires.
9. **Test with intended users:** generated fluency is not evidence of comprehension.
10. **Keep a responsible owner:** a named human or team approves publication and maintains the content.

### Useful AI review prompts

Ask the system to return findings, not silently rewrite:

- “Identify every sentence with an unclear actor. Explain the ambiguity.”
- “List terms that refer to the same concept and may need normalization.”
- “Mark claims that require a source or date.”
- “Find prerequisites introduced after the action that depends on them.”
- “Identify idioms, phrasal verbs, culture-specific references, and ambiguous pronouns.”
- “Compare this message with the policy source and list any lost conditions.”
- “Generate three versions for testing; preserve these non-negotiable facts.”

Always review the output. A model can fail at the critique as well as the draft.

---

## 21. Readability formulas: useful signal, poor verdict

Readability formulas such as Flesch Reading Ease and Flesch-Kincaid Grade Level primarily use sentence length, word length, and sometimes syllable counts. They can identify unusually dense passages, but they do not measure the most important outcome: whether the intended audience can use the content.

The [NIH Clear & Simple guide](https://www.nih.gov/institutes-nih/nih-office-director/office-communications-public-liaison/clear-communication/clear-simple) and [AHRQ's readability guidance](https://www.ahrq.gov/talkingquality/resources/writing/tip6.html) warn that formulas do not directly measure comprehension, cohesion, organization, attention, or usability. Different formulas can score the same passage differently.

### What a formula may reveal

- a high concentration of long sentences;
- many multi-syllable words;
- a comparison point between revisions of similar material;
- sections that deserve human review.

### What it cannot establish

- factual accuracy;
- whether a familiar long word is clearer than an unfamiliar short word;
- whether the main point is findable;
- whether pronouns and conditions are unambiguous;
- whether a technical term is necessary;
- whether the document supports a successful task;
- whether the voice is respectful;
- whether the visual design is accessible;
- whether translation is correct;
- whether people trust or remember the information.

### How scores can damage writing

Writers chasing a target grade may:

- replace precise familiar terms with inaccurate short words;
- split connected ideas into choppy fragments;
- remove explanations readers need;
- game punctuation;
- leave proper nouns and required terms untouched while weakening everything around them;
- declare success without testing.

### Better use

Treat the score like a smoke alarm, not a building inspection. Investigate the flagged passage, diagnose the real difficulty, revise, and test with people.

---

## 22. Test whether people can use the writing

The strongest evidence of clarity is performance by representative users in a realistic task. [CDC](https://www.cdc.gov/health-literacy/php/about/tell-others.html) recommends testing with the intended audience; the [GOV.UK Service Manual](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) describes moderated usability testing as observing people attempting specific tasks.

### Recruit the intended audience

Include important variations in:

- subject knowledge and experience;
- literacy and strongest language;
- device and connection quality;
- disability and assistive technology;
- digital confidence;
- emotional or situational context;
- role, authority, and service history.

[GOV.UK recruitment guidance](https://www.gov.uk/service-manual/user-research/find-user-research-participants) advises including actual or likely users, including disabled people, people with limited digital skills or literacy, and people who may need support.

### Ask behavioral questions

Do not rely on:

- “Do you understand?”
- “Is this clear?”
- “Do you like this version?”

People often say yes to be polite, because the question exposes the intended answer, or because they do not know what they missed.

Instead ask:

- “What does this message mean in your own words?”
- “What would you do next?”
- “By when must you act?”
- “Who is responsible for this step?”
- “Which option would you choose, and why?”
- “Show me where you would find the refund rules.”
- “What do you expect to happen after you select this button?”
- “Is there anyone this does not apply to?”

### Test separate dimensions

| Dimension | Example task or measure |
|---|---|
| Relevance | Can the participant tell whether the content applies to them? |
| Findability | Can they locate the deadline or eligibility rule? How long does it take? |
| Comprehension | Can they accurately paraphrase the main message and conditions? |
| Decision quality | Do they select an option consistent with their stated needs? |
| Actionability | Can they complete the next step without moderator help? |
| Error recovery | Can they diagnose and correct a realistic error? |
| Confidence | How certain are they, and is that certainty justified? |
| Recall | Can they remember critical safety or follow-up information after a delay? |
| Trust | What evidence or wording increases or reduces confidence in the source? |

### Methods

- **Content usability test:** participants find, interpret, and act on live or prototype content.
- **Paraphrase or teach-back:** participants explain the message in their own words.
- **First-click testing:** checks whether labels and structure point to the expected path.
- **Tree testing:** evaluates information architecture without visual design.
- **Cloze test:** readers fill deleted words; useful for textual predictability, but not a full usability measure.
- **Comparative testing:** participants use alternative versions; observe behavior before asking preference.
- **Accessibility evaluation:** expert and user testing with assistive technology and access needs.
- **Field study:** observe content in the actual environment, especially for complex or high-stakes work.
- **Production analysis:** search logs, errors, completion, support contacts, complaints, and downstream outcomes.

### Avoid misleading A/B tests

Clicks alone do not prove understanding. A manipulative label can raise clicks while worsening informed choice. Define a quality guardrail: successful completion, cancellation, complaint, error, comprehension, or long-term outcome.

### Iterate in small rounds

The GOV.UK Service Manual recommends regular, small research rounds for service work. Fix serious patterns, test again, and record what changed. A handful of usability sessions can reveal major issues; large samples are needed for reliable population estimates or small quantitative differences.

---

## 23. A practical writing and editing workflow

### Step 1: Frame

- Define audience, task, context, risk, and channel.
- Gather source material and identify authoritative facts.
- Write the one-sentence content intent.
- Decide what successful use looks like.

### Step 2: Model the information

- List facts, actions, conditions, exceptions, and evidence.
- Separate audience needs from organizational requests.
- Identify relationships and sequence.
- Decide what belongs now, later, or elsewhere.

### Step 3: Outline

- Write the title and main message.
- Draft descriptive headings.
- Put actions and decision criteria in reader order.
- Choose prose, lists, tables, examples, or visuals based on the relationship.

### Step 4: Draft directly

- Address the reader as “you” where appropriate.
- Name the responsible actor.
- Use strong verbs and consistent terms.
- Put conditions near the controlled action.
- Explain necessary jargon at first use.
- State dates, costs, and consequences explicitly.

### Step 5: Edit in passes

Trying to fix everything at once hides errors. Use separate passes:

1. **Meaning:** Is every claim accurate? Are conditions and exceptions intact?
2. **Relevance:** Does every section serve the audience and task?
3. **Structure:** Can people find answers from the title and headings?
4. **Action:** Is the next step visible and feasible?
5. **Language:** Can jargon, abstraction, filler, negatives, or ambiguity be reduced?
6. **Cohesion:** Are relationships explicit? Has sentence shortening made the prose choppy?
7. **Tone and inclusion:** Is the voice respectful, proportionate, and contextual?
8. **Accessibility and localization:** Will structure, labels, formats, and strings work for different readers and languages?
9. **Presentation:** Does the typography and layout support reading?

### Step 6: Review with the right expertise

Use subject-matter, policy, legal, clinical, security, accessibility, localization, or community review in proportion to risk. Ask reviewers to cite a requirement or explain a concrete reader risk rather than rewriting by personal taste.

### Step 7: Test

- Test the main risks with representative users.
- Observe comprehension and behavior.
- Revise patterns, not just isolated words.
- Re-test material changes.

### Step 8: Publish with ownership

- Assign a content owner.
- Record source, review, and update dates.
- Provide feedback and support paths.
- Monitor real outcomes and schedule review.

---

## 24. Before-and-after examples

### Bureaucratic notice

**Before**

> Pursuant to the implementation of revised identity assurance protocols, all account holders are required to undertake reverification no later than the date specified herein, failure of which may result in the suspension of account functionality.

**After**

> **Verify your identity by 30 September 2026.**  
> If you do not verify by this date, you will not be able to sign in. Verification takes about 5 minutes. You need a photo ID and a phone with a camera.

**Why it is clearer:** main action first; explicit deadline and consequence; concrete estimate and prerequisites; actor and verb are visible.

### Form error

**Before**

> Invalid date.

**After**

> Enter a departure date between 20 July and 31 December 2026.

**Why it is clearer:** identifies the accepted range and makes recovery possible.

### Service failure

**Before**

> Oops! Something went wrong. Please try again later.

**After**

> **We could not submit your application.**  
> Your answers are saved in this browser. Try again in a few minutes. If the problem continues, call 800-555-0148 and quote reference A19-442.

**Why it is clearer:** names the failed action, preserves confidence about work, offers recovery and support, removes false playfulness.

### Technical instruction

**Before**

> Once the configuration file has been subject to the necessary modification, execution of a service restart should be performed in order for the changes to take effect.

**After**

> Save the configuration file, then restart the service. The new settings take effect after the restart.

**Why it is clearer:** imperative actions, correct sequence, direct cause and result.

### Health risk

**Before**

> The medicine considerably increases the possibility of an adverse event.

**After**

> In the study, 4 in 100 people who took the medicine developed a blood clot, compared with 1 in 100 who did not take it. Seek urgent care if you have sudden chest pain, trouble breathing, or swelling in one leg.

**Why it is clearer:** quantifies the comparison, uses a consistent denominator, and pairs the risk with action. A real message would also state study context and uncertainty.

### Policy eligibility

**Before**

> Assistance may be available to qualifying residents subject to the criteria set forth below.

**After**

> You can apply for heating support if you live in the county and your household income is below the limit for your household size. Check the income limits before you apply.

**Why it is clearer:** says who can act, names two eligibility conditions, and gives a next step.

### AI-generated marketing prose

**Before**

> In today's ever-evolving business landscape, our innovative, cutting-edge platform empowers teams to seamlessly unlock productivity and take collaboration to the next level.

**After**

> Review documents with your team, assign each comment, and track what is resolved before publishing.

**Why it is clearer:** replaces unprovable adjectives with the actual capability and outcome.

### Inclusive framing

**Before**

> Noncompliant patients fail to follow their doctor's instructions.

**After**

> Some patients cannot follow the treatment plan because of cost, side effects, transport, unclear instructions, or a plan that does not fit their priorities. Ask what barrier is present before changing the treatment.

**Why it is clearer:** removes a stigmatizing label, supplies relevant context, and directs a useful action.

### Destructive confirmation

**Before**

> Are you sure? This action cannot be undone. **Yes / No**

**After**

> **Delete the campaign and its 12 drafts?**  
> This action is permanent.  
> **Delete campaign / Keep campaign**

**Why it is clearer:** repeats the object, scope, consequence, and action in labels that remain meaningful out of context.

---

## 25. Common anti-patterns

### “Everyone is the audience”

Broad reach does not eliminate audience differences. It increases the need for layered content, alternative formats, and separate pathways.

### Starting with the organization's story

Mission, history, and process usually belong after the reader's answer. Lead with them only when they are the reason for the visit.

### Shortening without preserving relationships

Mechanical editing can turn a coherent explanation into isolated fragments. Keep causes, conditions, contrasts, and sequence explicit.

### Replacing every technical word

An imprecise substitute can be more dangerous than a defined technical term. Optimize for recognition and accuracy, not syllable count.

### Hiding necessary detail in accordions

Expandable content can support layered reading. It should not conceal material costs, risks, restrictions, or required steps.

### Using a glossary to excuse jargon

A glossary helps reference use; it does not make a jargon-heavy first encounter easy. Define critical terms in context.

### Writing interface copy after design is “finished”

Labels and messages reveal flaws in the interaction model. Content design belongs in discovery, flows, prototypes, and testing—not only the final polish pass.

### Treating style-guide rules as universal truth

A style guide should resolve recurring decisions while allowing evidence-based exceptions. “Never use passive voice” and “every sentence under 15 words” are not sound universal policies.

### Tone as decoration

Adding warmth cannot repair a missing deadline, inaccessible form, or unfair policy. Substance creates trust.

### Readability score as acceptance criterion

A target grade can be one guardrail for some audiences, but it is not proof of compliance, accessibility, or comprehension.

### Asking stakeholders whether they “like” the copy

Preference is not the same as use. Define the audience task and test the content against it.

### Publishing raw AI output

Fluency hides omissions and factual errors. AI-generated content needs source verification, accountable review, voice editing, and user testing like any other content—often more.

---

## 26. Checklists

### Brief checklist

- [ ] The intended audience and important subgroups are defined.
- [ ] The user's question, decision, or task is explicit.
- [ ] Context, emotional state, device, language, and access needs are considered.
- [ ] Authoritative facts and responsible reviewers are identified.
- [ ] Success can be observed or measured.

### Relevance checklist

- [ ] The title and opening address the reason people arrived.
- [ ] Eligibility, scope, status, cost, timing, and consequences appear where needed.
- [ ] Organizational background does not delay the answer.
- [ ] Optional detail is layered without hiding material information.
- [ ] Every section supports a reader need or necessary organizational obligation.

### Findability checklist

- [ ] The main message is prominent.
- [ ] Headings describe content rather than label generic sections.
- [ ] Sequence follows the user's task.
- [ ] Lists and tables represent genuine relationships.
- [ ] Links describe their destination.
- [ ] Long content has navigation, summary, or anchors when useful.
- [ ] Semantic structure matches visual structure.

### Understandability checklist

- [ ] Familiar, precise terms are used.
- [ ] Necessary jargon and abbreviations are explained at first use.
- [ ] One term refers to each concept.
- [ ] Actors and actions are visible.
- [ ] Conditions, exceptions, and pronouns are unambiguous.
- [ ] Negatives and nested clauses are controlled.
- [ ] Paragraphs have one main purpose and explicit relationships.
- [ ] Examples demonstrate difficult or likely cases.
- [ ] Numbers include units, denominators, time frames, and context.
- [ ] Uncertainty is stated honestly.

### Usability checklist

- [ ] The next action is clear.
- [ ] Requirements appear before the action they affect.
- [ ] Buttons describe the actual result.
- [ ] Errors identify the problem and support correction.
- [ ] User input survives recoverable failure.
- [ ] Confirmations say what happened and what comes next.
- [ ] Critical information is available at the decision point.
- [ ] A help or escalation route exists when self-service may fail.

### Tone and inclusion checklist

- [ ] Tone fits the seriousness and emotional context.
- [ ] The text does not blame, patronize, minimize, or force cheerfulness.
- [ ] Identity is mentioned only when relevant and with appropriate terms.
- [ ] Examples avoid stereotypes and represent varied circumstances.
- [ ] Claims of trust, ease, or quality are supported by concrete information.
- [ ] Community or audience review is used where terminology is contested or sensitive.

### Accessibility and localization checklist

- [ ] Headings, labels, errors, and reading order are semantic.
- [ ] Instructions do not depend only on color, position, shape, sound, or gesture.
- [ ] The page or passage language is identified.
- [ ] Text remains usable when resized, reflowed, translated, or read aloud.
- [ ] Idioms, fragments, noun strings, and ambiguous pronouns have been reviewed.
- [ ] Dates, numbers, currencies, and units are locale-aware.
- [ ] Strings are not concatenated in a way that blocks grammatical translation.
- [ ] Alternative formats are offered when the audience needs them.

### AI-assisted content checklist

- [ ] A human created the content brief and owns the result.
- [ ] All claims, sources, dates, quotations, and numbers were verified.
- [ ] Policy conditions and technical meaning survived rewriting.
- [ ] Generic openings, filler, synonym churn, and repetitive formatting were removed.
- [ ] The organization's approved terminology and actual voice were restored.
- [ ] Sensitive or high-stakes material received qualified human review.
- [ ] Representative users tested the final experience.

### Test checklist

- [ ] Participants represent the intended audience and important access needs.
- [ ] Tasks reflect realistic goals and conditions.
- [ ] Questions require finding, paraphrasing, deciding, or acting.
- [ ] The moderator does not teach the intended interpretation.
- [ ] Observations distinguish isolated preference from repeated behavior.
- [ ] Revisions respond to evidence and are tested again.
- [ ] Production measures include quality outcomes, not clicks alone.

---

## 27. Organizational practice and governance

### Create a content standard, not a personality manual alone

A useful internal standard covers:

- audience and research requirements;
- plain-language principles;
- voice and contextual tone;
- approved terminology and naming;
- labels, buttons, errors, warnings, and confirmations;
- inclusive and accessible language;
- localization patterns;
- numbers, dates, units, and risk;
- legal and regulated review;
- source and fact-checking expectations;
- AI use and accountability;
- testing, ownership, and lifecycle.

Provide good and bad examples from the actual product. A rule without an example invites inconsistent interpretation.

### Maintain a term bank

Record:

- preferred term;
- definition;
- audience;
- terms not to use and why;
- localization notes;
- legal or product constraints;
- example sentence;
- owner and review date.

The term bank should be searchable and available to writers, designers, developers, support teams, translators, and AI workflows.

### Make review proportional to risk

Not every tooltip needs a committee. Define review levels:

- **Low risk:** routine editorial and design-system review.
- **Moderate risk:** content designer plus subject-matter owner.
- **High risk:** legal, clinical, financial, safety, security, accessibility, or community review as appropriate, plus user testing.

### Automate checks carefully

Linters can flag long sentences, passive constructions, prohibited terms, duplicate headings, vague links, or missing labels. They should create review prompts, not blindly rewrite. Configure justified exceptions so teams do not game the tool.

### Measure outcomes over time

Useful operational measures include:

- task completion and time;
- error and correction rates;
- abandonment and repeat attempts;
- search reformulation and zero-result searches;
- support contacts and complaint themes;
- comprehension and findability test results;
- successful appeal, application, or adherence outcomes;
- translation defects;
- accessibility issues;
- content age and overdue reviews;
- user trust and justified confidence.

Avoid attributing every outcome change to copy. Interface, policy, traffic source, incentives, and system reliability also affect behavior.

### Treat content as a maintained product surface

Every important page or message needs:

- a responsible owner;
- source of truth;
- update trigger;
- review date;
- analytics and feedback path;
- retirement or archival plan.

Clear language degrades when the underlying process changes. Maintenance is part of clarity.

---

## 28. A compact evaluation rubric

Score each dimension from 0 to 3. The score is a conversation aid, not a substitute for user testing.

| Dimension | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Relevant | purpose or audience unclear | some useful content, much organizational material | main needs covered | content is tightly fitted to researched needs and context |
| Findable | answer is buried | weak structure or labels | most answers are easy to locate | structure works in realistic tasks and with assistive navigation |
| Understandable | meaning is frequently ambiguous | jargon or syntax creates avoidable effort | generally direct and accurate | representative users interpret main points and conditions correctly |
| Usable | no clear next step | action exists but requirements or recovery are weak | task can usually be completed | users complete, decide, and recover successfully under realistic conditions |
| Inclusive | stereotyping, blame, or exclusion | generic intent with untested terms | respectful and accessible baseline | audience/community evidence informs language and alternatives |
| Trustworthy | unsupported or misleading | ownership or limits are weak | facts, sources, and limits are visible | evidence, accountability, uncertainty, and updates support justified trust |

A low score in relevance or usability cannot be rescued by perfect sentence style.

---

## 29. Final principles

1. **Write for a person in a situation, not for an abstract average reader.**
2. **Give people what they need before what the organization wants to say.**
3. **Make the main point and next action visible.**
4. **Use structure to reduce search and memory effort.**
5. **Prefer precise, familiar, consistent terms.**
6. **Name actors, actions, conditions, timing, and consequences.**
7. **Preserve necessary detail and uncertainty.**
8. **Use shortness as a tool, not a quality score.**
9. **Design words and interactions together.**
10. **Respect readers through truth, context, inclusion, and recoverability.**
11. **Use accessibility and localization as design inputs, not final checks.**
12. **Treat readability formulas and AI tools as assistants, never judges.**
13. **Test whether people can find, explain, decide, and act.**
14. **Assign ownership and maintain content after publication.**

The clearest writing often feels effortless to read because the difficult work happened before publication: understanding the audience, selecting the right information, exposing relationships, resolving ambiguity, testing interpretation, and taking responsibility for the outcome.

---

## Research notes and sources

### Core plain-language standards and government guidance

- [ISO 24495-1:2023 — Plain language: Governing principles and guidelines](https://www.iso.org/standard/78907.html) — scope and international plain-language standard.
- [International Plain Language Federation — ISO standard overview](https://www.iplfederation.org/iso-standard/) — public explanation of the four governing principles: relevant, findable, understandable, and usable.
- [Accessibility Standards Canada — CAN-ASC-3.1:2025 Plain Language](https://accessible.canada.ca/standards-and-technical-guides/standards-and-technical-guides-database/can-asc-312025-plain-language?mode=full-html) — audience-centered, cyclical development and feedback model.
- [Plain Writing Act of 2010](https://www.law.cornell.edu/uscode/text/5/301) — statutory definition of plain writing in the United States.
- [Digital.gov — Plain Language principles](https://digital.gov/guides/plain-language/principles) — audience, organization, wording, and design guidance.
- [Digital.gov — Writing for understanding](https://digital.gov/guides/plain-language/writing) — active voice, tense, sections, and sentence-level techniques.
- [U.S. Consumer Product Safety Commission — Plain Language Principles](https://www.cpsc.gov/About-CPSC/Policies-Statements-and-Directives/plain-language-principles) — practical audience, structure, verb, sentence, and paragraph guidance.
- [GOV.UK — Content principles, conventions, and research background](https://www.gov.uk/government/publications/govuk-content-principles-conventions-and-research-background/govuk-content-principles-conventions-and-research-background) — plain English, tone, web reading, and content conventions.
- [Department for Education — Plain language](https://design.education.gov.uk/content-design/plain-language) — adapting language to user needs and specialist audiences.

### Health literacy, actionability, numbers, and risk

- [CDC — Clear Communication Index](https://www.cdc.gov/ccindex/) — research-based assessment of main message, language, visuals, action, numbers, and risk.
- [CDC — Clear Communication Index widget and scored items](https://www.cdc.gov/ccindex/widget.html) — detailed criteria and examples.
- [CDC — Develop and test materials](https://www.cdc.gov/health-literacy/php/develop-materials/develop-test-materials.html) — accurate, accessible, actionable content and audience testing.
- [CDC — What is health literacy?](https://www.cdc.gov/health-literacy/php/about/index.html) — personal and organizational health-literacy definitions.
- [NIH — Clear & Simple](https://www.nih.gov/institutes-nih/nih-office-director/office-communications-public-liaison/clear-communication/clear-simple) — audience research, development, testing, and limits of readability formulas.
- [AHRQ — Cautions about readability formulas](https://www.ahrq.gov/talkingquality/resources/writing/tip6.html) — why formula scores do not establish comprehension or usability.

### Accessibility and cognitive usability

- [W3C — WCAG 2.2: Readable](https://www.w3.org/WAI/WCAG22/Understanding/readable) — language, unusual words, abbreviations, reading level, and pronunciation.
- [W3C — Making Content Usable for People with Cognitive and Learning Disabilities](https://www.w3.org/TR/coga-usable/) — clear language, literal meaning, structure, summaries, instructions, and memory support.
- [W3C — Page Structure Tutorial](https://www.w3.org/WAI/tutorials/page-structure/) — semantic page regions and organized content.
- [W3C — Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/) — meaningful hierarchy and assistive navigation.
- [W3C — Understanding Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html) — identifying and describing input errors in text.
- [W3C — Understanding Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) — sufficient labels and input guidance.
- [GOV.UK — Publishing accessible documents](https://www.gov.uk/guidance/publishing-accessible-documents) — accessible structure and preference for HTML.
- [GOV.UK — Accessible communication formats](https://www.gov.uk/government/publications/inclusive-communication/accessible-communication-formats) — Easy Read and other alternative formats.

### UX writing, technical writing, and globalization

- [GOV.UK Design System — Error message](https://design-system.service.gov.uk/components/error-message/) — specific, non-blaming, recoverable error language.
- [DWP Design System — Hint text](https://design-system.dwp.gov.uk/guidance/hint-text) — evidence-based limits and uses of helper text.
- [Google Developer Documentation Style Guide — Second person](https://developers.google.com/style/person) — “you,” imperative instructions, and audience identity.
- [Google Developer Documentation Style Guide — Global audience](https://developers.google.com/style/translation) — translation-friendly sentences, terminology, and references.
- [Microsoft Writing Style Guide — Simple words and concise sentences](https://learn.microsoft.com/en-us/style-guide/word-choice/use-simple-words-concise-sentences) — precision, concision, and term consistency.
- [Microsoft Writing Style Guide — Writing tips for global content](https://learn.microsoft.com/en-us/style-guide/global-communications/writing-tips) — structure and language for translation.
- [Home Office Design System — Designing for people with limited English](https://design.homeoffice.gov.uk/design-and-content/content/designing-for-limited-english) — idioms, translation, tense, alternative media, and user testing.

### Inclusive language and research

- [Microsoft Writing Style Guide — Bias-free communication](https://learn.microsoft.com/en-us/style-guide/bias-free-communication) — gender-neutral, disability-aware, culturally careful language and examples.
- [CDC — Health Equity Guiding Principles for Inclusive Communication](https://stacks.cdc.gov/view/cdc/112847) — respectful, audience-centered, non-stigmatizing communication.
- [CDC — Equity-centered public health communication research article](https://www.cdc.gov/pcd/issues/2023/23_0061.htm) — development, framing, community engagement, and limits of prescriptive terminology.
- [GOV.UK Service Manual — How user research improves service design](https://www.gov.uk/service-manual/user-research/how-user-research-improves-service-design) — continuous research, real needs, and evidence over assumptions.
- [GOV.UK Service Manual — Moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) — observing people complete realistic tasks.
- [GOV.UK Service Manual — Finding research participants](https://www.gov.uk/service-manual/user-research/find-user-research-participants) — inclusive recruitment and access needs.
- [Nielsen Norman Group — F-shaped reading pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) — eye-tracking evidence and common misinterpretations of scanning behavior.

### Source-use note

This guide synthesizes standards, public-sector guidance, accessibility requirements, health-literacy methods, style systems, and UX research. Recommendations are not all universal requirements. WCAG success criteria, laws, regulated-domain rules, and contractual obligations have different levels of authority. Teams should verify the rules that apply to their jurisdiction, audience, medium, and risk. Source guidance also changes; review current versions before adopting it as policy.


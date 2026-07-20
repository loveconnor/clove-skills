# Bundled Research Reference

This file contains the complete research source for this skill. Use this contents list and targeted searches to load only the sections required by the task.

## Contents

- Executive summary
- 1. What “clean” should mean
- 2. A practical model of the user
- 3. Attention: users cannot process everything they can see
- 4. Perception and grouping
- 5. Working memory and cognitive load
- 6. Recognition, recall, and discoverability
- 7. Decision-making and choice architecture
- 8. Predictability, mental models, and consistency
- 9. Affordance, mapping, and target acquisition
- 10. Feedback, control, and trust
- 11. Error psychology and recovery
- 12. Interruptions, task switching, and resumption
- 13. Readability and content psychology
- 14. Information architecture and navigation
- 15. Density, disclosure, and whitespace
- 16. Designing for emotion, trust, and processing fluency
- 17. Accessibility as user-centered psychology
- 18. Ethical behavioral design
- 19. A human-centered design process
- 20. Designing a clean interface system
- 21. Practical patterns by psychological need
- 22. Evaluation methods
- 23. Metrics that matter
- 24. Clean UI/UX critique rubric
- 25. Common reasons an interface feels unclean
- 26. Common psychology myths in UX
- 27. Evidence-based conclusions
- 28. Research limitations and cautions
- Selected sources and further reading
- One-page takeaway

---

# Clean, User-Centered UI/UX Through the Lens of Psychology

> A detailed, research-backed guide to clarity, readability, cognitive load, attention, memory, decision-making, trust, accessibility, and ethical design

**Prepared:** July 2026  
**Primary scope:** Websites, mobile apps, SaaS products, dashboards, workflows, and digital services  
**Related guide:** [What Good Typography Means and Looks Like](TYPOGRAPHY_RESEARCH_GUIDE.md)

---

## Executive summary

A clean interface is not simply an interface with few objects, large amounts of white space, pale colors, or a fashionable visual style. It is an interface in which the user's goal, the available actions, the system's state, and the consequences of action are clear with little unnecessary mental effort.

Clean UI is a perceptual property. Clean UX is an experiential property.

- **Clean UI** makes relationships, importance, action, and state easy to perceive.
- **Clean UX** makes a task easy to understand, begin, continue, recover, and complete.

The central design problem is not “How can we remove more?” It is:

> **How can we make the right information and action available at the right moment, in a form that fits the user's goals, knowledge, abilities, and context?**

Clean, user-centered experiences usually share ten qualities:

1. **Goal clarity** — the purpose of each view is obvious.
2. **Strong hierarchy** — attention is directed in a useful order.
3. **Low extraneous cognitive load** — users spend effort on their task, not decoding the interface.
4. **Recognition support** — relevant options, history, constraints, and context are visible or easily retrieved.
5. **Predictability** — similar things look and behave similarly.
6. **Appropriate density** — information is neither needlessly hidden nor chaotically exposed.
7. **Readable communication** — language, typography, and structure support scanning and comprehension.
8. **Feedback and control** — users know what happened and can reverse or repair actions.
9. **Resilience and inclusion** — the experience works across abilities, devices, languages, content, and stressful conditions.
10. **Respect** — psychology is used to help people make informed choices, not to manipulate them.

A useful working model is:

> **Clean UX = relevant information + visible structure + predictable behavior + timely feedback − avoidable mental work**

This is not a literal equation. It is a reminder that visual reduction alone does not create usability. Removing a label, hiding navigation, or collapsing important context may make a screenshot look cleaner while making the experience cognitively more expensive.

---

## 1. What “clean” should mean

### 1.1 Clean is not the same as minimal

Minimalism is an aesthetic and compositional strategy. Cleanliness is the quality of being understandable, coherent, and resolved.

A minimal interface can be unclear when it:

- Removes labels from unfamiliar icons
- Hides essential navigation behind ambiguous gestures
- Uses low-contrast text to appear elegant
- Replaces visible choices with memory-dependent interaction
- Removes field boundaries and affordances
- Splits one understandable page into excessive steps
- Hides pricing, conditions, or consequences

A dense interface can be clean when it:

- Uses a stable grid and alignment
- Groups related information clearly
- Maintains predictable locations
- Offers strong typography and data alignment
- Distinguishes primary signals from background context
- Lets expert users compare information without navigating away

Nielsen's “aesthetic and minimalist design” heuristic is frequently misread as “show as little as possible.” Its useful principle is that irrelevant information competes with relevant information for attention ([Nielsen Norman Group: Ten Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)). The goal is high relevance and signal clarity, not emptiness.

### 1.2 Clean UI and clean UX can diverge

A clean-looking landing screen can lead to a confusing flow. A visually dense professional workspace can enable extremely efficient use.

Evaluate both layers:

| Layer | Core question |
|---|---|
| Surface | Can users see structure, priority, and interactivity? |
| Navigation | Can users predict where information and actions live? |
| Task flow | Can users complete the job without unnecessary steps or memory? |
| State | Can users tell what the system is doing and what has changed? |
| Recovery | Can users understand and repair errors? |
| Long-term use | Does the experience become faster and more predictable with familiarity? |

### 1.3 Clean is contextual

The right amount of information changes with:

- User expertise
- Task frequency
- Consequence of error
- Time pressure
- Device and viewing environment
- Need to compare items simultaneously
- Accessibility and language needs
- Emotional state

A medical order screen, creative editor, transit kiosk, banking flow, and social app should not share the same density or interaction model. Human-centered design begins by understanding users, tasks, and environments rather than imposing one visual formula. ISO 9241-210 defines human-centered design as an approach to interactive systems informed by human factors, user needs, and iterative evaluation ([ISO 9241-210:2019](https://www.iso.org/standard/77520.html)).

---

## 2. A practical model of the user

Designers should avoid treating “the user” as a generic, fully attentive, rational person with perfect vision, memory, language, and motor control.

Real users may be:

- New to the product or domain
- Skilled but moving quickly
- Distracted or interrupted
- Tired, stressed, anxious, or in pain
- Using a second language
- On a small or low-quality screen
- In bright light, noise, or motion
- Using assistive technology
- Managing reduced vision, dexterity, memory, attention, or reading ability
- Trying to avoid risk rather than maximize speed
- Returning after weeks away

User-centered design treats these conditions as normal variation rather than edge cases.

### A useful task model

At any moment, a person must roughly:

1. Notice relevant information.
2. Interpret what it means.
3. Connect it to their goal.
4. Choose an action.
5. Physically perform the action.
6. Perceive the result.
7. Decide whether the goal was achieved.

Friction can enter at every stage. Clean UX reduces the gaps between intention, action, and interpretation.

---

## 3. Attention: users cannot process everything they can see

### 3.1 Attention is selective and goal-directed

Seeing an element is not the same as attending to it. Users filter the visual field based on:

- Current goal
- Expectations
- Learned patterns
- Visual salience
- Location
- Recent events
- Perceived relevance

Visual-search research describes both **bottom-up guidance**, in which local contrast attracts attention, and **top-down guidance**, in which the user's goal directs attention toward expected features ([Wolfe, 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8965574/); [Wolfe, 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6513732/)).

Design implication:

- Put important items where users expect them.
- Make truly important exceptions visually distinctive.
- Do not rely on salience alone when the user is searching somewhere else.
- Match labels to the words users have in mind.

### 3.2 Visual hierarchy is an attention budget

Size, color, weight, position, whitespace, depth, and motion all compete for attention. If many objects use strong salience, the interface becomes noisy and the most important signal loses distinctiveness.

Prioritize:

1. Current purpose or key state
2. Primary content or action
3. Supporting context
4. Secondary action
5. Metadata and utilities

Not every screen requires five levels, but every visible level should have a reason.

### 3.3 Salience should reflect importance

Common mismatches include:

- A promotional banner louder than a task error
- Destructive action styled like the primary action
- Decorative illustration larger than essential instructions
- Secondary navigation given the strongest contrast
- Multiple badges, chips, and notifications competing simultaneously

When visual prominence and task importance disagree, the interface trains users to ignore its signals.

### 3.4 Motion captures attention strongly

Motion can orient users to state changes, but it also interrupts ongoing thought. Use motion to:

- Explain where content moved
- Confirm direct manipulation
- Draw attention to a time-sensitive, meaningful change
- Preserve spatial continuity

Avoid ambient motion near reading, repeated pulsing, or animation whose main purpose is engagement capture. Support reduced-motion preferences.

### 3.5 Users scan before they commit to reading

Eye-tracking research identifies several web scanning patterns rather than one universal path: F-shaped scanning, heading-focused “layer cake” scanning, spotted scanning for distinctive terms, and more complete reading when motivation is high. The pattern depends on the task, content, and presentation ([Nielsen Norman Group: F-Shaped Pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)).

Support scanning with:

- Descriptive headings
- Meaningful first words
- Short paragraphs
- Bullets for parallel items
- Bold used for key phrases, not whole paragraphs
- Visible numbers, dates, and status terms
- Consistent alignment
- Clear section boundaries

Do not design an F shape. Design clear information so users do not have to fall into an inefficient scanning pattern.

---

## 4. Perception and grouping

People perceive organized wholes rather than unrelated pixels. Gestalt grouping helps explain why interface structure is often understood before text is read.

### 4.1 Proximity

Objects close together appear related.

Use less space within a group than between groups. Common errors include equal spacing everywhere, labels separated from their values, and unrelated actions placed too close together.

### 4.2 Similarity

Objects sharing color, shape, size, or style appear to have related meaning.

- Use consistent styling for the same component role.
- Do not style noninteractive text like a link.
- Do not use the same color for a status and an unrelated decoration.

### 4.3 Common region

Objects inside a boundary appear grouped. Cards, panels, and fieldsets are useful when the boundary communicates a real relationship.

Do not place every group in a card. Excessive containers add visual borders, padding, and nesting without improving understanding.

### 4.4 Connectedness and continuity

Lines, steps, and alignment imply sequence. Use them for progress, workflows, timelines, and parent-child relationships. Avoid connectors that imply relationships not present in the data.

### 4.5 Figure-ground separation

Users need to distinguish content, controls, overlays, focus, and disabled states from their surroundings. Low-contrast “clean” styling can collapse these boundaries.

Good figure-ground treatment uses:

- Sufficient text and control contrast
- Deliberate surface levels
- Clear modal boundaries
- Scrims behind overlays
- Visible focus indicators
- Shadows or borders only where depth or separation needs explanation

---

## 5. Working memory and cognitive load

### 5.1 Working memory is limited

Working memory holds and manipulates information required for the current task. Cognitive-load theory models it as limited in capacity and duration, while long-term memory contains schemas that make familiar tasks easier ([Sweller, van Merriënboer, & Paas, 1998](https://research.utwente.nl/en/publications/cognitive-architecture-and-instructional-design/)).

This explains why the same UI can feel easy to an expert and overwhelming to a novice. The expert sees meaningful chunks; the novice sees separate elements requiring active interpretation.

### 5.2 Do not turn memory research into a menu-count law

Miller's famous “seven plus or minus two” is often misused to claim that interfaces may contain no more than seven items. Later work proposed a capacity closer to four chunks under more controlled conditions, but capacity still varies with material, chunking, knowledge, and task ([Cowan, 2001](https://pubmed.ncbi.nlm.nih.gov/11515286/)).

The design lesson is not “four items maximum.” It is:

- Group information meaningfully.
- Keep necessary context visible.
- Avoid requiring arbitrary recall.
- Match complexity to knowledge.
- Test the real task instead of applying a magic number.

### 5.3 Intrinsic and extraneous difficulty

Some tasks are inherently complex. A mortgage, medical order, tax return, or video edit cannot always be made simple. The interface should minimize **extraneous difficulty**—effort caused by the presentation rather than the task.

Extraneous cognitive load comes from:

- Inconsistent terminology
- Hidden dependencies
- Unnecessary steps
- Poor grouping
- Repeated data entry
- Ambiguous controls
- Remembering values from another screen
- Decorative competition
- Premature detail
- Unexplained errors

The goal is not to conceal the task's real complexity. It is to represent that complexity in a learnable, inspectable form.

### 5.4 Externalize information

The interface can act as external memory:

- Keep a search query visible with its results.
- Show selected filters and total results.
- Preserve entered values after errors.
- Show prior choices during comparison.
- Display progress and completed steps.
- Provide examples next to difficult fields.
- Keep units and constraints beside values.
- Offer history, recent items, and drafts.

This shifts effort from recall to recognition.

### 5.5 Chunk by meaning, not arbitrary count

Good chunks have a coherent purpose:

- Contact details
- Shipping information
- Payment method
- Review and confirmation

Bad chunks merely divide a page into equal visual blocks without reflecting the task.

---

## 6. Recognition, recall, and discoverability

Recognition is generally easier than unaided recall because the environment provides cues. Nielsen's recognition-rather-than-recall heuristic recommends keeping actions, objects, and necessary information visible or easily retrievable ([Nielsen Norman Group: Recognition Rather Than Recall](https://www.nngroup.com/articles/recognition-and-recall/)).

### Prefer recognition for:

- Navigation choices
- Available actions
- Formatting options
- Previously used values
- Product comparison
- Command discovery
- Error correction

### Recall can be efficient for experts

Keyboard shortcuts, command palettes, gestures, and search syntax can be faster after learning. Provide them as accelerators, not the only path.

A strong system supports:

- Visible novice path
- Efficient expert path
- Cues that teach shortcuts naturally
- Stable mappings that reward learning

### Icons are not automatically recognizable

Icons work without labels when the symbol is highly conventional in the exact context. Ambiguous, brand-specific, or infrequent icons need text.

Test icons by asking people what action they expect—not whether the icon looks attractive.

---

## 7. Decision-making and choice architecture

### 7.1 More choices can increase decision time

The Hick-Hyman law relates choice reaction time to uncertainty across stimulus-response alternatives ([Hick, 1952](https://doi.org/10.1080/17470215208416600)). In UI terms, choosing among many unfamiliar, similarly weighted options can take longer.

Do not reduce this to “always show fewer choices.” Decision time also depends on:

- Familiarity
- Organization
- Default and recommendation quality
- Difference between options
- Search and filtering
- Consequence of the decision
- Frequency distribution

A well-organized menu with twenty familiar destinations may be easier than five vague categories.

### 7.2 Choice overload is conditional

The popular claim that more options always reduces satisfaction or conversion is overstated. A meta-analysis of 50 experiments found an average effect near zero with large variation across conditions ([Scheibehenne, Greifeneder, & Todd, 2010](https://ideas.repec.org/a/oup/jconrs/v37y2010i3p409-425.html)).

Reduce choice difficulty by:

- Creating meaningful categories
- Showing decision-relevant differences
- Offering search and filters
- Using explainable recommendations
- Providing a safe default
- Allowing users to defer nonessential decisions
- Supporting comparison without memory

### 7.3 Defaults are powerful and must be ethical

Defaults reduce effort and imply recommendation. A good default is:

- Safe
- Reversible
- Appropriate for most users in context
- Clearly visible
- Easy to change
- Not chosen primarily to exploit inattention

Privacy, payment, subscription, and data-sharing defaults require particular care.

### 7.4 Progressive disclosure

Progressive disclosure shows common or essential information first and makes advanced detail available when needed.

Use it when:

- Advanced settings are genuinely infrequent
- The primary path can be completed without them
- Revealing detail will not hide costs or consequences
- Users can predict where more options are located
- State remains visible after the details collapse

Do not use it to hide critical terms, make comparison difficult, or force repeated navigation. “Advanced” is not a dumping ground for unresolved information architecture.

### 7.5 Break tasks into steps only when it reduces mental work

Multi-step flows help when:

- Later questions depend on earlier answers
- Sections are conceptually distinct
- Progress and review are visible
- One long form would be intimidating or difficult to validate

A single page may be better when:

- Users need to compare sections
- The task is short
- Returning to prior values is common
- Steps create loading or navigation overhead

The cleanest-looking option is not necessarily the cleanest cognitive path.

---

## 8. Predictability, mental models, and consistency

### 8.1 People predict systems from prior experience

Users bring mental models from other products, platforms, and real-world processes. Familiar conventions reduce learning:

- Logo links to home
- Underlined text is a link
- Magnifying glass means search
- Escape closes a temporary overlay
- Standard platform gestures behave normally

Break convention when the alternative is demonstrably better and learnable—not merely more original.

### 8.2 Consistency creates reusable knowledge

Consistency includes:

- Same action, same label
- Same state, same visual treatment
- Same component, same behavior
- Stable navigation order
- Repeated content patterns
- Familiar platform behavior

WCAG requires repeated navigation to maintain relative order and repeating functions to be identified consistently, supporting predictability and spatial memory ([W3C: Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html); [W3C: Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification)).

### 8.3 Consistency is not uniformity

Different things should look different. If primary action, secondary action, link, and destructive action share identical treatment, visual consistency has erased semantic distinction.

A clean system is consistent at the level of rules while allowing purposeful variants.

### 8.4 Preserve spatial memory

Frequent users remember locations. Avoid moving controls, reordering navigation, or inserting content above the current focus without a user-initiated reason.

Adaptive interfaces should be cautious: personalization can improve relevance while damaging predictability if items continually move.

---

## 9. Affordance, mapping, and target acquisition

### 9.1 Controls need perceivable cues

Users should be able to tell what is:

- Clickable
- Editable
- Selected
- Disabled
- Draggable
- Expandable
- Destructive

Minimal styling often fails when it removes boundaries, underlines, labels, and state contrast. A control can be visually quiet without becoming ambiguous.

### 9.2 Mapping should feel natural

The position and movement of controls should correspond to their effect:

- Slider movement maps to value direction.
- Reorder handles move the represented item.
- Zoom controls affect the nearby canvas.
- Navigation labels match destination language.

Poor mapping forces users to memorize arbitrary relationships.

### 9.3 Larger, closer targets are easier to select

Fitts's law models the speed-accuracy relationship of moving to a target: larger targets and shorter distances are generally easier to acquire.

Practical consequences:

- Make frequent and important controls comfortably large.
- Include the visible label inside the hit area.
- Put related actions near the object they affect.
- Separate destructive actions from frequent actions.
- Use screen edges thoughtfully because they constrain pointer overshoot on desktop.

WCAG 2.2 Level AA defines a minimum target size of 24 × 24 CSS pixels with specified exceptions and spacing rules; larger targets are often appropriate for touch and important actions ([W3C: Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)).

---

## 10. Feedback, control, and trust

### 10.1 Every action should close the loop

After action, users need to know:

- Was the input received?
- Is the system working?
- What changed?
- Was the operation successful?
- What can happen next?

Feedback should be timely and proportional:

- Immediate pressed, focus, and selection states
- Progress for longer work
- Persistent result for consequential actions
- Quiet confirmation for frequent low-risk actions
- Specific explanation for failure

### 10.2 Perceived responsiveness matters

Even when processing takes time, immediate acknowledgement reduces uncertainty. Use:

- Button state change
- Inline progress
- Optimistic updates when safely reversible
- Stable skeletons reflecting the final layout
- Background processing with clear status

Do not use animation to disguise unnecessary delay.

### 10.3 Users need control and an exit

Support:

- Cancel
- Back
- Undo
- Edit before confirmation
- Pause and resume
- Save draft
- Clear explanation of irreversible action

Control reduces anxiety because exploration is safer.

### 10.4 Trust is built by accurate prediction

Trust grows when the system:

- Does what it says
- Explains uncertainty
- Preserves data
- Uses stable labels
- Shows costs before commitment
- Requests permissions in context
- Makes cancellation as understandable as signup
- Avoids surprise changes

Visual polish can support initial credibility, but durable trust comes from honest behavior.

---

## 11. Error psychology and recovery

### 11.1 Distinguish slips from mistakes

- A **slip** occurs when the goal is correct but execution is wrong: tapping Delete instead of Duplicate.
- A **mistake** occurs when the user forms the wrong plan because their understanding is incomplete or incorrect.

Prevent slips through spacing, target size, confirmation for serious consequences, undo, and safer defaults. Prevent mistakes through clear models, labels, examples, and visible consequences.

### 11.2 Prevent before explaining

Useful prevention patterns:

- Disable impossible dates while explaining why
- Constrain formats without rejecting valid variation unnecessarily
- Show requirements before submission
- Detect destructive conflicts early
- Preserve entered content
- Confirm identity and scope before irreversible operations

Disabled controls can be confusing when they provide no explanation. If a control is unavailable, help users understand how to make it available.

### 11.3 Error messages should answer four questions

1. What happened?
2. Where is the problem?
3. Why, if useful?
4. What can the user do next?

WCAG requires detected input errors to be identified and described in text and calls for corrective suggestions when known ([W3C: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification); [WCAG 2.2](https://www.w3.org/TR/WCAG22/)).

Compare:

```text
Error 422.
```

with:

```text
The card expiration date is in the past. Enter a current month and year.
```

### 11.4 Recovery is part of the core flow

A product is not clean if only the ideal path is designed. Include:

- Offline and timeout states
- Partial failure
- Permission denied
- Duplicate data
- Empty results
- Interrupted upload
- Session expiration
- Undo and restoration

---

## 12. Interruptions, task switching, and resumption

Interruptions create additional memory work. Research describes interrupted tasks as prospective-memory problems: the user must remember to resume a suspended goal and reconstruct context ([Dodhia & Dismukes, 2009](https://doi.org/10.1002/acp.1441)).

### Reduce unnecessary interruption

- Avoid modal dialogs for low-priority information.
- Batch nonurgent notifications.
- Do not interrupt typing with layout movement.
- Time requests at natural breakpoints.
- Let users control notification categories.

### Support resumption

- Preserve scroll, cursor, selection, and filter state.
- Save drafts automatically.
- Show “where you left off.”
- Keep incomplete steps visible.
- Provide recent history.
- Maintain the problem state during interruptions.

HCI research suggests interruptions are less disruptive when they occur at lower-demand moments and when the system preserves the information needed to resume ([Borst, Taatgen, & van Rijn, 2015](https://doi.org/10.1145/2702123.2702156)).

---

## 13. Readability and content psychology

Readable UX is the combination of language, structure, typography, and context.

### 13.1 Write for the user's goal

Lead with what the person needs to know or do.

Prefer:

```text
Upload a PDF under 10 MB.
```

over:

```text
Please be advised that the system is presently configured to permit the uploading of PDF-format documents subject to a maximum file-size limitation of 10 MB.
```

Plain language is not childish language. It is precise language organized around the reader.

### 13.2 Use familiar words

- Use the user's vocabulary, not internal team or database terms.
- Prefer concrete verbs.
- Explain unavoidable technical terms in context.
- Use one term for one concept.
- Avoid clever labels in transactional navigation.

W3C cognitive-accessibility guidance recommends common words, short sentences, simple tense, short blocks, unambiguous content, and supportive visual layout ([W3C: Clear and Understandable Content](https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/)).

### 13.3 Front-load information

Put distinguishing words early in headings, links, and list items. Repetitive beginnings slow scanning.

Weak:

- View your billing settings
- View your notification settings
- View your privacy settings

Stronger:

- Billing settings
- Notification settings
- Privacy settings

### 13.4 Headings should describe topic or purpose

Headings create orientation for visual scanning and assistive-technology navigation. WCAG specifies that headings and labels describe topic or purpose ([W3C: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels)).

Avoid vague headings such as “More,” “Explore,” or “Resources” when a specific phrase would reveal the content.

### 13.5 Instructions belong at the point of action

Do not expect users to memorize a tutorial and apply it later. Place:

- Format examples beside the field
- Password requirements before input fails
- Pricing and consequences before commitment
- Recovery advice beside the error

WCAG's labels-and-instructions guidance notes that clear labels and expected formats help prevent incorrect submissions, particularly for people with cognitive, language, and learning disabilities ([W3C: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)).

### 13.6 Typography affects cognition through effort

For detailed type research, see [What Good Typography Means and Looks Like](TYPOGRAPHY_RESEARCH_GUIDE.md). Core UI starting points include:

- Comfortable apparent body size, often 16–18 CSS px for general-purpose web reading
- Body line height around 1.45–1.65
- Sustained-reading measure around 45–75 characters
- Strong contrast and durable stroke weight
- Shorter lines for labels and supporting text
- Meaningful paragraph and section spacing
- Limited, clearly differentiated type roles

These are testing ranges, not universal laws. Typeface, language, distance, reader, and device change the result.

### 13.7 Do not use low contrast to create “clean” hierarchy

Secondary text can be visually subordinate without becoming difficult to read. Use size, position, spacing, and semantic color roles together. WCAG 2.2 requires at least 4.5:1 contrast for normal text and 3:1 for qualifying large text at Level AA ([WCAG 2.2: Contrast Minimum](https://www.w3.org/TR/WCAG22/#contrast-minimum)).

---

## 14. Information architecture and navigation

### 14.1 Organize around user concepts

Navigation should reflect tasks and content people recognize, not organizational structure.

Research methods include:

- Open card sorting to learn grouping language
- Closed card sorting to evaluate a proposed structure
- Tree testing to assess findability without visual styling
- Search-log analysis to identify unmet vocabulary and content
- Support-ticket analysis to reveal conceptual gaps

### 14.2 Navigation should answer orientation questions

Users need to know:

- Where am I?
- What is here?
- Where can I go?
- How do I return?

Use:

- Clear page title
- Current navigation state
- Breadcrumbs for meaningful hierarchy
- Stable global navigation
- Back behavior that preserves prior state
- Search where the content volume requires it

### 14.3 Depth versus breadth is a task decision

Deep structures hide options and require navigation. Broad structures expose more options and may increase scanning. Choose based on:

- Category clarity
- Number and similarity of options
- User familiarity
- Need to compare
- Screen space
- Frequency

Avoid vague categories created only to reduce the top-level item count.

### 14.4 Search is not a repair for weak architecture

Search helps users with a known target and large information sets. It does not help when users do not know the vocabulary or available possibilities.

A good system supports browsing and search where both behaviors matter.

---

## 15. Density, disclosure, and whitespace

### 15.1 Density is not clutter

**Density** is the amount of useful information in a region. **Clutter** is interference that makes relevant information harder to find or understand.

High density can support:

- Comparison
- Monitoring
- Expert workflows
- Pattern recognition
- Reduced navigation

Low density can support:

- Focus
- Onboarding
- Emotional pacing
- High-consequence decisions
- Small-screen interaction

### 15.2 Whitespace communicates relationships

Whitespace can:

- Separate groups
- Create hierarchy
- Increase target isolation
- Slow pacing
- Emphasize an object

Whitespace fails when it separates a label from its control, hides content below excessive gaps, or forces unnecessary scrolling.

### 15.3 Use containers only when they add meaning

Cards are appropriate for independent, repeatable objects. They are not necessary for every section.

Prefer:

- Spacing for simple grouping
- Dividers for sequential separation
- Background regions for major zones
- Cards for independent objects or actions

### 15.4 Offer density choices where user needs diverge

Data-heavy systems may offer comfortable and compact modes. Preserve the same information architecture and component meaning across modes so users do not relearn the interface.

---

## 16. Designing for emotion, trust, and processing fluency

### 16.1 Easy processing can feel positive

Processing-fluency research links ease of perceptual and cognitive processing with some positive judgments, although newer work cautions that the relationship is conditional and that interest can also arise from productive complexity ([Reber, Schwarz, & Winkielman, 2004](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1295305); [Graf & Landwehr, 2015](https://pubmed.ncbi.nlm.nih.gov/25742990/)).

In UI, fluency can come from:

- Familiar patterns
- Clear figure-ground separation
- Consistent alignment
- Legible language and type
- Predictable interaction
- Coherent visual rules

Do not interpret this as “make everything effortless.” Learning, creativity, and expert work may involve valuable difficulty. Remove difficulty unrelated to the user's goal.

### 16.2 Aesthetics changes expectations

Attractive interfaces can be perceived as easier to use and can earn patience during initial interaction. This aesthetic-usability effect does not excuse poor performance or inaccessible controls.

Use aesthetics to:

- Signal care and credibility
- Support a fitting emotional tone
- Create recognition
- Make sustained use pleasant

Do not use polish to hide limitations, cost, or risk.

### 16.3 Emotion changes cognitive conditions

Users under stress have less spare attention for decoding unclear systems. High-stakes interfaces should generally use:

- Stronger confirmation
- Clearer language
- Fewer surprising changes
- Visible progress
- Safer defaults
- Better recovery
- Less decorative competition

Empathy should produce design changes, not just persona adjectives.

---

## 17. Accessibility as user-centered psychology

Accessibility guidelines operationalize many principles that benefit people under a broad range of conditions: perceptibility, predictability, sufficient time, understandable content, input assistance, and robust interaction.

### 17.1 Cognitive accessibility

People with cognitive and learning disabilities may face barriers involving attention, memory, language, executive function, numeracy, or problem solving. Similar constraints can temporarily affect anyone under fatigue, stress, interruption, or unfamiliarity.

W3C cognitive guidance emphasizes:

- Clear content
- Familiar design
- Help avoiding mistakes
- Visible ways to get help
- Support for focus and attention
- Adaptability and personalization

([W3C Cognitive Accessibility](https://www.w3.org/WAI/cognitive/))

### 17.2 Perceivable

- Sufficient text and non-text contrast
- Information not communicated by color alone
- Text alternatives
- Content that survives zoom and reflow
- Captions and transcripts where relevant

### 17.3 Operable

- Keyboard access
- Visible and unobscured focus
- Adequate target size
- Alternatives to complex gestures and dragging
- Enough time
- Motion and flashing safeguards

### 17.4 Understandable

- Consistent navigation and identification
- Clear labels and instructions
- Predictable context changes
- Error identification and suggestion
- Consistent access to help

WCAG 2.2 added consistent-help requirements in recognition that users who need assistance benefit from finding it predictably ([W3C: Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help)).

### 17.5 Robust and adaptable

- Correct semantic structure
- Names, roles, states, and values exposed to assistive technology
- Support for browser and platform preferences
- Content that remains usable with user styles
- Responsive layouts that tolerate text expansion

Accessibility is not the final audit stage. It changes the information architecture, components, content, and prototypes from the beginning.

---

## 18. Ethical behavioral design

Psychology can reduce friction or exploit it. User-centered design preserves informed agency.

### 18.1 Dark patterns

Regulators use “dark patterns” or “dark commercial patterns” for interface practices that steer, deceive, coerce, or obstruct people into decisions that may not serve their interests. The FTC identifies practices such as disguised advertising, hidden fees, difficult cancellation, and privacy manipulation ([FTC: Bringing Dark Patterns to Light](https://www.ftc.gov/reports/bringing-dark-patterns-light)). The OECD similarly defines dark commercial patterns as digital practices that lead consumers toward decisions not in their best interests ([OECD: Dark Commercial Patterns](https://www.oecd.org/en/topics/dark-commercial-patterns.html)).

### 18.2 Common manipulative patterns

- **Visual interference:** making the business-preferred option prominent and the protective option faint
- **Obstruction:** making cancellation or deletion harder than signup
- **Sneaking:** revealing fees or recurring terms late
- **Forced action:** demanding unrelated data to continue
- **Confirmshaming:** using guilt or ridicule in decline copy
- **Preselection:** opting users into consequential choices by default
- **Nagging:** repeatedly interrupting after a decision
- **False scarcity or urgency:** creating misleading time or stock pressure
- **Bait and switch:** changing the result expected from an action

### 18.3 An ethical choice-architecture test

Ask:

- Is the important information visible before commitment?
- Are alternatives described in parallel language?
- Is declining reasonably easy?
- Are defaults safe and expected?
- Can the user reverse the decision?
- Would the design still seem fair if the business-preferred option were reversed?
- Are we measuring completed user goals or merely captured behavior?

### 18.4 Engagement is not automatically user value

Time on site, clicks, streaks, and notifications can increase while user welfare declines. Pair business metrics with measures such as:

- Successful task completion
- Informed consent
- Error and regret rate
- Cancellation success
- Support contacts
- User-reported trust
- Long-term retention without coercion

---

## 19. A human-centered design process

### Step 1: Frame the user outcome

Define:

- Who is trying to do what?
- In what context?
- What do they know already?
- What makes the task difficult?
- What are the consequences of error?
- What does success look like to the user?
- What does success look like to the organization?
- Where might those interests conflict?

### Step 2: Research behavior, not just preference

Useful methods:

- Contextual interviews and observation
- Task analysis
- Diary studies for behavior over time
- Support-ticket and call analysis
- Search and analytics review
- Accessibility research with disabled participants
- Competitive and analogous-system analysis

Ask about recent concrete events rather than only hypothetical desires.

Weak:

```text
Would you use a dashboard filter?
```

Stronger:

```text
Tell me about the last time you needed to narrow these results. What did you do?
```

### Step 3: Model the task and information

- Map goals, decisions, dependencies, and failure points.
- Identify information users must compare.
- Identify what must remain visible.
- Separate essential complexity from presentation-created complexity.
- Define novice and expert paths.

### Step 4: Prototype structure before polish

Test:

- Information order
- Labels
- Navigation
- Progressive disclosure
- Form grouping
- Recovery

Low-fidelity prototypes help teams change structure without defending visual detail.

### Step 5: Add visual hierarchy and interaction

- Establish primary content and action.
- Define component states.
- Create role-based type, spacing, and color tokens.
- Add feedback and motion.
- Check contrast and focus from the start.

### Step 6: Test representative tasks

Observe whether users can:

- Explain what the screen is for
- Find the starting point
- Predict action outcomes
- Complete tasks accurately
- Notice state changes
- Recover from errors
- Resume after interruption
- Use the design at larger text sizes and with assistive technology

Avoid coaching unless the purpose is participatory co-design. Silence reveals where the interface fails to explain itself.

### Step 7: Iterate by severity

Prioritize issues by:

- Frequency
- Impact on task success
- Consequence of error
- Reach across users
- Accessibility barrier severity
- Recovery difficulty

### Step 8: Validate in production

Combine:

- Task completion funnels
- Error logs
- Performance metrics
- Search terms
- Support contacts
- Qualitative feedback
- Accessibility monitoring
- Follow-up usability testing

Analytics show what happened; research helps explain why.

---

## 20. Designing a clean interface system

### 20.1 Purpose per view

Each view should have:

- Clear title or state
- Primary content
- One dominant next action when the flow has a dominant next action
- Secondary options with appropriately lower emphasis
- Visible exit or navigation context

Multiple primary actions may be correct in a workspace. Do not fabricate one dominant CTA when users have several equal goals.

### 20.2 Limited visual vocabulary

Define constrained systems for:

- Typography roles
- Spacing
- Semantic colors
- Borders and surfaces
- Radius and elevation
- Icons
- Motion

Constraints reduce accidental difference. Semantic variants preserve meaningful difference.

### 20.3 Component anatomy

For each component, define:

- Purpose
- Content rules
- Default, hover, focus, pressed, selected, and disabled states
- Loading, success, warning, and error
- Keyboard behavior
- Responsive behavior
- Text expansion
- Accessible name and role

### 20.4 Content and component fit

Do not force content into a component chosen for visual neatness. For example:

- Long comparison data may need a table, not cards.
- A short binary decision may need buttons, not a stepper.
- Complex filtering may need a persistent panel, not a sequence of modal sheets.
- A warning may need inline context, not a toast that disappears.

### 20.5 Stable state model

Users should be able to distinguish:

- Available versus unavailable
- Selected versus unselected
- Saved versus unsaved
- Local versus published
- Loading versus empty
- Error versus no result

Empty and loading are not the same. Error and zero results are not the same. Conflating states erodes trust.

---

## 21. Practical patterns by psychological need

| User need | Psychological issue | Helpful patterns | Common misuse |
|---|---|---|---|
| Find the main action | Selective attention | Hierarchy, whitespace, one dominant treatment | Making every CTA visually primary |
| Understand relationships | Perceptual grouping | Proximity, alignment, common region | Card around every section |
| Avoid remembering | Limited working memory | Visible context, history, comparison, selected filters | Hiding information behind sequential screens |
| Learn complexity gradually | Novice knowledge gap | Progressive disclosure, good defaults, examples | Hiding essential terms or frequent controls |
| Choose among options | Decision uncertainty | Categories, comparison, recommendation, search | Arbitrarily reducing choices or using deceptive defaults |
| Act accurately | Motor and attention limits | Large targets, spacing, clear labels | Tiny icon-only controls |
| Know what happened | Evaluation uncertainty | Immediate feedback, status, progress | Toast-only feedback for consequential state |
| Recover from error | Slips and mistaken models | Prevention, inline errors, undo, preserved input | Blame-oriented generic errors |
| Resume work | Goal-memory decay | Drafts, restored state, “continue” cues | Returning users to a generic home screen |
| Feel safe | Uncertainty and risk | Visible consequences, review, cancel, honest language | Hidden fees, forced urgency, confirmshaming |

---

## 22. Evaluation methods

### The glance test

Show the screen briefly and ask:

- What is this screen for?
- What stood out?
- What would you do first?

This tests broad hierarchy, not full comprehension.

### The expectation test

Before a participant activates a control, ask what they expect to happen. Compare prediction with behavior.

### The recognition test

Ask users to locate an action or prior choice without prompting with the interface's exact label.

### The memory-offload audit

For every step, list information users must remember from another location. Make necessary information visible or retrievable.

### The interruption test

Pause a realistic task, then let the participant return. Observe whether the system preserves sufficient state and cues.

### The error-recovery test

Introduce realistic invalid input, network failure, or permission problem. Test whether users can identify, correct, and trust the result.

### The reading and scan test

Ask users to find specific facts, explain the page, and summarize the next action. Measure comprehension, not just reading speed.

### The accessibility stress test

Test:

- Keyboard-only
- 200% and 400% zoom
- Enlarged platform text
- Screen reader
- Reduced motion
- High contrast or forced colors
- Long translations
- Slow connection
- Touch and pointer

### The ethics reversal test

Reverse the business-preferred option. If the design suddenly feels unfair, the original may also be manipulative.

---

## 23. Metrics that matter

### Behavioral

- Task success
- Time on task, interpreted carefully
- Error rate
- Recovery success
- Abandonment point
- Repeated unnecessary actions
- Search reformulation
- Backtracking
- Help use

### Perceptual and cognitive

- First-click accuracy
- Correct prediction of action result
- Recall and recognition where relevant
- Comprehension
- Subjective workload, such as NASA-TLX when appropriate
- Confidence rating

### Experience

- Perceived ease
- Trust
- Satisfaction
- Sense of control
- Accessibility barriers
- Qualitative description of confusion

### System

- Interaction latency
- Layout shift
- Failed requests
- Lost input
- Accessibility conformance and manual findings

Never optimize one metric in isolation. Faster completion may reflect accidental skipping. More engagement may reflect difficulty. Fewer support contacts may reflect inaccessible support.

---

## 24. Clean UI/UX critique rubric

Score each category from 1–5 and record observable evidence.

### User and task fit

- Is the target user and context clear?
- Does the design support the real task rather than an internal process?
- Is density appropriate to expertise, frequency, and risk?
- Are organizational and user goals aligned transparently?

### Purpose and hierarchy

- Can users identify the page purpose?
- Is the visual first step correct?
- Does prominence match importance?
- Are secondary and destructive actions differentiated?

### Information architecture

- Do labels use user language?
- Are categories distinct and meaningful?
- Can users orient, navigate, and return?
- Is content hidden only when disclosure helps the task?

### Cognitive load

- What must users remember?
- Is necessary context visible?
- Are complex tasks chunked by meaning?
- Is irrelevant competition removed?
- Are expert shortcuts available without hiding the novice path?

### Readability

- Can content be scanned by headings and first words?
- Is language concise, familiar, and specific?
- Is typography comfortable and high contrast?
- Are instructions next to the relevant action?
- Do text and layout survive localization and resizing?

### Interaction and feedback

- Do controls look actionable?
- Can users predict results?
- Does every action receive proportional feedback?
- Are loading, empty, success, and error distinct?
- Is user state preserved?

### Error and recovery

- Are common errors prevented?
- Are messages specific and constructive?
- Is input preserved?
- Can consequential actions be reviewed, undone, or recovered?

### Consistency and learning

- Are repeated functions named and placed consistently?
- Does learned behavior transfer across views?
- Are exceptions purposeful?
- Does the design become more efficient with experience?

### Accessibility

- Is it perceivable, operable, understandable, and robust?
- Is focus visible?
- Are target sizes comfortable?
- Does the flow work without color, motion, pointer, or perfect vision?
- Were disabled people included in testing?

### Ethics and trust

- Are costs, data use, and consequences visible?
- Are choices presented fairly?
- Are defaults safe and reversible?
- Is cancellation reasonably easy?
- Does the system respect a decline?

---

## 25. Common reasons an interface feels unclean

| Symptom | Likely underlying cause | Better response |
|---|---|---|
| Screen feels busy | Too many equal-priority signals or weak grouping | Rebuild hierarchy and groups before removing useful content |
| Screen feels empty but confusing | Essential context or affordances were removed | Restore labels, state, and visible choices |
| Users miss the primary action | Salience mismatch or unexpected placement | Align prominence, wording, and position with the task |
| Users keep reopening panels | Frequently needed information hidden by progressive disclosure | Keep the state or panel visible |
| Users make comparison errors | Options split across screens | Present relevant attributes together |
| Users abandon a form | Unclear value, premature requests, poor grouping, or difficult recovery | Explain purpose, defer nonessential fields, preserve data |
| Users click repeatedly | Weak or delayed feedback | Acknowledge input immediately and show progress |
| Users cannot resume | State and goal context were discarded | Restore draft, location, selections, and next step |
| Users ignore warnings | Too many warnings or poor differentiation | Reserve warnings for actionable risk and tier severity |
| Interface feels inconsistent | Repeated roles use different labels or behavior | Standardize semantics and components |
| “Clean” text is hard to read | Low contrast, tiny size, thin weight, long measure | Improve type setting and semantic contrast |
| Users choose an unwanted plan | Visual interference, hidden terms, or misleading default | Present options and total cost fairly |
| Expert users feel slowed down | Excessive step-by-step disclosure | Add shortcuts, bulk action, persistence, and density options |

---

## 26. Common psychology myths in UX

### “Users have eight-second attention spans”

There is no universal countdown after which users stop attending. Attention depends on goal, relevance, motivation, environment, and difficulty. Make value and structure clear; do not design around a viral statistic.

### “People can only handle seven menu items”

Working-memory research does not establish a seven-item navigation limit. Group and label choices meaningfully and test findability.

### “More choices always reduce conversion”

Choice-overload effects vary substantially. Help users understand differences rather than arbitrarily removing valuable options.

### “Three clicks is the maximum”

Users care more about confidence, progress, and information scent than an absolute click count. Five obvious steps can outperform two confusing ones.

### “Users do not scroll”

Users scroll when they expect useful content and receive cues that more exists. The top of the page should establish value and orientation, not contain everything.

### “Whitespace reduces cognitive load”

Whitespace helps when it clarifies grouping and hierarchy. Excessive or misplaced whitespace can separate related information and increase navigation.

### “Fewer features make a cleaner UX”

Removing low-value features can help. Hiding necessary information or forcing workarounds increases cognitive and operational cost.

### “A/B testing proves the better UX”

An experiment shows the effect of a specific change on selected metrics in a specific population and period. It does not automatically measure comprehension, fairness, accessibility, trust, or long-term value.

### “Psychology lets us control users”

Human behavior is contextual and variable. Ethical design supports informed action; it does not guarantee or justify coercion.

---

## 27. Evidence-based conclusions

1. **Clean UX is low avoidable effort, not low element count.**
2. **Attention is selective.** Place information where users expect it and reserve salience for genuine priority.
3. **Working memory is limited and expertise changes chunking.** Keep context visible and support recognition.
4. **Complexity should be organized, not merely hidden.** Essential complexity remains; extraneous complexity should be removed.
5. **Choice difficulty depends on organization and context.** Fewer is not always better.
6. **Consistency creates transferable learning and spatial memory.** Purposeful differences must remain visible.
7. **Feedback closes the action loop.** Responsiveness and visible state are fundamental to trust.
8. **Error recovery is part of the core experience.** A happy-path-only product is not clean.
9. **Readability combines language, structure, type, and context.** Visual neatness cannot compensate for unclear content.
10. **Accessibility operationalizes user-centered design.** Predictability, clarity, target size, focus, reflow, and error support help many people.
11. **Density and simplicity are contextual.** Expert comparison tasks may benefit from dense, stable views.
12. **Psychology must be applied ethically.** The same principles that reduce friction can manipulate consent and choice.
13. **User research is required.** Psychological principles generate hypotheses; representative testing validates the design.

---

## 28. Research limitations and cautions

- Many psychological laws originated in controlled laboratory tasks. Real interfaces include learning, motivation, semantic meaning, and social context.
- Cognitive-load theory was developed primarily in learning research. Applying it to UX is useful but requires care; not every dislike or delay is “cognitive load.”
- Laws such as Hick-Hyman and Fitts predict specific types of behavior under assumptions. They are not universal design commandments.
- Eye-tracking patterns describe behavior influenced by layouts and tasks; they should not become rigid templates.
- Cultural, linguistic, age, ability, and expertise differences limit universal claims.
- Self-reported ease and objective performance can disagree.
- Business metrics may fail to capture user welfare, accessibility, or informed choice.
- WCAG conformance is a baseline, not proof of cognitive accessibility or overall usability.

Use research to explain likely mechanisms and create testable design decisions. Validate those decisions with representative people performing realistic tasks.

---

## Selected sources and further reading

### Human cognition and performance

- Borst, J. P., Taatgen, N. A., & van Rijn, H. (2015). [What Makes Interruptions Disruptive?](https://doi.org/10.1145/2702123.2702156). *CHI 2015*.
- Cowan, N. (2001). [The Magical Number 4 in Short-Term Memory](https://pubmed.ncbi.nlm.nih.gov/11515286/). *Behavioral and Brain Sciences, 24*(1), 87–114.
- Dodhia, R. M., & Dismukes, R. K. (2009). [Interruptions Create Prospective Memory Tasks](https://doi.org/10.1002/acp.1441). *Applied Cognitive Psychology, 23*(1), 73–89.
- Hick, W. E. (1952). [On the Rate of Gain of Information](https://doi.org/10.1080/17470215208416600). *Quarterly Journal of Experimental Psychology, 4*(1).
- Proctor, R. W., & Schneider, D. W. (2018). [Hick's Law for Choice Reaction Time: A Review](https://pubmed.ncbi.nlm.nih.gov/28434379/). *Quarterly Journal of Experimental Psychology, 71*(6), 1281–1299.
- Scheibehenne, B., Greifeneder, R., & Todd, P. M. (2010). [Can There Ever Be Too Many Options? A Meta-Analytic Review of Choice Overload](https://ideas.repec.org/a/oup/jconrs/v37y2010i3p409-425.html). *Journal of Consumer Research, 37*(3), 409–425.
- Sweller, J., van Merriënboer, J. J. G., & Paas, F. (1998). [Cognitive Architecture and Instructional Design](https://research.utwente.nl/en/publications/cognitive-architecture-and-instructional-design/). *Educational Psychology Review, 10*, 251–296.
- Wolfe, J. M. (2021). [Guided Search 6.0: An Updated Model of Visual Search](https://pmc.ncbi.nlm.nih.gov/articles/PMC8965574/). *Psychonomic Bulletin & Review, 28*, 1060–1092.

### Usability and human-centered design

- International Organization for Standardization. [ISO 9241-210:2019: Human-Centred Design for Interactive Systems](https://www.iso.org/standard/77520.html).
- Nielsen Norman Group. [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/).
- Nielsen Norman Group. [F-Shaped Pattern of Reading on the Web](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/).
- Nielsen Norman Group. [Recognition Rather Than Recall](https://www.nngroup.com/articles/recognition-and-recall/).

### Accessibility and readability

- W3C. [Cognitive Accessibility at W3C](https://www.w3.org/WAI/cognitive/).
- W3C. [Clear and Understandable Content](https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/).
- W3C. [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/).
- W3C. [Understanding Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html).
- W3C. [Understanding Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification).
- W3C. [Understanding Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels).
- W3C. [Understanding Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html).
- W3C. [Understanding Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum).

### Ethics and consumer protection

- Federal Trade Commission. [Bringing Dark Patterns to Light](https://www.ftc.gov/reports/bringing-dark-patterns-light).
- OECD. [Dark Commercial Patterns](https://www.oecd.org/en/topics/dark-commercial-patterns.html).

---

## One-page takeaway

When a UI looks clean but the UX does not feel clean, diagnose it in this order:

1. **User and goal:** Who is trying to do what, under what conditions?
2. **Purpose:** Is the current screen's job immediately clear?
3. **Hierarchy:** Does attention go to the right information and action?
4. **Memory:** What is the interface unnecessarily asking the user to remember?
5. **Choice:** Are options understandable, comparable, and fairly presented?
6. **Prediction:** Can users tell what controls do and what will happen?
7. **Feedback:** Does the system clearly show input, progress, result, and state?
8. **Recovery:** Can users avoid, understand, and repair errors?
9. **Readability:** Are the language, headings, typography, and layout easy to process?
10. **Inclusion:** Does the design work across abilities, devices, languages, and stress?
11. **Ethics:** Does it support informed agency rather than exploit inattention?
12. **Evidence:** Have representative users completed realistic tasks with it?

The cleanest experience is not the one that shows the least. It is the one that helps people understand and act with the least unnecessary uncertainty.

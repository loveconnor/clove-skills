---
name: ux
description: Design and evaluate clear, ethical, accessible user experiences using evidence about attention, perception, memory, recognition, choice, mental models, feedback, errors, recovery, interruption, and trust. Use for flows, navigation, forms, dashboards, onboarding, settings, states, interaction design, information architecture, UX audits, or any product decision that changes how people understand or complete a task.
---

# UX

## Operating principle

Make the right information and action available at the right moment in a form that fits the user's goal, knowledge, abilities, and context. Clean UX combines relevant information, visible structure, predictable behavior, and timely feedback while removing avoidable mental work.

## Load the detailed research

Read `references/research.md` for substantial UX work, audits, unfamiliar behavior, consequential decisions, or questions about psychological evidence. Use the headings to locate the needed topic.

Useful searches:

```sh
rg -n '^## (3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18)\.' references/research.md
rg -n '^## 19\.|^## 21\.|^## 22\.|^## 24\.' references/research.md
rg -n 'attention|recognition|memory|feedback|recovery|interrupt|ethic|accessib' references/research.md
```

## Workflow

### 1. Frame the outcome

Identify the user, goal, starting knowledge, context, frequency, stress, abilities, constraints, desired outcome, and evidence. State what successful behavior looks like.

### 2. Model the task

Map trigger, goal, objects, information needs, decisions, actions, dependencies, system states, likely errors, recovery, interruption, and completion. Organize around user concepts rather than internal teams or database structure.

### 3. Build structure before polish

Give each view one clear purpose. Establish information order, navigation, grouping, hierarchy, primary action, and full state model in low fidelity. Keep related items close and stable. Use containers only when they add a meaningful boundary.

### 4. Reduce avoidable mental work

Externalize options, constraints, history, context, progress, and comparison. Prefer recognition for occasional or consequential work and support expert shortcuts for frequent users. Chunk by meaning, not arbitrary counts. Use progressive disclosure only when it reduces effort.

### 5. Make action predictable

Use familiar patterns where predictability matters. Give controls perceivable cues, natural mappings, comfortable targets, consistent terms, and stable placement. Preserve spatial memory across states.

### 6. Close every loop

Acknowledge input, communicate progress when useful, show outcome and current state, and make the next step clear. Provide cancel, back, undo, retry, pause, skip, exit, or escalation when the flow calls for them.

### 7. Prevent and repair errors

Distinguish slips from mistaken mental models. Prevent slips with spacing, target size, constraints, safer defaults, confirmation proportional to consequence, and undo. Prevent mistakes with clear labels, examples, consequences, and system explanations. Preserve user input and explain recovery.

### 8. Support interruption and inclusion

Avoid unnecessary interruption. Preserve drafts, progress, filters, scroll position, and context where useful. Ensure the flow works with keyboard, zoom, reflow, screen readers, reduced motion, forced colors, long or translated content, and stressful conditions.

### 9. Test behavior

Use representative tasks and users. Observe comprehension, task success, time, errors, recovery, confidence, accessibility, and trust separately. Prioritize problems by user impact, frequency, persistence, and risk. Re-test material changes.

## Design rules

### Attention and perception

- Treat attention as a budget; make salience match importance.
- Guide the eye in the user's decision order.
- Use proximity, similarity, common region, connectedness, continuity, and figure-ground intentionally.
- Use motion sparingly because it captures attention strongly.
- Support scanning with descriptive headings and visible landmarks.

### Memory and choice

- Do not make people remember information the interface can show.
- Do not turn memory research into a fixed menu-count law.
- Make choices understandable and fairly comparable.
- Use defaults ethically and make their consequences visible.
- Break work into steps only when doing so reduces mental work or error risk.

### Feedback, control, and trust

- Make system status, saved state, data freshness, and automation confidence visible when relevant.
- Match feedback timing to the interaction; perceived responsiveness matters.
- Explain destructive, financial, privacy, and subscription consequences before commitment.
- Build trust through accurate prediction, truthful language, control, and recovery—not reassurance alone.

### Accessibility baseline

- Use semantic structure and native controls.
- Make the core task work without color, motion, hover, drag, pointer precision, sound, or perfect vision.
- Keep focus visible and unobscured.
- Treat `24 × 24 CSS px` as the WCAG 2.2 minimum target size with defined exceptions; prefer larger targets for touch and important actions.
- Support 200% and 400% zoom/reflow, text enlargement, reduced motion, high contrast, and assistive technology.
- Use contrast, labels, status text, and redundant cues as part of the design.

### Ethical choice architecture

- Support informed agency.
- Avoid false urgency, confirm-shaming, disguised ads, obstruction, forced continuity, hidden costs, asymmetric cancellation, or consent manipulation.
- Evaluate whether the design would still feel fair if the business-preferred choice were reversed.
- Do not treat engagement as user value without evidence.

## Evaluation sequence

Diagnose in this order:

1. User and goal.
2. View purpose.
3. Hierarchy and orientation.
4. Memory demands.
5. Choice clarity.
6. Prediction and affordance.
7. Feedback and state.
8. Error prevention and recovery.
9. Readability and density.
10. Inclusion and resilience.
11. Ethics and trust.
12. Evidence from realistic task completion.

Do not call a sparse interface clean if it hides context, increases recall, weakens recovery, or excludes users.

---
name: craft-design-look-and-feel
description: Establish, critique, and refine the visual and interaction quality of an interface through purpose, composition, hierarchy, spacing, typography, color, imagery, consistency, feedback, motion, responsiveness, character, and craft. Use for visual direction, page or component design, redesigns, polish passes, design reviews, style systems, brand expression, or diagnosing why an interface feels generic, off, unbalanced, or untrustworthy.
---

# Craft Design Look and Feel

## Operating principle

Create a fitting experience with low avoidable friction and enough character to be recognizable. Balance clarity, coherence, appropriateness, responsiveness, controlled expression, and care.

## Load the detailed research

Read `references/research.md` for substantial visual work, critique, direction setting, measurement, or questions about perception and aesthetic evidence.

Useful searches:

```sh
rg -n '^## (2|3|4|5|6|7)\.' references/research.md
rg -n '^## 8\.|^## 9\.|^## 10\.|^## 11\.' references/research.md
rg -n 'hierarchy|composition|spacing|typography|color|imagery|motion|trust|accessib' references/research.md
```

## Workflow

### 1. Define the desired experience

Record the primary user and context, most important job and content, emotional objective, trust risks, accessibility and environmental constraints, three “is” adjectives, and three “is not” adjectives.

### 2. Establish information before styling

Inventory and group content and actions. Set meaningful sequence, primary outcomes, navigation, states, errors, and recovery.

### 3. Build hierarchy in grayscale

Set composition, scale, text roles, grouping, alignment, density, and primary action without relying on color. Test small and large viewports.

### 4. Define a constrained language

Specify type roles, spacing scale, content widths, grid, semantic colors, radius, border, elevation, icon and image direction, and motion families. Use constraints to create coherence.

### 5. Select one primary source of distinction

Choose art direction, typography, color behavior, composition, illustration, voice, or motion as the lead expressive system. Make other elements support it.

### 6. Design the complete state model

Resolve default, hover, focus, pressed, selected, disabled when necessary, loading, progress, empty, first-use, success, warning, error, partial/offline data, permission, long content, and localization.

### 7. Prototype real behavior

Test timing, focus, scroll, validation, state continuity, motion comfort, loading, and recovery. Static screens are insufficient for interactive quality.

### 8. Measure qualities separately

Evaluate comprehension, hierarchy, task performance, confidence, aesthetics, fit, accessibility, and memory independently. Do not reduce them to “Do you like it?”

### 9. Refine large to small

Polish in this order: purpose and content; flow and information architecture; composition and hierarchy; typography and spacing; color and imagery; components and states; motion and feedback; optical alignment.

## Quality criteria

### Purpose and composition

- Make the design's job, audience, and point of view apparent.
- Guide attention through a deliberate reading or action order.
- Use a grid and alignment system even when the composition is asymmetric.
- Let intentional exceptions remain visibly related to the system.

### Rhythm and density

- Use proximity to communicate relationships.
- Repeat spacing rhythms and correct optical imbalance deliberately.
- Treat density as a task choice, not a cleanliness score.
- Use whitespace to clarify structure, not merely create emptiness.
- Use containers only for meaningful groups, objects, interaction boundaries, or layers.

### Coherence and character

- Repeat rules enough to build recognition.
- Keep visual vocabulary limited and purposeful.
- Create distinction at selected moments rather than making every element expressive.
- Fit tone to content, stakes, audience, platform, and brand behavior.
- Avoid trend collage and category imitation without a product-specific idea.

### Interaction quality

- Make controls look and behave interactive.
- Provide timely input, progress, result, and state feedback.
- Preserve predictability, control, undo, recovery, focus, and orientation.
- Use motion to explain cause, continuity, hierarchy, state, or feedback.
- Make frequent actions fast and layouts stable.

### Craft and trust

- Verify spelling, links, labels, data, crops, icon geometry, state styling, spacing, and alignment.
- Resolve edge cases with the same care as the happy path.
- Make pricing, privacy, permissions, and destructive consequences clear.
- Treat accessibility, responsive behavior, and performance as visible quality.

## Fast critique methods

- **50 ms/first impression:** assess complexity, category, and broad appeal without claiming comprehension.
- **Five-second test:** ask what the page is, who it serves, and what matters.
- **Squint/blur test:** inspect hierarchy, balance, and emphasis.
- **Grayscale test:** confirm structure does not depend on hue.
- **Keyboard and zoom test:** expose focus, reflow, and reading-order problems.
- **Content stress test:** use long, missing, translated, and real data.
- **Adjective test:** compare perceived qualities with the intended direction.
- **Preference/performance split:** measure liking separately from task success.

Do not polish shadows while purpose, hierarchy, or behavior remains unresolved.

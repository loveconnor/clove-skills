---
name: creative-web
description: Conceive, prototype, build, and evaluate distinctive web experiences that balance novelty with usefulness and appropriateness. Use for expressive landing pages, portfolios, campaigns, editorial stories, interactive narratives, art-directed sites, motion, spatial or 3D experiences, unconventional layouts, creative direction, or any web task where memorable expression must remain usable, accessible, responsive, progressively enhanced, and performant.
---

# Creative Web

## Operating principle

Create enough familiarity to be understood and enough surprise to be remembered. Use a clear concept, real content, a familiar backbone, a coherent grammar, deliberate agency, and one or two signature moments.

## Load the detailed research

Read `references/research.md` for concept research, visual or interaction techniques, technology selection, accessibility, performance, responsive art direction, production workflow, and critique.

Useful searches:

```sh
rg -n '^## (2|3|4|5|6|7|8|9|10)\.' references/research.md
rg -n '^## 11\.|^## 12\.|^## 13\.|^## 14\.|^## 15\.' references/research.md
rg -n 'motion|scroll|WebGL|canvas|SVG|performance|progressive|responsive|accessib' references/research.md
```

## Workflow

### 1. Frame the outcome

Define audience, purpose, critical tasks, real content and proof, desired behavior, feeling and memory, accessibility and technical constraints, risks, and measurable success.

### 2. Research the territory

Study users, content, brand, category conventions, cultural context, accessibility needs, devices, and technical constraints. Use interviews, observation, artifact review, competitive/cultural analysis, co-design, concept testing, first-impression testing, and usability testing as appropriate.

### 3. Write distinct concept theses

For each serious direction, state the organizing rule or metaphor, why it fits, its signature moment, stable backbone, risks, fallbacks, and invalidation criteria. Change structure and experience logic, not only colors.

### 4. Prototype the highest-risk claim

Match fidelity to uncertainty. Use wireframes for structure, concept boards for perception, a coded slice for scroll or motion, a device spike for 3D performance, or a semantic prototype for unusual accessible interaction. Do not build the whole site to answer one question.

### 5. Test concept and behavior

Measure first impression, comprehension, desirability, task success, orientation, motion comfort, accessibility, and message memory separately. Include edge-case users affected by unusual input, dense visuals, motion, or device limits.

### 6. Define the grammar

Document grid and responsive rules, type and content roles, color semantics, image/illustration direction, motion purposes, interaction patterns, component behavior, capability tiers, fallbacks, performance budgets, and accessibility criteria.

### 7. Build the semantic backbone

Make all core content and tasks work with resilient HTML, CSS, URLs, links, and forms. Verify reading order, keyboard flow, responsiveness, and content before adding heavy enhancement.

### 8. Enhance in removable layers

Feature-detect optional capabilities. Keep useful fallbacks for failed JavaScript, reduced motion, unavailable WebGL/WebGPU, slow or missing media, touch instead of pointer, font failure, and non-primary browsers.

### 9. Profile and edit continuously

Test accessibility, content, browsers, devices, usability, and performance throughout. Remove effects that do not support concept, meaning, orientation, agency, state, or feedback.

### 10. Learn after launch

Track task success, conversion, exploration sequence, return behavior, completion and abandonment by device, field performance, support and accessibility issues, intended-message memory, maintenance cost, and editor experience. Do not use time or scroll depth alone as proof of engagement.

## Creative direction rules

- Begin with one organizing idea.
- Let real content shape form; do not pour placeholders into a trendy shell.
- Make one part strange and keep the rest legible.
- Create a reusable grammar rather than a sequence of unrelated effects.
- Design rhythm across the whole visit, including calm moments.
- Preserve a direct route for task-focused users alongside exploration.
- Give unusual interaction perceivable instructions and familiar exits.
- Prefer one memorable idea over many competing novelties.

## Technology selection

- Use semantic HTML and modern CSS for the durable core.
- Use SVG for scalable semantic graphics and moderate interaction.
- Use Canvas for dense pixels or many transient objects when DOM/SVG is unsuitable; provide an accessible equivalent.
- Use WebGL/3D only when spatial depth is part of the concept and target devices can support it.
- Treat WebGPU and WebXR as progressive enhancements with explicit fallbacks.
- Add animation libraries only when native CSS/Web Animations cannot express the needed orchestration reliably.
- Choose technology proportional to the user value, risk, maintenance, and performance budget.

## Accessibility and agency

- Preserve semantic and logical reading order under unusual visual composition.
- Make keyboard and alternate-input equivalents complete.
- Never require hover, drag, sound, cursor precision, animation, or spatial understanding for essential content.
- Keep scrolling native and controllable; avoid scroll-jacking.
- Provide pause, skip, reset, undo, exit, and direct navigation where needed.
- Respect reduced motion meaningfully and prevent vestibular or seizure risks.
- Keep text selectable, reflowable, and readable over every frame and background.
- Caption or transcribe media; describe meaningful canvas, SVG, charts, 3D, or spatial experiences.

## Performance starting targets

Verify current standards when performance is in scope. Use these as current 75th-percentile targets:

- LCP: `≤ 2.5 s`.
- INP: `≤ 200 ms`.
- CLS: `≤ 0.1`.

Budget media, fonts, JavaScript, 3D assets, third parties, GPU work, battery, and memory before production. Do not lazy-load the likely LCP asset. Test deployed builds and low-capability devices.

## Reject these failures

- Trend collage or award-site imitation without a fitting idea.
- Mystery navigation and orientation loss.
- Cinematic loading screens that delay useful content.
- Desktop art reduced to a generic mobile stack.
- Custom cursors or 3D used as wallpaper.
- Motion everywhere, forced scroll narratives, or sound as a requirement.
- Accessibility deferred until after visual production.
- Performance “solved” only by compression after architectural excess.
- Creativity measured only by attention or stakeholder preference.

Creativity succeeds only when novelty remains useful, appropriate, accessible, and maintainable.

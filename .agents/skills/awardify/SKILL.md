---
name: awardify
description: Transform an existing website into a distinctive, award-ready experience by finding its ownable idea, strengthening content and task structure, establishing coherent art direction, creating one primary expressive lever and signature moment, implementing responsive and progressive enhancements, and verifying usability, accessibility, performance, resilience, and depth of finish. Use when Codex is asked to make a site award-winning, Awwwards-quality, CSS Design Awards-quality, more memorable, more art-directed, more creatively ambitious, or less generic through a substantial web redesign or polish implementation. Do not use for a general audit with no requested changes.
---

# Awardify

## Operating principle

Make the site unmistakably itself, then make every detail prove the idea. Preserve clarity, agency, access, speed, truth, and maintainability while concentrating expression into one coherent system and one memorable moment.

Never promise an award. Awards are comparative editorial outcomes. Treat “award-winning” as a quality direction requiring specific concept, coherent art direction, useful interaction, technical craft, and depth of finish—not as a guaranteed result or visual preset.

## Load the research

Read `references/research.md` completely before a substantial redesign, unfamiliar creative direction, technology choice, or award-submission task.

For a narrower polish request, load the relevant research sections plus the transformation model and quality gates:

```sh
rg -n '^## ' references/research.md
rg -n 'criteria|Awwwards|CSS Design Awards|rubric|quality gate' references/research.md
rg -n 'specific point of view|controlled surprise|backbone|grammar|rhythm|signature' references/research.md
rg -n 'composition|typography|color|imagery|motion|scroll|sound' references/research.md
rg -n 'SVG|Canvas|WebGL|WebGPU|framework|media|performance' references/research.md
rg -n 'truth packet|concept|prototype|semantic backbone|polish|verification' references/research.md
rg -n 'accessib|responsive|reduced motion|fallback|Core Web Vitals' references/research.md
rg -n 'failure mode|trend collage|mystery navigation|custom cursor|3D wallpaper' references/research.md
```

Re-verify current award criteria, browser support, standards, library capabilities, and performance thresholds before treating them as current facts.

## Qualify the request

Inspect existing project context first. Establish:

- target repository, site, routes, environment, and deployment constraints;
- whether the user wants strategy, concepts, implementation, polish, submission preparation, or a combination;
- primary audience, visit modes, and critical tasks;
- real content, proof, data, media, brand assets, and source of truth;
- what must remain unchanged;
- supported devices, browsers, inputs, languages, and access needs;
- allowed changes to content, structure, components, interaction, stack, and dependencies;
- existing design system and technical ownership;
- success measures and definition of done.

Ask before making a decision when missing context would materially change the concept, product behavior, scope, risk, stack, public claims, or definition of done. Do not invent brand strategy, testimonials, customers, metrics, capabilities, awards, prices, team members, or live data.

### Classify the experience

Choose a fitting expression level:

- **Portfolio, studio, campaign, editorial, cultural, or launch site:** allow stronger art direction, pacing, narrative, and optional creative technology.
- **Commerce:** protect search, product information, price, variants, availability, cart, checkout, returns, and customer confidence; concentrate expression around merchandising and product understanding.
- **Product application or professional tool:** keep frequent tasks fast, predictable, and dense where useful; express character through hierarchy, typography, color behavior, data, feedback, and selected moments rather than continuous spectacle.
- **Public, financial, medical, legal, safety, or high-stakes service:** prioritize comprehension, trust, access, recovery, and qualified review. Do not import experiential patterns that increase uncertainty or delay work.

If the request is audit-only, do not mutate the product. Return evidence-backed findings instead.

## Transformation workflow

### 1. Establish the truth packet

Record:

- real user and context;
- concrete job and outcome;
- content, proof, terminology, claims, and owners;
- product objects, actions, permissions, and states;
- brand history, behavior, assets, voice, and material culture;
- technical architecture, components, tokens, dependencies, and constraints;
- devices, inputs, networks, browsers, accessibility, privacy, and performance needs;
- analytics, research, support evidence, and known defects;
- unknowns and invalid assumptions.

Use real content early. Mark samples as samples. Do not let missing inputs become polished fiction.

### 2. Audit the current experience

Inspect the running site and source when available. Identify:

- strengths to preserve;
- broken critical tasks and incomplete states;
- generic or inconsistent expression;
- content that already contains a strong creative idea;
- gaps hidden by visual polish;
- navigation, semantics, accessibility, responsive, performance, and maintenance constraints;
- cost and risk of replacing the current stack.

Separate experience quality from implementation quality. Do not redesign around a screenshot while ignoring routes, content, behavior, state, and real devices.

### 3. Find the ownable material

List what belongs specifically to this project:

- product form, behavior, or process;
- founder, team, or community voice;
- proprietary data or utility;
- physical material, construction, or craft;
- archive, place, culture, history, or collection;
- customer vocabulary and real questions;
- commissioned photography, illustration, typography, 3D, or sound;
- a technical capability that proves the offering.

Reject any direction that would still work unchanged after a logo swap.

### 4. Research the territory

Study category conventions, direct competitors, adjacent cultural references, anti-references, audience expectations, available media, and technical feasibility. Use award galleries to extract structural principles, never to copy a site’s layout, motion signature, or surface style.

For each reference, record:

- exact principle being studied;
- why it fits or conflicts;
- what remains specific to the source and must not be copied;
- accessibility, performance, and maintenance implications.

### 5. Write concept theses

When direction is unsettled, create two or three structurally different concepts. Do not count palette or font swaps as separate concepts.

Each thesis must state:

- real subject and audience;
- organizing rule or metaphor;
- why it fits;
- primary expressive lever;
- signature moment;
- stable conventional backbone;
- visual, content, interaction, and motion grammar;
- responsive transformation;
- reduced-motion and low-capability equivalent;
- technical approach;
- risks, costs, and invalidation test;
- explicit anti-goals.

Prefer a thesis that generates decisions and exclusions. Reject vague directions such as “premium, immersive, modern, and bold.”

### 6. Select with evidence

Compare concepts on:

- specificity and authorship;
- comprehension and usefulness;
- category fit without imitation;
- creative difference;
- content truth;
- accessibility and agency;
- responsive potential;
- technical feasibility;
- performance and maintenance cost;
- memorability of the intended idea rather than one effect.

Do not let stakeholder taste or a mockup’s polish replace these criteria.

### 7. Protect the stable backbone

Before expressive work, make the core understandable and durable:

- meaningful URLs and browser history;
- semantic landmarks and headings;
- logical source and reading order;
- real selectable text;
- native links, buttons, forms, and scrolling;
- visible navigation and current location;
- direct routes for task-focused users;
- complete states, feedback, errors, recovery, and saved work;
- essential tasks independent of hover, sound, drag, animation, spatial understanding, or pointer precision.

The expressive layer must fail without corrupting the core.

### 8. Define the system

Write the creative grammar before scattering effects:

- grid, alignment, overlap, crop, and responsive rules;
- content hierarchy and narrative pace;
- type roles, scale, measure, line height, responsive behavior, and fallbacks;
- spacing and density rhythm;
- semantic and expressive color roles across states and themes;
- photography, illustration, icon, texture, 3D, and media direction;
- component identity and complete state behavior;
- motion purposes, duration families, easing, continuity, interruption, and reduced motion;
- capability tiers and fallbacks;
- accessibility acceptance criteria;
- media, JavaScript, font, rendering, memory, and performance budgets.

Repeat rules enough for people to learn the system. Make exceptions deliberate.

### 9. Prototype the riskiest claim

Match prototype fidelity to uncertainty:

- use a low-fidelity content/navigation prototype for structural comprehension;
- use art-direction or motion boards with real content for perception and tone;
- build a small coded slice for scroll, route, typography, or interaction choreography;
- build a production-like device spike for WebGL, shaders, video, or heavy media;
- use a semantic prototype for unusual keyboard or assistive-technology behavior;
- use a storyboard plus functional slice to test whether the signature moment communicates meaning.

Do not build the whole site to answer one risky question.

### 10. Implement in removable layers

Prefer the existing stack when it can support the thesis. Add dependencies only for defined capabilities.

Build in this sequence unless the concept requires another:

1. content, semantics, routes, tasks, and state;
2. responsive composition;
3. final typography, color, and media;
4. component feedback and transitions;
5. section choreography;
6. signature interaction;
7. optional sound, canvas, WebGL, WebGPU, AI, multiplayer, or spatial layer;
8. quality tiers and fallbacks.

Keep each layer removable. Use semantic HTML and modern CSS for the durable core. Feature-detect optional capabilities.

### 11. Polish deeply

Resolve:

- reading order, line breaks, and optical alignment;
- image crops and quality at each target ratio;
- hover, focus-visible, press, selected, visited, disabled, and validation states;
- loading, empty, partial, stale, error, offline, permission, expiry, and success states;
- navigation transitions, browser history, return, interruption, and resume;
- animation timing, concurrency, interruption, and repeated input;
- font and media loading without invisible content or layout instability;
- long, missing, translated, and user-generated content;
- touch, pointer, keyboard, screen reader, and alternate input;
- reduced motion, forced colors, contrast, zoom, reflow, and text spacing;
- metadata, titles, share images, icons, 404 pages, and browser chrome;
- spelling, links, credits, media rights, analytics, and content operations.

Depth of finish includes the least glamorous surfaces.

### 12. Edit ruthlessly

Remove:

- effects without a role in meaning, orientation, state, continuity, feedback, or atmosphere;
- duplicate animation systems and overlapping libraries;
- decorative 3D or data;
- forced loaders and scroll-jacking;
- mystery navigation and cursor-dependent affordance;
- fake content, dead controls, and simulated success;
- one-off tokens and unjustified exceptions;
- unused dependencies and render work;
- desktop-only ideas with no intentional transformation.

One strong expressive lever and one or two signature moments usually outperform continuous novelty.

### 13. Verify independently

Use separate evidence for separate qualities:

- first-impression testing for broad visual impact;
- five-second testing for purpose and hierarchy;
- task testing for usability;
- expectation testing for labels and predictability;
- message-memory testing for intended memorability;
- adjective testing for perceived brand fit;
- automated and manual accessibility checks;
- keyboard, screen-reader, zoom, reflow, reduced-motion, and forced-color walkthroughs;
- deployed lab and field-like performance tests;
- representative device and browser tests;
- content, claim, credit, and rights review;
- format, lint, type, unit, integration, end-to-end, and build checks;
- code review, dependency review, and cleanup checks.

Never claim a test that was not performed. Do not use the generating system as the only reviewer.

## Creative direction rules

- Begin with one organizing idea.
- Let real content shape form.
- Make one part strange and keep the rest legible.
- Preserve a direct task path beside exploration.
- Use repetition to create a grammar.
- Alternate spectacle with stillness and overview with detail.
- Concentrate craft in one or two signature moments.
- Make typography, color, imagery, interaction, motion, and code tell the same story.
- Treat mobile, reduced motion, loading, errors, and fallbacks as art-directed states.
- Use the least complex technology that expresses the concept reliably.

## Technology ladder

Choose in ascending complexity:

1. semantic HTML and modern CSS;
2. CSS transitions, keyframes, and native browser behavior;
3. progressive JavaScript and Web Animations;
4. View Transitions or scroll-driven animation with fallbacks;
5. SVG for semantic scalable graphics;
6. an animation library for justified orchestration;
7. Canvas for dense transient pixels with a structured equivalent;
8. WebGL or Three.js when spatial depth proves the concept;
9. WebGPU, WebXR, AI, sound, or multiplayer as capability-detected enhancement.

No-code and site builders are acceptable when they meet the content, accessibility, performance, and maintenance requirements. Technology labels do not win awards; fitting execution does.

## Accessibility, agency, and resilience

Target WCAG 2.2 AA unless the project requires more. Re-verify the current standard when implementing.

- Keep semantic source order logical under expressive composition.
- Make the full core task work by keyboard.
- Keep focus visible, logical, and unobscured.
- Provide non-hover and non-drag access.
- Keep scrolling native and controllable.
- Provide pause, skip, reset, undo, exit, direct navigation, and media control where needed.
- Make sound optional and nonessential.
- Replace large translation, zoom, rotation, parallax, and continuous movement under reduced motion while preserving content and state.
- Keep essential information outside canvas, 3D, audio, and animation.
- Maintain selectable, reflowable text and stable contrast over every media frame.
- Provide captions, transcripts, alternatives, and structured equivalents.
- Verify 200% text resize, 400% zoom/reflow, text-spacing overrides, high contrast, and forced colors.

Accessibility affects the concept. Do not defer it until polish.

## Performance and media

Use current Core Web Vitals and project-specific budgets. At the time of the bundled research, “good” field thresholds are LCP at most 2.5 seconds, INP at most 200 milliseconds, and CLS at most 0.1 at the 75th percentile. Re-verify before relying on these values.

Budget:

- initial JavaScript and execution;
- critical CSS and requests;
- font families, weights, axes, and subsets;
- likely LCP media;
- total image and video transfer;
- 3D geometry and texture memory;
- long tasks and animation frames;
- GPU, battery, thermal, and memory cost;
- third-party scripts.

Prioritize likely LCP media, provide explicit dimensions and poster frames, art-direct responsive crops, defer offscreen media, compress geometry and textures, cap device pixel ratio, adapt particles and quality, and pause render loops offscreen or when hidden.

Profile the signature interaction on representative mid-range and lower-capability hardware. A single desktop Lighthouse run is insufficient.

## Failure modes

Reject:

- trend collage without a thesis;
- direct imitation of an award reference;
- generic oversized type, grain, blobs, brutalist rules, glass, or gradients without project meaning;
- mystery navigation, scroll-jacking, cinematic loaders, and custom-cursor theater;
- WebGL, 3D, AI, sound, or data as wallpaper;
- motion everywhere;
- tiny low-contrast editorial text;
- collapsed-desktop mobile layouts;
- fabricated proof and placeholder storytelling;
- accessibility theater;
- performance repair only through compression after architectural excess;
- one-shot generated screenshots without product depth;
- a result the team cannot explain, maintain, or remove.

## Evaluation model

Do not treat this as an official jury formula. Score each dimension 0–5 only when a score helps comparison, and attach evidence:

- specific concept;
- design and art direction;
- cross-system coherence;
- usability and task integrity;
- meaningful creativity or innovation;
- truthful, structured content;
- technical craft;
- responsive art direction;
- performance;
- memorability of the intended idea.

Never let a total score compensate for a failed quality gate.

### Non-compensable gates

Do not call the result award-ready while any applicable condition remains:

- fabricated claims, people, results, or capabilities;
- broken, deceptive, or unsafe critical task;
- inaccessible core content or interaction;
- lost user input or unrecoverable action;
- no meaningful mobile or reduced-motion experience;
- severe performance failure on target devices;
- missing media rights, credits, or provenance;
- a concept copied closely enough to undermine authorship;
- fake interactions or dead controls;
- fragile enhancement carrying essential meaning without fallback;
- an implementation the contributor cannot explain or maintain.

## Optional award-submission preparation

Only prepare a submission when the user requests it. Re-check the target platform’s current requirements and state that selection is not guaranteed.

Document:

- problem and audience;
- organizing idea;
- genuine contribution or innovation;
- relationship among content, interaction, design, and technology;
- signature moment and important craft details;
- accessibility, responsive, and performance work;
- collaborators, credits, media rights, and roles;
- live URL and representative desktop/mobile media.

Do not overclaim innovation or hide unresolved limitations.

## Final handoff

Lead with what changed and why. Include:

- selected thesis and anti-goals;
- important files, pages, and systems;
- preserved product behavior;
- signature moment and progressive fallbacks;
- actual verification performed and results;
- before/after dimension assessment when useful;
- assumptions, limits, browser support, maintenance cost, and unresolved risks;
- a next step only when it materially advances the work.


# Awardify research reference

This reference synthesizes the project’s July 20, 2026 research into Awwwards, CSS Design Awards, selected winners, creator accounts, web standards, accessibility, and performance. Use it as evidence and design guidance, not as a promise that a jury will select a site.

## Contents

1. [Research limits](#1-research-limits)
2. [Published judging signals](#2-published-judging-signals)
3. [What award-winning style means](#3-what-award-winning-style-means)
4. [Recurring qualities](#4-recurring-qualities)
5. [Visual and interaction language](#5-visual-and-interaction-language)
6. [Useful experience archetypes](#6-useful-experience-archetypes)
7. [Technology selection](#7-technology-selection)
8. [Production effort](#8-production-effort)
9. [Accessibility and agency](#9-accessibility-and-agency)
10. [Failure modes](#10-failure-modes)
11. [Synthesis rubric](#11-synthesis-rubric)
12. [Verification checklist](#12-verification-checklist)
13. [Sources](#13-sources)

## 1. Research limits

The evidence comes from four layers:

1. published award criteria and award pages;
2. a purposive sample of highly rated and year-winning projects;
3. creator and production case studies;
4. current standards and platform guidance.

Important limits:

- Award platforms can change criteria, categories, juries, weights, thresholds, and submission rules. Re-check live requirements.
- The sample over-represents portfolios, agencies, campaigns, luxury product showcases, and experiential sites. Do not transplant their patterns unchanged into applications, public services, checkout, or high-stakes tools.
- Winning is a comparative editorial outcome. No workflow can guarantee it.
- Award success does not prove business performance, accessibility, maintainability, or user success. Treat these as independent quality gates.
- Examples support principle discovery, not imitation.

The useful working formula is:

> **Award potential = specific concept × coherent art direction × useful interaction × technical craft × depth of finish**

The multiplication sign matters. A critical failure in one dimension can invalidate the whole experience.

## 2. Published judging signals

### Awwwards

Awwwards project pages in the research showed this main evaluation:

| Criterion | Published weight | Practical implication |
|---|---:|---|
| Design | 40% | Art direction, composition, typography, color, imagery, hierarchy, and detail carry the strongest stated weight. |
| Usability | 30% | The experience must remain understandable, navigable, responsive, and controllable. |
| Creativity | 20% | The work needs a relevant idea or execution beyond category convention. |
| Content | 10% | Real messaging, storytelling, structure, and proof remain judged. |

Awwwards project pages also exposed a developer evaluation covering:

- semantics and SEO;
- animations and transitions;
- accessibility;
- web performance optimization;
- responsive design;
- markup and metadata.

The implication is that an entry can be judged as both an experience and a technical artifact. Visual spectacle does not make implementation quality irrelevant.

### CSS Design Awards

CSS Design Awards describes its public categories as:

- **UI:** aesthetics and effects;
- **UX:** experience and functionality;
- **Innovation:** new development and design ideas.

Its Website of the Day recognition uses judging-panel scores, while public UI, UX, and Innovation recognitions combine judge and public signals. Re-check current thresholds before preparing a submission.

### Combined interpretation

Run two reviews in parallel:

1. **Experience:** design, usability, creativity, content, fit, and memorability.
2. **Implementation:** semantics, accessibility, responsiveness, animation quality, performance, metadata, resilience, and maintainability.

Neither review excuses the other.

## 3. What award-winning style means

### It is not one aesthetic

Recognized work spans colorful WebGL studios, restrained luxury product worlds, typographic portfolios, useful calculators, playful illustrated services, scroll-led stories, editorial archives, commerce, multiplayer experiences, and AI-assisted navigation.

The 2024 CSS Design Awards results illustrate this range: Buttermax received overall recognition, Cartier was recognized for UI, ATMOS Lamp for UX, Active Theory V6 for Innovation, and Antoine Wodniack for portfolio work. No single color palette, framework, layout, or motion pattern explains those outcomes.

### It is a relationship between idea and execution

The recurring structure is:

1. purpose or subject generates an organizing idea;
2. the idea controls composition, type, imagery, motion, interaction, and pacing;
3. familiar structure keeps the experience understandable;
4. one or two signature moments make the idea memorable;
5. repetition turns the idea into a grammar;
6. production detail makes every state feel authored.

The result can be maximal or minimal, dark or light, spatial or flat. The common quality is authored coherence.

### It is art direction, not decoration

Decoration asks what effect to add. Art direction asks what world the content should inhabit and which rules make that world recognizable.

A useful thesis states:

- real subject and audience;
- organizing metaphor or rule;
- why it fits;
- what remains conventional;
- signature moment;
- visual and motion grammar;
- responsive transformation;
- risks and fallbacks;
- invalidation conditions.

Weak:

> Make it premium, immersive, modern, and bold.

Stronger:

> Treat the furniture archive as a working design table: move from silhouette to construction detail without losing chronology. Keep the interface editorial and quiet; use one exploded-view transition as the signature interaction.

The stronger thesis generates decisions and exclusions.

## 4. Recurring qualities

### A specific point of view

Strong work is difficult to transfer to another brand after a logo swap. Distinction often comes from:

- product form, behavior, utility, or process;
- founder, studio, customer, or community voice;
- archival objects, place, craft, or material culture;
- proprietary data;
- commissioned photography, illustration, lettering, 3D, or sound;
- an interaction that demonstrates the offering.

Existing product behavior, customer language, brand assets, photography, code capability, and content relationships are creative material.

### Controlled surprise

Make one part strange and keep the rest legible:

- unusual navigation retains labels and exits;
- expressive display type sits above readable body text;
- broken-grid composition retains alignment anchors;
- complex motion preserves predictable action and state;
- nonlinear content provides a direct route or index.

Aim for a small number of rewarding moments, not surprise in every viewport.

### A stable backbone

The expressive layer works best over:

- meaningful URLs;
- semantic landmarks and headings;
- native links, buttons, forms, and scrolling;
- logical source order;
- readable selectable text;
- browser history;
- visible navigation and current location;
- tasks independent of hover, sound, drag, animation, spatial reasoning, or pointer precision.

If a shader, font, animation library, canvas, or media layer fails, the site should still communicate and work.

### A coherent grammar

Define repeated rules for:

- grid and alignment;
- type roles and responsive scale;
- spacing and density;
- semantic and expressive color;
- media crop and treatment;
- border, shape, surface, and depth;
- motion purpose, duration, easing, and continuity;
- section entry and exit;
- hover, focus, pressed, selected, disabled, loading, error, and success;
- low-capability and reduced-motion equivalents.

An exception becomes expressive only after people learn the rule it breaks.

### Rhythm

Strong experiences alternate:

- spectacle and stillness;
- overview and detail;
- dense and sparse passages;
- authored sequence and user choice;
- display moments and sustained reading;
- surprise and confirmation.

If every section is loud, nothing remains memorable. If every element animates, motion stops communicating priority.

### A signature moment

A signature moment is where the idea is felt most clearly. It may involve a product assembling, a collection reorganizing, a thumbnail preserving spatial continuity into a case study, variable type expressing a concept, or a useful tool producing a satisfying result.

It should be:

- rooted in subject or capability;
- easy to describe;
- difficult to confuse with another project;
- understandable without explanation;
- accessible through relevant inputs;
- replaceable with a meaningful fallback;
- performant on target hardware;
- used sparingly.

Spend disproportionate design, engineering, and testing effort here.

### Depth of finish

Polish is a production phase, not a last-hour pass. Active Theory reported that roughly 80% of a two-month portfolio project was spent polishing. The useful lesson is that the concept may arrive early while quality comes from tuning timing, content, media, fallbacks, device behavior, and edge states.

Finish includes utility pages, focus, loading, errors, browser navigation, reduced motion, mobile menus, 404s, metadata, share media, font failure, and real content operations.

## 5. Visual and interaction language

These are tools, not requirements. Select only what follows from the concept.

### Composition

Useful approaches include editorial grids, large but controlled scale contrast, anchored asymmetry, full-bleed media alternating with narrow text measure, overlap that preserves reading order, chapters that vary density within one system, persistent orientation anchors, and layouts that transform intentionally across viewports.

Establish hierarchy in grayscale before relying on color or motion.

### Typography

Typography can carry identity without heavy rendering cost. Techniques include:

- a project-specific display face paired with restrained reading text;
- variable axes used for responsive or semantic behavior;
- controlled scale contrast;
- editorial roles such as display, deck, body, caption, label, and data;
- kinetic type tied to state, pace, or meaning;
- custom lettering or alternates at signature moments;
- optical control of line breaks, leading, tracking, and alignment.

Requirements:

- essential text remains real and selectable;
- body text has comfortable apparent size, measure, line height, and contrast;
- headings survive long words and translation;
- motion has a static or reduced alternative;
- font loading avoids invisible text and harmful layout shift;
- licenses, subsets, and fallbacks are verified.

Antoine Wodniack’s recognized portfolio was tagged as one-page, SVG, and typographic. Impact does not require full-screen 3D.

### Color

Strong color is systematic even when loud:

- a limited base can amplify a signature accent;
- chapter color can orient a narrative;
- product-derived color increases specificity;
- perceptual or wide-gamut color can enhance capable displays with fallbacks;
- transitions can communicate movement between states;
- neutral surfaces can stage media.

Never use color as the only signal. Test contrast over moving media, gradients, transparency, blend modes, disabled controls, and focus.

### Imagery and material

Distinct media direction matters more than asset expense. Systems may use commissioned photography, repeatable illustration rules, archival provenance, macro construction details, responsive art direction, tactile texture, explanatory 3D, interpretable data graphics, or reviewed generative media with known rights.

Generic stock and ungrounded AI spectacle weaken authorship.

### Motion

Motion earns its place when it communicates causality, continuity, hierarchy, state, spatial relation, progress, feedback, narrative pace, or fitting brand behavior.

A motion grammar defines:

- micro, component, section, and signature timing families;
- easing;
- entrance and exit relationships;
- continuity elements;
- concurrency limits;
- interruption and repeated-input behavior;
- scroll relationship;
- reduced-motion equivalents.

Do not delay frequently used content for choreography or disguise loading with animation.

### Scroll

Good scroll-led work keeps browser control intact and maps enhancement onto a familiar input. It keeps content meaningful without animation, exposes progress, tolerates varying viewport heights and speeds, preserves keyboard and page navigation, avoids trapping tall content, simplifies under reduced motion, and offers direct navigation around long sequences.

Scroll-jacking changes direction, distance, momentum, or control to force a film. Avoid it.

### Direct manipulation and play

Drag, scrub, draw, rotate, sort, assemble, or multiplayer behavior can teach or reveal. Require visible affordance, immediate feedback, a non-drag alternative, keyboard or structured controls, touch support, reset, undo, imprecise-input tolerance, and essential information outside the spatial layer.

### Sound

Sound can add atmosphere, tactility, or spatial information. It is high-risk and must be opt-in, controllable, nonessential, and paired with visible or textual equivalents when informative.

Cartier’s Watches and Wonders used original sound as part of a unified dreamlike product world. The lesson is not to add audio; it is to align sound with a justified sensory thesis.

## 6. Useful experience archetypes

Archetypes describe structures, not templates.

| Archetype | Best fit | Signature possibilities | Main risk |
|---|---|---|---|
| Editorial world | Culture, architecture, fashion, long-form stories | Type-led chapters, marginalia, image rhythm | Poster layouts that fail to reflow |
| Product theater | Luxury, industrial design, launches | Assembly, exploded view, responsive light or material | 3D wallpaper with weak product information |
| Playable brand | Food, entertainment, studios, campaigns | Mini-game, drawing, physics, reactive characters | Play blocking tasks or becoming noise |
| Spatial portfolio | Studios, artists, production teams | Real-time scene, presence, object browsing | Orientation, performance, accessibility |
| Functional experiment | SaaS, marketplaces, finance, utilities | Calculator, configurator, live comparison | Novelty overwhelming answer quality |
| Typographic performance | Portfolios, editorial, cultural events | Variable axes, kinetic language, responsive composition | Readability and localization failure |
| Data narrative | Research, climate, archives, reports | Scrollytelling, comparison, generated form | Decoration masquerading as analysis |
| Crafted commerce | Fashion, objects, hospitality | Product stories, art-directed collections | Obscured search, price, variants, cart, or returns |

Contra’s Project Cost Calculator is evidence that utility itself can become the creative center. Its outcome—reducing uncertainty in project-based hiring—was part of the design value.

## 7. Technology selection

> Choose the least complex technology that expresses the concept reliably.

Do not prescribe technology because it appears in galleries. Follow content, interaction, team capability, performance budget, browser support, and maintenance.

### Durable core

| Layer | Role |
|---|---|
| Semantic HTML | Structure, landmarks, headings, links, forms, figures, captions, tables, native behavior |
| Modern CSS | Grid, subgrid, container queries, fluid sizing, custom properties, masks, blend modes, responsive art direction |
| Progressive JavaScript | State, orchestration, data, media control, complex enhancement |
| URLs and server-rendered critical content | Navigation, sharing, history, search, resilience, fast first render |

The site should remain meaningful before optional graphics and motion initialize.

### Frameworks and site builders

Award galleries include React, WordPress, Shopify, Webflow, Framer, and other stacks. This indicates tool neutrality, not equal suitability.

Use static or server rendering for content-led work, a CMS for real editorial operations, selective hydration when most content is static, a framework when shared state justifies it, a commerce platform for operational commerce, and a separate graphics runtime inside a light document shell for spatial work.

No-code is not disqualifying. Brittle behavior, inaccessible output, performance debt, and lack of ownership are the risks.

### Motion technologies

Use in ascending complexity:

1. CSS transitions and keyframes;
2. Web Animations for runtime control;
3. View Transitions for state or route continuity with fallback;
4. CSS scroll-driven animation with static fallback;
5. a library such as GSAP, Motion, or Anime.js when synchronized timelines, springs, or compatibility justify the dependency.

Libraries improve authoring; they do not supply motion direction, interruption, or reduced-motion behavior.

### SVG

Use for logos, icons, responsive illustration, diagrams, maps, data graphics, masks, clipping, moderate vector scenes, path motion, and typographic or geometric signatures. Inline SVG can remain in the DOM and be labeled. Optimize complex exports and provide text equivalents for explanatory content.

### Canvas

Use for many transient objects, particles, drawing, pixel effects, games, and image processing. Canvas pixels do not create semantic objects; provide DOM controls, instructions, results, and essential equivalents.

### WebGL and Three.js

Use when a product form must be explored, spatial data matters, a shader enables the core metaphor, or dense real-time rendering proves capability.

Avoid expensive backgrounds, scene-rendered text/navigation, basic card movement, and objects that communicate nothing.

Buttermax used liquid WebGL and 3D devices to demonstrate the studio’s production capability. The technology functioned as proof. Active Theory V6 combined advanced rendering, AI navigation, multiplayer behavior, and WebGL as a genuinely different experience. The principle is concept-created value, not technical garnish.

### Emerging capabilities

Treat WebGPU, WebXR, AI, sound, and multiplayer as progressive enhancement unless audience and hardware are controlled. Detect capability, provide a complete fallback, state the user value, test physical devices, document support, and explain sensitive permissions.

AI must perform a real task with disclosed uncertainty and a direct non-AI route. A decorative chat box is not innovation.

### Media pipeline

Use responsive source sets and art-directed crops, modern formats and fallbacks, explicit dimensions, video posters, offscreen deferral, priority for likely LCP media, compressed geometry and textures, capped device-pixel ratio, adaptive particles and quality tiers, paused offscreen render loops, and only the font files actually used.

### Performance

At the time of research, good Core Web Vitals thresholds were:

- LCP at most 2.5 seconds;
- INP at most 200 milliseconds;
- CLS at most 0.1;
- evaluated at the 75th percentile.

Re-check current guidance. Also budget initial JavaScript, critical CSS, fonts, above-fold media, total transfer, geometry, texture memory, long tasks, frame time, GPU, battery, memory, and third parties.

Profile signature interactions on representative mid-range and lower-capability devices. Use field data after launch when available.

## 8. Production effort

### Establish truth

Identify user, job, real content, proof, brand behavior, objects and rules, devices, inputs, networks, accessibility, success, constraints, and unknowns. Never fabricate proof or capability to complete the look.

### Audit the existing site

Record what to preserve, what is generic, what is broken, where strong material already exists, where polish hides weakness, accessibility and performance constraints, and replacement cost.

### Research territory

Study category conventions, cultural references outside galleries, audience language, brand history, material culture, competitors, anti-references, media, data, structural principles from recognized work, and feasibility.

### Develop concepts

Create concepts that differ in organizing logic. Each should include thesis, fit, expressive lever, signature moment, backbone, responsive transformation, reduced and low-capability forms, technical approach, risks, and invalidation.

### Prototype risk

Use low fidelity for structure, real-content boards for visual perception, coded slices for scroll or motion, production-like device spikes for spatial performance, semantic prototypes for unusual input, and comprehension tests for signature meaning.

### Define the system

Write layout, type, spacing, color, media, motion, interaction, component, responsive, capability, fallback, accessibility, and performance rules.

### Build the backbone

Complete content, order, navigation, URLs, forms, tasks, and states. Test delayed or failed JavaScript, partial CSS, keyboard, zoom, screen-reader order, narrow viewports, and content extremes.

### Enhance in layers

Add responsive composition, typography and media, component transitions, section choreography, signature interaction, optional advanced layers, then fallbacks. Each layer should fail without corrupting the one below.

### Polish and edit

Resolve type, crops, timing, interruption, states, history, loading stability, localization, inputs, preferences, metadata, links, credits, rights, and operations. Remove unjustified effects, duplicate systems, forced loading, mystery navigation, fake content, one-off values, unnecessary libraries, and desktop-only concepts.

### Verify independently

Measure first impression, comprehension, task performance, predictability, intended-message memory, brand fit, accessibility, performance, device/browser behavior, content truth, and code quality separately.

## 9. Accessibility and agency

Target WCAG 2.2 AA unless the project requires more. Expressive sites require particular attention to:

- logical semantic order under asymmetric composition;
- complete keyboard access and visible unobscured focus;
- non-hover access;
- drag and precision alternatives;
- native controllable scrolling;
- control of playback, sound, pace, and immersive modes;
- reduced alternatives for translation, zoom, parallax, and continuous movement;
- essential content outside canvas, 3D, sound, and animation;
- selectable text with stable contrast over all media frames;
- captions, transcripts, alt text, and structured equivalents;
- 200% text resize and 400% zoom/reflow;
- forced colors and high contrast.

Motion can cause distraction, dizziness, nausea, and headaches. Honor motion preferences and allow nonessential movement to be disabled. Accessibility changes the concept; it cannot be repaired at the end if the idea depends on one sense, animation, spatial understanding, or pointer precision.

## 10. Failure modes

| Failure | Why it fails | Better response |
|---|---|---|
| Trend collage | Familiar fashionable effects compete without a thesis | Choose one idea and expressive lever |
| Gallery cloning | Copies surfaces without the source’s content and reason | Extract a principle and rebuild from project material |
| Mystery navigation | Requires hovering or decoding symbols | Preserve labels, landmarks, current location, and direct paths |
| Scroll-jacking | Trades agency for choreography | Keep native scroll and map enhancement onto it |
| Cinematic loader | Delays useful content to perform identity | Let identity emerge while content loads immediately |
| Custom-cursor theater | Adds latency or becomes the only affordance | Keep native cursor behavior; make reaction optional |
| 3D wallpaper | Spends performance without meaning | Make 3D explanatory or remove it |
| Motion everywhere | Destroys hierarchy and tires repeat use | Reserve it for cause, continuity, feedback, and signature moments |
| Mobile collapse | Reduces a composition to a generic stack | Define invariants and design an intentional transformation |
| Tiny gray text | Uses illegibility as sophistication | Preserve apparent size, contrast, measure, and zoom |
| Decorative data | Uses charts or particles as texture | Supply real data, labels, units, source, and insight |
| Fabricated proof | Makes fiction look real | Use verified content or label samples |
| Accessibility theater | Adds attributes or a toggle without task access | Test complete tasks across input and preference |
| Compression-only performance | Optimizes assets after excessive architecture | Reduce work, rendering, dependencies, and scope |
| One-shot generation | Produces a screenshot without product depth | Research, diverge, prototype, test, and iterate |

## 11. Synthesis rubric

This is not an official jury formula. Score each 0–5 only when useful and attach evidence.

| Dimension | Question | Suggested weight |
|---|---|---:|
| Specific concept | Does the idea guide and reject decisions? | 10 |
| Design and art direction | Are composition, type, color, imagery, and hierarchy distinctive and resolved? | 15 |
| Coherence | Do content, visuals, motion, language, and interaction share one grammar? | 10 |
| Usability | Can people orient, predict, navigate, and complete core tasks? | 15 |
| Creativity or innovation | Is the difference meaningful in concept, interaction, or development? | 15 |
| Content | Is it specific, truthful, structured, and shaped by real material? | 10 |
| Technical craft | Are semantics, metadata, animation, code, and rendering robust? | 10 |
| Responsive art direction | Does the idea transform across space and input? | 5 |
| Performance | Does the experience meet budgets in representative conditions? | 5 |
| Memorability | Do people remember the intended idea rather than only an effect? | 5 |

The original research proposed these heuristic bands:

- 90–100: credible submission territory if no gate fails;
- 80–89: strong distinctive work with identifiable gaps;
- 70–79: polished but likely conventional, uneven, or under-validated;
- below 70: revisit concept or backbone before adding finish.

These are not jury predictions.

### Non-compensable gates

A score cannot compensate for:

- fabricated claims, people, results, or capabilities;
- broken critical tasks;
- inaccessible core content or interaction;
- lost input or unsafe behavior;
- absent mobile, reduced-motion, or low-capability equivalents;
- severe target-device performance failure;
- missing media rights or provenance;
- copied authorship;
- fake interaction or dead controls;
- output the contributor cannot explain or maintain.

## 12. Verification checklist

### Concept and content

- [ ] State the idea in two concrete sentences.
- [ ] Derive form from real content, subject, or behavior.
- [ ] Identify one primary expressive lever.
- [ ] Prioritize one or two signature moments.
- [ ] Preserve recognition without relying on a logo.
- [ ] Verify claims, media, credits, rights, and data.

### Design and interaction

- [ ] Make first impression communicate intended category and qualities.
- [ ] Preserve reading and action order in grayscale and blur.
- [ ] Keep navigation and controls discoverable.
- [ ] Give motion defined purposes and timing.
- [ ] Preserve a direct task route beside exploration.
- [ ] Resolve loading, empty, partial, error, offline, permission, and success.

### Responsive behavior

- [ ] Design mobile, tablet, desktop, wide, landscape, and split-screen intentionally.
- [ ] Support touch, pointer, keyboard, and alternate input.
- [ ] Support long, translated, missing, and enlarged content.
- [ ] Keep safe areas and browser chrome from obscuring controls.

### Accessibility

- [ ] Preserve semantics and logical source order.
- [ ] Complete core tasks by keyboard.
- [ ] Keep focus visible and unobscured.
- [ ] Change the experience meaningfully under reduced motion.
- [ ] Maintain contrast over every media and animation state.
- [ ] Keep sound optional and provide media alternatives.
- [ ] Give canvas, SVG, data, and 3D useful structured equivalents.
- [ ] Verify text resize, zoom, reflow, spacing, and forced colors.

### Performance and resilience

- [ ] Show useful content before optional enhancement.
- [ ] Meet current user-centric metrics and project budgets.
- [ ] Prioritize likely LCP media.
- [ ] Load fonts, scripts, media, geometry, and textures intentionally.
- [ ] Pause offscreen and hidden render loops.
- [ ] Provide failure states for JavaScript, media, fonts, motion, and graphics capability.
- [ ] Test representative target hardware.

### Craft and operations

- [ ] Verify spelling, links, metadata, titles, share images, and icons.
- [ ] Ensure editors can update content without breaking composition.
- [ ] Keep dependencies and rendering maintainable by the team.
- [ ] Monitor errors, performance, and critical interactions.
- [ ] Measure meaningful outcomes with proportionate privacy.
- [ ] Document limits and browser support.

## 13. Sources

### Award systems and examples

- [Awwwards — Self Aware](https://www.awwwards.com/sites/self-aware)
- [Awwwards — Don't Board Me](https://www.awwwards.com/sites/dont-board-me)
- [Awwwards — gallery and technology filters](https://www.awwwards.com/websites/agency/)
- [Awwwards — Mobile Excellence guidelines](https://www.awwwards.com/mobile-excellence-guidelines.pdf)
- [CSS Design Awards — About and judging](https://www.cssdesignawards.com/about)
- [CSS Design Awards — 2024 Website of the Year winners](https://www.cssdesignawards.com/blog/2024-website-of-the-year-winners/414/)
- [CSS Design Awards — Buttermax](https://www.cssdesignawards.com/woty/buttermax/44830/)
- [CSS Design Awards — Active Theory V6](https://www.cssdesignawards.com/sites/active-theory-v6/45015)
- [CSS Design Awards — Contra Project Cost Calculator](https://www.cssdesignawards.com/sites/contra-project-cost-calculator/46050)
- [CSS Design Awards — ATMOS Lamp](https://www.cssdesignawards.com/sites/atmos-lamp-by-ayocin/46604)
- [CSS Design Awards — Antoine Wodniack Portfolio](https://www.cssdesignawards.com/sites/antoine-wodniack-portfolio/46614)

### Creator accounts

- [Communication Arts — Active Theory](https://www.commarts.com/webpicks/active-theory-2)
- [Jordan Frand — Buttermax](https://www.jordanfrand.com/buttermax/)
- [Mooders — Cartier Watches and Wonders](https://mooders.net/en/works/cartier-watches-and-wonders/)

### Standards and platform guidance

- [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C — Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions)
- [W3C — reduced-motion technique C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39)
- [W3C — Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
- [W3C — Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)
- [web.dev — Web Vitals](https://web.dev/articles/vitals?hl=en)
- [MDN — View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [MDN — scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [MDN — Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [MDN — SVG in HTML](https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/SVG_in_HTML)
- [MDN — Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [MDN — WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)


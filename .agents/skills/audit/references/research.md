# Interface audit research

This reference supports structured audits of websites, applications, pages, flows, components, and design systems. It distinguishes visible craft, real task behavior, standards conformance, runtime quality, and user evidence so one dimension cannot falsely compensate for another.

Using this reference never authorizes remediation or persisted output. Apply it through read-only inspection and return the audit in the response only.

## Contents

1. [Research position](#1-research-position)
2. [Evidence and proof limits](#2-evidence-and-proof-limits)
3. [Truth packet and critical paths](#3-truth-packet-and-critical-paths)
4. [Severity, confidence, and priority](#4-severity-confidence-and-priority)
5. [Design and visual craft](#5-design-and-visual-craft)
6. [Workability and usability](#6-workability-and-usability)
7. [Information architecture and navigation](#7-information-architecture-and-navigation)
8. [Typography](#8-typography)
9. [Content readability and comprehension](#9-content-readability-and-comprehension)
10. [Color and themes](#10-color-and-themes)
11. [Motion and animation](#11-motion-and-animation)
12. [Responsive and adaptive behavior](#12-responsive-and-adaptive-behavior)
13. [Accessibility](#13-accessibility)
14. [Performance and resilience](#14-performance-and-resilience)
15. [System and implementation quality](#15-system-and-implementation-quality)
16. [Test matrix](#16-test-matrix)
17. [Methods library](#17-methods-library)
18. [Tools and proper claims](#18-tools-and-proper-claims)
19. [Finding and report model](#19-finding-and-report-model)
20. [Maturity without false precision](#20-maturity-without-false-precision)
21. [Audit myths](#21-audit-myths)
22. [Preflight checklist](#22-preflight-checklist)
23. [Sources](#23-sources)

## 1. Research position

A sound audit answers several separate questions:

- Can the intended person understand what the interface is and what matters?
- Can they find and complete the important work?
- Does the visual hierarchy direct attention in the right order?
- Can the content be read, understood, and acted on?
- Does typography remain legible, expressive, and resilient?
- Does motion explain or reward without delaying, distracting, obscuring, or harming?
- Does the interface survive realistic states, content, devices, inputs, preferences, and failures?
- Is the implementation fast, semantic, accessible, resilient, and maintainable?
- Does the experience have a coherent, context-specific point of view?

These qualities overlap but are not interchangeable. A beautiful screenshot can hide a broken task. A conforming page can still confuse. A novel interaction can exclude. An automated score can pass while a person still cannot use the product.

Treat an audit as a multi-dimensional diagnosis. Separate:

1. observed or measured facts;
2. standards failures;
3. usability risks;
4. craft judgments;
5. hypotheses requiring user, analytics, domain, or production evidence.

Prioritize barriers before polish. Preserve good patterns. State what could not be verified.

### Workability

Use this operational definition:

> An interface is workable when its intended users can complete important jobs under realistic conditions, with understandable controls, correct behavior, visible status, adequate feedback, recoverable errors, preserved work, and no dependency on one fragile input, viewport, animation, or enhancement.

Workability includes functional correctness, discoverability, sequence, efficiency, state completeness, recovery, interruption, device and input compatibility, accessibility, acceptable responsiveness, and truthful outcomes.

## 2. Evidence and proof limits

### Audit modes

| Mode | Can reveal | Cannot establish alone |
|---|---|---|
| Screenshot review | Composition, hierarchy, density, visible typography, obvious contrast and consistency issues | Interaction, focus, performance, responsive behavior, source order, task success |
| Runtime heuristic review | Discoverability, feedback, navigation, states, friction, motion behavior | Population-level success or business impact |
| Source review | Semantics, architecture, tokens, assets, likely failure paths, implementation risks | Actual behavior in every runtime environment |
| Automated checks | Detectable rule failures, regressions, measurable lab samples | Full accessibility, comprehension, usefulness, satisfaction, or conformance |
| Moderated task testing | Where representative users succeed, hesitate, misunderstand, recover, or fail | Universal accessibility or statistical rates from a small sample |
| Field analytics | Real-world funnels, timings, errors, search behavior, device distribution | Why behavior occurred without additional investigation |
| Standards evaluation | Conformance within the evaluated scope | Desirability, distinction, or task usability beyond the standard |

W3C states that no tool alone can determine accessibility and that knowledgeable human evaluation is required. Standards evaluation and usability testing answer related but different questions.

### Evidence labels

- **Observed:** directly reproduced in the evaluated environment.
- **Measured:** supported by recorded values or tool output.
- **Standards-based:** mapped to a named requirement.
- **Research-supported:** consistent with applicable published evidence.
- **Heuristic:** expert judgment requiring validation when consequential.
- **User-observed:** seen during a defined research session.
- **Analytics-supported:** visible in representative telemetry.
- **Unknown:** required evidence was unavailable.

Use the narrowest defensible claim. “This control was unreachable by keyboard in the tested dialog” is stronger than “the site is inaccessible” when only one route and environment were evaluated.

### Field and lab evidence

Field data represents real visits across actual devices and networks. Lab data provides controlled, reproducible diagnosis. Use field data for population outcomes when available and lab traces to identify causes. Record route, state, device profile, browser, date, and test scenario.

## 3. Truth packet and critical paths

Do not begin with taste. Collect or mark unknown:

- target interface, environment, routes, and authenticated roles;
- intended audience, knowledge, abilities, language, motivation, and context;
- primary and secondary jobs;
- organizational outcomes;
- critical content and claims;
- supported browsers, devices, inputs, and connection conditions;
- applicable accessibility and regulatory targets;
- analytics, support evidence, user research, and known defects;
- design system, brand guidance, content rules, and technical constraints;
- third-party dependencies;
- privacy, safety, legal, and financial consequences;
- audit scope, output, and definition of done.

### Critical paths

For each important path, define:

- entry condition;
- user goal;
- required information;
- expected actions;
- success condition;
- likely mistakes;
- recovery;
- exit, return, or continuation;
- relevant devices and access needs.

Examples include understanding an offer, finding evidence, contacting an organization, comparing and purchasing, completing a form, returning to saved work, or recovering after timeout or invalid input.

## 4. Severity, confidence, and priority

Severity describes harm, not implementation effort.

| Severity | Definition | Examples |
|---|---|---|
| **Critical** | Blocks a critical path, creates serious harm, exposes sensitive information, causes an unrecoverable action, or excludes a substantial group from core content | Transaction cannot complete; destructive action has no warning or recovery; only navigation is keyboard-inaccessible; unsafe flashing |
| **High** | Causes likely failure, exclusion, major misunderstanding, severe friction, or loss of work in an important path | Input clears after error; mobile menu traps focus; core proposition cannot be understood; essential content exists only in inaccessible canvas |
| **Medium** | Creates repeated confusion, delay, or mistrust with a discoverable workaround, or harms a secondary path | Weak current-location cues; ambiguous labels; excessively dense measure; janky nonessential transition |
| **Low** | Localized craft or consistency issue with limited task impact | Isolated spacing drift; minor optical misalignment; secondary motion uses inconsistent easing |

Consider impact, reach, frequency, persistence, recoverability, task criticality, and safety, accessibility, privacy, legal, financial, or reputational risk.

### Confidence

- **High:** reproduced, measured, standards-mapped, or repeatedly observed with adequate evidence.
- **Medium:** strong heuristic or source evidence without complete runtime or user verification.
- **Low:** plausible hypothesis requiring user, analytics, domain, device, or production evidence.

A severe low-confidence concern is an urgent verification need, not a confirmed failure.

### Priority order

1. Prevent harm and restore blocked work.
2. Repair critical-path comprehension and behavior.
3. Restore access across inputs, devices, and preferences.
4. Fix systemic causes producing many defects.
5. Strengthen hierarchy, readability, and consistency.
6. Refine character and finish.
7. Consider optional experiments.

## 5. Design and visual craft

### First impression

Use fast perception methods carefully:

- **Very brief exposure:** assess broad visual appeal and complexity, never comprehension.
- **Five-second test:** ask what this is, who it serves, what appears important, and what action seems possible.
- **Blur or squint:** inspect masses, contrast, and attention order.
- **Grayscale:** inspect value hierarchy without hue.
- **Thumbnail comparison:** assess family resemblance and meaningful page differentiation.

Research by Tuch and colleagues found that visual complexity and category prototypicality influence aesthetic judgments at very short exposures. The practical lesson is to retain enough recognizable structure that original expression does not become immediate noise. This does not mean every product should look conventional.

Ask:

- Is purpose visible before decorative messaging?
- Does the first view establish identity, value, and a next step?
- Is the dominant element the most important element?
- Is the page calm enough to parse?
- Does visual tone fit the context and stakes?
- Does “premium,” playful, technical, or institutional styling accidentally weaken trust?

### Composition and hierarchy

Inspect:

- reading and action order;
- focal point;
- grid, alignment, and optical correction;
- grouping and separation;
- section transitions;
- dense and sparse rhythm;
- relationship of text, controls, media, and whitespace;
- foreground/background separation;
- viewport crop and continuation cues;
- route-to-route coherence.

High-value questions:

- Can a viewer identify the first, second, and third item to notice?
- Do headings organize content rather than only change size?
- Does whitespace clarify relationships?
- Are related elements near one another and unrelated elements separated?
- Do repeated modules create a learnable pattern?
- Are exceptions deliberate and rare?
- Does each section earn its size and position?
- Are actions emphasized in proportion to importance and consequence?
- Does the page remain understandable when media is hidden or delayed?

Common failures include every section acting as a hero, oversized type without meaning, simultaneous focal points, centered long-form content, decorative overlap, unstructured emptiness, card grids that erase content differences, novelty that resets every section, and mobile layouts that only stack desktop content.

### Consistency and variation

Consistency means the same concept behaves the same way; it does not require visual sameness. Audit component identity, action hierarchy, icon meaning, terminology, state treatment, spacing, type roles, navigation placement, media treatment, motion purpose, and justified exceptions.

Flag variation when it causes relearning, uncertainty, error, or fragmentation. Preserve variation that communicates a real difference.

### Imagery and iconography

Ask whether media is specific to the subject or interchangeable stock. Inspect explanatory role, evidence, emotional framing, crops, resolution, compression, color treatment, provenance, rights, accessible alternatives, and fallback meaning. Confirm icons have stable meanings and accessible names where needed. Treat texture, grain, 3D, and canvas as purposeful material, not automatic quality.

## 6. Workability and usability

### Task inspection

Attempt critical tasks without privileged knowledge. Record:

- time to orient;
- first action;
- wrong turns and hesitation;
- hidden requirements;
- repeated input;
- state changes and feedback latency;
- errors and recovery effort;
- completion evidence;
- return and resume behavior.

Useful measures include task success, partial success, failure, time with context, first-click correctness, error type, recovery rate, assists, abandonment point, comprehension accuracy, and retained work.

For user testing, use believable tasks with clear goals that do not reveal the answer. Recruit actual or likely users. A few qualitative sessions can expose serious problems but do not justify population-level percentages.

### Interaction heuristics

Inspect:

- visibility of system status;
- match with the user’s language and mental model;
- user control and freedom;
- consistency with platform conventions;
- error prevention;
- recognition rather than recall;
- novice clarity and expert efficiency;
- relevant, restrained presentation;
- error diagnosis and recovery;
- contextual help where genuinely needed.

Heuristics find risks. They do not prove user behavior.

### Affordance and discoverability

Verify links and buttons look actionable, controls have visible or unambiguous names, gesture cues have alternatives, hover information is available to focus and touch, visible boundaries match clickable regions, disabled controls communicate relevant causes, and unconventional navigation has instructions and exits.

### State completeness

Inspect initial, first-use, loading, delayed, empty, partial, populated, hover, focus-visible, pressed, selected, visited, disabled, unavailable, validating, success, warning, error, stale, conflicting, timeout, retry, offline, dependency failure, permission denied, expired session, destructive confirmation or undo, duplicate submission, interruption, and resume where applicable.

Missing states are evidence that a polished happy path may not yet be a complete product.

### Forms and transactions

Check visible labels, required/optional status, point-of-need instructions, format examples, suitable input types and autocomplete, useful validation timing, textual error identification, specific recovery, appropriate focus after errors, preserved data, explicit consequences, clear success, and safe repeat submission.

Errors should explain what happened, where, how to fix it, and what remains safe.

## 7. Information architecture and navigation

Inspect organization around user concepts, labels and grouping, current location, meaningful routes and URLs, page titles, landmarks, heading structure, source order, search/filter/sort/reset, browser history, deep links, restoration, mobile navigation, overlay focus and closing, footer utility, and dead ends.

Tests:

- **Expectation:** ask what a control will do before activation.
- **First click:** give a realistic goal without naming the target label.
- **Findability:** request information without revealing its menu category.
- **Memory offload:** interrupt and return; inspect preserved place, input, and state.
- **No animation:** verify spatial transitions are not required for location.
- **Source order:** navigate by heading, landmark, and keyboard.

Failure patterns include internal jargon, abstract labels, navigation hidden behind unfamiliar gestures, relationships that exist only visually, routing that breaks history or deep links, transitions that erase orientation, filters without current state or reset, and overlays that become accidental navigation containers.

## 8. Typography

Audit typography as four connected systems:

1. **Legibility:** distinguish characters and words.
2. **Readability:** sustain reading for the required duration.
3. **Hierarchy:** scan, orient, and identify relationships.
4. **Voice:** express character without impairing the first three.

### Typeface suitability

Review character differentiation such as `I/l/1` and `O/0`, punctuation, numerals, x-height, apertures, counters, stroke contrast, texture, weights, italics, multilingual glyphs, fallbacks, platform rendering, licensing, delivery, variable axes, and contextual fit.

Test body copy, navigation, small labels, form errors, long headings, numbers, and unsupported characters. A large display specimen is not enough.

### Body settings

Inspect font size, line height, measure, paragraph spacing, letter and word spacing, weight, contrast, alignment, hyphenation, rag, link distinction, text over media, and long-form rhythm.

For sustained Latin-script reading, approximately 16–18 CSS pixels, 45–75 characters per line with 55–70 often comfortable, and line-height around 1.45–1.65 are useful starting hypotheses. They are not conformance rules or universal answers. Typeface, script, audience, device, density, and content change the result.

Flag excessive or cramped measure, leading that breaks line tracking, weak thin text, disruptive justification, centered sustained text, long all-caps passages, unstable media backgrounds, and links distinguishable only by subtle color.

### Hierarchy

Define purpose for display, page title, section and subsection heading, body, lead, label, metadata, caption, control, navigation, data, and code roles. Check whether adjacent levels are distinct, semantic levels match content structure, display type remains subordinate to meaning, and mobile preserves priority rather than shrinking proportionally.

### Stress tests

Test:

- 200% browser text resize without loss;
- 400% zoom / 320 CSS-pixel reflow for ordinary vertical content;
- user overrides of 1.5 line height, 2× font-size paragraph spacing, 0.12em letter spacing, and 0.16em word spacing;
- shortest and longest headings;
- long unbroken strings, URLs, prices, dates, and units;
- translated text expansion and non-Latin scripts;
- fallback before font load and complete webfont failure;
- bold, italic, link, code, superscript, control, and error states;
- narrow and wide measures.

WCAG does not require the override values as default styling. It requires content and function to survive when users apply them.

### Font loading

Inspect file count, formats, unused weights and axes, critical preload, `font-display`, fallback metric compatibility, layout shift, duplicate downloads, third-party latency and privacy, and readable failure behavior.

## 9. Content readability and comprehension

Readable pixels do not guarantee understandable content. Audit whether the intended audience can find, understand, and act.

### Find

- Put the main message early.
- Use headings that answer likely questions.
- Make summaries, lists, tables, and metadata scannable.
- Keep material conditions visible.
- Use descriptive links and audience language.

### Understand

- Keep actor, action, object, condition, date, unit, and consequence explicit.
- Use one stable term per concept.
- Explain unfamiliar terms at the point of need.
- Organize each section and paragraph around one controlling idea.
- Label uncertainty.
- Keep examples truthful.
- Align written and visual hierarchy.
- Fit audience knowledge and reading context.

### Act

- Make the next action clear.
- Label buttons by outcome.
- State prerequisites and consequences before commitment.
- Place instructions where needed.
- Explain error and recovery.
- State what happened and what comes next after success.

Readability formulas can flag long words and sentences but do not measure truth, structure, prior knowledge, terminology, typography, motivation, or task success. Treat them as smoke alarms, not scores of comprehension.

Stronger evidence asks whether representative users can locate the answer, explain it accurately, identify a condition, choose the right action, and recover without assistance.

## 10. Color and themes

### Semantic inventory

Inventory canvas, surfaces, primary and secondary text, borders, brand/accent, links, visited links, focus, hover, pressed, selected, disabled, success, warning, danger, information, charts, overlays, light, dark, and forced-color behavior.

Flag one raw value carrying unrelated meanings. Semantic roles should allow states and themes to change without scattered patches.

### Contrast

For WCAG 2.2 AA, audit at minimum:

- normal text: 4.5:1;
- large text: 3:1;
- meaningful control boundaries, focus, and essential graphics: 3:1 where non-text contrast applies.

Measure rendered foreground against the actual adjacent background. Do not round a failing ratio upward. Test worst plausible points in gradients, video, photography, translucent layers, and every relevant state. Confirm exceptions are genuinely inactive or decorative.

### Color-independent meaning

Color cannot be the only visual means of conveying information, action, or state. Pair it with text, shape, pattern, icon, or another reliable cue. Test required fields, errors, warnings, selection, links, charts, availability, status, and maps.

### Dark mode and forced colors

Dark mode is not inversion. Preserve hierarchy, avoid uncomfortable luminous contrast, adapt media and shadows, retain semantic state differences, provide suitable asset variants, declare browser color scheme, preserve preferences, prevent transition flashes, and keep control boundaries and focus visible in forced colors.

## 11. Motion and animation

Audit motion for meaning, agency, safety, continuity, and runtime cost.

### Inventory

Record hover and press response, state transitions, disclosures, overlays, route transitions, loading, progress, scroll reveals, sticky or pinned sequences, parallax, scrubbing, carousels, marquees, dragging, cursors, SVG, canvas, WebGL, video, ambient loops, and synchronized sound.

For each, record:

- trigger and user purpose;
- information conveyed;
- duration and easing;
- whether it blocks input;
- interruption and reversal;
- reduced-motion equivalent;
- keyboard and touch equivalent;
- fallback after technology failure;
- measured runtime cost.

If purpose cannot be named, treat the motion as decorative and require stronger justification.

### Useful purposes

Motion may confirm cause and effect, preserve spatial continuity, explain change, direct attention, communicate progress, preview interaction, provide a brief reward, or establish atmosphere when atmosphere belongs to the product.

Failure patterns include animating everything on entry, delaying content for choreography, replaying transitions on frequent navigation, parallax competing with reading, scroll hijacking, moving targets, disguising loading, reduced-motion modes that remove content, uncontrolled ambient loops, imprecise custom cursors, and unsolicited sound.

### Timing and feel

Inspect perceived responsiveness, relation to distance and scale, entry versus exit, continuity, easing families, interruption, reversal, simultaneous effects, repeated input, and whether motion finishes before the next decision. Hard timing ranges are heuristics, not standards.

### Control and reduced motion

WCAG requires pause, stop, or hide controls for automatically moving, blinking, scrolling, or updating content that meets the criterion’s conditions. Its AAA Animation from Interactions criterion calls for disabling nonessential interaction-triggered motion. Support the operating-system preference and verify behavior.

A strong reduced-motion mode removes large translation, zoom, rotation, parallax, and unnecessary scrubbing while preserving content, hierarchy, state, and feedback. It must cover JavaScript, canvas, video, and libraries as well as CSS.

### Safety and input alternatives

Audit flash frequency and area, large-field zoom, lateral movement tied to vertical scroll, oscillation, pulsing, autoplay, motion beside reading, 3D camera movement, and escape controls. Content must not exceed applicable flash thresholds.

Core actions must work through required inputs. Drag interactions need appropriate alternatives; hover needs focus and touch equivalents; motion actuation needs controls; pointer cancellation should prevent accidental activation. WCAG 2.2 AA defines a 24×24 CSS-pixel target minimum or sufficient spacing with exceptions. This is a minimum, not an ideal size.

### Runtime performance

Measure representative hardware and scenarios. Inspect frames, dropped and partially presented frames, long animation frames, main-thread tasks, style recalculation, layout, paint, compositing, forced synchronous layout, scroll listeners, repeated reads/writes, GPU memory, layer size, canvas resolution, device-pixel-ratio caps, resize behavior, power, and thermal cost.

Transform and opacity are often less expensive than properties causing layout or paint, but compositing is not free. Do not claim smoothness from casual observation on one desktop.

## 12. Responsive and adaptive behavior

Responsive quality preserves purpose and work across space, input, capability, and content. It is more than avoiding overflow at preset screenshots.

Test narrow mobile, common mobile, tablet, laptop, desktop, wide, portrait, landscape, split screen, safe areas, browser chrome, touch, pointer, keyboard, mixed input, 200% text resize, 400% zoom/reflow, reduced motion, dark mode, forced colors, increased spacing, slow network, lower-powered hardware, and content extremes.

Inspect information priority, navigation transformation, order changes, line measure, reach, target size, sticky obstruction, overlays and virtual keyboards, media crops, tables, charts, canvas, comparisons, hover assumptions, orientation instructions, horizontal-scroll boundaries, and low-capability fallbacks.

WCAG 2.2 AA expects ordinary vertically scrolling content to reflow at a width equivalent to 320 CSS pixels without content or functional loss and without page-level two-dimensional reading, except content that genuinely requires a two-dimensional layout.

## 13. Accessibility

Target WCAG 2.2 AA unless a stronger or jurisdiction-specific requirement applies. Treat conformance as a floor, not complete usability evidence.

### Automated checks

Tools may detect missing names, invalid identifiers, some contrast failures, invalid ARIA, missing language, some structural problems, form-label issues, missing alternative-text attributes, and other rules within tool coverage.

Record tool, version, route, state, viewport, and date. A clean scan is not proof of accessibility.

### Manual checks

At minimum, test:

- keyboard completion of critical paths;
- visible, logical, unobscured focus;
- skip links and landmarks;
- heading hierarchy;
- link and control names;
- dialog entry, containment when appropriate, closing, and focus return;
- menus, disclosures, tabs, carousels, and custom widgets;
- errors, status messages, and dynamic updates;
- zoom, reflow, spacing, and resize;
- contrast and color-independent meaning;
- reduced motion;
- target size and drag alternatives;
- accessible media alternatives;
- screen-reader critical paths;
- forced-color/high-contrast behavior.

### Assistive technology and user evaluation

Record the tested browser, platform, assistive technology, task, route, and state. Include disabled participants when possible while describing the population and limits. A few users can expose barriers but cannot establish universal conformance. Combine user evaluation with standards evaluation.

## 14. Performance and resilience

### Core Web Vitals

Current “good” thresholds at the time this reference was compiled are:

- Largest Contentful Paint: at most 2.5 seconds;
- Interaction to Next Paint: at most 200 milliseconds;
- Cumulative Layout Shift: at most 0.1.

Classification uses the 75th percentile of page visits. Re-verify current metrics and thresholds before relying on them. These metrics cover loading, responsiveness, and stability, not all usability or animation quality.

### Diagnostic areas

Audit HTML and critical content, server and caching, render-blocking resources, JavaScript volume and execution, hydration, responsive images, video, font delivery, third parties, main-thread contention, long tasks, long animation frames, route transitions, memory and cleanup, canvas/WebGL fallback and context loss, offline, timeout, dependency failure, and progressive enhancement.

### Budgets

Budgets should reflect the intended audience and experience. Define transfer size by asset type, critical requests, JavaScript execution, media resolution, font count, user-centric metrics, route response, animation frame health, and long-session memory.

When a creative effect breaks a budget, first consider reducing resolution, frequency, duration, complexity, or scope. Compare expressive value with user cost.

## 15. System and implementation quality

Inspect:

- semantic HTML before custom roles;
- native controls before recreated controls;
- clear component boundaries;
- semantic color and typography tokens;
- consistent spacing, type, motion, and state rules;
- responsive logic near ownership;
- predictable data and error flow;
- cleanup for listeners, observers, loops, and GPU resources;
- absence of dead controls, fake success, placeholders, and broken links;
- necessary dependencies only;
- tests for observable critical behavior;
- metadata and source order aligned with visual structure;
- fallbacks for enhancement failure;
- maintained exceptions with reason and owner.

### Design systems

Inventory tokens, components, variants, states, duplicates, one-off values, accessibility contracts, responsive contracts, content constraints, ownership, and documentation.

Extract shared components when they represent the same concept or repeated policy, not only because they look similar. Do not force behaviorally different concepts into one abstraction.

### Visual regression

Screenshot comparisons can catch rendering changes when baselines and environments are stable. Browser, operating system, hardware, settings, fonts, and rendering mode can change output. Visual regression still requires review and cannot prove usability or aesthetic quality.

## 16. Test matrix

| Dimension | Representative conditions |
|---|---|
| Viewport | 320 CSS-pixel equivalent, narrow mobile, common mobile, tablet, laptop, desktop, wide, split screen |
| Orientation | Portrait, landscape |
| Input | Keyboard, touch, mouse, trackpad, screen reader, voice or switch where relevant |
| Preference | Reduced motion, dark mode, forced colors/high contrast, increased text spacing |
| Zoom and text | 200% text resize, 400% zoom/reflow, enlarged system text where applicable |
| Content | Short, long, missing, translated, user-generated, long unbroken strings, unavailable media |
| State | First use, loading, empty, partial, success, validation error, failure, stale, offline, denied, expired |
| Network/device | Fast desktop, throttled network, mid/low-tier mobile, memory-constrained long session |
| Navigation | Direct link, in-product path, back/forward, refresh, interrupted return |
| Enhancement | Delayed or failed script, font, image, video, canvas, or GPU layer |

Prioritize combinations representing critical paths and likely risk. Record untested conditions.

## 17. Methods library

### Glance test

Assess immediate hierarchy and global visual complexity. It does not establish comprehension or usability.

### Five-second comprehension

Ask what the interface is, who it serves, what matters, and what action seems possible. Interpret results within audience and page context.

### Blur, squint, and grayscale

Inspect mass, contrast, grouping, and attention. These methods intentionally remove detail and cannot assess text or interaction.

### Expectation test

Before activation, ask what the control will do; compare the expectation with the result.

### First-click test

Give a realistic goal without naming the target label; record the first action and reasoning.

### Task walkthrough

Attempt an end-to-end job and record orientation, action, state, feedback, errors, recovery, and completion.

### Interruption test

Interrupt after progress, navigate away or expire the session, and inspect resumption.

### Error-recovery test

Submit invalid, conflicting, duplicate, late, unavailable, or expired input and observe prevention, diagnosis, preservation, and repair.

### Content stress test

Use realistic content extremes, missing media, translated strings, and long unbroken values.

### Adjective test

Compare intended and perceived character. This is perception evidence, not usability evidence.

### Preference versus performance

Collect liking separately from successful task behavior. People can admire interfaces they cannot operate.

## 18. Tools and proper claims

| Tool | Good for | Do not claim |
|---|---|---|
| Browser developer tools | DOM, accessibility tree, computed styles, network, runtime performance, rendering, emulation | Real-device coverage or user success |
| Lighthouse | Repeatable lab diagnostics and selected checks | Complete accessibility, field performance, or design quality |
| Accessibility rules engine | Detectable accessibility violations | Full conformance |
| Contrast tool | Numeric color-pair evaluation | Complete hierarchy, color-independent meaning, or media-wide safety without sampling |
| Screen reader | Programmatic structure and task behavior in one tested combination | Coverage of every platform, tool, or disability |
| Keyboard and touch tests | Focus, order, reach, targets, and gestures | All alternative-input usability |
| Performance trace | Main-thread, rendering, animation, and runtime causes | Population outcomes |
| Field performance data | Real-visit distributions | Root cause without diagnosis |
| Browser automation | Repeatable behavior and visual regression | Human judgment, comprehension, or aesthetics |
| Analytics | Funnels, errors, searches, device distribution | Why behavior occurred |
| Moderated research | Understanding, behavior, and recovery | Statistical generalization from a small sample |

## 19. Finding and report model

### Report order

1. Scope, environment, users, paths, methods, and exclusions.
2. Executive assessment.
3. Top three priorities.
4. Findings ordered by severity.
5. Strengths worth preserving.
6. Separate dimension maturity summary where useful.
7. Verification gaps and required evidence.
8. Source and tool appendix.

### Finding template

```md
### [Problem and consequence]

- Severity: High
- Confidence: High
- Evidence: Observed, standards-based
- Location: Account settings > Profile form > Submit error
- Conditions: Safari, mobile viewport, 200% text size
- Affected path: Update account information

What happens:
[Reproducible observation]

Why it matters:
[User and product impact]

Standard or principle:
[Named requirement or evaluation principle]

Recommendation:
[Concrete repair direction]

Verification:
[Specific retest]
```

Write causal explanations. Replace “typography feels off” with the actual measure, leading, contrast, or hierarchy problem and its reading effect. Replace “too much animation” with the trigger, duration, delay, affected content, reduced-motion behavior, and repair.

## 20. Maturity without false precision

Do not average unrelated dimensions into a total that lets polish cancel exclusion or broken work.

Use a separate maturity scale when useful:

| Score | Meaning |
|---:|---|
| **0 — Harmful or absent** | Blocks work, excludes, misleads, or lacks the required system |
| **1 — Plausible** | Looks intentional in the happy path but is incomplete, inconsistent, or unverified |
| **2 — Functional** | Works in representative conditions with some gaps or debt |
| **3 — Resolved** | Coherent, verified, resilient, and appropriate to user, content, and context |

Assess separately: truth, workability, navigation, visual hierarchy, typography, readability, color, motion, responsive behavior, accessibility, performance, implementation quality, coherence, and finish.

Every score must cite evidence and gaps. It is an index into findings, never the finding itself.

### Non-compensable gates

Do not describe an interface as high quality while any applicable condition remains:

- broken, deceptive, or unsafe critical path;
- core content or controls unavailable through required inputs;
- lost, invisible, trapped, or obscured focus;
- essential meaning dependent only on color, motion, sound, hover, drag, or precision;
- unmitigated motion safety risk;
- unclear material consequences;
- unrecoverable loss of important input or progress;
- blocking responsive or reflow failure;
- performance preventing core use;
- materially false content or behavior;
- fragile enhancement carrying core meaning without fallback.

## 21. Audit myths

- **Minimal means clear:** sparse pages can still hide controls, remove context, and group poorly.
- **More motion means premium:** purpose, control, safety, and performance determine quality.
- **It reached 60 frames per second:** one observer on one machine is not evidence; capture representative traces.
- **The automated score is perfect:** tools cannot establish complete accessibility, usability, or design quality.
- **The reading grade is low:** formulas do not verify meaning, truth, structure, or actionability.
- **Every color pair passes:** meaning, focus, themes, overlays, and states may still fail.
- **The desktop screenshot is responsive:** responsive quality includes priority, source order, touch, zoom, reflow, safe areas, performance, and state.
- **No error appeared:** the happy path says nothing about invalid input, failure, permission, expiry, duplication, or recovery.
- **Consistent means identical:** meaningful variants are healthy when the underlying concepts differ.
- **Unique means usable:** novelty without relevance or comprehension creates friction.

## 22. Preflight checklist

### Truth and purpose

- [ ] Audience, job, outcome, claims, and critical paths are explicit.
- [ ] Unknowns and assumptions are labeled.
- [ ] Public facts and system behavior are verified.

### Workability

- [ ] Critical tasks complete end to end.
- [ ] Status and next action remain visible.
- [ ] Errors support recovery and preserve work.
- [ ] No dead controls or simulated success remain.

### Visual craft

- [ ] Attention order matches priority.
- [ ] Grid, grouping, spacing, density, and rhythm are coherent.
- [ ] Imagery and material support the product.
- [ ] Variation communicates meaning rather than drift.

### Typography and content

- [ ] Body text supports required reading.
- [ ] Measure, leading, spacing, alignment, and contrast work together.
- [ ] Hierarchy matches semantic structure.
- [ ] Long, translated, resized, and fallback content survives.
- [ ] Intended users can find, understand, and act.

### Color

- [ ] Applicable text and non-text contrast requirements pass.
- [ ] Meaning does not depend on hue alone.
- [ ] Interaction and status states remain distinct.
- [ ] Light, dark, overlay, and forced-color contexts are tested.

### Motion

- [ ] Every major motion has a purpose.
- [ ] Content is not unnecessarily delayed.
- [ ] Motion is interruptible and repeated input is safe.
- [ ] Reduced motion preserves content and function.
- [ ] Autoplay, flashes, parallax, and large movement are controlled.
- [ ] Runtime behavior is measured on target hardware.

### Responsive and accessible behavior

- [ ] Content priority adapts across space and input.
- [ ] Keyboard and screen-reader critical paths work.
- [ ] Focus is visible, logical, and unobscured.
- [ ] Resize, zoom, reflow, and spacing retain content and function.
- [ ] Targets and gestures have workable alternatives.
- [ ] Automated checks are supplemented manually.

### Performance and implementation

- [ ] Field and lab evidence are distinguished.
- [ ] Representative routes and interactions are measured.
- [ ] Media, fonts, scripts, and enhancement layers have budgets.
- [ ] Core content survives enhancement failure.
- [ ] Semantics, components, tokens, tests, and cleanup are maintainable.

### Reporting

- [ ] Findings are ordered by user impact.
- [ ] Severity and confidence are separate.
- [ ] Every finding has evidence, impact, recommendation, and verification.
- [ ] Strengths and verification gaps are included.
- [ ] No unperformed test or unsupported conclusion is claimed.

## 23. Sources

### Accessibility and responsive behavior

- [W3C — Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C — Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/)
- [W3C — Understanding Conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance.html)
- [W3C — Selecting Accessibility Evaluation Tools](https://www.w3.org/WAI/test-evaluate/tools/selecting/)
- [W3C — Involving Users in Accessibility Evaluation](https://www.w3.org/WAI/test-evaluate/involving-users/)
- [W3C — Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [W3C — Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing)
- [W3C — Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [W3C — Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [W3C — Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color)
- [W3C — Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [W3C — Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)
- [W3C — Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
- [W3C — Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [W3C — Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels)

### Motion and performance

- [W3C — Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)
- [W3C — Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
- [W3C — Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)
- [MDN — `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)
- [web.dev — Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds?hl=en)
- [Chrome Developers — Analyze runtime performance](https://developer.chrome.com/docs/devtools/performance)
- [Chrome Developers — Rendering performance tools](https://developer.chrome.com/docs/devtools/rendering/performance)
- [Chrome Developers — Long Animation Frames](https://developer.chrome.com/docs/web-platform/long-animation-frames)

### Usability, content, and perception

- [Nielsen Norman Group — Ten usability heuristics](https://media.nngroup.com/media/articles/attachments/Heuristic_Summary1_A4_compressed.pdf)
- [Nielsen Norman Group — Heuristic evaluation workbook](https://media.nngroup.com/media/articles/attachments/Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf)
- [GOV.UK — Moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing)
- [GOV.UK — How user research improves service design](https://www.gov.uk/service-manual/user-research/how-user-research-improves-service-design)
- [Google Research — Visual complexity, prototypicality, and first impressions](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/)
- [Playwright — Visual comparisons](https://playwright.dev/docs/test-snapshots)

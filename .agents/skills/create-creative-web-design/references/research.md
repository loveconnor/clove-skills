# Bundled Research Reference

This file contains the complete research source for this skill. Use this contents list and targeted searches to load only the sections required by the task.

## Contents

- Techniques, user research, technology, accessibility, performance, and production
- Executive summary
- 1. What creative web design is
- 2. The principles of strong creative web design
- 3. User research for creative web design
- 4. User psychology and perception
- 5. Creative visual techniques
- 6. Creative interaction and motion techniques
- 7. Technology choices
- 8. Accessibility as a creative constraint
- 9. Performance as part of the design
- 10. Responsive and adaptive creativity
- 11. A production workflow for creative websites
- 12. Creative brief template
- 13. Creative design evaluation scorecard
- 14. Common failure modes
- 15. Pre-launch checklist
- 16. Selected sources and further reading
- Final principle

---

# Creative Web Design Research Guide

## Techniques, user research, technology, accessibility, performance, and production

**Research date:** July 2026  
**Scope:** Marketing sites, editorial experiences, portfolios, cultural and campaign sites, e-commerce, interactive storytelling, and product surfaces with expressive web design  
**Purpose:** Explain how to make websites distinctive and memorable without sacrificing comprehension, accessibility, performance, or user goals

---

## Executive summary

Creative web design is not a collection of visual effects. It is the deliberate use of concept, content, composition, interaction, technology, and craft to create an experience that is both **distinctive and appropriate**.

Design research commonly defines creativity through two interacting qualities: **novelty** and **usefulness or appropriateness**. A 2024 product-creativity study similarly begins from novelty and usefulness as the recognized dimensions of a creative outcome. Applied to the web:

- **Novelty** means the site offers a meaningful difference: a distinctive idea, voice, structure, interaction, or visual world.
- **Usefulness** means people can understand the site, achieve its purpose, trust it, access it, and use it under real conditions.
- **Appropriateness** means the expression fits the audience, content, organization, context, and consequences.

See [Creativity of products as meant by ordinary people](https://www.cambridge.org/core/journals/proceedings-of-the-design-society/article/creativity-of-products-as-meant-by-ordinary-people-to-what-extent-do-novelty-and-usefulness-matter/E0A18A1CDEB9B50C8C8E2EE181E33A49) and [Toward a Meta-Theory of Creativity Forms](https://journals.aom.org/doi/abs/10.5465/amr.2020.0110).

The central challenge is productive tension:

> **A creative site should offer enough familiarity to be understood and enough surprise to be remembered.**

The strongest creative websites tend to have:

1. a clear conceptual thesis rather than a pile of trends;
2. real content that drives the form;
3. a familiar interaction backbone with carefully chosen moments of deviation;
4. a coherent visual and motion grammar;
5. technology proportionate to the experience;
6. progressive enhancement and meaningful fallbacks;
7. research with actual and edge-case users;
8. performance and accessibility treated as creative materials;
9. disciplined editing so one memorable idea can be felt;
10. measurable success beyond awards, novelty, or stakeholder preference.

---

## 1. What creative web design is

Creative web design can alter one or more layers of an experience:

| Layer | Conventional question | Creative opportunity |
|---|---|---|
| **Purpose** | What should the site accomplish? | Can the experience itself demonstrate the value? |
| **Content** | What information is presented? | Can the content become material for exploration, narrative, or participation? |
| **Structure** | How is information organized? | Can a spatial, editorial, chronological, or object-based model fit better than standard sections? |
| **Composition** | How are elements arranged? | Can rhythm, asymmetry, scale, overlap, or changing density express the idea? |
| **Typography** | How is language made visible? | Can type carry voice, hierarchy, motion, and atmosphere? |
| **Image** | What is shown? | Can original photography, illustration, generative systems, or data create a distinctive world? |
| **Interaction** | How does the user act? | Can direct manipulation, play, transformation, or discovery add meaning? |
| **Motion** | How does the interface change over time? | Can choreography reveal causality, continuity, pace, or narrative? |
| **Technology** | How is it implemented? | Can browser-native capabilities enable an idea that static media cannot? |
| **Participation** | Does the audience only consume? | Can people configure, create, contribute, compare, or leave a trace? |

### Creativity is not the same as decoration

Decoration changes the surface. A concept changes the decisions.

For example, “use liquid gradients” is a treatment. “The site behaves like a living tide because the organization studies coastal change” is a concept that could shape navigation, pacing, imagery, data, sound, and transitions. It still needs to be tested for appropriateness, performance, and access.

### Creativity is not the same as novelty

A horizontal scroll, custom cursor, or 3D globe may be unusual in a category but still fail to help. Novelty without use becomes spectacle; usefulness without any point of view becomes competent sameness.

### Creativity is contextual

The right level and location of experimentation differ by site:

| Context | Appropriate creative range | Stable elements to protect |
|---|---|---|
| **Artist or studio portfolio** | High expression; the experience can demonstrate craft | Project access, contact, readable case studies |
| **Cultural/editorial feature** | Strong narrative, pacing, art direction, multimedia | Reading progress, text access, citations, navigation |
| **Brand campaign** | Memorable concept, participation, playful media | Message comprehension, CTA, sharing, load time |
| **E-commerce** | Expressive merchandising and product storytelling | Search, price, variant, cart, checkout, returns |
| **SaaS marketing** | Distinct positioning and demonstrations | Product truth, pricing, documentation, conversion paths |
| **Productivity application** | Focused expression in brand, transitions, data views | Task speed, state clarity, predictability, keyboard use |
| **Public or high-stakes service** | Inclusive clarity with selective warmth and identity | Eligibility, instructions, status, error recovery, trust |

The more frequent, urgent, risky, or irreversible the task, the more stable its core interaction should be. Creative expression can move toward illustration, editorial content, demonstration, or peripheral moments rather than disrupting the critical path.

---

## 2. The principles of strong creative web design

### 2.1 Begin with one organizing idea

A concept should be expressible in one or two sentences and be useful for making decisions.

Weak:

> “Bold, modern, immersive, playful, premium, and futuristic.”

Stronger:

> “The archive is treated as a table covered with evidence. Visitors can zoom from a broad historical pattern into individual artifacts without losing their place.”

The stronger statement suggests structure, scale, transitions, interaction, and content behavior. It also gives the team something to reject: effects that do not support evidence, zoom, or orientation.

### 2.2 Build a familiar backbone and an expressive layer

A practical pattern is to separate:

- **Backbone:** semantic document structure, normal scrolling, URLs, headings, navigation, forms, focus order, real content, and core actions.
- **Expressive layer:** motion, spatial transitions, unusual composition, reactive visuals, sound, 3D, or playful interaction.

If the expressive layer fails, the backbone should still communicate the purpose and support essential tasks. This is not a compromise; it lets the team take more creative risks without making access dependent on them.

### 2.3 Make one part strange and the rest legible

Unconventional navigation, dense typography, unusual motion, loud color, and unfamiliar interaction all consume attention. Using them simultaneously creates interpretation work.

A useful rule is controlled deviation:

- If navigation is experimental, keep labels and page structure clear.
- If typography is expressive, protect body-copy readability.
- If motion is complex, keep actions and system state explicit.
- If composition is asymmetrical, maintain strong alignment anchors.
- If content is nonlinear, provide orientation and a direct route.

### 2.4 Treat content as the material

Generic content produces generic form. A strong site emerges from the character of its actual material:

- the shape and rhythm of language;
- portrait versus landscape imagery;
- the quantity and relationships in a collection;
- the temporal structure of a story;
- the physical behavior of a product;
- the sound or movement of a subject;
- contrasts within data;
- user contributions.

The concept should amplify what is specific, not impose a fashionable shell on it.

### 2.5 Create a grammar, not a sequence of effects

A grammar defines how the site behaves repeatedly:

- what moves and what stays stable;
- how depth is communicated;
- what color means;
- how sections enter and leave;
- how type changes with emphasis;
- which elements respond to pointer, scroll, focus, or time;
- how users know something is interactive;
- how the site behaves with reduced motion or limited capability.

Consistency makes unusual behavior learnable. Exceptions then become expressive instead of confusing.

### 2.6 Design rhythm across time

Websites are experienced in sequence. Creative direction should choreograph:

- intensity and rest;
- dense and sparse information;
- motion and stillness;
- wide and narrow reading;
- overview and detail;
- surprise and confirmation;
- authored sequence and user control.

If every section is spectacular, none feels important.

### 2.7 Preserve agency

Users should control progress, playback, sound, exploration, and escape. Avoid trapping people in scroll-jacking, autoplay, mandatory tours, or hover-only discovery.

Agency means:

- standard browser scrolling remains reliable;
- back and forward navigation works;
- progress is visible in long narratives;
- motion can be reduced or paused;
- sound is opt-in and controllable;
- full-screen or immersive modes have obvious exits;
- a direct path exists for task-oriented visitors;
- exploratory paths do not erase the user’s place.

### 2.8 Edit for a signature moment

Memorability often comes from one or two moments that express the thesis exceptionally well: a transition from map to story, a responsive typographic title, an object that reveals its construction, or a collection that rearranges around the visitor’s choice.

Invest in those moments. Remove secondary effects that compete with them.

---

## 3. User research for creative web design

Creative design still requires user research, but the questions extend beyond conventional task completion. The team must understand meaning, expectation, identity, tolerance for novelty, and the context in which expression is received.

### 3.1 Research the purpose before the interface

Start with:

- Who must the site matter to?
- What should they understand, feel, remember, and do?
- What do they already believe about the subject or organization?
- What proof do they need?
- What conventions do they rely on?
- Where is surprise valuable, and where would it reduce trust?
- Is the visit exploratory, task-driven, repeated, urgent, social, or private?
- What devices, inputs, connections, environments, and assistive technologies are likely?
- What should remain after the novelty fades?

### 3.2 Discovery methods

#### In-depth interviews

Use interviews to understand users’ circumstances, vocabulary, motivations, expectations, references, anxieties, and definitions of value. GOV.UK describes in-depth interviews as a way to learn about users’ lives, work, circumstances, and problems. See [Using in-depth interviews](https://www.gov.uk/service-manual/user-research/using-in-depth-interviews).

Ask about behavior and artifacts, not only preferences:

- “Show me the last site you saved or shared. What made it worth returning to?”
- “How did you decide this organization was credible?”
- “What do you do when you want inspiration rather than a quick answer?”
- “Which sites in this field feel interchangeable? Why?”
- “When have visual effects made a site harder to use?”

#### Contextual inquiry and observation

Observe where and how the site will be used. A gallery kiosk, event microsite, mobile campaign, architecture portfolio, and internal data tool face different lighting, sound, time, input, attention, and network conditions.

#### Artifact and content analysis

Review the materials users already create, consult, save, share, or compare. This can reveal a more original structure than a generic sitemap.

Examples:

- artists group work by material or recurring themes rather than year;
- researchers move between claims, evidence, and citations;
- shoppers compare texture, scale, fit, and context, not only product specs;
- fans remember moments, characters, and quotes rather than content categories.

#### Brand and stakeholder interviews

Ask for behavioral definitions of brand attributes.

Instead of “We are bold,” ask:

- What would a bold decision look like when it costs something?
- What would the brand never do for attention?
- Where should it feel quiet?
- What evidence makes the organization credible?
- Which competitors are visually attractive but strategically wrong for you?
- If the logo disappeared, what should still identify the experience?

#### Competitive and cultural landscape review

Map conventions rather than collecting a mood board of favorites.

For each relevant site, record:

- audience and job;
- narrative structure;
- navigation model;
- typography and composition;
- motion grammar;
- interaction cost;
- technical method;
- performance and accessibility behavior;
- what is now category convention;
- where there is an unoccupied opportunity.

Look outside the category for structural inspiration: exhibitions, magazines, games, maps, instruments, physical packaging, stage design, title sequences, or scientific interfaces. Translate principles rather than copying appearances.

### 3.3 Participatory methods

#### Co-design workshops

Give users material to arrange, annotate, remove, or combine. Useful activities include:

- ordering moments in an ideal journey;
- sorting content by personal meaning;
- marking where the experience should be fast, calm, playful, or serious;
- creating collages for emotional territory;
- annotating conventional and experimental references;
- designing the “worst possible” version to expose boundaries.

Participants are not being asked to become interface designers. Their choices reveal priorities, language, metaphors, and constraints.

#### Experience spectrum exercises

Ask participants and stakeholders to place the desired experience on tensions such as:

- guided ↔ exploratory;
- calm ↔ energetic;
- intimate ↔ monumental;
- literal ↔ abstract;
- editorial ↔ tool-like;
- continuous ↔ episodic;
- familiar ↔ surprising;
- expert ↔ welcoming;
- polished ↔ raw;
- playful ↔ authoritative.

The explanation matters more than the position.

### 3.4 Concept research

Test concepts before polishing execution. Use storyboards, narrated wireframes, motion studies, paper sequences, or small coded prototypes.

For each concept, assess:

- What do participants think this is?
- What do they expect to do?
- What do they believe the organization values?
- Which part is memorable later?
- What feels relevant versus ornamental?
- Where do they lose orientation?
- Does the concept change perceived trust or competence?
- Who is excited, indifferent, excluded, or uncomfortable?
- Does it work without explanation from the designer?

Do not ask only “Which do you prefer?” Preference without context can select the most familiar or visually polished option. Ask participants to interpret, predict, use, and compare consequences.

### 3.5 Desirability and perception testing

Desirability testing can help compare emotional and brand interpretations. Give participants a balanced set of terms, allow their own words, and ask for evidence in the design.

Avoid reporting “80% chose innovative” as a final truth. Word selection is sensitive to the list, social desirability, and exposure time. Combine it with qualitative explanation and behavior.

### 3.6 First-impression testing

Research by Tuch and colleagues found that visual complexity and prototypicality influenced aesthetic judgments at very short exposure times; lower complexity and higher prototypicality were generally rated more appealing in the tested screenshots. This does not mean every creative site should look simple or conventional. It means first impressions form quickly, so visual complexity needs hierarchy and unfamiliar structures need orientation. See [The role of visual complexity and prototypicality](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/).

A five-second or brief-exposure test can investigate:

- perceived purpose;
- focal point;
- brand character;
- credibility;
- expected next action.

It cannot validate a full narrative, interaction, or task.

### 3.7 Usability testing

Watch representative participants attempt realistic tasks. GOV.UK recommends moderated usability testing to learn whether people understand what to do, can complete tasks, and encounter problems with language or layout. See [Using moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing).

For creative sites, test:

- whether interactive elements are discoverable;
- whether unusual navigation becomes learnable;
- scroll and motion comfort;
- orientation and return paths;
- keyboard and assistive-technology use;
- the ability to skip spectacle and reach content;
- comprehension before and after the experience;
- whether the signature moment supports the message;
- whether the visitor remembers the right thing.

### 3.8 Inclusive research

Recruit beyond ideal desktop users. Include people with relevant combinations of:

- low vision, blindness, color-vision differences;
- motor disabilities, tremor, or switch/voice input;
- vestibular disorders and motion sensitivity;
- hearing differences;
- cognitive or learning disabilities;
- older hardware, limited bandwidth, or data constraints;
- temporary impairment, distraction, or one-handed use;
- cultural and language differences;
- low domain familiarity and expert familiarity.

Do not test accessibility only at the end. A creative concept that depends on precise pointer movement, visual-only spatial relationships, sound, or continuous motion needs early research with affected users.

### 3.9 Research outputs

Useful synthesis artifacts include:

- **Experience principles:** three to five evidence-backed rules.
- **Convention map:** what must be familiar, may be reinterpreted, or should be challenged.
- **Audience tension map:** different needs for speed, depth, novelty, and control.
- **Signature-moment hypothesis:** the intended memorable interaction and why it matters.
- **Risk register:** accessibility, performance, comprehension, content, technical, and trust risks.
- **Success model:** behavioral, perceptual, and operational measures.

---

## 4. User psychology and perception

### 4.1 Aesthetic quality can change perceived usability

Classic HCI research found that aesthetic treatment can influence how usable a system is perceived to be. This does not mean beauty repairs poor usability; it means visual care affects expectation, tolerance, and judgment. See Tractinsky, Katz, and Ikar’s [What is beautiful is usable](https://cris.bgu.ac.il/en/publications/what-is-beautiful-is-usable-2/).

Practical implication:

- strong aesthetics can create goodwill;
- that goodwill raises expectations;
- broken behavior, slow loading, or inaccessible interactions can then create a sharper trust failure.

### 4.2 Prototypicality supports recognition

People bring category expectations. A news article, shop, portfolio, and settings screen each have familiar cues. Preserving a few strong cues reduces the cost of creative deviation elsewhere.

Examples:

- an editorial experiment can keep recognizable headline, byline, body, and share structure;
- an unusual shop can keep prices, variants, shipping, cart, and checkout explicit;
- a portfolio can be spatially exploratory but still offer a project index and contact route.

### 4.3 Novelty captures attention but does not direct it

Surprise can interrupt habituation and create memory, but attention may land on the mechanism rather than the message. Test what participants recall:

- the brand or only “the spinning website”;
- the product advantage or only the animation;
- the story or only the 3D model.

### 4.4 Curiosity needs information gaps and credible reward

Teasers, partial reveals, and interactive exploration work when people understand that something valuable can be discovered. Mystery without information scent feels broken.

Provide:

- a visible clue;
- a manageable action;
- timely feedback;
- a worthwhile reveal;
- an alternate direct path.

### 4.5 Agency turns novelty into play

People are more likely to enjoy unusual interaction when their action visibly causes a response, the rules can be learned, errors are safe, and the experience does not block progress. This is the difference between play and obstruction.

### 4.6 Cognitive load is a budget

Every unfamiliar behavior consumes working attention. Spend that budget on the concept, not on basic operations.

Reduce extraneous load through:

- strong labels;
- limited simultaneous motion;
- stable landmarks;
- visible state;
- short instructions at the point of need;
- consistent interaction rules;
- direct escape and reset.

### 4.7 Emotion must fit consequence

Playfulness can reduce anxiety in exploration, onboarding, or learning. It can feel disrespectful around loss, failure, health, money, security, or urgent public services. Research emotional context rather than assuming “delight” is universally desirable.

---

## 5. Creative visual techniques

### 5.1 Editorial composition

Borrow from editorial design:

- strong typographic hierarchy;
- asymmetric but anchored grids;
- pull quotes and marginalia;
- changes in measure and scale;
- paced image sequences;
- captions treated as part of composition;
- deliberate white space and dense passages;
- recurring running elements.

On the web, composition must respond to content and viewport. Avoid reproducing a fixed poster at every size.

### 5.2 Broken grids and controlled asymmetry

Elements can span, offset, overlap, or escape the base grid to create tension. The base grid should still exist so the deviation feels deliberate.

Protect:

- DOM and reading order;
- text reflow;
- focus visibility;
- sufficient spacing at narrow widths;
- content integrity at zoom;
- touch targets.

### 5.3 Dramatic scale contrast

Large display type or imagery can make a message physical. Pair it with restrained supporting content and fluid sizing. Test short and long titles, translations, landscape mobile devices, and 200% zoom.

### 5.4 Expressive typography

Techniques include:

- variable weight, width, slant, grade, or optical-size axes;
- responsive display scale;
- typographic illustration;
- kinetic type tied to meaning;
- mixed serif/sans/mono roles;
- alternate glyphs or custom lettering;
- contrast between voice and information;
- text paths used sparingly for display content.

Variable fonts can combine ranges of weight, width, style, or other axes in fewer files than many separate static fonts and enable fine typographic control. File size still needs testing and subsetting. See [Variable fonts on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Fonts/Variable_fonts).

Keep important reading as real text. Do not convert paragraphs or navigation to outlines, canvas pixels, or inaccessible SVG paths for visual control.

### 5.5 Perceptual color systems

Color can establish a world, signal sequence, or react to content. Modern CSS supports perceptual color spaces such as OKLCH, useful for controlling lightness, chroma, and hue more predictably than older models. See [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Color_values).

Creative uses:

- semantic color that changes with chapter or object;
- controlled wide-gamut accents with sRGB fallbacks;
- relative colors for state families;
- generative palettes constrained by contrast;
- gradients derived from content data;
- color transitions as orientation.

Always measure contrast in final rendered states, including text over media, blends, gradients, disabled states, and forced-colors modes.

### 5.6 Shape, clipping, masking, and collage

`clip-path`, SVG masks, CSS masks, and layered media can break the rectangular feel of the web. CSS clipping can define visible regions through basic shapes, polygons, paths, or SVG clip sources. See [Introduction to CSS clipping](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Masking/Clipping).

Use these for art direction, reveals, or relationships—not for critical text or controls that need a stable hit area.

### 5.7 Texture, blend, filters, and materiality

Noise, grain, halftone, blur, blend modes, shadows, lighting, and scan effects can make digital surfaces feel material. Keep texture resolution appropriate and avoid continuous GPU-heavy filters across large layers.

Test:

- text contrast;
- battery and GPU cost;
- scrolling on mid-range mobile devices;
- screenshots and print;
- forced colors;
- whether the texture supports the concept or imitates a trend.

### 5.8 Original image systems

A coherent image system may use:

- commissioned photography;
- illustration with explicit rules;
- archival material;
- macro or process imagery;
- responsive crops and art direction;
- data-driven images;
- 3D renders;
- user-created compositions;
- generative imagery with provenance and human review.

Distinctiveness comes from selection, relationship, sequencing, and consistency—not merely from making images unusual.

### 5.9 Spatial layering

Depth can communicate hierarchy or narrative through scale, occlusion, shadow, blur, parallax, and perspective. Maintain a stable foreground for reading and controls. Avoid large uncontrolled parallax, which can create motion discomfort and conflict with scrolling.

### 5.10 Data as visual material

Data can drive color, shape, rhythm, sound, or composition while remaining interpretable. Separate:

- decorative data-derived expression;
- explanatory visualization;
- operational data used for decisions.

If users must read or compare values, provide labels, units, source, freshness, and accessible alternatives.

---

## 6. Creative interaction and motion techniques

### 6.1 Motion with a semantic role

Motion should explain at least one of:

- causality;
- continuity;
- hierarchy;
- state change;
- spatial relationship;
- progress;
- feedback;
- narrative pacing.

Define a motion grammar:

- duration ranges;
- easing families;
- entrance/exit relationships;
- which objects preserve continuity;
- which properties may animate;
- concurrency limits;
- reduced-motion equivalents.

### 6.2 View transitions

The View Transition API can animate between DOM states and, where supported, same-origin document navigations. It is useful for maintaining context: a gallery thumbnail becoming a detail image, an item moving when a collection is filtered, or a persistent element staying anchored across pages. See [MDN’s View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API).

Use it when continuity helps comprehension. Do not animate every navigation identically merely because the API makes it easy. Build a normal navigation fallback.

### 6.3 Scroll-driven narrative

Scroll can control progress through a sequence, diagram, map, product view, or chapter. CSS scroll-driven animations can tie keyframes to a scroll or view-progress timeline without a JavaScript scroll listener. See [CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations).

Good uses:

- revealing steps in a process;
- transforming one state into another while annotations change;
- synchronizing an illustration with adjacent narrative;
- showing progress through a long piece.

Risks:

- scroll-jacking;
- excessive motion;
- hidden content;
- broken keyboard/page navigation;
- poor performance on complex layers;
- losing context at different viewport heights;
- assuming a single scroll speed.

Keep scrolling native and allow content to remain meaningful without the animation.

### 6.4 Direct manipulation

Dragging, sorting, scrubbing, rotating, drawing, or assembling can turn explanation into experience. Use direct manipulation when the act itself teaches or creates value.

Requirements:

- visible affordance;
- keyboard or non-drag alternative;
- large targets;
- constraint and feedback;
- safe reset and undo;
- instructions only where needed;
- usable touch behavior;
- no precision requirement beyond the device or user’s ability.

WCAG 2.2 includes a requirement for functionality that uses dragging to have a non-dragging alternative unless dragging is essential. See [What’s New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).

### 6.5 Cursor-reactive behavior

Pointer proximity, tilt, magnets, spotlights, and custom cursors can create tactility. Use them as enhancement, because touch, keyboard, voice, eye tracking, and many assistive inputs have no hover pointer.

Never:

- hide the native cursor without a robust replacement;
- make cursor following the only affordance;
- require exact pointer paths;
- create lag between pointer and response;
- let a visual trail obscure content;
- apply magnetic movement to consequential actions.

### 6.6 Physics and procedural motion

Springs, particles, flocking, gravity, collision, and procedural animation can make a system feel alive. Constrain the system so users can understand cause and effect. Cap object counts, pause when offscreen or hidden, and test frame time on real devices.

### 6.7 Scroll snap and chaptered experiences

CSS Scroll Snap can create galleries or discrete chapters while preserving native scrolling. Prefer optional/proximity snapping over mandatory snapping for long content, and avoid layouts where content taller than the snap area becomes unreachable. See [Basic concepts of scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts).

### 6.8 Sound and audio-reactive design

Sound can communicate atmosphere, rhythm, confirmation, or spatial behavior. The Web Audio API supports routing, effects, visualization, and spatial audio. See [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).

Rules:

- audio starts only after an intentional user action;
- visible mute, volume, and stop controls remain available;
- the experience works without sound;
- important audio has captions, transcripts, or equivalent information;
- audio state persists sensibly across navigation;
- sound does not compete with screen readers or the user’s media;
- respect environmental context.

### 6.9 Easter eggs and reward

Optional secrets can strengthen brand intimacy and exploration. They should not contain essential information, block tasks, or be mistaken for broken behavior. The best rewards relate to the concept rather than random novelty.

---

## 7. Technology choices

Technology should follow the concept and risk profile. Use the least complex layer that expresses the idea reliably.

### 7.1 Semantic HTML: the durable core

Start with meaningful documents and controls:

- headings and sections;
- links for navigation;
- buttons for actions;
- lists, figures, captions, tables, forms, and landmarks;
- URLs for meaningful destinations;
- native media controls or accessible custom equivalents.

Semantic HTML improves keyboard behavior, accessibility, search, sharing, resilience, and maintainability. It also gives expressive layers something stable to enhance.

### 7.2 Modern CSS

#### Grid and subgrid

CSS Grid supports editorial, overlapping, asymmetric, and responsive composition. `subgrid` lets nested elements align with parent tracks and is widely available across modern browsers. See [MDN Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid).

#### Container queries

Container queries let a component respond to the size or characteristics of its container rather than only the viewport. This supports reusable creative modules that change composition depending on placement. See [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries).

#### Fluid sizing

Functions such as `clamp()`, `min()`, and `max()` can scale type, spacing, and media continuously while enforcing usable limits. Fluid values still need content and zoom testing.

#### Custom properties and cascade layers

CSS custom properties can encode theme, rhythm, motion, type, and responsive art direction. Cascade layers can make the relationship between reset, system, theme, component, and creative overrides explicit.

#### Color and compositing

OKLCH, `color-mix()`, gradients, masks, blend modes, filters, and backdrop filters enable rich visual systems. Provide readable fallbacks and test render/performance cost.

#### Scroll-driven animation

Prefer CSS timelines for appropriate scroll-linked effects where support and fallbacks meet the audience’s needs. Feature-detect with `@supports` rather than assuming availability.

### 7.3 SVG

SVG is well suited to:

- responsive illustration;
- icons and logos;
- diagrams and maps;
- masks and clipping;
- path-based motion;
- interactive vector objects;
- data visualization.

Inline SVG is available in the DOM and can be made accessible with a title, description, and appropriate labeling. See [SVG in HTML](https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/SVG_in_HTML).

Use raster media when vector complexity produces a larger or slower asset. Optimize exported SVGs and remove editor metadata.

### 7.4 Canvas 2D

Canvas is useful for many frequently changing drawn objects, particles, painting, pixel effects, games, and image processing. It is bitmap-based and does not expose every drawn object as a DOM node. Provide semantic controls and equivalent text/content outside the canvas. See [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

### 7.5 WebGL and 3D libraries

WebGL provides hardware-accelerated 2D and 3D graphics in canvas and is supported in modern browsers, subject to device capability. Libraries such as Three.js reduce the cost of scene, camera, material, asset, and rendering work. See [WebGL on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API).

Use WebGL for:

- a 3D object whose form must be explored;
- spatial data or environments;
- shaders and image transitions unavailable through simpler layers;
- a core interactive visual metaphor;
- controlled high-volume particles or procedural graphics.

Do not use it for:

- a background that could be a compressed image or CSS gradient;
- text and navigation;
- basic card transitions;
- decoration that consumes most of the performance budget.

### 7.6 WebGPU

WebGPU provides modern GPU rendering and compute capabilities, but MDN marked it as limited availability in May 2026. It can enable advanced particles, post-processing, simulation, and compute-heavy experiences, but production use requires capability detection and a meaningful fallback. See [WebGPU API](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API).

### 7.7 WebXR

WebXR can deliver AR and VR experiences on supported hardware, but remains limited and experimental across the full browser/device landscape. Use it only when spatial immersion is central, test on physical devices, and provide a non-XR route. See [WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API).

### 7.8 Popover and anchor positioning

The Popover API supplies browser-level behavior for content displayed above other content and has broad recent availability, though individual details still require compatibility review. CSS anchor positioning can connect overlays to reference elements. These can support annotation, layered editorial notes, and tool-like creative controls without recreating all overlay behavior. See [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) and [CSS `anchor()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/anchor).

### 7.9 JavaScript and animation libraries

Use native CSS for state transitions and straightforward timelines. Use the Web Animations API when runtime control, sequencing, or introspection is needed. See [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

A library becomes useful when the project needs:

- complex synchronized timelines;
- spring/physics behavior;
- cross-browser abstraction for advanced techniques;
- reusable choreography integrated with a framework;
- canvas/WebGL scene management.

Evaluate bundle cost, maintenance, licensing, framework integration, accessibility, and the team’s ability to debug it. Do not adopt a library merely because a reference site used it.

### 7.10 Frameworks and rendering architecture

Creative design does not require a single-page application. Choose architecture based on content and interaction:

| Site need | Likely approach |
|---|---|
| Mostly content, strong art direction | Server-rendered/static pages with CSS and selective JavaScript |
| Editorial collection with a CMS | Static/server rendering plus structured content and enhancement islands |
| Complex shared state or application behavior | Component framework with server rendering and deliberate client boundaries |
| 3D/real-time experience | A light document shell plus isolated graphics runtime |
| Campaign with one signature interaction | Minimal application architecture around the interaction, not a full framework by default |

Protect crawlable content, real URLs, server-rendered critical text, and fast first render.

### 7.11 Technology decision matrix

| Technique | Best for | Main cost | Required fallback |
|---|---|---|---|
| CSS Grid/subgrid | Editorial/asymmetric layout | Layout complexity | Logical one-column flow |
| Container queries | Reusable responsive modules | Containment/debugging | Flexible base component |
| CSS masks/clip paths | Shaped media and reveals | Rendering/compatibility edge cases | Rectangular asset |
| View Transitions | State/navigation continuity | Browser variation, motion | Instant normal update/navigation |
| Scroll timelines | Narrative synchronization | Motion and support variation | Static visible state |
| SVG | Vector art, diagrams, maps | DOM/asset complexity | Text description or raster where appropriate |
| Canvas | Particles, drawing, pixel work | Accessibility, CPU | Semantic DOM content and controls |
| WebGL | 3D and shaders | GPU, battery, asset weight, expertise | Static/video/2D experience |
| WebGPU | Advanced rendering/compute | Limited availability, complexity | WebGL/Canvas/static route |
| Web Audio | Generative or spatial sound | Consent, accessibility, context | Silent complete experience |
| WebXR | Purposeful AR/VR | Hardware/support/testing | 2D product/content route |

---

## 8. Accessibility as a creative constraint

WCAG 2.2 covers perceivable content, operable interfaces, understandable behavior, and robust implementation. It should be a baseline, not the limit of inclusive design. See [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

### 8.1 Preserve semantic and reading order

Visual reordering, overlap, and absolute positioning must not create a different or nonsensical DOM order. Test reading and focus sequence without CSS.

### 8.2 Make unusual interaction perceivable

An affordance should not depend only on cursor change, hover motion, color, or visual proximity. Add labels, instructions at the point of need, focus states, and clear feedback.

### 8.3 Provide keyboard equivalence

Every action needs keyboard access with sensible order and visible focus. Spatial canvases may need a parallel list, search, or structured navigation rather than trying to reproduce mouse movement key by key.

### 8.4 Respect motion preferences

W3C documents `prefers-reduced-motion` as a technique for suppressing motion that can cause distraction or nausea. A robust approach starts with a static experience and adds motion only when the user has not requested reduction. See [W3C Technique C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39).

```css
/* Stable, readable default */
.reveal {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: no-preference) {
  .reveal {
    opacity: 0;
    transform: translateY(1rem);
    transition: opacity 300ms ease, transform 300ms ease;
  }

  .reveal.is-visible {
    opacity: 1;
    transform: none;
  }
}
```

Reduced motion does not always mean no transition. Replace large spatial movement, zoom, parallax, and continuous animation with short fades, discrete states, or immediate updates.

### 8.5 Do not make sound essential

Caption speech, describe meaningful non-speech audio, and supply visible equivalents for audio cues. Autoplay sound is especially disruptive and should be avoided.

### 8.6 Protect text

- Use real text rather than text baked into images.
- Maintain contrast over every frame of animated backgrounds.
- Support zoom and reflow.
- Keep body text at readable measures and line heights.
- Do not use variable-font or kinetic effects that distort essential reading.
- Pause or stop moving text.

### 8.7 Make visual media understandable

Provide alt text, captions, transcripts, long descriptions, or adjacent explanation according to purpose. For interactive diagrams, describe the insight and offer the underlying data where appropriate.

### 8.8 Test beyond compliance

Run:

- automated checks;
- keyboard-only walkthroughs;
- screen-reader testing;
- 200% and 400% zoom/reflow;
- reduced-motion testing;
- contrast and forced-colors testing;
- touch and switch/voice-input review where relevant;
- moderated sessions with disabled participants.

---

## 9. Performance as part of the design

A slow creative site changes the concept. Choreography becomes waiting, exploration becomes friction, and high-resolution art becomes an empty screen.

### 9.1 Use user-centered performance measures

Current Core Web Vitals measure loading, interactivity, and visual stability. Recommended “good” thresholds at the 75th percentile are:

- **LCP:** 2.5 seconds or less;
- **INP:** 200 milliseconds or less;
- **CLS:** 0.1 or less.

See [Web Vitals](https://web.dev/articles/vitals). These metrics do not capture every aspect of a creative experience, but they prevent visual ambition from hiding slow main content, blocked interaction, or shifting layouts.

### 9.2 Set budgets before production

Create budgets for:

- initial JavaScript;
- critical CSS;
- above-the-fold imagery;
- font files and axes;
- 3D geometry and textures;
- video/audio transfer;
- long-task duration;
- animation frame time;
- memory and GPU use;
- third-party scripts.

Budgets should reflect audience devices and networks, not the design team’s computers.

### 9.3 Optimize media deliberately

- Use responsive images with correct dimensions and art direction.
- Serve modern formats where appropriate with fallbacks.
- Avoid loading desktop media on narrow devices when it will be hidden.
- Reserve dimensions to prevent layout shift.
- Poster-frame videos and defer playback media.
- Compress textures and limit 3D material resolution.
- Lazy-load offscreen media without delaying immediately needed content.
- Do not lazy-load the likely LCP asset.

### 9.4 Treat fonts as product assets

- Use WOFF2.
- Subset by language and character need.
- Load only used families and axes.
- Choose fallback metrics to reduce shift.
- Avoid preloading every font.
- Verify license and caching.
- Test whether a variable font is smaller than the actual static styles needed.

### 9.5 Control JavaScript

- Keep the document useful before enhancement.
- Split code by experience, not only route.
- pause observers and render loops when offscreen;
- use workers for appropriate computation;
- avoid layout reads/writes in tight loops;
- animate transform and opacity when possible;
- remove abandoned experiments and duplicate libraries;
- measure third-party scripts.

### 9.6 Control real-time graphics

- cap device pixel ratio;
- adapt particle count and quality to capability;
- compress and stream assets;
- reduce draw calls and overdraw;
- dispose of textures, geometry, and listeners;
- stop the render loop when the page is hidden;
- provide low-power/static modes;
- test thermal throttling and extended use.

### 9.7 Measure field behavior

Lab tools catch regressions before release; real-user monitoring shows actual device, network, and interaction performance. Segment by page type, mobile/desktop, geography, connection, and experience mode. Measure the signature interaction itself, not only page load.

---

## 10. Responsive and adaptive creativity

Responsive creative design should preserve the concept, not the screenshot.

### 10.1 Identify invariants and transformations

For each creative element, define:

- **Invariant:** the meaning or relationship that must survive.
- **Transformation:** how the form can change by space, input, capability, or context.

Example:

- Invariant: visitors compare three eras of a city.
- Wide transformation: parallel synchronized columns.
- Narrow transformation: one era at a time with persistent comparison controls.
- Reduced-motion transformation: discrete image swaps instead of parallax blending.
- Low-capability transformation: static annotated images instead of WebGL.

### 10.2 Design for input capabilities

Use media queries and feature detection for hover, fine versus coarse pointers, reduced motion, contrast, color scheme, and browser capabilities. Do not infer input solely from viewport width.

### 10.3 Let components respond to context

Container queries help a module change its typography, media relationship, or control layout according to the space it actually receives, making creative systems more reusable than page-specific breakpoint overrides.

### 10.4 Art-direct rather than shrink

On small screens:

- choose a meaningful crop;
- reduce simultaneous layers;
- sequence comparisons;
- simplify motion paths;
- move detail behind deliberate expansion;
- preserve readable type and controls;
- shorten, replace, or omit decoration that no longer supports the concept.

### 10.5 Test extreme content

Use:

- the longest and shortest real headings;
- untranslated and expanded localization;
- right-to-left text if relevant;
- missing images and metadata;
- user font-size overrides;
- landscape phone and split-screen tablet;
- zoom and browser UI intrusion;
- safe-area insets;
- low bandwidth and offline recovery.

---

## 11. A production workflow for creative websites

### Phase 1: Frame the outcome

Define:

- audience;
- purpose;
- behavior, feeling, and memory goals;
- critical tasks;
- content and proof;
- risk and constraints;
- measures of success.

### Phase 2: Research the experience territory

Conduct user, stakeholder, content, category, cultural, accessibility, and technical research. Synthesize experience principles and an opportunity map.

### Phase 3: Write several concept theses

Generate distinct concepts that differ structurally, not only aesthetically. Each concept should state:

- the organizing metaphor or rule;
- why it fits the content and audience;
- the signature moment;
- the stable backbone;
- risks and fallbacks;
- what would invalidate it.

### Phase 4: Prototype the highest-risk claim

Match prototype fidelity to uncertainty:

| Uncertainty | Prototype |
|---|---|
| People do not understand the structure | Paper/wireframe navigation prototype |
| Brand perception is unclear | Static/motion concept boards with real content |
| Scroll narrative may disorient | Small coded vertical slice |
| 3D may perform poorly | Technical spike on target devices |
| Interaction may be inaccessible | Semantic prototype tested with keyboard/AT |
| Signature moment may not support the message | Storyboard plus functional moment |

Do not build the whole site to answer one risky question.

### Phase 5: Test concepts with users

Combine perception, comprehension, and behavior. Include participants who are likely to be affected by motion, nonstandard input, dense visuals, or technical requirements.

### Phase 6: Define the system

Document:

- grid and responsive logic;
- type and content roles;
- color semantics;
- image/illustration rules;
- motion grammar;
- interaction patterns;
- component behavior;
- capability tiers and fallbacks;
- performance budgets;
- accessibility acceptance criteria.

### Phase 7: Build the semantic backbone

Make the full content and core tasks work with resilient HTML, CSS, URLs, and forms. Validate reading order, responsiveness, and content before heavy enhancement.

### Phase 8: Add enhancement in layers

Feature-detect optional capabilities. Keep each layer removable and test the experience when:

- JavaScript fails;
- motion is reduced;
- WebGL/WebGPU is unavailable;
- media is slow or missing;
- touch replaces pointer;
- fonts fail;
- the browser is not the team’s primary browser.

### Phase 9: Test and profile continuously

Include accessibility, content, device, browser, performance, and usability QA throughout implementation. Run tests on deployed builds, because asset delivery, caching, fonts, and third parties change real behavior.

### Phase 10: Edit and ship deliberately

Remove effects that do not support concept, meaning, orientation, or feedback. Confirm analytics and privacy behavior. Document fallbacks, browser support, content operations, and known limits.

### Phase 11: Learn after launch

Measure:

- task success and conversion;
- depth and sequence of exploration;
- return behavior;
- completion and abandonment by device;
- performance in the field;
- accessibility/support issues;
- whether users remember the intended message;
- maintenance cost and content-editor experience.

Avoid using scroll depth or time alone as proof of engagement. A confused or trapped user can generate both.

---

## 12. Creative brief template

```md
# Purpose
What must the website accomplish?

# Audience and context
- Primary and secondary audiences:
- Visit modes: task-driven, exploratory, repeat, urgent, social:
- Devices, inputs, environments, connections, abilities:
- Existing beliefs and expectations:

# Desired outcome
- Understand:
- Feel:
- Remember:
- Do:

# Evidence
- User research:
- Content/audience analytics:
- Category conventions:
- Assumptions still to test:

# Content material
- Core story or objects:
- Strongest proof:
- Available media/data:
- Content constraints and ownership:

# Creative opportunity
- Convention to preserve:
- Convention to reinterpret:
- Convention to challenge:
- Organizing concept:
- Signature moment:

# Stable backbone
- Essential navigation:
- Critical tasks:
- Semantic content path:
- Direct/skip route:

# Experience grammar
- Composition:
- Typography:
- Color:
- Image:
- Motion:
- Interaction:
- Sound:

# Technology
- Base platform:
- Enhancement layers:
- Capability detection:
- Fallbacks:
- Performance budgets:

# Accessibility
- Keyboard and focus:
- Reduced motion:
- Alternatives for visual/audio/spatial content:
- Zoom/reflow and contrast:
- Inclusive research participants:

# Risks
- Comprehension:
- Trust:
- Accessibility:
- Performance:
- Browser/device:
- Content operations:
- Technical maintenance:

# Success criteria
- Behavioral:
- Perceptual:
- Accessibility:
- Performance:
- Business/organizational:
```

---

## 13. Creative design evaluation scorecard

Score 0–3:

- **0:** absent or harmful
- **1:** superficial or assumed
- **2:** credible but incomplete
- **3:** specific, coherent, and validated

| Dimension | Question | Score |
|---|---|---:|
| Novelty | Is there a meaningful idea beyond current visual convention? | /3 |
| Usefulness | Does the design help people understand, explore, decide, or act? | /3 |
| Appropriateness | Does expression fit audience, content, context, and consequence? | /3 |
| Concept | Can the organizing idea guide and exclude design decisions? | /3 |
| Content | Does real content shape the experience? | /3 |
| Coherence | Do visual, motion, interaction, and language choices share a grammar? | /3 |
| Orientation | Can users understand location, possibilities, and next action? | /3 |
| Agency | Can people control pace, motion, sound, path, and exit? | /3 |
| Accessibility | Does the concept work across relevant abilities and inputs? | /3 |
| Responsiveness | Does the idea transform intelligently across contexts? | /3 |
| Performance | Does the experience meet budgets on representative devices? | /3 |
| Resilience | Does the essential experience survive missing capabilities or media? | /3 |
| Memorability | Do people remember the intended message, not only the effect? | /3 |
| Maintainability | Can the team operate, update, test, and extend it? | /3 |
| Evidence | Have consequential assumptions been tested? | /3 |

**Interpret carefully:** a high total cannot compensate for a severe accessibility, truth, or critical-task failure.

---

## 14. Common failure modes

### Trend collage

The site combines oversized type, grain, brutalist borders, 3D objects, smooth scrolling, and gradient blobs without a thesis.

**Correction:** Write the organizing idea and remove everything that cannot be derived from it.

### Award-site imitation

The site reproduces another experience’s surface while ignoring differences in content, audience, and purpose.

**Correction:** Extract the structural principle, test its relevance, and rebuild it in the project’s own material.

### Mystery navigation

Users must hover every object or decode symbols to find content.

**Correction:** Preserve visible labels, stable landmarks, an index, or a direct route.

### Scroll-jacking

The page changes normal scroll distance, direction, or momentum to control choreography.

**Correction:** Keep native scroll and link animation progress to it as an enhancement.

### Cinematic loading screen

The brand intro delays content regardless of connection or repeat visit.

**Correction:** load useful content immediately; integrate identity into the experience rather than blocking it.

### Desktop art piece, mobile stack

The expressive design disappears or becomes unusable on mobile.

**Correction:** define conceptual invariants and create a mobile transformation, not a collapse.

### Custom cursor as interaction design

The cursor is decorative, laggy, or the only indication that something can be used.

**Correction:** make it optional enhancement and preserve native affordances.

### 3D wallpaper

A large WebGL scene exists behind conventional copy and consumes the performance budget.

**Correction:** make 3D central to meaning or replace it with lighter media.

### Motion everywhere

Every element reveals, floats, tilts, or responds.

**Correction:** create stillness and reserve motion for causality, continuity, hierarchy, state, and the signature moment.

### Accessibility afterthought

The team attempts to add labels and a reduced-motion toggle after the concept depends on sight, sound, pointer precision, or continuous animation.

**Correction:** research and prototype alternate modes at concept stage.

### Performance by compression alone

Assets are compressed, but architecture still loads unnecessary JavaScript, render loops, fonts, and third parties.

**Correction:** reduce work, dependencies, and initial scope before optimizing bytes.

### Creativity measured only by attention

Time, scroll depth, shares, or awards are treated as success even when comprehension or task completion drops.

**Correction:** pair attention metrics with meaning, behavior, access, and operational outcomes.

---

## 15. Pre-launch checklist

### Concept and content

- [ ] The concept is clear enough to guide and reject decisions.
- [ ] The expression emerges from real content and audience needs.
- [ ] One or two signature moments receive priority over scattered effects.
- [ ] The site remains identifiable without relying only on logo or trends.
- [ ] Claims, media, data, credits, and rights are verified.

### User understanding

- [ ] Purpose is legible in a brief first impression.
- [ ] Navigation and interactive elements are discoverable.
- [ ] Users can choose a direct path as well as an exploratory path.
- [ ] Orientation survives nonlinear or spatial experiences.
- [ ] Research participants remember the intended message.

### Interaction and motion

- [ ] Motion has defined semantic roles.
- [ ] Scrolling remains native and controllable.
- [ ] Dragging has a non-drag alternative where required.
- [ ] Hover behavior is not required for access.
- [ ] Sound is opt-in, controllable, and nonessential.
- [ ] Reset, undo, pause, skip, and exit exist where appropriate.

### Responsive behavior

- [ ] The concept has intentional mobile, tablet, and wide transformations.
- [ ] Touch, keyboard, pointer, and relevant alternate inputs work.
- [ ] Long, translated, missing, and user-scaled content works.
- [ ] Landscape, split-screen, zoom, and safe areas were tested.

### Accessibility

- [ ] Semantic HTML and logical DOM order support the visual composition.
- [ ] The full core experience works with keyboard only.
- [ ] Focus remains visible and unobscured.
- [ ] Reduced motion changes the experience meaningfully.
- [ ] Text contrast holds over all media and animation states.
- [ ] Audio/video has appropriate captions or transcripts.
- [ ] Canvas, SVG, 3D, data, and spatial content have useful alternatives.
- [ ] Disabled participants were included where the concept creates material risk.

### Performance and technology

- [ ] A useful page appears before optional enhancement.
- [ ] Core Web Vitals and project-specific budgets are met in field-like conditions.
- [ ] Media, fonts, 3D assets, and JavaScript are intentionally loaded.
- [ ] Render loops pause offscreen and when hidden.
- [ ] Low-capability, failed-media, and unsupported-browser fallbacks work.
- [ ] The experience was tested on representative mid/low-range hardware.
- [ ] Browser support assumptions are documented and current.

### Operations

- [ ] Editors can preview real responsive and motion behavior.
- [ ] Content changes cannot easily break the composition.
- [ ] Monitoring covers errors, performance, and critical interactions.
- [ ] Analytics respects privacy and measures intended outcomes.
- [ ] The team can maintain the chosen libraries and graphics stack.

---

## 16. Selected sources and further reading

### Creativity, perception, and research

- Berni, Borgianni, and Basso. [Creativity of products as meant by ordinary people: to what extent do novelty and usefulness matter?](https://www.cambridge.org/core/journals/proceedings-of-the-design-society/article/creativity-of-products-as-meant-by-ordinary-people-to-what-extent-do-novelty-and-usefulness-matter/E0A18A1CDEB9B50C8C8E2EE181E33A49), 2024.
- Harvey and Berry. [Toward a Meta-Theory of Creativity Forms: How Novelty and Usefulness Shape Creativity](https://journals.aom.org/doi/abs/10.5465/amr.2020.0110), 2023.
- Tuch et al. [The role of visual complexity and prototypicality regarding first impression of websites](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/), 2012.
- Tractinsky, Katz, and Ikar. [What is beautiful is usable](https://cris.bgu.ac.il/en/publications/what-is-beautiful-is-usable-2/), 2000.
- GOV.UK Service Manual. [Using in-depth interviews](https://www.gov.uk/service-manual/user-research/using-in-depth-interviews).
- GOV.UK Service Manual. [Using moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing).

### Accessibility and performance

- W3C. [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- W3C. [Using `prefers-reduced-motion` to prevent motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39).
- web.dev. [Web Vitals](https://web.dev/articles/vitals).
- web.dev. [Optimize Largest Contentful Paint](https://web.dev/articles/optimize-lcp).

### Web-platform technology

- MDN. [CSS Grid and subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid).
- MDN. [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries).
- MDN. [CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations).
- MDN. [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API).
- MDN. [Variable fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Fonts/Variable_fonts).
- MDN. [CSS color values and OKLCH](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Color_values).
- MDN. [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG).
- MDN. [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
- MDN. [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API).
- MDN. [WebGPU API](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API).
- MDN. [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).
- MDN. [WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API).
- MDN. [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).

---

## Final principle

Creative web design succeeds when the visitor experiences a clear point of view **through** the content and interaction—not when they must fight the content and interaction to see the point of view.

The goal is not maximum novelty. It is an experience whose form could not be swapped onto another project without losing its meaning, whose unconventional moments remain understandable and inclusive, and whose technical execution makes the idea feel inevitable rather than fragile.

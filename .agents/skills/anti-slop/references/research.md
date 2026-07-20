# Bundled Research Reference

This file contains the complete research source for this skill. Use this contents list and targeted searches to load only the sections required by the task.

## Contents

- What AI-made designs do, why they feel generic, and what designers should avoid
- Executive summary
- 1. What “AI slop” means—and what it does not mean
- 2. Why generative AI tends toward slop
- 3. The anatomy of AI slop in visual UI
- 4. AI slop in UX and product behavior
- 5. AI slop in copy and content
- 6. AI slop in imagery, illustration, and iconography
- 7. AI slop in motion and interaction details
- 8. AI slop in design systems and components
- 9. AI slop in front-end implementation
- 10. Why users can sense slop
- 11. What good AI-assisted design should do
- 12. An anti-slop design workflow
- 13. A prompt/brief template for non-slop UI generation
- 14. The anti-slop review scorecard
- 15. Symptom → likely cause → better response
- 16. What AI-made designs should avoid
- 17. What AI-made designs should deliberately do
- 18. Pre-ship anti-slop checklist
- 19. Common myths
- 20. A concise operating policy for teams
- 21. Research limits
- 22. Selected sources and further reading
- Final principle

---

# AI Slop in UI/UX Design

## What AI-made designs do, why they feel generic, and what designers should avoid

**Research date:** July 2026  
**Scope:** AI-assisted websites, apps, product interfaces, UX flows, visual systems, copy, imagery, motion, prototypes, and front-end implementation  
**Purpose:** A practical, evidence-aware guide for using generative AI without replacing design judgment, user evidence, originality, accessibility, or accountability

---

## Executive summary

“AI slop” is not simply “a design made with AI,” nor is it a particular gradient, typeface, component library, or visual trend. The term is still contested. Merriam-Webster’s 2025 definition emphasized low-quality digital content produced, usually in quantity, through AI, while current scholarship notes that *slop* has resisted a precise formal definition. For design work, the most useful definition is operational:

> **AI-design slop is AI-assisted output that appears plausible or polished at first glance, but is generic, weakly situated in a real user problem, incompletely reasoned, insufficiently verified, and released without clear human responsibility.**

Its main failure is not ugliness. Much slop is attractive in a screenshot. Its failure is that the polish does not correspond to a strong product model, truthful content, coherent system, complete interaction, or tested user value.

Good AI-assisted design uses generation as leverage. It gives AI rich context and bounded tasks, compares multiple directions, applies a real design system, checks every state, verifies content and code, tests with people, and leaves final decisions with someone who can explain and defend them.

Bad AI-assisted design delegates the problem itself. It begins with a vague prompt such as “make a modern SaaS landing page,” accepts the first plausible composition, fills it with invented proof and generic language, treats a desktop screenshot as a complete product, and pushes the cost of interpretation, correction, and risk onto users, engineers, reviewers, or customers.

The core rule is:

> **Use AI to expand and accelerate judgment—not to avoid judgment.**

---

## 1. What “AI slop” means—and what it does not mean

The Associated Press reported Merriam-Webster’s expanded definition of *slop* as “digital content of low quality that is produced usually in quantity by means of artificial intelligence.” The definition captures three recurring features: low quality, machine-assisted production, and scale. More recent researchers argue that the term also names an economic behavior: when generation becomes cheap, creators can flood a channel while shifting the cost of filtering and verification to everyone else. See the [Associated Press definition](https://www.ap.org/news-highlights/spotlights/2025/merriam-websters-2025-word-of-the-year-is-slop/), [Why Slop Matters](https://arxiv.org/abs/2601.06060), and [AI Slop and the Software Commons](https://arxiv.org/abs/2604.16754).

For UI/UX, quality should not be reduced to whether a screen looks stylish. A design can be visually clean and still be slop if it:

- does not reflect a real user, task, environment, or business constraint;
- uses familiar patterns without understanding why they fit;
- invents testimonials, customer logos, statistics, capabilities, or compliance claims;
- lacks critical states, edge cases, error recovery, permissions, or accessibility;
- makes content longer, vaguer, or harder to verify;
- cannot be explained beyond “the AI generated it”;
- gives downstream teammates a polished artifact that requires extensive reverse engineering;
- ships at a volume that makes careful review unrealistic.

### AI slop is not

- **All AI-assisted work.** A designer can use AI for exploration, critique, state enumeration, code scaffolding, or production support and still produce thoughtful work.
- **A specific aesthetic.** Purple gradients, glass effects, bento grids, rounded cards, and Inter are not bad by definition. They become slop when used as unexamined defaults rather than deliberate choices.
- **Any use of a component library.** A library can improve consistency and accessibility. Slop occurs when the product merely exposes the library’s defaults without adapting them to the product’s tasks, content, brand, density, and users.
- **Minimalism.** Minimalism is a disciplined reduction to what matters. Slop often removes information because an empty screenshot looks clean.
- **A rough prototype.** A prototype can be intentionally incomplete if its learning question and limitations are explicit. Slop disguises incompleteness as finished work.
- **A synonym for bad taste.** A useful critique names the user, context, failure, and consequence. “Looks AI” alone is not actionable.
- **Proof that AI was used.** Visual clichés are weak signals, not reliable provenance detection. Humans reproduce trends too, and skilled AI-assisted work can be distinctive.

### A more precise quality model

Evaluate an AI-assisted design across eight dimensions:

| Dimension | Non-slop question | Slop signal |
|---|---|---|
| **Specificity** | Does this belong to this product, audience, and moment? | It could be relabeled for almost any startup. |
| **Intentionality** | Can someone explain why each major choice was made? | Choices are justified only as modern, clean, or best practice. |
| **Truthfulness** | Are claims, data, people, and capabilities real or clearly marked? | Fabricated metrics, logos, quotes, dashboards, or “live” status. |
| **Coherence** | Do content, visuals, interactions, and code follow one system? | Each section looks individually plausible but collectively inconsistent. |
| **Completeness** | Does the experience cover real states and failure modes? | It is only a happy-path screenshot. |
| **Originality** | Does it express a relevant point of view? | It recombines the most common patterns with no product-specific idea. |
| **Accountability** | Is a human owner able to verify and defend it? | Nobody can explain, correct, or take responsibility for the result. |
| **Durability** | Can it survive real content, devices, users, and maintenance? | It works only with ideal placeholder data at one viewport. |

---

## 2. Why generative AI tends toward slop

Generative systems can make excellent artifacts, but several properties make low-specificity output a predictable default.

### 2.1 Plausibility is not understanding

Generative models predict likely outputs from patterns in data. They are excellent at reproducing the *surface grammar* of familiar design: a hero, navigation, cards, pricing tiers, testimonials, charts, settings panels, or onboarding steps. That does not mean they possess the situated understanding required to decide what this product should prioritize.

NIST describes “confabulation” as confidently presented but erroneous or false generated content and links it to the statistical nature of generation. In design, confabulation appears not only as false text, but as invented product logic: a setting that has no backend behavior, a metric with no definition, a filter unsupported by data, or a success state that ignores the actual transaction. See the [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence).

### 2.2 Models regress toward common patterns when the brief is open

If a prompt specifies only a category—“AI analytics dashboard,” “creative portfolio,” or “modern finance app”—many important decisions remain blank. The model must fill them using statistically familiar associations. That produces recognizable bundles:

- dark backgrounds with blue-purple gradients;
- a centered headline with glowing text;
- a pill-shaped badge above the hero;
- three feature cards with generic line icons;
- a bento grid containing mini dashboards;
- oversized radii, soft shadows, and glass panels;
- a dashboard sidebar, four KPI cards, and a large line chart;
- the same neutral grotesk typefaces and evenly spaced sections.

Practitioner inventories consistently report these patterns in current generated sites. These observations are useful trend evidence, not controlled proof of model behavior. See [AI Design Slop: 16 Patterns](https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it), [AI Slop Design](https://vibecodekit.dev/ai-slop-design), and [Why AI-built apps look the same](https://v-1.design/blog/why-ai-built-apps-look-the-same).

### 2.3 AI can improve an individual artifact while narrowing the field

In a preregistered writing experiment, Doshi and Hauser found that access to generative-AI ideas could improve individual story evaluations, particularly for less creative writers, while AI-assisted stories became more similar to one another. This is not a UI experiment and should not be treated as direct proof about interface design. It does, however, demonstrate a relevant risk: a tool can raise average polish while reducing collective diversity. See [Generative AI enhances individual creativity but reduces the collective diversity of novel content](https://doi.org/10.1126/sciadv.adn5290).

The design implication is not “avoid AI.” It is to deliberately protect divergence:

- begin from user evidence rather than generated references;
- create genuinely different concepts, not color variants of one layout;
- use different constraints, metaphors, information structures, and art directions;
- compare generated work against the wider market;
- preserve and develop human ideas that initially look less conventional.

### 2.4 Generation is cheap; evaluation remains expensive

AI can produce ten screens faster than a person can carefully evaluate one. This creates an asymmetry: output volume expands, but attention, domain expertise, usability testing, accessibility review, and engineering review do not.

Research on “workslop” frames this as cost transfer. A polished-looking but context-poor artifact saves the sender time while forcing recipients to interpret, verify, repair, or redo it. BetterUp and Stanford Social Media Lab surveyed 1,150 U.S. desk workers in 2025 and reported relational and productivity costs associated with such work. The survey is workplace research, not a design-quality benchmark, but the mechanism maps directly onto design handoffs. See [Workslop: The Hidden Cost of AI-Generated Busywork](https://www.betterup.com/workslop).

In software communities, 2026 research similarly describes low-quality AI contributions as externalizing costs onto reviewers, codebase integrity, public knowledge, and trust. See [AI Slop and the Software Commons](https://arxiv.org/abs/2604.16754) and [An Endless Stream of AI Slop](https://arxiv.org/abs/2603.27249).

### 2.5 Automation bias makes plausible output feel safer than it is

Humans can over-rely on automated recommendations, especially when output is fluent, confident, or difficult to check. A nominal “human in the loop” is not meaningful if that person only approves a finished artifact after the system has anchored the solution.

For design, automation bias can appear as:

- accepting an AI-generated information architecture because it looks complete;
- preserving invented copy because replacing it feels like extra work;
- assuming generated code is semantic or secure because the page renders;
- treating an accessibility claim as validated without testing;
- rationalizing a generated decision after the fact instead of comparing alternatives.

Effective oversight must include time, expertise, evidence, and the authority to reject the output. A human signature at the end is not enough.

### 2.6 Screenshot optimization hides product incompleteness

Many generative design demos are judged by a static preview. The fastest path to a compelling preview is visual composition, not resilient interaction. That encourages:

- perfect placeholder names and evenly sized cards;
- fake charts and fabricated activity;
- no loading, empty, error, timeout, or permission states;
- no long content, translation, zoom, or responsive stress;
- buttons that do nothing;
- visually hidden complexity that returns later in implementation.

The result can win a five-second beauty test and fail a five-minute task.

### 2.7 Weak prompts expose the training-data average

“Make it clean,” “make it premium,” and “use best practices” do not provide a decision system. They ask the model to supply taste, product strategy, brand, content, and constraints simultaneously. Generic output is a predictable response to generic direction.

A good brief does not merely add more adjectives. It supplies evidence and boundaries: who is using the product, what they need to accomplish, what content is real, what the interface must preserve, what can fail, what design system applies, and what familiar patterns should be avoided or challenged.

---

## 3. The anatomy of AI slop in visual UI

Visual slop is easiest to notice, but it should be diagnosed as a pattern of unmotivated decisions rather than a blacklist of styles.

### 3.1 The “generic modern SaaS” bundle

Common signals include:

- blue, violet, cyan, or magenta gradients used without brand or semantic purpose;
- dark navy backgrounds with glow effects around every focal object;
- translucent glass cards regardless of legibility or platform context;
- large rounded rectangles nested inside other rounded rectangles;
- pill shapes for every badge, tab, filter, button, and label;
- a centered hero with an eyebrow badge, gradient headline, two CTAs, and a floating dashboard mockup;
- exactly three benefits or features because the grid is convenient;
- repeated icon-title-paragraph cards with no meaningful information hierarchy;
- bento grids used to display unrelated marketing fragments;
- uniformly generous whitespace that ignores task density;
- indistinct “AI sparkle,” orbit, neural-network, or magic-wand symbols;
- generic sans-serif typography with little contrast between information types;
- mesh gradients, dot grids, noise textures, and blobs added after the composition is already complete.

None of these choices is inherently wrong. The slop signal is **default stacking**: several fashionable conventions appear together even though no product need, brand behavior, or user expectation explains them.

### 3.2 Decoration without information

AI output often makes every area visually active because the prompt requests “engaging” or “premium.” Symptoms include:

- decorative charts whose axes, units, and time ranges are absent;
- colorful status dots with no legend;
- tiny labels and microcopy used as texture;
- random avatars or company logos with no product role;
- large abstract illustrations that delay the primary task;
- visualizations that do not support comparison or action;
- glow, grain, parallax, and floating objects competing with content;
- ornamental UI inside marketing mockups that implies nonexistent features.

A useful test is: **If this element were removed, what user meaning or action would be lost?** If the answer is only “the page would look less designed,” the element deserves scrutiny.

### 3.3 Everything is a card

Cards are useful when they group a distinct object or action. Slop uses cards as a universal styling reflex.

Nested card layouts create:

- weak relationships because every group looks equally bounded;
- wasted space from repeated padding and borders;
- excessive radii and shadows;
- poor scan paths;
- unclear click targets;
- reduced data density;
- mobile layouts that become an endless stack.

Prefer structure before containers: headings, alignment, whitespace, rules, tables, lists, and progressive disclosure. Add a card only when the boundary conveys something real.

### 3.4 False hierarchy

A design may look orderly while giving the wrong things emphasis. Common failures:

- the brand or decoration is more prominent than the task;
- every section has the same visual weight;
- the primary action changes color or wording across screens;
- oversized headings push evidence below the fold;
- supporting metrics are louder than their definitions;
- low-contrast gray text is used to make layouts appear refined;
- small type and wide line lengths create “editorial” atmosphere at the cost of reading.

Visual hierarchy is not an aesthetic ranking. It should reflect the user’s decision sequence.

### 3.5 Arbitrary variation and local polish

Generated screens may be internally plausible but inconsistent as a set:

- radii vary by section;
- shadows use different light directions;
- icon families mix stroke weights and metaphors;
- button heights or label capitalization change;
- one screen is dense and another spacious without task rationale;
- colors shift meaning between success, selection, category, and decoration;
- modals, drawers, and pages are chosen interchangeably for similar actions.

This happens when screens are generated one at a time without a shared system or when each prompt optimizes its own local appearance. The cure is not “make all screens the same.” It is to define invariant rules and intentional exceptions.

### 3.6 Style imitation without structural learning

Prompts such as “make it like Apple,” “Stripe-style,” or “Linear-inspired” often copy visible motifs while missing the deeper reasons those products feel coherent: typography discipline, content editing, interaction timing, product focus, technical performance, or years of system refinement.

Reference responsibly:

1. Name the exact property you are studying.
2. Explain why it fits this user and task.
3. Combine principles from multiple relevant sources.
4. translate them into original tokens, content, and behavior.
5. Check for trademark, copyright, and deceptive similarity concerns.

---

## 4. AI slop in UX and product behavior

The most serious slop often lives beyond the screenshot.

### 4.1 Screen-first design with no task model

AI can quickly propose screens, but users do not experience “screens.” They try to accomplish goals across time, tools, interruptions, and uncertainty.

Screen-first slop lacks answers to questions such as:

- What triggered the user to arrive here?
- What do they already know?
- What must they decide?
- What information do they need before acting?
- What can go wrong?
- What happens after success?
- Can they undo, pause, save, compare, share, or return?
- What does the organization need to record or approve?

Build a task model, journey, or state diagram before polishing screens.

### 4.2 The universal happy path

Generated flows commonly assume:

- data exists;
- network requests succeed immediately;
- users grant permission;
- input is valid;
- accounts are eligible;
- payments succeed;
- integrations connect;
- collaborators agree;
- the user understands domain language;
- the session never expires.

A production flow needs at least:

| State | Questions to resolve |
|---|---|
| **Initial** | What does a first-time user see? What context is needed? |
| **Loading** | Is progress known? Can the user leave or cancel? |
| **Empty** | Is the state expected, filtered, or caused by missing setup? |
| **Partial** | What happens when only some data or actions succeed? |
| **Error** | What happened, what was preserved, and what can the user do next? |
| **Permission** | Why is access needed? What if it is denied or revoked? |
| **Offline/timeout** | What is cached? Can work continue? |
| **Conflict** | How are simultaneous edits or stale data handled? |
| **Destructive** | What is the consequence? Is undo possible? |
| **Success** | What changed? What is the next relevant action? |

### 4.3 Invented product logic

When asked for a complete app, a model may create features that are plausible for the category but unsupported by the actual service. This is especially dangerous when the mockup implies:

- real-time updates without a real-time system;
- “AI insights” without defined inputs, uncertainty, or recourse;
- collaboration without permissions and conflict resolution;
- automatic categorization with no correction mechanism;
- financial, medical, legal, or security status without authoritative data;
- integrations, exports, or notifications that do not exist.

Every visible feature should map to an actual capability, planned capability, or explicitly labeled concept.

### 4.4 Information architecture by template

Generated navigation often follows category conventions: Dashboard, Analytics, Projects, Team, Settings. The labels sound reasonable but may not match the users’ language, mental model, or frequency of use.

Template IA produces:

- duplicate destinations;
- features grouped by technical ownership instead of user goal;
- vague nouns such as Overview, Workspace, Hub, or Resources;
- important tasks buried in menus;
- settings that become a dumping ground;
- desktop sidebars copied into products that need a focused workflow.

Derive navigation from content inventories, task frequency, object relationships, and user language. Validate it with methods such as tree testing or task-based usability testing.

### 4.5 Fake personalization

“Welcome back, Alex,” a generated recommendation, or a “For you” row can create the appearance of a tailored experience. Without meaningful data and control, this is decorative personalization.

Good personalization should answer:

- What signal caused this recommendation?
- Is it accurate enough to help?
- Can the user correct or dismiss it?
- Is the data use expected and permitted?
- What happens for a new user with no history?
- Does personalization hide something the user still needs?

### 4.6 Interaction overload

Generated interfaces may combine modals, sheets, toasts, tooltips, dropdowns, popovers, hover cards, command palettes, and animated panels because each is common in modern systems.

The result can be visually sophisticated but cognitively unstable. Choose interaction forms according to task needs:

- Use a **page** for durable, linkable work with meaningful context.
- Use a **dialog** for a short, interruptive decision that must be resolved.
- Use a **drawer** when preserving background context materially helps.
- Use a **popover** for compact, local, non-destructive choices.
- Use a **toast** for brief confirmation that does not require action or detailed reading.
- Use **inline feedback** when the message belongs to a specific field or object.

### 4.7 Mobile as collapsed desktop

Simply stacking desktop cards creates long, repetitive mobile pages and preserves desktop assumptions about density, hover, sidebars, and simultaneous context.

Responsive design should reconsider:

- the primary task in a mobile context;
- what must remain visible while scrolling;
- touch target size and spacing;
- keyboard and viewport changes;
- one-handed reach;
- data comparison;
- tables and complex filters;
- slow networks and interrupted sessions;
- camera, location, sharing, and platform capabilities;
- whether some desktop functionality should be sequenced instead of compressed.

---

## 5. AI slop in copy and content

Language is part of the interface. Generic or false copy can ruin a visually strong design.

### 5.1 Vague value propositions

Common generated phrases include:

- “Unlock your potential.”
- “Supercharge your workflow.”
- “Revolutionize the way you work.”
- “Seamless collaboration, reimagined.”
- “Empowering teams to achieve more.”
- “Everything you need, all in one place.”
- “AI-powered insights at your fingertips.”

These phrases are grammatically polished but low in information. They often omit:

- the specific user;
- the actual job;
- the mechanism;
- the meaningful outcome;
- the proof;
- the limitation or tradeoff.

A stronger pattern is:

> **For [specific user], [product] helps [perform a concrete job] by [credible mechanism], so [measurable or observable outcome].**

Do not force that sentence into the page verbatim; use it as a truth test.

### 5.2 Fabricated proof

One of the clearest forms of slop is generated credibility theater:

- invented customer logos;
- fake testimonials and headshots;
- fictional press quotes;
- arbitrary “10,000+ teams” counters;
- unsupported “40% faster” claims;
- false ratings or review counts;
- fake security certifications;
- “trusted by leaders” without permission or evidence;
- meaningless claims such as “enterprise-grade” or “bank-level security.”

Rules:

1. Never publish generated proof as fact.
2. Mark prototype data visibly as sample or illustrative.
3. Store the source and owner for every public claim.
4. Remove proof modules when proof does not yet exist.
5. Do not let a familiar landing-page template pressure the team into filling every section.

### 5.3 Placeholder content mistaken for content design

“Lorem ipsum” and evenly sized generated paragraphs produce tidy boxes but hide real design constraints. Real content contains:

- short and long names;
- uncertain or incomplete data;
- legal qualifications;
- domain terminology;
- localization expansion;
- user-generated errors;
- dates, units, currencies, and time zones;
- sensitive and emotionally charged situations.

Design with representative content early. Content is not paint applied after layout.

### 5.4 Repetition and empty elaboration

AI copy often states the same idea in a heading, paragraph, bullet list, and CTA. It may add transitions, adjectives, and summaries that increase reading without increasing meaning.

Edit using an information-gain test:

- What new fact does this sentence provide?
- Does the user need it now?
- Does it change a decision or action?
- Can a label replace a paragraph?
- Can evidence replace a claim?
- Can the sentence be removed without loss?

### 5.5 False certainty and hidden uncertainty

AI-generated microcopy may confidently promise outcomes the system cannot guarantee: “Your transfer is complete,” “Everything is synced,” or “Your data is secure.” Use language that reflects system truth.

Distinguish:

- request received;
- processing;
- locally saved;
- uploaded;
- verified;
- scheduled;
- sent;
- delivered;
- completed by a third party.

Users should not have to infer the system’s confidence or state from reassuring tone.

### 5.6 Synthetic friendliness

Exclamation points, emojis, “magic,” and anthropomorphic AI copy can make every moment sound cheerful. This is inappropriate when the user is dealing with failure, money, health, security, loss, or urgent work.

Match tone to consequence. Respect is more important than personality.

---

## 6. AI slop in imagery, illustration, and iconography

### 6.1 Image spectacle without product meaning

Generated images are often selected because they look impressive, not because they help the user understand, decide, or trust.

Avoid:

- surreal scenes unrelated to the product;
- fake documentary photography used as evidence;
- glossy 3D objects that communicate only “technology”;
- arbitrary astronauts, robots, brains, portals, clouds, and glowing orbs;
- decorative portraits of fictional customers or employees;
- imagery whose visual complexity makes text illegible;
- generated UI shown inside generated devices, creating false product expectations.

Use imagery to do a real job: demonstrate the product, show an authentic person or environment with permission, explain a concept, create a defensible emotional tone, or establish a distinct visual world.

### 6.2 Internal inconsistencies and hidden errors

Even when hands and text look convincing, generated imagery can contain incorrect products, signs, maps, interfaces, cultural objects, lighting, reflections, anatomy, or physical relationships. Review at full resolution and with domain experts when accuracy matters.

For product imagery, check:

- every word and number;
- logos and trademarks;
- device and OS conventions;
- physical feasibility;
- geographic and cultural details;
- continuity across image sets;
- whether the represented feature actually exists.

### 6.3 Bias, stereotyping, and synthetic diversity

Text-to-image systems can reproduce or amplify associations between gender, ethnicity, age, disability, occupation, status, and personality. Research evaluating diffusion models found systematic representation biases, while NAACL research documented gender-ratio amplification under some generation conditions. See [Stable Bias](https://papers.nips.cc/paper_files/paper/2023/hash/b01153e7112b347d8ed54f317840d8af-Abstract-Datasets_and_Benchmarks.html) and [The Bias Amplification Paradox in Text-to-Image Generation](https://aclanthology.org/2024.naacl-long.353/).

Do not solve representation by requesting a single “diverse team” image. Review the collection:

- Who is shown with authority, expertise, or agency?
- Who is shown receiving help?
- Are age, body, disability, religion, class, and geography represented thoughtfully?
- Are people reduced to visible demographic symbols?
- Do names, roles, settings, and images reinforce one another stereotypically?
- Is diversity consistent across the whole experience or confined to marketing?

When authenticity matters, commissioned or properly licensed human-made photography may be more responsible than synthetic representation.

### 6.4 Provenance and disclosure

Users may reasonably care whether an image documents a real event, depicts a real person, or is synthetic. Keep provenance records and disclose generation when omission would materially mislead.

C2PA Content Credentials can cryptographically bind provenance information to an asset. They can help users inspect source and editing history, but they do not prove that the underlying claim is true. See the [C2PA explainer](https://spec.c2pa.org/specifications/specifications/2.2/explainer/Explainer.html).

At minimum, retain:

- tool and model;
- prompt or source inputs when policy permits;
- generation and edit dates;
- human editor/approver;
- usage rights and restrictions;
- source files and licensed references;
- whether disclosure is required by context, contract, platform, or law.

### 6.5 Accessibility is contextual, not automatic

AI can draft alt text, but an image description must communicate the image’s purpose in its context. It may need to convey visible text, relevant anomalies, emotional meaning, data, or the fact that the image is synthetic. Research with creators and screen-reader users emphasizes context and provenance considerations for AI-generated imagery. See [From Provenance to Aberrations](https://research.google/pubs/from-provenance-to-aberrations-image-creator-and-screen-reader-user-perspectives-on-alt-text-for-ai-generated-images/).

Human-review every image description. Decorative images should usually have empty alt text rather than noisy generated descriptions.

---

## 7. AI slop in motion and interaction details

Motion slop treats animation as proof of quality.

Common symptoms:

- every card lifts, scales, or glows on hover;
- scroll-triggered reveals delay ordinary reading;
- animated counters imply live data that is static;
- cursor-following gradients add distraction and GPU cost;
- staggered entrances replay on routine navigation;
- loading skeletons appear for operations too fast to require them;
- success animations celebrate trivial actions;
- spring motion is applied regardless of object, platform, or consequence;
- transitions hide latency instead of communicating state;
- motion has no reduced-motion alternative.

Good motion should clarify at least one of these:

- **causality:** what action produced what result;
- **continuity:** where an object came from or went;
- **hierarchy:** what requires attention now;
- **state:** loading, progress, selection, success, failure, or change;
- **spatial model:** how layers, pages, or objects relate;
- **feedback:** whether an input was received.

If motion provides none of these, remove it or justify it as brand expression with a strict performance and accessibility budget.

---

## 8. AI slop in design systems and components

### 8.1 Component-library leakage

A generated product may look like an untouched component kit: default neutral palette, standard radius, default spacing, familiar sidebar, and stock controls. This is not inherently unusable, but it rarely expresses the product’s content or priorities.

Adapt the system through:

- semantic color roles rather than arbitrary accents;
- type roles tuned to actual information density;
- spacing rules tied to relationship and rhythm;
- appropriate control sizing for devices and users;
- product-specific data displays and object models;
- explicit component behavior and state contracts;
- content rules and interaction patterns;
- documented exceptions.

### 8.2 Token soup

AI-generated code may create many near-duplicate values: 14, 15, 16, 18, and 20px radii; several nearly identical grays; shadows with no named role; or one-off media queries.

The visual output may look fine today while the system becomes expensive to maintain. Consolidate values only after identifying their semantic purpose. A token system should encode decisions, not merely rename every number.

### 8.3 Components without contracts

A reusable component requires more than similar markup. Define:

- purpose and non-purpose;
- content model;
- variants and when to use them;
- interaction states;
- accessibility semantics;
- keyboard behavior;
- responsive behavior;
- loading and error behavior;
- truncation and wrapping;
- analytics or event behavior where relevant.

AI is useful for enumerating this contract, but the product team must validate it.

### 8.4 Inconsistent reuse

Generation may produce a new version of an existing component instead of finding and reusing it. This creates drift in labels, spacing, behavior, and accessibility.

Before generating:

1. provide the current component inventory;
2. require reuse by default;
3. specify allowed variants and tokens;
4. require a written rationale for a new component;
5. review the diff for duplication.

---

## 9. AI slop in front-end implementation

A visually attractive result can still be production slop.

### 9.1 The render-is-done fallacy

Generated code is often evaluated by whether it renders once. Production quality also requires:

- semantic HTML;
- keyboard navigation and visible focus;
- meaningful labels and accessible names;
- correct heading and landmark structure;
- robust forms and validation;
- responsive and zoom behavior;
- reduced motion and contrast support;
- real data contracts;
- authentication and authorization;
- privacy and secure handling;
- performance budgets;
- testing and observability;
- maintainable architecture.

### 9.2 Fake functionality

Watch for:

- buttons with no action;
- links using `#`;
- filters that change only local mock data;
- forms that report success without submitting;
- downloads that generate nothing;
- charts disconnected from data definitions;
- search that matches only hardcoded records;
- artificial delays used to imitate processing;
- controls visible to users who lack permission.

Prototypes may use fakes, but they must be labeled and contained so they cannot be mistaken for a working system.

### 9.3 Dependency and architecture bloat

AI may add a library for a trivial behavior, duplicate utilities, create large monolithic components, or introduce abstractions before the product model is stable.

Review:

- whether a dependency is already available;
- bundle and runtime cost;
- license and maintenance status;
- server/client boundaries;
- data ownership and caching;
- repeated logic;
- component size and responsibility;
- error handling and cleanup;
- tests for meaningful behavior rather than snapshots alone.

### 9.4 Accessibility theater

Adding ARIA attributes does not automatically make a page accessible. The 2025 WebAIM Million detected WCAG-related failures on 94.8% of sampled home pages; common issues included low contrast, missing alternative text, missing form labels, empty links, and empty buttons. The report also notes that pages using ARIA had more detected errors on average, while warning that complexity is a confounding factor. The lesson is not “avoid ARIA,” but **prefer correct native semantics and test behavior**. See [The WebAIM Million 2025](https://webaim.org/projects/million/2025) and [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

Accessibility verification should include:

- automated checks;
- keyboard-only use;
- screen-reader smoke tests;
- 200% and 400% zoom/reflow;
- contrast measurement;
- touch target checks;
- motion and animation settings;
- forced-colors/high-contrast modes where relevant;
- representative testing with disabled people for consequential flows.

### 9.5 Reviewer-cost externalization

The author of AI-generated code is responsible for understanding it before handoff. “The tool wrote it” is not an acceptable explanation of behavior, security, or tradeoffs.

Require the contributor to:

- run and test the work;
- explain major decisions;
- identify AI-assisted areas if team policy requires it;
- remove unused or speculative code;
- document known limits;
- keep changes scoped and reviewable;
- respond competently to review feedback.

---

## 10. Why users can sense slop

Users may not identify a specific gradient or component, but they notice the mismatch between polish and meaning.

### 10.1 Low information scent

Generic labels and decorative cards provide weak clues about where to go and what will happen. The page looks organized, but navigation requires interpretation.

### 10.2 Processing fluency without substance

Symmetry, familiar patterns, short text, and polished visuals are easy to process at first. That initial fluency can feel professional. But if the interface fails to answer the user’s real questions, the ease becomes emptiness. Good design combines fluency with useful information; it does not use fluency to conceal its absence.

### 10.3 Expectation mismatch

High visual polish raises expectations for capability, reliability, and care. Broken buttons, shallow features, false claims, or poor error handling then create a larger trust violation than a clearly unfinished prototype would.

### 10.4 Uncanny sameness

When many products use the same generated patterns, users may struggle to form a distinct memory or sense of ownership. The product feels temporary, interchangeable, or optimized for a launch screenshot rather than continued use.

### 10.5 Missing evidence of care

Care appears in details that mass generation tends to skip:

- terminology that matches the domain;
- a useful empty state;
- preserved work after an error;
- realistic examples;
- humane handling of sensitive moments;
- sensible keyboard behavior;
- an explanation of why a recommendation appeared;
- a clear path to undo or contact a person.

Users may not praise these individually, but their presence creates confidence.

### 10.6 Trust is relational

Slop makes recipients do the work the creator avoided. A user must determine whether claims are real, a reviewer must reconstruct intent, an engineer must discover missing states, or a support team must explain a confusing flow. Repeated cost transfer makes the product and its maker feel careless.

---

## 11. What good AI-assisted design should do

AI is most useful when the team gives it an appropriate role.

### Good uses

- summarize and organize provided research while preserving links to evidence;
- generate alternative framings and clearly different concepts;
- enumerate edge cases, states, permissions, and failure modes;
- create provisional wireframes for specific learning questions;
- draft content variants from a verified content model and voice guide;
- stress-test layouts with long, short, missing, localized, or unusual data;
- map existing components and suggest reuse;
- scaffold front-end code within known architecture and design-system rules;
- generate test cases and accessibility-review prompts;
- critique a proposal from different user, domain, or operational perspectives;
- produce temporary imagery for exploration when it is labeled and replaced or approved;
- automate repetitive production after the design decisions are established.

The Nielsen Norman Group’s survey of UX professionals documented uses such as exploring content variations, ideating scenarios, role-playing stakeholders, identifying gaps, and validating ideas. These are support activities—not evidence that the output is correct. See [Common UX Tasks Performed with Generative AI](https://media.nngroup.com/media/articles/attachments/Common-Tasks_AI-in-UX.pdf).

### Human-owned responsibilities

Humans must own:

- problem framing and success criteria;
- research quality and interpretation;
- selection of whose needs matter;
- domain truth;
- ethical and legal judgment;
- prioritization and tradeoffs;
- art direction and brand point of view;
- product behavior and service feasibility;
- accessibility acceptance;
- final content and claim approval;
- usability validation;
- release decisions and accountability.

### A useful responsibility split

| Activity | AI can assist | Human must decide/verify |
|---|---|---|
| Research synthesis | Cluster notes, identify themes, find contradictions | Source quality, participant meaning, conclusions |
| Ideation | Produce alternatives under explicit constraints | Which problem and direction deserve investment |
| UX flow | Draft steps and enumerate states | Actual task model, policy, feasibility, recovery |
| Visual design | Explore compositions and art directions | Distinctive system, hierarchy, appropriateness |
| Content | Draft variants and transformations | Facts, voice, claims, sensitivity, final wording |
| Imagery | Explore concepts and variants | Rights, representation, truthfulness, disclosure |
| Accessibility | Suggest checks and code patterns | Conformance and real assistive-technology behavior |
| Code | Scaffold and refactor scoped work | Architecture, security, correctness, maintainability |
| Testing | Generate cases and scripts | Test validity, observation, severity, shipping decision |

---

## 12. An anti-slop design workflow

### Phase 1: Establish the truth packet

Before asking AI to design, assemble:

- **Users:** roles, experience levels, abilities, motivations, anxieties, language, and context of use;
- **Jobs:** concrete tasks and desired outcomes;
- **Evidence:** interview notes, analytics, support themes, field observations, and known limits;
- **Content:** real or representative data, terminology, claims, and ownership;
- **Product model:** objects, relationships, permissions, lifecycle, and business rules;
- **Constraints:** platform, devices, performance, regulation, localization, delivery scope, and technical architecture;
- **Design system:** tokens, components, content rules, accessibility patterns, and exceptions;
- **Brand:** principles, voice, visual behaviors, and examples—not just adjectives;
- **Risks:** sensitive data, harmful errors, misleading outputs, abuse, and fallback needs;
- **Success:** user and business measures plus what would count as failure.

Unknowns should be labeled as unknowns. Do not let the model silently invent them.

### Phase 2: Define the decision before generating artifacts

Write the question the design must answer:

> “Can a first-time operations manager identify which failed orders need intervention, understand why, and resolve the highest-risk case without losing work?”

This is better than “design an operations dashboard” because it establishes user, task, prioritization, and an observable outcome.

### Phase 3: Diverge structurally

Request three to five concepts that differ in meaningful ways:

- information architecture;
- interaction model;
- prioritization logic;
- content strategy;
- degree of automation;
- visual density;
- art direction.

Do not count palette swaps as concepts. Require each direction to include:

- its central idea;
- the user evidence it serves;
- important tradeoffs;
- risks and assumptions;
- what would make the team reject it.

### Phase 4: Select with criteria, not vibes

Score directions against:

- task success;
- user comprehension;
- evidence fit;
- feasibility;
- accessibility;
- truthfulness;
- distinctiveness;
- system coherence;
- operational burden;
- risk.

Keep a decision log. A short rationale prevents generated choices from becoming permanent through inertia.

### Phase 5: Build the behavioral skeleton

Before high-fidelity polish, define:

- objects and actions;
- page and navigation model;
- state matrix;
- validation and recovery;
- permissions;
- undo/confirmation rules;
- data provenance and freshness;
- system confidence and uncertainty;
- escalation to support or a human;
- success and next steps.

### Phase 6: Apply a visual thesis

A visual thesis is more specific than “clean and modern.” It connects form to product meaning.

Example:

> “This is a high-frequency incident tool used under time pressure. The interface should feel operational rather than promotional: compact but calm, typography-led, restrained color reserved for status and risk, persistent context, and almost no decorative motion.”

Then define:

- type roles and reading widths;
- spacing density;
- container logic;
- color semantics;
- icon and illustration rules;
- motion purposes;
- contrast and focus requirements;
- explicit anti-goals.

### Phase 7: Generate within the system

Provide the exact available components, tokens, and patterns. Tell the AI:

- reuse before creating;
- do not invent features, data, claims, or components;
- flag missing inputs;
- state assumptions;
- produce a change list;
- separate provisional content from approved content;
- include every required state.

### Phase 8: Stress the design

Test with:

- 320px mobile width and wide desktop;
- 200%/400% zoom;
- keyboard only;
- reduced motion;
- dark/light or forced colors when supported;
- long names and translated strings;
- empty, partial, stale, and conflicting data;
- slow, offline, failed, and retried requests;
- first-time and expert users;
- restricted permissions;
- destructive and irreversible actions;
- a user under time pressure or emotional stress.

### Phase 9: Verify with independent methods

Do not ask the same model that created the output to be the only reviewer. Use:

- source checking;
- design-system linting;
- automated accessibility checks;
- manual assistive-technology checks;
- code review;
- security and privacy review where relevant;
- analytics instrumentation review;
- task-based usability testing;
- domain-expert review;
- human editorial review.

### Phase 10: Remove generation residue

Before shipping, remove:

- placeholder and fabricated content;
- unused components and dependencies;
- decorative filler;
- duplicate copy;
- comments that merely narrate obvious code;
- speculative settings and controls;
- one-off tokens;
- dead actions;
- unjustified animations;
- patterns included only because the original generation produced them.

---

## 13. A prompt/brief template for non-slop UI generation

Use this as an input structure, not a magic anti-slop incantation. If everyone uses the same stylistic prompt, that prompt becomes the next default.

```md
# Design task
[The decision or user outcome this design must support]

# Users and context
- Primary user:
- Experience/ability considerations:
- Environment, device, urgency, and interruptions:
- What they know before arriving:
- What they fear or need to trust:

# Evidence
- Research findings:
- Analytics/support evidence:
- Assumptions that are not yet validated:

# Product model
- Core objects and relationships:
- Available actions:
- Permissions:
- Business rules:
- Real system capabilities:
- Capabilities that must NOT be implied:

# Content
- Approved terminology:
- Real/representative examples:
- Verified claims and sources:
- Voice and tone rules:
- Prohibited invented content:

# Required flow and states
- Entry points:
- Primary path:
- Loading/empty/partial/error/offline states:
- Validation and recovery:
- Destructive actions and undo:
- Success and next step:

# Design system
- Existing components:
- Tokens:
- Accessibility patterns:
- Platform conventions:
- Reuse requirements:

# Visual thesis
[One paragraph connecting visual choices to user and product needs]

# Avoid
- Unmotivated gradients, glass, glow, or card nesting
- Generic marketing claims
- Fake data, logos, people, or testimonials
- New components where existing ones work
- Decorative charts or nonfunctional controls
- [Project-specific anti-goals]

# Deliverables
- [Artifacts]
- Include rationale, assumptions, state inventory, and unresolved questions
- Clearly label provisional content and behavior

# Acceptance criteria
- [Observable user, accessibility, content, technical, and brand requirements]
```

---

## 14. The anti-slop review scorecard

Score each item from 0 to 3:

- **0 — absent or harmful**
- **1 — superficial / mostly assumed**
- **2 — adequate but incomplete**
- **3 — specific, evidenced, and verified**

| Area | Review question | Score |
|---|---|---:|
| User | Is a real user and context explicitly represented? | /3 |
| Task | Does the design improve a concrete task or decision? | /3 |
| Evidence | Are major choices tied to research, data, domain truth, or testable hypotheses? | /3 |
| Content | Is content specific, useful, concise, and owned? | /3 |
| Truth | Are claims, metrics, imagery, and capabilities verified or clearly labeled? | /3 |
| IA | Do labels and grouping match the user’s mental model? | /3 |
| States | Are loading, empty, error, permission, partial, and success states covered? | /3 |
| Recovery | Can users correct, undo, retry, leave, and resume appropriately? | /3 |
| Accessibility | Has behavior been tested beyond adding ARIA or running one tool? | /3 |
| Responsive | Has the task been reconsidered across devices and inputs? | /3 |
| Visual hierarchy | Does emphasis match the user’s decision sequence? | /3 |
| Originality | Does the product express a relevant point of view rather than defaults? | /3 |
| System | Are components, tokens, language, and behaviors coherent and reusable? | /3 |
| Implementation | Does the real product behave as the design promises? | /3 |
| Accountability | Can an owner explain, verify, and defend every consequential choice? | /3 |

**Interpretation:**

- **38–45:** Strong basis for production, subject to normal validation.
- **29–37:** Promising but important gaps remain.
- **18–28:** Polished prototype risk; substantial design work is still needed.
- **0–17:** Likely slop or an artifact too early to evaluate as a product.

The total is a conversation aid, not a scientific measurement. A single zero in truthfulness, safety, or accessibility may block release regardless of total score.

---

## 15. Symptom → likely cause → better response

| Symptom | Likely cause | Better response |
|---|---|---|
| Purple gradient, glass cards, glowing hero | No art direction; model filled stylistic blanks | Write a visual thesis and semantic color rules; remove effects without a job |
| Three generic feature cards | Template completion | Reorganize around real user questions, evidence, or workflow |
| Every object is inside a card | Container-as-style reflex | Use hierarchy, alignment, lists, tables, and rules before containers |
| Huge headline, little substance | Screenshot/marketing optimization | Lead with concrete outcome, mechanism, proof, and relevant action |
| Invented metric or testimonial | Template requested proof the team does not have | Remove module or replace with approved, sourced evidence |
| Dashboard full of charts | Category imitation | Define decisions each visualization supports; delete the rest |
| Same layout across unrelated screens | One-shot generation or component overuse | Model tasks and content separately; retain only useful invariants |
| Different styles across screens | Screens generated independently | Establish tokens, components, and rules before expansion |
| Vague labels such as “Optimize” or “Enhance” | Generated marketing language | Use domain verbs and state the object/action explicitly |
| Only ideal data | Placeholder-driven composition | Stress with empty, long, partial, stale, and invalid content |
| Mobile is a long stack | Desktop collapse | Re-prioritize and sequence for mobile context |
| Many hover glows and scroll reveals | Motion used as polish | Keep only motion that explains cause, state, or spatial continuity |
| ARIA everywhere but keyboard breaks | Accessibility by code pattern | Prefer native semantics and test with keyboard/screen reader |
| New dependency for minor behavior | Local code generation | Check existing utilities and justify dependency cost |
| AI output requires major reviewer reconstruction | Author did not understand/curate it | Require a rationale, self-review, tests, and scoped handoff |

---

## 16. What AI-made designs should avoid

### Avoid delegating the problem

Do not ask AI to decide who the user is, which problem matters, what success means, and what ethical tradeoffs are acceptable.

### Avoid one-shot production

The first result is a proposal, not a conclusion. Generate alternatives, critique them, combine deliberately, and validate.

### Avoid aesthetic negative prompts as the whole strategy

“No gradients, no glass, no Inter” may remove current clichés but will not create relevance. Anti-slop design is not a new surface style. It is a better reasoning and verification process.

### Avoid fake specificity

Random statistics, names, dashboards, and customer quotes make a design look complete while making it less trustworthy.

### Avoid confusing consistency with sameness

A system should be coherent, but different tasks may need different densities, compositions, or interaction modes. Consistency means the same rule produces the same result—not that every screen has the same silhouette.

### Avoid generating users instead of researching users

AI-generated personas can help identify questions, but they are not research participants and should not be cited as evidence. A model role-playing a user reproduces its training patterns and the prompt’s assumptions.

### Avoid using AI as its own fact checker

Verification requires authoritative sources, real system behavior, domain experts, tests, and users. A second fluent answer is not independent evidence.

### Avoid letting volume overwhelm review

Set generation budgets. Ask for fewer, better-explained concepts. Do not create 30 screens when the team can carefully review five.

### Avoid hiding AI use when provenance affects trust

Disclose synthetic media or automated decisions when a reasonable user could otherwise be materially misled. Retain internal provenance even when public disclosure is not needed.

### Avoid shipping behavior nobody owns

Every feature, recommendation, claim, and state needs an accountable human or team.

---

## 17. What AI-made designs should deliberately do

1. **Start with evidence.** Give the model actual research, content, system rules, and constraints.
2. **Expose uncertainty.** Label assumptions, unknowns, provisional content, and model confidence where relevant.
3. **Create meaningful divergence.** Explore different structures and product ideas, not only styles.
4. **Explain decisions.** Require rationale and tradeoffs, then challenge them.
5. **Use real content early.** Layout should serve information, not placeholder symmetry.
6. **Respect the system.** Reuse components and tokens; create new ones only for a real gap.
7. **Design all states.** Treat error, empty, permission, offline, and recovery as core product moments.
8. **Preserve user agency.** Offer correction, undo, dismissal, escalation, and control over automation.
9. **Make truth visible.** Clarify data source, freshness, status, uncertainty, and what the system actually did.
10. **Test accessibility behavior.** Do not treat generated markup or an automated score as acceptance.
11. **Stress before polishing.** Use adverse content, devices, states, and environments.
12. **Edit aggressively.** Remove generated repetition, decoration, dependencies, and speculative features.
13. **Verify independently.** Use sources, experts, tests, and user observation.
14. **Keep a human owner.** Someone must understand the work deeply enough to defend or reject it.

---

## 18. Pre-ship anti-slop checklist

### Purpose and evidence

- [ ] The primary user, context, task, and success condition are explicit.
- [ ] Major choices trace to evidence or a clearly labeled hypothesis.
- [ ] AI-generated personas or summaries are not presented as user research.
- [ ] The product solves more than a screenshot problem.

### Content and truth

- [ ] Every public claim has a source and owner.
- [ ] No fabricated customer logo, quote, rating, metric, certification, or press mention remains.
- [ ] Prototype/sample data is labeled.
- [ ] System messages reflect actual status and confidence.
- [ ] Copy uses domain language and adds information rather than atmosphere.
- [ ] Sensitive moments have an appropriate tone.

### UX completeness

- [ ] Entry, exit, return, and resume behavior are defined.
- [ ] Loading, empty, partial, error, timeout, offline, permission, and success states are covered.
- [ ] Validation preserves user input and explains recovery.
- [ ] Destructive actions have appropriate confirmation or undo.
- [ ] Automation can be corrected, dismissed, or escalated where needed.
- [ ] Navigation labels match user language and task structure.

### Visual design

- [ ] A visual thesis connects aesthetics to user and product needs.
- [ ] Every decorative effect has a purpose or has been removed.
- [ ] Cards represent real groups or objects rather than default styling.
- [ ] Hierarchy follows the user’s decision sequence.
- [ ] The design remains clear with long, short, missing, and translated content.
- [ ] The result is recognizably this product without depending on a logo swap.

### Imagery and motion

- [ ] Generated imagery has been inspected at full resolution.
- [ ] Representation and stereotyping were reviewed across the whole set.
- [ ] Rights, provenance, edit history, and disclosure needs are documented.
- [ ] Alt text is contextual and human-reviewed.
- [ ] Motion communicates cause, continuity, hierarchy, state, or feedback.
- [ ] Reduced-motion behavior works.

### System and implementation

- [ ] Existing components and tokens are reused where appropriate.
- [ ] New components have documented purpose and behavior.
- [ ] No fake actions, dead links, or simulated success remain.
- [ ] Data and permissions match the real system.
- [ ] Dependencies, abstractions, and one-off values have been reviewed.
- [ ] The contributor understands and can explain generated code.

### Accessibility and validation

- [ ] Automated accessibility checks pass within documented limits.
- [ ] The complete task works with keyboard only.
- [ ] Focus order, focus visibility, headings, labels, and announcements are correct.
- [ ] Zoom, reflow, contrast, touch targets, and reduced motion were checked.
- [ ] Representative devices, breakpoints, data states, and network conditions were tested.
- [ ] Consequential flows received usability and domain review.

### Accountability

- [ ] Assumptions and unresolved risks are documented.
- [ ] A named owner approved content, behavior, accessibility, and release.
- [ ] The artifact does not transfer avoidable interpretation or cleanup to the next person.

---

## 19. Common myths

### “If it looks AI-generated, it is slop.”

Not necessarily. A visual pattern can be generic yet functional, or intentionally familiar. Diagnose specific harms and missing reasoning.

### “Unique styling fixes slop.”

Novel colors and typefaces cannot repair false claims, broken workflows, inaccessible behavior, or missing states.

### “A detailed prompt guarantees quality.”

Detail helps only when it contains relevant truth and constraints. A long pile of aesthetic adjectives can still produce shallow work.

### “Human review makes it safe.”

Review works only when the reviewer has context, skill, time, independence, and authority to reject the result.

### “Design systems cause sameness.”

Weak art direction and generic product thinking cause sameness. A strong system creates coherence while allowing intentional expression.

### “AI should only be used for rough drafts.”

AI can assist throughout production, including testing, refactoring, content transformation, and asset work. The right boundary depends on risk, traceability, and verification—not a universal project phase.

### “Removing current clichés makes a design human.”

Once an anti-slop style becomes widely prompted, it becomes another cliché. Human quality comes from situated judgment, not a fixed aesthetic tell.

### “More generated options create more creativity.”

More options can create anchoring, repetition, and review fatigue. Diversity must be designed into the constraints and concepts.

---

## 20. A concise operating policy for teams

Teams can adopt the following policy:

> AI-assisted design is welcome when it increases exploration or execution quality without reducing truthfulness, user evidence, accessibility, maintainability, or accountability. The person submitting the work owns it fully. Generated claims and content must be verified; synthetic media must retain provenance; critical states and edge cases must be designed; code must be understood and tested; and no AI output is accepted solely because it appears polished.

Recommended working rules:

- Declare approved tools, sensitive-data rules, and provenance requirements.
- Require a brief and acceptance criteria before high-fidelity generation.
- Limit unreviewed output volume.
- Keep generated content visibly provisional until approved.
- Require rationale, assumptions, and state inventories in handoffs.
- Define additional review for high-consequence domains.
- Track repeated slop patterns and update project-specific guidance.
- Measure user outcomes, defect rates, accessibility, review time, and rework—not just generation speed.

---

## 21. Research limits

- “AI slop” remains an evolving cultural and scholarly term; there is no universal design-specific diagnostic standard.
- Many lists of “AI-looking” UI patterns come from practitioner observation rather than controlled experiments. They are useful as prompts for review, not proof of authorship or harm.
- Research on creativity, workplace output, text-to-image bias, and software review does not transfer perfectly to UI/UX. This guide uses those findings to identify plausible mechanisms and labels the inference.
- Model behavior changes quickly. Specific aesthetic tells may fade as tools, training data, and prompting practices change.
- Humans have always produced template-driven, low-quality, inaccessible, misleading, and high-volume work. AI changes the speed, scale, plausibility, and accountability structure more than it invents every failure.
- Good outcomes depend on the whole sociotechnical process: tool, data, brief, designer, team incentives, review, users, implementation, and release conditions.

---

## 22. Selected sources and further reading

### Definitions and the economics of slop

- Associated Press. [Merriam-Webster’s 2025 word of the year is “slop”](https://www.ap.org/news-highlights/spotlights/2025/merriam-websters-2025-word-of-the-year-is-slop/).
- Kommers et al. [Why Slop Matters](https://arxiv.org/abs/2601.06060), 2026.
- Silbey and Hartzog. [AI Slop](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5870742), 2025.
- BetterUp Labs and Stanford Social Media Lab. [Workslop: The Hidden Cost of AI-Generated Busywork](https://www.betterup.com/workslop), 2025.
- [AI Slop and the Software Commons](https://arxiv.org/abs/2604.16754), 2026.
- [An Endless Stream of AI Slop: The Growing Burden of AI-Assisted Software Development](https://arxiv.org/abs/2603.27249), 2026.

### Creativity, convergence, and oversight

- Doshi and Hauser. [Generative AI enhances individual creativity but reduces the collective diversity of novel content](https://doi.org/10.1126/sciadv.adn5290). *Science Advances*, 2024.
- NIST. [Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence), 2024.
- Nielsen Norman Group. [Common UX Tasks Performed by UX Professionals with the Help of Generative AI](https://media.nngroup.com/media/articles/attachments/Common-Tasks_AI-in-UX.pdf), 2023.

### Accessibility and representation

- W3C. [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- WebAIM. [The WebAIM Million 2025](https://webaim.org/projects/million/2025).
- Luccioni et al. [Stable Bias: Evaluating Societal Representations in Diffusion Models](https://papers.nips.cc/paper_files/paper/2023/hash/b01153e7112b347d8ed54f317840d8af-Abstract-Datasets_and_Benchmarks.html). NeurIPS, 2023.
- Seshadri, Singh, and Elazar. [The Bias Amplification Paradox in Text-to-Image Generation](https://aclanthology.org/2024.naacl-long.353/). NAACL, 2024.
- Glazko et al. [From Provenance to Aberrations: Image Creator and Screen Reader User Perspectives on Alt Text for AI-Generated Images](https://research.google/pubs/from-provenance-to-aberrations-image-creator-and-screen-reader-user-perspectives-on-alt-text-for-ai-generated-images/). CHI, 2024.
- C2PA. [Content Credentials explainer](https://spec.c2pa.org/specifications/specifications/2.2/explainer/Explainer.html).

### Practitioner pattern inventories

These sources document current visual conventions and community critiques. Treat their pattern lists as field observations, not scientific detection rules.

- [AI Design Slop: 16 Patterns That Out Your App as Vibe-Coded](https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it).
- [AI Slop Design: Why AI-Generated UI Looks Generic](https://vibecodekit.dev/ai-slop-design).
- [Why AI-built apps look the same](https://v-1.design/blog/why-ai-built-apps-look-the-same).
- [Stop the SLOP](https://www.slopless.design/).

---

## Final principle

The opposite of AI slop is not “human-looking.” It is **specific, truthful, coherent, complete, tested, and owned**.

AI can generate options, patterns, language, images, and code. It cannot relieve a team of the responsibility to know whom the design serves, what is true, what can fail, why each decision exists, and whether the finished experience deserves the user’s trust.

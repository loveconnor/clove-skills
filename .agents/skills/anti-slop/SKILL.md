---
name: anti-slop
description: Prevent, diagnose, and remove generic or insufficiently reasoned AI-assisted UI/UX output. Use for new interfaces, redesigns, generated mockups, design reviews, UI implementation, product copy, imagery, motion, or any task where work may be polished but generic, fabricated, incomplete, inaccessible, unverified, or unowned.
---

# Anti-Slop

## Operating principle

Produce work that is specific, truthful, coherent, complete, tested, and owned. Use generation to expand judgment, never to avoid it.

## Load the detailed research

Read `references/research.md` when the task involves a substantial design, an audit, unfamiliar product logic, generated content or imagery, or a high-consequence flow. Use its section headings to find the relevant material. For a small local edit, follow this workflow and load only the relevant reference sections.

Useful searches:

```sh
rg -n '^## (3|4|5|6|7|8|9)\.' references/research.md
rg -n '^## 12\.|^## 14\.|^## 15\.|^## 18\.' references/research.md
rg -n 'fake|fabricat|generic|state|accessib|verify|provenance' references/research.md
```

## Workflow

### 1. Establish the truth packet

Record the real user, job, evidence, content, product objects and rules, permissions, constraints, design system, brand behaviors, risks, success measures, and known unknowns. Do not let missing inputs become invented facts or functionality.

### 2. State the decision

Frame an observable user outcome, not a screen type. Include who acts, what they must understand or complete, under what conditions, and how success is recognized.

### 3. Explore structurally

When direction is unsettled, compare concepts that differ in information architecture, interaction, prioritization, density, automation, content strategy, or art direction. Do not count palette changes as different concepts. State each direction's evidence, tradeoffs, assumptions, risks, and rejection conditions.

### 4. Build behavior before polish

Define objects, actions, navigation, state transitions, validation, permissions, persistence, undo, recovery, confidence, escalation, and success. Cover the full state model before judging the screenshot.

### 5. Apply a visual thesis

Connect form to product meaning. Define type roles, density, containers, semantic color, imagery, icons, motion purposes, focus, contrast, and explicit anti-goals. Prefer one strong expressive lever over a bundle of trends.

### 6. Generate inside the real system

Reuse components and semantic tokens. Do not invent data, claims, actions, components, settings, or permissions. Mark provisional content, state assumptions, and include a change list and required states.

### 7. Stress and verify

Test viewport extremes, zoom, keyboard, reduced motion, themes, long and translated content, empty and partial data, slow/offline/failed requests, permissions, destructive actions, and interruption. Verify claims, code, accessibility, security, privacy, analytics, and task success with methods independent of the generator.

### 8. Remove residue

Delete placeholders, decorative filler, duplicate copy, unused code and dependencies, one-off tokens, dead actions, speculative controls, unjustified animation, fake success, and patterns retained only because a generator proposed them.

## Reject these failure modes

- Generic SaaS template composition without a product-specific reason.
- Decoration without information or hierarchy.
- Everything presented as a rounded card or pill.
- Screen-first design with no task, object, permission, or state model.
- Happy-path-only flows and collapsed-desktop mobile layouts.
- Invented proof, testimonials, metrics, customers, features, or personalization.
- Vague value propositions and atmosphere-only copy.
- Spectacle imagery, motion, 3D, gradients, or charts without product meaning.
- Design-system token soup, components without contracts, and inconsistent reuse.
- Code that renders but contains fake functionality, dependency bloat, or accessibility theater.
- Output whose author cannot explain, verify, maintain, or remove.

Treat these as diagnostic prompts, not universal style bans. Familiar patterns can be excellent when they fit the task; distinctive styling cannot repair false or incomplete behavior.

## Review questions

- Can a reviewer name the user, task, evidence, and success condition?
- Does every public claim have a source and owner?
- Does the hierarchy follow the user's decision sequence?
- Are entry, exit, return, resume, loading, empty, partial, error, timeout, offline, permission, and success states handled where relevant?
- Can users predict consequences, preserve work, recover, and escalate?
- Is the result recognizably this product without relying on its logo?
- Does every visual effect and component have a job?
- Do content, data, permissions, and system messages match reality?
- Were keyboard, focus, zoom, reflow, contrast, reduced motion, and representative conditions checked?
- Can the contributor explain the complete implementation and its tradeoffs?

Do not call the work complete while any material answer is unknown or unsupported.

---
name: design-svg-icons
description: Design, create, implement, optimize, review, and audit SVG interface icons and icon systems. Use when a task involves drawing or refining icons, cleaning exported SVG markup, choosing icon libraries, defining grids, keylines, strokes, fills, optical sizing, or variants, building accessible icon controls, converting SVGs to components or sprites, optimizing with SVGO or SVGR, reviewing consistency and licensing, or handling SVG security.
---

# Design SVG Icons

## Operating principle

Create icons that communicate the correct concept, belong to a coherent visual system, remain legible at their actual use sizes, and ship as clean, accessible, secure, maintainable SVG assets.

Treat semantic clarity, visual quality, SVG quality, accessibility, performance, and rights as separate requirements. A vector is not clean merely because it scales, and a polished icon is not successful if people misinterpret it.

## Load the research

Use `references/research.md` as the detailed source for design rationale, construction guidance, markup patterns, library comparisons, accessibility, security, testing, and citations.

Read the full reference for a new icon system, a substantial redesign, an unfamiliar delivery architecture, or a high-risk accessibility, security, or licensing decision. For focused work, search and read the relevant sections:

```sh
rg -n '^## (What makes an icon good|How to design clean icons)' references/research.md
rg -n '^## (What makes SVG markup clean|SVG delivery choices)' references/research.md
rg -n '^## (Accessible icon and SVG patterns|Security)' references/research.md
rg -n '^## (Optimization and production workflow|Icon libraries and systems)' references/research.md
rg -n 'viewBox|currentColor|optical|pixel|stroke|fill-rule|ID|SVGO|label|contrast|target|license' references/research.md
```

The reference was researched on 2026-07-20. Re-verify current standards, browser behavior, package APIs, inventories, maintenance status, licenses, brand rules, and platform restrictions before relying on time-sensitive details.

## Establish the requirements

Before drawing or changing an asset, determine:

- the intended action, object, state, or concept;
- the people, platform, domain, and use context;
- where the icon appears and whether visible text accompanies it;
- required rendered sizes and device contexts;
- the existing icon family, grid, stroke/fill model, and component API;
- required default, hover, focus, pressed, selected, disabled, loading, warning, error, and directional variants;
- whether the asset is decorative, functional, informative, or complex;
- delivery form: raw SVG, external image, inline markup, sprite, framework component, native platform symbol, or icon font;
- source, license, trademark, attribution, and modification constraints;
- what users must understand and how that understanding will be tested.

Inspect the product and existing assets before asking the user. Ask when an unresolved choice would change the metaphor, supported sizes, visual language, behavior, rights, or definition of done.

## Workflow

### 1. Define meaning before geometry

Write one canonical name and one-sentence purpose. Search the existing family and relevant platform or domain conventions. Prefer a familiar, semantically correct symbol; do not choose an approximate icon solely to avoid custom work.

Use one base object and at most one modifier when possible. If the icon needs several modifiers or a long explanation, use text, a larger pictogram, or a different interaction.

Plan a visible label for unfamiliar, infrequent, destructive, permission-related, costly, or domain-specific actions. Treat a tooltip as supplemental help, not the only explanation.

### 2. Choose library reuse, adaptation, or custom design

Reuse a maintained icon when its meaning and style fit. Adapt an icon only when its license permits modification and the result remains recognizable. Create a custom icon when the product has a real uncovered concept.

Use one primary UI family. Introduce a second family only for a distinct semantic class, such as approved brand marks, and document the boundary. Do not assemble a screen from visually unrelated icons because each individual glyph seems attractive.

### 3. Define the construction system

Set or infer:

- master grid and safe area;
- keylines for circle, square, portrait, landscape, diagonal, and narrow forms;
- nominal optical size and allowed overflow;
- outline, fill, or authored mixed model;
- stroke width, cap, join, and miter policy;
- corner and angle vocabulary;
- perspective and level of detail;
- negative-space minimums;
- color and `currentColor` behavior;
- size-specific and state variants;
- right-to-left mirroring and localization policy.

Use the grid as a constraint, not a substitute for optical judgment. Correct circles, diagonals, narrow arrows, and uneven mass so the set looks balanced at rendered size.

### 4. Construct clean geometry

Use basic shapes when they express the form clearly and paths when the geometry is genuinely custom. Use the fewest Bézier points that preserve the intended curve. Remove stray points, duplicate segments, zero-length paths, accidental kinks, off-canvas debris, and almost-equal coordinates that create wobble.

Preserve intentional asymmetry and optical corrections. Do not force mathematical symmetry when it makes the icon look off-center or unevenly weighted.

Keep counters and gaps open at the smallest size and heaviest weight. Preview actual 1× output throughout design; a zoomed vector-editor view hides rasterization failures.

### 5. Produce intentional SVG markup

Keep a correct canonical `viewBox`. Ensure the artwork and stroke extents do not clip. Use `currentColor` for themeable monochrome icons. Keep fill/stroke, cap, join, and fill-rule behavior explicit where it affects rendering.

Remove only proven residue:

- editor metadata and proprietary namespaces;
- empty or purposeless groups;
- unused definitions, masks, clips, gradients, filters, and hidden shapes;
- accidental raster images;
- unreferenced IDs;
- unnecessary precision and transforms.

Preserve groups, IDs, definitions, titles, descriptions, and transforms when styling, references, animation, semantics, or coordinate behavior require them. Prefix or generate required IDs so repeated inline instances cannot collide.

Do not embed live text in small interface icons. Render localized text outside the SVG or use approved outlined brand artwork when rights permit.

### 6. Integrate semantics and interaction

Put actions inside native buttons or links. Let the control own its accessible name, role, state, focus, keyboard behavior, and pointer target. Hide a redundant decorative SVG with `aria-hidden="true"` and `focusable="false"`.

For an icon-only control, give the control a concise action or destination name. Name `Search`, not `Magnifying glass`; name `Delete project`, not `Trash can`.

For informative inline SVG, use `role="img"` with an explicitly connected accessible name and unique IDs. For external `<img>` SVGs, provide context-appropriate `alt`, or `alt=""` when decorative. Put complex chart, map, or diagram data in accessible HTML rather than exposing anonymous path geometry as the only representation.

Keep icon size separate from control size. Verify non-text contrast, visible focus, target size, zoom, forced colors, reduced motion when animated, and screen-reader output.

### 7. Optimize through a controlled pipeline

Keep editable source separate from the production SVG. Export from the canonical frame, inspect raw markup, normalize it to the component contract, then optimize with a versioned configuration.

Use SVGO conservatively. Review any operation that removes `viewBox`, `<title>`, `<desc>`, IDs, hidden definitions, dimensions, or paths; merges paths; collapses groups; rewrites transforms; or rounds geometry. Optimization must not change appearance, semantics, theming, animation, or references.

Use SVGR or an equivalent transformer when the project needs framework components. Ensure imports include only used icons and do not accidentally bundle a whole family.

Treat optimization and sanitization as different jobs. Reject or sanitize untrusted SVG through a strict allowlist before inline use. SVG can contain scripts, event handlers, links, external resources, and interactive content.

### 8. Verify the result

Test:

- comprehension without exposing the icon's filename;
- confusion with plausible competing symbols;
- findability in the real toolbar, menu, or flow;
- actual supported sizes, weights, themes, and device pixel ratios;
- optical balance beside neighboring icons and text;
- long labels, localization, and right-to-left behavior;
- hover, focus, pressed, selected, disabled, loading, warning, and error states;
- keyboard, screen reader, zoom, forced colors, contrast, and pointer target;
- XML parsing, required attributes, ID references, and disallowed content;
- before/after rendered output from optimization;
- package tree shaking or bundle inclusion;
- source, version, license, attribution, brand rules, modifications, and owner.

Use task performance and comprehension as evidence. Preference review alone does not establish that an icon works.

## Task-specific guidance

### Design a new icon or set

Start with a truth packet and a short metaphor exploration. Choose the strongest conventional or domain-grounded mapping, define the system, draw at the master grid, then author small-size or state variants as needed. Review the set as a group and test meaning in context.

### Clean an exported SVG

Inspect before changing. Record the intended appearance, semantics, theming, and delivery context. Remove residue in small reversible passes and render after each structural rewrite. Do not flatten, merge, round, or remove IDs blindly.

### Choose a library

Compare semantic coverage, authored sizes, variants, style fit, delivery formats, accessibility API, tree shaking, governance, maintenance, licensing, brand restrictions, and the cost of extending the family. Verify facts against current official sources.

### Audit icons or an icon system

Report separate findings for meaning, consistency, small-size rendering, states, accessibility, SVG quality, performance, security, and rights. Include evidence, user impact, severity, affected assets, and a concrete fix. Do not collapse these dimensions into one taste score.

### Implement icons in code

Follow the existing component and token architecture. Keep the asset decorative by default only when the component contract makes callers provide the control name. Expose purposeful props such as size, color, weight, title, or mirrored state; do not expose every SVG attribute without a product need. Add tests for observable rendering and accessible behavior.

## Non-negotiable standards

- Do not invent the icon's meaning, user, state model, or license.
- Do not use novelty in a frequent, safety-critical, destructive, or irreversible action without evidence that it improves comprehension.
- Do not rely on color, hover, position, or the artwork alone to communicate necessary meaning.
- Do not use an icon as its own interactive control when a semantic HTML or native control exists.
- Do not remove `viewBox` from a scalable production icon.
- Do not ship duplicate inline IDs or broken URL/ARIA references.
- Do not inline untrusted SVG without a reviewed sanitization and content-security design.
- Do not claim an icon is accessible because it has a `<title>` or because an automated check passes.
- Do not mix icon families without a documented semantic and visual boundary.
- Do not treat a repository license as permission to ignore trademarks, brand guidance, platform restrictions, or attribution.

## Handoff

Lead with what changed and why. Name the affected icon assets, components, and tokens. Report the actual design, markup, accessibility, optimization, rendering, package, and license checks performed. State untested sizes, platforms, assistive technologies, browsers, or user-comprehension risks explicitly.

Apply the final test: can the intended person recognize the right concept, activate the right control, and receive the right result under realistic visual, input, language, and platform conditions?

---
name: build-color-systems
description: Design, implement, migrate, and audit semantic color systems for interfaces, brands, themes, states, charts, and media. Use when creating palettes or tokens, mapping brand colors into UI roles, building light or dark themes, checking contrast and color-vision resilience, styling interaction and status states, designing data visualization colors, or diagnosing inconsistent, inaccessible, decorative, or hardcoded color use.
---

# Build Color Systems

## Operating principle

Build a system of relationships that helps people read hierarchy, identify actions, interpret status, recognize the product, and use the interface under different conditions. Begin with roles, not favorite hues.

## Load the detailed research

Read `references/research.md` for palette strategy, perceptual color, accessibility details, data visualization, implementation, migration, governance, or evaluation.

Useful searches:

```sh
rg -n '^## (2|3|4|5|6|7|8|9|10|11|12|13)\.' references/research.md
rg -n '^## 14\.|^## 15\.|^## 16\.|^## 17\.|^## 18\.' references/research.md
rg -n 'OKLCH|contrast|dark mode|forced|color vision|data visualization|token' references/research.md
```

## Workflow

### 1. Inventory

Collect every used color from design and code. Group exact and near duplicates, identify current roles and approved pairs, and find values without a clear owner or purpose.

### 2. Define semantic roles

Specify roles independently of values: canvas, surfaces, raised and sunken layers, text levels, borders, actions, links, focus, selection, inverse content, statuses, overlays, charts, and media treatments.

### 3. Construct primitive families

Build neutral, brand, accent, and status families in a perceptual space such as OKLCH. Control lightness, chroma, and hue deliberately; check gamut and export needs. Do not rely on equal HSL steps.

### 4. Map roles to values

Assign semantic tokens for every theme and state. Separate brand display, action, and text variants when one swatch cannot do every job. Keep lightness structure strong enough that hierarchy survives without hue.

### 5. Build the pair matrix

List every approved foreground/background and adjacent UI pair by state and theme. Measure exact rendered contrast and automate checks where practical.

### 6. Apply to representative components

Test buttons, links, fields, tabs, navigation, alerts, tables, charts, overlays, tooltips, focus, disabled states, selections, media, and user-generated content.

### 7. Design themes independently

Map dark and high-contrast behavior by semantic role rather than inversion. Rebalance lightness, chroma, surfaces, borders, shadows, imagery, and states. Verify system preference, explicit override, native controls, and flash behavior.

### 8. Test rendered output

Use real browsers and devices. Include zoom, forced colors, brightness extremes, color-vision simulation, gradients, transparency, overlays, animation frames, theme changes, and actual content and imagery.

### 9. Migrate and govern

Replace hardcoded values with tokens without changing unrelated behavior. Document roles, pairs, states, examples, theme mappings, ownership, and exception policy. Lint against new arbitrary values and monitor recurring exceptions.

## System layers

- **Primitive tokens:** raw families and scales; never communicate product meaning alone.
- **Semantic tokens:** purpose such as `text-primary`, `surface-raised`, `action-primary`, `status-danger`, or `focus-ring`.
- **Component tokens:** local decisions only when a component truly needs a stable mapping.

Name tokens by purpose. Keep design and code on one token source or a reliable sync process.

## Accessibility rules

- Treat contrast as a relationship between a foreground, background, state, size, and context—not a property of a swatch.
- Meet WCAG 2.2 AA minimums without rounding:
  - normal text: `4.5:1`;
  - qualifying large text: `3:1`;
  - required UI component boundaries, states, focus indicators, and meaningful graphics: `3:1` against adjacent colors.
- Treat minimums as floors, especially for thin text, small icons, critical content, bright environments, and low-quality displays.
- Never use color as the only signal. Pair it with labels, icons, position, pattern, shape, or programmatic state.
- Verify hover, active, focus, selected, visited, error, warning, success, disabled, placeholder, and loading states—not just rest.
- Test gradients, images, alpha composition, blend modes, and moving backgrounds at their worst contrast point.
- Preserve meaning in grayscale, color-vision differences, forced colors, and print when relevant.

## Data visualization

- Match palette type to data: sequential for ordered magnitude, diverging around a meaningful midpoint, qualitative for categories, and cyclic for circular values.
- Give ordered data a meaningful lightness progression.
- Limit categorical colors to what people can distinguish reliably; use direct labels, shapes, line styles, grouping, or patterns as redundant cues.
- Keep legends, tooltips, hover, selected, muted, missing, annotation, and comparison states accessible in every theme.
- Do not reuse status red/green/yellow decoratively where it weakens meaning.

## Reject these failures

- Attractive swatches with no neutral, surface, border, or text system.
- One primary color used for links, buttons, focus, selection, charts, and decoration.
- Mechanically generated scales with uneven perceived steps.
- Many indistinguishable near-neutrals.
- Pastel text on pastel surfaces.
- Red and green as the entire status model.
- Dark mode produced by inversion.
- Opacity used as the color system for critical roles.
- Color psychology treated as universal fact rather than a contextual hypothesis.
- Contrast tested only on one display or only at rest.

Approve a palette only after it works with actual content, components, states, themes, media, devices, and user settings.

# Bundled Research Reference

This file contains the complete research source for this skill. Use this contents list and targeted searches to load only the sections required by the task.

## Contents

- Perception, construction, accessibility, psychology, systems, themes, data visualization, and implementation
- Executive summary
- 1. What a color palette really is
- 2. Color perception fundamentals
- 3. Color models and spaces
- 4. Harmony and palette structures
- 5. Color psychology without mythology
- 6. A practical method for building a palette
- 7. Proportion and hierarchy
- 8. Accessibility and inclusive color
- 9. Semantic color systems and tokens
- 10. Light mode, dark mode, and alternate themes
- 11. Color in data visualization
- 12. Color with imagery, illustration, and content
- 13. Palette research and validation
- 14. Implementation workflow
- 15. Common failure modes
- 16. Palette specification template
- 17. Palette evaluation scorecard
- 18. Pre-release checklist
- 19. Selected sources and further reading
- Final principle

---

# Color Palettes for UI and Web Design

## Perception, construction, accessibility, psychology, systems, themes, data visualization, and implementation

**Research date:** July 2026  
**Scope:** Brand palettes, websites, product interfaces, design systems, light/dark themes, interaction states, charts, maps, illustration, and digital content  
**Purpose:** Explain how to build color palettes that are distinctive, usable, accessible, scalable, and technically robust

---

## Executive summary

A good color palette is not a row of attractive swatches. It is a **system of relationships** that helps people read, understand hierarchy, identify actions, interpret status, recognize a brand, and move through an interface under different conditions.

Strong palettes are designed in context. They account for:

- what the product must communicate;
- the audience’s expectations and cultural context;
- the amount and type of content;
- text, surfaces, controls, borders, focus, and interaction states;
- accessibility and color-vision differences;
- light, dark, high-contrast, print, and forced-color environments;
- charts, imagery, and user-generated content;
- display gamut and browser implementation;
- ongoing maintenance through design tokens.

The most important practical lessons are:

1. **Begin with roles, not favorite hues.** Define what color needs to do before selecting values.
2. **Lightness structure carries much of the hierarchy.** A palette that works only because hues differ is fragile.
3. **A brand palette is not yet a UI palette.** Interfaces require neutral surfaces, text levels, borders, status colors, focus, and interaction states.
4. **Do not use color as the only signal.** Pair it with text, icons, shape, position, pattern, or programmatic state.
5. **Contrast is relational.** A swatch cannot be “accessible” alone; a foreground/background pair in a specific state can meet a requirement.
6. **Dark mode is a separate theme, not an inversion.** Rebalance lightness, chroma, surfaces, borders, media, and states.
7. **Color psychology is contextual.** Research broad associations, but validate meaning with the actual audience.
8. **Use perceptual color spaces for systematic scales.** OKLCH is particularly useful for managing lightness, chroma, and hue in modern CSS.
9. **Name colors by purpose.** Semantic tokens allow a value to change without changing its role.
10. **Test the whole rendered interface.** Include real content, devices, color-vision simulations, high contrast, gradients, disabled states, and user settings.

---

## 1. What a color palette really is

In visual art, a palette may mean the selected colors in a composition. In digital product design, that definition is incomplete. A production palette includes:

- **Source colors:** brand, neutral, accent, and status families.
- **Tonal scales:** light-to-dark steps for each family.
- **Semantic roles:** background, surface, text, border, action, status, focus, selection, and overlay.
- **State mappings:** default, hover, active, selected, focus, visited, disabled, and loading.
- **Theme mappings:** light, dark, high contrast, branded areas, or product subthemes.
- **Component decisions:** how roles combine inside buttons, inputs, alerts, navigation, tables, and charts.
- **Rules:** permitted combinations, contrast requirements, proportions, and exceptions.

### Palette, scheme, theme, and token

| Term | Meaning |
|---|---|
| **Palette** | The available set or families of colors. |
| **Color scheme** | A selected relationship among colors, often for one composition or context. |
| **Theme** | A complete mapping of design roles to values for an environment such as light or dark. |
| **Primitive token** | A context-free stored value such as `blue-600` or `oklch(55% 0.18 250)`. |
| **Semantic token** | A role such as `text-primary`, `action-primary`, or `status-error`. |
| **Component token** | A role scoped to a component, such as `button-primary-bg-hover`. |

This distinction matters. `blue-600` describes appearance. `action-primary` describes intention. If a redesign changes the primary action from blue to violet, semantic component usage remains correct.

### Color is relational

The same color changes perceptually depending on:

- its background and neighboring colors;
- size and area;
- text weight and anti-aliasing;
- display brightness and gamut;
- ambient light;
- transparency and blending;
- surrounding imagery;
- light or dark adaptation;
- whether it is static, moving, or flashing.

Therefore, palette review must use realistic compositions, not isolated circles on a white artboard.

---

## 2. Color perception fundamentals

### 2.1 Hue

Hue is the family commonly named red, orange, yellow, green, cyan, blue, violet, or magenta. Hue is circular, but perceptual distance around a simple digital color wheel is not uniform. A 20-degree change does not look equally large everywhere.

Hue is useful for:

- identity;
- categorization;
- emphasis;
- emotional and cultural association;
- distinguishing branches in a visual system.

Hue alone is weak for communicating order or state because many people cannot reliably distinguish particular pairs, especially at small sizes or low chroma.

### 2.2 Lightness, value, and relative luminance

Designers use *value* or *lightness* to describe how light or dark a color appears. Accessibility contrast calculations use **relative luminance**, a defined measurement derived from encoded color values.

Lightness is the palette’s structural backbone. It creates:

- reading contrast;
- surface separation;
- emphasis and de-emphasis;
- a sense of depth;
- ordered scales;
- resilience when hue perception is reduced.

A useful diagnostic is to inspect the design in grayscale. This is not an accessibility test, but it reveals whether the hierarchy depends almost entirely on hue.

### 2.3 Chroma and saturation

Chroma describes colorfulness relative to a neutral of similar lightness. “Saturation” means different things in different models; HSL saturation is not perceptually uniform.

High chroma:

- attracts attention;
- can feel energetic or artificial;
- may vibrate against another high-chroma color;
- can reduce legibility at some lightness levels;
- occupies visual priority quickly.

Low chroma:

- supports long viewing and large areas;
- can feel calm, mature, muted, dusty, or inactive depending on context;
- may become too subtle for states and controls.

Chroma should be budgeted. If every surface is vivid, color can no longer signal priority.

### 2.4 Temperature is relative

Reds, oranges, and yellows are usually called warm; blues and blue-greens are usually called cool. But a violet can be warm relative to a bluer violet, and a green can be warm relative to cyan. Temperature is a comparison within a palette, not an absolute emotional guarantee.

### 2.5 Tint, shade, and tone

Traditional color language:

- **Tint:** a hue mixed toward white.
- **Shade:** a hue mixed toward black.
- **Tone:** a hue mixed toward gray or reduced in chroma.

In digital systems, direct mixing in sRGB can produce uneven or muddy steps. Perceptual spaces such as OKLCH provide more explicit control over lightness and chroma.

### 2.6 Simultaneous contrast and adaptation

A middle gray appears lighter on black and darker on white. A muted color can appear vivid next to neutrals and dull next to saturated neighbors. Eyes also adapt to the overall field, causing judgments to shift over time.

Practical consequences:

- compare colors on every surface where they will appear;
- check full-screen light and dark themes, not only adjacent artboards;
- review long-reading pages after sustained exposure;
- avoid approving a text color only from a palette sheet;
- test overlays and translucent layers over varied content.

### 2.7 Area changes impact

A bright yellow that works as a 2% accent may become exhausting as a page background. A subtle neutral difference visible across a large surface may disappear in a 1px border. Evaluate colors at intended area and thickness.

---

## 3. Color models and spaces

### 3.1 Hex and RGB

Hex notation is a compact way to specify sRGB channel values; it is not a design theory or perceptual model. RGB is appropriate for display output and interoperability but poor for manually creating visually even lightness scales.

Use RGB/hex when:

- tools or systems require it;
- exporting stable final values;
- maintaining legacy compatibility;
- communicating with systems that assume sRGB.

### 3.2 HSL and HSV/HSB

HSL and HSV are intuitive because they expose hue, saturation, and lightness/value. However, equal numeric lightness or saturation does not mean equal perceived lightness or colorfulness. Pure yellow and pure blue at the same HSL lightness look dramatically different.

HSL remains useful for quick manipulation and simple tooling, but do not assume a mathematical HSL scale is perceptually even or contrast-safe.

### 3.3 CIELAB and LCH

CIELAB was designed to better approximate perceptual differences. LCH expresses it as lightness, chroma, and hue. These spaces influenced modern color tooling and are useful for measurement and transformation, though their perceptual uniformity is imperfect.

### 3.4 Oklab and OKLCH

Oklab is a newer perceptual space; OKLCH is its cylindrical lightness–chroma–hue form. The W3C CSS Color 4 specification describes improved hue, lightness, and chroma uniformity compared with CIE LCH. See [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/).

OKLCH is useful for palette systems because designers can:

- change lightness while largely preserving hue identity;
- reduce chroma for surfaces and increase it for accents;
- construct more perceptually coherent steps;
- interpolate gradients with less gray/mud than some sRGB mixes;
- reason about theme transformations.

Example:

```css
:root {
  --brand-100: oklch(94% 0.035 255);
  --brand-300: oklch(78% 0.09 255);
  --brand-500: oklch(60% 0.16 255);
  --brand-700: oklch(43% 0.13 255);
  --brand-900: oklch(25% 0.07 255);
}
```

These values are illustrative, not pre-validated contrast pairs. Actual gamut, contrast, and visual spacing must be measured.

### 3.5 Wide-gamut color

CSS Color 4 allows colors outside sRGB, including Display P3. Wide gamut can create more saturated accents on compatible displays, but:

- not every display shows the same gamut;
- out-of-gamut mapping can change chroma or hue;
- screenshots, exported assets, and third-party tools may convert colors;
- contrast must be evaluated in the actual rendered/fallback color;
- subtle brand identity should not depend on a difference unavailable in sRGB.

Provide an sRGB baseline and enhance where wider gamut adds real value.

```css
.accent {
  background: rgb(255 72 100); /* sRGB baseline */
}

@supports (color: color(display-p3 1 0 0)) {
  .accent {
    background: color(display-p3 1 0.2 0.32);
  }
}
```

### 3.6 Gamut and gamut mapping

A color can be valid in a mathematical space but impossible on a target display. Gamut mapping brings it into the display’s available range, often by reducing chroma. Inspect mapped values rather than assuming a high-chroma OKLCH value will render as authored.

### 3.7 Alpha and compositing

Transparent colors do not have one final appearance. The rendered result depends on every layer beneath them. This creates risk for:

- text over translucent panels;
- borders over images;
- disabled controls;
- glass effects;
- gradient overlays;
- hover states.

Measure contrast on the composited output across the worst plausible background. Prefer opaque semantic tokens for critical text and controls.

### 3.8 Mixing and interpolation

CSS `color-mix()` can mix colors in a selected color space. Mixing in Oklab/OKLCH often preserves perceptual relationships better than default sRGB mixing. See [MDN `color-mix()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix).

```css
:root {
  --brand: oklch(58% 0.17 255);
  --brand-hover: color-mix(in oklch, var(--brand), black 12%);
  --brand-soft: color-mix(in oklch, var(--brand), white 86%);
}
```

Generated states still require individual contrast and differentiation checks.

---

## 4. Harmony and palette structures

Color-wheel harmonies are starting structures, not guarantees of beauty, accessibility, or meaning.

### 4.1 Monochromatic

One hue family with varying lightness and chroma.

**Strengths:** coherent, calm, easy to systematize.  
**Risks:** weak category or status differentiation; can become flat.  
**Best for:** focused brands, editorial systems, single-action products, backgrounds with one accent.

### 4.2 Analogous

Neighboring hues such as blue, cyan, and green.

**Strengths:** natural continuity and depth.  
**Risks:** adjacent hues can become indistinguishable at similar lightness; weak status distinction.  
**Best for:** atmospheric visual systems, illustration, gradients, secondary data groups.

### 4.3 Complementary

Opposing hues such as blue and orange.

**Strengths:** strong contrast and energetic emphasis.  
**Risks:** high-chroma pairs can vibrate; one color may acquire unintended semantic meaning.  
**Best for:** brand/accent relationships, highlighted comparison, controlled calls to action.

### 4.4 Split-complementary

One base hue and the two neighbors of its complement.

**Strengths:** contrast with more nuance than a direct complement.  
**Risks:** can become visually busy without neutral control.  
**Best for:** expressive marketing, illustration systems, product families.

### 4.5 Triadic

Three broadly spaced hues.

**Strengths:** energetic diversity and category range.  
**Risks:** equal use creates competition; contrast relationships may vary dramatically.  
**Best for:** youth, culture, learning, multi-category content, playful brands.

### 4.6 Tetradic or double-complementary

Four hues forming two complementary pairs.

**Strengths:** wide expressive range.  
**Risks:** difficult hierarchy and inconsistent semantics.  
**Best for:** illustration-heavy systems or complex editorial identities with disciplined art direction—not as an automatic UI palette.

### 4.7 Neutral with one accent

Neutral surfaces and typography with one chromatic family.

**Strengths:** strong hierarchy, maintainability, brand clarity.  
**Risks:** overloading the accent with brand, action, selection, link, and status meanings.  
**Best for:** productivity tools, portfolios, documentation, premium retail.

### 4.8 Neutral with warm and cool accents

One warm and one cool family can separate promotion from information, or human/brand expression from system function.

Define the roles explicitly so the colors do not compete.

### Why wheel distance is not enough

Two theoretically harmonious hues may fail because:

- their lightness is too similar;
- their chroma competes;
- they carry conflicting semantic associations;
- one cannot meet contrast on required surfaces;
- they resemble a competitor or political/cultural symbol;
- they fail in a chart or color-vision simulation.

---

## 5. Color psychology without mythology

Popular charts assign fixed meanings: blue equals trust, green equals nature, red equals urgency, purple equals luxury. These associations can be useful hypotheses but are not universal laws.

A large cross-national study involving 4,598 participants across 30 nations found robust common patterns in color–emotion associations, but also found differences linked to nation, language, and geography. See [Universal Patterns in Color-Emotion Associations](https://www.psychologicalscience.org/journals/psychological-science/0956797620948810/).

Research on ecological valence proposes that preferences are partly learned through people’s positive and negative associations with colored objects and experiences. See [An ecological valence theory of human color preference](https://doi.org/10.1073/pnas.0906172107).

### Factors that change color meaning

- hue, lightness, and chroma;
- neighboring colors;
- product category;
- culture, language, religion, and politics;
- personal history and current trends;
- material and texture;
- whether the color appears in food, finance, health, fashion, or warning systems;
- the amount of color;
- typography and imagery;
- competitor conventions;
- interaction state.

A pale dusty red, saturated scarlet, dark wine, and fluorescent coral do not communicate one identical “red psychology.”

### Better questions than “What does blue mean?”

- What does this exact blue communicate in this composition?
- Is the association useful for this audience and context?
- Does it distinguish us or make us look category-generic?
- Does it remain credible in a large surface, button, chart, and dark theme?
- What unintended political, institutional, medical, or cultural meaning might it carry?
- Can the intended meaning survive without color?

### Research methods for color meaning

Use:

- open-ended association interviews;
- semantic differential scales such as calm–energetic or familiar–unusual;
- contextual mockups with real content;
- timed first-impression studies;
- recognition and recall tests;
- preference tests with explanation;
- category and competitor mapping;
- localized research in priority markets;
- co-design or collage activities;
- usability tests for status and action comprehension.

Avoid asking only for favorite colors. Personal preference does not directly predict task performance, brand fit, or willingness to act.

---

## 6. A practical method for building a palette

### Step 1: Define what color must do

List the required functions before choosing swatches:

- brand recognition;
- page and surface hierarchy;
- reading text and secondary text;
- links and actions;
- selection and focus;
- success, warning, error, and information;
- categories or data magnitude;
- illustration and marketing expression;
- light/dark themes;
- high-contrast or forced-color behavior.

### Step 2: Collect evidence and constraints

- existing identity assets and legal brand requirements;
- user and cultural research;
- competitor/category conventions;
- content types and image tendencies;
- platform and component library;
- accessibility target;
- printing, projection, kiosk, or outdoor use;
- display and browser support;
- partner or user-generated colors.

### Step 3: Choose the neutral foundation

Neutrals will often occupy more area than brand colors. Define:

- canvas/background;
- one or more surface layers;
- primary, secondary, and muted text;
- subtle and strong borders;
- overlay/scrim;
- inverse surface and text.

Tinted neutrals can create identity: warm gray, blue-gray, olive-gray, or violet-gray. Keep the tint restrained enough that neutral semantics remain stable across content and themes.

### Step 4: Choose an anchor color

The anchor is the strongest identity-bearing color. Evaluate it as:

- a small icon;
- a filled button;
- link text;
- a large background;
- a focus ring;
- a chart series;
- light and dark theme variants;
- a grayscale value;
- a small favicon or app icon.

One exact value is unlikely to work for every role. The anchor defines a family, not a universal swatch.

### Step 5: Build a tonal family

Create enough steps for real roles, not an arbitrary 10-step scale. Typical needs include:

- very light tinted surface;
- subtle hover/selection surface;
- low-emphasis border;
- medium decorative/disabled use;
- primary accent/action;
- hover/pressed action;
- dark text/icon on a light accent surface;
- inverse/high-contrast use.

Adjust chroma as lightness changes. Very light and very dark colors often need lower chroma to remain in gamut and appear natural.

### Step 6: Add a secondary or accent family only when it has a job

Possible jobs:

- editorial expression;
- secondary product line;
- promotional emphasis;
- data comparison;
- warmth against a cool brand;
- interactive versus decorative distinction.

If the accent has no defined role, it will be used inconsistently.

### Step 7: Build semantic status families separately

Define roles such as:

- informative;
- positive/success;
- caution/warning;
- negative/error/destructive;
- neutral/pending.

Each family may need:

- subtle background;
- border/icon;
- strong text;
- filled action;
- dark-theme equivalents.

Do not force brand colors into status roles if meaning becomes ambiguous. Do not use the same red for decorative brand moments and destructive actions unless context makes the difference unmistakable.

### Step 8: Map interaction states

For every interactive color role, define:

- rest;
- hover;
- active/pressed;
- selected;
- keyboard focus;
- disabled;
- visited where relevant;
- loading or indeterminate.

States need visible differences as well as sufficient contrast. A hover shift from one nearly identical blue to another may technically preserve text contrast yet fail to provide feedback.

### Step 9: Create a contrast-pair matrix

List approved foreground/background combinations:

| Foreground role | Approved backgrounds | Minimum target |
|---|---|---|
| Primary text | Canvas, surface 1, surface 2 | WCAG AA or stronger project target |
| Secondary text | Canvas, surface 1 | WCAG AA for its actual text size |
| Brand link | Canvas, surface 1 | Text contrast + non-color cue |
| Text on primary action | Action default/hover/active | Each state passes |
| Status text/icon | Status subtle backgrounds | Text/non-text rules as applicable |
| Focus indicator | Every adjacent surface | Clearly visible and not obscured |

Do not assume passing on white means passing on every surface.

### Step 10: Build themes by role

Create light, dark, and other themes by remapping semantic tokens. Avoid theme-specific component overrides unless a component truly has special behavior.

### Step 11: Apply the palette to representative screens

Test at least:

- content-heavy page;
- form with errors and success;
- dashboard/table;
- empty/loading/disabled states;
- modal or overlay;
- marketing/brand-rich page;
- chart or category view;
- narrow mobile viewport;
- real imagery and user content.

### Step 12: Remove unnecessary colors

Every extra family increases choice, inconsistency, and test combinations. Remove near-duplicates and colors without a role.

---

## 7. Proportion and hierarchy

The 60/30/10 guideline—dominant, secondary, accent—is a useful composition prompt, not a universal formula. The U.S. Web Design System describes a similar proportional relationship among theme families while noting that neutral base colors may dominate the actual interface. See [USWDS theme color tokens](https://designsystem.digital.gov/design-tokens/color/theme-tokens/).

### A better role-based interpretation

- **Foundation:** canvas, surfaces, and typography; often mostly neutral.
- **Identity:** recurring brand family in controlled areas.
- **Action:** color that consistently marks interactive priority.
- **Status:** reserved semantic colors.
- **Expression:** illustration, campaign, or editorial color that may be richer than functional UI.

### Control attention with area × chroma × contrast

Visual impact is influenced by more than hue. A rough mental model:

> **Impact increases with area, chroma, lightness contrast, isolation, and semantic importance.**

A tiny high-chroma accent can compete with a large muted surface. Use this to create deliberate focal points.

### Preserve neutral headroom

If every secondary label uses a colorful accent, the palette has no quiet register. Neutrals allow brand and status colors to remain meaningful.

---

## 8. Accessibility and inclusive color

### 8.1 Current WCAG 2.2 contrast requirements

For WCAG 2.2 Level AA:

- normal text requires at least **4.5:1** contrast against its background;
- large-scale text requires at least **3:1**;
- visual information needed to identify UI components, states, and meaningful graphics requires at least **3:1** against adjacent colors.

Level AAA enhanced text contrast is **7:1** for normal text and **4.5:1** for large-scale text. See W3C’s [Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast), and [Contrast (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced).

Thresholds are not rounded: 4.499:1 does not meet 4.5:1. Treat minimums as floors, particularly for thin type, bright environments, small screens, or critical content.

### 8.2 Do not use color alone

WCAG 2.2 requires that color not be the only visual means of conveying information, action, response, or distinction. See [Understanding Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).

Examples:

| Color-only signal | Add |
|---|---|
| Red form border | Error icon, message, and programmatic invalid state |
| Green/red status dot | Text label and/or distinct symbol |
| Blue links in body text | Underline or other non-color distinction |
| Chart series by color | Direct labels, shapes, dash patterns, or grouping |
| Selected tab by color | Indicator, weight, shape, or position |
| Required fields in red | “Required” text or explicit optional labels |

### 8.3 Color-vision differences

Color-vision deficiencies vary; there is no single “color-blind view.” Common risks include:

- red/green pairs of similar lightness;
- blue/purple pairs;
- pale yellow/green;
- many categorical hues at small sizes;
- status colors without labels;
- maps with thin adjacent regions;
- legends far from data.

Simulation is a useful diagnostic, not a substitute for testing with people. Strengthen differences through lightness, shape, position, texture, labels, and interaction.

### 8.4 Focus and interaction

Focus indicators must remain visible over all surfaces. Test:

- neutral, brand, error, and image backgrounds;
- inside dialogs and overlays;
- selected controls;
- high-contrast/forced-color modes;
- keyboard focus separate from hover.

A two-layer focus ring can help across varied backgrounds: a light outer line plus a dark or brand inner line, or vice versa.

### 8.5 Disabled states

WCAG exempts inactive controls from some contrast requirements, but users still need to recognize what exists and why it cannot be used. Avoid reducing disabled content to extremely faint text. Consider explanatory text, retained labels, and state logic rather than relying only on opacity.

### 8.6 Contrast over images and gradients

Averages are insufficient. Test the lowest-contrast region behind every glyph and every responsive crop/frame. Solutions include:

- a solid text panel;
- controlled art direction;
- an opaque or sufficiently strong scrim;
- text shadow/outline only as secondary reinforcement;
- relocating text outside the image.

### 8.7 User customization and forced colors

Some users override colors or use high-contrast modes. Use semantic HTML, avoid encoding essential meaning in background images, and test `forced-colors`. Do not disable user adjustments simply to preserve brand presentation.

### 8.8 WCAG 3 and APCA status

Alternative perceptual contrast methods such as APCA have influenced discussion and experimental tooling, but WCAG 3 remained an incomplete draft in March 2026 and will change substantially. Use WCAG 2.2 for current conformance unless a governing requirement says otherwise. Experimental contrast measures may be used as an additional design diagnostic, not as a replacement for applicable standards. See [W3C’s WCAG 3 Introduction](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/).

---

## 9. Semantic color systems and tokens

Large systems benefit from layers of abstraction.

### 9.1 Token architecture

```text
Primitive value
  blue-600 = oklch(...)
       ↓
Semantic role
  action-primary = blue-600
       ↓
Component role
  button-primary-bg = action-primary
       ↓
State/theme mapping
  button-primary-bg-hover (light/dark/high contrast)
```

Carbon defines themes as mappings in which tokens retain stable roles while values change, and groups color tokens by uses such as background, layer, field, border, text, link, icon, support, and focus. See [Carbon themes](https://carbondesignsystem.com/elements/themes/overview/) and [Carbon color tokens](https://carbondesignsystem.com/elements/color/tokens/).

### 9.2 Name by function

Prefer:

- `color-bg-canvas`
- `color-bg-surface-raised`
- `color-text-primary`
- `color-text-muted`
- `color-border-subtle`
- `color-action-primary`
- `color-action-primary-hover`
- `color-status-danger-text`
- `color-status-danger-bg`
- `color-focus-ring`

Avoid component code that directly uses `blue-500` or names such as `light-gray`, because its appearance may reverse across themes.

### 9.3 Separate brand and semantic roles

Brand color answers “Who are we?” Semantic color answers “What does this mean here?” They can share a value, but should not share an identity in the token model.

### 9.4 Avoid the token explosion

Create a new token when:

- the role has distinct meaning;
- it changes independently across themes;
- reuse will improve consistency;
- the component needs a documented exception.

Do not create a semantic token for every one-off hex value while keeping the same underlying inconsistency.

### 9.5 Document combinations, not only values

For each semantic token, document:

- purpose;
- permitted backgrounds/foregrounds;
- contrast relationships;
- states;
- theme values;
- examples and anti-examples;
- ownership and change process.

### 9.6 Example CSS structure

```css
/* Primitive palette */
:root {
  --neutral-0: oklch(100% 0 0);
  --neutral-950: oklch(18% 0.01 250);
  --blue-500: oklch(60% 0.16 255);
  --blue-650: oklch(48% 0.15 255);
  --red-100: oklch(94% 0.035 25);
  --red-700: oklch(45% 0.16 25);
}

/* Semantic light theme */
:root {
  color-scheme: light;
  --color-bg-canvas: var(--neutral-0);
  --color-text-primary: var(--neutral-950);
  --color-action-primary: var(--blue-650);
  --color-danger-bg: var(--red-100);
  --color-danger-text: var(--red-700);
}

/* Semantic dark theme: roles stay stable, values change */
[data-theme="dark"] {
  color-scheme: dark;
  --color-bg-canvas: oklch(17% 0.012 250);
  --color-text-primary: oklch(94% 0.006 250);
  --color-action-primary: oklch(72% 0.12 255);
  --color-danger-bg: oklch(27% 0.055 25);
  --color-danger-text: oklch(80% 0.09 25);
}
```

Again, illustrative values require pair-by-pair validation.

---

## 10. Light mode, dark mode, and alternate themes

### 10.1 Dark mode is not inversion

Simple inversion can:

- make brand colors fluorescent;
- reverse intended emphasis;
- turn subtle borders into bright lines;
- create muddy imagery;
- break shadows and overlays;
- reduce text comfort;
- change status distinction.

Build dark mode from semantic roles.

### 10.2 Dark surfaces

Use a deliberate range:

- canvas/base;
- surface/layer 1;
- raised or interactive surface;
- strong/inverse surface;
- overlay/scrim.

In dark themes, slightly lighter surfaces can imply elevation, but the system should remain coherent and not depend solely on subtle differences.

### 10.3 Avoid absolute black and white as defaults—when context supports it

Near-black surfaces and off-white text can reduce glare for some contexts. However, maximum contrast may help other users, and OLED, ambient light, projection, and personal preferences change needs. Treat softened extremes as a tested choice, not a rule. Allow user or system preference when possible.

### 10.4 Rebalance chroma

Colors can appear more intense on dark backgrounds. Many dark themes reduce chroma for large fills while using lighter accents for text/icons. Status colors often need separate values rather than the light-theme value moved unchanged.

### 10.5 Re-evaluate imagery and assets

- Provide dark-compatible logos.
- Add boundaries around transparent images that disappear.
- Avoid white rectangles embedded in illustrations.
- Adjust chart grids, maps, and code highlighting.
- Check photos for excessive contrast against the surrounding surface.

### 10.6 Respect system preference and user choice

The widely supported `prefers-color-scheme` media feature detects a user’s light/dark preference. The `color-scheme` property also lets browser-provided UI such as form controls and scrollbars use compatible styling. See [MDN `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-color-scheme) and [`color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme).

Good behavior:

1. default to system preference for a first visit;
2. allow an explicit user override where theme matters;
3. persist the choice;
4. avoid a flash of the wrong theme;
5. expose the theme state accessibly;
6. keep all core functionality equivalent.

### 10.7 Alternate themes beyond light/dark

Some products benefit from:

- higher-contrast theme;
- low-stimulation theme;
- dim theme for media/control rooms;
- print theme;
- color-vision-adapted data palette;
- partner/tenant brand themes.

Do not assume one alternate theme serves every visual or cognitive need.

---

## 11. Color in data visualization

The palette must match the data’s structure.

### 11.1 Sequential palettes

Use for ordered values from low to high. Progress should be clear, usually through monotonic lightness change.

Examples:

- count;
- intensity;
- probability;
- age;
- concentration.

### 11.2 Diverging palettes

Use when data has a meaningful midpoint or reference such as zero, target, average, or no change. Two hue branches move away from a neutral center.

Do not use a diverging palette merely because two colors look attractive; the midpoint must mean something.

### 11.3 Qualitative palettes

Use for unordered categories. Hues should be distinct without implying false order.

Limit the number of simultaneously encoded categories. As the count grows, direct labeling, grouping, filtering, small multiples, or interaction may be more effective than adding colors.

ColorBrewer formalizes sequential, diverging, and qualitative scheme selection and offers colorblind-safe, print-friendly, and photocopy-safe filters. See [ColorBrewer](https://colorbrewer2.org/) and its [scheme guidance](https://colorbrewer2.org/learnmore/schemes.html).

### 11.4 Cyclic palettes

Use when endpoints meet, such as angle, phase, direction, or time around a cycle. The start and end colors should connect smoothly.

### 11.5 Highlight palettes

Use muted context with one high-emphasis color for a selected series or focal point. This is often more effective than assigning high-chroma colors to everything.

### 11.6 Perceptual uniformity

For continuous quantitative data, equal data steps should ideally produce roughly equal perceptual steps. Matplotlib recommends perceptually uniform maps for many applications and emphasizes monotonic lightness for ordered data. See [Choosing Colormaps in Matplotlib](https://matplotlib.org/stable/tutorials/colors/colormaps.html).

### 11.7 Avoid rainbow scales for ordered data

Rainbow/jet scales create uneven lightness and artificial boundaries, which can make some ranges appear more significant than others. Prefer a perceptually ordered sequential or diverging scale unless hue categories themselves carry valid meaning.

### 11.8 Redundant encoding

Use:

- direct labels;
- line dashes;
- marker shapes;
- texture/pattern;
- position and grouping;
- annotations;
- interactive focus.

Legends should be close to data, ordered consistently, and usable without precise color naming.

### 11.9 Background and grid

Chart palettes must be evaluated on the real surface. Gridlines should support estimation without competing with data. Tooltips, selections, hover states, and annotations need their own contrast review.

---

## 12. Color with imagery, illustration, and content

### 12.1 Palette extraction is a beginning, not a system

Extracting colors from a hero image can produce harmony but not necessarily:

- accessible text pairs;
- stable brand identity;
- status colors;
- reusable theme roles;
- consistent future pages.

Extract, then normalize into intentional roles and scales.

### 12.2 Art direction strategies

- **Neutral frame:** let varied content images carry color.
- **Duotone/tint:** unify heterogeneous sources with a controlled treatment.
- **Dominant-color adaptation:** change surrounding accents based on content, within guarded ranges.
- **Fixed brand accent:** maintain identity against variable media.
- **Chapter palettes:** assign controlled schemes to editorial sections.

### 12.3 Text over media

Do not assume a dark overlay always works. Crops and frames change. Use tested scrims, controlled image focal points, or separate text surfaces.

### 12.4 User-generated colors

If users select colors:

- constrain choices by role;
- auto-select readable foregrounds but verify the method;
- show contrast warnings;
- prevent status/brand collisions where relevant;
- store semantic intention if themes may change;
- offer patterns/labels for data categories;
- do not silently change an identity-critical choice without explanation.

### 12.5 Generated imagery

AI-generated imagery can drift in palette across assets. Define:

- dominant hue range;
- chroma ceiling;
- shadow/highlight temperature;
- neutral treatment;
- prohibited combinations;
- post-production and color-management process;
- human review under actual layout conditions.

---

## 13. Palette research and validation

### 13.1 Research the semantic landscape

Map colors used by:

- direct competitors;
- adjacent categories;
- regulatory or safety systems;
- political, religious, medical, or cultural institutions;
- platforms users already know;
- the organization’s physical environment and materials.

The goal is not automatic differentiation. Sometimes convention supports trust and recognition; sometimes it creates sameness.

### 13.2 Test in context

Show participants realistic pages, not swatches. Ask:

- What does this organization seem like?
- What do you think is clickable?
- Which message appears urgent?
- What does each status mean?
- Which option is selected?
- Where would you start?
- What feels credible, calm, premium, playful, clinical, or risky—and why?

### 13.3 Separate preference from performance

A participant can prefer a low-contrast palette while performing worse with it. Record:

- interpretation;
- task success;
- error rate;
- search time;
- confidence;
- recall;
- comfort over sustained use;
- stated preference.

### 13.4 Validate across markets

Do not localize meaning from generic national-color charts. Research priority audiences and review unintended associations with local experts. A global palette may require localized campaign colors while preserving functional status semantics.

### 13.5 Validate over time

Short tests reveal first impression. Long sessions reveal glare, fatigue, ambiguous status, and overuse of accents. Test both when the product supports sustained work.

---

## 14. Implementation workflow

### Phase 1: Inventory

Collect every used color from design and code. Group exact duplicates, near-duplicates, and current roles. Identify colors with no clear owner or function.

### Phase 2: Define semantic roles

Write the role model independent of values. Include surfaces, text, borders, actions, focus, statuses, and data.

### Phase 3: Construct primitive families

Build neutral, brand, accent, and status scales in a perceptual space. Check gamut and export needs.

### Phase 4: Map roles to values

Create light theme first or work themes in parallel if dark mode is core. Do not wait until the end to discover that brand colors fail in dark mode.

### Phase 5: Create the pair matrix

Automate contrast checks for every approved semantic pair and state. Keep the expected ratios in tests where possible.

### Phase 6: Apply to representative components

Buttons, links, fields, tabs, navigation, alerts, tables, charts, overlays, tooltips, and focus states expose different palette weaknesses.

### Phase 7: Test rendered output

Use real browsers and devices. Include zoom, forced colors, theme changes, display brightness, color-vision simulation, and real media.

### Phase 8: Migrate and lint

Replace hardcoded values with tokens. Add linting or review rules to prevent new arbitrary values. Preserve unrelated visual behavior during migration.

### Phase 9: Document and govern

Document role, pairings, states, examples, theme mappings, and change ownership. Review new colors as system changes, not isolated additions.

### Phase 10: Monitor

Track accessibility issues, support feedback, inconsistent component usage, and product areas that repeatedly request exceptions.

---

## 15. Common failure modes

### A beautiful swatch set with no neutrals

The palette cannot support text, surfaces, borders, or long-form content.

**Fix:** build the neutral and semantic foundation before expanding expressive colors.

### One primary color used for everything

Links, selected states, primary buttons, focus, charts, and decorative backgrounds become indistinguishable.

**Fix:** separate semantic roles even if some initially share a value.

### Mechanically generated scales

Equal HSL steps look uneven and may drift in contrast.

**Fix:** use a perceptual space, then optically adjust and measure every functional step.

### Too many near-neutrals

Components use slightly different grays with no perceived distinction.

**Fix:** consolidate around role-based surface, text, and border levels.

### Brand color forced onto white

The primary brand swatch cannot meet text or button contrast, so designers either violate contrast or alter it inconsistently.

**Fix:** define brand display, brand action, and brand text variants within one family.

### Pastel interface with pastel text

The palette feels soft but loses hierarchy and reading contrast.

**Fix:** preserve pale surfaces while using sufficiently dark text and strong control boundaries.

### Red and green as the entire status model

Meaning disappears for some users and in grayscale.

**Fix:** add icons, labels, shape, and lightness differences.

### Dark mode by inversion

Colors become fluorescent, borders glow, imagery breaks, and hierarchy reverses.

**Fix:** remap semantic roles with separate values.

### Opacity as a color system

The final color changes unpredictably across surfaces and fails contrast in overlays.

**Fix:** use explicit opaque tokens for critical roles.

### Decorative semantic colors

Red is used for promotions, green for decorative cards, and yellow for branding, weakening their status meaning.

**Fix:** reserve semantic families or ensure decorative use cannot be confused with status.

### Color psychology by infographic

The team chooses blue because “blue creates trust” without researching category, audience, or execution.

**Fix:** treat associations as hypotheses and test the actual palette in context.

### Palette designed only on one calibrated monitor

Subtle differences disappear on common devices or in bright environments.

**Fix:** test representative hardware, brightness, and ambient conditions.

### Contrast tested only at rest

Hover, selected, error, disabled, placeholder, and focus states fail.

**Fix:** automate and manually inspect the entire state matrix.

---

## 16. Palette specification template

```md
# Palette purpose
- Product/brand:
- Primary audiences and contexts:
- Desired character:
- Functional requirements:
- Accessibility target:

# Research
- User associations:
- Cultural/market findings:
- Category conventions:
- Competitor color landscape:
- Existing brand constraints:

# Primitive families
- Neutral:
- Brand primary:
- Brand secondary:
- Accent:
- Information:
- Success:
- Warning:
- Danger:
- Data/category:

# Semantic roles
- Canvas and surfaces:
- Text and icons:
- Borders and dividers:
- Actions and links:
- Selection:
- Focus:
- Status:
- Overlay/inverse:

# Interaction states
- Rest:
- Hover:
- Active:
- Selected:
- Focus:
- Disabled:
- Visited:

# Themes
- Light:
- Dark:
- High contrast/forced colors:
- Print or special modes:

# Approved pairs
| Foreground role | Background role | Required ratio | Verified result |
|---|---|---:|---:|

# Data visualization
- Sequential:
- Diverging and midpoint:
- Qualitative:
- Highlight:
- Redundant encodings:

# Implementation
- Source color space:
- Export/fallback format:
- Token naming:
- Gamut strategy:
- Automated tests:

# Governance
- Owner:
- Allowed exceptions:
- Review process:
- Last validation date:
```

---

## 17. Palette evaluation scorecard

Score each from 0–3:

- **0:** absent or harmful
- **1:** superficial/inconsistent
- **2:** usable but incomplete
- **3:** coherent, documented, and verified

| Dimension | Question | Score |
|---|---|---:|
| Purpose | Does every family have a defined job? | /3 |
| Brand fit | Does the palette express a relevant and distinctive identity? | /3 |
| User fit | Has meaning been researched with actual audiences? | /3 |
| Lightness | Does hierarchy survive reduced hue perception/grayscale review? | /3 |
| Contrast | Are approved text and non-text pairs verified in every state? | /3 |
| Redundancy | Is meaning available without color alone? | /3 |
| Neutrals | Can the palette support reading, surfaces, and dense UI? | /3 |
| Semantics | Are brand, action, selection, focus, and status roles clear? | /3 |
| States | Are hover, active, selected, focus, disabled, and visited states defined? | /3 |
| Themes | Are light/dark/alternate themes intentionally mapped? | /3 |
| Data | Do visualization palettes match the data structure? | /3 |
| Imagery | Does the palette work with real and variable media? | /3 |
| Tokens | Are values abstracted into scalable role-based tokens? | /3 |
| Technology | Are gamut, fallbacks, blending, and browser behavior handled? | /3 |
| Governance | Can the system be maintained without arbitrary additions? | /3 |

A zero in contrast, use of color, or critical status comprehension can block release regardless of total.

---

## 18. Pre-release checklist

### Strategy and research

- [ ] Color roles were defined before values.
- [ ] User and cultural associations were researched in context.
- [ ] Category conventions and unintended affiliations were reviewed.
- [ ] Preference findings were separated from task performance.
- [ ] The palette works with actual content and imagery.

### Structure

- [ ] Neutral surfaces, text levels, borders, and inverse roles are complete.
- [ ] Brand, action, status, selection, and focus roles are distinct.
- [ ] Every color family has a documented purpose.
- [ ] Near-duplicate values have been consolidated.
- [ ] Chroma and area are controlled so priority remains clear.

### Accessibility

- [ ] Normal and large text pairs meet the applicable contrast target.
- [ ] Controls, states, focus, and meaningful graphics meet non-text contrast requirements.
- [ ] Ratios were checked without rounding.
- [ ] No information relies on color alone.
- [ ] Color-vision simulations and user tests were performed where relevant.
- [ ] Gradients, images, transparency, and overlays were tested in worst cases.
- [ ] Forced-colors/high-contrast behavior remains understandable.
- [ ] Thin type and small icons exceed bare minimums where needed.

### Themes and states

- [ ] Dark mode was designed by semantic role rather than inversion.
- [ ] Every interactive state is visible and verified.
- [ ] Status families work in light and dark themes.
- [ ] Browser controls and native widgets use the intended color scheme.
- [ ] System preference and explicit user override behave correctly.
- [ ] Theme changes do not flash the wrong colors.

### Data and media

- [ ] Sequential, diverging, qualitative, and cyclic palettes are used only for matching data types.
- [ ] Ordered data has a meaningful lightness progression.
- [ ] Categories have redundant labels/shapes where needed.
- [ ] Legends, tooltips, selections, and annotations are tested.
- [ ] Logos, transparent images, illustrations, and charts work in every theme.

### Implementation and governance

- [ ] Components use semantic tokens rather than hardcoded colors.
- [ ] Approved foreground/background pairs are documented.
- [ ] Contrast tests run automatically where possible.
- [ ] sRGB fallbacks and wide-gamut behavior are verified.
- [ ] Alpha-composited colors are tested on actual backgrounds.
- [ ] Design files and code share the same token source or sync process.
- [ ] A named owner reviews new roles, values, and exceptions.

---

## 19. Selected sources and further reading

### Standards and web technology

- W3C. [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- W3C. [Understanding Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- W3C. [Understanding Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast).
- W3C. [Understanding Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).
- W3C. [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/).
- W3C. [WCAG 3 Introduction and draft status](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/).
- MDN. [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Color_values).
- MDN. [`oklch()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch).
- MDN. [`color-mix()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix).
- MDN. [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-color-scheme).
- MDN. [`color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme).

### Psychology and culture

- Jonauskaite et al. [Universal Patterns in Color-Emotion Associations Are Further Shaped by Linguistic and Geographic Proximity](https://www.psychologicalscience.org/journals/psychological-science/0956797620948810/). *Psychological Science*, 2020.
- Palmer and Schloss. [An ecological valence theory of human color preference](https://doi.org/10.1073/pnas.0906172107). *PNAS*, 2010.
- Elliot and Maier. [Color Psychology: Effects of Perceiving Color on Psychological Functioning in Humans](https://www.annualreviews.org/content/journals/10.1146/annurev-psych-010213-115035). *Annual Review of Psychology*, 2014.

### Design systems

- U.S. Web Design System. [Using color](https://designsystem.digital.gov/design-tokens/color/overview/).
- U.S. Web Design System. [Theme color tokens](https://designsystem.digital.gov/design-tokens/color/theme-tokens/).
- Carbon Design System. [Color tokens](https://carbondesignsystem.com/elements/color/tokens/).
- Carbon Design System. [Themes](https://carbondesignsystem.com/elements/themes/overview/).
- Microsoft Fluent 2. [Color](https://fluent2.microsoft.design/color).
- Apple Human Interface Guidelines. [Color](https://developer.apple.com/design/human-interface-guidelines/color).

### Data visualization

- Brewer and Harrower. [ColorBrewer](https://colorbrewer2.org/).
- ColorBrewer. [Sequential, diverging, and qualitative scheme guidance](https://colorbrewer2.org/learnmore/schemes.html).
- Matplotlib. [Choosing Colormaps](https://matplotlib.org/stable/tutorials/colors/colormaps.html).
- Nuñez, Anderton, and Renslow. [Optimizing colormaps with consideration for color vision deficiency](https://arxiv.org/abs/1712.01662), introducing cividis.

---

## Final principle

The best palette is not the one with the most beautiful individual colors. It is the one whose relationships make the product clearer, more recognizable, more expressive, and more usable across real people and real conditions.

Choose color with taste, but build it with roles, evidence, contrast, redundancy, tokens, and testing.

---
name: typography
description: Select, set, implement, and evaluate typography for readable and expressive interfaces and websites. Use when choosing fonts, defining type tokens and hierarchy, setting body text, labels, forms, tables, code, responsive type, variable fonts, multilingual fallbacks, font loading, accessibility, or diagnosing legibility, readability, hierarchy, voice, and layout problems caused by type.
---

# Typography

## Operating principle

Create clear letterforms, appropriate settings, visible structure, fitting voice, and robust behavior. Treat typography as a relationship among typeface, apparent size, weight, measure, leading, spacing, content, language, layout, rendering, and context.

## Load the detailed research

Read `references/research.md` for type selection, production systems, multilingual work, accessibility, implementation, evaluation, or evidence behind numeric guidance.

Useful searches:

```sh
rg -n '^## (2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)\.' references/research.md
rg -n '^## 18\.|^## 19\.|^## 20\.' references/research.md
rg -n 'line length|line height|apparent size|variable|fallback|multilingual|contrast|font-face' references/research.md
```

## Workflow

### 1. Inventory real content

Collect long and short headlines, paragraphs, labels, buttons, errors, warnings, numbers, currency, dates, tables, code, user content, languages, loading, and empty states.

### 2. Define roles and constraints

Specify reading task and distance, platform, viewport and density, languages, accessibility, brand voice, data needs, and performance budget. Define semantic roles before values.

### 3. Select candidate families

Compare full paragraphs and interface samples at equal apparent size. Check confusable characters such as `I/l/1`, `O/0`, `c/e/o`, punctuation, diacritics, symbols, numerals, family completeness, language coverage, and rendering at target sizes.

### 4. Establish body text first

Choose family, apparent size, weight, measure, and leading as one system. Start with real content and actual containers.

### 5. Build hierarchy by role

Add display, page title, section title, lead, body, label, metadata, caption, data, and code roles only as needed. Use spacing as part of each role and avoid changing every variable at once.

### 6. Add selective voice

Decide where typography speaks loudly and where it becomes quiet. Test congruence with content, imagery, color, shape, brand, and consequence.

### 7. Implement resiliently

Use semantic tokens, fluid values where useful, resilient `@font-face`, metric-compatible fallbacks, appropriate `font-display`, limited files/weights/axes, preload only critical assets, and preserve selectable adaptable text.

### 8. Test technically and with readers

Test real devices and platforms, slow/failed loading, zoom, text-spacing overrides, high contrast, localization, mixed scripts, print when relevant, scan performance, comprehension, errors, comfort, tone, and preference. Measure preference separately from performance.

### 9. Document and govern

Record roles, families, weights, features, measures, spacing, responsive behavior, numeral conventions, language fallbacks, examples, and anti-examples.

## Practical starting ranges

Treat these as hypotheses to test, not universal rules:

- General body text often begins around `1rem–1.125rem`.
- Sustained Latin-script reading often begins around `45–75ch`, commonly `55–70ch`.
- Compact supporting columns often begin around `30–50ch`.
- Sustained body leading often begins around `1.45–1.65`.
- Short UI descriptions often begin around `1.3–1.5`.
- Large headings often begin around `1–1.25`, depending on wrapping and letterforms.

Re-evaluate measure and leading whenever the typeface, apparent size, or container changes.

## Rules

### Legibility and readability

- Evaluate apparent size, not only the CSS number.
- Prefer durable strokes, open counters, distinct characters, and clear punctuation at small sizes.
- Keep body tracking near the type designer's default; never tighten it merely to force fit.
- Use all caps sparingly and never transfer Latin assumptions blindly to other scripts.
- Avoid justified text unless language, hyphenation, column width, and rendering produce acceptable spacing.
- Control widows, orphans, runts, and line breaks where they damage meaning or composition.

### Hierarchy and voice

- Use the fewest roles the content needs.
- Make semantic and visual hierarchy correspond without requiring identical styling.
- Combine size, weight, width, contrast, case, and spacing deliberately rather than maximizing differences.
- Give display type personality without forcing expressive forms into sustained reading.
- Pair families by relationship and job, not by the slogan “serif plus sans.”

### Interfaces and data

- Keep labels legible and explicit; never use placeholders as the only field labels.
- Make links identifiable beyond color alone.
- Reserve tabular numerals for aligned data and test currency, decimals, signs, dates, and long values.
- Use monospace for code structure, not as a generic technical decoration.
- Let dense professional tools remain dense when comparison and spatial memory benefit.

### Accessibility and language

- Meet at least WCAG 2.2 AA contrast: `4.5:1` normal text and `3:1` qualifying large text.
- Survive user overrides including `1.5` line height, `2×` paragraph spacing, `0.12em` letter spacing, and `0.16em` word spacing without clipping or loss of function.
- Support zoom, reflow, user fonts, high contrast, and reduced visual acuity.
- Treat specialized dyslexia fonts as optional preferences, not a complete accessibility solution.
- Choose script-aware fallback families; test shaping, diacritics, vertical metrics, mixed-script lines, names, and localization expansion.

### Performance

- Load only used subsets, weights, styles, and variable axes.
- Prefer WOFF2 and avoid preloading noncritical fonts.
- Match fallback metrics to reduce layout shift.
- Use optical sizing and variable axes semantically when supported.
- Preserve a useful experience when web fonts fail.

Good typography should work at first glance, during sustained reading, during interaction, and under content and platform stress.

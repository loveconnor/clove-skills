# SVG and interface icon design

Research and production guide for designers and front-end engineers  
Last researched: 2026-07-20

## Contents

- [Executive summary](#executive-summary)
- [Scope and terminology](#scope-and-terminology)
- [What makes an icon good](#what-makes-an-icon-good)
- [How to design clean icons](#how-to-design-clean-icons)
- [What makes SVG markup clean](#what-makes-svg-markup-clean)
- [SVG delivery choices](#svg-delivery-choices)
- [Accessible icon and SVG patterns](#accessible-icon-and-svg-patterns)
- [Optimization and production workflow](#optimization-and-production-workflow)
- [Security](#security-treat-svg-as-active-content)
- [Icon libraries and systems](#icon-libraries-and-systems)
- [Design and engineering tools](#design-and-engineering-tools)
- [Common failure modes](#common-failure-modes)
- [Review checklist](#compact-review-checklist)
- [Sources and further reading](#sources-and-further-reading)
- [Limits of this research](#limits-of-this-research)

## Executive summary

A good interface icon succeeds at three different jobs:

1. **It communicates the intended concept.** The metaphor is familiar or learnable, its detail is appropriate to the rendered size, and a label is used when the meaning is not reliably obvious.
2. **It belongs to a coherent visual system.** Grid, silhouette, optical size, stroke or fill weight, corners, perspective, negative space, and state variants follow shared rules.
3. **It ships as a robust asset.** The SVG has a correct `viewBox`, minimal and intentional markup, predictable color behavior, an accessibility strategy, no unsafe content, and a tested optimization pipeline.

These jobs are related but not interchangeable. A mathematically neat icon can be semantically unclear. A recognizable icon can look wrong beside the rest of a set. A beautiful vector can still contain fragile transforms, duplicate IDs, inaccessible markup, excess editor data, or executable content.

The practical default for product UI is:

- Start with one maintained icon family rather than assembling icons from several unrelated sets.
- Use established symbols for common actions and test new or domain-specific metaphors with intended users.
- Design on a fixed master grid, reserve a safe area, and correct optical size instead of forcing every silhouette into the same literal bounding box.
- Judge the icon at its actual rendered sizes, in context, rather than only while zoomed in inside a vector editor.
- Keep the clickable control larger than the visible icon.
- Use inline SVG or framework components when the icon must inherit color or expose variants; use `<img>` for cacheable, non-interactive image assets.
- Hide decorative SVGs from assistive technology. Put the accessible name on the control when an icon is inside a button or link.
- Optimize automatically, but visually and semantically compare the result. Do not remove `viewBox`, `<title>`, IDs, or hidden definitions without knowing whether they are required.

## Scope and terminology

This guide focuses on small interface graphics: actions, navigation, status, object types, and product concepts. It is not primarily an app-icon, logo, emoji, illustration, map-symbol, or data-visualization guide, although several principles carry over.

- **Icon:** a compact visual representation of an object, action, status, or concept.
- **Glyph:** the drawn shape. Platform guidance often uses this word for monochrome interface symbols.
- **Pictogram:** usually a larger, more illustrative symbol with more room for detail.
- **Metaphor or referent:** the thing depicted and the meaning people are expected to infer.
- **SVG:** Scalable Vector Graphics, an XML-based web standard for vector content.
- **Viewport:** the rendered region occupied by an SVG.
- **`viewBox`:** the internal coordinate rectangle mapped into that viewport.
- **Optical size:** the size an icon appears to have, which may differ from its geometric bounds.
- **Semantic distance:** the conceptual gap between the drawing and its intended meaning. A trash can for Delete has a short semantic distance in many software contexts; a magic wand for an unfamiliar automation rule may not.

## What makes an icon good

### It expresses one primary concept

Apple describes an effective interface icon as expressing a single concept people can understand quickly and recommends a recognizable, highly simplified design. Adobe Spectrum likewise warns that icons which relay too much information become busy and fail at small sizes. These are useful constraints: an icon is not a miniature illustration and should not have to encode an entire sentence.

For compound ideas, identify the base object and one modifier:

- document + plus = add document;
- bell + slash = notifications off;
- cloud + down arrow = download from cloud.

Do not keep stacking badges until the icon becomes a rebus. If two modifiers are essential, the concept may need text, a different control, or a larger pictogram.

### It uses a fitting, familiar metaphor

Recognition depends on context, culture, prior exposure, and domain knowledge. Research has found that functionally representative, concrete icons can be recognized faster than arbitrary or abstract ones, while later work emphasizes familiarity and semantic distance as particularly important. The conclusion is not “always draw a literal object.” It is “reuse established conventions and verify new mappings with the people who must use them.”

Useful rules:

- Prefer established platform or domain conventions for frequent actions.
- Name the intended action before drawing the object. “Export” is a behavior; “arrow leaving a box” is one possible metaphor.
- Do not use the same silhouette for different actions in the same product.
- Do not use different silhouettes for the same action without a state or context reason.
- Treat cultural, directional, anatomical, financial, and safety symbols as context-sensitive.
- Avoid letters and words inside icons unless the content is inherently textual and localized variants are maintained.
- Test the icon without its designer-provided name. The filename must not rescue an unclear shape.

[ISO 9186-1](https://www.iso.org/standard/59226.html) defines a method for testing the comprehensibility of graphical symbols and explicitly allows supplementary text when a symbol cannot communicate reliably by itself. This is a stronger standard than asking colleagues whether an icon “looks right.”

### Its label strategy matches the risk

Visible text is usually the clearest way to resolve ambiguity. An icon may stand alone when it is conventional in the specific context, frequently used, and low risk. Use a visible label when the action is unfamiliar, infrequent, destructive, permission-related, costly, or domain-specific.

A tooltip is supplemental help, not a substitute for a usable label:

- It is delayed.
- It may not appear on touch.
- It can be missed by keyboard and assistive-technology users if implemented poorly.
- It makes a frequent action slower to learn.

An accessible name is required even when a visible label is intentionally omitted. The name should state the action or destination, not describe the artwork: `Search`, not `Magnifying glass`; `Delete project`, not `Trash can`.

### It remains legible at the use size

SVG is resolution-independent, but the display is not. At 16–24 CSS pixels, every curve and stroke is rasterized into a small pixel field. Excess detail, narrow counters, nearly touching paths, weak diagonals, and inconsistent stroke density still blur or collapse.

A small icon needs:

- a distinctive outer silhouette;
- enough negative space to survive antialiasing;
- limited interior detail;
- clear separation between foreground parts;
- no feature whose meaning depends on a sub-pixel gap;
- an explicit small-size version when scaling the larger drawing loses essential structure.

Microsoft Fluent and Adobe Spectrum both provide size-specific or size-optimized assets rather than assuming that one master can be scaled arbitrarily. Heroicons similarly separates 24 px outline/solid assets from 20 px mini and 16 px micro assets.

### It is visually consistent without being mechanically identical

Consistency lives in shared rules:

- grid and safe area;
- nominal size and optical scale;
- stroke/fill model;
- stroke weight, cap, and join;
- corner vocabulary;
- angle vocabulary;
- perspective;
- level of detail;
- negative-space density;
- selected, disabled, and directional variants;
- color behavior.

Mechanical equality is not enough. A circle, a narrow arrow, and a square can have identical dimensions yet look like three different sizes. Apple explicitly recommends changing dimensions and padding to equalize visual weight. Optical correction is part of system consistency, not a violation of it.

### It has a defined behavioral role

The visible SVG should not carry interaction by itself when a native control is appropriate. Put an icon inside a semantic `<button>` or `<a>`, then define hover, focus, pressed, selected, disabled, loading, and high-contrast behavior at the component level.

Keep these distinctions clear:

- **Icon size** controls visual emphasis.
- **Control size** controls the hit area and layout.
- **Focus indicator** communicates keyboard location.
- **Accessible name** communicates purpose to assistive technology.

WCAG 2.2 Level AA sets a minimum pointer target of 24 × 24 CSS pixels, subject to documented exceptions. That is a conformance floor, not a recommendation to make every touch control only 24 px. A 16 px icon can sit inside a 40–48 px button.

## How to design clean icons

### 1. Define the icon brief

Before drawing, record:

- canonical name;
- intended action, object, or state;
- where it appears;
- neighboring icons and labels;
- default rendered sizes;
- whether the icon mirrors in right-to-left interfaces;
- whether it needs outline, solid, selected, or alert variants;
- the failure consequence if misunderstood;
- existing platform and domain conventions;
- acceptance test with intended users.

This prevents a common failure: polishing the first metaphor before confirming that it means the right thing.

### 2. Search the chosen family before drawing

Prefer the existing family when it contains a semantically correct icon. A custom icon has an ongoing cost: design review, multiple sizes and weights, export, code packaging, accessible naming, documentation, regression tests, and future style migrations.

Do not choose an approximate icon only to avoid custom work. A visually consistent but semantically false symbol is not an improvement.

### 3. Establish a master grid and safe area

Common interface grids include 16, 20, 24, and 32 units. The number matters less than using one deliberately. A grid gives the set a shared coordinate system for keylines, stroke placement, padding, and export.

Examples from established systems:

- IBM UI icons use a 32 × 32 master grid with 2 units of padding.
- Tabler and Lucide use a 24 × 24 grid with a 2-unit default stroke.
- San Francisco Design System uses a 20 × 20 artboard with 2 px padding.
- Radix icons are designed for a compact 15 × 15 field.
- Adobe Spectrum ships separate desktop and mobile sizes and pixel-snaps each.

Build keylines for recurring silhouette classes:

- circle;
- square;
- portrait rectangle;
- landscape rectangle;
- diagonal or diamond;
- narrow directional shapes.

Keylines are starting constraints, not clipping boundaries. A visually light circle or diagonal may need to extend farther than a dense square.

### 4. Pick one construction language

Decide the icon family's core grammar before drawing many assets.

#### Stroke family

Define:

- nominal stroke width;
- `round`, `square`, or `butt` caps;
- `round`, `bevel`, or `miter` joins;
- miter limit;
- whether open contours are allowed;
- how overlaps and crossings are handled;
- whether strokes are preserved in source or expanded to filled outlines for delivery.

Stroke families are easy to recolor and adjust, but very thin strokes can lose contrast in practice and changing one icon's `stroke-width` can disrupt optical balance. W3C defines line caps and joins precisely; they are structural decisions, not export trivia.

#### Filled family

Define:

- silhouette density;
- counter size;
- cutout rules;
- internal corner treatment;
- how filled and outlined states relate;
- `nonzero` or `evenodd` fill rules where paths contain holes.

Filled icons often remain strong at small sizes, but dense silhouettes need enough internal negative space. Avoid accidental holes caused by path direction or an inappropriate `fill-rule`.

#### Mixed or variable family

If the system supports outline and filled states, design them as related variants rather than applying a generic stroke or outline command. Material Symbols uses variable axes for fill, weight, grade, and optical size. Phosphor provides multiple authored weights. These systems work because the family controls how detail and negative space change with weight.

### 5. Construct deliberate geometry

- Start with basic shapes when they express the form cleanly.
- Use as few Bézier points as needed to describe a curve, but do not optimize for the smallest possible point count at the cost of shape quality.
- Place Bézier handles tangent to the curve and avoid small accidental kinks.
- Reuse actual radii and angles where the family says they repeat.
- Avoid almost-equal coordinates that create visible wobble.
- Keep parallel edges genuinely parallel unless an optical correction is intentional.
- Close filled contours cleanly.
- Remove duplicate points, zero-length segments, and stray off-canvas geometry.
- Inspect path direction and fill behavior when shapes contain counters or overlaps.

“Clean” geometry means explainable geometry, not perfect symmetry everywhere. Handled well, a small asymmetry can make an icon look centered or evenly weighted.

### 6. Control stroke placement and pixel snapping

At a 1:1 mapping between viewBox units and CSS pixels, a centered 1-unit stroke often renders more sharply on a half-unit coordinate, while a centered 2-unit stroke often aligns on an integer coordinate. This is a rasterization heuristic, not a universal law: device pixel ratio, transforms, browser rendering, and non-integer CSS sizes change the result.

The reliable workflow is:

1. Align important horizontal and vertical edges to the intended grid.
2. Preview the actual 1× rendered size, not just a zoomed vector.
3. Test common device pixel ratios and browsers.
4. Correct blurry or uneven features in the authored small-size asset.

Avoid scaling a 24-unit icon to arbitrary dimensions such as 17.5 px and then blaming the SVG for soft output.

### 7. Equalize optical weight

Compare icons as a set in a neutral row, not one at a time. Check:

- apparent height and width;
- total dark area;
- stroke density;
- counter size;
- center of mass;
- diagonal energy;
- distance from the artboard edges;
- baseline relationship to nearby text.

Typical corrections include:

- extending circular and diagonal forms slightly beyond flat keylines;
- enlarging a sparse icon relative to a dense one;
- moving a visually bottom-heavy icon upward;
- opening counters in a bold version;
- reducing detail in a small version;
- adding transparent padding so component alignment stays predictable.

Use overlays and blur/squint tests, but make the final judgment at rendered size.

### 8. Keep negative space alive

Negative space is active geometry. A gap that is technically present may disappear after antialiasing or at a heavier weight.

Check the smallest gaps and counters in:

- the smallest supported size;
- the heaviest supported weight;
- dark and light themes;
- low-quality displays;
- Windows high-contrast or forced-colors modes where relevant.

Do not rely on a hairline separation between same-color parts to communicate the metaphor.

### 9. Use color and state purposefully

For ordinary monochrome icons, inherit the surrounding text/control color with `currentColor`. This keeps default, hover, disabled, dark-theme, and high-contrast behavior centralized.

Use multiple colors only when color carries stable meaning or is part of an approved brand asset. Never make color the only indicator of state. A selected icon may use fill, shape, label, background, or another non-color cue in addition to color.

WCAG 2.2 requires visual information needed to identify a control, state, or meaningful graphical object to reach at least 3:1 contrast against adjacent colors. The W3C notes that very thin lines can appear fainter because of antialiasing even when the underlying color values technically pass.

### 10. Design directionality and localization

Not all icons mirror in right-to-left layouts.

Usually mirror:

- back/forward navigation;
- undo/redo when the metaphor follows reading direction;
- indentation and text-direction symbols;
- a document or list whose visual order is directional.

Usually do not mirror:

- clocks;
- media playback symbols where platform convention is stable;
- brand marks;
- real-world objects without directional meaning;
- universal mathematical or scientific symbols.

Localize letters, numerals, currency, writing samples, hands, or culture-specific objects when they are unavoidable. Apple recommends localized variants for characters and reading-direction imagery.

### 11. Test meaning and performance

Use more than preference review.

- **Comprehension:** Show the icon without its name and ask what action or object it represents.
- **Matching:** Give the intended meaning and ask participants to select the icon from plausible alternatives.
- **Confusion:** Record the wrong answers; they reveal competing metaphors.
- **Search:** Place the icon in its real toolbar or menu and measure find time.
- **Recall:** Test again after a delay when the icon will be used frequently.
- **Context:** Repeat with the real label, neighboring controls, state, and data.
- **Accessibility:** Verify keyboard access, accessible name, focus, contrast, zoom, and forced colors.

Test with intended users. Designers and experienced users may recognize a convention that new or domain-external users do not.

## What makes SVG markup clean

Clean SVG is correct, minimal, adaptable, accessible for its role, and safe for its delivery context. Minified is not the same as clean.

### A reliable monochrome icon baseline

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
  focusable="false"
>
  <path d="M4 12h16M12 4v16" />
</svg>
```

This is a baseline, not a universal template. A filled icon would typically use `fill="currentColor"` and no stroke. An informative standalone graphic needs an accessible-name strategy instead of `aria-hidden`.

### Keep a correct `viewBox`

The `viewBox` has four values: minimum x, minimum y, width, and height. It maps internal user coordinates into the rendered viewport. W3C's SVG 2 specification describes `viewBox` together with `preserveAspectRatio` as the mechanism that lets content scale into a container.

Rules:

- Keep the family on one canonical coordinate system.
- Make sure intended artwork, stroke extents, and optical overflow are not clipped.
- Do not remove `viewBox` during optimization; doing so removes the asset's internal scaling map.
- Do not use the `viewBox` to compensate for random export debris.
- Keep `preserveAspectRatio="xMidYMid meet"` implicit unless a different fit is intentional.
- Avoid `preserveAspectRatio="none"` for icons because non-uniform scaling distorts geometry.

`width` and `height` are presentation defaults. The `viewBox` defines scalable internal geometry. A component system may set width and height to `1em`, CSS variables, or props while preserving the same `viewBox`.

### Use `currentColor` for themeable monochrome icons

`currentColor` lets an SVG's `fill` or `stroke` inherit the CSS `color` value. This keeps the icon coupled to its label or control state without hard-coding theme colors into path data.

Avoid placing hard-coded `#000`, `#fff`, or brand colors on every child path unless the asset truly requires a fixed palette.

### Prefer presentation attributes for portable icon assets

For small icon assets, attributes such as `fill`, `stroke`, `stroke-width`, `stroke-linecap`, and `stroke-linejoin` are easy to inspect, inherit, override, and transform into framework props. Large `<style>` blocks and generated class names add collision risk when SVG is inlined.

Keep complex CSS only when it is actually needed. External SVG files referenced through `<img>` cannot be styled internally from the host page in the same way as inline SVG.

### Use semantic shapes when useful, paths when necessary

`<circle>`, `<rect>`, `<line>`, `<polyline>`, and `<polygon>` can be clearer to maintain than one opaque path. Converting every primitive to a path may reduce bytes, but it can make authoring and animation harder.

Use paths when:

- the geometry is genuinely custom;
- the delivery pipeline requires one path;
- path combination materially reduces markup and has been visually verified;
- morphing or a path-specific operation requires it.

Do not merge paths that need different colors, opacity, animation, accessible descriptions, or state control.

### Flatten transforms deliberately

Vector editors often export nested groups with repeated `translate`, `scale`, and matrix transforms. Flatten simple transforms into final coordinates when it reduces fragility and markup. Preserve a transform when it is meaningful for animation, reuse, or maintainability.

After flattening:

- verify stroke widths and `vector-effect` behavior;
- inspect curves and decimals;
- compare the rendered before/after output;
- check that masks, gradients, clips, and filters still use the intended coordinate space.

`vector-effect="non-scaling-stroke"` keeps a stroke width independent of transforms. It is useful for special cases such as maps, but it is usually unnecessary for icons that scale uniformly as a whole.

### Minimize groups and definitions

Remove groups that provide no shared transform, style, opacity, clip, mask, semantics, or animation target. Keep groups that represent an actual layer or shared rule.

Remove unused:

- `<defs>` content;
- gradients, masks, patterns, symbols, filters, and clip paths;
- editor namespaces and metadata;
- empty groups and elements;
- comments that do not document a real constraint;
- hidden geometry accidentally left outside the artboard.

Do not remove definitions merely because they do not render by themselves; referenced content in `<defs>` is expected to be hidden until used.

### Manage IDs safely

IDs are document-global when SVG is inline. Two separate icons exported with `id="clip0"` can collide, causing one instance to use another instance's gradient, mask, title, or clip path.

- Remove IDs that are not referenced.
- Prefix required IDs with a stable icon or component identifier.
- Generate unique per-instance IDs when the same inline SVG appears multiple times and references `<title>`, `<clipPath>`, `<mask>`, gradients, or filters.
- Keep every `url(#id)`, `href="#id"`, `aria-labelledby`, and `aria-describedby` reference synchronized.
- Configure SVGO's ID cleanup/prefixing for the actual embedding strategy.

### Use sensible numeric precision

Editor exports can contain long decimals that add bytes without affecting a 16–24 px icon. Round coordinates only as far as visual output permits.

A practical process:

1. Optimize with conservative precision.
2. Rasterize before and after at every supported size.
3. Compare silhouettes, stroke weight, and counters.
4. Increase precision for curves or transforms that visibly change.

There is no correct universal decimal count. A simple orthogonal icon may tolerate integer coordinates; a carefully tuned curve may not.

### Keep fill behavior explicit when needed

SVG supports `nonzero` and `evenodd` fill rules. Use the one the path construction expects and retain it through optimization. Unexpected filled holes or missing counters often come from combining paths with different winding assumptions.

### Avoid text in distributable icon SVGs

Live `<text>` depends on fonts, layout engines, language, and text metrics. Convert unavoidable logotype text to approved outlines when licensing permits, or render real localized text outside the icon. For interface controls, text belongs in HTML rather than baked into SVG.

### Avoid expensive visual effects in small UI icons

Filters, large blurs, masks, patterns, and multiple gradients can expand markup, increase paint cost, complicate dark themes, and fail to read at small sizes. Use them when the visual concept requires them, not to make a basic interface icon feel more elaborate.

### Preserve only intentional metadata

Production icons rarely need editor history, document dimensions in physical units, layer names, thumbnails, or proprietary namespaces. Remove them. Preserve provenance, licensing, or an asset identifier in a separate manifest when optimization would strip comments or `<metadata>`.

## SVG delivery choices

| Method | Best fit | Strengths | Costs and constraints |
|---|---|---|---|
| Inline `<svg>` | Themeable UI icons, animation, per-path control | Full CSS and DOM access; no additional request; accessible markup can be local | Repeated markup; IDs can collide; not cached as a separate image |
| Framework component | Product icon systems in React/Vue/etc. | Typed API; centralized size, color, accessibility, and variants; tree-shakable when packaged well | Build configuration and component overhead; poor imports can include too much code |
| `<img src="icon.svg">` | Cacheable, self-contained image assets | Simple; cacheable; isolated from page CSS and ID collisions | Host CSS cannot style inner paths; use `alt`; image-context SVG restricts scripts and external resources |
| CSS `background-image` | Pure decoration | Keeps decorative image out of content semantics | Poor fit for meaningful icons; hard to recolor; no image alternative |
| CSS mask | Monochrome decorative or already-labeled UI glyph | Color controlled by background; external asset can be reused | More CSS complexity; semantic meaning still belongs on the element; test browser/forced-color behavior |
| SVG sprite with `<symbol>`/`<use>` | Large repeated icon sets | Deduplicates geometry; centralized asset | Styling and cross-document behavior need testing; ID/name handling is more complex |
| Icon font | Legacy or constrained systems | Familiar font loading and `currentColor` behavior | Glyph mapping, fallback, ligature, accessibility, multicolor, hinting, and missing-font risks; SVG is usually a better new-project default |

Choose based on behavior rather than fashion. MDN documents an important tradeoff: external images can be cached, while inline SVG gives direct styling and scripting access.

## Accessible icon and SVG patterns

Decide first whether the image is decorative, functional, informative, or complex. The same drawing can require different markup in different contexts.

### Decorative icon inside a labeled control

The visible button label already communicates the action, so hide the SVG from assistive technology.

```html
<button type="button">
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
    <!-- paths -->
  </svg>
  Save
</button>
```

### Icon-only button

Name the button and hide the redundant SVG. The semantic element, not the drawing, owns interaction.

```html
<button type="button" aria-label="Close dialog">
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
    <!-- paths -->
  </svg>
</button>
```

Add a visible label when the action is not conventional enough to stand alone. If a tooltip is provided, keep the accessible name available without hover.

### Informative external SVG

Use context-appropriate alternative text. W3C recommends describing the image's purpose; for a functional image, describe the action rather than the appearance.

```html
<img src="status-warning.svg" alt="Payment needs review" role="img">
```

Use `alt=""` when the image is purely decorative or repeats adjacent text.

### Informative inline SVG

```html
<svg role="img" aria-labelledby="payment-status-title" viewBox="0 0 24 24">
  <title id="payment-status-title">Payment needs review</title>
  <!-- paths -->
</svg>
```

Generate a unique title ID if the component can appear more than once. A `<title>` alone is not a complete cross-context accessibility strategy; explicitly connect the accessible name.

### Complex SVG

Charts, maps, and diagrams need more than a short icon label. Provide the concise purpose, then expose the important data or explanation as HTML, a table, list, or linked description. Do not force screen-reader users to traverse hundreds of anonymous path elements.

### Contrast, focus, and target size

- Test meaningful icon parts at 3:1 against adjacent colors under WCAG 2.2 SC 1.4.11.
- Keep focus visible on the control; do not rely on recoloring the icon alone.
- Ensure the pointer target meets WCAG 2.2 SC 2.5.8 or a documented exception.
- Test forced colors and high-contrast modes; `currentColor` often adapts better than hard-coded fills.
- Do not communicate status only through color or a tiny badge.
- Use native buttons and links so name, role, state, keyboard behavior, and activation are available by default.

## Optimization and production workflow

### Recommended pipeline

1. **Keep an editable source.** Preserve the original Figma, Illustrator, Sketch, Penpot, or Inkscape source separately from the production export.
2. **Export from a named frame.** Use the exact canonical artboard/viewBox and include only visible production geometry.
3. **Inspect the raw SVG.** Check `viewBox`, clipping, groups, transforms, colors, IDs, text, raster images, metadata, scripts, event handlers, and external references.
4. **Normalize the asset.** Apply the family's fill/stroke, `currentColor`, sizing, ID, and accessibility policy.
5. **Optimize with a committed configuration.** Run SVGO in the build or asset pipeline rather than relying on remembered GUI toggles.
6. **Transform for the framework if needed.** SVGR can turn SVG into React components and can use SVGO during transformation.
7. **Validate structure.** Parse the XML, lint disallowed elements/attributes, and assert required fields such as `viewBox`.
8. **Render regression images.** Compare before/after at supported sizes, themes, and states.
9. **Test in product context.** Check alignment with text, buttons, toolbars, zoom, keyboard focus, forced colors, and accessible names.
10. **Record source and license.** Track origin, version, license, modifications, and owner in a manifest or documentation.

### SVGO guardrails

[SVGO](https://svgo.dev/) is the standard automation choice for removing redundant SVG data and rewriting markup. Its plugin system is powerful enough to break behavior when configured without context.

Treat these as review-required operations:

- removing `viewBox`;
- removing `<title>` or `<desc>`;
- cleaning, minifying, or prefixing IDs;
- merging paths;
- converting shapes to paths;
- collapsing groups and transforms;
- removing hidden elements or `<defs>`;
- converting colors;
- rounding path data aggressively;
- removing dimensions;
- removing scripts or event attributes from untrusted input.

SVGO's maintainers disabled `removeViewBox` and `removeTitle` by default because the former breaks scalability and the latter can reduce accessibility. Preserve those defaults unless the delivery contract proves otherwise.

[SVGOMG](https://jakearchibald.github.io/svgomg/) is a useful visual interface for experimenting with SVGO settings. A GUI experiment should become a reviewed, versioned configuration before it becomes a team pipeline.

### Example acceptance checks

An icon is ready when:

- its meaning matches the brief and likely confusions were tested;
- it uses the canonical viewBox and safe area;
- it matches the set's optical size, weight, corners, caps/joins, perspective, and detail;
- it is sharp at every supported rendered size;
- selected, disabled, directional, and theme variants are resolved where needed;
- all meaningful visual parts meet contrast requirements;
- the control has a correct accessible name, role, state, focus treatment, and target size;
- markup contains no editor residue, unused definitions, accidental raster images, or unplanned external references;
- required IDs are unique and references resolve;
- optimization produces no meaningful visual or semantic change;
- the asset's source, version, license, and owner are recorded.

## Security: treat SVG as active content

SVG is XML markup, not merely a bag of coordinates. The SVG 2 specification includes scripts, event attributes, hyperlinks, external resources, and interactive elements. Never inline or serve untrusted SVG as active same-origin content without a security design.

For user-supplied or third-party SVG:

- Prefer a safe image delivery context such as `<img>` when the product does not require inline DOM access. SVG used as an image has scripting and external-resource restrictions in browsers.
- Validate file type, size, dimensions, and structure on the server. Do not trust the filename or MIME header alone.
- Remove or reject scripts, event-handler attributes, `foreignObject`, unsafe links, unexpected external references, and other elements outside a strict allowlist.
- Use a maintained sanitizer with an SVG-specific policy when markup must be inlined. [DOMPurify](https://github.com/cure53/DOMPurify) supports SVG profiles, but configuration and the execution environment still need security review.
- Re-encode or reconstruct simple icon geometry into a known internal schema when possible.
- Apply Content Security Policy and safe response headers as defense in depth, not as a replacement for sanitization.
- Store uploads outside executable application paths and use generated filenames.

Optimization is not sanitization. A minifier's goal is smaller equivalent markup, not enforcement of the product's trust boundary.

## Icon libraries and systems

Library facts and counts change. The notes below were checked on 2026-07-20; verify the current package version, license, platform restrictions, and individual brand rights before adoption.

### General-purpose open-source libraries

| Library | Visual model and sizes | Good fit | License / important caveat |
|---|---|---|---|
| [Lucide](https://lucide.dev/) | Community-maintained outline family; 24-unit grid; 2-unit default stroke; CSS-friendly SVG; framework packages | Neutral product UI, broad framework support, adjustable stroke | ISC. Tree-shakable imports are supported; preserve one chosen stroke policy instead of varying icons ad hoc. |
| [Heroicons](https://heroicons.com/) | 24 px outline and solid, 20 px mini solid, 16 px micro solid | Tailwind-oriented products and teams that value authored size variants | MIT. Smaller catalog than Lucide/Tabler, which can be a benefit for coherence but may require custom domain icons. |
| [Phosphor](https://phosphoricons.com/) | Flexible family with thin, light, regular, bold, fill, and duotone weights; 256-unit source grid | Products needing expressive weight and fill variants | MIT. Import individual icons; broad namespace imports can hurt build performance or tree shaking depending on tooling. |
| [Tabler Icons](https://tabler.io/icons) | Large 24-unit, 2-stroke outline family plus filled assets | Broad application coverage with a consistent line style | MIT. The large catalog helps coverage; review near-duplicate metaphors and do not vary stroke per screen. |
| [Radix Icons](https://github.com/radix-ui/icons) | Crisp compact 15 × 15 icons delivered as React components | Dense desktop UI and Radix-based products | MIT. The compact proportions may look too light or small next to 20–24 px families. |
| [Font Awesome](https://fontawesome.com/) | Large multi-style ecosystem, SVG packages, web fonts, kits, and framework integrations | Legacy compatibility, broad subject coverage, teams already using its tooling | Free and Pro assets use different licenses and terms; check the exact package/style. Whole-style imports can be bulky; use explicit icons or supported tree shaking. |

### Platform and design-system families

| System | Distinguishing strengths | Best use | Constraint |
|---|---|---|---|
| [Material Symbols](https://developers.google.com/fonts/docs/material_symbols) | More than 2,500 symbols; outline/rounded/sharp styles; variable fill, weight, grade, and optical-size axes | Material products, Android, or systems that benefit from variable symbol axes | Apache 2.0. Font delivery is convenient but SVG assets/components may give more control and avoid font-loading failure modes. |
| [Fluent System Icons](https://fluent2.microsoft.design/iconography) | Regular and filled system icons, authored across platform-appropriate sizes | Microsoft-aligned or cross-platform enterprise UI | System icons are MIT; Microsoft product/brand icon rules are separate. Use filled assets as authored rather than mechanically filling outlines. |
| [Carbon Icons](https://www.ibm.com/design/language/iconography/ui-icons/design/) | 32-unit master grid, IBM Plex-informed geometry, strong technical/product vocabulary | Carbon/IBM products and dense enterprise applications | Apache 2.0 package. The visual language is recognizable; confirm it fits a non-IBM brand before adopting wholesale. |
| [Spectrum icons](https://spectrum.adobe.com/page/iconography/) | Separate 18 px desktop and 22 px mobile workflow icons, pixel snapping, safe areas, explicit optical corrections | Adobe ecosystem and complex creative-tool interfaces | Follow Adobe's usage and implementation terms. The design documentation is broadly useful even when the assets are not adopted. |
| [SF Symbols](https://developer.apple.com/sf-symbols/) | Thousands of symbols with weights, scales, rendering modes, localization, and Apple-platform integration | Native Apple-platform applications | License and platform restrictions matter. Do not treat SF Symbols as a general web icon library. |

### Aggregators and special-purpose sets

| Library | Use | Caveat |
|---|---|---|
| [Iconify](https://iconify.design/docs/) | Common tooling and data model for hundreds of open-source sets; useful for discovery, custom sets, design plugins, and build-time extraction | Each source set keeps its own license and visual language. Do not mix families casually. Runtime API loading creates a third-party/network dependency and can cause delayed rendering or layout shift; build-time/local data avoids it. |
| [Simple Icons](https://simpleicons.org/) | Monochrome SVG brand marks with source and metadata | Brand marks are not generic UI controls. The repository uses CC0, but that does not waive third-party trademark, brand-guideline, or individual asset rights. Review the project's legal disclaimer and the brand's current rules. |

### How to choose a library

Score candidates against real product needs:

1. **Semantic coverage:** Does it include the product's common actions and domain objects without misleading substitutions?
2. **Style fit:** Does its stroke/fill, density, corner, and personality fit the typography and interface?
3. **Authored sizes:** Are the needed 16, 20, 24, or larger versions specifically designed or merely scaled?
4. **Variants:** Are solid, selected, directional, weight, and duotone variants useful and internally coherent?
5. **Accessibility API:** Do components default to decorative behavior or provide a clear title/label contract?
6. **Delivery:** Are SVG files, sprites, framework components, and design-tool sources maintained?
7. **Performance:** Can the build include only used icons? Are package exports compatible with the framework and server rendering?
8. **Governance:** Are naming, deprecation, contribution, and release policies documented?
9. **License and rights:** Is commercial use allowed? Is attribution required? Are brand or platform restrictions separate from the code license?
10. **Custom-extension cost:** Can the team draw a missing icon that genuinely looks native to the family?

Choose one primary UI family. Add a second set only for a different semantic class, such as approved brand marks, and document the boundary.

## Design and engineering tools

- **Vector editors:** Figma, Adobe Illustrator, Sketch, Penpot, and [Inkscape](https://inkscape.org/) can produce SVG. Export quality depends on document structure and settings, not merely the tool.
- **Optimization:** [SVGO](https://svgo.dev/) for versioned automation; [SVGOMG](https://jakearchibald.github.io/svgomg/) for visual experimentation.
- **React conversion:** [SVGR](https://react-svgr.com/) transforms SVG into React components and can run SVGO.
- **Aggregation and custom-set tooling:** [Iconify Tools](https://iconify.design/docs/) can import, validate, clean, organize, and export icon data.
- **Validation:** XML parsing, project-specific allowlists, snapshot rendering, accessibility testing, and bundle analysis should be part of the pipeline even when no single branded tool covers them all.

## Common failure modes

### Design failures

- Mixing outline, filled, rounded, sharp, isometric, and front-facing icons without a defined reason.
- Treating an icon's filename as proof that its meaning is obvious.
- Using an unfamiliar icon without visible text for a consequential action.
- Forcing every silhouette into identical bounds and producing uneven optical sizes.
- Drawing at 400% zoom and never checking 16–24 px output.
- Using detail or negative spaces that disappear at small sizes.
- Mechanically converting outline icons to filled variants.
- Changing stroke width to “fix” one icon instead of correcting the geometry.
- Using color alone for status or selection.
- Mirroring every icon in right-to-left layouts.
- Embedding unlocalized letters or culturally narrow metaphors.

### SVG failures

- Missing or incorrect `viewBox`.
- Fixed colors that fight themes and states.
- Huge coordinate spaces and long decimals for simple icons.
- Nested transform matrices and editor-generated groups with no purpose.
- Repeated generic IDs such as `clip0` across inline instances.
- Unused masks, clips, gradients, filters, metadata, and hidden paths.
- Accidental raster `<image>` content inside an SVG.
- Removing `<title>`, `<desc>`, IDs, or `viewBox` during blind optimization.
- Assuming `<title>` automatically makes every embedding accessible.
- Putting click handlers on raw `<svg>` instead of a semantic control.
- Treating uploaded SVG as a passive image and inlining it unsanitized.
- Shipping an entire icon package when only a small subset is used.

## Compact review checklist

### Meaning

- [ ] The icon has one canonical concept and name.
- [ ] Its metaphor matches user, platform, and domain conventions.
- [ ] Likely alternative interpretations were tested.
- [ ] A visible label is present when recognition is uncertain or the consequence is significant.

### Visual system

- [ ] Grid, safe area, keyline, and optical size match the family.
- [ ] Stroke/fill, caps, joins, corners, angles, and perspective are consistent.
- [ ] Negative space and detail survive the smallest size and heaviest weight.
- [ ] The icon aligns optically with neighboring icons and text.
- [ ] Theme, state, directionality, and localization variants are resolved.

### SVG quality

- [ ] `viewBox` is correct and artwork is not clipped.
- [ ] Fill/stroke and `currentColor` behavior are intentional.
- [ ] Geometry has no stray points, accidental kinks, duplicate segments, or unused shapes.
- [ ] Groups, transforms, defs, IDs, metadata, and precision are justified.
- [ ] Every ID reference is valid and collision-safe.
- [ ] No script, event attribute, unsafe link, unexpected external resource, or raster image is present.

### Product quality

- [ ] The icon is sharp at actual supported sizes and device scales.
- [ ] Meaningful parts meet non-text contrast requirements.
- [ ] The containing control has the correct accessible name, role, state, focus, and hit target.
- [ ] Keyboard, screen reader, zoom, forced colors, and right-to-left behavior were checked where applicable.
- [ ] Optimization and framework transformation were visually regression-tested.
- [ ] Source, version, modifications, license, brand restrictions, and owner are recorded.

## Sources and further reading

### Standards and accessibility

- W3C, [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/SVG/)
- W3C SVG 2, [Coordinate systems, transformations, `viewBox`, and `preserveAspectRatio`](https://www.w3.org/TR/SVG/coords.html)
- W3C SVG 2, [Painting, fills, strokes, caps, and joins](https://www.w3.org/TR/SVG/painting.html)
- W3C SVG 2, [Paths](https://www.w3.org/TR/SVG/paths.html)
- W3C SVG 2, [Scripting and interactivity](https://www.w3.org/TR/SVG/interact.html)
- W3C WAI, [Images tutorial](https://www.w3.org/WAI/tutorials/images/)
- W3C WAI, [Functional images](https://www.w3.org/WAI/tutorials/images/functional/)
- W3C WAI, [Decorative images](https://www.w3.org/WAI/tutorials/images/decorative/)
- W3C WAI, [Understanding non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast)
- W3C WAI, [Understanding target size (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)
- W3C WAI, [Understanding name, role, value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- ISO, [ISO 9186-1:2014 — method for testing graphical-symbol comprehensibility](https://www.iso.org/standard/59226.html)

### Platform and design-system guidance

- Apple Human Interface Guidelines, [Icons](https://developer.apple.com/design/human-interface-guidelines/icons)
- Apple, [SF Symbols](https://developer.apple.com/sf-symbols/)
- Google for Developers, [Material Symbols guide](https://developers.google.com/fonts/docs/material_symbols)
- Microsoft Fluent 2, [Iconography](https://fluent2.microsoft.design/iconography)
- IBM Design Language, [UI icon design](https://www.ibm.com/design/language/iconography/ui-icons/design/)
- Adobe Spectrum, [Iconography](https://spectrum.adobe.com/page/iconography/)
- GNOME Human Interface Guidelines, [UI icons](https://developer.gnome.org/hig/guidelines/ui-icons.html)

### SVG implementation and tooling

- MDN, [Including vector graphics in HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
- MDN, [SVG as an image](https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/SVG_as_an_image)
- MDN, [`vector-effect`](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/vector-effect)
- MDN, [`fill-rule`](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/fill-rule)
- SVGO, [Documentation](https://svgo.dev/docs/introduction/)
- SVGR, [What is SVGR?](https://react-svgr.com/docs/what-is-svgr/)
- Cure53, [DOMPurify](https://github.com/cure53/DOMPurify)

### Research on icon recognition

- Stotts, [The usefulness of icons on the computer interface: effect of graphical abstraction and functional representation](https://doi.org/10.1177/154193129804200502), 1998
- Wiedenbeck, [The use of icons and labels in an end user application program: an empirical study of learning and retention](https://doi.org/10.1080/014492999119129), 1999
- Isherwood, McDougall, and Curry, [Icon identification in context: the changing role of icon characteristics with user experience](https://doi.org/10.1518/001872007X200102), 2007
- Ashe, Eardley, and Fletcher, [An empirical study of icon recognition in a virtual gallery interface](https://doi.org/10.25046/aj030637), 2018
- Shen et al., [EvIcon: Designing high-usability icons with human-in-the-loop exploration and IconCLIP](https://doi.org/10.1111/cgf.14924), 2023

## Limits of this research

- Icon comprehension is contextual; no geometry recipe guarantees a universally understood symbol.
- Platform conventions, library inventories, package behavior, and licenses change. Re-check them at adoption and upgrade time.
- WCAG is a baseline, not evidence that a specific icon is understandable or pleasant to use.
- Pixel-snapping advice depends on final size, device pixel ratio, transforms, and renderer. Rendered output is the source of truth.
- Legal notes here are operational cautions, not legal advice. Brand and trademark use may require review beyond the icon library's software license.

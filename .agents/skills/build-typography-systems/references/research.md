# Bundled Research Reference

This file contains the complete research source for this skill. Use this contents list and targeted searches to load only the sections required by the task.

## Contents

- Executive summary
- 1. What typography is
- 2. Legibility, readability, and comprehension
- 3. What good typography looks and feels like
- 4. Anatomy that matters in use
- 5. Choosing a typeface
- 6. Setting body text
- 7. Building typographic hierarchy
- 8. Typography as voice and brand
- 9. Pairing typefaces
- 10. Interface typography
- 11. Responsive typography
- 12. Multilingual and multiscript typography
- 13. Accessibility
- 14. Variable fonts and optical sizing
- 15. Web-font implementation and performance
- 16. A practical CSS foundation
- 17. Print-specific considerations
- 18. A typography workflow
- 19. Typography critique rubric
- 20. Common problems and what they usually mean
- 21. Common typography myths
- 22. Evidence-based conclusions
- 23. Research limitations and cautions
- Selected sources and further reading
- One-page takeaway

---

# What Good Typography Means and Looks Like

> A detailed, research-backed field guide to legibility, readability, hierarchy, expression, typesetting, accessibility, and implementation

**Prepared:** July 2026  
**Primary scope:** Digital products, websites, editorial interfaces, and brand systems  
**Secondary scope:** Print, presentations, signage, data displays, and product interfaces

---

## Executive summary

Good typography makes language perceptible, understandable, navigable, and emotionally appropriate. It is not just the selection of a beautiful typeface. It is the complete system by which written information is shaped and arranged: typeface, font, size, width, weight, line length, line height, spacing, alignment, hierarchy, color, layout, language support, rendering, and behavior across contexts.

A typeface can be excellent and still be badly typeset. A plain typeface can produce excellent typography when its setting is clear, well paced, and appropriate. The quality lives in the relationships.

The strongest typography usually has seven properties:

1. **Legibility** — individual characters and words can be recognized reliably.
2. **Readability** — continuous text can be read comfortably and understood.
3. **Hierarchy** — the reader can quickly see structure, importance, and sequence.
4. **Fitness** — the type suits the content, audience, language, medium, and viewing conditions.
5. **Coherence** — styles repeat as a meaningful system rather than as arbitrary decoration.
6. **Voice** — form reinforces the desired personality and meaning without fighting the words.
7. **Resilience** — text survives resizing, localization, real content, different devices, and access needs.

A useful summary is:

> **Good typography = clear letterforms + appropriate setting + visible structure + fitting voice + robust behavior**

No single font, size, ratio, or line length is universally optimal. Reading performance depends on interactions among the typeface, apparent size, spacing, content, language, display, viewing distance, reader, and task. The numerical guidance in this document should be treated as a starting range to test—not a recipe that guarantees quality.

---

## 1. What typography is

### Typeface, font, and typesetting

These terms are often used interchangeably, but the distinction is useful:

- A **typeface** is the visual design of a set of characters, such as a family identity.
- A **font** is a specific implementation or style of that typeface, such as a particular weight, width, optical size, or variable-font instance.
- **Typesetting** is the arrangement of text: size, measure, leading, spacing, alignment, hierarchy, and composition.
- A **typographic system** defines repeatable text roles and the rules connecting them.

Typography operates at two scales. The U.S. Web Design System describes **microtypography** as the treatment inside text blocks and **macrotypography** as the arrangement of text and content across a page ([USWDS Typography](https://designsystem.digital.gov/components/typography/)).

Microtypography includes:

- Glyph choice and OpenType features
- Kerning and tracking
- Word spacing
- Line height
- Hyphenation and justification
- Numeral and punctuation styles

Macrotypography includes:

- Type hierarchy
- Line length and column width
- Relationship between headings and body text
- White space between text blocks
- Grid and alignment
- Pacing across a page or screen

Both matter. Beautiful character shapes cannot repair a weak information hierarchy, and a logical hierarchy cannot fully compensate for text that is physically difficult to see.

### Typography carries two messages at once

Every typographic choice communicates:

1. **Linguistic content:** the literal meaning of the words.
2. **Visual or paralinguistic meaning:** the tone implied by shape, proportion, weight, rhythm, and composition.

Type can make the same sentence feel official, intimate, technical, luxurious, playful, urgent, historical, or neutral. Research has found that readers assign personality traits to typefaces and that these associations can affect brand perception and memory ([Childers & Jass, 2002](https://doi.org/10.1207/S15327663JCP1202_03); [Shaikh, Chaparro, & Fox, 2006](https://doi.org/10.1177/154193120605001725)). The association is contextual rather than fixed: surrounding color, imagery, layout, category, language, and prior brand exposure modify it.

---

## 2. Legibility, readability, and comprehension

### 2.1 Legibility: can the forms be identified?

Legibility concerns the recognition of characters and short strings. It matters most when type is small, distant, low contrast, moving, briefly visible, unfamiliar, or read by people with reduced acuity.

Legibility is influenced by:

- Apparent character size
- Stroke weight and contrast
- Open counters and apertures
- Character differentiation
- Interletter spacing
- Rendering quality
- Foreground-background contrast
- Familiarity and expected letter skeletons
- Viewing distance and environmental conditions

A legible interface face often has:

- A moderate or large x-height
- Counters that remain open at small sizes
- Distinct forms for confusable characters such as `I`, `l`, `1`, `O`, and `0`
- Sufficient difference among `c`, `e`, and `o`
- Clear punctuation and diacritics
- Strokes that survive low-resolution or low-contrast rendering
- Spacing designed for the intended size rather than globally tightened

These are tendencies, not a checklist that selects a winner automatically. A very large x-height can reduce differentiation between capitals and lowercase. Extremely open forms can alter tone or word shape. The typeface must be judged in its actual use.

### 2.2 Readability: can the text be read comfortably over time?

Readability concerns connected reading: following lines, recognizing word groups, maintaining place, and understanding paragraphs. It is a property of the whole text setting.

Readability depends on:

- Legibility of the typeface
- Font size and perceived size
- Line length
- Line height
- Letter and word spacing
- Paragraph structure
- Alignment and hyphenation
- Content difficulty and writing quality
- Reader familiarity, ability, and motivation
- Device, environment, and time pressure

Research comparing academic layouts found that participants performed better in search-reading tasks with layouts following legibility guidance and also rated those layouts as easier and more attractive ([Lonsdale, 2016](https://journals.uc.edu/index.php/vl/article/view/5914)). This is an important principle: readable typography can improve both functional performance and aesthetic judgment.

### 2.3 Comprehension is not guaranteed by legibility

Text can be easy to see but difficult to understand. Comprehension depends on language, structure, prior knowledge, and content design as well as presentation.

Good typography supports comprehension by:

- Making headings meaningful and scannable
- Breaking long material into coherent chunks
- Showing relationships through consistent indentation and spacing
- Keeping labels adjacent to the content they describe
- Using emphasis sparingly
- Preserving expected reading order
- Distinguishing examples, quotations, warnings, and code without overwhelming the body text

Typography cannot repair unclear writing, but it can reveal or conceal the writing's structure.

---

## 3. What good typography looks and feels like

### At first glance

Good typography often looks:

- Deliberate rather than default
- Calm even when information-dense
- Clearly structured at a distance
- Balanced in visual weight
- Consistent without being monotonous
- Specific to the content rather than generically fashionable

When blurred or viewed while squinting, the page still shows a clear sequence of primary, secondary, and tertiary information.

### While reading

Good typography tends to feel:

- Easy to enter: the starting point is obvious.
- Easy to follow: line transitions and section boundaries are clear.
- Unobtrusive during sustained reading: the reader notices the content more than the mechanics.
- Appropriately paced: neither cramped nor disconnected.
- Trustworthy: details, symbols, numbers, and punctuation are accurate and consistent.
- Fitting: the voice of the form supports the voice of the words.

### Under interaction

In a digital product, good type also behaves well:

- Labels remain readable in all control states.
- Text can resize without clipping or overlap.
- Responsive layouts maintain comfortable measures.
- Loading fonts do not hide text for long periods or cause severe layout shifts.
- Focus, selection, errors, and links remain distinguishable.
- Localization and user-generated content do not destroy the hierarchy.

### The invisible-versus-expressive misconception

Typography is sometimes said to be good only when invisible. That is true for some reading contexts, not all typography. A novel, poster, banking form, game title, culture magazine, and product dashboard have different needs.

- **Reading typography** often minimizes interruption.
- **Display typography** may deliberately command attention or create atmosphere.
- **Interface typography** must communicate state and action efficiently.
- **Brand typography** must create recognition and a consistent voice.

Good typography can be quiet or loud. The criterion is whether its visibility serves the purpose.

---

## 4. Anatomy that matters in use

Understanding letter anatomy helps explain why two fonts at the same numerical size can behave very differently.

| Feature | Meaning | Practical consequence |
|---|---|---|
| **x-height** | Height of a typical lowercase `x` relative to the em | Larger x-height often appears bigger at the same CSS size and can aid small text, but may reduce capital/lowercase contrast |
| **cap height** | Height of flat-topped capitals | Affects apparent heading size and alignment with icons or rules |
| **ascender** | Portion rising above x-height, as in `h` | Helps distinguish word shapes; needs vertical room |
| **descender** | Portion falling below the baseline, as in `g` or `p` | Can collide or clip when leading is too tight |
| **counter** | Enclosed or partly enclosed interior space | Open counters remain clearer at small sizes and low contrast |
| **aperture** | Opening in letters such as `c`, `e`, or `s` | Wider apertures can reduce ambiguity under difficult conditions |
| **stroke contrast** | Difference between thick and thin strokes | High contrast can feel elegant but thin strokes may disappear at small sizes |
| **width** | Horizontal proportion of glyphs | Narrow faces increase density; wide faces need longer measures and more space |
| **stress** | Direction of thickening or visual axis in curved forms | Contributes to historical character and rhythm |
| **terminal** | End treatment of a stroke | Strongly affects personality and small-size clarity |
| **serif** | Finishing stroke at a stem or arm | Affects texture, spacing, and tone; is not by itself a readability guarantee |
| **overshoot** | Curves extending slightly beyond flat alignment lines | Makes round letters appear optically equal in height to flat letters |
| **sidebearing** | Built-in space beside a glyph | Establishes the font's default rhythm before tracking and kerning |

### Apparent size matters more than the number alone

Two fonts set at 16 px can look substantially different because of x-height, width, stroke, and internal metrics. USWDS explicitly normalizes supported typefaces because nominally identical sizes do not produce identical optical sizes ([USWDS: Using Type](https://designsystem.digital.gov/design-tokens/typesetting/overview/)).

Consequences:

- Do not choose body size from a design token without inspecting the actual face.
- Do not assume fallback fonts will occupy the same space.
- Compare typefaces at equal apparent size, not only equal numerical size.
- Re-evaluate line height and measure whenever the family changes.

---

## 5. Choosing a typeface

### 5.1 Start with the job, not the category

Before browsing fonts, define:

- What must be read: labels, articles, numbers, code, signage, or mixed content
- Typical and smallest rendered sizes
- Viewing distance and duration
- Expected readers and access needs
- Required languages and scripts
- Required weights, italics, widths, and symbols
- Technical platforms and file-size budget
- Brand attributes and category expectations
- Licensing, embedding, and distribution requirements

This turns “Which font looks good?” into a more useful question: “Which family performs and communicates correctly across the required situations?”

### 5.2 Evaluate text and display faces differently

**Text faces** are intended for sustained or small-size reading. Look for:

- Durable strokes
- Open counters
- Clear punctuation and diacritics
- Comfortable spacing
- Distinctive but conventional character skeletons
- A true italic if extended emphasis or editorial use requires it
- Enough weights without fragile extremes

**Display faces** are intended for large, short text. They can support:

- Finer details and higher stroke contrast
- Tighter default spacing
- More extreme proportions
- Greater personality
- Unconventional shapes that would be tiring in body text

Do not shrink a display cut into body copy and expect it to behave like a text face. If a family offers optical sizes or separate caption/text/display cuts, use them.

### 5.3 Test character differentiation

Inspect strings such as:

```text
Il1  O0  rn m  cl d  vv w
8B  5S  2Z  6G  9g  1lI
{[(  )]}  +−×÷  $€£¥  %‰
á à â ä  İ ı  ø œ  ß  ñ  ç
```

Also test domain-specific content:

- Dates and times
- Decimal and thousands separators
- Long account numbers
- Chemical or mathematical notation
- Legal references
- Product SKUs
- Code and terminal output
- Mixed-case identifiers

A font that looks beautiful in “Hamburgefontsiv” may fail in the actual product vocabulary.

### 5.4 Inspect family completeness

A useful family may need:

- Regular, medium or semibold, bold
- True italics rather than mechanically slanted romans
- Tabular and proportional numerals
- Oldstyle and lining numerals for editorial work
- Fractions, superscripts, and scientific symbols
- Small caps designed as small caps rather than scaled capitals
- Multiple widths for dense data or responsive use
- Language-specific forms and sufficient diacritics
- Optical sizes
- Variable axes where they solve a real requirement

More styles are not inherently better. A coherent family with three excellent, clearly differentiated weights can outperform a family with eighteen poorly spaced or barely distinguishable options.

### 5.5 Serif versus sans serif is not the main decision

The belief that serif is universally better for print and sans serif universally better for screens is too simple. A controlled study varying serif size found no meaningful continuous-reading-speed difference attributable to serifs alone; any small threshold benefit was largely associated with spacing ([Arditi & Cho, 2005](https://pmc.ncbi.nlm.nih.gov/articles/PMC4612630/)). Other studies likewise report mixed or context-specific differences.

Choose based on the quality and characteristics of the specific face:

- Character clarity
- Spacing
- Intended optical size
- Weight
- Screen or print rendering
- Familiarity
- Language
- Tone

The category label predicts personality and texture more reliably than it predicts reading performance.

### 5.6 Familiarity affects preference and adaptation

Readers may prefer familiar-looking forms, but familiarity is not identical to performance. In one study, brief exposure affected reading speed while unusual letter shapes did not produce the expected lasting performance penalty; readers nevertheless judged unfamiliar forms more critically ([Beier & Larson, 2013](https://www.microsoft.com/en-us/research/uploads/prod/2021/06/Beier-Larson-2013-how-does-typeface-familiarity-affect-reading-performance-and-reader-preference.pdf)).

Practical interpretation:

- Use conventional forms for high-stakes, fast, or one-time reading.
- Allow more distinctiveness where readers have time to adapt.
- Test preference and reading performance separately.
- Do not make critical labels an experiment in character recognition.

---

## 6. Setting body text

Body typography is a coordinated system. Change one variable and reassess the others.

### 6.1 Font size

For common desktop and mobile web reading, **16–18 CSS pixels** is a useful starting range for body text, not a universal minimum or optimum. Smaller text may work in dense professional tools; larger text may be appropriate for broad audiences, long reading, kiosks, living-room displays, or low-vision contexts.

Judge size by:

- Apparent x-height and stroke weight
- Viewing distance
- Device pixel density and rendering
- Text duration and importance
- User-controlled scale settings
- Contrast and environmental conditions

Research generally supports the value of sufficiently large text, but optimal results vary by reader and setting. A large-scale online experiment on font size and line spacing found benefits from larger text and highlighted interactions between typographic variables rather than a single universal setting ([Rello et al., 2016](https://www.changedyslexia.org/publications/pdfs/2016-CHI-Make%20It%20Big%20The%20Effect%20of%20Font%20Size.pdf)).

### 6.2 Line length, or measure

Line length affects horizontal eye movement and the return sweep to the next line.

Useful starting ranges for Latin-script body text:

- **45–75 characters per line** for sustained reading
- Around **55–70 characters** as a common center range
- **30–50 characters** for compact supporting text or narrow columns
- Longer measures only when content, size, leading, and task support them

Count spaces and punctuation. CSS `ch` units can provide an approximate control, but `1ch` is based on the width of the `0` glyph and is not a perfect character-count measurement for proportional type.

Lines that are too long can make it difficult to locate the next line and can turn paragraphs into undifferentiated bands. Lines that are too short force frequent return sweeps, create ragged shapes, and can fragment phrases. Material's typography guidance also treats line length and leading as interdependent rather than independent settings ([Material Design Typography](https://m1.material.io/style/typography.html)).

### 6.3 Line height, or leading

Line height separates baselines and creates vertical rhythm.

Useful starting ranges:

- **1.45–1.65** for sustained body text
- **1.3–1.5** for short UI descriptions or compact text
- **1.0–1.25** for large headings, depending on ascenders, descenders, and wrapping
- More room for small type, long lines, tall scripts, or faces with large x-height
- Less room may work for short measures or type with naturally generous metrics

USWDS recommends more generous line height for longer reading and explains that line length and leading need to be assessed together ([USWDS Typography](https://designsystem.digital.gov/components/typography/)).

Leading is too tight when:

- Ascenders and descenders visually collide
- The reader jumps between neighboring lines
- Dense paragraphs become dark rectangles
- Diacritics clip or touch

Leading is too loose when:

- Each line appears like an isolated object
- The eye loses the horizontal sequence
- Paragraphs look striped or fragmented
- The line spacing competes with paragraph spacing

The best leading is often not noticed directly. It makes the text block feel coherent rather than dense or scattered.

### 6.4 Paragraph spacing and indentation

Paragraphs need a clear but economical boundary. Common approaches are:

- Space between paragraphs with no first-line indent, common on screens
- First-line indent with little or no extra paragraph space, common in continuous print
- A deliberate hybrid in editorial settings

Avoid applying both a large first-line indent and large paragraph gap without a specific compositional reason. Do not indent the first paragraph after a heading in traditional editorial settings unless the system intentionally does so.

Spacing above a heading should generally be greater than spacing below it. This visually attaches the heading to the content it introduces.

### 6.5 Tracking, or letter spacing

Tracking changes the overall space across a range of characters.

- Start with the type designer's default spacing for body text.
- Large display text may benefit from slight tightening because spaces scale visibly.
- Small uppercase labels often need additional tracking.
- Very small type may benefit from looser spacing when the font is not optically sized.
- Avoid negative tracking in body text; it can close counters and merge characters.
- Do not use tracking to force text into a container when a width, size, or copy change is more appropriate.

Spacing needs differ by script. Never apply Latin-specific uppercase tracking rules globally.

### 6.6 Kerning

Kerning adjusts individual character pairs to create even optical space. Good fonts include kerning data; professional layout engines usually apply it automatically.

Display text deserves manual inspection because large size exposes uneven pairs. Check names, logos, headlines, dates, and all-caps words. Correct optically, not by making every measured gap identical. Round and diagonal forms need different physical spacing to appear equal.

On the web, `font-kerning: normal` is generally appropriate. Avoid manually placing spaces between letters to simulate tracking; it harms selection, search, pronunciation, and wrapping.

### 6.7 Word spacing

Word spacing should make word boundaries obvious without turning sentences into separate islands. Problems often arise from:

- Full justification in narrow measures
- Manual nonbreaking spaces
- Poor font spacing
- Excessive tracking
- Uncontrolled line breaking

Large, inconsistent spaces create visible vertical “rivers” through text. If high-quality justification, hyphenation, and language dictionaries are unavailable, ragged-right alignment is usually safer for body copy.

### 6.8 Alignment and justification

**Flush left, ragged right** is the most robust choice for left-to-right digital body text. It preserves consistent word spacing and a stable starting edge.

**Justified text** can create a formal, book-like texture but needs:

- Adequate measure
- High-quality line-breaking algorithms
- Language-aware hyphenation
- Control of word, letter, and sometimes glyph spacing
- Manual review for rivers and extreme lines

**Centered text** works for short, self-contained material such as invitations, quotations, or brief headings. Long centered paragraphs produce an unstable starting edge.

**Flush right** can support small metadata or intentional contrast but is usually poor for sustained left-to-right reading.

Alignment should follow the writing direction. Right-to-left and bidirectional content need true logical layout, not visual mirroring alone.

### 6.9 Hyphenation and line breaks

Hyphenation can improve justified text and reduce very ragged edges, but incorrect language settings create errors. Use the document language and a trustworthy dictionary.

For display text:

- Break at meaningful phrase boundaries.
- Avoid leaving short function words isolated where the language makes that awkward.
- Balance shape without changing the meaning.
- Review every responsive breakpoint; automatic wrapping can turn a good headline into a weak one.

Avoid relying on hard-coded `<br>` elements when the same headline must work across many widths, unless breakpoint-specific art direction is implemented.

### 6.10 Widows, orphans, and runts

Terminology varies, but the problems are stable:

- A single short word stranded on the last line of a paragraph
- One line of a paragraph separated at a column or page boundary
- A heading abandoned at the bottom of a page

These interrupt rhythm and can look careless. Fix them through measured copy edits, width changes, or pagination controls—not extreme tracking.

---

## 7. Building typographic hierarchy

Hierarchy allows readers to understand the document before reading it closely.

### 7.1 Define roles before values

Start with semantic roles such as:

- Display or campaign statement
- Page title
- Section heading
- Subheading
- Lead or deck
- Body
- UI label
- Button text
- Caption
- Metadata
- Code or data

Then assign each role a combination of:

- Family
- Size
- Weight
- Width
- Line height
- Letter spacing
- Color
- Case
- Spacing before and after

Role names scale better than names such as “32 Bold Blue.” The role explains intent; the value can change by theme, viewport, or platform.

### 7.2 Use several variables, but not all at once

Hierarchy can come from:

- Size
- Weight
- Typeface
- Width
- Case
- Color or contrast
- Position and indentation
- Space before and after

Size is powerful but not always the most elegant lever. A compact interface can create hierarchy primarily through weight, spacing, and position. Editorial work may use typeface contrast and scale.

Adjacent levels must be visibly distinct. Tiny, barely perceptible size differences look accidental. At the same time, using maximum contrast for every level creates a fragmented page.

### 7.3 Keep the scale limited and purpose-driven

A type scale is a controlled palette, not proof of mathematical harmony. Ratios such as 1.125, 1.2, 1.25, or 1.333 can generate starting values, but content roles, apparent size, and viewport matter more than loyalty to a ratio.

For many products, **5–8 primary roles** are enough. Additional component-specific variants may be necessary, but each should have a distinct job.

An illustrative web starting system might be:

| Role | Size | Line height | Weight | Typical use |
|---|---:|---:|---:|---|
| Display | `clamp(2.75rem, 6vw, 5.5rem)` | 0.95–1.05 | 600–750 | Short expressive statements |
| Page title | `clamp(2rem, 4vw, 3.5rem)` | 1.0–1.12 | 600–750 | Main page identity |
| Section title | `1.5–2rem` | 1.1–1.25 | 600–700 | Major grouping |
| Subheading | `1.125–1.375rem` | 1.2–1.35 | 550–700 | Local structure |
| Lead | `1.125–1.375rem` | 1.45–1.6 | 400–500 | Introductory context |
| Body | `1–1.125rem` | 1.45–1.65 | 400–500 | Sustained reading |
| Label | `0.875–1rem` | 1.2–1.4 | 500–650 | Controls and metadata |
| Caption | `0.8125–0.9375rem` | 1.35–1.5 | 400–500 | Supporting information |

These are deliberately broad ranges. The chosen typeface, content, audience, and density may justify different values.

### 7.4 Semantic hierarchy and visual hierarchy are related but different

HTML heading levels represent document structure. Visual size represents contextual emphasis. Usually they should align, but a component may need a visually small heading at a valid semantic level.

Use semantic elements for structure and classes or tokens for appearance. GOV.UK similarly separates heading tags from visual heading classes while recommending a consistent content hierarchy ([GOV.UK Headings](https://design-system.service.gov.uk/styles/headings/)).

### 7.5 Spacing completes the hierarchy

Typography is not hierarchical if headings are sized correctly but spaced incorrectly.

- More space above a heading connects it to the new section boundary.
- Less space below connects it to its content.
- Repeated spacing creates predictable rhythm.
- Indentation should signify a real relationship, not just decoration.
- Lists need enough separation to show items without dissolving the group.

The reader perceives spacing before reading labels. It is one of the strongest structural signals available.

---

## 8. Typography as voice and brand

### 8.1 Form has associations

Type properties often produce broad associations:

| Property | Possible associations | Important caution |
|---|---|---|
| High stroke contrast | Editorial, refined, luxurious, historical | Thin strokes can fail at small sizes or low contrast |
| Monolinear sans | Modern, direct, neutral, technical | Can feel generic without distinctive proportion or art direction |
| Humanist sans | Open, approachable, legible, civic | Meaning changes with spacing, weight, and context |
| Geometric construction | Rational, designed, contemporary, clean | Repeated circular forms can reduce small-size differentiation |
| Condensed width | Urgent, efficient, editorial, industrial | Dense body setting can tire readers |
| Rounded terminals | Friendly, soft, informal, digital | Multiple rounded brand cues together can feel childish |
| Monospacing | Technical, coded, archival, utilitarian | Lower information density and repetitive rhythm can hinder prose |
| Black or ultra weight | Loud, confident, youthful, poster-like | Counters may close and hierarchy may become aggressive |
| Italic or script | Emphasis, motion, intimacy, handwriting | Extended passages and small UI labels can become hard to read |

These are culturally learned tendencies, not universal meanings. Research on typeface personality finds recurring associations, but product context can shift perception ([Zheng, 2024](https://doi.org/10.17918/00010492)).

### 8.2 Congruence matters

Typography feels convincing when its meaning aligns with the other elements. Research on shape-typeface congruence found more positive credibility, aesthetics, and price expectations when product shape and typeface communicated compatible meanings ([van Rompay & Pruyn, 2011](https://doi.org/10.1111/J.1540-5885.2011.00828.X)).

Congruence does not mean every element must share the same personality. Productive contrast is possible. It means the contrast should appear intentional and support a coherent concept.

### 8.3 Distinction should be placed selectively

For a robust brand system:

- Use the most expressive cut for display and recognition.
- Use a durable text cut for reading and UI.
- Preserve one or two ownable typographic behaviors: a headline width, case pattern, alignment, spacing style, or distinctive detail.
- Avoid turning every line into a logo.
- Document when the expressive voice should become quieter, such as legal, error, safety, or dense data contexts.

---

## 9. Pairing typefaces

One family is often enough. A superfamily with text, display, serif, sans, width, or optical variants can create contrast without losing coherence.

Use a second family when it provides a clear role:

- Editorial contrast between headlines and reading text
- Brand voice that the body family cannot provide
- Specialized code, data, or mathematical support
- Language coverage absent from the primary family

### Pair by relationship, not category label

Successful pairs often have:

- **Shared skeleton, different surface:** similar proportions with serif/sans contrast
- **Shared era or construction:** compatible historical logic
- **Contrasting personality, compatible metrics:** display energy plus quiet body text
- **Shared x-height or color:** different styles with comparable apparent mass

Inspect:

- x-height and cap-height relationship
- width and stroke-weight balance
- terminal and curve compatibility
- numeral style
- italic behavior
- punctuation
- language coverage

### Common pairing failures

- Two families are so similar that the difference appears accidental.
- Two expressive faces compete for attention.
- Headline and body faces have incompatible color or proportions.
- Fallback scripts feel unrelated to the Latin design.
- A pair works in a specimen but not with real product content.

Limit the palette. Two families plus purposeful mono or data support is usually enough for a complex product.

---

## 10. Interface typography

### 10.1 Labels and controls

UI text is short but demanding. It must remain legible during scanning, interaction, and changing states.

- Prefer clear sentence case for most labels.
- Use concise verbs for actions.
- Avoid very light weights at small sizes.
- Keep placeholder text secondary but still readable; do not use it as the only label.
- Allow labels to wrap when the alternative is truncating essential meaning.
- Keep control height flexible enough for larger text and translated labels.
- Ensure disabled styling remains readable; reduce emphasis without erasing information.

All-caps labels can create a crisp texture for short categories, but they reduce word-shape variation and require tracking. Avoid them for long labels, paragraphs, or languages without the same casing conventions.

### 10.2 Links

Links need a visible affordance that does not depend solely on subtle color difference. Underlines remain the clearest convention within running text.

- Preserve underline clearance around descenders when supported.
- Distinguish visited links when orientation benefits.
- Design hover, focus, active, and visited states.
- Do not remove underlines from body links unless another equally strong cue remains.

### 10.3 Forms and validation

Good form typography preserves relationships:

- Label before or adjacent to the field
- Optional/required status communicated consistently
- Help text visibly subordinate but readable
- Error message close to the source and specific
- User input given stronger contrast than placeholder or hint text
- Units and format examples clearly separated from the entered value

Do not communicate error only by making text red. Combine color with message, icon, or structural cue.

### 10.4 Tables and numeric data

Data typography has special requirements:

- Use **tabular numerals** when values must align vertically.
- Use proportional numerals in prose when alignment is irrelevant.
- Right-align comparable numeric columns; align decimals when precision comparison matters.
- Left-align text columns in the natural reading direction.
- Keep units visible and consistent.
- Use weight and color sparingly so outliers and status remain salient.
- Test minus signs, en dashes, decimal separators, percentages, and currency symbols.

Use the true minus sign `−` where appropriate, not a hyphen `-`; their width and vertical position differ. Use nonbreaking spaces or layout logic to keep a number attached to its unit when the language convention requires it.

### 10.5 Code and technical text

Monospaced type supports alignment and character-level comparison, but not every mono face is equally legible.

Check:

- `0/O`, `1/l/I`, braces, brackets, and punctuation
- Operators and arrows
- Distinct quotes and backticks
- Programming ligatures, with a user preference to disable when necessary
- Line length, indentation, and horizontal scrolling behavior
- Weight and syntax-color contrast

Do not set explanatory prose in mono merely because the product is technical. Use mono where character identity or alignment is meaningful.

### 10.6 Dense professional tools

Small type is sometimes justified by information density, but density must be earned.

- Use a face designed for UI or caption sizes.
- Preserve adequate weight and contrast.
- Offer density or text-size settings when workflows vary.
- Avoid relying on tiny gray text for critical metadata.
- Use grouping, alignment, and stable positions so the user does not reread every label.
- Test older readers and lower-quality displays, not only expert designers on high-density monitors.

---

## 11. Responsive typography

Responsive typography is not simply shrinking every size at a breakpoint.

### Recompose by role

On smaller screens:

- Display sizes may reduce substantially.
- Body text often should not shrink much.
- Measures become naturally shorter.
- Headline line breaks need new art direction.
- Metadata may stack rather than compress.
- Tables may need a different information layout.

On larger screens:

- Do not allow body copy to stretch across the viewport.
- Increase margins or create columns.
- Adjust line height if measure changes materially.
- Use scale to establish composition, not merely because space exists.

Fluid sizing with CSS `clamp()` can interpolate smoothly:

```css
:root {
  --text-body: 1rem;
  --text-lead: clamp(1.125rem, 1rem + 0.45vw, 1.375rem);
  --text-title: clamp(2rem, 1.4rem + 3vw, 4.5rem);
}
```

Fluid values still need minimum and maximum limits. Test widths between named breakpoints; interpolation can create awkward wrapping even when endpoints look good.

### Design for resizing and reflow

WCAG 2.2 Level AA requires text to resize to **200% without loss of content or functionality** ([W3C: Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)). Responsive containers should grow, wrap, or recompose rather than clip text.

Avoid:

- Fixed-height text containers
- Vertically centered labels that clip when wrapping
- Icons positioned from a single-line text assumption
- Truncation without a way to reveal essential content
- Media queries that counteract user zoom by reducing font size

---

## 12. Multilingual and multiscript typography

A Latin-only specimen is not sufficient for a global product.

### 12.1 Glyph coverage is the beginning

A font may technically contain a character but render a language poorly. Check:

- Correct diacritics and mark placement
- Language-specific glyph substitutions
- Punctuation and quotation marks
- Currency and numeric formatting
- Line-breaking rules
- Hyphenation dictionaries
- Capitalization behavior
- Font fallback consistency

### 12.2 Scripts have different spatial needs

CJK glyphs use the em square differently from Latin. Arabic joins and changes contextual shape. South Asian and Southeast Asian scripts may need more vertical room for marks. Material's guidance explicitly recommends different line-height treatment for dense and tall scripts to avoid collision and clipping ([Material Design Typography](https://m1.material.io/style/typography.html)).

Do not carry Latin assumptions about tracking, all caps, word spacing, or line length into other scripts.

### 12.3 Fallback is part of art direction

When the primary family lacks a script:

- Match apparent size, weight, width, and overall color.
- Test mixed-script lines and names.
- Adjust language-specific line height if needed.
- Prefer families designed to coordinate across scripts.
- Expect font metrics to change layout and wrapping.

### 12.4 Localization stress testing

Test:

- German and Finnish compounds
- French punctuation spacing
- Arabic and Hebrew directionality
- Hindi, Thai, Vietnamese, and stacked marks
- Chinese, Japanese, and Korean density and line breaking
- Languages with no casing
- Mixed Latin/numeric/product strings
- 30–100% text expansion in navigation and controls

Use native-language reviewers. Visual inspection without language knowledge misses incorrect breaks and culturally inappropriate conventions.

---

## 13. Accessibility

### 13.1 Contrast

WCAG 2.2 Level AA requires a contrast ratio of at least:

- **4.5:1** for normal text
- **3:1** for large text, defined in the standard by size and weight

([WCAG 2.2, Contrast Minimum](https://www.w3.org/TR/WCAG22/#contrast-minimum))

Contrast compliance is a floor. Thin strokes, glare, transparent overlays, gradients, background images, and low-quality displays can make technically conforming text uncomfortable. Test rendered text in realistic conditions.

Avoid using reduced opacity as a universal hierarchy tool. It can make secondary text needlessly difficult to read. Create semantic colors with verified contrast.

### 13.2 Text spacing override

WCAG does **not** require every design to use its text-spacing test values by default. It requires content to remain functional when users override spacing to at least:

- Line height: `1.5 ×` font size
- Paragraph spacing: `2 ×` font size
- Letter spacing: `0.12 ×` font size
- Word spacing: `0.16 ×` font size

([W3C: Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing))

This distinction matters. The values are a resilience test, not a universal typesetting prescription.

### 13.3 User control and preferences

Support:

- Browser zoom and text enlargement
- Platform text-size settings such as Dynamic Type or scalable pixels
- Reflow and wrapping
- User-selected fonts or reading themes when appropriate
- High contrast and forced-color modes
- Reduced transparency where the platform provides it

Apple recommends supporting platform text styles and Dynamic Type so text responds to user size preferences ([Apple HIG: Typography](https://developer.apple.com/design/human-interface-guidelines/typography)).

### 13.4 Dyslexia and specialized fonts

There is no strong evidence that a single “dyslexia font” improves reading speed or accuracy for all dyslexic readers. A systematic review found small effects and no significant general advantage over conventional typefaces, while noting limitations in the evidence and individual subjective preferences ([Rumaisa, 2023](https://ora.ox.ac.uk/objects/uuid%3A9a02d139-03d4-4543-b3d0-141595bfd39a)).

Better practice:

- Use clear, familiar forms and adequate apparent size.
- Avoid dense, fully justified text.
- Preserve generous but coherent spacing.
- Write clearly and structure content well.
- Allow reader customization where sustained reading is central.
- Test with actual dyslexic readers rather than claiming universal benefit.

The accessibility of a page cannot be solved by swapping one font.

### 13.5 Aging and low vision

Older readers can be more sensitive to differences in stroke weight, width, spacing, and size ([Beier et al., 2021](https://journals.uc.edu/index.php/vl/article/view/4654)). Use durable weights, larger type, strong contrast, and controls that preserve user scaling.

---

## 14. Variable fonts and optical sizing

### 14.1 What a variable font is

A variable font stores a design space in one font resource and can interpolate instances along axes. Registered axes include:

- `wght` — weight
- `wdth` — width
- `slnt` — slant
- `ital` — italic state
- `opsz` — optical size

Fonts may also contain custom axes. The OpenType specification explains that axes can vary outlines, spacing, kerning, positioning, and other font data ([OpenType Font Variations Overview](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)).

### 14.2 Optical size

Optical sizing changes a type design to suit its rendered size. Small-size cuts often have:

- Stronger strokes
- Larger counters and apertures
- More generous spacing
- Reduced fine detail
- Adjusted proportions

Display cuts can use finer strokes, tighter spacing, and more detail. This is not merely scaling. The OpenType `opsz` axis is specifically intended to adapt glyph proportions, stem weights, details, and width to viewing size ([OpenType `opsz` specification](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_opsz)).

On the web, optical sizing is generally enabled automatically for supporting fonts:

```css
html {
  font-optical-sizing: auto;
}
```

([MDN: `font-optical-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-optical-sizing))

### 14.3 Use axes semantically

Do not generate dozens of arbitrary intermediate weights because the technology allows it. Define named role values:

```css
:root {
  --weight-body: 420;
  --weight-label: 560;
  --weight-heading: 680;
}
```

Check that each chosen value renders clearly across operating systems and that synthetic bold or italic is not substituted.

### 14.4 Variable fonts and performance

A variable font can replace several static files, but it is not automatically smaller than the exact subset a project needs. Compare real compressed file sizes, character sets, and requested axes. Subset carefully without removing required languages or symbols.

---

## 15. Web-font implementation and performance

Typography does not feel good if text is invisible while loading or jumps after the font arrives.

Web fonts can affect:

- First Contentful Paint when rendering waits
- Largest Contentful Paint when headline fonts are delayed
- Cumulative Layout Shift when fallback and web-font metrics differ

Google's web-font performance guidance documents both delayed text rendering and layout shifts as core concerns ([web.dev: Font Best Practices](https://web.dev/articles/font-best-practices)).

### 15.1 A resilient `@font-face`

```css
@font-face {
  font-family: "Project Sans";
  src: url("/fonts/project-sans-latin.woff2") format("woff2");
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
}

html {
  font-family: "Project Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  font-synthesis: none;
  font-optical-sizing: auto;
  text-rendering: optimizeLegibility;
}
```

Notes:

- `font-display: swap` prioritizes visible fallback text, but fallback metric differences can shift layout.
- `font-synthesis: none` prevents faux bold or italic, so make sure required real styles load.
- `text-rendering` behavior varies and should not be relied on as a primary quality mechanism.
- Use WOFF2 for modern web delivery.

### 15.2 Match fallback metrics

Choose fallback fonts with similar x-height, width, and metrics. Where appropriate, CSS font metric overrides such as `size-adjust`, `ascent-override`, `descent-override`, and `line-gap-override` can reduce layout shift.

Test the fallback state deliberately. It is part of the user experience, not an implementation accident.

### 15.3 Load only what is used

- Prefer a small number of families and weights.
- Subset by script when the product can route language files safely.
- Preload only truly critical font resources.
- Cache font files with versioned URLs.
- Avoid loading a display face on pages that never use it.
- Verify licenses allow web embedding and subsetting.

### 15.4 Preserve selectable, adaptable text

Use real text rather than images of text whenever possible. Real text can be selected, searched, translated, resized, recolored, and interpreted by assistive technology. WCAG also favors text over images of text for adaptability ([W3C: Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text)).

---

## 16. A practical CSS foundation

This example is a starting architecture, not a universal scale:

```css
:root {
  --font-sans: "Project Sans", system-ui, sans-serif;
  --font-serif: "Project Text", Georgia, serif;
  --font-mono: "Project Mono", ui-monospace, monospace;

  --text-xs: 0.8125rem;
  --text-sm: 0.9375rem;
  --text-md: 1rem;
  --text-lg: 1.1875rem;
  --text-xl: clamp(1.5rem, 1.25rem + 1vw, 2rem);
  --text-2xl: clamp(2rem, 1.4rem + 2.8vw, 4rem);

  --leading-tight: 1.08;
  --leading-heading: 1.2;
  --leading-body: 1.55;

  --measure-reading: 66ch;
  --measure-compact: 44ch;
}

body {
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: 400;
  line-height: var(--leading-body);
}

h1,
h2,
h3 {
  font-weight: 680;
  text-wrap: balance;
}

h1 {
  max-width: 18ch;
  font-size: var(--text-2xl);
  line-height: var(--leading-tight);
  letter-spacing: -0.025em;
}

.prose {
  max-width: var(--measure-reading);
}

.prose p + p {
  margin-block-start: 1em;
}

.prose h2 {
  margin-block: 2.5em 0.6em;
}

.data {
  font-variant-numeric: tabular-nums lining-nums;
}
```

Implementation cautions:

- Negative heading tracking is face-specific; remove it if the font is already tightly spaced.
- `text-wrap: balance` is useful for short headings, not long body text.
- Never set a fixed height on text simply because the nominal line count is known.
- Confirm tokens in every theme and state.

---

## 17. Print-specific considerations

Many principles transfer, but print introduces different constraints:

- Physical size is more stable than screen size, but lighting and paper vary.
- Ink spread can close counters and thicken fine details.
- Coated and uncoated papers reproduce type differently.
- Reversed type on dark ink often needs greater weight and size.
- Long documents require pagination, running heads, folios, footnotes, and widows/orphans control.
- Justification and hyphenation can be much more refined in professional page-layout software.
- Proof at final physical size; zoomed screen review does not reveal true text color or stroke durability.

For print body text, point size alone is still insufficient. A 10-point face with a large x-height can appear larger than another at 11 points. Paper, measure, leading, audience, and printing process must be judged together.

---

## 18. A typography workflow

### Step 1: Inventory content

Collect real examples of:

- Long and short headlines
- Body paragraphs
- Labels and buttons
- Errors and warnings
- Numbers, currency, dates, and tables
- User-generated content
- Multiple languages
- Empty and loading states

### Step 2: Define roles and constraints

Specify purpose, reading distance, platform, languages, accessibility requirements, density, and brand voice.

### Step 3: Select candidate families

Evaluate candidates with the same real content at equal apparent sizes. Compare complete paragraphs, not only specimen words.

### Step 4: Establish the body setting first

Choose body family, size, measure, and leading as one system. This creates the base texture and rhythm.

### Step 5: Build hierarchy around content roles

Add headings, labels, metadata, data, and display roles. Use spacing as part of every role definition.

### Step 6: Add expressive behavior

Choose where personality is strongest and where it becomes quiet. Test congruence with imagery, shape, color, and voice.

### Step 7: Test technically

- Real devices and operating systems
- Font-loading fallback and slow network
- Zoom and text enlargement
- High contrast and forced colors
- Localization and mixed scripts
- Print output if relevant

### Step 8: Test with readers

Measure separately:

- Character or word recognition where critical
- Reading speed
- Comprehension
- Search or scan performance
- Error rate
- Preference
- Perceived tone
- Comfort over time

Do not treat preference as a proxy for performance or vice versa.

### Step 9: Document and govern

Record:

- Role tokens
- Allowed families, weights, and features
- Line-length and spacing guidance
- Responsive behavior
- Numeral and data conventions
- Language fallbacks
- Examples and anti-examples

---

## 19. Typography critique rubric

Score each category from 1–5 and record evidence.

### Legibility

- Are small characters clear on target devices?
- Are confusable letters, numbers, and symbols distinct?
- Do thin strokes survive actual contrast and rendering?
- Are punctuation and diacritics clear?
- Does text remain legible in every component state?

### Readability

- Is the body size comfortable at the expected distance?
- Is line length appropriate?
- Does leading keep lines connected without collision?
- Are paragraph boundaries clear?
- Can the reader maintain place across lines and sections?

### Hierarchy

- Is the starting point obvious?
- Can the document structure be understood before close reading?
- Are adjacent levels clearly distinct?
- Do spacing and alignment reinforce the hierarchy?
- Does visual hierarchy support semantic structure?

### Voice and fit

- Does the typography suit the subject and audience?
- Does it convey the intended attributes?
- Is the expressive behavior memorable but controlled?
- Does it work with the image, color, and shape language?
- Does it avoid unwanted associations?

### Coherence and craft

- Are styles role-based and repeated consistently?
- Are kerning, line breaks, and alignment optically resolved?
- Are numeral, punctuation, and capitalization conventions consistent?
- Are there unnecessary fonts, sizes, or weights?
- Do fallback and loading states feel intentional?

### Accessibility and resilience

- Does text pass contrast requirements?
- Can it resize to 200% without loss?
- Can users override spacing without clipping or overlap?
- Does it work with high contrast, zoom, and platform text settings?
- Are language and script requirements truly supported?

### Technical quality

- Are file sizes and font requests appropriate?
- Are real styles loaded instead of synthesized?
- Is layout shift controlled?
- Are font licenses correct for distribution?
- Is selectable text used instead of images of text?

---

## 20. Common problems and what they usually mean

| Symptom | Likely cause | Better response |
|---|---|---|
| Body copy feels tiring | Small apparent size, long measure, tight leading, weak contrast, or difficult content | Adjust the setting as a system; do not only enlarge the font |
| Page looks like an undifferentiated gray block | Weak hierarchy and paragraph rhythm | Strengthen headings, grouping, and section spacing |
| Page feels chaotic | Too many families, sizes, weights, colors, or alignments | Reduce to role-based styles and repeat them consistently |
| Design feels generic | Default family with no deliberate composition or distinctive behavior | Add one concept-driven typographic voice or layout move |
| Design feels amateur | Arbitrary centering, poor line breaks, inconsistent spacing, or faux styles | Fix alignment, rhythm, real font styles, and optical details |
| Headlines feel weak | Wrong display cut, insufficient contrast, or poor line breaks | Use stronger role contrast and art-direct wrapping |
| Headlines feel shouty | Excessive size, weight, caps, and tight spacing used together | Keep one dominant signal and relax the others |
| Small text looks muddy | Thin stroke, closed counters, low contrast, or display face used too small | Use a text/caption cut, stronger weight, or optical sizing |
| Text feels childish | Rounded face combined with bright color, large size, and casual copy | Keep only the cues required for friendliness |
| Text feels cold | Neutral construction without humanist detail, pacing, or voice | Add a warmer companion, spacing rhythm, or editorial contrast |
| Numbers do not align | Proportional numerals in comparison columns | Enable tabular numerals |
| Font swap moves the page | Fallback metrics differ from web font | Match fallback and use metric overrides |
| Translation breaks controls | Fixed widths/heights and English-only testing | Allow wrap/reflow and stress-test localization |
| Dark mode text blooms | Excessive bright contrast, thin strokes, or large white areas | Reduce glare while maintaining compliance; test actual displays |
| Everything is bold | Weight is being used as the only hierarchy signal | Use size, spacing, position, and color roles as well |

---

## 21. Common typography myths

### “Serif is always easier to read”

Evidence does not support a universal serif advantage. Specific design, spacing, size, rendering, and context matter more.

### “Sans serif is always better on screens”

Modern displays render many serif faces well. Choose a screen-suitable face and setting, not a category slogan.

### “16 px is the accessible font size”

WCAG does not prescribe a universal 16 px minimum. Sixteen pixels is a useful common starting point. Apparent size, scaling, contrast, content, and context still need evaluation.

### “WCAG requires 1.5 line height everywhere”

WCAG 1.4.12 requires a layout to survive a user override to 1.5 line height. It does not require every authored text style to use 1.5 by default.

### “A mathematical scale creates harmony”

A scale generates values. It cannot judge apparent size, role clarity, language, line breaks, or composition. Use ratios as scaffolding, then correct optically.

### “More font weights create more hierarchy”

Too many near-identical weights weaken distinction. Use the smallest set that communicates real roles.

### “A dyslexia font makes a design accessible”

No single font solves dyslexia or accessibility. Clear structure, adequate size and spacing, customization, writing, and user testing matter more.

### “Typography is finished when the mockup looks good”

Typography must survive real rendering, font loading, localization, zoom, text overrides, actual data, and user content.

---

## 22. Evidence-based conclusions

1. **Typography is relational.** Typeface, size, spacing, measure, contrast, content, and context interact.
2. **Legibility and readability are different.** Clear characters do not guarantee comfortable paragraphs.
3. **Apparent size matters more than nominal size.** x-height, width, weight, and metrics change perceived scale.
4. **There is no universally best typeface.** Reader, task, language, and medium influence results.
5. **Serif versus sans serif is an inadequate readability rule.** Judge the specific design and setting.
6. **Hierarchy is created by space and position as much as size and weight.**
7. **Typeface personality affects meaning.** Visual form can influence tone, brand association, credibility, and memory.
8. **Congruence improves coherence.** Type feels more convincing when it supports the message and other visual elements.
9. **Accessibility requires adaptability.** Contrast, resizing, spacing overrides, reflow, and language support are core typographic qualities.
10. **Digital typography includes performance.** Invisible text and disruptive font swaps are typographic failures.
11. **Optical sizing is functional, not decorative.** Small and large text benefit from different character construction.
12. **Testing must separate preference from performance.** People may like one setting but read another more successfully.

---

## 23. Research limitations and cautions

- Typography studies use different reading tasks, languages, displays, sample sizes, and performance measures, making direct generalization difficult.
- Laboratory reading speed does not capture long-term comfort, comprehension, preference, or brand effect completely.
- Many commonly repeated numbers originate in professional practice rather than one definitive experiment.
- Readers adapt to typefaces, and individual performance differences can be substantial.
- Latin typography is overrepresented in design guidance. Other scripts require language-specific expertise.
- Platform documentation reflects system goals and conventions, not context-free laws.
- Accessibility conformance is a measurable baseline, not proof of a pleasant reading experience.

Use the ranges in this guide to create candidates. Test the candidates with real content, devices, environments, languages, and readers.

---

## Selected sources and further reading

### Legibility and reading research

- Arditi, A., & Cho, J. (2005). [Serifs and Font Legibility](https://pmc.ncbi.nlm.nih.gov/articles/PMC4612630/). *Vision Research, 45*(23), 2926–2933.
- Beier, S., & Larson, K. (2013). [How Does Typeface Familiarity Affect Reading Performance and Reader Preference?](https://www.microsoft.com/en-us/research/uploads/prod/2021/06/Beier-Larson-2013-how-does-typeface-familiarity-affect-reading-performance-and-reader-preference.pdf). *Information Design Journal, 20*(1), 16–31.
- Lonsdale, M. dos S. (2016). [Typographic Features of Text and Their Contribution to the Legibility of Academic Reading Materials](https://journals.uc.edu/index.php/vl/article/view/5914). *Visible Language, 50*(1).
- Rello, L., Pielot, M., Marcos, M.-C., & Carlini, R. (2016). [Make It Big! The Effect of Font Size and Line Spacing on Online Readability](https://www.changedyslexia.org/publications/pdfs/2016-CHI-Make%20It%20Big%20The%20Effect%20of%20Font%20Size.pdf). CHI 2016.
- Rumaisa, K. (2023). [Neurodiversity and Typeface: Do Specialized Typefaces Improve Reading Fluency and Accuracy in Dyslexic Individuals?](https://ora.ox.ac.uk/objects/uuid%3A9a02d139-03d4-4543-b3d0-141595bfd39a). Master's thesis, University of Oxford.
- Wilkins, A., Smith, K., & Penacchio, O. (2020). [The Influence of Typography on Algorithms That Predict the Speed and Comfort of Reading](https://research-repository.st-andrews.ac.uk/handle/10023/19653). *Vision, 4*(1).

### Meaning and brand perception

- Childers, T. L., & Jass, J. (2002). [All Dressed Up With Something to Say: Effects of Typeface Semantic Associations on Brand Perceptions and Consumer Memory](https://doi.org/10.1207/S15327663JCP1202_03). *Journal of Consumer Psychology, 12*(2), 93–106.
- Shaikh, A. D., Chaparro, B. S., & Fox, D. (2006). [Personality of ClearType Fonts](https://doi.org/10.1177/154193120605001725). *Proceedings of the Human Factors and Ergonomics Society Annual Meeting, 50*(17).
- van Rompay, T. J. L., & Pruyn, A. T. H. (2011). [When Visual Product Features Speak the Same Language](https://doi.org/10.1111/J.1540-5885.2011.00828.X). *Journal of Product Innovation Management, 28*(4).

### Standards and design-system guidance

- Apple. [Human Interface Guidelines: Typography](https://developer.apple.com/design/human-interface-guidelines/typography).
- Google. [Material Design: Typography](https://m1.material.io/style/typography.html).
- GOV.UK Design System. [Headings](https://design-system.service.gov.uk/styles/headings/).
- U.S. Web Design System. [Typography](https://designsystem.digital.gov/components/typography/).
- U.S. Web Design System. [Using Type](https://designsystem.digital.gov/design-tokens/typesetting/overview/).
- W3C. [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/).
- W3C. [Understanding Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text).
- W3C. [Understanding Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing).

### Technical references

- MDN. [Variable Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Fonts/Variable_fonts).
- MDN. [`font-optical-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-optical-sizing).
- Microsoft. [OpenType Font Variations Overview](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview).
- Microsoft. [OpenType Optical Size Axis](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_opsz).
- web.dev. [Best Practices for Fonts](https://web.dev/articles/font-best-practices).

---

## One-page takeaway

When typography does not look or feel good, diagnose it in this order:

1. **Content:** Is the language clear and correctly structured?
2. **Purpose:** Is this reading, display, interface, data, or brand typography?
3. **Typeface:** Are the characters, family, coverage, and personality appropriate?
4. **Apparent size:** Can people see it comfortably at the real distance and device?
5. **Measure and leading:** Do the lines form a readable, coherent block?
6. **Hierarchy:** Can readers see importance and sequence before close reading?
7. **Spacing:** Do letters, words, paragraphs, and sections form meaningful groups?
8. **Voice:** Does the visual form reinforce the message and surrounding design?
9. **Resilience:** Does it survive real content, localization, zoom, and user settings?
10. **Craft:** Are line breaks, numerals, punctuation, loading, and edge cases resolved?

Good typography does not come from making every detail noticeable. It comes from making every detail contribute to the reading, meaning, and character of the whole.

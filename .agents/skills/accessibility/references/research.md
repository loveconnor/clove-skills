# Web Accessibility Implementation and Verification

> A research-backed operational guide to WCAG 2.2 Level AA, keyboard access, screen readers, zoom and reflow, forced colors, reduced motion, and automated verification

- **Research date:** July 20, 2026
- **Primary scope:** Web applications and content rendered with HTML, CSS, and JavaScript
- **Target:** WCAG 2.2 Level AA as a technical baseline, plus task-based manual verification

## Contents

1. [What this guide is for](#1-what-this-guide-is-for)
2. [Conformance, evidence, and source authority](#2-conformance-evidence-and-source-authority)
3. [Build an accessibility contract before code](#3-build-an-accessibility-contract-before-code)
4. [WCAG 2.2 AA implementation control map](#4-wcag-22-aa-implementation-control-map)
5. [Keyboard implementation and verification](#5-keyboard-implementation-and-verification)
6. [Screen-reader implementation and verification](#6-screen-reader-implementation-and-verification)
7. [Zoom, text resize, reflow, and text spacing](#7-zoom-text-resize-reflow-and-text-spacing)
8. [Forced colors and high-contrast environments](#8-forced-colors-and-high-contrast-environments)
9. [Reduced motion, animation, and flashing](#9-reduced-motion-animation-and-flashing)
10. [Automated verification](#10-automated-verification)
11. [Integrated manual test protocol](#11-integrated-manual-test-protocol)
12. [Defects, exceptions, and evidence](#12-defects-exceptions-and-evidence)
13. [Definition of done](#13-definition-of-done)
14. [Research basis and source notes](#14-research-basis-and-source-notes)

---

## 1. What this guide is for

This guide turns accessibility requirements into implementation controls and repeatable evidence. It is intended for product designers, content designers, engineers, testers, and reviewers working on a real user task—not merely a static page.

Use it to:

- define accessibility acceptance criteria before implementation;
- choose native elements, ARIA, focus behavior, responsive behavior, and motion behavior;
- verify complete tasks with a keyboard and screen reader;
- stress layouts under zoom, text spacing, forced colors, and reduced motion;
- build automated checks into component tests, end-to-end tests, and continuous integration;
- record enough provenance that another person can reproduce a result;
- distinguish a detected violation, a manual judgment, and a claim of WCAG conformance.

This guide is not:

- legal advice or a statement that WCAG 2.2 AA satisfies every applicable law, contract, procurement rule, or platform policy;
- a substitute for the [normative WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/);
- proof that a product is usable by disabled people merely because automated checks pass;
- permission to treat an exception in one success criterion as a general design exemption;
- a fixed browser and assistive-technology support matrix. That matrix must reflect the product's actual audience and support policy.

### 1.1 The practical standard

Treat accessibility as an observable property of complete tasks. A user must be able to find, understand, operate, correct, and complete the task under relevant conditions. A control that has an accessible name but cannot be reached by keyboard is not accessible. A page that passes a scanner but loses the submit button at 400% zoom is not accessible. A dialog that is announced correctly but traps focus after closing is not accessible.

The baseline is:

1. Meet every applicable WCAG 2.2 Level A and Level AA success criterion.
2. Verify the rendered experience, including responsive variants and states—not source code alone.
3. Test representative end-to-end tasks manually.
4. Include disabled people in research and usability testing for material or high-risk experiences.
5. Preserve reproducible evidence and record known limits honestly.

---

## 2. Conformance, evidence, and source authority

### 2.1 What Level AA means

WCAG 2.2 defines three conformance levels: A, AA, and AAA. Level AA conformance requires satisfying all applicable Level A and Level AA success criteria. Conformance applies to complete web pages, including the page's responsive presentations, interaction states, and processes needed to complete a task. Read the [WCAG 2.2 conformance requirements](https://www.w3.org/TR/WCAG22/#conformance-reqs) before making a formal conformance claim.

WCAG 2.2 added nine success criteria and removed 4.1.1 Parsing. The new A and AA criteria most likely to affect product implementation are:

- 2.4.11 Focus Not Obscured (Minimum), AA;
- 2.5.7 Dragging Movements, AA;
- 2.5.8 Target Size (Minimum), AA;
- 3.2.6 Consistent Help, A;
- 3.3.7 Redundant Entry, A;
- 3.3.8 Accessible Authentication (Minimum), AA.

W3C summarizes the changes in [What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/). Do not limit a WCAG 2.2 review to the new criteria; all retained A and AA criteria still apply.

### 2.2 Source hierarchy

Use the highest-authority source that answers the question:

| Authority | Use | Important limit |
|---|---|---|
| [WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/) | Normative success criteria, definitions, and conformance requirements | Concise by design; it does not prescribe one implementation |
| W3C specifications such as [ARIA in HTML](https://www.w3.org/TR/html-aria/) and [CSS Color Adjustment](https://www.w3.org/TR/css-color-adjust-1/) | Normative platform and semantic constraints | Conformance to one specification does not prove task usability |
| [WCAG Understanding documents](https://www.w3.org/WAI/WCAG22/Understanding/) | Intent, benefits, examples, and failure interpretation | Informative, not the normative wording |
| [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) | Informative widget patterns and keyboard conventions | Examples require adaptation and testing; APG is not a certification |
| Browser, OS, and assistive-technology documentation | Actual commands, settings, and supported behavior | Version-specific and subject to change |
| Test-tool documentation and rules | What a tool tests, how it is configured, and known limits | A tool's rules are a subset of accessibility requirements |
| Product evidence | Whether the implemented task works in supported environments | Must state environment, state, method, and date |

When sources disagree, first determine whether they govern different layers. The WCAG criterion defines the outcome; an APG pattern offers one way to build a widget; a screen-reader guide describes how a particular tool exposes it. Do not let a vendor example override normative requirements.

### 2.3 Evidence types

Label the evidence instead of collapsing it into “passed accessibility.”

| Evidence | What it can establish | What it cannot establish alone |
|---|---|---|
| Static lint | Detectable source-pattern errors | Runtime names, focus, layout, announcements, or task success |
| DOM/component rule scan | Detectable violations in a rendered component state | Hidden states, complete flows, or criteria requiring judgment |
| Browser end-to-end assertion | Observable behavior in a defined state and engine | Screen-reader speech, cognitive clarity, or broad interoperability |
| Manual keyboard test | Reachability, order, focus, operation, and traps | Screen-reader output or all pointer/touch behavior |
| Screen-reader test | Practical semantic and announcement behavior in one browser/AT pair | Every AT/browser pair or all disabled-user experiences |
| Zoom/reflow/forced-color/motion test | Resilience under a named user setting | Other settings or semantic correctness |
| Disabled-user task study | Real barriers, strategies, comprehension, and recovery for participants | Universal conformance or every disability context |
| Expert conformance audit | Criterion-by-criterion judgment with evidence | Legal compliance in every jurisdiction or future regression freedom |

The W3C states that no evaluation tool can determine accessibility or conformance on its own; knowledgeable human evaluation is required ([Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/)).

### 2.4 Define accessibility support

Before formal testing, document:

- supported browsers, engines, operating systems, and versions;
- desktop and mobile screen readers relevant to the audience;
- input methods: keyboard, touch, pointer, switch or voice control where relevant;
- viewport, zoom, text-scaling, orientation, theme, and contrast policies;
- languages and writing directions;
- whether third-party content, authentication, payments, documents, maps, editors, or embedded media participate in the task;
- the version of every automated rule set and testing library;
- the release or commit being tested.

Choose the matrix from audience evidence, product analytics, contractual requirements, and platform support. A common engineering smoke matrix is not automatically the product's accessibility support statement.

---

## 3. Build an accessibility contract before code

### 3.1 Define the task and failure boundary

Write the accessibility outcome as a task:

> A customer using only a keyboard and speech output can review the order, correct an invalid address without losing entered data, submit once, and confirm the result at 400% zoom with reduced motion enabled.

Then identify:

- entry points and prerequisites;
- required reading order and decisions;
- controls and keyboard behavior;
- names, descriptions, roles, states, and values;
- errors, warnings, progress, and success announcements;
- focus placement on entry, validation, state change, and exit;
- responsive and zoom transformations;
- pointer gestures and non-pointer alternatives;
- animation, timeout, and interruption behavior;
- third-party boundaries and fallback paths.

An accessibility requirement that names only a page is too weak. Testers need the state and expected behavior.

### 3.2 Use semantic HTML as the default

Native HTML controls supply semantics, focusability, keyboard behavior, form participation, and platform adaptation that custom elements must otherwise recreate. Start with the element whose purpose matches the action:

```html
<!-- Action in the current interface -->
<button type="button" aria-expanded="false" aria-controls="filters">
  Filters
</button>

<!-- Navigation to another resource -->
<a href="/orders/1428">View order 1428</a>
```

Do not use a clickable `div` or `span` as a shortcut. Adding `role="button"` does not add focus, Enter/Space handling, disabled behavior, or form semantics. The APG explicitly warns that ARIA supplies semantics, not keyboard behavior or styling ([Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)).

Apply ARIA only when native HTML cannot express the required relationship or state. Follow [ARIA in HTML](https://www.w3.org/TR/html-aria/) constraints and test the accessibility tree and actual assistive-technology behavior.

### 3.3 Specify each component as a behavioral contract

For every interactive component, record:

- **Purpose:** user task and whether it navigates, submits, selects, discloses, edits, or commands.
- **Native base:** the HTML element or established primitive.
- **Accessible name:** source of the name and whether visible text must match it.
- **Description:** supplementary instruction or error relationship; never a substitute for the name.
- **Role and state:** checked, selected, expanded, current, invalid, busy, pressed, or value.
- **Keyboard:** entry key, action keys, movement keys, exit key, and focus destination.
- **Pointer/touch:** target size, cancellation, drag or gesture alternative.
- **Focus lifecycle:** initial, state change, close, removal, error, and route transition.
- **Announcements:** what needs a status message and what must remain silent.
- **Adaptation:** narrow viewport, 200% text, 400% zoom/reflow, text spacing, forced colors, reduced motion.
- **States:** loading, empty, partial, disabled, read-only, invalid, success, stale, permission denied, and offline as applicable.
- **Evidence:** automated checks plus named manual scenarios.

### 3.4 Accessible names are an interface contract

Prefer native naming mechanisms: a `<label>` for a form control, text content for a button, `<legend>` for a grouped choice, and `<caption>` for a table. The [APG naming guidance](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/) recommends native mechanisms when available.

Rules:

- Every interactive control needs a concise, accurate name.
- Visible labels must remain visible; placeholders are not durable labels.
- When visible text labels a control, include that text in the accessible name so speech input and visual references agree (WCAG [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name)).
- Use a description for supporting detail; do not repeat the name verbatim.
- Avoid `aria-label` on elements whose descendant text should be exposed: it can replace the computed name and hide meaningful descendant content from the name calculation.
- Update names and states when the user-facing state changes.
- Test names through browser accessibility inspection and a supported screen reader.

### 3.5 Keep status, errors, and focus distinct

Use three different mechanisms intentionally:

- **Visible content** communicates persistently to everyone.
- **Focus movement** places the user at a location where immediate interaction or correction is required.
- **Live status** announces an important non-focus change without moving the user.

Do not move focus merely to announce every update. Do not put an entire page inside a live region. Use `role="status"` for polite, non-urgent status and `role="alert"` sparingly for urgent information. Ensure the live-region container exists before inserting the message when reliable announcement matters. WCAG [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) defines the Level AA outcome.

For validation:

- show a specific message adjacent to the invalid field;
- associate the field with the message using a native or ARIA relationship;
- set `aria-invalid="true"` after validation has determined an error;
- provide a summary when many errors occur;
- move focus to the summary or first invalid field according to the flow, then make every error easy to reach;
- preserve entered data;
- announce only newly relevant information.

### 3.6 CSS must preserve user adaptation

Avoid implementation choices that prevent adaptation:

- fixed heights around text;
- viewport-locked layouts that require two-dimensional scrolling;
- text rendered as images;
- disabling pinch zoom or browser zoom;
- removing outlines without an equivalent visible focus indicator;
- color, gradient, shadow, or background image as the only state cue;
- transitions that are essential to perceiving a state change;
- content hidden only visually while remaining focusable, or hidden semantically while visible and actionable.

---

## 4. WCAG 2.2 AA implementation control map

This map groups important implementation controls. It is not a substitute for reviewing every Level A and AA criterion in [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

### 4.1 Perceivable content and structure

| Control | Relevant criteria | Implementation | Minimum evidence |
|---|---|---|---|
| Text alternatives | 1.1.1 | Give informative images equivalent concise alternatives; use empty `alt` for decorative images; name functional images by purpose; provide a text alternative for complex information | Image inventory plus manual context review and rule scan |
| Time-based media | 1.2.x A/AA | Captions, transcripts or audio description as applicable; accurate synchronization and speaker/sound identification | Media-by-media human review |
| Semantic relationships | 1.3.1 | Use headings, lists, landmarks, tables, labels, fieldsets, and programmatic relationships that match visual structure | Accessibility-tree inspection and screen-reader navigation |
| Meaningful sequence | 1.3.2 | DOM and reading order must preserve meaning; do not use CSS placement to create a contradictory sequence | CSS-off/reading-order review and screen-reader test |
| Sensory independence | 1.3.3 | Instructions identify controls by name or programmatic relation, not only location, color, sound, or shape | Content review |
| Orientation and input purpose | 1.3.4–1.3.5 | Do not lock orientation without necessity; use appropriate autocomplete tokens for personal-data fields | Device/rotation test and markup review |
| Color independence | 1.4.1 | Pair color with text, icons, pattern, shape, or programmatic state | Grayscale/forced-color review and manual state inventory |
| Text contrast | 1.4.3 | At least 4.5:1 for normal text and 3:1 for qualifying large text, including placeholders and all states | Computed color-pair measurement in rendered states |
| Text resize | 1.4.4 | Text reaches 200% without loss of content or function | Manual 200% text/zoom test |
| Images of text | 1.4.5 | Use real text except for essential or customizable cases | Asset/content inventory |
| Reflow | 1.4.10 | At 320 CSS px width, vertical content avoids two-dimensional scrolling except inherently two-dimensional content | Manual 320 CSS px/400% task test |
| Non-text contrast | 1.4.11 | Essential control boundaries, states, and meaningful graphics meet 3:1 against adjacent colors | State-by-state measurement plus forced-color test |
| Text spacing | 1.4.12 | Content survives specified line, paragraph, letter, and word spacing without clipping or overlap | Injected text-spacing stylesheet and task test |
| Hover/focus content | 1.4.13 | Additional content is dismissible, hoverable where applicable, and persistent until dismissed or no longer valid | Keyboard, pointer, and zoom test |

### 4.2 Operable interaction

| Control | Relevant criteria | Implementation | Minimum evidence |
|---|---|---|---|
| Keyboard operation | 2.1.1 | Every function works through a keyboard interface; do not require device-specific timing | Complete task with keyboard only |
| No keyboard trap | 2.1.2 | Users can leave every component with standard or documented keys | Forward/reverse navigation and escape-path test |
| Character shortcuts | 2.1.4 | Single-character shortcuts can be turned off, remapped, or operate only while the control has focus | Shortcut inventory and speech-input risk review |
| Timing | 2.2.1 | Users can turn off, adjust, or extend limits except defined exceptions; warn before expiry and preserve work | Timed-flow manual test |
| Moving content | 2.2.2 | Provide pause, stop, or hide for qualifying moving, blinking, scrolling, or auto-updating content | Reduced-motion and control test |
| Flashing | 2.3.1 | Avoid content that flashes above the threshold | Animation/video review with appropriate analysis tool |
| Bypass blocks | 2.4.1 | Provide skip links, landmarks, and/or structural navigation to bypass repetition | Keyboard and landmark navigation |
| Page and link orientation | 2.4.2, 2.4.4–2.4.6 | Descriptive titles, headings, labels, link purpose, and multiple ways to find pages where required | Content and screen-reader elements-list review |
| Focus order | 2.4.3 | Focus follows a meaningful sequence aligned with task and reading order | Tab/Shift+Tab trace |
| Visible focus | 2.4.7 | Every keyboard-operable control displays a perceivable focus indicator | Visual keyboard test in every state/theme |
| Focus not obscured | 2.4.11 | Sticky regions, drawers, dialogs, cookie notices, and virtual keyboards do not entirely hide the focused component | Keyboard test at default and zoomed layouts |
| Pointer gestures | 2.5.1 | Multipoint or path gestures have a single-pointer alternative unless essential | Touch/pointer task test |
| Pointer cancellation | 2.5.2 | Prefer activation on up-event; allow abort/undo where needed | Pointer interaction test |
| Motion actuation | 2.5.4 | Device/user motion has a UI alternative and can be disabled unless essential | Device/settings test |
| Drag alternative | 2.5.7 | Any drag operation has a non-dragging single-pointer alternative | Pointer and keyboard task test |
| Target size | 2.5.8 | Targets are at least 24 by 24 CSS px or satisfy a defined spacing/exception case | Rendered geometry measurement across responsive states |

The `24 × 24 CSS px` criterion is a minimum with explicit exceptions, not a recommended universal target. Prefer larger targets for touch, frequent use, destructive actions, or users with limited dexterity. Read [Understanding Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) before relying on an exception.

### 4.3 Understandable content, forms, and processes

| Control | Relevant criteria | Implementation | Minimum evidence |
|---|---|---|---|
| Language | 3.1.1–3.1.2 | Set page language and identify passages in another language where needed | Markup review and screen-reader pronunciation check |
| Predictability | 3.2.1–3.2.4 | Focus/input do not cause unexpected context changes; repeated navigation and components are consistent | Cross-page task review |
| Consistent help | 3.2.6 | Repeated help mechanisms occur in the same relative order unless user change controls it | Process/page-family review |
| Error identification | 3.3.1 | Identify the field and error in text | Invalid-submission test |
| Labels/instructions | 3.3.2 | Supply labels, formats, constraints, and examples needed before input | Form content and screen-reader review |
| Error suggestion | 3.3.3 | Suggest correction when known and safe | Representative invalid-input tests |
| Error prevention | 3.3.4 | For legal, financial, data-modifying, or test responses, provide reversal, checking, or confirmation as required | Consequential-flow test |
| Redundant entry | 3.3.7 | Do not ask for information already entered in the same process unless exception applies; auto-populate or make selectable | End-to-end process review |
| Accessible authentication | 3.3.8 | Do not require a cognitive-function test unless an alternative, assistance mechanism, or recognized exception applies; support password managers and paste | Authentication task with password manager/paste and alternative-path review |

### 4.4 Robust semantics and dynamic updates

| Control | Relevant criteria | Implementation | Minimum evidence |
|---|---|---|---|
| Name, role, value | 4.1.2 | Controls expose correct names, roles, values, states, and user-settable changes to assistive technology | Accessibility-tree inspection, rule scan, and screen-reader interaction |
| Status messages | 4.1.3 | Important non-focus updates are programmatically determinable without requiring focus | Live update test with supported screen readers |

WCAG 2.2 removed 4.1.1 Parsing as a success criterion, but valid, well-formed semantics still matter. Browser error recovery does not excuse duplicate IDs that break label relationships, invalid nesting that changes the accessibility tree, or component hydration that removes behavior.

---

## 5. Keyboard implementation and verification

### 5.1 Keyboard outcome

A keyboard user must be able to:

- reach all operable controls and no irrelevant hidden controls;
- understand the current focus location;
- operate every function without pointer-only gestures;
- move through content in a meaningful order;
- enter and leave composite widgets predictably;
- dismiss temporary UI and return to a logical location;
- avoid traps, surprise context changes, and focus loss;
- complete the same core task as a pointer user.

WCAG [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html), [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html), [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html), [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), and [2.4.11 Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) work together. Passing one does not imply the others.

### 5.2 Prefer native keyboard behavior

Use `<button>`, `<a href>`, `<input>`, `<select>`, `<textarea>`, `<details>`, and other native controls where they match the purpose. Do not add custom key handlers that conflict with browser editing keys or assistive-technology commands.

For custom composite widgets, follow an established interaction model. The [APG keyboard interface guidance](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) generally uses one Tab stop to enter a composite and arrow keys to move within it. Common focus-management strategies are roving `tabindex` and `aria-activedescendant`. Choose deliberately and test with supported AT.

Rules:

- Never use positive `tabindex` to repair visual/DOM disagreement. Fix the DOM order.
- Use `tabindex="0"` only when an element legitimately joins the page Tab sequence.
- Use `tabindex="-1"` for programmatic focus targets that should not become a regular Tab stop.
- Keep selection and focus visually distinct in widgets where both can exist.
- Do not hijack arrow keys on ordinary page content.
- Preserve native text-editing and browser shortcuts.
- If a nonstandard key is unavoidable, expose concise instructions at the point of use.

### 5.3 Visible and unobscured focus

Use a focus indicator that remains visible across backgrounds, themes, zoom, and forced colors. `:focus-visible` can avoid showing the custom ring for pointer interactions while retaining it for keyboard use.

```css
:where(a, button, input, select, textarea, [tabindex]):focus-visible {
  outline: 0.1875rem solid var(--focus-ring);
  outline-offset: 0.1875rem;
}

@media (forced-colors: active) {
  :where(a, button, input, select, textarea, [tabindex]):focus-visible {
    outline-color: Highlight;
  }
}
```

Do not depend only on `box-shadow`: forced-colors mode can suppress shadows. Avoid clipping outlines with `overflow: hidden`. Test focus against every component surface, not only the page background.

Sticky headers, cookie banners, bottom sheets, chat launchers, and open popovers must not entirely obscure the focused element. Use layout spacing, scroll padding, responsible focus movement, or dismissal controls. Test this at zoomed and narrow layouts because fixed surfaces consume a larger share of the viewport.

### 5.4 Bypass repeated content

Provide a skip link that becomes visible on focus and lands on a focusable or programmatically focusable main region:

```html
<a class="skip-link" href="#main">Skip to main content</a>
<!-- repeated header/navigation -->
<main id="main" tabindex="-1">…</main>
```

The link must work after client-side navigation and must not land underneath a sticky header.

### 5.5 Dialog and popover focus lifecycle

For a modal dialog:

1. A user action opens it.
2. Focus moves inside to a logical initial element.
3. Content outside is inert for relevant interaction and assistive technology.
4. Tab and Shift+Tab remain within the modal while it is open.
5. Escape closes it unless the interaction has a documented, necessary exception.
6. Closing returns focus to the invoking control, or another logical target if the invoker no longer exists.
7. The dialog has a programmatic name and, where useful, a concise description.

See the [APG modal dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). A nonmodal popover usually must not trap focus; its behavior depends on whether it is a disclosure, menu, combobox popup, tooltip, or another established pattern.

### 5.6 Dynamic interfaces

When DOM changes:

- do not leave focus on a removed element or reset it to `body`;
- after deletion, move to a logical adjacent item or the collection heading;
- after inline editing, return focus according to the user's next likely action;
- after client-side route changes, update the document title and place focus or announce the new context according to a documented route policy;
- when content is appended, preserve the user's position unless the action explicitly requests movement;
- for virtualized collections, preserve meaningful keyboard navigation and expose collection position where supported;
- do not render focusable descendants inside hidden, collapsed, or inert content.

### 5.7 Manual keyboard protocol

Test without using a mouse or trackpad:

1. Reload at the task's true entry point.
2. Press Tab. Confirm the skip mechanism and first actionable target are predictable.
3. Continue with Tab through the page. Record each focus stop and compare it with the reading/task order.
4. Reverse with Shift+Tab. Confirm no state is lost and no trap appears.
5. Operate native actions with expected keys: Enter for links, Enter or Space for buttons, arrow keys for native options, and Escape where the pattern calls for dismissal.
6. Exercise every custom composite using its documented APG-style interaction.
7. Open and close dialogs, menus, disclosures, date pickers, comboboxes, tooltips, and transient messages.
8. Trigger validation, loading, success, failure, deletion, pagination, sorting, and route changes.
9. Repeat at 400% zoom or 320 CSS px width to expose obscured focus and responsive focus-order defects.
10. Confirm pointer-only actions such as drag, swipe, hover, drawing, or spatial placement have equivalent controls where required.

Record the exact action where focus becomes missing, invisible, illogical, trapped, or obscured. “Keyboard failed” is not reproducible evidence.

---

## 6. Screen-reader implementation and verification

### 6.1 Test the semantic experience, not a speech transcript alone

Screen readers combine the browser accessibility tree, user settings, interaction mode, and AT behavior. Exact speech varies. Verify whether users can discover structure, understand controls and state, operate the interface, recover from errors, and confirm outcomes.

Use at least these modes:

- **Reading/browse navigation:** headings, landmarks, lists, tables, links, controls, and text sequence.
- **Focus/forms interaction:** Tab order, editing, widget keys, validation, and state changes.
- **Element lists or rotors:** headings, links, form controls, landmarks, and other navigable categories.
- **Touch exploration on mobile** when mobile screen-reader support is in scope.

NVDA documents browse mode, single-letter navigation, an elements list, focus mode, and web navigation in the [NVDA User Guide](https://download.nvaccess.org/documentation/userGuide.html). Apple documents VoiceOver web navigation and its rotor in the [VoiceOver User Guide](https://support.apple.com/guide/voiceover/intro-to-advanced-navigation-vo27974/mac). Use current official commands for the installed version; do not memorize a stale shortcut sheet.

### 6.2 Establish a supported test matrix

Choose browser/screen-reader pairs that represent the audience and product support policy. For each run, record:

- operating system and version;
- browser and version;
- screen reader and version;
- speech verbosity and notable settings;
- input mode or interaction mode;
- page URL/build/commit, language, viewport, and state;
- whether extensions were enabled.

Do not treat results from one pair as universal. Browser and screen-reader accessibility mappings differ, and support changes by version. The [ARIA and Assistive Technologies project](https://aria-at.w3.org/) publishes interoperability test work for ARIA patterns; use it as supporting compatibility evidence, not as proof that the product implementation works.

### 6.3 Structure and reading order

Verify:

- a descriptive document title;
- correct page and passage language;
- one clear main region and meaningful landmarks;
- headings that describe sections and form a coherent hierarchy;
- lists exposed as lists and tables used only for tabular relationships;
- DOM/reading order that preserves meaning at every responsive layout;
- decorative content excluded from the accessibility tree;
- informative images, charts, and icons given appropriate alternatives;
- repeated navigation and controls named consistently.

Landmarks and headings are navigation, not decoration. Do not add many redundant regions or skip heading levels solely to achieve a visual size; use CSS for appearance.

### 6.4 Forms and validation

For each field, verify that the screen reader exposes:

- the visible label;
- required status before submission where relevant;
- input purpose and expected format;
- current value;
- instructions that are needed to enter a valid value;
- invalid state and the specific error after validation;
- group name for related controls such as radio buttons;
- autocomplete behavior and password-manager compatibility where relevant.

Test invalid submission from beginning to recovery. Confirm that the error summary is announced or focused according to the contract, field errors are reachable and associated, corrected errors clear, and entered values remain intact.

### 6.5 Dynamic content and announcements

Use visible status content as the source of truth. Add a live-region role only when a non-focus change must be announced. Good candidates include:

- save completed or failed;
- results count changed after a filter;
- an asynchronous validation result;
- an item was added to a cart;
- connection status changed;
- a long-running operation completed.

Avoid announcing:

- every keystroke or character count unless it matters;
- every intermediate loading update;
- content that focus immediately reaches and reads;
- large containers that cause repeated speech;
- purely decorative state changes.

Test slow and rapid updates. Multiple live-region messages may interrupt, queue, or collapse differently across AT. The product contract should prioritize the message the user needs, not narrate implementation activity.

### 6.6 Widgets and state

For each interactive component, verify:

- name and role on arrival;
- current state or value;
- available action is understandable;
- keyboard operation follows the chosen pattern;
- state changes are exposed after interaction;
- disabled and read-only states are distinguishable;
- focus remains on a meaningful object;
- popup ownership/expansion and selection are communicated where required.

Inspect both the browser accessibility tree and actual screen-reader output. The tree can reveal a coding error, while the screen reader reveals practical exposure in one pair. Neither replaces the other.

### 6.7 Hidden, inert, and offscreen content

Keep visual, interaction, and semantic visibility aligned:

- `display: none`, `hidden`, or `visibility: hidden` removes content from normal rendering and accessibility exposure as expected.
- `aria-hidden="true"` hides descendants from assistive technology but does not make them unfocusable. Never place active focus inside an `aria-hidden` subtree.
- `inert` prevents relevant interaction and focus in the subtree; use it deliberately for modal backgrounds and test support through the project platform matrix.
- visually hidden utility classes should keep content available to assistive technology without creating layout, focus, or clipping defects.
- offscreen positioning is not a safe way to hide an open interactive surface.

### 6.8 Screen-reader task protocol

For every critical task:

1. Start at the real entry point with the screen reader already running.
2. Read the title and initial page context without relying on sight.
3. Use landmarks and headings to orient and locate the task.
4. Use the elements list/rotor to inspect headings, links, and form controls.
5. Read linearly through any instructions whose order matters.
6. Navigate controls using Tab and the screen reader's focus/forms mode.
7. Operate composite widgets with their expected keys.
8. Submit empty, malformed, boundary, and valid values.
9. Confirm loading, errors, status changes, and success without moving focus unnecessarily.
10. Navigate away, return, resume, cancel, and close temporary UI.
11. Repeat the highest-risk task with a second supported browser/AT pair.

Capture mismatches in user terms: “After activating Save, there is no announced result and focus remains on Save, so a speech-output user cannot determine whether the profile was saved.”

---

## 7. Zoom, text resize, reflow, and text spacing

These tests overlap but measure different failures.

### 7.1 Requirements and test conditions

- WCAG [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) requires text, except captions and images of text, to resize to 200% without loss of content or functionality.
- WCAG [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) requires vertical content to work at a width equivalent to 320 CSS px without two-dimensional scrolling, except content that requires a two-dimensional layout for usage or meaning. W3C explains 320 CSS px as equivalent to 400% zoom from a 1280 CSS px-wide viewport.
- WCAG [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) requires no loss when users override line height to 1.5 times the font size, paragraph spacing to 2 times, letter spacing to 0.12 times, and word spacing to 0.16 times.

These values are test overrides, not mandatory default typography settings.

### 7.2 Implementation rules

- Use responsive layout and intrinsic sizing rather than fixed pixel dimensions around text.
- Let controls and containers grow vertically.
- Use `min-width: 0` on flex/grid children where long content must wrap.
- Allow long URLs, identifiers, localized strings, and user content to wrap or scroll within the meaningful object.
- Do not hide essential actions at a breakpoint without providing an equivalent reachable action.
- Preserve meaningful reading and focus order when columns stack.
- Avoid fixed overlays that consume most of a zoomed viewport.
- Keep dialogs inside the viewport with internal scrolling where necessary; keep title, close action, and current focus reachable.
- Do not use media queries based solely on physical-device assumptions; browser zoom can activate narrow-layout queries.
- Do not disable zoom with viewport metadata.
- Treat data tables, maps, timelines, editors, and diagrams as possible two-dimensional exceptions only when their meaning genuinely requires it. Surrounding instructions and controls must still reflow, and the exceptional region needs usable scrolling and alternatives as appropriate.
- Test enlarged text independently when the platform supports text scaling without page zoom.

### 7.3 Text-spacing test stylesheet

Apply the WCAG test values without `!important` first; use a dedicated test extension or controlled stylesheet that reliably overrides author values for the environment. A simple diagnostic stylesheet is:

```css
* {
  line-height: 1.5 !important;
  letter-spacing: 0.12em !important;
  word-spacing: 0.16em !important;
}

p {
  margin-block-end: 2em !important;
}
```

The paragraph rule may need adaptation to the document's actual paragraph markup. Inspect clipping, overlap, truncation, missing controls, and lost relationships—not whether the design still looks identical.

### 7.4 Manual zoom and reflow protocol

1. Start with a browser content viewport of 1280 CSS px width where practical.
2. Test browser zoom at 200% and complete the task.
3. Test 400% zoom, or set the content viewport to 320 CSS px width, and complete the task.
4. At each condition, inspect navigation, dialogs, tables, forms, sticky surfaces, toasts, tooltips, errors, and success states.
5. Confirm text is not clipped or replaced by ellipses that remove necessary information.
6. Confirm horizontal scrolling is not required for ordinary vertical content.
7. For a legitimate two-dimensional region, confirm scrolling is contained, controls remain available, and the rest of the page reflows.
8. Navigate entirely by keyboard to find focus obscuration and order changes.
9. Apply the text-spacing override and repeat the core task.
10. Test long localized content, large system text where supported, and both portrait/landscape or split-screen conditions when in scope.

Record the effective viewport, browser zoom, OS display scaling, and text scaling separately. A screenshot without those values is weak evidence.

---

## 8. Forced colors and high-contrast environments

### 8.1 What forced colors changes

In forced-colors mode, the user agent forces many authored color properties to a limited user-selected palette. The [CSS Color Adjustment specification](https://www.w3.org/TR/css-color-adjust-1/) defines affected properties and system colors. Common effects include:

- authored text, background, border, outline, decoration, SVG fill, and stroke colors may be replaced;
- `box-shadow` and `text-shadow` are forced to `none`;
- non-URL background images can be removed;
- system color keywords communicate semantic roles such as `Canvas`, `CanvasText`, `ButtonText`, `Highlight`, and `HighlightText`;
- `forced-color-adjust: none` opts an element out, transferring the responsibility for readable user-selected contrast to the author.

Forced colors is not the same as a dark theme, increased contrast, color-vision deficiency, or `prefers-contrast`. Test each product requirement separately. The `forced-colors` and `prefers-reduced-motion` media features are defined in [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/); verify current browser support for the product matrix.

### 8.2 Implementation rules

- Preserve native controls when possible; browsers already adapt them.
- Use text, shape, border, icon, or programmatic state in addition to color.
- Prefer `currentColor` for monochrome SVG icons that should follow surrounding text.
- Give controls a real border or outline if a shadow is the only authored boundary.
- Ensure selected, checked, invalid, expanded, current, and disabled states remain distinguishable.
- Do not encode chart series only through color; add labels, patterns, markers, or a data table.
- Do not use background images as the only carrier of content or state.
- Keep focus visible using outlines that can map to system colors.
- Use system color keywords inside a forced-colors query when the component needs explicit adaptation.
- Use `forced-color-adjust: none` only for a small element whose colors are essential and whose contrast has been designed for user palettes, such as a color swatch. Document and test the exception.

```css
.icon {
  fill: currentColor;
}

.control {
  border: 1px solid var(--control-border);
}

@media (forced-colors: active) {
  .control[aria-pressed="true"],
  .control[aria-selected="true"] {
    color: HighlightText;
    background: Highlight;
    border-color: Highlight;
  }

  .error-icon {
    color: Mark;
  }
}
```

Do not over-style forced-colors mode to recreate the brand palette. The user's palette is the feature.

### 8.3 Verification protocol

1. Enable an actual operating-system forced/high-contrast mode in a supported environment. Browser emulation is useful for development but does not replace the native setting.
2. Reload the application and complete representative tasks.
3. Inspect text, links, buttons, inputs, checkboxes, radios, toggles, tabs, selected rows, menus, dialogs, charts, icons, validation, and focus.
4. Confirm boundaries and state indicators remain perceivable when shadows, gradients, and background fills disappear.
5. Confirm images and SVG content are neither invisible nor misleading.
6. Check disabled controls without relying on low opacity alone.
7. Check hover, focus, active, visited, selected, invalid, and success states.
8. Repeat at zoom because forced colors and reflow defects can combine.

Use browser developer-tool emulation in component development and CI screenshots if helpful, but label it “emulated forced colors.” Record at least one native OS/browser result for release evidence when forced-colors support is in scope.

---

## 9. Reduced motion, animation, and flashing

### 9.1 Design outcome

Reduced motion is not “remove every transition.” It means eliminating or replacing nonessential motion that can trigger discomfort, disorientation, nausea, loss of focus, or attention capture while preserving understandable state changes.

Classify motion:

- **Decorative:** ambient movement, parallax, floating particles, looping accents. Remove when reduced motion is requested.
- **Orienting:** shows where an element came from or how state changed. Replace with a short fade, instant change, or static cue if comprehension survives.
- **Functional:** progress, playback, or spatial manipulation. Preserve the information and controls while reducing travel and continuous movement.
- **Essential:** motion whose removal would fundamentally change the information or functionality. Keep only what is truly essential, and still avoid unsafe flashing.

WCAG does not contain one general “prefers reduced motion” success criterion. Relevant requirements include [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html), 2.5.4 Motion Actuation, and other task-specific criteria. Honoring the platform preference is also a strong user-adaptation practice.

### 9.2 CSS and JavaScript implementation

Make the reduced version the explicit override, or use a reduced-motion-first strategy. Avoid `transition: all`.

```css
.panel {
  transition: opacity 160ms ease, transform 160ms ease;
}

@media (prefers-reduced-motion: reduce) {
  .panel {
    transition: opacity 80ms linear;
    transform: none;
  }

  .ambient-animation,
  .parallax-layer {
    animation: none;
  }
}
```

For JavaScript-driven motion, read and respond to preference changes:

```js
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function applyMotionPreference(event) {
  animationController.setReducedMotion(event.matches);
}

applyMotionPreference(reducedMotion);
reducedMotion.addEventListener('change', applyMotionPreference);
```

Use the project's cleanup lifecycle to remove the listener when needed. Do not infer a permanent preference once at build time.

### 9.3 Motion rules

- Stop autoplay when it is not necessary. Give users pause/stop controls where WCAG requires them.
- Remove parallax, large zooms, simulated depth, continuous rotation, and long-distance transforms under reduced motion.
- Avoid pulsing attention traps and repeated celebration effects.
- Keep focus and DOM state synchronized; do not delay accessibility state until an animation ends.
- When an exit animation is skipped, still perform cleanup and restore focus.
- Do not set every animation duration to an arbitrary tiny nonzero value; animation callbacks and user perception can become unreliable. Implement explicit reduced behavior.
- Ensure loading indicators still communicate loading. A static label or gently changing progress value may replace rotation.
- Keep carousels and auto-updating regions pausable and operable without motion.
- Avoid any content that violates the flash threshold, regardless of motion preference.

### 9.4 Verification protocol

1. Enable reduced motion at the operating-system level before loading the page.
2. Reload and test entry animations, scrolling, route transitions, dialogs, drawers, menus, accordions, sorting, filtering, drag/drop, loading, success, errors, media, and celebratory effects.
3. Confirm removed animation does not remove information, leave invisible content, skip focus restoration, or block completion callbacks.
4. Change the OS preference while the page is open and verify the application responds when runtime support is part of the implementation.
5. Test autoplay pause/stop controls and persistence.
6. Review video, GIF, canvas, SVG, and third-party animation; CSS media queries alone do not govern every medium.
7. Repeat with keyboard and a screen reader for components whose timing or focus lifecycle changes.

---

## 10. Automated verification

### 10.1 What automation is for

Automation should catch repeatable regressions quickly and produce actionable evidence. It is best at deterministic conditions such as missing names, invalid ARIA use, some contrast pairs, duplicate relationships, and role/state problems in rendered states. It is weak or incapable at meaningful reading order, label quality, keyboard-task equivalence, useful alternative text, appropriate focus movement, announcement timing, cognitive clarity, and many responsive failures.

Use automation as layers:

1. **Authoring feedback:** semantic types, framework lint rules, and component APIs.
2. **Unit/component tests:** names, roles, states, relationships, and component states.
3. **Browser rule scans:** rendered accessibility rules in real browser layout.
4. **End-to-end behavior:** keyboard paths, focus lifecycle, error recovery, responsive states, and rule scans after interaction.
5. **Release/manual audit:** screen readers, zoom/reflow, forced colors, reduced motion, content judgment, and complete criteria review.
6. **Production monitoring:** representative pages and states, with privacy-safe reports and triage—not a replacement for pre-release testing.

### 10.2 Configure rules deliberately

Tools and rules change. Pin and record:

- scanner/library version;
- rule set, WCAG tags, and any best-practice rules;
- browser and engine version;
- viewport, theme, language, and user preferences;
- included/excluded frames or regions;
- disabled rules and justification;
- tested page state and data fixture.

The [Accessibility Conformance Testing Rules Format](https://www.w3.org/TR/act-rules-format/) standardizes how test rules can be described; ACT rules may be automated, semi-automated, or manual. A rule implementation can still have tool-specific behavior.

### 10.3 Scan states, not only URLs

Many defects exist only after interaction. Scan:

- initial, loading, empty, populated, and partial states;
- menus, dialogs, drawers, popovers, disclosures, and tooltips while open;
- valid and invalid forms;
- selected, disabled, current, expanded, and busy controls;
- authentication, timeout warning, permission denied, and expired-session states;
- responsive variants and themes;
- post-navigation, success, and failure outcomes.

The axe API documentation notes that hidden content must be opened or rendered and then analyzed ([axe-core API](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md)). A clean initial-page scan says nothing about a closed dialog's rendered open state.

### 10.4 Example: Playwright with axe-core

Adapt this example to the repository's framework and dependency policy. Do not add a dependency merely because it appears here.

```ts
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('checkout has no detectable WCAG A/AA violations in key states', async ({ page }) => {
  await page.goto('/checkout');

  const initial = await new AxeBuilder({ page })
    .withTags([
      'wcag2a',
      'wcag2aa',
      'wcag21a',
      'wcag21aa',
      'wcag22a',
      'wcag22aa',
    ])
    .analyze();

  expect(initial.violations).toEqual([]);

  await page.getByRole('button', { name: 'Place order' }).click();
  await expect(page.getByRole('heading', { name: 'Fix 2 errors' })).toBeFocused();

  const invalid = await new AxeBuilder({ page }).analyze();
  expect(invalid.violations).toEqual([]);
});
```

The official [Playwright accessibility testing guide](https://playwright.dev/docs/accessibility-testing) uses `@axe-core/playwright` and explicitly states that automated testing cannot detect every WCAG violation. Confirm the current axe tags against the pinned version before copying the configuration.

Prefer semantic behavior assertions alongside scans:

```ts
await expect(page.getByRole('dialog', { name: 'Delete project?' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Cancel' })).toBeFocused();

await page.keyboard.press('Escape');
await expect(page.getByRole('button', { name: 'Delete project' })).toBeFocused();
```

These assertions verify a specific contract. They still do not emulate screen-reader speech or prove every keyboard behavior.

### 10.5 Environment limitations

- Run layout-dependent checks such as rendered contrast in a real browser. The [axe-core project](https://github.com/dequelabs/axe-core) documents limitations in JSDOM, including unavailable color-contrast evaluation.
- Cross-origin iframes, canvas, video, shadow DOM, and third-party widgets may require special configuration or separate testing.
- Accessibility-tree snapshots are useful for focused contracts but brittle as huge page snapshots. Prefer assertions about the intended name, role, state, and relationship.
- Browser emulation of reduced motion or forced colors is valuable but label it as emulation and retain native-setting manual checks.
- A Lighthouse accessibility score covers a weighted set of audits and excludes manual checks from the score. A score of 100 is not a conformance claim ([Lighthouse accessibility scoring](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)).

### 10.6 CI policy

Recommended policy:

- fail new code on high-confidence violations in changed components and critical flows;
- keep a complete baseline inventory for existing debt;
- do not silently update snapshots or violation baselines;
- require every suppression to identify the rule, exact scope, rationale, owner, linked issue, review date, and removal condition;
- expire suppressions automatically where tooling permits;
- retain machine-readable and human-readable reports as build artifacts;
- include screenshots or DOM targets only when privacy-safe;
- triage tool upgrades because rule behavior and findings can change;
- run a bounded critical-path suite on every change and a broader matrix on a scheduled or release cadence.

A disabled rule is a risk acceptance, not a pass.

### 10.7 Automated checks worth adding

Depending on the stack:

- lint invalid ARIA, missing labels, and event-handler patterns;
- unit-test accessible names, roles, states, and error relationships;
- assert landmarks, headings, titles, and language metadata;
- test dialogs, focus return, and removal of hidden focus targets;
- scan every material component state in a real browser;
- run end-to-end keyboard paths with visible focus assertions;
- set 320 CSS px viewports and check unexpected page-level horizontal overflow;
- emulate reduced motion and assert decorative animation is disabled;
- emulate forced colors and use targeted visual regression for critical controls;
- test contrast token pairs and rendered exceptional states;
- validate captions/transcripts and document assets through their own workflows.

Automated overflow detection needs review: a legitimate horizontally scrolling data table should not fail the same way as an accidental page-wide overflow.

---

## 11. Integrated manual test protocol

### 11.1 Prepare the truth packet

Before testing, record:

- build/commit and environment;
- task, role, permissions, and data fixture;
- supported browser/OS/AT matrix;
- viewport, zoom, display scaling, text scaling, language, direction, theme, and user preferences;
- known third-party boundaries;
- expected focus and announcement behavior;
- applicable WCAG criteria and product acceptance criteria;
- tester and date.

### 11.2 Test representative tasks, not a page tour

Choose tasks that cover:

- primary product value;
- authentication and account recovery;
- search, navigation, and finding help;
- forms and validation;
- financial, legal, privacy, destructive, or data-modifying actions;
- complex widgets and data displays;
- timeout, offline, permission, stale, empty, partial, error, and success states;
- creation, editing, cancellation, deletion, undo, and resumption;
- third-party or embedded steps.

For each task, run:

1. Semantic structure and content review.
2. Keyboard-only completion.
3. Screen-reader completion in the primary supported pair.
4. 200% text/zoom and 400%/320 CSS px reflow completion.
5. Text-spacing override.
6. Native forced-colors/high-contrast completion.
7. Reduced-motion completion.
8. Pointer/touch and gesture alternatives where relevant.
9. A second browser/AT pair for critical or custom-widget behavior.
10. Automated scans in each material rendered state.

### 11.3 Cross-condition stress tests

Real settings combine. At minimum, try:

- keyboard + 400% zoom;
- screen reader + invalid form submission;
- screen reader + reduced motion for animated focus lifecycle;
- forced colors + keyboard focus;
- forced colors + selected/error/disabled states;
- narrow viewport + long translated content;
- text spacing + dialog + validation;
- session timeout + keyboard + screen reader;
- slow network + status announcements + retry.

### 11.4 Include disabled people

Expert testing identifies many standards and implementation defects. Research with disabled participants identifies strategy mismatches, comprehension barriers, effort, trust, and failures that checklists miss. Recruit relevant people, provide compatible prototypes and assistive technology, compensate participants fairly, avoid collecting unnecessary disability data, and preserve the participant's familiar settings when possible.

Do not ask a single disabled participant to certify accessibility for a population. Treat findings as evidence about the tested tasks, people, and conditions.

---

## 12. Defects, exceptions, and evidence

### 12.1 Defect record

Use a reproducible record:

```md
## [A11Y-###] Short user-impact title

- Task and state:
- User impact:
- WCAG criterion / product requirement:
- Environment: OS, browser, AT, versions, viewport, zoom, preferences
- Build or commit:
- Preconditions and data:
- Steps to reproduce:
- Actual result:
- Expected result:
- Evidence: screenshot, video, speech log, DOM/accessibility-tree excerpt, tool output
- Scope: component, routes, variants, languages
- Severity and rationale:
- Owner:
- Fix verification:
- Regression test:
```

Do not paste long screen-reader speech as the only evidence. State what information or operation is unavailable and why it blocks or increases effort.

### 12.2 Severity by user consequence

| Severity | User consequence | Examples |
|---|---|---|
| Blocker | A user cannot complete a critical task, access essential information, escape a state, or avoid serious harm | Keyboard trap; inaccessible authentication; submit control missing at zoom; modal content absent from AT |
| Major | Task completion is possible only through a burdensome workaround, assistance, or substantial risk | Errors not associated or announced; drag-only reorder; focus lost after every action |
| Moderate | Material confusion, delay, repeated effort, or partial information loss | Poor heading structure; status not announced but discoverable; target smaller than requirement |
| Minor | Local friction with low task impact but a real requirement or consistency defect | Redundant announcement; isolated focus style inconsistency that remains perceivable |

WCAG level does not determine product severity. A Level A defect can be low impact in one context; a Level AA authentication defect can block the product. Consider task criticality, affected users, frequency, persistence, workarounds, harm, and scope.

### 12.3 Exception record

When relying on a WCAG exception or declaring content essential, record:

- exact criterion and normative definition;
- exact content or interaction in scope;
- why the exception applies;
- alternatives considered;
- impact on disabled users;
- supporting evidence and reviewer;
- compensating access or fallback;
- expiry/review trigger.

“The component library does it” and “the tool did not flag it” are not exceptions.

### 12.4 Conformance language

Use precise statements:

- “No violations were detected by axe-core 4.x in the five listed states.”
- “The checkout task passed the documented keyboard protocol in Chrome 1xx on Windows 11.”
- “NVDA 2026.1.1 with the tested browser announced the updated results count.”
- “An expert audit found no failures against the listed WCAG 2.2 A/AA criteria in this release scope.”

Avoid:

- “The page is 100% accessible.”
- “Lighthouse says we are WCAG compliant.”
- “Works with screen readers” without naming pairs and tasks.
- “Passes AA” when only selected criteria or pages were checked.

---

## 13. Definition of done

A web experience is ready for an accessibility handoff only when all applicable items below are true.

### Requirements and implementation

- [ ] Supported environments, tasks, states, content, third parties, and WCAG target are documented.
- [ ] Every applicable WCAG 2.2 Level A and AA criterion has evidence or a documented, reviewed exception.
- [ ] Semantic HTML and native controls are used where they fit.
- [ ] Custom widgets have documented names, roles, states, keyboard behavior, focus lifecycle, and AT evidence.
- [ ] Content structure, reading order, page language, titles, headings, landmarks, lists, and tables are meaningful.
- [ ] Images and media have verified alternatives, captions, transcripts, or descriptions as applicable.
- [ ] Forms expose labels, instructions, required state, errors, suggestions, autocomplete, and recovery.
- [ ] Dynamic status, loading, errors, and success are visible and programmatically exposed without excessive announcements.
- [ ] Pointer gestures, drag, motion actuation, and hover interactions have required alternatives.
- [ ] Color, motion, position, shape, sound, and timing are not the only way to access essential meaning or action.

### Manual verification

- [ ] Every critical task completes with keyboard only, forward and backward.
- [ ] Focus is visible, meaningful, persistent, and not entirely obscured.
- [ ] Dialogs, popovers, menus, disclosures, composite widgets, and route changes follow documented focus behavior.
- [ ] Critical tasks complete with the primary supported screen-reader/browser pair.
- [ ] High-risk custom behavior is checked in a second supported pair.
- [ ] Content and functionality survive 200% text/zoom.
- [ ] Ordinary vertical content reflows at 320 CSS px/400% without two-dimensional scrolling.
- [ ] The text-spacing override causes no loss or overlap.
- [ ] Critical tasks work in native forced-colors/high-contrast mode.
- [ ] Critical tasks work with reduced motion, including runtime state and focus cleanup.
- [ ] Empty, loading, partial, stale, invalid, success, timeout, permission, offline, and resumed states are tested where applicable.
- [ ] Cross-condition tests cover keyboard + zoom, forced colors + focus, and screen reader + validation.

### Automation and provenance

- [ ] Lint, component, browser scan, and end-to-end checks appropriate to the stack pass.
- [ ] Material interactive states are opened and scanned.
- [ ] Tool, rule, browser, and test-library versions are recorded.
- [ ] Suppressions are scoped, owned, justified, linked, and scheduled for review.
- [ ] Reports distinguish automated detection from manual judgment and conformance review.
- [ ] Defects include user impact, exact environment, reproduction steps, expected result, and fix evidence.
- [ ] Accessibility regressions have focused automated tests where automation can reliably detect them.
- [ ] Disabled-user research has been performed for material or high-risk experiences, or its absence and resulting risk are explicit.

### Release claim

- [ ] The claim names the exact release, pages/processes, standard/version/level, technologies relied upon, evaluation date, and known exclusions.
- [ ] Legal, contractual, and procurement requirements were checked separately where applicable.
- [ ] No one presents an automated score as proof of conformance.

---

## 14. Research basis and source notes

### 14.1 Normative and standards sources

- W3C. [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/). Normative Recommendation defining success criteria and conformance.
- W3C WAI. [What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/). Informative summary of changes from WCAG 2.1.
- W3C WAI. [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/). Informative intent, benefits, examples, and techniques for individual criteria.
- W3C. [ARIA in HTML](https://www.w3.org/TR/html-aria/). Normative constraints on ARIA use in HTML.
- W3C. [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/). Normative roles, states, and properties.
- W3C. [CSS Color Adjustment Module Level 1](https://www.w3.org/TR/css-color-adjust-1/). Forced colors, system colors, and `forced-color-adjust` behavior.
- CSS Working Group. [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/). Current specification work for user-preference media features including `prefers-reduced-motion`, `forced-colors`, and `prefers-contrast`; its draft status should be considered when citing stability.
- W3C. [Accessibility Conformance Testing Rules Format 1.1](https://www.w3.org/TR/act-rules-format/). Format for reusable accessibility test rules.

### 14.2 W3C implementation and evaluation guidance

- W3C WAI. [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/). Informative patterns, practices, and examples for accessible widgets.
- W3C WAI. [Developing a Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/). Focus and composite-widget keyboard practices.
- W3C WAI. [Providing Accessible Names and Descriptions](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/). Naming methods and cautions.
- W3C WAI. [Modal Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). Informative dialog keyboard and focus behavior.
- W3C WAI. [Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/). Evaluation methods and the requirement for human judgment.
- W3C WAI. [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/test-evaluate/tools/list/). Searchable tool inventory; listing is not endorsement.
- W3C ARIA-AT Community Group. [ARIA-AT interoperability reports and tests](https://aria-at.w3.org/). Evidence about ARIA pattern behavior across browser/AT combinations.

### 14.3 Product and tool documentation

- NV Access. [NVDA User Guide](https://download.nvaccess.org/documentation/userGuide.html). Current NVDA commands, modes, settings, and supported behavior.
- Apple. [VoiceOver User Guide: web navigation](https://support.apple.com/guide/voiceover/intro-to-advanced-navigation-vo27974/mac). VoiceOver web navigation and rotor behavior.
- Deque Systems. [axe-core repository and documentation](https://github.com/dequelabs/axe-core). Rules, integrations, versioning, and environment limits.
- Microsoft. [Playwright accessibility testing](https://playwright.dev/docs/accessibility-testing). Browser-based axe integration and explicit automation limits.
- Google Chrome Developers. [Lighthouse accessibility scoring](https://developer.chrome.com/docs/lighthouse/accessibility/scoring). Scope and limitations of the Lighthouse accessibility score.
- Accessibility Insights. [Accessibility Insights for Web overview](https://accessibilityinsights.io/docs/web/overview/). Automated checks and guided manual assessment workflow.
- jsx-eslint. [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y). Static JSX accessibility linting rules and configuration.

### 14.4 Interpretation limits

- WCAG defines testable outcomes, not a single implementation recipe. Code patterns in this guide are examples that require product-specific adaptation and testing.
- Understanding documents and APG are informative. They help interpret and implement normative requirements but do not replace them.
- Browser, operating-system, assistive-technology, and automation behavior changes. Re-verify versions and support before a release or formal claim.
- Automated tools cover only part of WCAG and cannot judge overall usability, clarity, or conformance.
- A test result is bounded by its task, build, content, state, environment, and method.
- WCAG AA is a baseline. It does not prove that the experience is accessible to every disabled person, cognitively clear, legally compliant, or equally efficient.

The defensible synthesis is simple: build on native platform semantics, specify behavior in user terms, verify complete tasks under real adaptation settings, automate deterministic checks, retain provenance, and keep every claim no broader than the evidence.

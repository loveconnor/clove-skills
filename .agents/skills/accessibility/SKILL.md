---
name: accessibility
description: Design, implement, audit, and verify accessible digital interfaces against WCAG 2.2 AA and real assistive-use conditions. Use for semantic HTML, keyboard and focus behavior, screen-reader support, names and descriptions, forms and errors, zoom and reflow, text spacing, forced colors, contrast, reduced motion, flashing, target size, automated accessibility checks, manual test protocols, accessibility defects, and conformance evidence.
---

# Accessibility

## Operating principle

Make the complete core task perceivable, operable, understandable, and robust for disabled people under realistic conditions. Treat WCAG conformance as a baseline and automated checks as partial evidence.

## Load the detailed research

Read `references/research.md` for substantial implementation, audits, conformance decisions, test planning, exceptions, or unfamiliar WCAG interpretation.

Useful searches:

```sh
rg -n '^## (2|3|4)\.|conformance|contract|control map' references/research.md
rg -n '^## (5|6)\.|keyboard|focus|screen.reader|name|description' references/research.md
rg -n '^## (7|8|9)\.|zoom|reflow|text spacing|forced colors|motion|flashing' references/research.md
rg -n '^## (10|11|12|13)\.|automated|manual test|defect|exception|done' references/research.md
```

## Workflow

### 1. Define the accessibility contract

Identify users, core tasks, content, supported platforms, target standard, technologies, inputs, assistive technologies, zoom conditions, themes, motion settings, and evidence required. Target WCAG 2.2 AA unless the product requires more.

### 2. Model semantics and behavior

Choose native HTML and platform controls first. Define landmarks, headings, names, descriptions, states, relationships, reading order, focus order, validation, status announcements, dialogs, menus, tables, and dynamic updates before styling.

### 3. Implement the core task

- Make every action keyboard operable without a pointer-specific path.
- Keep focus visible, logical, persistent, and unobscured.
- Expose correct role, name, state, value, and relationships.
- Associate labels, instructions, errors, and status with their controls.
- Do not rely only on color, position, shape, sound, hover, drag, gesture, or motion.
- Preserve content and operation at text enlargement, zoom, reflow, and text-spacing overrides.
- Respect forced colors and system contrast; keep controls and focus distinguishable.
- Honor reduced-motion preferences and provide control over non-essential movement.
- Prevent dangerous flashing and provide accessible alternatives to time, gesture, or precision demands.

### 4. Verify in layers

Run structural and automated checks early, but verify the rendered interface manually. Test the full task with keyboard, representative screen-reader/browser combinations, 200% and 400% zoom or reflow as applicable, enlarged text, text-spacing overrides, forced colors, reduced motion, touch and target size, content extremes, errors, and responsive layouts.

### 5. Record defects by user impact

State the affected task and user, exact condition, observed behavior, expected behavior, relevant criterion, reproduction steps, evidence, severity, and concrete fix. Do not report only a rule number or tool output.

### 6. Re-test and document limits

Re-test the fix with the method that exposed the defect and relevant regression checks. Record platform coverage, untested combinations, exceptions, compensating paths, owners, expiry, and any conformance-claim limits.

## Implementation rules

- Do not recreate a native control without a requirement that justifies the semantic and interaction cost.
- Never add ARIA to repair incorrect native structure when native HTML can express the behavior.
- Do not move focus unless the interaction requires it and the destination is predictable.
- Make validation prevent, identify, explain, and help recover from errors.
- Keep authentication and security flows accessible; do not make a disability accommodation the weaker or stigmatized path.
- Test generated names and announcements for duplication, verbosity, stale state, and hidden content.
- Re-verify time-sensitive standards, browser behavior, and assistive-technology support.

## Evidence and handoff

Report target and scope, tested task paths, environments and assistive technologies, automated results, manual results, defects and severity, exceptions, untested conditions, and residual risk. Never claim accessibility or conformance from automation alone.

Combine with `ux` for task and interaction design, `color` for semantic color and contrast, `clear-writing` for instructions and errors, and `clean-code` for implementation.

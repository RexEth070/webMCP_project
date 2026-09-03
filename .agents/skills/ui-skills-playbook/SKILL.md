---
name: ui-skills-playbook
description: The complete 47-rule UI Playbook from ui-skills.com. Enforces senior design-engineering heuristics for layout, typography, micro-interactions, motion, contrast, touch targets, and accessibility.
---

# The UI Skills Master Playbook (47 Design Engineering Rules)

Follow these 47 non-negotiable design engineering heuristics across all UI and frontend work:

## 1. Layout, Spacing & Structure
1. **Prevent layout shifts with aspect ratio** (`reserve-space-with-aspect-ratio`): Always set `aspect-ratio` on media and containers so nearby content never jumps while images/data load.
2. **Match border radius on nested elements** (`use-concentric-border-radius`): Set inner radius equal to `outer_radius - padding` so borders curve concentrically without awkward gaps.
3. **Group content with spacing, not dividers** (`group-with-space-not-lines`): Use clear 8px/16px/24px whitespace hierarchy to separate groups before defaulting to dividing lines.
4. **Use shadows to show visual depth, borders for structure** (`use-shadow-for-elevation`): Never combine heavy borders with heavy shadows. Use subtle shadows for z-index elevation and 1px subtle borders for structural containment.
5. **Keep full-width buttons inside page margins** (`inset-primary-actions`): Never stretch primary buttons edge-to-edge; keep them padded within container gutters.
6. **Add space between nearby controls** (`give-targets-breathing-room`): Maintain at least 8px to 12px between interactive bordered controls.
7. **Fade the edges of scrollable lists** (`fade-scroll-edges`): Apply CSS `mask-image: linear-gradient(...)` to indicate continuation rather than hard clipped scrollbars.
8. **Preview the next item in scroll lists** (`peek-the-next-scroll-item`): Expose 16px to 32px of the next card in horizontal scrollers.

## 2. Typography & Numbers
9. **Align numbers with tabular-nums** (`use-tabular-nums-for-data`): Always apply `font-variant-numeric: tabular-nums` on metric counters, prices, timestamps, and table rows to prevent jitter.
10. **Balance heading text for easier reading** (`use-text-balance`): Use `text-wrap: balance` on headers and `text-wrap: pretty` on paragraphs to eliminate orphans.
11. **Keep body text lines easy to read** (`cap-line-length`): Constrain prose lines between 60 and 75 characters (`max-w-prose` or `max-width: 65ch`).
12. **Use tighter line height for headings** (`tighten-heading-line-height`): Set `line-height: 1.05 - 1.15` for display titles and `1.4 - 1.6` for body.
13. **Adjust letter spacing for large text** (`tune-tracking-by-size`): Large display headings require tighter tracking (`-0.02em` to `-0.03em`); micro text requires loose tracking (`+0.04em`).
14. **Truncate long titles in small spaces** (`clamp-overflowing-titles`): Apply `text-overflow: ellipsis` with bounded `max-width` or `line-clamp: 2` to avoid pushing badges outside cards.
15. **Fade overflowing text instead of hard clipping** (`fade-truncated-text`): Use mask gradient fades on table chips and badges.
16. **Use sentence case for UI labels** (`use-sentence-case-labels`): Write natural sentence case rather than shouting ALL-CAPS or rigid Title Case.

## 3. Colors, Accents & Accessibility
17. **Limit each view to one accent color** (`limit-accent-color-usage`): Choose one primary semantic accent per surface; keep secondary elements neutral (slate/zinc).
18. **Reserve brand colors for links and actions** (`reserve-brand-color-for-links`): Keep headlines neutral (#f8fafc); apply brand accents only to interactive targets.
19. **Improve contrast for muted text** (`keep-secondary-text-readable`): Ensure secondary text passes WCAG AA contrast (at least 4.5:1 against card background).
20. **Use 44px touch targets for accessibility** (`use-large-touch-targets`): Every clickable button, pill, or trigger must have at least a 44x44px hit target on touch/pointer.
21. **Add visible keyboard focus rings** (`show-visible-focus-rings`): Always style `:focus-visible` with high-contrast outlines (`outline: 2px solid var(--accent-primary)`, offset 2px).
22. **Never use color alone for status** (`pair-status-with-labels`): Always pair colored status badges with icons or text labels (e.g. checkmark or label next to green dot).
23. **Use neutral borders around images** (`outline-images-neutrally`): Never place saturated colorful borders around avatars or thumbnails; use `rgba(255, 255, 255, 0.08)`.
24. **Avoid glow effects on primary buttons** (`avoid-glow-primary-actions`): Never use fuzzy colored shadows under buttons; rely on clean value contrast.
25. **Use solid modal backdrops instead of heavy blur** (`use-solid-modal-scrims`): Heavy full-screen backdrop blurs cause GPU memory lag on lower-end devices; use `rgba(0, 0, 0, 0.7)`.

## 4. Motion, Animations & Physics
26. **Add scale feedback to pressed buttons** (`add-scale-on-press`): Add micro press feedback with `:active { transform: scale(0.97); }` (100ms ease).
27. **Use ease-out for entrance animations** (`use-ease-out-on-enter`): Entrances should use `cubic-bezier(0.16, 1, 0.3, 1)` or `ease-out`. Never use `ease-in` which feels laggy.
28. **Avoid scale-zero entrance animations** (`avoid-entering-from-scale-zero`): Popovers and dialogs should scale from 95% (`scale(0.95) -> scale(1.0)`), never 0%.
29. **Animate popovers from their trigger** (`anchor-popovers-to-triggers`): Position origin from the opening button with `transform-origin: top left`.
30. **Keep exit animations short and subtle** (`keep-exits-subtle`): Exits must be 120ms to 150ms with a slight opacity fade and subtle 4px translation.
31. **Enter and exit on the same path** (`enter-and-exit-on-the-same-path`): Match symmetrical motion directions so elements feel anchored.
32. **Use interruptible CSS transitions** (`use-interruptible-transitions`): Never use non-cancellable blocking animations that lock out human interaction.
33. **Avoid repeated animations in routine UI** (`restrain-high-frequency-motion`): Animate first-load entrances, but keep repeated tab switches and filter clicks instant.
34. **Use ease-out instead of springs for feedback** (`use-ease-not-spring-for-feedback`): Use clean `ease-out` for toggles, switches, and toasts because springs wobble and look toyish.
35. **Fade menus out when they close** (`fade-menus-out`): Dropdown menus should simply fade out (`opacity: 0`, 100ms) rather than sliding far across the screen.
36. **Stagger hero animations on first load** (`stagger-infrequent-entrances`): Stagger hero cards by 60ms - 80ms on initial page load only.
37. **Animate icon state changes smoothly** (`animate-icon-state-changes`): Cross-fade switching icons with opacity and scale.
38. **Soften label changes with a short blur** (`blur-imperfect-label-morphs`): Soften morphing text counters with a 1px blur transition to eliminate harsh frame jumps.

## 5. Forms, Controls & Polish
39. **Add visible labels to every form field** (`label-every-form-field`): Placeholders are not labels. Always provide persistent visible labels.
40. **Show form errors next to each field** (`show-errors-beside-fields`): Display error alerts directly beneath the failing input.
41. **Give empty states one clear action** (`give-empty-states-one-action`): Every zero-data state must have a single prominent CTA button (e.g. "Load Sample Dataset").
42. **Confirm destructive actions before they run** (`confirm-destructive-actions`): Use modal confirmation dialogs before dropping tables or wiping state.
43. **Match icon stroke weight to text** (`match-icon-stroke-weight`): Pair 1.5px stroke icons with normal text and 2px stroke icons with semibold/bold text.
44. **Align icons by eye for better balance** (`align-icons-optically`): Nudge play arrows and asymmetric icons by 1px to 2px for visual centering.
45. **Use outline icons for default states** (`use-outline-icons-by-default`): Default states use clean stroked outlines; use solid fills only for active/selected states.
46. **Show nearby tooltips faster** (`warm-toolbar-tooltips`): After the first tooltip opens, subsequent nearby tooltips should show with 0ms delay.
47. **Match loading skeletons to real content** (`use-structural-skeletons`): Design shimmer skeleton shapes to match the exact dimensions of final cards and tables.

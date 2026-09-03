---
name: open-props
description: Complete guide and design token dictionary for Open Props (open-props.style). Use when styling web interfaces with modern CSS variables, layered shadows, fluid typography, spring physics easings, and modular CSS PropPacks.
---

# Open Props: Design Tokens & CSS Supercharged

Open Props provides 500+ standard CSS custom properties for building modern, framework-agnostic interfaces.

## 1. Quick Setup in Projects

### Via NPM (Vite / Next.js / Astro / Webpack):
```bash
npm install open-props
```

In your main CSS or layout entrypoint:
```css
/* Import all Open Props */
@import "open-props/style";

/* Optional: Minimal HTML5 reset / normalize */
@import "open-props/normalize";
```

### Via CDN (Vanilla HTML / Fast Prototyping):
```html
<link rel="stylesheet" href="https://unpkg.com/open-props">
<link rel="stylesheet" href="https://unpkg.com/open-props/normalize.min.css">
```

---

## 2. Core Token Dictionary

### A. Spacing & Sizes
- **Fixed scale**: `var(--size-1)` (4px), `var(--size-2)` (8px), `var(--size-3)` (12px), `var(--size-4)` (16px), `var(--size-5)` (20px), `var(--size-6)` (24px), `var(--size-7)` (32px), `var(--size-8)` (40px)... up to `var(--size-15)`.
- **Fluid scale** (auto-scales with viewport without media queries):
  - `var(--size-fluid-1)` (small responsive padding)
  - `var(--size-fluid-2)` (medium container margins)
  - `var(--size-fluid-3)` (large hero section spacing)

### B. Elevation & Realistic Shadows
Never use single harsh box shadows. Open Props provides multi-layered soft elevation:
- `var(--shadow-1)`: Subtle card resting border / elevation
- `var(--shadow-2)`: Raised card / dropdown menu
- `var(--shadow-3)`: Hover state elevation
- `var(--shadow-4)`: Modal dialog / floating drawer
- `var(--shadow-5)`: High-impact overlay
- `var(--shadow-6)`: Deep hero showcase
- **Inner shadows**: `var(--inner-shadow-0)`, `var(--inner-shadow-1)` (for pressed buttons & inputs).

### C. Border Radius
- `var(--radius-1)` (2px - micro badges)
- `var(--radius-2)` (5px - buttons, inputs)
- `var(--radius-3)` (8px - standard cards)
- `var(--radius-4)` (12px - large panels)
- `var(--radius-5)` (16px - hero containers)
- `var(--radius-6)` (24px - display sections)
- `var(--radius-round)` (9999px - pills / avatars)

### D. Motion, Easings & Spring Physics
- **Ease Out (Entrances)**: `var(--ease-out-1)` to `var(--ease-out-5)`
- **Spring Physics (Bouncy / Interactive)**:
  - `var(--ease-spring-1)` (snappy micro-interaction)
  - `var(--ease-spring-2)` (card hover pop)
  - `var(--ease-spring-3)` (playful feedback)
- **Squish (Press feedback)**: `var(--ease-squish-1)` to `var(--ease-squish-5)`
- **Pre-built CSS Animations**:
  - `animation: var(--animation-fade-in);`
  - `animation: var(--animation-fade-out);`
  - `animation: var(--animation-scale-up);`
  - `animation: var(--animation-slide-in-up);`
  - `animation: var(--animation-shake);`

### E. Typography Tokens
- **Font Sizes**: `var(--font-size-00)` (10px) to `var(--font-size-8)` (96px)
- **Fluid Type**: `var(--font-size-fluid-0)` to `var(--font-size-fluid-3)`
- **Line Heights**: `var(--font-lineheight-00)` (0.95 - display headers) to `var(--font-lineheight-4)` (1.75 - prose body)
- **Letter Spacing**: `var(--font-letterspacing-0)` (-0.05em) to `var(--font-letterspacing-7)` (0.25em)

### F. Scroll Fade Masks
To fade the edges of scrollable containers (matching UI Playbook Rule 35):
```css
.scroll-container {
  overflow-x: auto;
  mask-image: var(--mask-edge-right);
}
```

---

## 3. Best Practices for Design Engineering
1. **Combine with UI Playbook**: Always use `var(--ease-out-2)` for entrances and subtle transitions.
2. **Tabular Data**: Pair with `font-variant-numeric: tabular-nums` for metric dashboards.
3. **Touch Targets**: Ensure buttons with `padding: var(--size-2) var(--size-3)` still hit at least `min-height: 44px`.
4. **Accessible Motion**: Always wrap spring animations with `@media (prefers-reduced-motion: no-preference)`.

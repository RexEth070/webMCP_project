---
name: coss-ui
description: Complete guide, CLI workflows, component recipes, and Base UI primitives for Coss UI (coss.com/ui), the Cal.com design system built with Tailwind CSS v4, Base UI, and shadcn CLI. Use when building high-end B2B, SaaS, scheduling, or analytics web apps.
---

# Coss UI: Cal.com Design System & Base UI Primitives

Coss UI (`coss.com/ui`) is the open-source production design system of **Cal.com**, built on top of **Tailwind CSS v4** and headless **Base UI** (`@base-ui/react` by the MUI team).

---

## 1. Quick Setup & CLI Commands

### New Projects (Coss Style Preset):
```bash
# Initializes Tailwind v4, Base UI, Inter/Geist fonts, and full Cal.com style tokens
pnpm dlx shadcn@latest init @coss/style
# or
npx shadcn@latest init @coss/style
```

### Existing Projects:
```bash
# Install core dependencies
npm install @base-ui/react class-variance-authority clsx tailwind-merge

# Add all Coss UI components
pnpm dlx shadcn@latest add @coss/ui

# Or add individual components
pnpm dlx shadcn@latest add @coss/ui/button
pnpm dlx shadcn@latest add @coss/ui/segmented-control
pnpm dlx shadcn@latest add @coss/ui/calendar
pnpm dlx shadcn@latest add @coss/ui/drawer
```

---

## 2. Core Architecture: Base UI over Radix

Unlike older shadcn libraries built on Radix UI, Coss UI is built natively on **Base UI** (`@base-ui/react`):
- **`useRender` & `mergeProps`**: Seamless prop composition without wrapper hell.
- **Micro-Animations & Edge Masks**: Built-in `base-ui-disable-scrollbar` and scroll-area fade gradients.
- **Superior Performance**: Smaller bundle size, no layout thrashing, and zero runtime CSS overhead.

---

## 3. Semantic Status Design Tokens

Coss UI introduces extended semantic status tokens into the CSS root:

```css
:root {
  /* Extended Coss Status Colors */
  --info: 217 91% 60%;
  --info-foreground: 210 40% 98%;

  --success: 142 76% 36%;
  --success-foreground: 355 100% 97%;

  --warning: 38 92% 50%;
  --warning-foreground: 48 96% 89%;

  --destructive-foreground: 0 84% 60%;

  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --font-heading: 'Inter', sans-serif;
  --font-mono: 'Geist Mono', monospace;
}
```

---

## 4. Key Components Catalog

- **Segmented Control**: Perfect for grain selectors (Day / Week / Month / Year).
- **Number Field & OTP Field**: High-precision numerical inputs with increment/decrement steppers.
- **Calendar & Date Picker**: Cal.com's battle-tested scheduling and date-range picking engine.
- **Sheet / Drawer**: Accessible sliding overlays for settings, filters, and agent drawers.
- **Scroll Area with Edge Masks**: Fades the top and bottom edges of scrollable content when overflow occurs.
- **Command Palette (`⌘K`)**: Instant fuzzy search dialog for actions, navigation, and shortcuts.

---

## 5. Senior Design-Engineering Heuristics
1. **Always use `tabular-nums`** for timers, dates, and metric counters.
2. **Concentric border radius**: Inner cards must have `border-radius: calc(var(--radius) - 2px)` to avoid corner clipping.
3. **Accessibility**: All dialogs and popovers automatically manage focus traps, `aria-haspopup`, and Escape key restoration via Base UI.

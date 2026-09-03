---
name: baseline-ui
description: Enforces an opinionated UI baseline to prevent AI-generated interface slop. Quick cleanup pass for hierarchy, spacing, typography, and accessibility.
---

# Baseline UI: Anti-Slop Interface Protocol

## Strict Aesthetic Constraints:
- BANNED: Neon purple/violet gradients, dark cyberpunk glows, rounded-full giant card pills, and unstyled raw tables.
- PALETTE: Refined dark neutral slate/zinc (`#0c0d14`, `#10121d`, `#141724`) with subtle 1px borders (`rgba(255, 255, 255, 0.08)`).
- TYPOGRAPHY: Geist / Inter for editorial UI headlines; JetBrains Mono for metrics and tabular numbers.
- ICONS: Lucide React only with consistent 14-16px sizing and matched stroke weights.
- TOUCH TARGETS: Minimum 44px hit targets on interactive controls.
- STATES: Dedicated optimistic UI indicators, toasts, and loading shimmers.

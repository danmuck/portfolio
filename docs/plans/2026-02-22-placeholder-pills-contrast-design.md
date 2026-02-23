# Placeholder Pills & Contrast Design

**Date:** 2026-02-22
**Scope:** `app/components/global/ProjectItem.tsx`

## Problem

1. **Placeholder pills** — tech items without a logo in `TechLogoMap` fall back to `<Chip variant="outlined">`. These plain outlined chips have poor visual weight compared to the 32px SVG logo icons beside them, and near-invisible contrast against the dark mode paper (`#506e75`).

2. **Completed checklist contrast** — `color="success.main"` renders `#40614c` in dark mode against paper `#506e75`. Both are mid-teal tones, making completed items nearly unreadable.

## Design Decisions

### Placeholder pills (line 88)

Replace `<Chip variant="outlined" size="medium" />` with a filled chip:

| Property | Value | Rationale |
|---|---|---|
| `bgcolor` | `info.dark` | Resolves to `#238b99` (light) / `#04c4de` (dark) via MUI CSS vars — matches card `borderLeft` accent |
| `color` | `#fff` (light) / `#111` (dark) | `#111` on `#04c4de` ≈ 10.9:1 (AAA); `#fff` on `#238b99` ≈ 3.9:1 + weight 600 |
| `fontWeight` | `600` | Compensates for borderline contrast in light mode at small size |
| `height` | `32px` | Matches SVG icon row height |
| `border` | none | Drop outlined variant |

Dark mode color override uses `.dark &` selector (MUI `colorSchemeSelector: 'class'` default).

### Completed checklist items (line 142)

Change `color={item.completed ? "success.main" : "text.secondary"}` to `"success.dark"`:

| Token | Light | Dark |
|---|---|---|
| `success.main` | `#40614c` | `#40614c` — fails on both papers |
| `success.dark` | `#18967d` | `#02d4a3` — bright cyan-green, readable on `#506e75` |

## Files Changed

- `app/components/global/ProjectItem.tsx` — chip sx + checklist color token only

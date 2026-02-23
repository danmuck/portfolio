# Placeholder Pills & Contrast Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace unstyled outlined chips with visually-weighted info-accent pills and fix low-contrast completed checklist items in dark mode.

**Architecture:** Both changes are confined to `app/components/global/ProjectItem.tsx`. The chip's `bgcolor` uses MUI's `info.dark` palette token (auto-switches via CSS variables per color scheme). Dark-mode text override uses `.dark &` nested selector per the theme's `colorSchemeSelector: 'class'` setting. Checklist fix swaps `success.main` → `success.dark` which resolves to a brighter value in dark mode.

**Tech Stack:** Next.js 15, MUI v7 (CSS variables / colorSchemeSelector: 'class'), Emotion

---

### Task 1: Update placeholder chip style

**Files:**
- Modify: `app/components/global/ProjectItem.tsx:88`

**Step 1: Open the file and locate the fallback chip**

In `ProjectItem.tsx`, find the ternary in the `tech.map()` block (around line 78–90):

```tsx
) : (
  <Chip key={t} label={t} variant="outlined" size="medium" />
)
```

**Step 2: Replace with filled info-accent chip**

```tsx
) : (
  <Chip
    key={t}
    label={t}
    size="medium"
    sx={{
      height: 32,
      bgcolor: 'info.dark',
      color: '#fff',
      fontWeight: 600,
      fontSize: '0.8rem',
      borderRadius: 1,
      '.dark &': {
        color: '#111',
      },
    }}
  />
)
```

Notes:
- `bgcolor: 'info.dark'` resolves to `#238b99` (light) / `#04c4de` (dark) automatically via MUI CSS vars
- `height: 32` matches the 32px SVG logo icons in the same row
- `.dark &` works because `theme.ts` sets `colorSchemeSelector: 'class'` — MUI toggles a `.dark` class on `<html>`
- No `variant` prop needed — absence of `variant="outlined"` defaults to filled appearance with explicit `bgcolor`

**Step 3: Verify in dev server — light mode**

Navigate to `http://localhost:3000/portfolio/projects/` (or whatever the dev URL is). Check any project card that has placeholder pills (e.g. "Kademlia DHT" → protobuf, gRPC). Confirm:
- Pills are filled teal, white text, same row height as logo icons
- No border ring visible

**Step 4: Verify in dev server — dark mode**

Toggle dark mode. Confirm:
- Pills are bright cyan (`#04c4de`), dark text (`#111`)
- Pills are clearly visible against paper background `#506e75`

---

### Task 2: Fix completed checklist contrast

**Files:**
- Modify: `app/components/global/ProjectItem.tsx:142`

**Step 1: Locate the checklist color prop**

Find (around line 139–143):

```tsx
<Typography
  variant="body2"
  color={item.completed ? "success.main" : "text.secondary"}
>
```

**Step 2: Change `success.main` to `success.dark`**

```tsx
<Typography
  variant="body2"
  color={item.completed ? "success.dark" : "text.secondary"}
>
```

`success.dark` resolves to `#18967d` (light) / `#02d4a3` (dark).
In dark mode: `#02d4a3` (bright cyan-green) against paper `#506e75` is clearly legible.

**Step 3: Verify — expand a project card in dark mode**

Toggle dark mode, expand a project card with completed items (e.g. "Portfolio" → "Deployed and live"). Confirm completed items render in a clearly visible bright green, not the near-invisible teal from before.

**Step 4: Verify — light mode**

Toggle back to light. Confirm completed items still read as a distinct green (not too bright, not missing).

---

### Task 3: Commit

After both tasks verify cleanly in browser:

```bash
git add app/components/global/ProjectItem.tsx
git commit -m "fix: info-accent placeholder pills and dark mode checklist contrast"
```

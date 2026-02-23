# Portfolio Redesign — Design Document
**Date:** 2026-02-22
**Branch:** dev
**Status:** Approved

---

## Context

Personal portfolio site built on Next.js 15 / MUI v7 / TypeScript. Currently barebones with placeholder content, broken nav links, and no coherent visual identity. This redesign brings the site to a production-quality state while preserving the existing stack and `MyInfoCard` component (do not modify).

**Audience:** Both recruiters/employers and engineering peers/collaborators.
**Future:** Site will later incorporate a contracting/consulting business — architecture should leave room for a `/services` page and a CTA band without requiring restructuring.

---

## Visual System

**Palette** — no theme changes:
- Primary chrome (nav/footer): `#000` / `#fff` — already correct
- Accent 1 (cyan): `theme.palette.info.light` → `#04c4de` — tech chips, hover underlines, active states
- Accent 2 (teal): `theme.palette.success.light` → `#02d4a3` — completed checklist items, featured badges
- Card/background colors stay as-is

**Typography** — Roboto, weight + scale contrast only (no new fonts):
- Section labels: `variant="overline"` with `letterSpacing: 2px` — editorial quality
- Section headers: `variant="h4"` or `h5`, `fontWeight: 700`, `letterSpacing: -0.5px`
- Body: `body1` / `body2` at weight 400

**Borders as design elements:**
- Cards: `borderLeft: '3px solid'` using cyan/teal accent
- Section dividers: MUI `<Divider>` with `sx={{ borderColor: 'info.light', opacity: 0.4 }}`
- This is the unifying "edge" detail across all pages

**Silhouette imagery:**
- `banner.svg` and `full_logo.svg` used as large low-opacity background elements on landing hero
- ~10% opacity on dark backgrounds creates atmosphere; these remain abstract/elusive

---

## Pages

### 1. Header (`app/components/global/Header.tsx`)

**Changes:**
- Fix logo `Link` href: `/users/danmuck/profile` → `/`
- Fix Blog button href: `/about` → `/blog` (will 404 gracefully — correct route intent)
- Visual: no structural changes needed — black AppBar is already correct

---

### 2. Footer (`app/components/global/Footer.tsx`)

**Changes:**
- Fix frontend tech stack copy: `"Next.js // React // Typescript // Tailwind CSS"` → `"Next.js // React // TypeScript // MUI"`
- Keep all visual structure exactly as-is (black/white, logo strip)

---

### 3. Landing Page (`app/page.tsx`)

**Remove:**
- "UNDER CONSTRUCTION" banner (`Typography` with `bgcolor: 'error.main'`)
- `(TMP)` text node
- Duplicate social links `Box` at the bottom (GitHub/LinkedIn icons + logo)
- Empty "Project Showcase" and "Aspirations" warning-colored boxes

**Hero Row** (replaces current Grid):
- Left column: `MyInfoCard` inside a `Box` with `position: 'relative'`; `banner.svg` as an absolute background element at ~10% opacity for depth behind the card
- Right column: identity block
  - Name heading (`Typography h4 fontWeight:700`)
  - Role label (`Typography overline` in `info.light` cyan): e.g., `"SOFTWARE ENGINEER"`
  - 2–3 sentence bio replacing the generic welcome text
  - GitHub + LinkedIn icon buttons (clean, no logo duplication)

**Project Showcase Section** (`// SELECTED WORK`):
- Section label: `Typography overline` — `"// SELECTED WORK"`
- `Divider` with cyan tint above
- 2-column `Grid` of compact featured project cards (4 highlights: Kademlia DHT, Raft KV Store, dps_office, Bytecode Interpreter)
- Each compact card: title + one-line description + tech chips + `"View all →"` link to `/projects`
- `Divider` below

**Interests Section** (`// INTERESTS`):
- Section label: `Typography overline` — `"// INTERESTS"`
- Replace empty warning box with two-column chip grid:
  - Network Engineering, Client/Server & p2p, Cloud Infrastructure, Terminal Tooling, Clean Frontends, Distributed Systems

**Consulting Placeholder** (full-width band above footer):
- Black background `Box` (matching header), white text
- Heading: `"Available for engineering consulting"`
- Subtext (caption, muted): `"Services page coming soon."`
- No link or CTA button yet — visual real estate for future expansion

---

### 4. About Page (`app/(portfolio)/about/page.tsx`)

**Remove:**
- "UNDER CONSTRUCTION" banner
- Duplicate image/social links box

**Top:** Brief personal bio paragraph (2–3 sentences: engineer background, interests, what you build).

**Education** (timeline style):
- `Box` with `borderLeft: '3px solid'` cyan accent as vertical timeline rail
- Two entries with padding-left:
  - University at Buffalo, School of Engineering and Applied Sciences — B.S. Computer Science
  - Corning Community College — A.S. (transfer)
- Each entry: year range label (`overline`) + institution name (`h6`) + degree (`body2`)

**Skills** (2×2 Grid of category cards):
- Languages: Golang, C, Python, Rust, TypeScript
- Tooling: UNIX/macOS, Docker, Git, MongoDB, Postgres, Agile
- Frameworks: Node.js, React, Next.js, Go-Gin, Django
- Networking: HTTP, TCP/UDP, WebRTC, WebSockets
- Each card: `overline` category label + borderLeft accent + wrapped MUI `Chip` array

---

### 5. Projects Page (`app/(portfolio)/projects/page.tsx`)

**Layout:**
- Switch from vertical `flexDirection: column` stack to 2-column `Grid` (`size={{ md: 6, xs: 12 }}`)

**ProjectCard restyling** (`app/components/global/ProjectItem.tsx`):
- Add `borderLeft: '3px solid'` cyan accent to card
- Add `Typography overline` tech category label above title (e.g., "DISTRIBUTED SYSTEMS")
- Replace icon-only expand toggle with a full-width clickable row at bottom of card (chevron + label "Details / Hide")
- Keep `Collapse` expand behavior

**Content updates** (replace all filler goals/checklists):

| Project | Goals | Checklist highlights |
|---|---|---|
| Portfolio | Static portfolio site; project showcase | Deployed ✓, Blog section ✗ |
| Kademlia DHT | Kademlia routing & node lookup; distributed KV store over gRPC | Node discovery ✓, FIND_NODE ✓, STORE/FIND_VALUE ✓, Partition tests ✗ |
| Raft KV Store | Raft consensus for leader election & log replication; in-memory KV store | Leader election ✓, Log replication ✓, Snapshotting ✗ |
| dps_office | Personal productivity suite frontend; user management & profiles | User profiles ✓, Admin dashboard ✓, Task manager ✗ |
| dps_http | REST API backend; auth, rate limiting, user CRUD | JWT auth ✓, Rate limiting ✓, User CRUD ✓ |
| dps_files | Chunk storage server for distributed file hosting | Chunked upload/download ✓, DHT integration ✗ |
| dps_net | Custom Kademlia p2p network stack in Go | Node routing ✓, gRPC transport ✓, NAT traversal ✗ |
| The Cookie Jar | LMS with full auth, roles, course management | User auth ✓, Course mgmt ✓, Nginx+Traefik deploy ✓ |
| Blockchain | From-scratch blockchain to learn Python & OOP | Block/chain structure ✓, Proof of work ✓, P2P network ✗ |
| Bytecode Interpreter | Interpreter for custom bytecode with closures, HOFs, streams | Lexer/parser ✓, Closures ✓, Higher-order functions ✓, Streams ✓ |
| Web App Backend | From-scratch Python HTTP server with OAuth, WebSockets, file streaming | Spotify OAuth2 ✓, WebSocket impl ✓, File sharing/streaming ✓, User mgmt ✓ |

---

## What Is NOT Changing

- `MyInfoCard` component — do not touch
- MUI theme (`theme.ts`) — no color or token changes
- `ModeSwitch` component
- `RouteRegistry` dev page
- `ProjectImages` component
- Any existing SVG assets

---

## Future Considerations (out of scope)

- `/blog` route — nav link is corrected to point there, actual page not built yet
- `/services` page for consulting — CTA band on landing page is the placeholder
- Dynamic content / CMS — hardcoded data remains hardcoded for now

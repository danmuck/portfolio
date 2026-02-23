# Portfolio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the personal portfolio from barebones/placeholder state to a production-quality "Dark Showcase" aesthetic using only the existing MUI v7 + Next.js 15 stack.

**Architecture:** All pages are Next.js App Router components; styles are applied via MUI `sx` prop. No new libraries or theme changes. The existing theme's `info.light` (`#04c4de` cyan) is the signature accent — used for card left-borders, overline labels, and dividers. `MyInfoCard` must not be touched.

**Tech Stack:** Next.js 15, MUI v7 (Grid v2 syntax: `size={{ md: 6, xs: 12 }}`), Emotion, TypeScript, React 19

> **Commits:** Per project rules, the user makes all commits. Do not run `git commit`. Verify each task with `npm run dev` and visual inspection.

## Progress

| Task | Status | Notes |
|---|---|---|
| Task 1: Fix Header and Footer | ✅ Complete | All 3 fixes verified. Pre-existing: Registry button indentation, dead `float: "right"` CSS on nav buttons — low priority cleanup. |
| Task 2: Landing Page | ✅ Complete | Full replacement. `{"// ..."}` JSX string wrapping applied. `primary.main` used for consulting band (theme-aware). `display:flex justifyContent:center` for MyInfoCard centering. `rel="noopener noreferrer"` on external links. Hero name set to `danmuck`. |
| Task 3: About Page | ✅ Complete | `"use client"` removed (no client-side behavior). Note: `info.light` resolves to `#238b99` (muted teal) in dark mode vs `#04c4de` (cyan) in light — pre-existing theme inconsistency, not a blocker. |
| Task 4: ProjectCard Restyle | ✅ Complete | `category?` prop added, cyan borderLeft, full-width expand row ("Show/Hide details" + chevron). Index keys fixed (pre-existing: `goal`/`item.task` instead of `idx`). Icon-in-Typography is pre-existing behavior, not changed. |
| Task 5: Projects Page Grid + Content | ✅ Complete | 2-col Grid, all 11 cards with `category` props, all filler goals/checklists replaced with accurate content. Portfolio image paths (`test_ss.png` etc.) are root-relative — pre-existing, files confirmed in `public/`. |

---

### Task 1: Fix Header and Footer

**Files:**
- Modify: `app/components/global/Header.tsx`
- Modify: `app/components/global/Footer.tsx`

**Step 1: Fix Header logo link (line 18)**

Change:
```tsx
<Link href="/users/danmuck/profile" passHref>
```
To:
```tsx
<Link href="/" passHref>
```

**Step 2: Fix Header Blog button href (line 63–66)**

The Blog `Button` currently points to `/about`. Change its `href`:
```tsx
href="/blog"
```
(Will 404 gracefully until the blog page is built — the route intent is now correct.)

**Step 3: Fix Footer tech stack copy (line 24)**

Change:
```tsx
Next.js // React // Typescript // Tailwind CSS
```
To:
```tsx
Next.js // React // TypeScript // MUI
```

**Step 4: Verify**

Run `npm run dev`. Check:
- Header logo click navigates to `/`
- "Blog" nav link shows `/blog` in browser status bar
- Footer reads `Next.js // React // TypeScript // MUI`

---

### Task 2: Landing Page — Hero Row

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace entire file**

```tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MyInfoCard from "./components/MyInfoCard";

const featuredProjects = [
  {
    title: "Kademlia DHT",
    description:
      "Distributed key-value store using the Kademlia protocol over gRPC.",
    tech: ["Golang", "gRPC", "protobuf"],
  },
  {
    title: "Raft KV Store",
    description:
      "Raft consensus for leader election and log replication backed by an in-memory KV store.",
    tech: ["Golang", "protobuf"],
  },
  {
    title: "dps_office",
    description:
      "Personal productivity suite with user management and admin dashboard.",
    tech: ["Next.js", "TypeScript", "MUI"],
  },
  {
    title: "Bytecode Interpreter",
    description:
      "Interpreter for a custom bytecode language with closures, higher-order functions, and streams.",
    tech: ["OCaml"],
  },
];

const interests = [
  "Network Engineering",
  "Client / Server",
  "P2P & Distributed Systems",
  "Cloud Infrastructure",
  "Terminal Tooling",
  "Clean Frontends",
];

export default function Home() {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero */}
        <Grid container spacing={4} sx={{ py: 4, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: -40,
              opacity: 0.07,
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <Image src="/banner.svg" alt="" width={400} height={280} />
          </Box>

          <Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: "center", zIndex: 1 }}>
            <MyInfoCard />
          </Grid>

          <Grid
            size={{ md: 6, xs: 12 }}
            sx={{
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: "info.light", letterSpacing: 2, mb: 0.5 }}
            >
              SOFTWARE ENGINEER
            </Typography>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ letterSpacing: -0.5, mb: 2 }}
            >
              Dan Muckerman
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I build distributed systems, developer tooling, and clean
              interfaces. Passionate about networking, p2p protocols, and the
              craft of software.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                component="a"
                href="https://github.com/danmuck"
                target="_blank"
                size="large"
                aria-label="GitHub"
              >
                <GitHubIcon sx={{ fontSize: 32 }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/danmuck/"
                target="_blank"
                size="large"
                aria-label="LinkedIn"
              >
                <LinkedInIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Selected Work */}
        <Box sx={{ py: 4 }}>
          <Divider sx={{ borderColor: "info.light", opacity: 0.4, mb: 3 }} />
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              color: "text.secondary",
              display: "block",
              mb: 2,
            }}
          >
            // SELECTED WORK
          </Typography>
          <Grid container spacing={2}>
            {featuredProjects.map((p) => (
              <Grid size={{ md: 6, xs: 12 }} key={p.title}>
                <Card
                  sx={{
                    borderLeft: "3px solid",
                    borderColor: "info.light",
                    height: "100%",
                    boxShadow: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {p.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {p.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {p.tech.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 2, textAlign: "right" }}>
            <Button
              component={Link}
              href="/projects"
              endIcon={<ArrowForwardIcon />}
              color="inherit"
            >
              View all projects
            </Button>
          </Box>
          <Divider sx={{ borderColor: "info.light", opacity: 0.4, mt: 3 }} />
        </Box>

        {/* Interests */}
        <Box sx={{ py: 3 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              color: "text.secondary",
              display: "block",
              mb: 2,
            }}
          >
            // INTERESTS
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {interests.map((interest) => (
              <Chip
                key={interest}
                label={interest}
                variant="outlined"
                sx={{ borderColor: "info.light" }}
              />
            ))}
          </Box>
        </Box>

        {/* Consulting placeholder */}
        <Box
          sx={{
            mt: 6,
            mb: 2,
            p: { xs: 3, md: 5 },
            bgcolor: "black",
            color: "white",
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
            Available for engineering consulting
          </Typography>
          <Typography variant="caption" sx={{ color: "grey.600" }}>
            Services page coming soon.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
```

**Step 2: Verify**

Run `npm run dev`, navigate to `/`. Check:
- No construction banner or `(TMP)` text
- Left column: `MyInfoCard`, right column: overline + name + bio + icon buttons
- `banner.svg` ghost image faintly visible bottom-left of hero
- `// SELECTED WORK` — 4 cards in 2-column grid with cyan left borders
- `// INTERESTS` — chips with cyan outlined borders
- Consulting band: black rounded box, white text, muted caption

---

### Task 3: About Page — Full Restructure

**Files:**
- Modify: `app/(portfolio)/about/page.tsx`

**Step 1: Replace entire file**

```tsx
"use client";
import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

const skillCategories = [
  {
    label: "Languages",
    items: ["Golang", "C", "Python", "Rust", "TypeScript"],
  },
  {
    label: "Tooling",
    items: ["UNIX / macOS", "Docker", "Git", "MongoDB", "Postgres", "Agile"],
  },
  {
    label: "Frameworks",
    items: ["Node.js", "React", "Next.js", "Go-Gin", "Django"],
  },
  {
    label: "Networking",
    items: ["HTTP", "TCP / UDP", "WebRTC", "WebSockets", "gRPC"],
  },
];

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Bio */}
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 2,
            color: "text.secondary",
            display: "block",
            mb: 1,
          }}
        >
          // ABOUT
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 640 }}>
          Software engineer with a focus on distributed systems, networking, and
          developer tooling. I build things from scratch to understand how they
          work — from consensus algorithms to bytecode interpreters to HTTP
          servers. Currently based in Buffalo, NY.
        </Typography>
      </Box>

      {/* Education */}
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 2,
            color: "text.secondary",
            display: "block",
            mb: 2,
          }}
        >
          // EDUCATION
        </Typography>
        <Box
          sx={{
            borderLeft: "3px solid",
            borderColor: "info.light",
            pl: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "text.disabled", letterSpacing: 1 }}
            >
              2021 — 2025
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              University at Buffalo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              B.S. Computer Science — School of Engineering and Applied Sciences
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "text.disabled", letterSpacing: 1 }}
            >
              2019 — 2021
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              Corning Community College
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A.S. — Transfer
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Skills */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 2,
            color: "text.secondary",
            display: "block",
            mb: 2,
          }}
        >
          // SKILLS
        </Typography>
        <Grid container spacing={2}>
          {skillCategories.map(({ label, items }) => (
            <Grid size={{ md: 6, xs: 12 }} key={label}>
              <Card
                sx={{
                  borderLeft: "3px solid",
                  borderColor: "info.light",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: 2,
                      color: "text.secondary",
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {label}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {items.map((skill) => (
                      <Chip key={skill} label={skill} size="small" />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
```

**Step 2: Verify**

Navigate to `/about`. Check:
- No construction banner
- Bio paragraph renders, max-width constrained
- Education: cyan left-border timeline, two entries with year ranges
- Skills: 2×2 grid of cards, each with cyan left border and category overline

---

### Task 4: ProjectCard — Restyle + Category Prop

**Files:**
- Modify: `app/components/global/ProjectItem.tsx`

**Step 1: Replace entire file**

```tsx
"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Chip,
  Collapse,
} from "@mui/material";
import TechLogoMap from "./Icons";
import ProjectImages from "./ProjectImages";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ChecklistIcon from "@mui/icons-material/Checklist";

type ProjectCardProps = {
  title: string;
  description: string;
  goals: string[];
  checklist: { task: string; completed: boolean }[];
  tech: string[];
  images: string[];
  category?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  goals,
  checklist,
  tech,
  images,
  category,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      sx={{
        width: "100%",
        mb: 2,
        boxShadow: 3,
        borderLeft: "3px solid",
        borderColor: "info.light",
      }}
    >
      <CardContent>
        {category && (
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              color: "text.secondary",
              display: "block",
            }}
          >
            {category}
          </Typography>
        )}
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1} mb={2}>
          {description}
        </Typography>

        {/* Tech Stack */}
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          mb={2}
          alignItems="center"
        >
          {tech.map((t) =>
            TechLogoMap[t] ? (
              <Box
                key={t}
                title={t}
                sx={{ display: "flex", alignItems: "center" }}
              >
                {TechLogoMap[t]}
              </Box>
            ) : (
              <Chip key={t} label={t} variant="outlined" size="medium" />
            )
          )}
        </Stack>

        {/* Expand toggle */}
        <Box
          onClick={() => setExpanded((prev) => !prev)}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            mt: 1,
            pt: 1,
            borderTop: "1px solid",
            borderColor: "divider",
            "&:hover": { opacity: 0.7 },
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", flexGrow: 1 }}
          >
            {expanded ? "Hide details" : "Show details"}
          </Typography>
          {expanded ? (
            <ExpandLessIcon fontSize="small" />
          ) : (
            <ExpandMoreIcon fontSize="small" />
          )}
        </Box>

        {/* Collapsible content */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {/* Goals */}
          <Box mt={2}>
            <Typography variant="subtitle2">Goals</Typography>
            <ul style={{ paddingLeft: 20 }}>
              {goals.map((goal, idx) => (
                <li key={idx}>
                  <Typography variant="body2">{goal}</Typography>
                </li>
              ))}
            </ul>
          </Box>

          {/* Checklist */}
          <Box mt={2}>
            <Typography variant="subtitle2">Features</Typography>
            <ul style={{ paddingLeft: 20 }}>
              {checklist.map((item, idx) => (
                <li key={idx}>
                  <Typography
                    variant="body2"
                    color={item.completed ? "success.main" : "text.secondary"}
                  >
                    {item.completed ? (
                      <CheckCircleOutlineIcon fontSize="small" />
                    ) : (
                      <ChecklistIcon fontSize="small" />
                    )}{" "}
                    {item.task}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>

          {/* Images */}
          {images.length > 0 && (
            <Box mt={2}>
              <ProjectImages images={images} />
            </Box>
          )}
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
```

**Step 2: Verify**

Navigate to `/projects`. Check:
- Cards have cyan left border
- Category overline displays above title
- Expand toggle is a full-width clickable row reading "Show details" / "Hide details"
- Expand/collapse still works correctly

---

### Task 5: Projects Page — Grid Layout + Accurate Content

**Files:**
- Modify: `app/(portfolio)/projects/page.tsx`

**Step 1: Replace entire file**

```tsx
import ProjectCard from "@/app/components/global/ProjectItem";
import { Box, Grid, Typography } from "@mui/material";

export default function ProjectsPage() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="overline"
        sx={{
          letterSpacing: 2,
          color: "text.secondary",
          display: "block",
          mb: 3,
        }}
      >
        // PROJECTS
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="PERSONAL PROJECT"
            title="Portfolio"
            description="A fast, modern static portfolio site built with Next.js and hosted on Vercel."
            tech={["Next.js", "TypeScript", "MUI", "Vercel"]}
            images={["test_ss.png", "dm_logo.svg", "banner.svg"]}
            goals={[
              "Showcase personal projects and skills",
              "Static frontend hosted on GitHub Pages / Vercel",
            ]}
            checklist={[
              { task: "Deployed and live", completed: true },
              { task: "Project showcase page", completed: true },
              { task: "Blog section", completed: false },
              { task: "Services / consulting page", completed: false },
            ]}
          />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="DISTRIBUTED SYSTEMS"
            title="Kademlia DHT"
            description="A distributed key-value store using the Kademlia DHT protocol over gRPC."
            tech={["Golang", "protobuf", "gRPC"]}
            images={[
              "projects/kdht_logs_1.png",
              "projects/kdht_logs_2.png",
              "projects/kdht_logs_code.png",
            ]}
            goals={[
              "Implement Kademlia routing table and node lookup",
              "Distributed key-value store with STORE / FIND_VALUE RPCs",
              "gRPC transport layer with protobuf message types",
            ]}
            checklist={[
              {
                task: "Node discovery & routing table (k-buckets)",
                completed: true,
              },
              { task: "FIND_NODE RPC", completed: true },
              { task: "STORE / FIND_VALUE RPC", completed: true },
              { task: "Network partitioning tests", completed: false },
            ]}
          />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="DISTRIBUTED SYSTEMS"
            title="Raft with KV Store"
            description="Raft consensus algorithm for leader election and log replication, backed by an in-memory key-value store."
            tech={["Golang", "protobuf"]}
            images={[
              "projects/raft_election_starting.png",
              "projects/raft_joining.png",
              "projects/raft_leader_commit.png",
              "projects/raft_reaching_quorum.png",
            ]}
            goals={[
              "Implement Raft leader election and log replication",
              "In-memory key-value store on top of the replicated log",
            ]}
            checklist={[
              { task: "Leader election", completed: true },
              { task: "Log replication", completed: true },
              { task: "Reaching quorum", completed: true },
              { task: "Log compaction / snapshotting", completed: false },
            ]}
          />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="FULL STACK"
            title="dps_office"
            description="The frontend for my daily productivity suite — user management, profiles, and an admin dashboard."
            tech={["Next.js", "TypeScript", "MUI", "Vercel"]}
            images={[
              "projects/office_profile.png",
              "projects/office_users_list.png",
              "projects/office_dummy_users.png",
            ]}
            goals={[
              "Personal productivity suite frontend",
              "User management and profile views",
              "Admin dashboard for system oversight",
            ]}
            checklist={[
              { task: "User profiles", completed: true },
              { task: "Admin dashboard", completed: true },
              { task: "JWT-authenticated routes", completed: true },
              { task: "Task manager", completed: false },
            ]}
          />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="BACKEND"
            title="dps_http"
            description="The REST API backend for dps_office — handles auth, rate limiting, and user CRUD."
            tech={["Golang", "Gin"]}
            images={[
              "projects/lib_logger.png",
              "projects/http_user_gen.png",
            ]}
            goals={[
              "REST API for dps_office frontend",
              "JWT authentication and protected routes",
              "Rate limiting and request middleware",
            ]}
            checklist={[
              { task: "JWT authentication", completed: true },
              { task: "Rate limiting", completed: true },
              { task: "User CRUD", completed: true },
              { task: "WebSocket support", completed: false },
            ]}
          />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="BACKEND / STORAGE"
            title="dps_files"
            description="A chunk storage server designed to facilitate DHT-based distributed file storage."
            tech={["Golang"]}
            images={[]}
            goals={[
              "Chunk-based file upload and retrieval",
              "Integration layer for DHT file addressing",
            ]}
            checklist={[
              { task: "Chunked upload / download", completed: true },
              { task: "Content-addressed storage", completed: true },
              { task: "DHT integration", completed: false },
            ]}
          />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="NETWORKING"
            title="dps_net"
            description="Custom implementation of the Kademlia protocol and a p2p network stack in Go."
            tech={["Golang", "Gin", "gRPC"]}
            images={[]}
            goals={[
              "Custom Kademlia p2p network stack",
              "gRPC transport for node-to-node communication",
            ]}
            checklist={[
              { task: "Node routing and discovery", completed: true },
              { task: "gRPC transport layer", completed: true },
              { task: "NAT traversal", completed: false },
            ]}
          />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="FULL STACK"
            title="The Cookie Jar"
            description="Learning management system built for a backend web development course, deployed with Nginx and Traefik."
            tech={["Golang", "Gin", "JavaScript", "React", "Nginx", "Traefik"]}
            images={[]}
            goals={[
              "Full-stack LMS with role-based auth and course management",
              "Production deployment with Nginx reverse proxy and Traefik",
            ]}
            checklist={[
              { task: "User authentication", completed: true },
              { task: "Course management", completed: true },
              { task: "Nginx + Traefik deployment", completed: true },
            ]}
          />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="ACADEMIC"
            title="Blockchain"
            description="My first from-scratch coding project — how I learned Python and object-oriented programming."
            tech={["Python"]}
            images={[]}
            goals={[
              "Build a functional blockchain to learn Python OOP fundamentals",
            ]}
            checklist={[
              { task: "Block and chain data structures", completed: true },
              { task: "Proof of work", completed: true },
              { task: "P2P network layer", completed: false },
            ]}
          />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="LANGUAGES"
            title="Bytecode Interpreter"
            description="Interpreter for a custom bytecode language with functions, closures, higher-order functions, and streams."
            tech={["OCaml"]}
            images={[]}
            goals={[
              "Interpreter for a custom bytecode instruction set",
              "Support closures, higher-order functions, and streams",
            ]}
            checklist={[
              { task: "Lexer / parser", completed: true },
              { task: "Closures", completed: true },
              { task: "Higher-order functions", completed: true },
              { task: "Streams", completed: true },
            ]}
          />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          <ProjectCard
            category="BACKEND"
            title="Web App Backend"
            description="Python web backend from scratch with Spotify OAuth, custom WebSockets, file sharing, video streaming, and user management."
            tech={["Python", "Docker", "Nginx", "OAuth2"]}
            images={[]}
            goals={[
              "HTTP server from scratch in Python",
              "Spotify OAuth2 integration",
              "Custom WebSocket implementation",
              "File sharing and video streaming",
            ]}
            checklist={[
              { task: "Spotify OAuth2", completed: true },
              { task: "Custom WebSocket implementation", completed: true },
              { task: "File sharing & video streaming", completed: true },
              { task: "User management", completed: true },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
```

**Step 2: Verify**

Navigate to `/projects`. Check:
- All 11 projects display in a 2-column grid on desktop, 1-column on mobile
- Each card has a cyan left border and a category overline (`DISTRIBUTED SYSTEMS`, `BACKEND`, etc.)
- No filler content ("Serve static files", generic checklists)
- Expand each card to confirm goals and checklists match the actual project

---

## Final Verification Checklist

After all 5 tasks:

- [ ] Header logo → navigates to `/`
- [ ] Blog nav → points to `/blog`
- [ ] Footer → reads `Next.js // React // TypeScript // MUI`
- [ ] `/` — no construction banner; hero has MyInfoCard left + identity right + ghost silhouette
- [ ] `/` — `// SELECTED WORK` 4-card grid with cyan borders
- [ ] `/` — `// INTERESTS` chips with cyan outlined borders
- [ ] `/` — Consulting band: black rounded box, white text
- [ ] `/about` — bio, cyan-bordered education timeline, 2×2 skills grid
- [ ] `/projects` — 2-column grid, cyan left borders, category overlines, real content
- [ ] Light mode and dark mode both look correct (`npm run dev` — toggle mode switch)
- [ ] TypeScript: run `npm run build` to confirm no type errors

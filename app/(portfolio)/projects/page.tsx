import ProjectCard from "@/app/components/global/ProjectItem";
import { Box, Typography } from "@mui/material";

const projects = [
  {
    category: "PERSONAL PROJECT",
    title: "Portfolio",
    description:
      "A fast, modern static portfolio site built with Next.js and hosted on Vercel.",
    tech: ["Next.js", "TypeScript", "MUI", "Vercel"],
    images: ["test_ss.png", "dm_logo.svg", "banner.svg"],
    goals: [
      "Showcase personal projects and skills",
      "Static frontend hosted on GitHub Pages / Vercel",
    ],
    checklist: [
      { task: "Deployed and live", completed: true },
      { task: "Project showcase page", completed: true },
      { task: "Blog section", completed: false },
      { task: "Services / consulting page", completed: false },
    ],
  },
  {
    category: "DISTRIBUTED SYSTEMS",
    title: "Kademlia DHT",
    description:
      "A distributed key-value store using the Kademlia DHT protocol over gRPC.",
    tech: ["Golang", "protobuf", "gRPC"],
    images: [
      "projects/kdht_logs_1.png",
      "projects/kdht_logs_2.png",
      "projects/kdht_logs_code.png",
    ],
    goals: [
      "Implement Kademlia routing table and node lookup",
      "Distributed key-value store with STORE / FIND_VALUE RPCs",
      "gRPC transport layer with protobuf message types",
    ],
    checklist: [
      { task: "Node discovery & routing table (k-buckets)", completed: true },
      { task: "FIND_NODE RPC", completed: true },
      { task: "STORE / FIND_VALUE RPC", completed: true },
      { task: "Network partitioning tests", completed: false },
    ],
  },
  {
    category: "DISTRIBUTED SYSTEMS",
    title: "Raft with KV Store",
    description:
      "Raft consensus algorithm for leader election and log replication, backed by an in-memory key-value store.",
    tech: ["Golang", "protobuf"],
    images: [
      "projects/raft_election_starting.png",
      "projects/raft_joining.png",
      "projects/raft_leader_commit.png",
      "projects/raft_reaching_quorum.png",
    ],
    goals: [
      "Implement Raft leader election and log replication",
      "In-memory key-value store on top of the replicated log",
    ],
    checklist: [
      { task: "Leader election", completed: true },
      { task: "Log replication", completed: true },
      { task: "Reaching quorum", completed: true },
      { task: "Log compaction / snapshotting", completed: false },
    ],
  },
  {
    category: "FULL STACK",
    title: "dps_office",
    description:
      "The frontend for my daily productivity suite — user management, profiles, and an admin dashboard.",
    tech: ["Next.js", "TypeScript", "MUI", "Vercel"],
    images: [
      "projects/office_profile.png",
      "projects/office_users_list.png",
      "projects/office_dummy_users.png",
    ],
    goals: [
      "Personal productivity suite frontend",
      "User management and profile views",
      "Admin dashboard for system oversight",
    ],
    checklist: [
      { task: "User profiles", completed: true },
      { task: "Admin dashboard", completed: true },
      { task: "JWT-authenticated routes", completed: true },
      { task: "Task manager", completed: false },
    ],
  },
  {
    category: "BACKEND",
    title: "dps_http",
    description:
      "The REST API backend for dps_office — handles auth, rate limiting, and user CRUD.",
    tech: ["Golang", "Gin"],
    images: [
      "projects/lib_logger.png",
      "projects/http_user_gen.png",
    ],
    goals: [
      "REST API for dps_office frontend",
      "JWT authentication and protected routes",
      "Rate limiting and request middleware",
    ],
    checklist: [
      { task: "JWT authentication", completed: true },
      { task: "Rate limiting", completed: true },
      { task: "User CRUD", completed: true },
      { task: "WebSocket support", completed: false },
    ],
  },
  {
    category: "BACKEND / STORAGE",
    title: "dps_files",
    description:
      "A chunk storage server designed to facilitate DHT-based distributed file storage.",
    tech: ["Golang"],
    images: [],
    goals: [
      "Chunk-based file upload and retrieval",
      "Integration layer for DHT file addressing",
    ],
    checklist: [
      { task: "Chunked upload / download", completed: true },
      { task: "Content-addressed storage", completed: true },
      { task: "DHT integration", completed: false },
    ],
  },
  {
    category: "NETWORKING",
    title: "dps_net",
    description:
      "Custom implementation of the Kademlia protocol and a p2p network stack in Go.",
    tech: ["Golang", "Gin", "gRPC"],
    images: [],
    goals: [
      "Custom Kademlia p2p network stack",
      "gRPC transport for node-to-node communication",
    ],
    checklist: [
      { task: "Node routing and discovery", completed: true },
      { task: "gRPC transport layer", completed: true },
      { task: "NAT traversal", completed: false },
    ],
  },
  {
    category: "FULL STACK",
    title: "The Cookie Jar",
    description:
      "Learning management system built for a backend web development course, deployed with Nginx and Traefik.",
    tech: ["Golang", "Gin", "JavaScript", "React", "Nginx", "Traefik"],
    images: [],
    goals: [
      "Full-stack LMS with role-based auth and course management",
      "Production deployment with Nginx reverse proxy and Traefik",
    ],
    checklist: [
      { task: "User authentication", completed: true },
      { task: "Course management", completed: true },
      { task: "Nginx + Traefik deployment", completed: true },
    ],
  },
  {
    category: "ACADEMIC",
    title: "Blockchain",
    description:
      "My first from-scratch coding project — how I learned Python and object-oriented programming.",
    tech: ["Python"],
    images: [],
    goals: [
      "Build a functional blockchain to learn Python OOP fundamentals",
    ],
    checklist: [
      { task: "Block and chain data structures", completed: true },
      { task: "Proof of work", completed: true },
      { task: "P2P network layer", completed: false },
    ],
  },
  {
    category: "LANGUAGES",
    title: "Bytecode Interpreter",
    description:
      "Interpreter for a custom bytecode language with functions, closures, higher-order functions, and streams.",
    tech: ["OCaml"],
    images: [],
    goals: [
      "Interpreter for a custom bytecode instruction set",
      "Support closures, higher-order functions, and streams",
    ],
    checklist: [
      { task: "Lexer / parser", completed: true },
      { task: "Closures", completed: true },
      { task: "Higher-order functions", completed: true },
      { task: "Streams", completed: true },
    ],
  },
  {
    category: "BACKEND",
    title: "Web App Backend",
    description:
      "Python web backend from scratch with Spotify OAuth, custom WebSockets, file sharing, video streaming, and user management.",
    tech: ["Python", "Docker", "Nginx", "OAuth2"],
    images: [],
    goals: [
      "HTTP server from scratch in Python",
      "Spotify OAuth2 integration",
      "Custom WebSocket implementation",
      "File sharing and video streaming",
    ],
    checklist: [
      { task: "Spotify OAuth2", completed: true },
      { task: "Custom WebSocket implementation", completed: true },
      { task: "File sharing & video streaming", completed: true },
      { task: "User management", completed: true },
    ],
  },
];

const leftProjects = projects.filter((_, i) => i % 2 === 0);
const rightProjects = projects.filter((_, i) => i % 2 === 1);

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
        {"// PROJECTS"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          alignItems: "flex-start",
        }}
      >
        {/* Left column — even-indexed projects */}
        <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
          {leftProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </Box>
        {/* Right column — odd-indexed projects */}
        <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
          {rightProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

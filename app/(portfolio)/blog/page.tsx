import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Skeleton,
} from "@mui/material";

const placeholderPosts = [
  {
    title: "Building a Kademlia DHT in Go",
    date: "Coming soon",
    excerpt:
      "A deep dive into implementing the Kademlia distributed hash table protocol from scratch using Go and gRPC.",
    tags: ["Golang", "Distributed Systems", "gRPC"],
  },
  {
    title: "Raft Consensus: From Theory to Code",
    date: "Coming soon",
    excerpt:
      "Walking through leader election, log replication, and the edge cases that make Raft hard to implement correctly.",
    tags: ["Golang", "Consensus", "Distributed Systems"],
  },
  {
    title: "OCaml for Systems Programmers",
    date: "Coming soon",
    excerpt:
      "Why I reached for OCaml when building a bytecode interpreter, and what functional programming taught me about state.",
    tags: ["OCaml", "Compilers", "Functional"],
  },
];

export default function BlogPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 2,
            color: "text.secondary",
            display: "block",
            mb: 1,
          }}
        >
          {"// BLOG"}
        </Typography>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 1.5 }}>
          Writing
        </Typography>
      </Box>

      {/* Coming soon callout */}
      <Box
        sx={{
          mb: 5,
          p: { xs: 3, md: 4 },
          borderLeft: "3px solid",
          borderColor: "info.light",
          borderRadius: 1,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="body1" fontWeight={500} sx={{ mb: 0.5 }}>
          Posts coming soon
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Technical writing on distributed systems, networking, and the craft of
          building software from scratch.
        </Typography>
      </Box>

      {/* Placeholder post cards */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {placeholderPosts.map((post) => (
          <Card
            key={post.title}
            sx={{
              borderLeft: "3px solid",
              borderColor: "info.light",
              boxShadow: 2,
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  mb: 1,
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {post.title}
                </Typography>
                <Chip
                  label={post.date}
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: "info.light", flexShrink: 0 }}
                />
              </Box>
              <Skeleton
                variant="text"
                width="100%"
                height={20}
                sx={{ mb: 0.5 }}
                animation={false}
              />
              <Skeleton
                variant="text"
                width="75%"
                height={20}
                sx={{ mb: 1.5 }}
                animation={false}
              />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {post.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: "info.light" }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

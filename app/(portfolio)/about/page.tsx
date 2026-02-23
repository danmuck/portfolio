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
          {"// ABOUT"}
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
          {"// EDUCATION"}
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
          {"// SKILLS"}
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

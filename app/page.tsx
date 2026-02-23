"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Button,
	IconButton,
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
				<Grid container spacing={4} sx={{ py: 2, position: "relative" }}>
					<Box
						sx={{
							position: "absolute",
							bottom: 0,
							left: -40,
							opacity: 0.07,
							zIndex: 0,
							pointerEvents: "none",
							display: { xs: "none", md: "block" },
						}}
					>
						<Image src="/banner.svg" alt="" width={400} height={280} />
					</Box>

					<Grid
						size={{ md: 6, xs: 12 }}
						sx={{ display: "flex", justifyContent: "center", zIndex: 1 }}
					>
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
							danmuck
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
								rel="noopener noreferrer"
								size="large"
								aria-label="GitHub"
							>
								<GitHubIcon sx={{ fontSize: 32 }} />
							</IconButton>
							<IconButton
								component="a"
								href="https://www.linkedin.com/in/danmuck/"
								target="_blank"
								rel="noopener noreferrer"
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
						{"// SELECTED WORK"}
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
										transition: "box-shadow 0.2s ease",
										"&:hover": { boxShadow: 6 },
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
													sx={{ borderColor: "info.light" }}
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
						{"// INTERESTS"}
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
						borderLeft: "3px solid",
						borderColor: "info.light",
						borderRadius: 1,
					}}
				>
					<Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
						Available for engineering consulting
					</Typography>
					<Typography variant="caption" sx={{ color: "text.secondary" }}>
						Services page coming soon.
					</Typography>
				</Box>
			</Container>
		</>
	);
}

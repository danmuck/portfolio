"use client";
import React, { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	Box,
	Stack,
	Chip,
	IconButton,
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
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	goals,
	checklist,
	tech,
	images,
}) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<Card sx={{ width: "100%", mb: 2, boxShadow: 3 }}>
			<CardContent>
				<Typography variant="h6">{title}</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					mt={1}
					mb={2}
				>
					{description}
				</Typography>

				{/* Tech Stack */}
				<Stack
					direction="row"
					spacing={2}
					flexWrap="wrap"
					mb={2}
					alignItems={"center"}
					// maxHeight={25}
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
							<Chip
								key={t}
								label={t}
								variant="outlined"
								size="medium"
							/>
						)
					)}
				</Stack>

				{/* Expand toggle */}
				<IconButton onClick={() => setExpanded((prev) => !prev)}>
					{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
				</IconButton>

				{/* Collapsible content */}
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					{/* Goals */}
					<Box mt={2}>
						<Typography variant="subtitle2">Goals</Typography>
						<ul style={{ paddingLeft: 20 }}>
							{goals.map((goal, idx) => (
								<li key={idx}>
									<Typography variant="body2">
										{goal}
									</Typography>
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
										color={
											item.completed
												? "success.main"
												: "text.secondary"
										}
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

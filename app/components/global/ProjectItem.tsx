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
              <Chip
                key={t}
                label={t}
                size="medium"
                sx={{
                  bgcolor: 'info.dark',
                  color: '#111',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  borderRadius: 1,
                }}
              />
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
              {goals.map((goal) => (
                <li key={goal}>
                  <Typography variant="body2">{goal}</Typography>
                </li>
              ))}
            </ul>
          </Box>

          {/* Checklist */}
          <Box mt={2}>
            <Typography variant="subtitle2">Features</Typography>
            <ul style={{ paddingLeft: 20 }}>
              {checklist.map((item) => (
                <li key={item.task}>
                  <Typography
                    variant="body2"
                    // success.dark: palette inverts per mode — resolves to bright #02d4a3 in dark
                    color={item.completed ? "success.dark" : "text.secondary"}
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

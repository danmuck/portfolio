"use client";

import React, { useRef } from "react";
import { Box, CardMedia, IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type ProjectImagesProps = {
	images: string[];
	height?: number;
};

const SCROLL_AMOUNT = 300; // pixels to scroll per click

const ProjectImages: React.FC<ProjectImagesProps> = ({
	images,
	height = 180,
}) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (!scrollRef.current) return;
		const amount = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
		scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
	};

	return (
		<Stack direction="row" alignItems="center" spacing={1}>
			{/* Left Arrow */}
			<IconButton
				onClick={() => scroll("left")}
				sx={{ display: { xs: "none", sm: "inline-flex" } }}
			>
				<ArrowBackIosNewIcon />
			</IconButton>

			{/* Scrollable Container */}
			<Box
				ref={scrollRef}
				sx={{
					display: "flex",
					overflowX: "auto",
					scrollbarWidth: "none", // Firefox
					"&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari
					gap: 2,
					py: 1,
					px: 1,
					maxWidth: "100%",
				}}
			>
				{images.map((src, index) => (
					<Box key={index} sx={{ flex: "0 0 auto", height }}>
						<CardMedia
							component="img"
							image={src}
							alt={`preview-${index}`}
							loading="lazy"
							sx={{
								height: "100%",
								width: "auto",
								objectFit: "contain",
								borderRadius: 1,
								boxShadow: 1,
							}}
						/>
					</Box>
				))}
			</Box>

			{/* Right Arrow */}
			<IconButton
				onClick={() => scroll("right")}
				sx={{ display: { xs: "none", sm: "inline-flex" } }}
			>
				<ArrowForwardIosIcon />
			</IconButton>
		</Stack>
	);
};

export default ProjectImages;

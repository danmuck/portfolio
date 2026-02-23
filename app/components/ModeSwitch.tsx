"use client";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useColorScheme } from "@mui/material/styles";
import ComputerIcon from "@mui/icons-material/Computer";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ModeSwitch() {
	const { mode, setMode } = useColorScheme();
	if (!mode) {
		return null;
	}
	return (
		<ToggleButtonGroup
			value={mode}
			exclusive
			onChange={(_, val) => val && setMode(val)}
			size="small"
			sx={{ ml: 1, "& .MuiToggleButton-root": { color: "inherit", borderColor: "rgba(128,128,128,0.3)" } }}
		>
			<ToggleButton value="system" aria-label="System theme">
				<ComputerIcon fontSize="small" />
			</ToggleButton>
			<ToggleButton value="light" aria-label="Light theme">
				<LightModeIcon fontSize="small" />
			</ToggleButton>
			<ToggleButton value="dark" aria-label="Dark theme">
				<DarkModeIcon fontSize="small" />
			</ToggleButton>
		</ToggleButtonGroup>
	);
}

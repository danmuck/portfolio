import Link from "next/link";
import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import ModeSwitch from "@/app/components/ModeSwitch";

const GlobalHeader: React.FC = () => {
	return (
		<AppBar position="static" elevation={1}>
			<Toolbar
				sx={{
					bgcolor: "primary.main",
					color: "secondary.main",
					maxHeight: 64,
					"@media (prefers-color-scheme: light)": {
						color: "#d4e3fb",
					},
				}}
			>
				{/* logo & title */}
				<Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
					<Link href="/" passHref>
						<Box
							component="div"
							sx={{
								display: "flex",
								alignItems: "center",
								textDecoration: "none",
							}}
						>
							<Box
								component="svg"
								xmlns="http://www.w3.org/2000/svg"
								width={128}
								height={30}
								viewBox="0 0 650 150"
								aria-label="danmuck"
								sx={{
									display: "block",
									color: "#000000",
									".light &": { color: "#dae2df" },
								}}
							>
								<text
									x="20"
									y="110"
									style={{
										fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
										fontSize: "110px",
										fontWeight: 900,
										letterSpacing: "-5px",
										fill: "currentColor",
										stroke: "currentColor",
										strokeWidth: 4,
										strokeLinecap: "round",
										strokeLinejoin: "round",
									}}
								>
									dan muck.
								</text>
							</Box>
						</Box>
					</Link>
				</Box>

				{/* primary navigation */}
				<Box sx={{ display: "flex", gap: 2, flexGrow: 1 }}>
					<Button
						component={Link}
						href="/"
						color="inherit"
						sx={{ float: "right" }}
					>
						Home
					</Button>
					<Button
						component={Link}
						href="/about"
						color="inherit"
						sx={{ float: "right" }}
					>
						About
					</Button>
					<Button
						component={Link}
						href="/projects"
						color="inherit"
						sx={{ float: "right" }}
					>
						Projects
					</Button>
					<Button
						component={Link}
						href="/blog"
						color="inherit"
						sx={{ float: "right" }}
					>
						Blog
					</Button>
				</Box>

				<Button component={Link} href="/registry" color="inherit">
					Registry
				</Button>
				<ModeSwitch />
			</Toolbar>
		</AppBar>
	);
};
export default GlobalHeader;

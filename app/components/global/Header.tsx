import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

const GlobalHeader: React.FC = () => {
	return (
		<AppBar position="static" elevation={1}>
			<Toolbar
				sx={{
					bgcolor: "primary.main",
					color: "secondary.main",
					maxHeight: 64,
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
							<Image
								src="/full_logo.svg"
								alt="danmuck"
								width={128}
								height={128}
							/>
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
			</Toolbar>
		</AppBar>
	);
};
export default GlobalHeader;

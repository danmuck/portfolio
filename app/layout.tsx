import type { Metadata } from "next";
import "./globals.css";
import GlobalHeader from "./components/global/Header";
import GlobalFooter from "./components/global/Footer";
import {
	CssBaseline,
	InitColorSchemeScript,
	ThemeProvider,
	Box,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/theme";

export const metadata: Metadata = {
	title: "dps_office",
	description: "daily assistant dashboard",
};

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<base href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`} />
			</head>
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<InitColorSchemeScript />
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								minHeight: "100vh",
							}}
						>
							<GlobalHeader />
							<Box component="main" sx={{ flexGrow: 1, p: 4 }}>
								{props.children}
							</Box>
							<GlobalFooter />
						</Box>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

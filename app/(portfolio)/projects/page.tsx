import ProjectCard from "@/app/components/global/ProjectItem";
import { Box } from "@mui/material";

// "projects/filler", "projects/filler", "projects/filler"
export default function ProjectsPage() {
	return (
		<>
			<Box
				sx={{
					padding: 2,
					gap: 2,
					width: "100%",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<ProjectCard
					title="Portfolio"
					description="A fast, modern site built with Next.js and hosted on Vercel."
					tech={["Next.js", "TypeScript", "MUI", "Vercel"]}
					images={["test_ss.png", "dm_logo.svg", "banner.svg"]}
					goals={[
						"Serve a static homepage to showcase my skills and projects",
						"Build CRUD endpoints",
					]}
					checklist={[
						{
							task: "Hosted here for you to see!",
							completed: true,
						},
						{ task: "Rate limiting", completed: true },
						{ task: "Admin dashboard", completed: true },
					]}
				/>

				<ProjectCard
					title="Kademlia DHT"
					description="A distributed key-value store using the Kademlia DHT protocol."
					tech={["Golang", "protobuf", "gRPC"]}
					images={[
						"projects/kdht_logs_1.png",
						"projects/kdht_logs_2.png",
						"projects/kdht_logs_code.png",
					]}
					goals={[
						"Serve static files",
						"Build CRUD endpoints",
						"Handle auth",
					]}
					checklist={[
						{ task: "JWT authentication", completed: true },
						{ task: "Rate limiting", completed: false },
						{ task: "Admin dashboard", completed: true },
					]}
				/>

				<ProjectCard
					title="Raft with KV Store"
					description="Raft consensus algorithm for a key-value store."
					tech={["Golang", "protobuf"]}
					images={[
						"projects/raft_election_starting.png",
						"projects/raft_joining.png",
						"projects/raft_leader_commit.png",
						"projects/raft_reaching_quorum.png",
					]}
					goals={[
						"Serve static files",
						"Build CRUD endpoints",
						"Handle auth",
					]}
					checklist={[
						{ task: "JWT authentication", completed: true },
						{ task: "Rate limiting", completed: false },
						{ task: "Admin dashboard", completed: true },
					]}
				/>

				<ProjectCard
					title="dps_office"
					description="The future of this current domain, filled with apps and tools for my daily use."
					tech={["Next.js", "TypeScript", "MUI", "Vercel"]}
					images={[
						"projects/office_profile.png",
						"projects/office_users_list.png",
						"projects/office_dummy_users.png",
					]}
					goals={[
						"Serve static files",
						"Build CRUD endpoints",
						"Handle auth",
					]}
					checklist={[
						{ task: "JWT authentication", completed: true },
						{ task: "Rate limiting", completed: false },
						{ task: "Admin dashboard", completed: true },
					]}
				/>

				<ProjectCard
					title="dps_http"
					description="The backend for dps_office."
					tech={["Golang", "Gin"]}
					images={[
						"projects/lib_logger.png",
						"projects/http_user_gen.png",
					]}
					goals={[
						"Serve static files",
						"Build CRUD endpoints",
						"Handle auth",
					]}
					checklist={[
						{ task: "JWT authentication", completed: true },
						{ task: "Rate limiting", completed: false },
						{ task: "Admin dashboard", completed: true },
					]}
				/>

				<ProjectCard
					title="dps_files"
					description="My chunk storage system to facilitate my DHT-based file storage."
					tech={["Golang"]}
					images={[]}
					goals={[
						"Serve static files",
						"Build CRUD endpoints",
						"Handle auth",
					]}
					checklist={[
						{ task: "JWT authentication", completed: true },
						{ task: "Rate limiting", completed: false },
						{ task: "Admin dashboard", completed: true },
					]}
				/>

				<ProjectCard
					title="dps_net"
					description="My custom implementation of the kademlia protocol and p2p network stack."
					tech={["Golang", "Gin", "gRPC"]}
					images={[]}
					goals={[
						"Serve static files",
						"Build CRUD endpoints",
						"Handle auth",
					]}
					checklist={[
						{ task: "JWT authentication", completed: true },
						{ task: "Rate limiting", completed: false },
						{ task: "Admin dashboard", completed: true },
					]}
				/>

				<ProjectCard
					title="The Cookie Jar"
					description="Learning management system that I built in school for a backend web development course."
					tech={[
						"Golang",
						"Gin",
						"JavaScript",
						"React",
						"Nginx",
						"Traefik",
					]}
					images={[]}
					goals={[
						"Serve static files",
						"Build CRUD endpoints",
						"Handle auth",
					]}
					checklist={[
						{ task: "JWT authentication", completed: true },
						{ task: "Rate limiting", completed: false },
						{ task: "Admin dashboard", completed: true },
					]}
				/>

				<ProjectCard
					title="Blockchain"
					description="My first ever from-scratch coding project; how I learned Python and object oriented programming."
					tech={["Python"]}
					images={[]}
					goals={[
						"Serve static files",
						"Build CRUD endpoints",
						"Handle auth",
					]}
					checklist={[
						{ task: "JWT authentication", completed: true },
						{ task: "Rate limiting", completed: false },
						{ task: "Admin dashboard", completed: true },
					]}
				/>

				<ProjectCard
					title="Bytecode Interpreter"
					description="Interpreter for a custom, simple bytecode language complete with functions, closures, functions as arguments, streams and more."
					tech={["OCaml"]}
					images={[]}
					goals={[
						"Serve static files",
						"Build CRUD endpoints",
						"Handle auth",
					]}
					checklist={[
						{ task: "JWT authentication", completed: true },
						{ task: "Rate limiting", completed: false },
						{ task: "Admin dashboard", completed: true },
					]}
				/>

				<ProjectCard
					title="Web App Backend"
					description="Python web backend from scratch with support for user management and Spotify OAuth integration, custom websocket implementation, file sharing, video streaming, and more."
					tech={["Python", "Docker", "Nginx", "OAuth2"]}
					images={[]}
					goals={[
						"Serve static files",
						"Build CRUD endpoints",
						"Handle auth",
					]}
					checklist={[
						{ task: "JWT authentication", completed: true },
						{ task: "Rate limiting", completed: false },
						{ task: "Admin dashboard", completed: true },
					]}
				/>
			</Box>
		</>
	);
}

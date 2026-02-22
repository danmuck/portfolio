import type { NextConfig } from "next";

const basePath = "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

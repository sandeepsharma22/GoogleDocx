import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/GoogleDocx",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

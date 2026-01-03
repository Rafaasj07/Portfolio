import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
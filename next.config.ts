import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  productionBrowserSourceMaps: false,
  typedRoutes: false,
  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

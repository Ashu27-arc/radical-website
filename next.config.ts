import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  // output: 'export', // Removed - static export doesn't support API routes
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

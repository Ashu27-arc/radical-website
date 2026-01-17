import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  output: 'export',
  basePath: '/next',
  assetPrefix: '/next',
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

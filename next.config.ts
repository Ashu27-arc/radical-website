import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  reactCompiler: true,
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  typedRoutes: false,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  compress: true,

  experimental: {
    optimizeCss: false,
    optimizePackageImports: [
      "primereact",
      "swiper",
      "lodash"
    ],
  },

  modularizeImports: {
    primereact: {
      transform: "primereact/{{member}}",
    },
  },
};

export default nextConfig;
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
    unoptimized: false, 
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  compress: true,

  experimental: {
    optimizeCss: true,
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

  webpack(config) {
    config.optimization.splitChunks = {
      ...config.optimization.splitChunks,
      cacheGroups: {
        ...config.optimization.splitChunks?.cacheGroups,
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    };

    return config;
  },
};

export default nextConfig;
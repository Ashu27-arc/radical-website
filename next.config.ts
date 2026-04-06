import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {},
  trailingSlash: false,
  productionBrowserSourceMaps: false,

  typescript: {
    ignoreBuildErrors: false, // production safety
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cms.radicaleducation.in",
      },
      {
        protocol: "https",
        hostname: "backup.radicaleducation.in",
      },
      {
        protocol: "https",
        hostname: "backend-radical.onrender.com",
      },
    ],
  },

  compress: true,

  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "primereact",
      "swiper",
      "lodash",
    ],
  },

  // Removed redundant modularizeImports as it's replaced by optimizePackageImports


  async redirects() {
    return [
      {
        source: "/blog/:path*",
        destination: "https://blog.radicaleducation.in/blog/:path*",
        permanent: true,
      },
    ];
  },

  webpack(config) {
    if (config.optimization?.splitChunks) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      };
    }

    return config;
  },
};

export default nextConfig;
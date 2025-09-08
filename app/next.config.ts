import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

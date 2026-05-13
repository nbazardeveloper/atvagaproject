import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images served from the same domain
    remotePatterns: [],
  },
};

export default nextConfig;

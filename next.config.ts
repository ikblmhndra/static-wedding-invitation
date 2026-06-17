import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    // Work around a Next.js dev-only Segment Explorer manifest bug.
    devtoolSegmentExplorer: false
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;

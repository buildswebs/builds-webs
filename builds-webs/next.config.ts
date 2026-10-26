import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/approach",
        destination: "/#approach",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "highroad-services-ltd.vercel.app",
          },
        ],
        destination: "https://www.highroadservicesltd.com/:path*",
        permanent: true,  // 308 redirect
      },
    ];
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sanchari-next-uploads.s3.ap-south-1.amazonaws.com",
        // port: "",
        pathname: "/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "images.pexels.com",
      //   // port: "",
      //   pathname: "/**",
      // }
    ],
  },
  reactStrictMode: false,
  // cacheComponents: true,
};

export default nextConfig;

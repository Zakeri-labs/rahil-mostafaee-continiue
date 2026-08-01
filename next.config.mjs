import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: projectRoot,
  async redirects() {
    return [
      {
        source: "/insights",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/iran-uae-commercial-disputes",
        destination: "/corporate-commercial-disputes",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://wp-origin.rahilmostafaei.com/",
      },
      {
        source: "/blog/:path*",
        destination: "https://wp-origin.rahilmostafaei.com/:path*",
      },
    ];
  },
};

export default nextConfig;

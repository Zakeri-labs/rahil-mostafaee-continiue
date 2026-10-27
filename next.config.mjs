import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: projectRoot,
  // Every page URL ends with a slash. The redirect itself lives in middleware.ts so that
  // /api (Stripe webhook), /blog (WordPress origin) and file URLs are never redirected.
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/insights",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/iran-uae-commercial-disputes",
        destination: "/corporate-commercial-disputes/",
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

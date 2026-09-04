import type { Viewport } from "next";

export { getRootMetadata as getSiteMetadata } from "@/lib/seo/page-metadata";

export const currentViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0d0b",
};

import { GoogleTagManager } from "@next/third-parties/google";

const isProduction = process.env.VERCEL_ENV === "production";

/** Shared analytics boundary for the current root layout and future locale layouts. */
export function SiteAnalytics() {
  return isProduction ? <GoogleTagManager gtmId="GTM-WSNZJ7MH" /> : null;
}

import type { MetadataRoute } from "next";
import { INDEXABLE_ROUTE_PATHS } from "@/lib/seo/generated-routes";
import { getSiteUrl } from "@/lib/seo/site-url";

const EXTERNAL_INDEXABLE_ROUTE_PATHS = ["/blog"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const routePaths = [...new Set([...INDEXABLE_ROUTE_PATHS, ...EXTERNAL_INDEXABLE_ROUTE_PATHS])];

  return routePaths.map((routePath) => ({
    url: `${siteUrl}${routePath}`,
  }));
}

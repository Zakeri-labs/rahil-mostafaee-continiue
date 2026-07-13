import type { MetadataRoute } from "next";
import { INDEXABLE_ROUTE_PATHS } from "@/lib/seo/generated-routes";
import { getSiteUrl } from "@/lib/seo/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return INDEXABLE_ROUTE_PATHS.map((routePath) => ({
    url: `${siteUrl}${routePath}`,
  }));
}

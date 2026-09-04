import type { MetadataRoute } from "next";
import { LOCALIZED_ROUTE_IDS, SHARED_ROUTES, type LocalizedRouteId } from "@/lib/i18n/routes";
import {
  buildAbsoluteUrl,
  getLocalizedCanonicalUrl,
  getLocalizedLanguageUrls,
} from "@/lib/seo/localized";

/**
 * Future-only sitemap builder. The current app/sitemap.ts intentionally does not
 * import this module until real localized routes exist.
 */
export function buildLocalizedSitemapEntries(
  siteUrl: string,
  routeIds: readonly LocalizedRouteId[] = LOCALIZED_ROUTE_IDS,
): MetadataRoute.Sitemap {
  return routeIds.flatMap((route) => [
    {
      url: getLocalizedCanonicalUrl(siteUrl, route, "fa"),
      alternates: { languages: getLocalizedLanguageUrls(siteUrl, route) },
    },
    {
      url: getLocalizedCanonicalUrl(siteUrl, route, "en"),
      alternates: { languages: getLocalizedLanguageUrls(siteUrl, route) },
    },
  ]);
}

export function buildSharedBlogSitemapEntry(siteUrl: string): MetadataRoute.Sitemap[number] {
  return {
    url: buildAbsoluteUrl(siteUrl, SHARED_ROUTES.blog),
  };
}

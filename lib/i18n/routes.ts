import type { Locale } from "@/lib/i18n/config";

export const LOCALIZED_ROUTE_IDS = [
  "home",
  "services",
  "about",
  "contact",
  "international",
  "commercialDisputes",
  "assetRecovery",
] as const;

export type LocalizedRouteId = (typeof LOCALIZED_ROUTE_IDS)[number];
export type LocalizedRouteMap = Readonly<
  Record<LocalizedRouteId, Readonly<Record<Locale, string>>>
>;

/**
 * Existing bilingual URL contract shared by SEO and navigation.
 */
export const LOCALIZED_ROUTES: LocalizedRouteMap = {
  home: { fa: "/", en: "/en" },
  services: { fa: "/services", en: "/en/services" },
  about: { fa: "/about", en: "/en/about" },
  contact: { fa: "/contact", en: "/en/contact" },
  international: { fa: "/international", en: "/en/international" },
  commercialDisputes: {
    fa: "/corporate-commercial-disputes",
    en: "/en/corporate-commercial-disputes",
  },
  assetRecovery: { fa: "/uae-asset-debt-recovery", en: "/en/uae-asset-debt-recovery" },
};

/** Paths that must remain outside locale prefixing. */
export const SHARED_ROUTES = {
  blog: "/blog",
} as const;

export function getLocalizedPath(route: LocalizedRouteId, locale: Locale): string {
  return LOCALIZED_ROUTES[route][locale];
}

function splitInternalHref(href: string) {
  // Only known, root-relative application URLs are eligible for localization.
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  const suffixStart = href.search(/[?#]/);
  const pathname = suffixStart === -1 ? href : href.slice(0, suffixStart);
  const suffix = suffixStart === -1 ? "" : href.slice(suffixStart);
  return { pathname, suffix };
}

function isBlogPath(pathname: string): boolean {
  return pathname === SHARED_ROUTES.blog || pathname.startsWith(`${SHARED_ROUTES.blog}/`);
}

export function getLocalizedRouteId(pathname: string): LocalizedRouteId | undefined {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return LOCALIZED_ROUTE_IDS.find((route) =>
    Object.values(LOCALIZED_ROUTES[route]).includes(normalized),
  );
}

/** Keep fragments/queries and never invent localized paths for unknown destinations. */
export function localizeHref(href: string, locale: Locale): string {
  const parts = splitInternalHref(href);
  if (!parts || isBlogPath(parts.pathname)) return href;
  const route = getLocalizedRouteId(parts.pathname);
  return route ? `${getLocalizedPath(route, locale)}${parts.suffix}` : href;
}

/**
 * Blog and non-page paths cannot be language-switched. An unpaired application
 * page switches to the selected homepage without forwarding page-specific data.
 */
export function getLanguageSwitchHref(href: string, locale: Locale): string | null {
  const parts = splitInternalHref(href);
  if (!parts || isBlogPath(parts.pathname)) return null;
  if (/^\/(?:api|_next)(?:\/|$)/.test(parts.pathname) || /\.[^/]+$/.test(parts.pathname)) {
    return null;
  }
  const route = getLocalizedRouteId(parts.pathname);
  return route
    ? `${getLocalizedPath(route, locale)}${parts.suffix}`
    : getLocalizedPath("home", locale);
}

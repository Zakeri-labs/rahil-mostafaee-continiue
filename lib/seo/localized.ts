import type { Locale } from "@/lib/i18n/config";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { getLocalizedPath, type LocalizedRouteId } from "@/lib/i18n/routes";

export const OPEN_GRAPH_LOCALES: Readonly<Record<Locale, string>> = {
  fa: "fa_IR",
  en: "en_AE",
};

export const STRUCTURED_DATA_LANGUAGES: Readonly<Record<Locale, string>> = {
  fa: "fa",
  en: "en-AE",
};

export type LocalizedAlternates = {
  canonical: string;
  languages: Readonly<Record<Locale | "x-default", string>>;
};

export function buildAbsoluteUrl(siteUrl: string, pathname: string): string {
  return new URL(pathname, `${siteUrl.replace(/\/+$/, "")}/`).toString();
}

export function getLocalizedCanonicalUrl(
  siteUrl: string,
  route: LocalizedRouteId,
  locale: Locale,
): string {
  return buildAbsoluteUrl(siteUrl, getLocalizedPath(route, locale));
}

export function getLocalizedLanguageUrls(
  siteUrl: string,
  route: LocalizedRouteId,
): LocalizedAlternates["languages"] {
  return {
    fa: getLocalizedCanonicalUrl(siteUrl, route, "fa"),
    en: getLocalizedCanonicalUrl(siteUrl, route, "en"),
    "x-default": getLocalizedCanonicalUrl(siteUrl, route, DEFAULT_LOCALE),
  };
}

/**
 * Self-canonical and reciprocal hreflang for existing bilingual route pairs.
 */
export function buildLocalizedAlternates(
  siteUrl: string,
  route: LocalizedRouteId,
  locale: Locale,
): LocalizedAlternates {
  return {
    canonical: getLocalizedCanonicalUrl(siteUrl, route, locale),
    languages: getLocalizedLanguageUrls(siteUrl, route),
  };
}

export function getOpenGraphLocale(locale: Locale): string {
  return OPEN_GRAPH_LOCALES[locale];
}

export function getStructuredDataLanguage(locale: Locale): string {
  return STRUCTURED_DATA_LANGUAGES[locale];
}

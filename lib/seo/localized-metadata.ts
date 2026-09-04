import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import type { LocalizedRouteId } from "@/lib/i18n/routes";
import {
  buildLocalizedAlternates,
  buildAbsoluteUrl,
  getLocalizedCanonicalUrl,
  getOpenGraphLocale,
  OPEN_GRAPH_LOCALES,
} from "@/lib/seo/localized";

export type LocalizedMetadataCopy = {
  title: string;
  description: string;
  openGraphTitle?: string;
  twitterTitle?: string;
};

export type LocalizedMetadataCopyMap = Readonly<Record<Locale, LocalizedMetadataCopy>>;

export type LocalizedMetadataInput = {
  locale: Locale;
  siteUrl: string;
  copy: LocalizedMetadataCopyMap;
  siteName: string;
  socialImage: string;
} & ({ route: LocalizedRouteId; pathname?: never } | { pathname: string; route?: never });

export function getLocalizedTitle(copy: LocalizedMetadataCopyMap, locale: Locale): string {
  return copy[locale].title;
}

export function getLocalizedDescription(copy: LocalizedMetadataCopyMap, locale: Locale): string {
  return copy[locale].description;
}

/**
 * Shared metadata generation. Only real bilingual pairs receive hreflang;
 * unpaired pages supply their own pathname instead.
 */
export function buildLocalizedMetadata({
  locale,
  route,
  pathname,
  siteUrl,
  copy,
  siteName,
  socialImage,
}: LocalizedMetadataInput): Metadata {
  const localizedCopy = copy[locale];
  const alternateLocale: Locale = locale === "fa" ? "en" : "fa";
  const canonical =
    route !== undefined
      ? getLocalizedCanonicalUrl(siteUrl, route, locale)
      : buildAbsoluteUrl(siteUrl, pathname);

  return {
    title: localizedCopy.title,
    description: localizedCopy.description,
    alternates:
      route !== undefined ? buildLocalizedAlternates(siteUrl, route, locale) : { canonical },
    openGraph: {
      title: localizedCopy.openGraphTitle ?? localizedCopy.title,
      description: localizedCopy.description,
      url: canonical,
      type: "website",
      siteName,
      locale: getOpenGraphLocale(locale),
      ...(route !== undefined ? { alternateLocale: [OPEN_GRAPH_LOCALES[alternateLocale]] } : {}),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: localizedCopy.twitterTitle ?? localizedCopy.openGraphTitle ?? localizedCopy.title,
      description: localizedCopy.description,
      images: [socialImage],
    },
  };
}

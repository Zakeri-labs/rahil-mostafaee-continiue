import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { bookingSeoCopy, pageSeoCopy, siteNames } from "@/lib/i18n/dictionaries/seo";
import type { LocalizedRouteId } from "@/lib/i18n/routes";
import { buildLocalizedMetadata } from "@/lib/seo/localized-metadata";
import { getSiteUrl } from "@/lib/seo/site-url";

const socialImage = "/social/rahil-mostafaei-social.png";

export function getPageMetadata(locale: Locale, route: LocalizedRouteId): Metadata {
  return buildLocalizedMetadata({
    locale,
    route,
    siteUrl: getSiteUrl(),
    siteName: siteNames[locale],
    socialImage,
    copy: pageSeoCopy[route],
  });
}

export function getRootMetadata(locale: Locale): Metadata {
  const page = getPageMetadata(locale, "home");
  // Canonical/hreflang belong to pages; never inherit the home pair on unpaired routes.
  const { alternates: _alternates, ...shared } = page;
  return {
    ...shared,
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: `${pageSeoCopy.home[locale].title} | ${siteNames[locale]}`,
      template: `%s | ${siteNames[locale]}`,
    },
    authors: [{ name: siteNames[locale] }],
    ...(locale === "en" ? { robots: { index: true, follow: true } } : {}),
  };
}

/** These routes exist only in Persian; do not advertise nonexistent English alternates. */
export function getBookingMetadata(page: "booking" | "confirmation"): Metadata {
  return buildLocalizedMetadata({
    locale: "fa",
    pathname: page === "booking" ? "/booking" : "/booking-confirmation",
    siteUrl: getSiteUrl(),
    siteName: siteNames.fa,
    socialImage,
    copy: bookingSeoCopy[page],
  });
}

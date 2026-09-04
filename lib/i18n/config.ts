export const SUPPORTED_LOCALES = ["fa", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

/**
 * The default locale for the future URL-based architecture. Persian routes will
 * remain unprefixed, while English routes will live below `/en`.
 */
export const DEFAULT_LOCALE: Locale = "fa";

/**
 * Transitional default used by the existing localStorage-based client provider.
 * Keep this separate from DEFAULT_LOCALE until URL-based routing is introduced.
 */
export const LEGACY_CLIENT_DEFAULT_LOCALE: Locale = "en";

export type LocaleDirection = "ltr" | "rtl";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && SUPPORTED_LOCALES.some((locale) => locale === value);
}

export function getLocaleDirection(locale: Locale): LocaleDirection {
  return locale === "fa" ? "rtl" : "ltr";
}

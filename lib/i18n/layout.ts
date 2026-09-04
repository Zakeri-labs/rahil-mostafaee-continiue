import type { Locale, LocaleDirection } from "@/lib/i18n/config";
import { getLocaleDirection } from "@/lib/i18n/config";

export type LocaleLayoutConfig = {
  locale: Locale;
  lang: Locale;
  dir: LocaleDirection;
};

/** Server-safe document configuration for future locale-specific root layouts. */
export function getLocaleLayoutConfig(locale: Locale): LocaleLayoutConfig {
  return {
    locale,
    lang: locale,
    dir: getLocaleDirection(locale),
  };
}

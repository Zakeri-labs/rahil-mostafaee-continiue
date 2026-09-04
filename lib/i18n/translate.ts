import type { Locale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/dictionaries/en";
import { fa } from "@/lib/i18n/dictionaries/fa";
import type { Translate, TranslationCatalog, TranslationDictionary } from "@/lib/i18n/types";

export type { Translate, TranslationCatalog, TranslationDictionary } from "@/lib/i18n/types";

export const translationCatalog: TranslationCatalog = { fa, en };

/**
 * Translate one key without relying on React or browser state. This entry point
 * is safe for future Server Components, metadata, and structured data builders.
 */
export function translate(locale: Locale, key: string, fallbackLocale: Locale = "en"): string {
  return translationCatalog[locale][key] ?? translationCatalog[fallbackLocale][key] ?? key;
}

/**
 * Framework-neutral translation lookup. Server and client code can share this
 * function once the existing dictionaries are moved out of the client provider.
 */
export function createTranslator(
  locale: Locale,
  catalog: TranslationCatalog = translationCatalog,
  fallbackLocale: Locale = "en",
): Translate {
  return (key) => catalog[locale][key] ?? catalog[fallbackLocale][key] ?? key;
}

import type { Locale } from "@/lib/i18n/config";

export type TranslationDictionary = Readonly<Record<string, string>>;
export type TranslationCatalog = Readonly<Record<Locale, TranslationDictionary>>;
export type Translate = (key: string) => string;

"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  getLocaleDirection,
  isLocale,
  LEGACY_CLIENT_DEFAULT_LOCALE,
  type Locale,
} from "@/lib/i18n/config";
import { createTranslator } from "@/lib/i18n/translate";

export type Lang = Locale;

interface Ctx {
  lang: Lang;
  t: (k: string) => string;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<Ctx | null>(null);

type I18nProviderProps = {
  children: ReactNode;
  /** Optional only for legacy consumers outside the route-controlled app shell. */
  locale?: Locale;
};

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const [clientLang, setClientLang] = useState<Lang>(locale ?? LEGACY_CLIENT_DEFAULT_LOCALE);
  // Resolve directly from props, not an effect, so SSR and hydration agree.
  const lang = locale ?? clientLang;
  const dir = getLocaleDirection(lang);

  useEffect(() => {
    if (locale !== undefined) return;

    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
      setClientLang(isLocale(stored) ? stored : LEGACY_CLIENT_DEFAULT_LOCALE);
    } catch {
      // Storage can be unavailable; legacy consumers retain the English default.
      setClientLang(LEGACY_CLIENT_DEFAULT_LOCALE);
    }
  }, [locale]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      document.documentElement.classList.toggle("font-fa", lang === "fa");
      document.body.lang = lang;
      document.body.dir = dir;
    }
  }, [dir, lang]);

  const setLang = (l: Lang) => {
    // Route-controlled content never changes in response to a saved preference.
    // Keep the existing setter for the switcher and legacy non-route consumers.
    if (locale === undefined) setClientLang(l);
    try {
      if (typeof window !== "undefined") localStorage.setItem("lang", l);
    } catch {
      // Persisting a preference is optional, including when storage is blocked.
    }
  };

  const t = createTranslator(lang);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      <div lang={lang} dir={dir} data-lang={lang} className="min-h-screen">
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

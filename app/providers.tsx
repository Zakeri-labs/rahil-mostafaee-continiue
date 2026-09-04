"use client";

import type { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

type ProvidersProps = {
  children: ReactNode;
  locale: Locale;
};

export function Providers({ children, locale }: ProvidersProps) {
  return <I18nProvider locale={locale}>{children}</I18nProvider>;
}

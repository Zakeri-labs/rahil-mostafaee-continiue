"use client";

import Link from "next/link";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { useI18n } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n/routes";

type LocalizedLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string };

/** Preserve Link props and refs, including Radix asChild menu behavior. */
export const LocalizedLink = forwardRef<HTMLAnchorElement, LocalizedLinkProps>(
  function LocalizedLink({ href, ...props }, ref) {
    const { lang } = useI18n();
    return <Link {...props} ref={ref} href={localizeHref(href, lang)} />;
  },
);

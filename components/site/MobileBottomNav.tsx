"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";

export function MobileBottomNav() {
  const { t } = useI18n();
  const pathname = usePathname();

  const waMsg = encodeURIComponent(t("fab.whatsapp.msg"));
  const waHref = `https://wa.me/${LEADS_WHATSAPP_NUMBER}?text=${waMsg}`;

  return (
    <>
      {/* Bottom nav bar */}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-[80] glass-strong border-t border-gold/20"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Mobile navigation"
      >
        <div className="grid h-16 grid-cols-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-full flex-col items-center justify-end text-[#25D366]"
            aria-label={t("fab.whatsapp.aria")}
          >
            <span className="absolute -top-5 flex h-14 w-14 items-center justify-center rounded-full bg-onyx text-[#25D366] shadow-glow ring-4 ring-[#25D366]">
              <MessageCircle className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <span className="mb-2 text-[9px] tracking-[0.15em] uppercase text-[#25D366]">
              {t("fab.whatsapp.label")}
            </span>
          </a>

          <Link
            href="/contact"
            className={`relative flex h-full flex-col items-center justify-end ${
              pathname === "/contact" ? "text-gold" : "text-muted-foreground"
            }`}
            aria-label={t("nav.review")}
          >
            <span className="absolute -top-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-onyx shadow-glow ring-4 ring-onyx">
              <CalendarCheck className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <span className="mb-2 text-[9px] tracking-[0.15em] uppercase text-gold">
              {t("nav.review")}
            </span>
          </Link>
        </div>
      </nav>

      {/* Spacer so page content isn't hidden behind the bar */}
      <div className="lg:hidden h-20" aria-hidden />
    </>
  );
}

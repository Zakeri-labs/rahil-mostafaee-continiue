"use client";

import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";

export function WhatsAppFab() {
  const { t, dir } = useI18n();
  const message = encodeURIComponent(t("fab.whatsapp.msg"));
  const href = `https://wa.me/${LEADS_WHATSAPP_NUMBER}?text=${message}`;
  const side = dir === "rtl" ? "left-6" : "right-6";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("fab.whatsapp.aria")}
      className={`hidden lg:inline-flex fixed bottom-6 ${side} z-[90] group items-center gap-3 px-4 py-3 rounded-full shadow-luxe bg-[#25D366] text-white hover:scale-105 transition-transform`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white/70 opacity-75 pulse-gold" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
      </span>
      <MessageCircle className="w-5 h-5" strokeWidth={1.8} />
      <span className="hidden sm:inline text-xs tracking-[0.2em] uppercase font-medium lg:text-sm lg:tracking-[0.16em]">
        {t("fab.whatsapp.label")}
      </span>
    </a>
  );
}

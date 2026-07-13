"use client";

import Link from "next/link";
import logo from "@/assets/logo-mark.png";
import { useI18n } from "@/lib/i18n";
import { LEADS_WHATSAPP_DISPLAY_NUMBER } from "@/lib/leads/config";

export function Footer() {
  const { t, dir } = useI18n();
  return (
    <footer className="relative mt-32 border-t border-gold/10 bg-onyx" dir={dir}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo.src} alt="" className="h-12 w-12 object-contain" loading="lazy" />
              <div>
                <div className="font-display text-2xl text-ivory">
                  Rahil <span className="text-gold">Mostafaee</span>
                </div>
                <div className="max-w-sm text-[10px] tracking-[0.3em] uppercase text-muted-foreground leading-relaxed break-words lg:text-xs lg:tracking-[0.22em]">
                  {t("footer.role")}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              {t("footer.blurb")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all duration-300 lg:text-sm lg:tracking-[0.16em]"
            >
              {t("footer.cta")}
            </Link>
            <div className="gold-divider w-24" />
            <p className="text-xs text-muted-foreground">{t("footer.langs")}</p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 lg:text-xs lg:tracking-[0.22em]">
                {t("footer.col.practice")}
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/services" className="hover:text-ivory">
                    {t("footer.link.cross")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-ivory">
                    {t("footer.link.residency")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-ivory">
                    {t("footer.link.corporate")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-ivory">
                    {t("footer.link.realestate")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-ivory">
                    {t("footer.link.wills")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 lg:text-xs lg:tracking-[0.22em]">
                {t("footer.col.firm")}
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/services" className="hover:text-ivory">
                    {t("footer.link.services")}
                  </Link>
                </li>
                <li>
                  <Link href="/international" className="hover:text-ivory">
                    {t("footer.link.intl")}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-ivory">
                    {t("footer.link.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="hover:text-ivory">
                    {t("footer.link.insights")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-ivory">
                    {t("footer.link.contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 lg:text-xs lg:tracking-[0.22em]">
                {t("footer.col.office")}
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>{t("footer.office.area")}</li>
                <li>{t("footer.office.city")}</li>
                <li>{LEADS_WHATSAPP_DISPLAY_NUMBER}</li>
                <li>{t("footer.office.byappt")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Rahil Mostafaee Legal. {t("footer.copyright")}
          </div>
          <div className="tracking-[0.25em] uppercase">{t("footer.privileged")}</div>
        </div>
      </div>
    </footer>
  );
}

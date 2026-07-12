"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";
import { useI18n, type Lang } from "@/lib/i18n";

const links: { to: string; key: string }[] = [
  { to: "/", key: "nav.home" },
  { to: "/services", key: "nav.practice" },
  { to: "/international", key: "nav.international" },
  { to: "/about", key: "nav.firm" },
  { to: "/insights", key: "nav.insights" },
  { to: "/contact", key: "nav.contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLang = (l: Lang) => setLang(l);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-10 transition-all duration-500 ${scrolled ? "glass-strong rounded-full" : ""}`}
      >
        <div className="flex h-20 items-center justify-between lg:grid lg:grid-cols-[minmax(14rem,auto)_minmax(0,1fr)_auto] lg:gap-4 xl:gap-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-4 group lg:max-w-[17rem] xl:max-w-none"
          >
            <img
              src={logo.src}
              alt="Rahil Mostafaee"
              className={`object-contain transition-all duration-500 ${scrolled ? "h-12 w-12" : "h-14 w-14"}`}
            />
            <div className="min-w-0 leading-tight lg:whitespace-nowrap">
              <div className="font-display text-2xl tracking-wide text-ivory">
                Rahil <span className="text-gold">Mostafaee</span>
              </div>
              <div className="truncate text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1 lg:text-xs lg:tracking-[0.22em]">
                {t("tag.legal")}
              </div>
            </div>
          </Link>

          <nav className="hidden min-w-0 items-center justify-center gap-2 xl:gap-3 2xl:gap-4 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className={`whitespace-nowrap text-sm tracking-wide transition-colors hover:text-gold min-[1180px]:text-[15px] min-[1180px]:tracking-normal 2xl:text-base ${
                  pathname === l.to ? "text-gold" : "text-muted-foreground"
                }`}
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center justify-end gap-2 xl:gap-3 lg:flex">
            <div className="flex shrink-0 items-center text-[10px] tracking-[0.25em] uppercase border border-gold/20 rounded-full overflow-hidden lg:text-xs lg:tracking-[0.16em]">
              <button
                onClick={() => switchLang("en")}
                className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-gold text-onyx" : "text-muted-foreground hover:text-gold"}`}
              >
                EN
              </button>
              <button
                onClick={() => switchLang("fa")}
                className={`px-3 py-1.5 transition-colors font-fa ${lang === "fa" ? "bg-gold text-onyx" : "text-muted-foreground hover:text-gold"}`}
              >
                فا
              </button>
            </div>

            <Link
              href="/contact"
              className="whitespace-nowrap px-4 py-2.5 text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all duration-300 lg:text-sm lg:tracking-[0.16em] xl:px-5"
            >
              {t("nav.book")}
            </Link>
          </div>

          {/* Mobile: language toggle in top bar; full menu lives in bottom nav */}
          <div className="lg:hidden flex items-center text-[10px] tracking-[0.25em] uppercase border border-gold/20 rounded-full overflow-hidden">
            <button
              onClick={() => switchLang("en")}
              className={`px-2.5 py-1 transition-colors ${lang === "en" ? "bg-gold text-onyx" : "text-muted-foreground"}`}
            >
              EN
            </button>
            <button
              onClick={() => switchLang("fa")}
              className={`px-2.5 py-1 transition-colors font-fa ${lang === "fa" ? "bg-gold text-onyx" : "text-muted-foreground"}`}
            >
              فا
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

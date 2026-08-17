"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BookOpen, Building2, ChevronDown, Globe, Mail, Menu, X } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links: { to: string; key: string; lang?: "fa" }[] = [
  { to: "/international", key: "nav.international" },
  { to: "/about", key: "nav.firm" },
  { to: "/blog", key: "nav.blog", lang: "fa" },
  { to: "/contact", key: "nav.contact" },
];

const serviceLinks = [
  { to: "/corporate-commercial-disputes", key: "nav.services.commercial" },
  { to: "/uae-asset-debt-recovery", key: "nav.services.asset" },
  { to: "/services", key: "nav.services.other" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang, dir } = useI18n();
  const servicesActive = serviceLinks.some((link) => pathname === link.to);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-10 transition-all duration-500 ${scrolled ? "glass-strong rounded-full" : "glass rounded-[2rem]"}`}
      >
        <div className="flex h-20 items-center justify-between lg:grid lg:grid-cols-[minmax(14rem,auto)_minmax(0,1fr)_auto] lg:gap-4 xl:gap-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-4 group lg:max-w-[17rem] xl:max-w-none"
          >
            <img
              src={logo.src}
              alt="Rahil Mostafaei"
              className={`object-contain transition-all duration-500 ${scrolled ? "h-12 w-12" : "h-14 w-14"}`}
            />
            <div className="min-w-0 leading-tight lg:whitespace-nowrap">
              <div className="font-display text-2xl tracking-wide text-ivory">
                Rahil <span className="text-gold">Mostafaei</span>
              </div>
              <div className="truncate text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1 lg:text-xs lg:tracking-[0.22em]">
                {t("tag.legal")}
              </div>
            </div>
          </Link>

          <nav className="hidden min-w-0 items-center justify-center gap-2 xl:gap-3 2xl:gap-4 lg:flex">
            <DropdownMenu dir={dir}>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={`group inline-flex items-center gap-1 whitespace-nowrap text-sm tracking-wide transition-colors hover:text-gold min-[1180px]:text-[15px] min-[1180px]:tracking-normal 2xl:text-base ${
                    servicesActive ? "text-gold" : "text-muted-foreground"
                  }`}
                >
                  {t("nav.practice")}
                  <ChevronDown
                    className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={12}
                style={{ direction: dir }}
                className="min-w-72 border-gold/20 bg-charcoal p-2 text-ivory shadow-luxe"
              >
                {serviceLinks.map((serviceLink) => (
                  <DropdownMenuItem key={serviceLink.to} asChild>
                    <Link
                      href={serviceLink.to}
                      className={`cursor-pointer px-3 py-2.5 text-sm text-muted-foreground hover:text-ivory focus:bg-gold/10 focus:text-ivory ${
                        pathname === serviceLink.to ? "text-gold" : ""
                      }`}
                    >
                      {t(serviceLink.key)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {links
              .filter((link) => !link.lang || link.lang === lang)
              .map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`whitespace-nowrap text-sm tracking-wide transition-colors hover:text-gold min-[1180px]:text-[15px] min-[1180px]:tracking-normal 2xl:text-base ${
                    pathname === link.to ? "text-gold" : "text-muted-foreground"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
          </nav>

          <div className="hidden shrink-0 items-center justify-end gap-2 xl:gap-3 lg:flex">
            <LanguageSwitcher />

            <Link
              href="/contact"
              className="whitespace-nowrap px-4 py-2.5 text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all duration-300 lg:text-sm lg:tracking-[0.16em] xl:px-5"
            >
              {t("nav.book")}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={t("nav.menu.open")}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/20 text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-onyx/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setMenuOpen(false)}
            aria-label={t("nav.menu.close")}
          />

          <aside
            id="mobile-navigation-menu"
            dir={dir}
            className={`absolute inset-y-0 w-[min(88vw,24rem)] overflow-y-auto border-gold/30 bg-charcoal px-6 pb-8 shadow-luxe animate-fade-in ${dir === "rtl" ? "left-0 border-r" : "right-0 border-l"}`}
          >
            <div className="flex items-center justify-between border-b border-gold/10 pb-5 pt-6">
              <div>
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold">
                  {t("nav.more")}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{t("tag.legal")}</div>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t("nav.menu.close")}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label={t("nav.more")} className="space-y-2 py-6">
              <div className="border border-gold/15 p-4">
                <div className="flex items-center gap-3 text-sm text-gold">
                  <span>{t("nav.practice")}</span>
                  <ChevronDown className="ms-auto size-4" aria-hidden="true" />
                </div>
                <div className="mt-3 space-y-1 border-s border-gold/15 ps-4">
                  {serviceLinks.map((serviceLink) => (
                    <Link
                      key={serviceLink.to}
                      href={serviceLink.to}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-2 text-sm text-muted-foreground transition-colors hover:text-gold ${pathname === serviceLink.to ? "text-gold" : ""}`}
                    >
                      {t(serviceLink.key)}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/international"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 border border-gold/15 p-4 text-sm transition-colors hover:border-gold/40 hover:text-gold ${pathname === "/international" ? "text-gold" : "text-ivory"}`}
              >
                <Globe className="size-4 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <span>{t("nav.international")}</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 border border-gold/15 p-4 text-sm transition-colors hover:border-gold/40 hover:text-gold ${pathname === "/about" ? "text-gold" : "text-ivory"}`}
              >
                <Building2 className="size-4 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <span>{t("nav.firm")}</span>
              </Link>
              {lang === "fa" && (
                <Link
                  href="/blog"
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 border border-gold/15 p-4 text-sm transition-colors hover:border-gold/40 hover:text-gold ${pathname === "/blog" ? "text-gold" : "text-ivory"}`}
                >
                  <BookOpen className="size-4 text-gold" strokeWidth={1.4} aria-hidden="true" />
                  <span>{t("nav.blog")}</span>
                </Link>
              )}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 border border-gold/15 p-4 text-sm transition-colors hover:border-gold/40 hover:text-gold ${pathname === "/contact" ? "text-gold" : "text-ivory"}`}
              >
                <Mail className="size-4 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <span>{t("nav.contact")}</span>
              </Link>
            </nav>

            <div className="space-y-3 border-t border-gold/10 pt-6">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-full border border-gold/40 px-4 py-3 text-center text-xs tracking-[0.16em] uppercase text-gold transition-all hover:bg-gold hover:text-onyx"
              >
                {t("nav.book")}
              </Link>
              <LanguageSwitcher className="w-full" />
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}

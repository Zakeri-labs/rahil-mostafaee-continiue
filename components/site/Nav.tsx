"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
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
  const pathname = usePathname();
  const { t, lang, dir } = useI18n();
  const servicesActive = serviceLinks.some((link) => pathname === link.to);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

          <LanguageSwitcher compact className="lg:hidden" />
        </div>
      </div>
    </header>
  );
}

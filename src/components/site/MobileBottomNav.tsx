import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Home, Briefcase, CalendarCheck, MessageCircle, Menu as MenuIcon, X, Globe, LogIn, LogOut, Mail, BookOpen, Building2 } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { useAuth } from "@/lib/use-auth";

const WHATSAPP_NUMBER = "971500000000";

export function MobileBottomNav() {
  const { t, lang, setLang } = useI18n();
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  const waMsg = encodeURIComponent(t("fab.whatsapp.msg"));
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

  const switchLang = (l: Lang) => setLang(l);

  return (
    <>
      {/* Bottom nav bar */}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-[80] glass-strong border-t border-gold/20"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Mobile navigation"
      >
        <div className="grid grid-cols-5 items-end h-16">
          <Link
            to="/"
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-gold transition-colors h-full"
            activeProps={{ className: "text-gold" }}
            activeOptions={{ exact: true }}
          >
            <Home className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.15em] uppercase">{t("nav.home")}</span>
          </Link>

          <Link
            to="/services"
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-gold transition-colors h-full"
            activeProps={{ className: "text-gold" }}
          >
            <Briefcase className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.15em] uppercase">{t("nav.practice")}</span>
          </Link>

          {/* Center CTA — Book */}
          <Link
            to="/booking"
            className="relative flex flex-col items-center justify-end h-full"
            aria-label={t("nav.book")}
          >
            <span className="absolute -top-5 flex items-center justify-center w-14 h-14 rounded-full bg-gold text-onyx shadow-glow ring-4 ring-onyx">
              <CalendarCheck className="w-6 h-6" strokeWidth={1.6} />
            </span>
            <span className="text-[9px] tracking-[0.15em] uppercase text-gold mb-2">
              {t("nav.book").split(" ")[0]}
            </span>
          </Link>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-[#25D366] transition-colors h-full"
            aria-label={t("fab.whatsapp.aria")}
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.15em] uppercase">{t("fab.whatsapp.label")}</span>
          </a>

          <button
            onClick={() => setOpen(true)}
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-gold transition-colors h-full"
            aria-label="Open menu"
          >
            <MenuIcon className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.15em] uppercase">More</span>
          </button>
        </div>
      </nav>

      {/* Slide-up menu sheet */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[95]" role="dialog" aria-modal="true">
          <button
            className="absolute inset-0 bg-onyx/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div
            className="absolute bottom-0 inset-x-0 bg-charcoal border-t border-gold/30 rounded-t-3xl p-6 pb-10 animate-fade-in shadow-luxe"
            style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Menu</div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-gold">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link to="/international" onClick={() => setOpen(false)} className="flex items-center gap-3 p-4 border border-gold/15 hover:border-gold/40 transition-colors">
                <Globe className="w-4 h-4 text-gold" strokeWidth={1.4} />
                <span className="text-sm text-ivory">{t("nav.international")}</span>
              </Link>
              <Link to="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 p-4 border border-gold/15 hover:border-gold/40 transition-colors">
                <Building2 className="w-4 h-4 text-gold" strokeWidth={1.4} />
                <span className="text-sm text-ivory">{t("nav.firm")}</span>
              </Link>
              <Link to="/insights" onClick={() => setOpen(false)} className="flex items-center gap-3 p-4 border border-gold/15 hover:border-gold/40 transition-colors">
                <BookOpen className="w-4 h-4 text-gold" strokeWidth={1.4} />
                <span className="text-sm text-ivory">{t("nav.insights")}</span>
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 p-4 border border-gold/15 hover:border-gold/40 transition-colors">
                <Mail className="w-4 h-4 text-gold" strokeWidth={1.4} />
                <span className="text-sm text-ivory">{t("nav.contact")}</span>
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gold/10 flex items-center justify-between">
              <div className="flex items-center text-[10px] tracking-[0.25em] uppercase border border-gold/20 rounded-full overflow-hidden">
                <button
                  onClick={() => switchLang("en")}
                  className={`px-4 py-2 transition-colors ${lang === "en" ? "bg-gold text-onyx" : "text-muted-foreground"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLang("fa")}
                  className={`px-4 py-2 transition-colors font-fa ${lang === "fa" ? "bg-gold text-onyx" : "text-muted-foreground"}`}
                >
                  فا
                </button>
              </div>

              {user ? (
                <button
                  onClick={() => { signOut(); setOpen(false); }}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold"
                >
                  <LogOut className="w-4 h-4" />
                  {t("nav.logout")}
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold"
                >
                  <LogIn className="w-4 h-4" />
                  {t("nav.login")}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Spacer so page content isn't hidden behind the bar */}
      <div className="lg:hidden h-20" aria-hidden />
    </>
  );
}

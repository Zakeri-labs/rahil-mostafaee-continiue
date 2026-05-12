import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";
import { useI18n, type Lang } from "@/lib/i18n";
import { useAuth } from "@/lib/use-auth";

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
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const { user, signOut } = useAuth();

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
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src={logo}
              alt="Rahil Mostafaee"
              className={`object-contain transition-all duration-500 ${scrolled ? "h-12 w-12" : "h-14 w-14"}`}
            />
            <div className="leading-tight">
              <div className="font-display text-2xl tracking-wide text-ivory">
                Rahil <span className="text-gold">Mostafaee</span>
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                {t("tag.legal")}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm tracking-wide text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center text-[10px] tracking-[0.25em] uppercase border border-gold/20 rounded-full overflow-hidden">
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

            {user ? (
              <button
                onClick={() => signOut()}
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                {t("nav.logout")}
              </button>
            ) : (
              <Link
                to="/login"
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                {t("nav.login")}
              </Link>
            )}

            <Link
              to="/booking"
              className="px-5 py-2.5 text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all duration-300"
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

        {open && (
          <div className="lg:hidden mt-4 pb-6 space-y-3 animate-fade-in">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-ivory hover:text-gold"
              >
                {t(l.key)}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="block py-3 mt-3 text-center text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold"
            >
              {t("nav.book")}
            </Link>
            <div className="flex justify-center gap-2 pt-3">
              <button onClick={() => switchLang("en")} className={`px-3 py-1 text-xs ${lang === "en" ? "text-gold" : "text-muted-foreground"}`}>EN</button>
              <button onClick={() => switchLang("fa")} className={`px-3 py-1 text-xs font-fa ${lang === "fa" ? "text-gold" : "text-muted-foreground"}`}>فا</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

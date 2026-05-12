import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Practice" },
  { to: "/international", label: "International" },
  { to: "/about", label: "Firm" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-10 transition-all duration-500 ${
          scrolled ? "glass-strong rounded-full" : ""
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Rahil Mostafaee" className="h-9 w-9 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide text-ivory">
                Rahil <span className="text-gold">Mostafaee</span>
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Legal Counsel · Dubai
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm tracking-wide text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all duration-300"
            >
              Confidential Consultation
            </Link>
          </div>

          <button
            className="lg:hidden text-ivory"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <div className="w-6 h-px bg-gold" />
              <div className="w-6 h-px bg-gold" />
              <div className="w-6 h-px bg-gold" />
            </div>
          </button>
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
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block py-3 mt-3 text-center text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold"
            >
              Confidential Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

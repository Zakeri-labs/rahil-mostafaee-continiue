import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-mark.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold/10 bg-onyx">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-12 w-12 object-contain" loading="lazy" />
              <div>
                <div className="font-display text-2xl text-ivory">
                  Rahil <span className="text-gold">Mostafaee</span>
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Strategic Legal Counsel
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Discreet, cross-border legal representation for high-value Iranian
              clients in Dubai and across international jurisdictions.
            </p>
            <div className="gold-divider w-24" />
            <p className="text-xs text-muted-foreground">
              فارسی · English · العربية
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Practice</div>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link to="/services" className="hover:text-ivory">Cross-Border</Link></li>
                <li><Link to="/services" className="hover:text-ivory">Residency & Visas</Link></li>
                <li><Link to="/services" className="hover:text-ivory">Corporate</Link></li>
                <li><Link to="/services" className="hover:text-ivory">Real Estate</Link></li>
                <li><Link to="/services" className="hover:text-ivory">DIFC Wills</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Firm</div>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link to="/about" className="hover:text-ivory">About</Link></li>
                <li><Link to="/international" className="hover:text-ivory">International</Link></li>
                <li><Link to="/insights" className="hover:text-ivory">Insights</Link></li>
                <li><Link to="/contact" className="hover:text-ivory">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Office</div>
              <ul className="space-y-3 text-muted-foreground">
                <li>Business Bay</li>
                <li>Dubai, UAE</li>
                <li>+971 ·· ··· ····</li>
                <li>By appointment only</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Rahil Mostafaee Legal. All matters held in strict confidence.</div>
          <div className="tracking-[0.25em] uppercase">Privileged & Confidential</div>
        </div>
      </div>
    </footer>
  );
}

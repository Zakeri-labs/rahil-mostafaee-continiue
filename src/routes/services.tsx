import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe2, Crown, Building2, Scale, ShieldCheck, Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Rahil Mostafaee Legal" },
      { name: "description", content: "Cross-border, residency, corporate, real estate, wealth protection and crisis representation for Iranian clients in Dubai." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t, dir } = useI18n();
  const groups = [
    { icon: Globe2, key: "g1" },
    { icon: Crown, key: "g2" },
    { icon: Building2, key: "g3" },
    { icon: Scale, key: "g4" },
    { icon: ShieldCheck, key: "g5" },
    { icon: Lock, key: "g6" },
  ] as const;
  return (
    <div dir={dir}>
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("svc.kicker")}</span>
          </div>
          <h1 className="font-display text-6xl lg:text-9xl text-ivory tracking-tight leading-[0.95]">
            {t("svc.h1.a")}<br /><span className="italic gradient-gold-text">{t("svc.h1.b")}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">{t("svc.intro")}</p>
        </div>
      </section>

      <section className="border-t border-gold/10">
        {groups.map((g, i) => (
          <div key={g.key} className={`border-b border-gold/10 ${i % 2 === 0 ? "bg-onyx" : "bg-charcoal/40"}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 self-start">
                <g.icon className="w-8 h-8 text-gold" strokeWidth={1.2} />
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">{t(`svc.${g.key}.label`)}</div>
                <h2 className="font-display text-4xl lg:text-5xl text-ivory leading-[1.05] tracking-tight">{t(`svc.${g.key}.title`)}</h2>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/10 hairline">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="bg-onyx p-6 hover:bg-charcoal transition-colors">
                    <div className="text-sm text-ivory">{t(`svc.${g.key}.i${n}`)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-10">
          <h2 className="font-display text-4xl lg:text-6xl text-ivory tracking-tight">{t("svc.cta.title")}</h2>
          <Link to="/booking" className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow">
            <span className="text-xs tracking-[0.3em] uppercase font-medium">{t("svc.cta.btn")}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

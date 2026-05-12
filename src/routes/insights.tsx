import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Dubai & UAE Legal Intelligence" },
      { name: "description", content: "Briefings on UAE residency, DIFC wills, property law, sanctions and cross-border strategy for high-net-worth Iranian clients." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const { t, dir } = useI18n();
  const posts = [
    { cat: "ins.cat.residency", k: "p1" },
    { cat: "ins.cat.wills", k: "p2" },
    { cat: "ins.cat.property", k: "p3" },
    { cat: "ins.cat.corporate", k: "p4" },
    { cat: "ins.cat.international", k: "p5" },
    { cat: "ins.cat.wealth", k: "p6" },
  ];
  return (
    <div dir={dir}>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("ins.kicker")}</span>
          </div>
          <h1 className="font-display text-6xl lg:text-9xl text-ivory tracking-tight leading-[0.95]">
            {t("ins.h1.a")}<br /><span className="italic gradient-gold-text">{t("ins.h1.b")}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">{t("ins.intro")}</p>
        </div>
      </section>

      <section className="border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 hairline">
          {posts.map((p) => (
            <article key={p.k} className="group bg-onyx p-10 hover:bg-charcoal transition-colors duration-500 cursor-pointer">
              <div className="flex items-center justify-between mb-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{t(p.cat)}</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{t(`ins.${p.k}.date`)}</span>
              </div>
              <h2 className="font-display text-2xl text-ivory leading-tight mb-4 group-hover:text-gold transition-colors">{t(`ins.${p.k}.title`)}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{t(`ins.${p.k}.excerpt`)}</p>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                {t("ins.read")} <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center space-y-8">
          <h2 className="font-display text-4xl lg:text-5xl text-ivory tracking-tight">{t("ins.cta.title")}</h2>
          <p className="text-muted-foreground">{t("ins.cta.body")}</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all">
            <span className="text-xs tracking-[0.3em] uppercase">{t("ins.cta.btn")}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

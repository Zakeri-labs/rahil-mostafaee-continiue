import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import founder from "@/assets/founder-silhouette.jpg";
import office from "@/assets/office-interior.jpg";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rahil Mostafaee, Strategic Legal Counsel" },
      { name: "description", content: "An Iranian advocate in Dubai advising investors, entrepreneurs and high-net-worth families on cross-border legal strategy." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, dir } = useI18n();
  return (
    <div dir={dir}>
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("about.kicker")}</span>
            </div>
            <h1 className="font-display text-6xl lg:text-8xl text-ivory leading-[0.95] tracking-tight">
              {t("about.h1.a")}<br /><span className="italic gradient-gold-text">{t("about.h1.b")}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{t("about.intro")}</p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={founder} alt="Rahil Mostafaee" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-px bg-gold/10 hairline">
          {["v1", "v2", "v3"].map((k) => (
            <div key={k} className="bg-onyx p-10 space-y-4">
              <div className="font-display text-3xl text-gold">{t(`about.${k}.t`)}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`about.${k}.b`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-32 border-t border-gold/10 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={office} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-onyx/85" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 space-y-10">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("about.manifesto.kicker")}</div>
          <p className="font-display text-3xl lg:text-5xl text-ivory leading-[1.15] tracking-tight">
            {t("about.manifesto.q1")}
            <span className="italic gradient-gold-text">{t("about.manifesto.q2")}</span>
            {t("about.manifesto.q3")}
          </p>
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">— Rahil Mostafaee</div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-10">
          <h2 className="font-display text-4xl lg:text-6xl text-ivory tracking-tight">{t("about.cta.title")}</h2>
          <Link to="/booking" className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow">
            <span className="text-xs tracking-[0.3em] uppercase font-medium">{t("about.cta.btn")}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

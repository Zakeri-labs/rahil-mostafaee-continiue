import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Globe2, Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/international")({
  head: () => ({
    meta: [
      { title: "International Legal Coordination — Rahil Mostafaee" },
      { name: "description", content: "Sensitive cross-border advisory, international notice strategy, mobility protection and reputation-sensitive defense." },
    ],
  }),
  component: InternationalPage,
});

function InternationalPage() {
  const { t, dir, lang } = useI18n();
  const stepNum = (n: number) =>
    lang === "fa" ? n.toLocaleString("fa-IR").padStart(2, "۰") : String(n).padStart(2, "0");
  return (
    <div dir={dir}>
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("intl.kicker")}</span>
            </div>
            <h1 className="font-display text-6xl lg:text-9xl text-ivory leading-[0.95] tracking-tight">
              {t("intl.h1.a")}<br /><span className="italic gradient-gold-text">{t("intl.h1.b")}</span>
            </h1>
          </div>
          <div className="lg:col-span-4 text-muted-foreground leading-relaxed">{t("intl.intro")}</div>
        </div>
      </section>

      <section className="border-t border-gold/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-px bg-gold/10 hairline">
          {[
            { icon: Globe2, k: "c1" },
            { icon: ShieldCheck, k: "c2" },
            { icon: Lock, k: "c3" },
          ].map((c) => (
            <div key={c.k} className="bg-onyx p-10 space-y-6">
              <c.icon className="w-7 h-7 text-gold" strokeWidth={1.2} />
              <h3 className="font-display text-2xl text-ivory">{t(`intl.${c.k}.t`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`intl.${c.k}.b`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/10 py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-12">
          <h2 className="font-display text-4xl lg:text-6xl text-ivory tracking-tight">{t("intl.flow.title")}</h2>
          <ol className="space-y-px bg-gold/10 hairline">
            {[1, 2, 3, 4, 5].map((n) => (
              <li key={n} className="bg-onyx p-8 grid sm:grid-cols-12 gap-6">
                <div className="sm:col-span-2 font-mono text-gold">{stepNum(n)}</div>
                <div className="sm:col-span-3 font-display text-xl text-ivory">{t(`intl.flow.s${n}.t`)}</div>
                <div className="sm:col-span-7 text-sm text-muted-foreground leading-relaxed">{t(`intl.flow.s${n}.b`)}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-10">
          <h2 className="font-display text-4xl lg:text-6xl text-ivory tracking-tight">{t("intl.cta.title")}</h2>
          <Link to="/booking" className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow">
            <span className="text-xs tracking-[0.3em] uppercase font-medium">{t("intl.cta.btn")}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

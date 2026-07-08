"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock,
  FileText,
  Handshake,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const categories = [
  { icon: Scale, title: "ins.cat.1.title", body: "ins.cat.1.body" },
  { icon: ShieldCheck, title: "ins.cat.2.title", body: "ins.cat.2.body" },
  { icon: FileText, title: "ins.cat.3.title", body: "ins.cat.3.body" },
  { icon: Handshake, title: "ins.cat.4.title", body: "ins.cat.4.body" },
  { icon: BriefcaseBusiness, title: "ins.cat.5.title", body: "ins.cat.5.body" },
];

function InsightsPage() {
  const { t, dir } = useI18n();

  return (
    <div dir={dir}>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
              {t("ins.kicker")}
            </span>
          </div>
          <h1 className="font-display text-6xl lg:text-9xl text-ivory tracking-tight leading-[0.95] break-words">
            {t("ins.h1.a")}
            <br />
            <span className="italic gradient-gold-text">{t("ins.h1.b")}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">{t("ins.intro")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all"
          >
            <span className="text-xs tracking-[0.3em] uppercase">{t("ins.hero.cta")}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
              {t("ins.categories.kicker")}
            </span>
            <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-tight break-words">
              {t("ins.categories.h2")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 hairline">
            {categories.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-onyx p-8 lg:p-10 space-y-8">
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl text-ivory leading-tight">
                      {t(item.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(item.body)}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-6">
          <div className="flex items-center gap-3 text-gold">
            <Clock className="w-5 h-5" />
            <span className="text-[10px] tracking-[0.4em] uppercase">{t("ins.future.kicker")}</span>
          </div>
          <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-tight break-words">
            {t("ins.future.h2")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t("ins.future.body")}</p>
        </div>
      </section>

      <section className="py-32 border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center space-y-8">
          <h2 className="font-display text-2xl lg:text-3xl text-ivory tracking-tight break-words">
            {t("ins.cta.title")}
          </h2>
          <p className="text-muted-foreground">{t("ins.cta.body")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all"
            >
              <span className="text-xs tracking-[0.3em] uppercase">{t("ins.cta.primary")}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-muted-foreground hover:text-gold transition-colors"
            >
              <span className="text-xs tracking-[0.3em] uppercase">{t("ins.cta.secondary")}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="border border-gold/10 bg-charcoal/40 p-6 text-sm text-muted-foreground leading-relaxed">
            {t("ins.disclaimer")}
          </div>
        </div>
      </section>
    </div>
  );
}

export default InsightsPage;

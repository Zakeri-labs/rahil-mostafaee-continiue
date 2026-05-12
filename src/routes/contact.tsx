import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Confidential Consultation | Rahil Mostafaee" },
      { name: "description", content: "Schedule a privileged consultation. All inquiries are reviewed personally and held under strict confidentiality." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, dir } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  return (
    <div dir={dir}>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6 space-y-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("contact.kicker")}</span>
            </div>
            <h1 className="font-display text-6xl lg:text-8xl text-ivory leading-[0.95] tracking-tight">
              {t("contact.h1.a")}<br /><span className="italic gradient-gold-text">{t("contact.h1.b")}</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">{t("contact.intro")}</p>

            <div className="space-y-6 pt-6">
              {[
                { icon: MapPin, l: t("contact.info.office"), v: t("contact.info.officeVal") },
                { icon: Phone, l: t("contact.info.direct"), v: "+971 ·· ··· ····" },
                { icon: Mail, l: t("contact.info.email"), v: "office@rahilmostafaee.com" },
                { icon: Clock, l: t("contact.info.hours"), v: t("contact.info.hoursVal") },
              ].map((c) => (
                <div key={c.l} className="flex items-start gap-5 group">
                  <div className="hairline p-3 group-hover:border-gold/60 transition-colors">
                    <c.icon className="w-4 h-4 text-gold" strokeWidth={1.2} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{c.l}</div>
                    <div className="text-ivory mt-1">{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-strong p-10 lg:p-12 shadow-luxe">
              {submitted ? (
                <div className="text-center space-y-6 py-16">
                  <div className="font-display text-4xl text-ivory">{t("contact.success.title")}</div>
                  <p className="text-muted-foreground max-w-sm mx-auto">{t("contact.success.body")}</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-6"
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{t("contact.form.kicker")}</div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label={t("contact.form.name")} name="name" />
                    <Field label={t("contact.form.lang")} name="lang" placeholder={t("contact.form.langPh")} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label={t("contact.form.email")} name="email" type="email" />
                    <Field label={t("contact.form.phone")} name="phone" type="tel" />
                  </div>
                  <Select label={t("contact.form.matter")} name="matter" options={[
                    t("contact.matter.1"),
                    t("contact.matter.2"),
                    t("contact.matter.3"),
                    t("contact.matter.4"),
                    t("contact.matter.5"),
                    t("contact.matter.6"),
                  ]} />
                  <Select label={t("contact.form.urgency")} name="urgency" options={[
                    t("contact.urg.1"),
                    t("contact.urg.2"),
                    t("contact.urg.3"),
                  ]} />
                  <div>
                    <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{t("contact.form.brief")}</label>
                    <textarea rows={4} className="mt-2 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory placeholder:text-muted-foreground/50 resize-none" placeholder={t("contact.form.briefPh")} />
                  </div>
                  <button type="submit" className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow">
                    <span className="text-xs tracking-[0.3em] uppercase font-medium">{t("contact.form.submit")}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <p className="text-[10px] tracking-wider text-muted-foreground text-center">{t("contact.form.disclaimer")}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="mt-2 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory placeholder:text-muted-foreground/50" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</label>
      <select id={name} name={name} className="mt-2 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory">
        {options.map((o) => <option key={o} className="bg-onyx">{o}</option>)}
      </select>
    </div>
  );
}

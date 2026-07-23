"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LEADS_WHATSAPP_DISPLAY_NUMBER, LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";
import { CaseReviewCredential } from "@/components/credentials/CaseReviewCredential";

function whatsappHref(message: string) {
  return `https://wa.me/${LEADS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ContactPage() {
  const { t, dir } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const waHref = whatsappHref(t("contact.whatsapp.msg"));

  return (
    <div dir={dir}>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6 space-y-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                {t("contact.kicker")}
              </span>
            </div>
            <h1 className="font-display text-6xl lg:text-8xl text-ivory leading-[0.95] tracking-tight break-words">
              {t("contact.h1")}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              {t("contact.intro")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#intake-form"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
              >
                <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                  {t("contact.hero.primary")}
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-strong text-ivory hover:border-gold/40 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                  {t("contact.hero.secondary")}
                </span>
              </a>
            </div>

            <DisclaimerBlock />

            <div className="space-y-6 pt-6">
              {[
                { icon: MapPin, l: t("contact.info.office"), v: t("contact.info.officeVal") },
                { icon: Phone, l: t("contact.info.direct"), v: LEADS_WHATSAPP_DISPLAY_NUMBER },
                { icon: Mail, l: t("contact.info.email"), v: "office@rahilmostafaee.com" },
                { icon: Clock, l: t("contact.info.hours"), v: t("contact.info.hoursVal") },
              ].map((c) => (
                <div key={c.l} className="flex items-start gap-5 group">
                  <div className="hairline p-3 group-hover:border-gold/60 transition-colors">
                    <c.icon className="w-4 h-4 text-gold" strokeWidth={1.2} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                      {c.l}
                    </div>
                    <div className="text-ivory mt-1">{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6" id="intake-form">
            <IntakeForm submitted={submitted} setSubmitted={setSubmitted} />
          </div>
        </div>
      </section>

      <ReviewHelp />
      <UrgentAction />
      <WhatsAppCTA waHref={waHref} />
      <FinalDisclaimer />
    </div>
  );
}

function DisclaimerBlock() {
  const { t } = useI18n();
  return (
    <div className="glass-strong p-6 lg:p-7 space-y-4">
      <ShieldCheck className="w-6 h-6 text-gold" strokeWidth={1.2} />
      <h2 className="font-display text-2xl text-ivory leading-tight break-words">
        {t("contact.before.title")}
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed">{t("contact.before.body")}</p>
    </div>
  );
}

function IntakeForm({
  submitted,
  setSubmitted,
}: {
  submitted: boolean;
  setSubmitted: (value: boolean) => void;
}) {
  const { t } = useI18n();
  return (
    <div className="glass-strong p-10 lg:p-12 shadow-luxe scroll-mt-28">
      {submitted ? (
        <div className="text-center space-y-6 py-16">
          <div className="font-display text-4xl text-ivory">{t("contact.success.title")}</div>
          <p className="text-muted-foreground max-w-sm mx-auto">{t("contact.success.body")}</p>
        </div>
      ) : (
        <>
          <CaseReviewCredential />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold">
              {t("contact.form.kicker")}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={t("contact.form.name")} name="name" />
              <Field
                label={t("contact.form.lang")}
                name="lang"
                placeholder={t("contact.form.langPh")}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={t("contact.form.email")} name="email" type="email" />
              <Field label={t("contact.form.phone")} name="phone" type="tel" />
            </div>
            <Select
              label={t("contact.form.matter")}
              name="matter"
              options={[
                t("contact.matter.1"),
                t("contact.matter.2"),
                t("contact.matter.3"),
                t("contact.matter.4"),
                t("contact.matter.5"),
                t("contact.matter.6"),
                t("contact.matter.7"),
              ]}
            />
            <Select
              label={t("contact.form.urgency")}
              name="urgency"
              options={[
                t("contact.urg.1"),
                t("contact.urg.2"),
                t("contact.urg.3"),
                t("contact.urg.4"),
                t("contact.urg.5"),
              ]}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={t("contact.form.amount")} name="amount" />
              <Field label={t("contact.form.counterparty")} name="counterparty_location" />
            </div>
            <Field label={t("contact.form.documents")} name="documents" />
            <div>
              <label
                htmlFor="brief"
                className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
              >
                {t("contact.form.brief")}
              </label>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {t("contact.form.guidance")}
              </p>
              <textarea
                id="brief"
                name="brief"
                rows={5}
                className="mt-3 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory placeholder:text-muted-foreground/50 resize-none"
                placeholder={t("contact.form.briefPh")}
              />
            </div>
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
            >
              <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {t("contact.form.submit")}
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <p className="text-[10px] tracking-wider text-muted-foreground text-center">
              {t("contact.form.disclaimer")}
            </p>
          </form>
        </>
      )}
    </div>
  );
}

function ReviewHelp() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6].map((n) => t(`contact.include.${n}`));

  return (
    <section className="border-t border-gold/10 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
              {t("contact.include.kicker")}
            </span>
          </div>
          <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.05] break-words">
            {t("contact.include.h2")}
          </h2>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/10 hairline">
          {items.map((item) => (
            <div key={item} className="bg-onyx p-6 hover:bg-charcoal transition-colors">
              <div className="flex items-start gap-3 text-ivory">
                <CheckCircle2 className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UrgentAction() {
  const { t } = useI18n();
  return (
    <section className="border-t border-gold/10 py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 glass-strong p-8 lg:p-12">
        <AlertTriangle className="w-7 h-7 text-gold mb-8" strokeWidth={1.2} />
        <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.05] break-words">
          {t("contact.urgent.h2")}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mt-6">
          {t("contact.urgent.body")}
        </p>
      </div>
    </section>
  );
}

function WhatsAppCTA({ waHref }: { waHref: string }) {
  const { t } = useI18n();
  return (
    <section className="border-t border-gold/10 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 space-y-5">
          <MessageCircle className="w-7 h-7 text-[#25D366]" />
          <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.05] break-words">
            {t("contact.whatsapp.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {t("contact.whatsapp.body")}
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-end">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
          >
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("contact.whatsapp.cta")}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalDisclaimer() {
  const { t } = useI18n();
  return (
    <section className="border-t border-gold/10 py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 flex items-start gap-5">
        <FileText className="w-5 h-5 text-gold shrink-0 mt-1" strokeWidth={1.3} />
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t("contact.final.disclaimer")}
        </p>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground break-words"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory placeholder:text-muted-foreground/50"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground break-words"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory"
      >
        {options.map((o) => (
          <option key={o} className="bg-onyx">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ContactPage;

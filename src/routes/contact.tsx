import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";

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
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6 space-y-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Confidential Inquiry</span>
            </div>
            <h1 className="font-display text-6xl lg:text-8xl text-ivory leading-[0.95] tracking-tight">
              Speak with<br /><span className="italic gradient-gold-text">counsel directly.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              All inquiries are reviewed personally. Initial conversations are
              held under privilege. Response within one business day, or
              immediately for emergency matters.
            </p>

            <div className="space-y-6 pt-6">
              {[
                { icon: MapPin, l: "Office", v: "Business Bay, Dubai · United Arab Emirates" },
                { icon: Phone, l: "Direct", v: "+971 ·· ··· ····" },
                { icon: Mail, l: "Confidential", v: "office@rahilmostafaee.com" },
                { icon: Clock, l: "Hours", v: "Sun – Thu · 09:00 – 19:00 GST" },
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
                  <div className="font-display text-4xl text-ivory">Received.</div>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Your inquiry has been routed to counsel privately. You will hear
                    back within one business day from a discreet channel.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-6"
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Privileged Inquiry Form</div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" name="name" />
                    <Field label="Preferred Language" name="lang" placeholder="English / فارسی / العربية" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email" name="email" type="email" />
                    <Field label="Phone / WhatsApp" name="phone" type="tel" />
                  </div>
                  <Select label="Matter Type" name="matter" options={[
                    "Cross-Border / International",
                    "Residency / Golden Visa",
                    "Corporate / Commercial",
                    "Real Estate / Investment",
                    "DIFC Wills / Wealth Protection",
                    "Crisis / Sensitive Matter",
                  ]} />
                  <Select label="Urgency" name="urgency" options={[
                    "Standard — within 5 days",
                    "Priority — within 48 hours",
                    "Emergency — same day",
                  ]} />
                  <div>
                    <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Brief Description</label>
                    <textarea rows={4} className="mt-2 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory placeholder:text-muted-foreground/50 resize-none" placeholder="A short summary, kept strictly confidential." />
                  </div>
                  <button type="submit" className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow">
                    <span className="text-xs tracking-[0.3em] uppercase font-medium">Submit Privileged Inquiry</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <p className="text-[10px] tracking-wider text-muted-foreground text-center">
                    Submissions are encrypted in transit. Receipt does not constitute representation.
                  </p>
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

import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ProfessionalRegistrationSection() {
  const { t } = useI18n();

  return (
    <section className="border-t border-gold/10 py-28" aria-labelledby="professional-registration">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-6 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                {t("about.registration.kicker")}
              </span>
            </div>
            <h2
              id="professional-registration"
              className="font-display text-3xl leading-tight tracking-tight text-ivory lg:text-5xl"
            >
              {t("about.registration.title")}
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("about.registration.body")}
            </p>
          </div>

          <div className="border border-gold/20 bg-charcoal p-6 shadow-luxe sm:p-8 lg:order-1">
            <div className="mb-7 flex items-center gap-3 border-b border-gold/15 pb-5">
              <ShieldCheck className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
              <span className="text-xs tracking-[0.22em] uppercase text-gold">
                {t("about.registration.cardTitle")}
              </span>
            </div>
            <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <CredentialItem
                label={t("about.registration.label.title")}
                value={t("about.registration.value.title")}
              />
              <CredentialItem
                label={t("about.registration.label.authority")}
                value={t("about.registration.value.authority")}
              />
              <CredentialItem
                label={t("about.registration.label.number")}
                value={t("about.registration.value.number")}
              />
              <CredentialItem
                label={t("about.registration.label.date")}
                value={t("about.registration.value.date")}
              />
              <CredentialItem
                label={t("about.registration.label.expiry")}
                value={t("about.registration.value.expiry")}
              />
              <CredentialItem
                label={t("about.registration.label.firm")}
                value={t("about.registration.value.firm")}
                className="sm:col-span-2"
              />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialItem({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{label}</dt>
      <dd className="mt-2 text-sm leading-relaxed text-ivory">{value}</dd>
    </div>
  );
}

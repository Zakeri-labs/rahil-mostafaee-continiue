import { ShieldCheck } from "lucide-react";
import {
  professionalCredential,
  professionalCredentialDisplay,
} from "@/lib/site/professional-credential";

export function ProfessionalRegistrationSection() {
  return (
    <section className="border-t border-gold/10 py-28" aria-labelledby="professional-registration">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                Professional Credentials
              </span>
            </div>
            <h2
              id="professional-registration"
              className="font-display text-3xl leading-tight tracking-tight text-ivory lg:text-5xl"
            >
              Professional Registration in Dubai
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Rahil Mostafaei is professionally registered as a Legal Consultant with the Government
              of Dubai Legal Affairs Department. Her work focuses on the structured assessment of
              complex commercial disputes, major claims, corporate conflicts and financial matters
              in the UAE.
            </p>
          </div>

          <div className="border border-gold/20 bg-charcoal p-6 shadow-luxe sm:p-8">
            <div className="mb-7 flex items-center gap-3 border-b border-gold/15 pb-5">
              <ShieldCheck className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
              <span className="text-xs tracking-[0.22em] uppercase text-gold">
                {professionalCredential.registeredTitle}
              </span>
            </div>
            <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <CredentialItem label="Professional Title" value={professionalCredential.title} />
              <CredentialItem
                label="Registration Authority"
                value={professionalCredential.authority}
              />
              <CredentialItem
                label="Professional Registration Number"
                value={professionalCredential.registrationNumber}
              />
              <CredentialItem
                label="Registration Date"
                value={professionalCredentialDisplay.registrationDate}
              />
              <CredentialItem
                label="Valid Until"
                value={professionalCredentialDisplay.expiryDate}
              />
              <CredentialItem
                label="Firm Listed on Registration"
                value={professionalCredential.firmName}
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

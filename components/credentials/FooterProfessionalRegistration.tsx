import { professionalCredential } from "@/lib/site/professional-credential";

export function FooterProfessionalRegistration() {
  return (
    <div className="max-w-sm border-t border-gold/15 pt-6">
      <h2 className="text-[10px] tracking-[0.3em] uppercase text-gold">
        Professional Registration
      </h2>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        {professionalCredential.professionalName} is registered as a {professionalCredential.title}{" "}
        with the {professionalCredential.authority} under Professional Registration No.{" "}
        {professionalCredential.registrationNumber}.
      </p>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Firm listed on registration: {professionalCredential.firmName}
      </p>
    </div>
  );
}

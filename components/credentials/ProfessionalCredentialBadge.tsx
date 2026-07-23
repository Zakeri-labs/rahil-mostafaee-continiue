import { ShieldCheck } from "lucide-react";
import { professionalCredential } from "@/lib/site/professional-credential";

export function ProfessionalCredentialBadge() {
  return (
    <div className="inline-flex max-w-full items-start gap-2.5 border border-gold/20 bg-onyx/35 px-3 py-2 text-start shadow-luxe backdrop-blur-sm sm:items-center">
      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold sm:mt-0" strokeWidth={1.4} />
      <span className="text-[10px] leading-relaxed tracking-[0.16em] uppercase text-gold sm:text-xs sm:tracking-[0.12em]">
        {professionalCredential.registeredTitle} with the {professionalCredential.authority}
      </span>
    </div>
  );
}

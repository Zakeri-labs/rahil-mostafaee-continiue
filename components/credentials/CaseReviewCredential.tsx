import { ShieldCheck } from "lucide-react";
import { professionalCredential } from "@/lib/site/professional-credential";

export function CaseReviewCredential() {
  return (
    <aside
      className="mb-7 border border-gold/20 bg-onyx/35 p-5"
      aria-label="Professional registration"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
        <div>
          <h2 className="font-display text-xl leading-tight text-ivory">
            Case Review by a Registered Legal Consultant in Dubai
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-gold">
            {professionalCredential.authority} · Registration No.{" "}
            {professionalCredential.registrationNumber}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Submitted information is reviewed confidentially for initial assessment.
          </p>
        </div>
      </div>
      <p className="mt-4 border-t border-gold/10 pt-4 text-[11px] leading-relaxed text-muted-foreground">
        Submission does not create a professional-client relationship or confirm acceptance of the
        matter. Each matter must first be assessed, and no result is guaranteed.
      </p>
    </aside>
  );
}

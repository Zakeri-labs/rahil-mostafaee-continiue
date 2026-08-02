import { useI18n } from "@/lib/i18n";

export function FooterProfessionalRegistration() {
  const { t } = useI18n();

  return (
    <div className="max-w-sm border-t border-gold/15 pt-6">
      <h2 className="text-[10px] tracking-[0.3em] uppercase text-gold">
        {t("footer.registration.title")}
      </h2>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        {t("footer.registration.body")}
      </p>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        {t("footer.registration.firm")}
      </p>
    </div>
  );
}

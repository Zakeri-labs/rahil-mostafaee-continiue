import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { confirmBooking } from "@/lib/booking.functions";
import { getStripeEnvironment } from "@/lib/stripe";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/booking-confirmation")({
  validateSearch: (s: Record<string, unknown>) => ({
    booking: typeof s.booking === "string" ? s.booking : undefined,
    session_id: typeof s.session_id === "string" ? s.session_id : undefined,
  }),
  component: ConfirmationPage,
});

function ConfirmationPage() {
  const { t, dir } = useI18n();
  const { booking, session_id } = Route.useSearch();
  const confirm = useServerFn(confirmBooking);
  const [paid, setPaid] = useState<boolean | null>(null);

  useEffect(() => {
    if (booking && session_id) {
      confirm({ data: { bookingId: booking, sessionId: session_id, environment: getStripeEnvironment() } })
        .then((r) => setPaid(r.paid))
        .catch(() => setPaid(false));
    }
  }, [booking, session_id]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6" dir={dir}>
      <div className="max-w-lg text-center reveal">
        <div className="font-display text-5xl text-gold">✓</div>
        <h1 className="mt-6 font-display text-3xl text-ivory">{t("book.success.title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("book.success.body")}</p>
        {paid === false && (
          <p className="mt-3 text-sm text-destructive">Payment not completed yet.</p>
        )}
        <Link to="/" className="mt-8 inline-block px-6 py-3 text-xs tracking-[0.3em] uppercase border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all">
          {t("book.return")}
        </Link>
      </div>
    </div>
  );
}

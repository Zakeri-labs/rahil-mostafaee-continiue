"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { confirmCheckout } from "@/lib/booking/api-client";
import { getStripeEnvironment } from "@/lib/stripe/client";
import { useI18n } from "@/lib/i18n";

function ConfirmationPage() {
  const { t, dir } = useI18n();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [paid, setPaid] = useState<boolean | null>(null);

  useEffect(() => {
    if (sessionId) {
      confirmCheckout({ sessionId, environment: getStripeEnvironment() })
        .then((r) => setPaid(r.paid))
        .catch(() => setPaid(false));
    }
  }, [sessionId]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6" dir={dir}>
      <div className="max-w-lg text-center reveal">
        <div className="font-display text-5xl text-gold">✓</div>
        <h1 className="mt-6 font-display text-3xl text-ivory">{t("book.success.title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("book.success.body")}</p>
        {paid === false && (
          <p className="mt-3 text-sm text-destructive">Payment not completed yet.</p>
        )}
        <Link
          href="/"
          className="mt-8 inline-block px-6 py-3 text-xs tracking-[0.3em] uppercase border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all lg:text-sm lg:tracking-[0.18em]"
        >
          {t("book.return")}
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationPage;

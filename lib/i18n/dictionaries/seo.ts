import type { LocalizedRouteId } from "@/lib/i18n/routes";
import type { LocalizedMetadataCopyMap } from "@/lib/seo/localized-metadata";

/** SEO-only translations; visible page copy remains in the existing dictionaries. */
export const pageSeoCopy = {
  home: {
    fa: {
      title: "مشاور حقوقی دعاوی تجاری و شرکتی در دبی",
      description:
        "ارزیابی حقوقی اختلافات پیچیده تجاری، مطالبات عمده، اختلافات سهام‌داران و بازیابی دارایی برای شرکت‌ها و سرمایه‌گذاران در امارات.",
    },
    en: {
      title: "Corporate and Commercial Legal Consultant in Dubai",
      description:
        "Strategic legal assessment for complex commercial disputes, major claims, shareholder conflicts and asset recovery for businesses and investors in the UAE.",
      openGraphTitle: "Rahil Mostafaei | Corporate and Commercial Legal Consultant in Dubai",
      twitterTitle: "Rahil Mostafaei | Corporate and Commercial Legal Consultant in Dubai",
    },
  },
  services: {
    fa: {
      title: "خدمات حقوقی تجاری و شرکتی در امارات",
      description:
        "خدمات حقوقی برای اختلافات تجاری و شرکتی، بازیابی دارایی، وصول بدهی و مطالبات عمده، اختلافات سهام‌داران و پرونده‌های فرامرزی در امارات.",
    },
    en: {
      title: "Corporate and Commercial Legal Services in the UAE",
      description:
        "Legal services for complex corporate and commercial disputes, asset recovery, major debt and receivables recovery, shareholder conflicts and cross-border matters in the UAE.",
      openGraphTitle: "Corporate and Commercial Legal Services in the UAE",
      twitterTitle: "Corporate and Commercial Legal Services in the UAE",
    },
  },
  about: {
    fa: {
      title: "درباره فعالیت حقوقی راحیل مصطفایی",
      description:
        "با فعالیت حقوقی راحیل مصطفایی، ثبت حرفه‌ای و رویکرد او در بررسی اختلافات پیچیده تجاری و بازیابی دارایی در امارات آشنا شوید.",
    },
    en: {
      title: "About the Corporate and Commercial Legal Practice",
      description:
        "Learn about Rahil Mostafaei’s legal practice, professional registration and approach to complex commercial disputes and asset recovery in the UAE.",
      openGraphTitle: "About the Corporate and Commercial Legal Practice",
      twitterTitle: "About the Corporate and Commercial Legal Practice",
    },
  },
  contact: {
    fa: {
      title: "بررسی محرمانه اختلافات تجاری و بازیابی دارایی در امارات",
      description:
        "خلاصه پرونده خود را برای بررسی محرمانه اختلافات تجاری، مطالبات عمده، بازیابی دارایی، اختلافات سهام‌داران و دعاوی مالی فرامرزی ارسال کنید.",
    },
    en: {
      title: "Confidential Commercial Dispute and Asset Recovery Case Review in the UAE",
      description:
        "Submit a confidential matter review for UAE commercial disputes, major receivables, asset recovery, shareholder conflicts and cross-border financial claims.",
      openGraphTitle: "Confidential Corporate and Commercial Case Review in the UAE",
      twitterTitle: "Confidential Corporate and Commercial Case Review in the UAE",
    },
  },
  international: {
    fa: {
      title: "اختلافات تجاری و پرونده‌های شرکتی فرامرزی",
      description:
        "ارزیابی حقوقی قراردادها و پرداخت‌های چندحوزه‌ای، اختلافات شرکتی، محل دارایی، قانون حاکم و مسیر اجرای احکام در پرونده‌های فرامرزی.",
    },
    en: {
      title: "Cross-Border Commercial Disputes and Corporate Matters",
      description:
        "Cross-border legal assessment for multi-jurisdiction contracts, payments, corporate disputes, asset location, governing law and enforcement strategy.",
      openGraphTitle: "Cross-Border Commercial Disputes and Corporate Matters",
      twitterTitle: "Cross-Border Commercial Disputes and Corporate Matters",
    },
  },
  commercialDisputes: {
    fa: {
      title: "اختلافات پیچیده تجاری و شرکتی در امارات",
      description:
        "بررسی اولیه و محرمانه اختلافات پیچیده تجاری و شرکتی، دعاوی قراردادی، اختلافات سهام‌داران و مطالبات با ارزش بالا در امارات.",
    },
    en: {
      title: "Complex Corporate and Commercial Disputes in the UAE",
      description:
        "Confidential initial review for complex corporate and commercial disputes, contractual claims, shareholder conflicts, and high-value receivables in the UAE.",
    },
  },
  assetRecovery: {
    fa: {
      title: "وصول مطالبات و بازیابی دارایی شرکت‌ها در امارات",
      description:
        "بررسی مطالبات عمده، سرمایه‌گذاری‌های مورد اختلاف، شناسایی دارایی و مسیرهای اجرای حکم برای شرکت‌ها و ذی‌نفعان تجاری در امارات.",
    },
    en: {
      title: "UAE Debt and Asset Recovery for Corporate Matters",
      description:
        "Structured review of major receivables, disputed investments, asset tracing, and enforcement options for companies and corporate stakeholders in the UAE.",
    },
  },
} satisfies Record<LocalizedRouteId, LocalizedMetadataCopyMap>;

export const siteNames = { fa: "راحیل مصطفایی", en: "Rahil Mostafaei" } as const;

export const bookingSeoCopy: Record<"booking" | "confirmation", LocalizedMetadataCopyMap> = {
  booking: {
    fa: {
      title: "رزرو مشاوره محرمانه",
      description:
        "برای بررسی اختلافات تجاری، بازیابی دارایی، اختلافات سهام‌داران و پرونده‌های فرامرزی، با راحیل مصطفایی وقت مشاوره محرمانه رزرو کنید.",
    },
    en: {
      title: "Book a Consultation",
      description:
        "Book a confidential consultation with Rahil Mostafaei to discuss commercial disputes, asset recovery, shareholder conflicts, and cross-border matters in the UAE.",
    },
  },
  confirmation: {
    fa: {
      title: "تأیید رزرو مشاوره",
      description: "جزئیات تأیید رزرو مشاوره محرمانه با راحیل مصطفایی را مشاهده کنید.",
    },
    en: {
      title: "Booking Confirmation",
      description:
        "View confirmation details for your confidential consultation with Rahil Mostafaei.",
    },
  },
};

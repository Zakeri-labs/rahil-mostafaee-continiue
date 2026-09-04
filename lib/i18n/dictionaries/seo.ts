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
      title: "Commercial Legal Consultant in Dubai",
      description:
        "Dubai-based legal consultant for complex corporate and commercial disputes, shareholder conflicts, major claims, and asset recovery across the UAE.",
    },
  },
  services: {
    fa: {
      title: "خدمات حقوقی تجاری و شرکتی در امارات",
      description:
        "خدمات حقوقی برای اختلافات تجاری و شرکتی، بازیابی دارایی، وصول بدهی و مطالبات عمده، اختلافات سهام‌داران و پرونده‌های فرامرزی در امارات.",
    },
    en: {
      title: "Corporate Legal Services in the UAE",
      description:
        "Explore UAE legal services for corporate and commercial disputes, debt and asset recovery, shareholder conflicts, and cross-border matters.",
    },
  },
  about: {
    fa: {
      title: "درباره فعالیت حقوقی راحیل مصطفایی",
      description:
        "با فعالیت حقوقی راحیل مصطفایی، ثبت حرفه‌ای و رویکرد او در بررسی اختلافات پیچیده تجاری و بازیابی دارایی در امارات آشنا شوید.",
    },
    en: {
      title: "About the Corporate Legal Practice",
      description:
        "Learn about Rahil Mostafaei’s professional registration and focused approach to corporate disputes, commercial claims, and asset recovery in the UAE.",
    },
  },
  contact: {
    fa: {
      title: "بررسی محرمانه اختلافات تجاری و بازیابی دارایی در امارات",
      description:
        "خلاصه پرونده خود را برای بررسی محرمانه اختلافات تجاری، مطالبات عمده، بازیابی دارایی، اختلافات سهام‌داران و دعاوی مالی فرامرزی ارسال کنید.",
    },
    en: {
      title: "Confidential Legal Case Review in Dubai",
      description:
        "Request a confidential review of a UAE commercial dispute, major receivable, shareholder conflict, asset recovery matter, or cross-border claim.",
    },
  },
  international: {
    fa: {
      title: "اختلافات تجاری و پرونده‌های شرکتی فرامرزی",
      description:
        "ارزیابی حقوقی قراردادها و پرداخت‌های چندحوزه‌ای، اختلافات شرکتی، محل دارایی، قانون حاکم و مسیر اجرای احکام در پرونده‌های فرامرزی.",
    },
    en: {
      title: "Cross-Border Commercial Disputes",
      description:
        "Legal assessment of cross-border contracts, payments, corporate disputes, governing law, asset location, and enforcement options in the UAE.",
    },
  },
  commercialDisputes: {
    fa: {
      title: "اختلافات پیچیده تجاری و شرکتی در امارات",
      description:
        "بررسی اولیه و محرمانه اختلافات پیچیده تجاری و شرکتی، دعاوی قراردادی، اختلافات سهام‌داران و مطالبات با ارزش بالا در امارات.",
    },
    en: {
      title: "Corporate & Commercial Disputes UAE",
      description:
        "Confidential review of UAE corporate and commercial disputes, contract claims, shareholder conflicts, and high-value business receivables.",
    },
  },
  assetRecovery: {
    fa: {
      title: "وصول مطالبات و بازیابی دارایی شرکت‌ها در امارات",
      description:
        "بررسی مطالبات عمده، سرمایه‌گذاری‌های مورد اختلاف، شناسایی دارایی و مسیرهای اجرای حکم برای شرکت‌ها و ذی‌نفعان تجاری در امارات.",
    },
    en: {
      title: "UAE Debt & Asset Recovery",
      description:
        "Structured review of UAE debt recovery, disputed investments, asset tracing, and enforcement options for companies and corporate stakeholders.",
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

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
      title: "وکیل دعاوی تجاری در امارات | مشاوره و پیگیری اختلافات",
      description:
        "اختلاف تجاری با طرف اماراتی دارید؟ وکیل تجاری فارسی‌زبان در دبی، پرونده را از ایران یا دبی پیگیری می‌کند.",
      absoluteTitle: true,
    },
    en: {
      title: "Commercial Dispute Legal Consultant in Dubai",
      description:
        "Commercial dispute legal consultant in Dubai for Iranian traders and companies. Confidential document review, a clear route, and online booking.",
      absoluteTitle: true,
    },
  },
  assetRecovery: {
    fa: {
      title: "مشاور و وکیل وصول مطالبات و بازیابی دارایی در امارات",
      description:
        "طلبتان از طرف اماراتی پرداخت نشده؟ ما به عنوان وکیل وصول مطالبات در دبی کارهای حقوقی فاکتور، چک برگشتی و اجرای حکم را انجام می‌دهیم",
      absoluteTitle: true,
    },
    en: {
      title: "Debt Recovery Legal Consultant in Dubai and the UAE",
      description:
        "Debt recovery legal consultant in Dubai for creditors owed money in the UAE: unpaid invoices, bounced cheques, judgments. Honest assessment first.",
      absoluteTitle: true,
    },
  },
  commercialContracts: {
    fa: {
      title: "تنظیم و بررسی قراردادهای ایران و امارات توسط وکیل دبی",
      description:
        "وکیل قرارداد در دبی برای تاجر ایرانی: بررسی پیش‌نویس طرف اماراتی پیش از امضا، تنظیم قرارداد تجاری و گزارش ریسک هر بند به فارسی، با ثبت رسمی در دبی.",
      absoluteTitle: true,
    },
    en: {
      title: "Contract Drafting & Review in Dubai | Legal Consultant",
      description:
        "Contract legal consultant in Dubai for Iranian traders: review of UAE drafts before signing, contract drafting, and a plain-language risk report.",
      absoluteTitle: true,
    },
  },
  consultationBooking: {
    fa: {
      title: "رزرو نوبت مشاوره حقوقی از وکیل در امارات",
      description:
        "نوبت مشاوره حقوقی با راحیل مصطفایی، مشاور حقوقی ثبت‌شده در دبی را آنلاین رزرو کنید. سه‌شنبه‌ها مشاوره رایگان؛ دوشنبه تا جمعه، ظرفیت محدود هر روز.",
    },
    en: {
      title: "Book a Legal Consultation with a Lawyer in the UAE",
      description:
        "Book a legal consultation online with Rahil Mostafaei, a registered legal consultant in Dubai. Free consultations every Tuesday; Monday to Friday, limited daily places.",
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

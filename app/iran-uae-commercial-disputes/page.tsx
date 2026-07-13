import type { Metadata } from "next";
import CommercialDisputesPage from "./page-client";
import { getSiteUrl } from "@/lib/seo/site-url";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildLegalServiceSchema,
  buildFaqPageSchema,
  buildBreadcrumbListSchema,
} from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "وکیل اختلافات تجاری ایران–امارات | راحیل مصطفایی",
  description:
    "بررسی محرمانه اختلافات قراردادی و تجاری میان ایران و امارات، از جمله اختلاف خریدار، فروشنده، تأمین‌کننده، نمایندگی و اجرای تعهدات. ارسال پیام به معنی پذیرش نمایندگی نیست.",
  alternates: {
    canonical: `${getSiteUrl()}/iran-uae-commercial-disputes`,
  },
  openGraph: {
    title: "وکیل اختلافات تجاری ایران–امارات | راحیل مصطفایی",
    description:
      "بررسی محرمانه اختلافات قراردادی و تجاری میان ایران و امارات، از جمله اختلاف خریدار، فروشنده، تأمین‌کننده، نمایندگی و اجرای تعهدات. ارسال پیام به معنی پذیرش نمایندگی نیست.",
  },
};

// The `lib/i18n.tsx` dictionaries cannot be imported here: that module uses
// React hooks (createContext/useState/useEffect) at module scope, which Next
// rejects for anything reachable from a Server Component even when only a
// plain data export is used. So the Persian FAQ text below is intentionally
// duplicated from the cd.faq.*.q/a keys and cd.hero.h1/intro in
// lib/i18n.tsx — keep both in sync if that visible copy ever changes.
const NAME = "وکیل اختلافات تجاری ایران–امارات برای تجار و شرکت‌های ایرانی";
const DESCRIPTION =
  "اگر قراردادی اجرا نشده، طرف مقابل در امارات پاسخ نمی‌دهد یا اختلافی با خریدار، فروشنده، تأمین‌کننده یا نماینده تجاری دارید، مسیر حقوقی قابل‌اعمال در امارات به‌صورت محرمانه بررسی می‌شود.";
const BREADCRUMB_HOME = "خانه";
const BREADCRUMB_LEAF = "اختلافات تجاری ایران–امارات";

const CD_FAQ: { q: string; a: string }[] = [
  {
    q: "آیا اختلاف تجاری ایران–امارات فقط با قرارداد کتبی قابل بررسی است؟",
    a: "قرارداد کتبی بررسی را ساده‌تر می‌کند، اما مکاتبات، فاکتورها، سفارش‌ها و سایر مستندات نیز می‌توانند در ارزیابی اولیه نقش داشته باشند. مسیر دقیق به شرایط هر پرونده بستگی دارد.",
  },
  {
    q: "اگر قرارداد قانون حاکم یا دادگاه مشخص نکرده باشد چه می‌شود؟",
    a: "در این حالت، قانون حاکم و مرجع صالح باید بر اساس شرایط قرارداد، محل انجام تعهدات و سایر عوامل بررسی شود. این ارزیابی بخشی از مرحله بررسی اولیه است.",
  },
  {
    q: "آیا قبل از دعوا امکان مذاکره یا اخطار رسمی وجود دارد؟",
    a: "بسته به شرایط پرونده، مذاکره یا ارسال اخطار رسمی می‌تواند یکی از مسیرهای قابل بررسی پیش از اقدام رسمی‌تر باشد.",
  },
  {
    q: "برای بررسی اولیه چه مدارکی لازم است؟",
    a: "قرارداد، فاکتورها، مکاتبات و مشخصات طرف مقابل معمولاً مفید هستند؛ اما بررسی اولیه بدون همه مدارک نیز قابل شروع است.",
  },
  {
    q: "اگر طرف مقابل در امارات باشد ولی من در ایران باشم چه می‌شود؟",
    a: "بررسی اولیه اسناد و مسیر حقوقی معمولاً می‌تواند از راه دور آغاز شود. جزئیات بعدی به شرایط پرونده بستگی دارد.",
  },
  {
    q: "آیا همه اختلافات باید به دادگاه برسند؟",
    a: "خیر. بسته به پرونده، مذاکره، اخطار رسمی، داوری یا دعوا هرکدام می‌توانند مسیر مناسب باشند. انتخاب مسیر به مدارک، مبلغ و شرایط طرف مقابل بستگی دارد.",
  },
  {
    q: "آیا ارسال فرم به معنی قبول وکالت است؟",
    a: "خیر. ارسال اطلاعات یا پیام به معنی پذیرش نمایندگی یا ایجاد رابطه وکیل و موکل نیست. ابتدا پرونده بررسی می‌شود.",
  },
  {
    q: "آیا نتیجه پرونده قابل تضمین است؟",
    a: "خیر. هیچ نتیجه حقوقی قابل تضمین نیست. بررسی اولیه صرفاً مسیرهای قابل‌اعمال را بر اساس مدارک و شرایط پرونده مشخص می‌کند.",
  },
];

export default function Page() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/iran-uae-commercial-disputes`;

  const legalService = buildLegalServiceSchema({
    id: `${pageUrl}#legalservice`,
    name: NAME,
    description: DESCRIPTION,
    url: pageUrl,
    siteUrl,
  });

  const faqPage = buildFaqPageSchema(
    `${pageUrl}#faq`,
    CD_FAQ.map(({ q, a }) => ({ question: q, answer: a })),
  );

  const breadcrumbList = buildBreadcrumbListSchema([
    { name: BREADCRUMB_HOME, url: siteUrl },
    { name: BREADCRUMB_LEAF, url: pageUrl },
  ]);

  return (
    <>
      <JsonLd data={legalService} />
      <JsonLd data={faqPage} />
      <JsonLd data={breadcrumbList} />
      <CommercialDisputesPage />
    </>
  );
}

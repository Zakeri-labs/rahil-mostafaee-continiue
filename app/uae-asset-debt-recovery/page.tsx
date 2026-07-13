import type { Metadata } from "next";
import AssetDebtRecoveryPage from "./page-client";
import { getSiteUrl } from "@/lib/seo/site-url";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildLegalServiceSchema,
  buildFaqPageSchema,
  buildBreadcrumbListSchema,
} from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "وکیل وصول مطالبات و بازیابی دارایی در امارات | راحیل مصطفایی",
  description:
    "بررسی محرمانه مطالبات پرداخت‌نشده، سرمایه‌گذاری‌های مورد اختلاف، ردیابی دارایی و مسیرهای قابل بررسی برای وصول یا اجرای مطالبات در امارات. ارسال پیام به معنی پذیرش نمایندگی یا تضمین نتیجه نیست.",
  alternates: {
    canonical: `${getSiteUrl()}/uae-asset-debt-recovery`,
  },
  openGraph: {
    title: "وکیل وصول مطالبات و بازیابی دارایی در امارات | راحیل مصطفایی",
    description:
      "بررسی محرمانه مطالبات پرداخت‌نشده، سرمایه‌گذاری‌های مورد اختلاف، ردیابی دارایی و مسیرهای قابل بررسی برای وصول یا اجرای مطالبات در امارات. ارسال پیام به معنی پذیرش نمایندگی یا تضمین نتیجه نیست.",
  },
};

// The `lib/i18n.tsx` dictionaries cannot be imported here: that module uses
// React hooks (createContext/useState/useEffect) at module scope, which Next
// rejects for anything reachable from a Server Component even when only a
// plain data export is used. So the Persian FAQ text below is intentionally
// duplicated from the adr.faq.*.q/a keys and adr.hero.h1/intro in
// lib/i18n.tsx — keep both in sync if that visible copy ever changes.
const NAME = "وکیل وصول مطالبات و بازیابی دارایی در امارات برای ایرانی‌ها";
const DESCRIPTION =
  "اگر مبلغی در امارات پرداخت نشده، سرمایه‌گذاری به نتیجه وعده‌داده‌شده نرسیده یا نشانه‌هایی وجود دارد که نیاز به بررسی دارند، امکان پیگیری بر اساس مدارک، طرف مقابل و اطلاعات دارایی بررسی می‌شود.";
const BREADCRUMB_HOME = "خانه";
const BREADCRUMB_LEAF = "بازیابی دارایی و وصول مطالبات";

const ADR_FAQ: { q: string; a: string }[] = [
  {
    q: "آیا داشتن رسید پرداخت برای بررسی کافی است؟",
    a: "رسید پرداخت می‌تواند نقطه شروع خوبی باشد، اما بسته به پرونده، مدارک دیگری مانند مکاتبات یا مشخصات طرف مقابل نیز می‌تواند به ارزیابی کمک کند.",
  },
  {
    q: "اگر قرارداد کتبی وجود نداشته باشد چه می‌شود؟",
    a: "نبود قرارداد کتبی بررسی را پیچیده‌تر می‌کند اما لزوماً مانع آن نیست؛ فاکتور، رسید، مکاتبات یا سوابق پرداخت نیز می‌توانند بررسی شوند.",
  },
  {
    q: "آیا هر سرمایه‌گذاری ناموفق کلاهبرداری محسوب می‌شود؟",
    a: "خیر. بسیاری از سرمایه‌گذاری‌های ناموفق کلاهبرداری نیستند. تشخیص این موضوع نیازمند بررسی مدارک، مکاتبات و نحوه ارائه سرمایه‌گذاری است.",
  },
  {
    q: "اگر از دارایی‌های طرف مقابل اطلاعی نداشته باشم چه می‌شود؟",
    a: "بررسی اولیه همچنان می‌تواند آغاز شود؛ میزان اطلاعات موجود از دارایی، یکی از عواملی است که در انتخاب مسیر لحاظ می‌شود.",
  },
  {
    q: "آیا امکان مذاکره قبل از دعوا وجود دارد؟",
    a: "بسته به شرایط پرونده، مذاکره یا ارسال اخطار رسمی می‌تواند یکی از مسیرهای قابل بررسی پیش از اقدام رسمی‌تر باشد.",
  },
  {
    q: "آیا می‌توان حکم مالی را در امارات اجرا کرد؟",
    a: "امکان اجرای حکم به نوع حکم، مرجع صادرکننده و شرایط پرونده بستگی دارد و باید به‌صورت جداگانه بررسی شود.",
  },
  {
    q: "آیا ارسال فرم به معنی قبول وکالت است؟",
    a: "خیر. ارسال اطلاعات یا پیام به معنی پذیرش نمایندگی یا ایجاد رابطه وکیل و موکل نیست. ابتدا پرونده بررسی می‌شود.",
  },
  {
    q: "آیا بازیابی دارایی یا وصول بدهی تضمین می‌شود؟",
    a: "خیر. هیچ نتیجه حقوقی تضمین نمی‌شود. بررسی اولیه صرفاً امکان پیگیری را بر اساس مدارک و شرایط پرونده مشخص می‌کند.",
  },
  {
    q: "اگر طرف مقابل پاسخ ندهد چه مسیرهایی قابل بررسی است؟",
    a: "بسته به شرایط، ارسال اخطار رسمی، اقدام فوری در صورت امکان قانونی، یا دعوا از جمله مسیرهای قابل بررسی هستند.",
  },
];

export default function Page() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/uae-asset-debt-recovery`;

  const legalService = buildLegalServiceSchema({
    id: `${pageUrl}#legalservice`,
    name: NAME,
    description: DESCRIPTION,
    url: pageUrl,
    siteUrl,
  });

  const faqPage = buildFaqPageSchema(
    `${pageUrl}#faq`,
    ADR_FAQ.map(({ q, a }) => ({ question: q, answer: a })),
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
      <AssetDebtRecoveryPage />
    </>
  );
}

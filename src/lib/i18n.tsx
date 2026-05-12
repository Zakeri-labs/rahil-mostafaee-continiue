import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fa";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.practice": "Practice",
  "nav.international": "International",
  "nav.firm": "Firm",
  "nav.insights": "Insights",
  "nav.contact": "Contact",
  "nav.book": "Book Consultation",
  "nav.cta": "Confidential Consultation",
  "nav.login": "Sign in",
  "nav.account": "Account",
  "nav.logout": "Sign out",
  "tag.legal": "Legal Counsel · Dubai",

  "book.title": "Book a Confidential Consultation",
  "book.subtitle": "Select a service, choose a time and secure your slot with instant payment.",
  "book.step.service": "Choose service",
  "book.step.time": "Pick a time",
  "book.step.details": "Your details",
  "book.step.pay": "Payment",
  "book.duration": "min",
  "book.aed": "AED",
  "book.choose": "Choose",
  "book.selected": "Selected",
  "book.no_slots": "No available slots on this day. Please pick another date.",
  "book.next": "Continue",
  "book.back": "Back",
  "book.guest": "Continue as guest",
  "book.signin": "Sign in to book",
  "book.signup": "Create an account",
  "book.full_name": "Full name",
  "book.email": "Email",
  "book.phone": "Phone (incl. country code)",
  "book.notes": "Brief description of your matter (optional)",
  "book.confirm_pay": "Confirm & Pay",
  "book.processing": "Processing…",
  "book.summary": "Booking summary",
  "book.success.title": "Booking confirmed",
  "book.success.body": "A confirmation has been sent to your email. Rahil's office will reach out before the session.",
  "book.return": "Return home",
  "book.test_mode": "All payments are in test mode in the preview.",
  "book.emergency": "Emergency line",

  "auth.login.title": "Client Sign In",
  "auth.signup.title": "Create Account",
  "auth.email": "Email",
  "auth.password": "Password",
  "auth.full_name": "Full name",
  "auth.submit_login": "Sign in",
  "auth.submit_signup": "Create account",
  "auth.no_account": "No account?",
  "auth.have_account": "Already have an account?",
  "auth.signup_link": "Create one",
  "auth.login_link": "Sign in",
  "auth.error": "Authentication error",

  "admin.title": "Practice Console",
  "admin.bookings": "Bookings",
  "admin.client": "Client",
  "admin.service": "Service",
  "admin.when": "When",
  "admin.status": "Status",
  "admin.payment": "Payment",
  "admin.actions": "Actions",
  "admin.confirm": "Confirm",
  "admin.complete": "Mark complete",
  "admin.cancel": "Cancel",
  "admin.no_access": "Restricted to firm administrators.",

  "splash.tag": "Legal Counsel · Dubai",
  "book.brand_tag": "Rahil Mostafaee · Dubai",

  "footer.role": "Strategic Legal Counsel",
  "footer.blurb": "Discreet, cross-border legal representation for high-value Iranian clients in Dubai and across international jurisdictions.",
  "footer.langs": "فارسی · English · العربية",
  "footer.col.practice": "Practice",
  "footer.col.firm": "Firm",
  "footer.col.office": "Office",
  "footer.link.cross": "Cross-Border",
  "footer.link.residency": "Residency & Visas",
  "footer.link.corporate": "Corporate",
  "footer.link.realestate": "Real Estate",
  "footer.link.wills": "DIFC Wills",
  "footer.link.about": "About",
  "footer.link.intl": "International",
  "footer.link.insights": "Insights",
  "footer.link.contact": "Contact",
  "footer.office.area": "Business Bay",
  "footer.office.city": "Dubai, UAE",
  "footer.office.byappt": "By appointment only",
  "footer.copyright": "All matters held in strict confidence.",
  "footer.privileged": "Privileged & Confidential",

  // ===== Home page =====
  "home.hero.kicker": "Dubai · DIFC · International",
  "home.hero.h1.a": "Strategic ",
  "home.hero.h1.b": "Legal",
  "home.hero.h1.c": "Protection.",
  "home.hero.h1.d": "Without compromise.",
  "home.hero.lede": "Cross-border representation for Iranian investors, entrepreneurs and high-net-worth families navigating UAE and international legal systems. Discreet, powerful, and built around a single principle — protect what matters.",
  "home.hero.cta.book": "Book Confidential Consultation",
  "home.hero.cta.emergency": "Emergency Legal Line",
  "home.hero.stat.years": "Years Practice",
  "home.hero.stat.mandates": "HNW Mandates",
  "home.hero.stat.sla": "Response SLA",
  "home.hero.stat.langs": "Languages",
  "home.hero.available": "Available",
  "home.hero.location": "DIFC · Dubai",
  "home.hero.founder": "Founder",
  "home.hero.signature": "Strategic Counsel",
  "home.hero.scroll": "Scroll",
  "home.hero.est": "Est · MMXIII · Dubai",

  "home.pillars.discretion.t": "Discretion",
  "home.pillars.discretion.b": "Every matter handled under absolute confidentiality protocols.",
  "home.pillars.intl.t": "International",
  "home.pillars.intl.b": "Coordinated counsel across UAE, EU, UK and Iran jurisdictions.",
  "home.pillars.elite.t": "Elite Access",
  "home.pillars.elite.b": "Trusted advisor to investors, family offices and executives.",
  "home.pillars.protect.t": "Protection-First",
  "home.pillars.protect.b": "Strategy designed to insulate assets, mobility and reputation.",

  "home.practice.kicker": "Practice Areas",
  "home.practice.h2.a": "High-stakes counsel,",
  "home.practice.h2.b": "precisely engineered.",
  "home.practice.viewAll": "View Full Practice",
  "home.practice.1.t": "Cross-Border & International",
  "home.practice.1.b": "Multi-jurisdiction strategy, asset protection, international coordination, travel restriction advisory and reputation-sensitive matters.",
  "home.practice.1.tag1": "Asset Protection",
  "home.practice.1.tag2": "International Coordination",
  "home.practice.1.tag3": "Compliance Defense",
  "home.practice.2.t": "UAE Residency & Golden Visa",
  "home.practice.2.b": "End-to-end Golden Visa structuring, residency reinstatement, entry restriction defense and high-stakes immigration advisory.",
  "home.practice.2.tag1": "Golden Visa",
  "home.practice.2.tag2": "Residency",
  "home.practice.2.tag3": "Immigration",
  "home.practice.3.t": "Corporate & Commercial",
  "home.practice.3.b": "Free zone formation, shareholder agreements, commercial litigation and corporate restructuring for cross-border operators.",
  "home.practice.3.tag1": "Formation",
  "home.practice.3.tag2": "Litigation",
  "home.practice.3.tag3": "Restructuring",
  "home.practice.4.t": "Real Estate & Investment",
  "home.practice.4.b": "Dubai property advisory, investor protection, fraud prevention and high-value transaction review across the emirate.",
  "home.practice.4.tag1": "Property",
  "home.practice.4.tag2": "Transactions",
  "home.practice.4.tag3": "Disputes",
  "home.practice.5.t": "Family & Wealth Protection",
  "home.practice.5.b": "DIFC wills, succession planning, family office counsel and structured wealth protection for multi-generational families.",
  "home.practice.5.tag1": "DIFC Wills",
  "home.practice.5.tag2": "Succession",
  "home.practice.5.tag3": "Family Office",
  "home.practice.6.t": "Crisis & Sensitive Matters",
  "home.practice.6.b": "Emergency response, financial freeze remediation, regulatory investigations and confidential representation at the highest level.",
  "home.practice.6.tag1": "Emergency",
  "home.practice.6.tag2": "Investigations",
  "home.practice.6.tag3": "Confidential",

  "home.intl.kicker": "International Desk",
  "home.intl.h2.a": "Sensitive matters,",
  "home.intl.h2.b": "handled at altitude.",
  "home.intl.body": "For clients facing international legal exposure — travel restrictions, cross-border investigations, financial freezes or reputation-sensitive inquiries — we coordinate calm, decisive response across jurisdictions. All work conducted under privileged communication and executive-level discretion.",
  "home.intl.cta": "International Coordination",
  "home.intl.s1": "International Notice Advisory",
  "home.intl.s2": "Travel Restriction Strategy",
  "home.intl.s3": "Cross-Border Coordination",
  "home.intl.s4": "Reputation-Sensitive Defense",
  "home.intl.s5": "Asset Freeze Response",
  "home.intl.s6": "Urgent International Counsel",

  "home.atelier.kicker": "Portrait",
  "home.atelier.h2.a": "Presence,",
  "home.atelier.h2.b": "poise, precision.",
  "home.atelier.body": "A practice defined by discipline and discretion — and a personal standard that mirrors the matters entrusted to it.",
  "home.atelier.1.l": "In Chambers",
  "home.atelier.1.c": "Private counsel, DIFC",
  "home.atelier.2.l": "The Founder",
  "home.atelier.2.c": "Strategic Legal Counsel",
  "home.atelier.3.l": "Off the Record",
  "home.atelier.3.c": "Personal · Private",

  "home.platform.kicker": "Client Platform",
  "home.platform.h2.a": "A private platform",
  "home.platform.h2.b": "for serious matters.",
  "home.platform.body": "A modern, end-to-end legal experience — secure portal, encrypted document exchange, scheduled video advisory, and integrated billing. Built like a private bank, not a law firm.",
  "home.platform.menu.1": "Overview",
  "home.platform.menu.2": "Active Matters",
  "home.platform.menu.3": "Documents",
  "home.platform.menu.4": "Schedule",
  "home.platform.menu.5": "Invoices",
  "home.platform.menu.6": "Secure Chat",
  "home.platform.activeMatter": "Active Matter",
  "home.platform.matterTitle": "Cross-Border Asset Restructuring",
  "home.platform.inProgress": "In Progress",
  "home.platform.stage": "Stage",
  "home.platform.stageVal": "Structuring",
  "home.platform.lead": "Lead Counsel",
  "home.platform.leadVal": "R. Mostafaee",
  "home.platform.next": "Next Review",
  "home.platform.nextVal": "12 Mar",
  "home.platform.task1": "Initial Strategy Memo",
  "home.platform.task1s": "Reviewed",
  "home.platform.task2": "Jurisdictional Mapping",
  "home.platform.task2s": "Drafting",
  "home.platform.task3": "Trustee Onboarding",
  "home.platform.task3s": "Pending",
  "home.platform.encrypted": "Encrypted",
  "home.platform.e2e": "End-to-end",

  "home.founder.langsLabel": "Languages",
  "home.founder.kicker": "Counsel",
  "home.founder.role": "Founder · Strategic Legal Counsel",
  "home.founder.body": "An Iranian advocate based in Dubai advising investors, entrepreneurs and high-net-worth families on cross-border legal strategy. Known for a calm, structured approach to complex matters — and an obsession with protecting client interests across borders, generations and jurisdictions.",
  "home.founder.philT": "Practice Philosophy",
  "home.founder.philB": "Protection over performance. Strategy over volume. Relationships over transactions.",
  "home.founder.postT": "Client Posture",
  "home.founder.postB": "Selective representation. Long-term advisory relationships. Absolute discretion.",

  "home.trust.kicker": "Authority",
  "home.trust.h2.a": "Trusted across",
  "home.trust.h2.b": "four jurisdictions.",
  "home.trust.difc": "Wills & Probate Registered",
  "home.trust.uae": "Federal & Emirate Practice",
  "home.trust.eu": "Coordinated Counsel",
  "home.trust.ir": "Domestic Liaison Network",

  "home.cta.h2.a": "When the matter is",
  "home.cta.h2.b": "consequential,",
  "home.cta.h2.c": "the counsel must be",
  "home.cta.h2.d": "considered.",
  "home.cta.body": "Schedule a confidential consultation. All initial conversations are held under strict privilege and reviewed personally.",
  "home.cta.book": "Book Consultation",
  "home.cta.direct": "Direct Line",
};

const fa: Dict = {
  "nav.home": "خانه",
  "nav.practice": "تخصص‌ها",
  "nav.international": "بین‌المللی",
  "nav.firm": "دفتر",
  "nav.insights": "بینش‌ها",
  "nav.contact": "تماس",
  "nav.book": "رزرو مشاوره",
  "nav.cta": "مشاوره محرمانه",
  "nav.login": "ورود",
  "nav.account": "حساب کاربری",
  "nav.logout": "خروج",
  "tag.legal": "وکیل پایه‌یک · دبی",

  "book.title": "رزرو مشاوره محرمانه",
  "book.subtitle": "خدمت را انتخاب کنید، زمان را برگزینید و با پرداخت آنلاین رزرو خود را قطعی کنید.",
  "book.step.service": "انتخاب خدمت",
  "book.step.time": "انتخاب زمان",
  "book.step.details": "اطلاعات شما",
  "book.step.pay": "پرداخت",
  "book.duration": "دقیقه",
  "book.aed": "درهم",
  "book.choose": "انتخاب",
  "book.selected": "انتخاب شد",
  "book.no_slots": "در این روز زمان آزادی موجود نیست. لطفاً روز دیگری را انتخاب کنید.",
  "book.next": "ادامه",
  "book.back": "بازگشت",
  "book.guest": "ادامه به‌عنوان مهمان",
  "book.signin": "ورود برای رزرو",
  "book.signup": "ساخت حساب کاربری",
  "book.full_name": "نام و نام‌خانوادگی",
  "book.email": "ایمیل",
  "book.phone": "شماره تماس (با کد کشور)",
  "book.notes": "توضیح مختصر موضوع (اختیاری)",
  "book.confirm_pay": "تأیید و پرداخت",
  "book.processing": "در حال پردازش…",
  "book.summary": "خلاصه رزرو",
  "book.success.title": "رزرو تأیید شد",
  "book.success.body": "تأییدیه به ایمیل شما ارسال شد. دفتر خانم مصطفایی پیش از جلسه با شما تماس می‌گیرد.",
  "book.return": "بازگشت به خانه",
  "book.test_mode": "تمام پرداخت‌ها در حالت آزمایشی پیش‌نمایش هستند.",
  "book.emergency": "خط فوری",

  "auth.login.title": "ورود موکلین",
  "auth.signup.title": "ساخت حساب کاربری",
  "auth.email": "ایمیل",
  "auth.password": "رمز عبور",
  "auth.full_name": "نام و نام‌خانوادگی",
  "auth.submit_login": "ورود",
  "auth.submit_signup": "ساخت حساب",
  "auth.no_account": "حساب ندارید؟",
  "auth.have_account": "حساب دارید؟",
  "auth.signup_link": "ساخت حساب",
  "auth.login_link": "ورود",
  "auth.error": "خطای احراز هویت",

  "admin.title": "کنسول دفتر",
  "admin.bookings": "رزروها",
  "admin.client": "موکل",
  "admin.service": "خدمت",
  "admin.when": "زمان",
  "admin.status": "وضعیت",
  "admin.payment": "پرداخت",
  "admin.actions": "عملیات",
  "admin.confirm": "تأیید",
  "admin.complete": "ثبت اتمام",
  "admin.cancel": "لغو",
  "admin.no_access": "دسترسی فقط برای مدیران دفتر.",

  "splash.tag": "وکیل پایه‌یک · دبی",
  "book.brand_tag": "راحیل مصطفایی · دبی",

  "footer.role": "وکیل و مشاور حقوقی راهبردی",
  "footer.blurb": "نمایندگی حقوقی محرمانه و فرامرزی برای موکلین ارزشمند ایرانی در دبی و سایر حوزه‌های قضایی بین‌المللی.",
  "footer.langs": "فارسی · English · العربية",
  "footer.col.practice": "تخصص‌ها",
  "footer.col.firm": "دفتر",
  "footer.col.office": "نشانی",
  "footer.link.cross": "پرونده‌های فرامرزی",
  "footer.link.residency": "اقامت و ویزا",
  "footer.link.corporate": "حقوق شرکت‌ها",
  "footer.link.realestate": "املاک و مستغلات",
  "footer.link.wills": "وصیت‌نامه DIFC",
  "footer.link.about": "درباره دفتر",
  "footer.link.intl": "بین‌المللی",
  "footer.link.insights": "بینش‌ها",
  "footer.link.contact": "تماس",
  "footer.office.area": "بیزنس بی",
  "footer.office.city": "دبی، امارات",
  "footer.office.byappt": "تنها با تعیین وقت قبلی",
  "footer.copyright": "تمامی پرونده‌ها به صورت کاملاً محرمانه نگهداری می‌شوند.",
  "footer.privileged": "محرمانه و ممتاز",
};

const dict: Record<Lang, Dict> = { en, fa };

interface Ctx {
  lang: Lang;
  t: (k: string) => string;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || "en";
    setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
      document.documentElement.classList.toggle("font-fa", lang === "fa");
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dict[lang][k] ?? dict.en[k] ?? k;

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir: lang === "fa" ? "rtl" : "ltr" }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

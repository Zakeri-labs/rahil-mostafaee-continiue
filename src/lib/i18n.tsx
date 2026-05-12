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

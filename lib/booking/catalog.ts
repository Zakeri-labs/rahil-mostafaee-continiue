export type BookingService = {
  id: string;
  slug: string;
  price_id: string;
  name_en: string;
  name_fa: string;
  description_en: string;
  description_fa: string;
  duration_minutes: number;
  price_aed: number;
  is_emergency: boolean;
  active: boolean;
  sort: number;
};

export const services: BookingService[] = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    slug: "standard-30",
    price_id: "consult_standard_30",
    name_en: "Standard Consultation",
    name_fa: "مشاوره استاندارد",
    description_en: "30-minute confidential legal consultation",
    description_fa: "مشاوره حقوقی محرمانه ۳۰ دقیقه‌ای",
    duration_minutes: 30,
    price_aed: 1500,
    is_emergency: false,
    active: true,
    sort: 1,
  },
  {
    id: "22222222-2222-4222-8222-222222222222",
    slug: "strategic-60",
    price_id: "consult_strategic_60",
    name_en: "Strategic Session",
    name_fa: "جلسه راهبردی",
    description_en: "60-minute in-depth strategy session",
    description_fa: "جلسه راهبردی عمیق ۶۰ دقیقه‌ای",
    duration_minutes: 60,
    price_aed: 3500,
    is_emergency: false,
    active: true,
    sort: 2,
  },
  {
    id: "33333333-3333-4333-8333-333333333333",
    slug: "emergency-24h",
    price_id: "consult_emergency_24h",
    name_en: "Emergency 24h Legal Line",
    name_fa: "خط فوری حقوقی ۲۴ ساعته",
    description_en: "Priority same-day emergency response",
    description_fa: "پاسخ‌گویی فوری اولویت‌دار همان روز",
    duration_minutes: 45,
    price_aed: 7500,
    is_emergency: true,
    active: true,
    sort: 3,
  },
  {
    id: "44444444-4444-4444-8444-444444444444",
    slug: "international",
    price_id: "consult_international",
    name_en: "International / Cross-Border",
    name_fa: "بین‌المللی / فرامرزی",
    description_en: "Multi-jurisdiction matter intake & strategy",
    description_fa: "پذیرش و راهبرد پرونده‌های چند حوزه قضایی",
    duration_minutes: 90,
    price_aed: 12000,
    is_emergency: false,
    active: true,
    sort: 4,
  },
];

export function listServices() {
  return services.filter((service) => service.active).sort((a, b) => a.sort - b.sort);
}

export function getServiceById(serviceId: string) {
  return listServices().find((service) => service.id === serviceId);
}

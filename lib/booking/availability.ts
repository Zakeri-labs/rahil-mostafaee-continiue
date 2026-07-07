import { getServiceById } from "./catalog";

type AvailabilityRule = {
  day_of_week: number;
  start_minute: number;
  end_minute: number;
};

const dubaiOffsetMin = 4 * 60;
const stepMin = 30;

const availabilityRules: AvailabilityRule[] = [
  { day_of_week: 0, start_minute: 540, end_minute: 1080 },
  { day_of_week: 1, start_minute: 540, end_minute: 1080 },
  { day_of_week: 2, start_minute: 540, end_minute: 1080 },
  { day_of_week: 3, start_minute: 540, end_minute: 1080 },
  { day_of_week: 4, start_minute: 540, end_minute: 1080 },
];

export type DaySlot = {
  start: string;
  end: string;
};

export function getDaySlots(input: { serviceId: string; date: string }): DaySlot[] {
  const service = getServiceById(input.serviceId);
  if (!service) throw new Error("Service not found");

  const dayStartUTC = new Date(`${input.date}T00:00:00.000Z`);
  const dayStartDubai = new Date(dayStartUTC.getTime() - dubaiOffsetMin * 60_000);
  const dow = dayStartUTC.getUTCDay();
  const dayRules = availabilityRules.filter((rule) => rule.day_of_week === dow);
  if (dayRules.length === 0) return [];

  const slots: DaySlot[] = [];
  const now = Date.now();

  for (const rule of dayRules) {
    for (let m = rule.start_minute; m + service.duration_minutes <= rule.end_minute; m += stepMin) {
      const start = new Date(dayStartDubai.getTime() + m * 60_000);
      const end = new Date(start.getTime() + service.duration_minutes * 60_000);
      if (start.getTime() < now + 60 * 60_000) continue;
      slots.push({ start: start.toISOString(), end: end.toISOString() });
    }
  }

  return slots;
}

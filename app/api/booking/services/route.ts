import { NextResponse } from "next/server";
import { listServices } from "@/lib/booking/catalog";

export function GET() {
  return NextResponse.json(listServices());
}

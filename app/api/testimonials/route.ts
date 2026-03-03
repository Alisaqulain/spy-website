import { NextResponse } from "next/server";
import { getTestimonials } from "@/lib/data-store";

export async function GET() {
  try {
    const testimonials = getTestimonials();
    return NextResponse.json(testimonials);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to load testimonials" }, { status: 500 });
  }
}

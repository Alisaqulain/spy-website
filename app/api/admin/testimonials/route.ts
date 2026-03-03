import { NextRequest, NextResponse } from "next/server";
import { getTestimonials, saveTestimonials, getNextTestimonialId } from "@/lib/data-store";
import { validateAdminPassword, getAdminPasswordFromRequest } from "@/lib/admin-auth";
import type { Testimonial } from "@/lib/testimonials-data";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function validateTestimonial(body: unknown): body is Omit<Testimonial, "id"> & { id?: number } {
  if (!body || typeof body !== "object") return false;
  const o = body as Record<string, unknown>;
  return (
    typeof o.name === "string" &&
    o.name.trim().length > 0 &&
    typeof o.role === "string" &&
    typeof o.company === "string" &&
    typeof o.content === "string" &&
    o.content.trim().length > 0 &&
    typeof o.rating === "number" &&
    o.rating >= 1 &&
    o.rating <= 5
  );
}

export async function POST(request: NextRequest) {
  if (!validateAdminPassword(getAdminPasswordFromRequest(request))) {
    return unauthorized();
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid JSON");
  }
  if (!validateTestimonial(body)) {
    return badRequest("Invalid testimonial: name, role, company, content (non-empty) and rating (1-5) required.");
  }
  const list = getTestimonials();
  const id = body.id ?? getNextTestimonialId();
  const newItem: Testimonial = {
    id,
    name: (body.name as string).trim(),
    role: (body.role as string).trim(),
    company: (body.company as string).trim(),
    content: (body.content as string).trim(),
    rating: body.rating as number,
    videoUrl: typeof (body as Record<string, unknown>).videoUrl === "string" ? (body as Record<string, unknown>).videoUrl as string : undefined,
    videoTitle: typeof (body as Record<string, unknown>).videoTitle === "string" ? (body as Record<string, unknown>).videoTitle as string : undefined,
  };
  const existing = list.findIndex((t) => t.id === id);
  const next = existing >= 0 ? list.map((t) => (t.id === id ? newItem : t)) : [...list, newItem];
  saveTestimonials(next);
  return NextResponse.json({ success: true, testimonial: newItem });
}

export async function PUT(request: NextRequest) {
  if (!validateAdminPassword(getAdminPasswordFromRequest(request))) {
    return unauthorized();
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid JSON");
  }
  if (!validateTestimonial(body) || typeof (body as Record<string, unknown>).id !== "number") {
    return badRequest("Invalid testimonial: id, name, role, company, content and rating (1-5) required.");
  }
  const list = getTestimonials();
  const id = (body as Record<string, unknown>).id as number;
  const idx = list.findIndex((t) => t.id === id);
  if (idx < 0) return badRequest("Testimonial not found");
  const updated: Testimonial = {
    id,
    name: (body.name as string).trim(),
    role: (body.role as string).trim(),
    company: (body.company as string).trim(),
    content: (body.content as string).trim(),
    rating: body.rating as number,
    videoUrl: typeof (body as Record<string, unknown>).videoUrl === "string" ? (body as Record<string, unknown>).videoUrl as string : undefined,
    videoTitle: typeof (body as Record<string, unknown>).videoTitle === "string" ? (body as Record<string, unknown>).videoTitle as string : undefined,
  };
  const next = list.map((t) => (t.id === id ? updated : t));
  saveTestimonials(next);
  return NextResponse.json({ success: true, testimonial: updated });
}

export async function DELETE(request: NextRequest) {
  if (!validateAdminPassword(getAdminPasswordFromRequest(request))) {
    return unauthorized();
  }
  const id = request.nextUrl.searchParams.get("id");
  const numId = id ? parseInt(id, 10) : NaN;
  if (Number.isNaN(numId)) return badRequest("Missing or invalid id");
  const list = getTestimonials();
  const next = list.filter((t) => t.id !== numId);
  if (next.length === list.length) return badRequest("Testimonial not found");
  saveTestimonials(next);
  return NextResponse.json({ success: true });
}

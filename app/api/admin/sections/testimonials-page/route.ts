import { NextRequest, NextResponse } from "next/server";
import { getTestimonialsPageConfig, saveTestimonialsPageConfig } from "@/lib/data-store";
import { validateAdminPassword, getAdminPasswordFromRequest } from "@/lib/admin-auth";
import type { TestimonialsPageConfig } from "@/lib/data-store";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function GET(request: NextRequest) {
  if (!validateAdminPassword(getAdminPasswordFromRequest(request))) {
    return unauthorized();
  }
  try {
    const config = getTestimonialsPageConfig();
    return NextResponse.json(config);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to load" }, { status: 500 });
  }
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
  if (!body || typeof body !== "object") return badRequest("Invalid body");
  const o = body as Record<string, unknown>;
  const title = typeof o.videoSectionTitle === "string" ? o.videoSectionTitle.trim() : "";
  const subtitle = typeof o.videoSectionSubtitle === "string" ? o.videoSectionSubtitle.trim() : "";
  if (!title) return badRequest("videoSectionTitle is required.");
  const config: TestimonialsPageConfig = {
    videoSectionTitle: title,
    videoSectionSubtitle: subtitle,
  };
  try {
    saveTestimonialsPageConfig(config);
    return NextResponse.json({ success: true, config });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

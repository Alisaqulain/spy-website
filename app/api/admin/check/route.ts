import { NextRequest, NextResponse } from "next/server";
import { validateAdminPassword, getAdminPasswordFromRequest } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  const valid = validateAdminPassword(getAdminPasswordFromRequest(request));
  if (!valid) return NextResponse.json({ ok: false }, { status: 401 });
  return NextResponse.json({ ok: true });
}

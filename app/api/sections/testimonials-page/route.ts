import { NextResponse } from "next/server";
import { getTestimonialsPageConfig } from "@/lib/data-store";

export async function GET() {
  try {
    const config = getTestimonialsPageConfig();
    return NextResponse.json(config);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { videoSectionTitle: "Video Testimonials", videoSectionSubtitle: "Watch client stories and insights. More videos on our Instagram." },
      { status: 200 }
    );
  }
}

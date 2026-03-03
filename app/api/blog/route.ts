import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/data-store";

export async function GET() {
  try {
    const posts = getBlogPosts();
    return NextResponse.json(posts);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to load blog posts" }, { status: 500 });
  }
}

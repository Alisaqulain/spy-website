import { NextRequest, NextResponse } from "next/server";
import { getBlogPosts, saveBlogPosts } from "@/lib/data-store";
import { validateAdminPassword, getAdminPasswordFromRequest } from "@/lib/admin-auth";
import type { BlogPost } from "@/lib/blog-data";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function validateBlogPost(body: unknown): body is Record<string, unknown> & { title: string; excerpt: string; category: string } {
  if (!body || typeof body !== "object") return false;
  const o = body as Record<string, unknown>;
  return (
    typeof o.title === "string" &&
    o.title.trim().length > 0 &&
    typeof o.excerpt === "string" &&
    typeof o.category === "string" &&
    o.category.trim().length > 0
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
  if (!validateBlogPost(body)) {
    return badRequest("Invalid post: title, excerpt and category required.");
  }
  const list = getBlogPosts();
  const slug = typeof (body as Record<string, unknown>).slug === "string" && (body as Record<string, unknown>).slug
    ? (body as Record<string, unknown>).slug as string
    : slugify((body as Record<string, unknown>).title as string);
  if (list.some((p) => p.slug === slug)) {
    return badRequest("A post with this slug already exists.");
  }
  const date = typeof (body as Record<string, unknown>).date === "string" ? (body as Record<string, unknown>).date as string : new Date().toISOString().slice(0, 10);
  const newPost: BlogPost = {
    slug,
    title: (body.title as string).trim(),
    excerpt: (body.excerpt as string).trim(),
    category: (body.category as string).trim(),
    date,
    image: typeof (body as Record<string, unknown>).image === "string" ? (body as Record<string, unknown>).image as string : undefined,
  };
  saveBlogPosts([...list, newPost]);
  return NextResponse.json({ success: true, post: newPost });
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
  if (!validateBlogPost(body) || typeof (body as Record<string, unknown>).slug !== "string") {
    return badRequest("Invalid post: slug, title, excerpt and category required.");
  }
  const slug = (body as Record<string, unknown>).slug as string;
  const list = getBlogPosts();
  const idx = list.findIndex((p) => p.slug === slug);
  if (idx < 0) return badRequest("Post not found");
  const date = typeof (body as Record<string, unknown>).date === "string" ? (body as Record<string, unknown>).date as string : list[idx].date;
  const updated: BlogPost = {
    slug,
    title: (body.title as string).trim(),
    excerpt: (body.excerpt as string).trim(),
    category: (body.category as string).trim(),
    date,
    image: typeof (body as Record<string, unknown>).image === "string" ? (body as Record<string, unknown>).image as string : undefined,
  };
  const next = list.map((p) => (p.slug === slug ? updated : p));
  saveBlogPosts(next);
  return NextResponse.json({ success: true, post: updated });
}

export async function DELETE(request: NextRequest) {
  if (!validateAdminPassword(getAdminPasswordFromRequest(request))) {
    return unauthorized();
  }
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) return badRequest("Missing slug");
  const list = getBlogPosts();
  const next = list.filter((p) => p.slug !== slug);
  if (next.length === list.length) return badRequest("Post not found");
  saveBlogPosts(next);
  return NextResponse.json({ success: true });
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Trash2, FileText, ImagePlus } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

const ADMIN_STORAGE_KEY = "spry_admin_password";

function getAuthHeader(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const p = sessionStorage.getItem(ADMIN_STORAGE_KEY);
  return p ? { "x-admin-password": p } : {};
}

const CATEGORIES = ["Corporate", "Retail", "Industry", "General"];

export default function AdminBlogPage() {
  const router = useRouter();
  const [list, setList] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    category: "Corporate",
    slug: "",
    image: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const load = () => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((data) => setList(Array.isArray(data) ? data : []))
      .catch(() => setList([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const p = sessionStorage.getItem(ADMIN_STORAGE_KEY);
    if (!p) {
      router.replace("/admin");
      return;
    }
    load();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setSubmitting(true);
    try {
      const payload: Record<string, string> = {
        title: form.title.trim(),
        excerpt: form.excerpt.trim(),
        category: form.category.trim(),
      };
      if (form.slug.trim()) payload.slug = form.slug.trim();
      if (form.image.trim()) payload.image = form.image.trim();
      const res = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...getAuthHeader() },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setMessage({ type: "ok", text: "Blog post added." });
        setForm({ title: "", excerpt: "", category: "Corporate", slug: "", image: "" });
        load();
      } else {
        setMessage({ type: "err", text: data.error || "Failed to add." });
      }
    } catch {
      setMessage({ type: "err", text: "Network error." });
    }
    setSubmitting(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageUploading(true);
    setMessage(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload-image", {
        method: "POST",
        headers: getAuthHeader(),
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.url) {
        setForm((f) => ({ ...f, image: data.url }));
        setMessage({ type: "ok", text: "Image uploaded. You can add post now." });
      } else {
        setMessage({ type: "err", text: data.error || "Upload failed." });
      }
    } catch {
      setMessage({ type: "err", text: "Upload failed." });
    }
    setImageUploading(false);
    e.target.value = "";
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this post?")) return;
    try {
      const res = await fetch(`/api/admin/blog?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
        headers: getAuthHeader(),
      });
      if (res.ok) {
        setMessage({ type: "ok", text: "Deleted." });
        load();
      } else {
        const d = await res.json().catch(() => ({}));
        setMessage({ type: "err", text: d.error || "Delete failed." });
      }
    } catch {
      setMessage({ type: "err", text: "Network error." });
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-primary-navy/70 hover:text-primary-navy mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to dashboard
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-accent-gold/15 flex items-center justify-center">
            <FileText className="w-5 h-5 text-accent-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-navy">Manage Blog</h1>
            <p className="text-sm text-primary-navy/70">Add or remove blog posts</p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white border border-primary-navy/10 shadow-soft p-6 mb-8"
        >
          <h2 className="font-bold text-primary-navy mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add blog post
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Excerpt *</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                rows={2}
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Category *</label>
              <select
                value={form.category}
                onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Slug (optional, auto from title)</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                placeholder="my-post-slug"
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Featured image (optional) — URL or upload</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                  placeholder="Image URL or upload below"
                  className="flex-1 rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
                />
                <label className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy cursor-pointer hover:bg-primary-navy/5 whitespace-nowrap">
                  <ImagePlus className="w-4 h-4" />
                  {imageUploading ? "Uploading…" : "Upload image"}
                  <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="sr-only" onChange={handleImageUpload} disabled={imageUploading} />
                </label>
              </div>
            </div>
          </div>
          {message && (
            <p className={`mt-4 text-sm ${message.type === "ok" ? "text-green-600" : "text-red-600"}`}>
              {message.text}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="mt-4 rounded-xl bg-primary-navy text-white px-6 py-2.5 font-semibold disabled:opacity-50"
          >
            {submitting ? "Adding…" : "Add post"}
          </button>
        </motion.form>

        <div className="rounded-2xl bg-white border border-primary-navy/10 shadow-soft overflow-hidden">
          <h2 className="font-bold text-primary-navy p-4 border-b border-primary-navy/10">Current posts ({list.length})</h2>
          {loading ? (
            <p className="p-6 text-primary-navy/60">Loading…</p>
          ) : list.length === 0 ? (
            <p className="p-6 text-primary-navy/60">No posts yet.</p>
          ) : (
            <ul className="divide-y divide-primary-navy/10">
              {list.map((p) => (
                <li key={p.slug} className="p-4 flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-primary-navy">{p.title}</p>
                    <p className="text-sm text-primary-navy/60">{p.slug} · {p.category}</p>
                    <p className="text-sm text-primary-navy/80 mt-1 line-clamp-2">{p.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      href={`/blog/${p.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-gold hover:underline"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(p.slug)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      aria-label="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

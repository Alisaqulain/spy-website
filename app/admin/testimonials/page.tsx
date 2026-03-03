"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Trash2, MessageSquare, Star, Video, Type } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials-data";

const ADMIN_STORAGE_KEY = "spry_admin_password";

function getAuthHeader(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const p = sessionStorage.getItem(ADMIN_STORAGE_KEY);
  return p ? { "x-admin-password": p } : {};
}

export default function AdminTestimonialsPage() {
  const router = useRouter();
  const [list, setList] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    rating: 5,
    videoUrl: "",
    videoTitle: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [videoUploading, setVideoUploading] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [sectionConfig, setSectionConfig] = useState({ videoSectionTitle: "Video Testimonials", videoSectionSubtitle: "Watch client stories and insights. More videos on our Instagram." });
  const [sectionSaving, setSectionSaving] = useState(false);
  const [sectionMessage, setSectionMessage] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const load = () => {
    fetch("/api/testimonials")
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
    fetch("/api/admin/sections/testimonials-page", { headers: getAuthHeader() })
      .then((r) => r.ok ? r.json() : null)
      .then((data) => data && setSectionConfig({ videoSectionTitle: data.videoSectionTitle ?? "", videoSectionSubtitle: data.videoSectionSubtitle ?? "" }))
      .catch(() => {});
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...getAuthHeader() },
        body: JSON.stringify({
          name: form.name.trim(),
          role: form.role.trim(),
          company: form.company.trim(),
          content: form.content.trim(),
          rating: Number(form.rating) || 5,
          videoUrl: form.videoUrl.trim() || undefined,
          videoTitle: form.videoTitle.trim() || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setMessage({ type: "ok", text: "Testimonial added." });
        setForm({ name: "", role: "", company: "", content: "", rating: 5, videoUrl: "", videoTitle: "" });
        load();
      } else {
        setMessage({ type: "err", text: data.error || "Failed to add." });
      }
    } catch {
      setMessage({ type: "err", text: "Network error." });
    }
    setSubmitting(false);
  };

  const handleSaveSectionConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    setSectionMessage(null);
    setSectionSaving(true);
    try {
      const res = await fetch("/api/admin/sections/testimonials-page", {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...getAuthHeader() },
        body: JSON.stringify(sectionConfig),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setSectionMessage({ type: "ok", text: "Video Testimonials section text saved." });
      } else {
        setSectionMessage({ type: "err", text: data.error || "Failed to save." });
      }
    } catch {
      setSectionMessage({ type: "err", text: "Network error." });
    }
    setSectionSaving(false);
  };

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setVideoUploading(true);
    setMessage(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload-video", {
        method: "POST",
        headers: getAuthHeader(),
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.url) {
        setForm((f) => ({ ...f, videoUrl: data.url }));
        setMessage({ type: "ok", text: "Video uploaded. You can add testimonial now." });
      } else {
        setMessage({ type: "err", text: data.error || "Upload failed." });
      }
    } catch {
      setMessage({ type: "err", text: "Upload failed." });
    }
    setVideoUploading(false);
    e.target.value = "";
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this testimonial?")) return;
    try {
      const res = await fetch(`/api/admin/testimonials?id=${id}`, {
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
            <MessageSquare className="w-5 h-5 text-accent-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-navy">Manage Testimonials</h1>
            <p className="text-sm text-primary-navy/70">Add or remove client testimonials</p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSaveSectionConfig}
          className="rounded-2xl bg-white border border-primary-navy/10 shadow-soft p-6 mb-8"
        >
          <h2 className="font-bold text-primary-navy mb-4 flex items-center gap-2">
            <Type className="w-5 h-5" />
            Video Testimonials section (title &amp; subtitle on site)
          </h2>
          <p className="text-sm text-primary-navy/70 mb-4">This controls the heading and subtitle shown above the video testimonials block on the public testimonials page.</p>
          <div className="grid sm:grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Section title</label>
              <input
                type="text"
                value={sectionConfig.videoSectionTitle}
                onChange={(e) => setSectionConfig((c) => ({ ...c, videoSectionTitle: e.target.value }))}
                placeholder="e.g. Video Testimonials"
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Section subtitle</label>
              <input
                type="text"
                value={sectionConfig.videoSectionSubtitle}
                onChange={(e) => setSectionConfig((c) => ({ ...c, videoSectionSubtitle: e.target.value }))}
                placeholder="e.g. Watch client stories and insights. More videos on our Instagram."
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
              />
            </div>
          </div>
          {sectionMessage && (
            <p className={`mt-4 text-sm ${sectionMessage.type === "ok" ? "text-green-600" : "text-red-600"}`}>{sectionMessage.text}</p>
          )}
          <button type="submit" disabled={sectionSaving} className="mt-4 rounded-xl bg-primary-navy text-white px-6 py-2.5 font-semibold disabled:opacity-50">
            {sectionSaving ? "Saving…" : "Save section text"}
          </button>
        </motion.form>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white border border-primary-navy/10 shadow-soft p-6 mb-8"
        >
          <h2 className="font-bold text-primary-navy mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add testimonial
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Role</label>
              <input
                type="text"
                value={form.role}
                onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-primary-navy mb-1">Company</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-primary-navy mb-1">Content *</label>
              <textarea
                value={form.content}
                onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                rows={3}
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Rating (1-5)</label>
              <select
                value={form.rating}
                onChange={(e) => setForm((f) => ({ ...f, rating: Number(e.target.value) }))}
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>{n} stars</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-primary-navy mb-1">Video (optional) — use URL or upload</label>
              <p className="text-xs text-primary-navy/60 mb-2">Paste a YouTube or Instagram Reel URL to show the video on site, or upload a video file. Both options available.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="url"
                  value={form.videoUrl}
                  onChange={(e) => setForm((f) => ({ ...f, videoUrl: e.target.value }))}
                  placeholder="YouTube or Instagram Reel URL"
                  className="flex-1 rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
                />
                <span className="text-primary-navy/50 self-center text-sm">or</span>
                <label className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy cursor-pointer hover:bg-primary-navy/5 whitespace-nowrap">
                  <Video className="w-4 h-4" />
                  {videoUploading ? "Uploading…" : "Upload video"}
                  <input type="file" accept="video/mp4,video/webm,video/quicktime" className="sr-only" onChange={handleVideoUpload} disabled={videoUploading} />
                </label>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-primary-navy mb-1">Video title (optional)</label>
              <input
                type="text"
                value={form.videoTitle}
                onChange={(e) => setForm((f) => ({ ...f, videoTitle: e.target.value }))}
                className="w-full rounded-xl border border-primary-navy/20 px-4 py-2.5 text-primary-navy"
              />
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
            {submitting ? "Adding…" : "Add testimonial"}
          </button>
        </motion.form>

        <div className="rounded-2xl bg-white border border-primary-navy/10 shadow-soft overflow-hidden">
          <h2 className="font-bold text-primary-navy p-4 border-b border-primary-navy/10">Current testimonials ({list.length})</h2>
          {loading ? (
            <p className="p-6 text-primary-navy/60">Loading…</p>
          ) : list.length === 0 ? (
            <p className="p-6 text-primary-navy/60">No testimonials yet.</p>
          ) : (
            <ul className="divide-y divide-primary-navy/10">
              {list.map((t) => (
                <li key={t.id} className="p-4 flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-primary-navy">{t.name}</p>
                    <p className="text-sm text-primary-navy/70">{t.role}, {t.company}</p>
                    <p className="text-sm text-primary-navy/80 mt-1 line-clamp-2">&ldquo;{t.content}&rdquo;</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < t.rating ? "fill-accent-gold text-accent-gold" : "text-primary-navy/20"}`} />
                      ))}
                    </div>
                    {t.videoUrl && <p className="text-xs text-accent-gold mt-1">Video: {t.videoUrl}</p>}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(t.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg shrink-0"
                    aria-label="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FileText, MessageSquare, ArrowRight, LogOut, LayoutDashboard } from "lucide-react";

const ADMIN_STORAGE_KEY = "spry_admin_password";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const pass = sessionStorage.getItem(ADMIN_STORAGE_KEY);
    if (!pass) {
      router.replace("/admin");
      return;
    }
    fetch("/api/admin/check", { headers: { "x-admin-password": pass } })
      .then((r) => { if (!r.ok) router.replace("/admin"); });
  }, [mounted, router]);

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_STORAGE_KEY);
    router.replace("/admin");
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-navy flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-navy">Admin Dashboard</h1>
              <p className="text-sm text-primary-navy/70">Manage testimonials and blog posts</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 text-primary-navy/70 hover:text-primary-navy text-sm"
          >
            <LogOut className="w-4 h-4" />
            Log out
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white border border-primary-navy/10 shadow-soft p-6 hover:shadow-card-hover transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-gold/15 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-accent-gold" />
            </div>
            <h2 className="text-lg font-bold text-primary-navy mb-2">Testimonials</h2>
            <p className="text-sm text-primary-navy/70 mb-4">
              Add, edit or remove client testimonials. Optional video URL for video testimonials.
            </p>
            <Link
              href="/admin/testimonials"
              className="inline-flex items-center gap-2 text-accent-gold font-semibold hover:gap-3 transition-all"
            >
              Manage testimonials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl bg-white border border-primary-navy/10 shadow-soft p-6 hover:shadow-card-hover transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-gold/15 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-accent-gold" />
            </div>
            <h2 className="text-lg font-bold text-primary-navy mb-2">Blog</h2>
            <p className="text-sm text-primary-navy/70 mb-4">
              Add or edit blog posts. Slug is auto-generated from title if not provided.
            </p>
            <Link
              href="/admin/blog"
              className="inline-flex items-center gap-2 text-accent-gold font-semibold hover:gap-3 transition-all"
            >
              Manage blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-primary-navy/60 hover:text-primary-navy">
            ← Back to site
          </Link>
        </div>
      </div>
    </div>
  );
}

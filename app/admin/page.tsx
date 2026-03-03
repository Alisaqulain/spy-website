"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, ArrowRight, AlertCircle } from "lucide-react";

const ADMIN_STORAGE_KEY = "spry_admin_password";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/check", {
        headers: { "x-admin-password": password },
      });
      if (res.ok) {
        typeof window !== "undefined" && sessionStorage.setItem(ADMIN_STORAGE_KEY, password);
        router.push("/admin/dashboard");
        return;
      }
      setError("Invalid password.");
    } catch {
      setError("Network error.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl bg-white shadow-card border border-primary-navy/10 p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary-navy/10 flex items-center justify-center">
            <Lock className="w-6 h-6 text-primary-navy" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary-navy">Admin Login</h1>
            <p className="text-sm text-primary-navy/70">Enter password to continue</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary-navy mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-primary-navy/20 px-4 py-3 text-primary-navy focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold"
              placeholder="Admin password"
              required
              autoFocus
            />
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-primary-navy text-white py-3 font-semibold flex items-center justify-center gap-2 hover:bg-primary-navy/90 disabled:opacity-50"
          >
            {loading ? "Checking…" : "Log in"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
        <p className="text-xs text-primary-navy/50 mt-6">
          Default for testing: admin123. Set ADMIN_PASSWORD in .env for production.
        </p>
      </motion.div>
    </div>
  );
}

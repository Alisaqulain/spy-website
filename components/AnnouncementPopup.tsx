"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";

const STORAGE_KEY = "spry-popup-dismissed";

export default function AnnouncementPopup() {
  const [visible, setVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const dismissed = localStorage.getItem(STORAGE_KEY);
        if (dismissed !== "true") setVisible(true);
      } catch {
        setVisible(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    try {
      if (dontShowAgain) localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-primary-navy/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-2 text-primary-navy/50 hover:bg-primary-navy/5 hover:text-primary-navy transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 rounded-full bg-accent-gold/15 px-3 py-1.5 w-fit mb-5">
              <Sparkles className="w-4 h-4 text-accent-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent-gold">New</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-primary-navy mb-3">Get instant quotes</h3>
            <p className="text-primary-navy/80 text-base mb-6">
              Compare health & motor insurance plans and request a callback in seconds. Our advisors are here to help.
            </p>

            <Link
              href="/contact"
              onClick={handleClose}
              className="flex items-center justify-center gap-2 w-full rounded-2xl bg-accent-gold text-primary-navy py-3.5 font-semibold hover:bg-amber-500 transition-colors mb-5"
            >
              Get free quote
              <ArrowRight className="w-5 h-5" />
            </Link>

            <label className="flex items-center gap-2 cursor-pointer text-sm text-primary-navy/70">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="rounded border-primary-navy/30 text-accent-gold focus:ring-accent-gold/50"
              />
              Don’t show this again
            </label>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

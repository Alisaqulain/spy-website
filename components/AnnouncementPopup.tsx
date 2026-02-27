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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed z-[101] top-1/2 -translate-y-1/2 max-h-[85vh] md:max-h-[90vh] flex flex-col rounded-2xl md:rounded-3xl bg-white shadow-2xl overflow-hidden left-[max(1rem,env(safe-area-inset-left))] right-[max(1rem,env(safe-area-inset-right))] md:left-1/2 md:right-auto md:w-full md:max-w-md md:-translate-x-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-y-auto overscroll-contain flex-1 min-h-0 p-5 pb-6 md:p-8">
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-3 top-3 md:right-4 md:top-4 z-10 rounded-full p-2 text-primary-navy/50 hover:text-primary-navy hover:bg-primary-navy/5 transition-colors touch-manipulation"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 rounded-full bg-accent-gold/15 px-3 py-1.5 w-fit mb-4">
                <Sparkles className="w-4 h-4 text-accent-gold" />
                <span className="text-xs font-bold uppercase tracking-wider text-accent-gold">New</span>
              </div>

              <h3 className="text-lg md:text-2xl font-bold text-primary-navy mb-2 md:mb-3 pr-10">Get instant quotes</h3>
              <p className="text-primary-navy/80 text-sm md:text-base mb-5 md:mb-6">
                Compare health & motor insurance plans and request a callback in seconds. Our advisors are here to help.
              </p>

              <Link
                href="/contact"
                onClick={handleClose}
                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-accent-gold text-primary-navy py-3.5 font-semibold hover:bg-amber-500 transition-colors mb-4 touch-manipulation"
              >
                Get free quote
                <ArrowRight className="w-5 h-5" />
              </Link>

              <label className="flex items-center gap-2 cursor-pointer text-sm text-primary-navy/70 touch-manipulation">
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  className="rounded border-primary-navy/30 text-accent-gold focus:ring-accent-gold/50 w-4 h-4 shrink-0"
                />
                Don&apos;t show this again
              </label>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

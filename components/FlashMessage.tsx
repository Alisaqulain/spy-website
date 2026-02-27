"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const STORAGE_KEY = "spry-flash-dismissed";

export type FlashMessageItem = {
  id: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  path?: string;
};

const defaultMessages: FlashMessageItem[] = [
  {
    id: "instant-quote-2024",
    title: "Get instant quotes for health & motor insurance.",
    href: "/contact",
    linkLabel: "Get quote",
    path: "/",
  },
  {
    id: "claims-portal-2024",
    title: "Track your claim status online.",
    href: "/contact",
    linkLabel: "Learn more",
    path: "/contact",
  },
  {
    id: "global-announce",
    title: "Get instant quotes for health & motor insurance.",
    href: "/contact",
    linkLabel: "Get quote",
  },
];

function pickMessage(pathname: string): FlashMessageItem {
  const exact = defaultMessages.find((m) => m.path === pathname);
  if (exact) return exact;
  const fallback = defaultMessages.find((m) => !m.path);
  return fallback ?? defaultMessages[0];
}

export default function FlashMessage() {
  const pathname = usePathname() ?? "/";
  const message = pickMessage(pathname);
  const { id, title, href, linkLabel } = message;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (dismissed !== id) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, [id]);

  const handleDismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, id);
    } catch {}
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="bg-white border-b border-primary-navy/10"
        >
          <div className="container-custom px-4 md:px-8 py-4 md:py-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center md:text-left">
            <p className="text-primary-navy text-base md:text-lg font-semibold">
              {title}
              {href && linkLabel && (
                <>
                  {" "}
                  <Link
                    href={href}
                    className="text-accent-gold font-bold hover:underline"
                  >
                    {linkLabel} →
                  </Link>
                </>
              )}
            </p>
            <button
              type="button"
              onClick={handleDismiss}
              className="ml-auto md:ml-0 p-2.5 rounded-xl text-primary-navy/50 hover:text-primary-navy hover:bg-primary-navy/5 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

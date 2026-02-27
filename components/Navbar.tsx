"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV, CONTACT } from "@/lib/site-config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const megaItems = [
    { key: "corporate", ...NAV.corporate },
    { key: "retail", ...NAV.retail },
    { key: "industry", ...NAV.industry },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-card py-2" : "bg-white/95 backdrop-blur-md py-3"
      }`}
    >
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <span className="text-xl md:text-2xl font-bold text-primary-navy">SPY Insurance</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {megaItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setMegaOpen(item.key)}
                onMouseLeave={() => setMegaOpen(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-3 text-primary-navy font-medium hover:text-accent-gold transition-colors rounded-2xl"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <AnimatePresence>
                  {megaOpen === item.key && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="bg-white rounded-2xl shadow-card-hover border border-primary-navy/5 min-w-[280px] py-3">
                        <Link
                          href={item.href}
                          className="block px-5 py-2 text-primary-navy font-semibold hover:bg-primary-navy/5 hover:text-accent-gold rounded-lg mx-2"
                        >
                          View all {item.label}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-primary-navy/80 hover:bg-primary-navy/5 hover:text-accent-gold rounded-lg mx-2 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link href={NAV.about.href} className="px-4 py-3 text-primary-navy font-medium hover:text-accent-gold transition-colors rounded-2xl">
              {NAV.about.label}
            </Link>
            <Link href={NAV.caseStudies.href} className="px-4 py-3 text-primary-navy font-medium hover:text-accent-gold transition-colors rounded-2xl">
              {NAV.caseStudies.label}
            </Link>
            <Link href={NAV.careers.href} className="px-4 py-3 text-primary-navy font-medium hover:text-accent-gold transition-colors rounded-2xl">
              {NAV.careers.label}
            </Link>
            <Link href={NAV.blog.href} className="px-4 py-3 text-primary-navy font-medium hover:text-accent-gold transition-colors rounded-2xl">
              {NAV.blog.label}
            </Link>
            <Link href={NAV.contact.href} className="px-4 py-3 text-primary-navy font-medium hover:text-accent-gold transition-colors rounded-2xl">
              {NAV.contact.label}
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-primary-navy hover:text-accent-gold transition-colors text-sm font-medium">
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
            <Link href="/contact" className="btn-primary">Get Quote</Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-primary-navy"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-primary-navy/10 mt-2 pt-4 pb-6"
            >
              <div className="space-y-2">
                {megaItems.map((item) => (
                  <div key={item.key}>
                    <Link href={item.href} className="block py-2 font-medium text-primary-navy" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="block py-1.5 text-sm text-primary-navy/80" onClick={() => setMobileOpen(false)}>
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link href={NAV.about.href} className="block py-2 font-medium text-primary-navy" onClick={() => setMobileOpen(false)}>{NAV.about.label}</Link>
                <Link href={NAV.caseStudies.href} className="block py-2 font-medium text-primary-navy" onClick={() => setMobileOpen(false)}>{NAV.caseStudies.label}</Link>
                <Link href={NAV.careers.href} className="block py-2 font-medium text-primary-navy" onClick={() => setMobileOpen(false)}>{NAV.careers.label}</Link>
                <Link href={NAV.blog.href} className="block py-2 font-medium text-primary-navy" onClick={() => setMobileOpen(false)}>{NAV.blog.label}</Link>
                <Link href={NAV.contact.href} className="block py-2 font-medium text-primary-navy" onClick={() => setMobileOpen(false)}>{NAV.contact.label}</Link>
              </div>
              <div className="mt-4 pt-4 border-t border-primary-navy/10 flex flex-col gap-3">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-primary-navy">{CONTACT.phone}</a>
                <Link href="/contact" className="btn-primary text-center" onClick={() => setMobileOpen(false)}>Get Quote</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

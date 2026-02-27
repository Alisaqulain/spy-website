"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  breadcrumb?: { label: string; href: string }[];
  /** Optional background image URL (e.g. Unsplash). If not set, uses navy gradient. */
  backgroundImage?: string;
}

const defaultBg =
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80";

export default function PageHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  breadcrumb,
  backgroundImage = defaultBg,
}: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 text-white overflow-hidden min-h-[40vh] flex flex-col justify-end">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center section-bg-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/94 via-primary-navy/88 to-primary-navy/80" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="container-custom relative z-10">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-accent-gold transition-colors">
              Home
            </Link>
            {breadcrumb.map((b, i) => (
              <span key={b.href}>
                <span className="mx-2">/</span>
                <Link href={b.href} className="hover:text-accent-gold transition-colors">
                  {b.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-accent-gold font-semibold text-sm uppercase tracking-wider mb-3"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-8"
          >
            {description}
          </motion.p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {primaryCTA && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={primaryCTA.href}
                  className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2"
                >
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            )}
            {secondaryCTA && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={secondaryCTA.href}
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary-navy"
                >
                  {secondaryCTA.text}
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

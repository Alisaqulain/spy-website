"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  /** Use "dark" on dark background sections (white text) */
  variant?: "light" | "dark";
}

export default function SectionHeading({ title, subtitle, center = true, variant = "light" }: SectionHeadingProps) {
  const isDark = variant === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={center ? "text-center mb-12 md:mb-16" : "mb-12 md:mb-16"}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance ${isDark ? "text-white" : "text-primary-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-white/85" : "text-primary-navy/70"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

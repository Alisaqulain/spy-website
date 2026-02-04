"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="card group h-full flex flex-col"
    >
      <div className="w-16 h-16 bg-accent-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-green transition-colors duration-300">
        <Icon className="w-8 h-8 text-accent-green group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-primary-dark mb-3">{title}</h3>
      <p className="text-primary-dark/70 mb-4 flex-grow">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center space-x-2 text-accent-green font-medium hover:space-x-3 transition-all group-hover:underline"
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

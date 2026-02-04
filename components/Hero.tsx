"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  showStats?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA = { text: "Get Quote", href: "/contact" },
  secondaryCTA = { text: "Learn More", href: "/about-us" },
  showStats = false,
}: HeroProps) {
  const stats = [
    { icon: Shield, value: "15+", label: "Years Experience" },
    { icon: Users, value: "5000+", label: "Happy Clients" },
    { icon: TrendingUp, value: "50+", label: "Insurance Partners" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background-light via-white to-background-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #4D5262 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent-green font-semibold text-sm uppercase tracking-wider mb-4"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6 text-balance"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-dark/70 mb-8 max-w-2xl mx-auto text-balance"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href={primaryCTA.href} className="btn-primary flex items-center space-x-2">
              <span>{primaryCTA.text}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={secondaryCTA.href} className="btn-outline">
              {secondaryCTA.text}
            </Link>
          </motion.div>

          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="card text-center"
                  >
                    <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent-green" />
                    </div>
                    <div className="text-3xl font-bold text-primary-dark mb-2">
                      {stat.value}
                    </div>
                    <div className="text-primary-dark/70">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-dark/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-accent-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

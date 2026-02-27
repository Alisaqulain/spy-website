"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHero from "./PageHero";

interface ServiceSubpageProps {
  title: string;
  subtitle?: string;
  overview: string;
  benefits: string[];
  industries?: string[];
  whyChoose?: string;
  breadcrumb: { label: string; href: string }[];
  parentHref: string;
  parentLabel: string;
}

export default function ServiceSubpage({
  title,
  subtitle,
  overview,
  benefits,
  industries,
  whyChoose,
  breadcrumb,
  parentHref,
  parentLabel,
}: ServiceSubpageProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        description={overview}
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
        breadcrumb={breadcrumb}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">Overview</h2>
          <p className="text-lg text-primary-navy/80 leading-relaxed">{overview}</p>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-8">Key Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {benefits.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white shadow-soft"
              >
                <span className="w-6 h-6 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold text-sm shrink-0">✓</span>
                <span className="text-primary-navy/85">{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      {industries && industries.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">Industries Covered</h2>
            <p className="text-primary-navy/80 max-w-3xl">{industries.join(" • ")}</p>
          </div>
        </section>
      )}
      {whyChoose && (
        <section className="section-padding bg-background-light">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">Why Choose Us</h2>
            <p className="text-lg text-primary-navy/80 leading-relaxed">{whyChoose}</p>
          </div>
        </section>
      )}
      <section className="section-padding bg-primary-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Discuss Your Requirements?</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">Our team will design a solution tailored to your needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={parentHref} className="btn-outline">
              View All {parentLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

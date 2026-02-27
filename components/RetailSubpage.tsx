"use client";

import Link from "next/link";
import PageHero from "./PageHero";
import { ArrowRight } from "lucide-react";

interface RetailSubpageProps {
  title: string;
  subtitle?: string;
  overview: string;
  coverage: string[];
  benefits: string[];
  exclusions?: string[];
  claimProcess: string[];
  breadcrumb: { label: string; href: string }[];
  parentHref: string;
  parentLabel: string;
}

export default function RetailSubpage({
  title,
  subtitle,
  overview,
  coverage,
  benefits,
  exclusions,
  claimProcess,
  breadcrumb,
  parentHref,
  parentLabel,
}: RetailSubpageProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        description={overview}
        primaryCTA={{ text: "Get Quote", href: "/contact" }}
        breadcrumb={breadcrumb}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">Coverage Details</h2>
          <ul className="space-y-3">
            {coverage.map((c, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center text-sm shrink-0 mt-0.5">✓</span>
                <span className="text-primary-navy/85">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">Benefits</h2>
          <ul className="space-y-3">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center text-sm shrink-0 mt-0.5">✓</span>
                <span className="text-primary-navy/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {exclusions && exclusions.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">Exclusions</h2>
            <p className="text-primary-navy/70 mb-4">Typical exclusions (policy-specific terms apply):</p>
            <ul className="space-y-2">
              {exclusions.map((e, i) => (
                <li key={i} className="text-primary-navy/80">• {e}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <section className="section-padding bg-background-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">Claim Process</h2>
          <ol className="space-y-4">
            {claimProcess.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-accent-gold text-primary-navy font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <span className="text-primary-navy/85 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section-padding bg-primary-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Covered?</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">Our advisors will help you choose the right plan.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2">
              Get Quote
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

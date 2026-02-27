"use client";

import Link from "next/link";
import PageHero from "./PageHero";
import { ArrowRight } from "lucide-react";

interface IndustrySubpageProps {
  title: string;
  subtitle?: string;
  overview: string;
  risks: string[];
  solutions: string[];
  caseExample?: string;
  breadcrumb: { label: string; href: string }[];
  parentHref: string;
  parentLabel: string;
}

export default function IndustrySubpage({
  title,
  subtitle,
  overview,
  risks,
  solutions,
  caseExample,
  breadcrumb,
  parentHref,
  parentLabel,
}: IndustrySubpageProps) {
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">Industry Risks</h2>
          <p className="text-primary-navy/80 mb-6">{overview}</p>
          <ul className="space-y-2">
            {risks.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent-gold font-bold">•</span>
                <span className="text-primary-navy/85">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">Insurance Solutions</h2>
          <ul className="space-y-3">
            {solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white shadow-soft">
                <span className="w-6 h-6 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center text-sm shrink-0">✓</span>
                <span className="text-primary-navy/85">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {caseExample && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">Case Example</h2>
            <p className="text-primary-navy/80 leading-relaxed">{caseExample}</p>
          </div>
        </section>
      )}
      <section className="section-padding bg-primary-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-4">Discuss Your Industry Requirements</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">We'll design a programme tailored to your sector.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={parentHref} className="btn-outline">
              View All Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

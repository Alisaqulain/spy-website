"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Briefcase, Car, Plane, Home, ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const products = [
  { icon: Heart, title: "Health Care", href: "/retail/health", short: "Comprehensive health coverage for you and your family." },
  { icon: Briefcase, title: "Life Care", href: "/retail/life", short: "Life insurance and savings plans for financial security." },
  { icon: Car, title: "Motor Care", href: "/retail/motor", short: "Car, bike, and commercial vehicle insurance." },
  { icon: Plane, title: "Travel Care", href: "/retail/travel", short: "Travel insurance for domestic and international trips." },
  { icon: Home, title: "Home Insurance", href: "/retail/home", short: "Comprehensive policy for home and contents." },
];

const process = [
  "Share your requirements with our advisors.",
  "We compare plans from multiple insurers.",
  "You choose the best coverage at the right price.",
  "We assist with documentation and policy issuance.",
  "Ongoing support and claims assistance when you need it.",
];

const faqs = [
  { q: "How do I choose the right retail policy?", a: "Our advisors assess your needs, budget, and existing coverage to recommend suitable options from our partner insurers. We explain terms and help you compare." },
  { q: "Do you help with claims?", a: "Yes. We provide claim assistance for retail policies—documentation, follow-up with the insurer, and guidance through the process." },
  { q: "Can I get a quote online?", a: "You can submit your details via our Contact or Get Quote form. Our team will get in touch with personalised options." },
];

export default function RetailPage() {
  return (
    <>
      <PageHero
        title="Retail Insurance Solutions"
        subtitle="Personal & Family Protection"
        description="We help individuals and families find the right coverage. From health and life to motor, travel, and home—our advisors guide you to informed choices and competitive premiums."
        primaryCTA={{ text: "Get a Quote", href: "/contact" }}
        breadcrumb={[{ label: "Retail", href: "/retail" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">Overview</h2>
            <p className="text-lg text-primary-navy/80">
              We are committed to helping everyone find the right coverage to be prepared for uncertainties. Our team offers a wide range of curated retail insurance solutions—health, life, motor, travel, and home—with transparent advice and support at every step.
            </p>
          </div>
          <SectionHeading title="Our Retail Products" subtitle="End-to-end guidance for your personal insurance needs." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={p.href} className="card block h-full group hover:border-accent-gold/30 border border-transparent">
                    <div className="w-14 h-14 rounded-2xl bg-primary-navy/5 flex items-center justify-center mb-5 group-hover:bg-accent-gold/10">
                      <Icon className="w-7 h-7 text-accent-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-navy mb-3">{p.title}</h3>
                    <p className="text-primary-navy/70 mb-6">{p.short}</p>
                    <span className="inline-flex items-center gap-2 text-accent-gold font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeading title="How We Work" subtitle="Simple, transparent process from need to policy." />
          <ul className="max-w-2xl mx-auto space-y-4">
            {process.map((step, i) => (
              <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-soft">
                <CheckCircle className="w-6 h-6 text-accent-gold shrink-0 mt-0.5" />
                <span className="text-primary-navy/85">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Claim Assistance" subtitle="We support you through the claims process." />
          <p className="max-w-3xl mx-auto text-center text-primary-navy/80 mb-8">
            Our team assists with claim intimation, documentation, and follow-up with insurers so you can focus on recovery. Contact us when you need to file a claim.
          </p>
          <div className="text-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact for Claims
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="card">
                <h3 className="font-bold text-primary-navy mb-2">{f.q}</h3>
                <p className="text-primary-navy/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Your Personalised Quote</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">Tell us what you need—we’ll find the right coverage.</p>
          <Link href="/contact" className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2">
            Get Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

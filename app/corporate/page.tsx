"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  FileText,
  Landmark,
  Sprout,
  Plane,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Building2,
    title: "Direct Broking",
    description: "We help businesses manage risks and prepare for property casualties with tailored direct insurance programmes.",
    href: "/corporate/direct-broking",
  },
  {
    icon: FileText,
    title: "Reinsurance Broking",
    description: "Specialised reinsurance broking as intermediaries to negotiate and secure the best policies.",
    href: "/corporate/reinsurance-broking",
  },
  {
    icon: ShieldCheck,
    title: "Claims Management",
    description: "Dedicated Claims Assistance Team with full responsibility from intimation to settlement.",
    href: "/corporate/claims-management",
  },
  {
    icon: Landmark,
    title: "Lenders Insurance Advisory",
    description: "Structured insurance products for assets financed by project lenders.",
    href: "/corporate/lenders-advisory",
  },
  {
    icon: Sprout,
    title: "Rural Insurance Solutions",
    description: "End-to-end insurance solutions for the rural and marginal sector.",
    href: "/corporate/rural-insurance",
  },
  {
    icon: Plane,
    title: "Aviation & Aerospace Insurance",
    description: "Expert guidance for aviation insurance policies with the right coverage.",
    href: "/corporate/aviation",
  },
];

const faqs = [
  { q: "What is corporate insurance broking?", a: "We act as intermediaries between your business and insurers, designing and placing risk transfer programmes tailored to your operations and exposures." },
  { q: "How do you support claims?", a: "Our dedicated Claims Assistance Team takes full responsibility from the date of intimation and supports you at every step until settlement." },
  { q: "Do you serve lenders and financiers?", a: "Yes. We provide need-based, fully structured insurance solutions for assets financed by project lenders." },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        title="Corporate Risk Solutions"
        subtitle="Enterprise Insurance & Risk Management"
        description="We design and deliver risk management and insurance programmes for businesses. From direct and reinsurance broking to claims management and lenders advisory, we help you protect what matters."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ text: "Our Services", href: "#services" }}
        breadcrumb={[{ label: "Corporate", href: "/corporate" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">About Our Corporate Solutions</h2>
            <p className="text-lg text-primary-navy/80">
              Through independent risk assessment and advisory backed by knowledge and experience, we help organisations eliminate uncertainties and manage insurable risks. Our corporate practice covers direct and reinsurance broking, claims management, lenders insurance advisory, rural solutions, and aviation & aerospace insurance.
            </p>
          </div>
          <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="card group shadow-soft hover:shadow-card-hover border border-transparent hover:border-accent-gold/20"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-navy/5 flex items-center justify-center mb-5 group-hover:bg-accent-gold/10 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-3">{s.title}</h3>
                  <p className="text-primary-navy/70 mb-6">{s.description}</p>
                  <Link href={s.href} className="inline-flex items-center gap-2 text-accent-gold font-medium">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeading title="Why Choose Our Corporate Practice" subtitle="Expertise, independence, and end-to-end support for your risk and insurance needs." />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent-gold mb-2">20+</div>
              <p className="text-primary-navy/80">Years of corporate risk and broking experience</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent-gold mb-2">500+</div>
              <p className="text-primary-navy/80">Professionals dedicated to your programmes</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent-gold mb-2">8,000+</div>
              <p className="text-primary-navy/80">Clients served across industries</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="card">
                <h3 className="font-bold text-primary-navy mb-2">{faq.q}</h3>
                <p className="text-primary-navy/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding relative text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center section-bg-image" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-primary-navy/88" />
        <div className="container-custom relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Speak with our corporate team for a tailored risk and insurance programme.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

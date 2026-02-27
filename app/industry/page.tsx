"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Factory, Zap, LayoutGrid, Sprout, Fuel, Layers, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const industries = [
  { icon: Factory, title: "Iron & Steel", href: "/industry/iron-steel", short: "Risk solutions for the iron and steel sector." },
  { icon: Zap, title: "Power", href: "/industry/power", short: "Insurance for power and utilities." },
  { icon: LayoutGrid, title: "Plywood & Lamination", href: "/industry/plywood", short: "Coverage for plywood manufacturing." },
  { icon: Sprout, title: "Sugar", href: "/industry/sugar", short: "Sugar industry risk and insurance." },
  { icon: Fuel, title: "Oil & Gas", href: "/industry/oil-gas", short: "Specialist coverage for oil and gas." },
  { icon: Layers, title: "Additional Industries", href: "/industry/additional", short: "Other sectors we serve." },
];

export default function IndustryPage() {
  return (
    <>
      <PageHero
        title="Industry Solutions"
        subtitle="Sector-Specific Risk Management"
        description="With deep experience in the insurance sector, we help organisations across industries manage business and commercial risks with tailored insurance programmes."
        primaryCTA={{ text: "Discuss Your Sector", href: "/contact" }}
        breadcrumb={[{ label: "Industry", href: "/industry" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">Industry Expertise</h2>
            <p className="text-lg text-primary-navy/80">
              We understand the unique risks and regulatory context of each sector. Our industry practice delivers risk assessment, programme design, and placement across manufacturing, energy, commodities, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={ind.href}
                    className="card block h-full group hover:border-accent-gold/30 border border-transparent"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary-navy/5 flex items-center justify-center mb-5 group-hover:bg-accent-gold/10">
                      <Icon className="w-7 h-7 text-accent-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-navy mb-3">{ind.title}</h3>
                    <p className="text-primary-navy/70 mb-6">{ind.short}</p>
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
      <section className="section-padding bg-primary-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Sector-Specific Programme?</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">Our industry team will design a solution for your business.</p>
          <Link href="/contact" className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

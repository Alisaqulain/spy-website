"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Factory, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const cases = [
  {
    id: "steel-plant-risk-programme",
    title: "Integrated Steel Plant Risk Programme",
    sector: "Iron & Steel",
    icon: Factory,
    problem: "A large steel producer needed a unified property, BI, and liability programme with consistent terms across multiple locations.",
    outcome: "We designed a master programme with local policies, achieving better terms and a single point of contact for risk and claims.",
  },
  {
    id: "power-project-car",
    title: "Power Project Construction Cover",
    sector: "Power",
    icon: Zap,
    problem: "A renewable energy developer required contractors' all risks (CAR) and erection all risks (EAR) for a new solar project.",
    outcome: "We placed CAR and EAR with competitive premiums and coordinated with lenders' insurance requirements for financial close.",
  },
  {
    id: "corporate-group-health",
    title: "Corporate Group Health Restructuring",
    sector: "Corporate",
    icon: Building2,
    problem: "A mid-sized corporate wanted to consolidate group health coverage and improve employee experience while controlling cost.",
    outcome: "We recommended a switch to a carrier with a stronger network and digital claims process, reducing premium and improving satisfaction.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Our Work in Practice"
        description="Real-world examples of how we help clients manage risk and secure the right insurance programmes."
        primaryCTA={{ text: "Discuss Your Needs", href: "/contact" }}
        breadcrumb={[{ label: "Case Studies", href: "/case-studies" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Selected Case Studies"
            subtitle="Problem, risk identified, solution provided, and outcome—illustrating our approach and capabilities."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.article
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card group hover:border-accent-gold/30 border border-transparent"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-navy/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-gold" />
                  </div>
                  <span className="text-sm text-accent-gold font-medium">{c.sector}</span>
                  <h3 className="text-xl font-bold text-primary-navy mt-2 mb-4">{c.title}</h3>
                  <p className="text-primary-navy/70 text-sm mb-2"><strong>Challenge:</strong> {c.problem}</p>
                  <p className="text-primary-navy/70 text-sm mb-6"><strong>Outcome:</strong> {c.outcome}</p>
                  <Link href={`/case-studies/${c.id}`} className="inline-flex items-center gap-2 text-accent-gold font-medium group-hover:gap-3 transition-all">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-4">Have a Similar Challenge?</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">We can help design a solution for your business.</p>
          <Link href="/contact" className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";

const values = [
  { title: "Integrity", desc: "We act with transparency and honesty in every client engagement." },
  { title: "Expertise", desc: "Our team brings deep domain knowledge and continuous learning." },
  { title: "Client First", desc: "Your objectives and risk profile drive our recommendations." },
  { title: "Excellence", desc: "We strive for excellence in placement, service, and claims support." },
];

const stats = [
  { value: 20, suffix: "+", label: "Years of Expertise" },
  { value: 18, label: "Offices in India" },
  { value: 500, suffix: "+", label: "Team Strength" },
  { value: 8000, suffix: "+", label: "Happy Customers" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Your Trusted Insurance Broker"
        description="We are a leading insurance broker and risk management firm, helping organisations and individuals make informed insurance decisions and manage insurable risks with confidence."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        breadcrumb={[{ label: "About Us", href: "/about" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">Company Overview</h2>
            <p className="text-lg text-primary-navy/80 leading-relaxed mb-6">
              We are in the business of making insurance decisions easier and more informed. With specialised solutions at optimised costs across corporate, retail, and industry verticals, our team ensures you always have the right coverage. We combine independent advisory with strong insurer relationships to deliver programmes that protect what matters.
            </p>
            <p className="text-lg text-primary-navy/80 leading-relaxed">
              From direct and reinsurance broking to claims management, lenders advisory, rural solutions, and aviation—we offer end-to-end support. For individuals and families, we provide curated health, life, motor, travel, and home insurance options with transparent advice and competitive premiums.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <Target className="w-12 h-12 text-accent-gold mb-4" />
              <h3 className="text-xl font-bold text-primary-navy mb-3">Mission</h3>
              <p className="text-primary-navy/80">To empower our clients with expert risk and insurance solutions that protect their assets, operations, and people—delivered with integrity and excellence.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <Eye className="w-12 h-12 text-accent-gold mb-4" />
              <h3 className="text-xl font-bold text-primary-navy mb-3">Vision</h3>
              <p className="text-primary-navy/80">To be the most trusted insurance broker and risk advisor for businesses and individuals, recognised for our expertise, client focus, and sustainable value.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Core Values" subtitle="The principles that guide everything we do." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card text-center"
              >
                <Award className="w-10 h-10 text-accent-gold mx-auto mb-3" />
                <h3 className="font-bold text-primary-navy mb-2">{v.title}</h3>
                <p className="text-primary-navy/70 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-navy text-white">
        <div className="container-custom">
          <SectionHeading title="Leadership" subtitle="Experienced professionals driving our growth and client success." center={true} />
          <p className="max-w-3xl mx-auto text-center text-white/85 mb-12">
            Our leadership team brings decades of experience in insurance broking, risk management, and financial services. They are committed to building a firm that puts clients first and maintains the highest standards of professionalism.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
              <Users className="w-12 h-12 text-accent-gold" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeading title="Why Choose Us" subtitle="What sets us apart as your insurance and risk partner." />
          <ul className="max-w-2xl mx-auto space-y-4">
            {["Independent advice tailored to your needs", "Access to multiple insurers and competitive terms", "Dedicated claims support and follow-up", "Sector expertise across corporate, retail, and industry", "Long-standing relationships and trust"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-soft">
                <CheckCircle className="w-6 h-6 text-accent-gold shrink-0" />
                <span className="text-primary-navy/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                  <AnimatedCounter value={s.value} suffix={s.suffix || ""} />
                </div>
                <div className="text-primary-navy/80">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">Whether you need corporate, retail, or industry solutions—we're here to help.</p>
          <Link href="/contact" className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

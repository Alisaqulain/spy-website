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
  Zap,
  Factory,
  LayoutGrid,
  Home,
  Heart,
  Car,
  Briefcase,
  ArrowRight,
  Award,
  MapPin,
  Users,
  Smile,
  Shield,
  Phone,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { NAV, CONTACT } from "@/lib/site-config";

const corporateServices = [
  {
    icon: Building2,
    title: "Direct Broking",
    description: "We help businesses manage risks and prepare for property casualties with tailored direct insurance programmes.",
    href: "/corporate/direct-broking",
  },
  {
    icon: FileText,
    title: "Reinsurance Broking",
    description: "Specialised reinsurance broking as intermediaries to negotiate and secure the best policies for our clients.",
    href: "/corporate/reinsurance-broking",
  },
  {
    icon: ShieldCheck,
    title: "Claims Management",
    description: "Dedicated Claims Assistance Team with full responsibility from claim intimation through to settlement.",
    href: "/corporate/claims-management",
  },
  {
    icon: Landmark,
    title: "Lenders Insurance Advisory",
    description: "Need-based, fully structured insurance products for assets financed by project lenders.",
    href: "/corporate/lenders-advisory",
  },
  {
    icon: Sprout,
    title: "Rural Insurance Solutions",
    description: "End-to-end insurance solutions tailor-made for the rural and marginal sector.",
    href: "/corporate/rural-insurance",
  },
  {
    icon: Plane,
    title: "Aviation & Aerospace Insurance",
    description: "Expert guidance to select suitable aviation insurance policies with the right coverage at all times.",
    href: "/corporate/aviation",
  },
];

const industryCards = [
  { title: "Iron & Steel", href: "/industry/iron-steel", icon: Factory },
  { title: "Power", href: "/industry/power", icon: Zap },
  { title: "Plywood & Lamination", href: "/industry/plywood", icon: LayoutGrid },
  { title: "Sugar", href: "/industry/sugar", icon: Sprout },
  { title: "Oil & Gas", href: "/industry/oil-gas", icon: Factory },
];

const retailProducts = [
  { title: "Health Care", href: "/retail/health", icon: Heart },
  { title: "Life Care", href: "/retail/life", icon: Briefcase },
  { title: "Motor Care", href: "/retail/motor", icon: Car },
  { title: "Travel Care", href: "/retail/travel", icon: Plane },
  { title: "Home Insurance", href: "/retail/home", icon: Home },
];

const stats = [
  { value: 20, suffix: "+", label: "Years of Expertise", icon: Award },
  { value: 18, label: "Offices in India", icon: MapPin },
  { value: 500, suffix: "+", label: "Team Strength", icon: Users },
  { value: 8000, suffix: "+", label: "Happy Customers", icon: Smile },
];

const blogPreview = [
  { title: "Understanding Corporate Risk Transfer Strategies", slug: "corporate-risk-transfer", category: "Corporate", date: "2024-02-01" },
  { title: "Why Comprehensive Health Coverage Matters for Families", slug: "health-coverage-families", category: "Retail", date: "2024-01-28" },
  { title: "Industry-Specific Insurance: What Leaders Need to Know", slug: "industry-insurance-leaders", category: "Industry", date: "2024-01-20" },
];

export default function HomeContent() {
  return (
    <>
      <HeroSlider />

      {/* Trust strip – clean cards on light background */}
      <section className="py-8 md:py-10 bg-white border-b border-primary-navy/5">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Shield, label: "IRDA Licensed Broker" },
              { icon: Award, label: "20+ Years Experience" },
              { icon: Smile, label: "8,000+ Clients Served" },
              { icon: Users, label: "500+ Expert Advisors" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-background-light border border-primary-navy/5 hover:border-accent-gold/20 hover:shadow-soft transition-all"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-accent-gold/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-gold" />
                  </div>
                  <span className="text-sm font-semibold text-primary-navy">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section
        id="about-intro"
        className="section-padding relative overflow-hidden bg-white"
      >
        <div
          className="absolute inset-0 opacity-[0.04] bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=60)",
          }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-accent-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Why SPRY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Get the Right Guidance. Manage Your Insurable Risks.
            </h2>
            <p className="text-lg md:text-xl text-primary-navy/80 leading-relaxed mb-8">
              To manage and mitigate life&apos;s uncertainties, having the right insurance coverage is essential.
              We make insurance decisions easier and more informed—with specialised solutions at optimised costs across verticals and industries.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary-navy text-white px-6 py-3 font-semibold hover:bg-primary-navy/90 hover:shadow-lg transition-all"
            >
              Explore Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Risk Management Services Grid */}
      <section id="risk-management" className="section-padding bg-background-light">
        <div className="container-custom">
          <span className="block text-center text-accent-gold font-semibold text-sm uppercase tracking-wider mb-2">
            What We Do
          </span>
          <SectionHeading
            title="Risk Management Solutions For You"
            subtitle="Through independent risk assessment and advisory backed by knowledge and experience, we help you eliminate uncertainties and manage insurable risks."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="card group hover:border-accent-gold/30 border border-transparent cursor-pointer shadow-soft hover:shadow-card-hover"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-navy/5 flex items-center justify-center mb-5 group-hover:bg-accent-gold/10 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-3">{item.title}</h3>
                  <p className="text-primary-navy/70 mb-6">{item.description}</p>
                  <Link href={item.href} className="inline-flex items-center gap-2 text-accent-gold font-medium hover:gap-3 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/corporate" className="btn-primary inline-flex items-center gap-2 shadow-lg shadow-accent-gold/20">
                Explore More Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <span className="block text-center text-accent-gold font-semibold text-sm uppercase tracking-wider mb-2">
            Sector Expertise
          </span>
          <SectionHeading
            title="Delivering Risk Management Solutions Across Industries"
            subtitle="With deep experience in the insurance sector, we help organisations manage business and commercial risks with best-in-class insurance programmes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industryCards.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="h-full"
                >
                  <Link
                    href={item.href}
                    className="card flex flex-col items-center text-center h-full hover:border-accent-gold/30 border border-transparent group shadow-soft hover:shadow-card-hover transition-shadow"
                  >
                    <Icon className="w-10 h-10 text-accent-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold text-primary-navy">{item.title}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/industry" className="btn-secondary inline-flex items-center gap-2">
              Explore More Industries
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Retail Solutions */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <span className="block text-center text-accent-gold font-semibold text-sm uppercase tracking-wider mb-2">
            For Individuals & Families
          </span>
          <SectionHeading
            title="End-to-End Retail Insurance Guidance"
            subtitle="We are committed to helping everyone find the right coverage to be prepared for uncertainties. Our team offers a vast array of curated retail insurance solutions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {retailProducts.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="h-full"
                >
                  <Link
                    href={item.href}
                    className="card flex flex-col items-center text-center h-full hover:border-accent-gold/30 border border-transparent group shadow-soft hover:shadow-card-hover transition-shadow"
                  >
                    <Icon className="w-10 h-10 text-accent-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold text-primary-navy">{item.title}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href={NAV.retail.href} className="btn-primary inline-flex items-center gap-2">
              Explore Retail Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Stats – compact, no empty feel */}
      <section className="relative text-white overflow-hidden py-14 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center section-bg-image"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-primary-navy/90" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container-custom relative z-10 px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Our Expertise. Your Peace of Mind.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/90 mb-6 max-w-md"
              >
                We help our clients transform uncertainties into opportunities with carefully selected coverage. Expert assistance anytime, anywhere.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <Link href="/about" className="btn-outline inline-flex items-center gap-2 text-sm py-2.5 px-5">
                  Explore More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-colors"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-accent-gold/25 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent-gold" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-2xl md:text-3xl font-bold text-accent-gold leading-tight">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix || ""} />
                        </div>
                        <div className="text-sm font-medium text-white/90 mt-0.5">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Partners"
            subtitle="We work with leading insurance service providers to bring the best solutions for you."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 w-40 bg-primary-navy/10 rounded-2xl flex items-center justify-center text-primary-navy/50 font-semibold">
                Partner {i}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <span className="block text-center text-accent-gold font-semibold text-sm uppercase tracking-wider mb-2">
            Latest Insights
          </span>
          <SectionHeading
            title="Blog"
            subtitle="Read the latest trends in the industry and stay informed."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPreview.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Link href={`/blog/${post.slug}`} className="card block h-full group shadow-soft hover:shadow-card-hover overflow-hidden">
                  <div className="w-full h-44 bg-cover bg-center rounded-xl mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(https://images.unsplash.com/photo-${["1454165804606-c3d57bc86b40", "1557804506-669a67965ba0", "1560472354-b33ff0c44a43"][i % 3]}?w=600&q=80)` }} />
                  <span className="text-sm text-accent-gold font-medium">{post.category}</span>
                  <h3 className="text-xl font-bold text-primary-navy mt-2 mb-2 group-hover:text-accent-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-primary-navy/70 text-sm mb-4">
                    {new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent-gold font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary inline-flex items-center gap-2">
              Explore More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Get Quote CTA strip */}
      <section className="bg-primary-navy text-white py-12 md:py-14">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-8 md:p-10"
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Get Covered?</h2>
              <p className="text-white/85">Get a free quote or speak with an advisor today.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-accent-gold text-primary-navy px-6 py-3 font-semibold shadow-lg shadow-accent-gold/25 hover:bg-amber-500 transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/50 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career CTA */}
      <section className="section-padding relative text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center section-bg-image"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-primary-navy/85" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent-gold font-semibold text-sm uppercase tracking-wider mb-3">
              We&apos;re Hiring
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Career Opportunities With Us</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join our team and help shape the future of insurance broking and risk management.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/careers" className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2 shadow-lg shadow-accent-gold/20">
                Join Our Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

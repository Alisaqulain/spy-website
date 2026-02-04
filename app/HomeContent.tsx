"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import Link from "next/link";
import {
  Building2,
  Users,
  Shield,
  Car,
  Heart,
  Home,
  Briefcase,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomeContent() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Insurance",
      description: "Comprehensive risk management solutions for businesses including employee benefits, liability, and property insurance.",
      href: "/corporate-insurance",
    },
    {
      icon: Users,
      title: "Retail Insurance",
      description: "Personalized insurance solutions for individuals including health, motor, life, travel, and home insurance.",
      href: "/retail-insurance",
    },
    {
      icon: Shield,
      title: "Group Health",
      description: "Affordable group health insurance plans designed to keep your employees healthy and your business protected.",
      href: "/corporate-insurance#group-health",
    },
    {
      icon: Car,
      title: "Motor Insurance",
      description: "Complete motor insurance coverage for cars, bikes, and commercial vehicles with competitive premiums.",
      href: "/retail-insurance#motor",
    },
  ];

  const whyChoose = [
    {
      icon: Award,
      title: "Expert Advisors",
      description: "15+ years of experience in insurance broking with certified professionals.",
    },
    {
      icon: TrendingUp,
      title: "Best Rates",
      description: "Access to 50+ insurance partners ensuring competitive premiums.",
    },
    {
      icon: CheckCircle,
      title: "Fast Claims",
      description: "Dedicated claims assistance team for seamless claim processing.",
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your insurance needs.",
    },
  ];

  const industries = [
    { name: "Manufacturing", href: "/industries#manufacturing" },
    { name: "IT & Technology", href: "/industries#it" },
    { name: "Logistics", href: "/industries#logistics" },
    { name: "Healthcare", href: "/industries#healthcare" },
    { name: "Real Estate", href: "/industries#real-estate" },
    { name: "Retail", href: "/industries#retail" },
    { name: "Education", href: "/industries#education" },
    { name: "Finance", href: "/industries#finance" },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Protect What Matters Most with Expert Insurance Solutions"
        subtitle="Trusted Insurance Broker"
        description="Comprehensive corporate and retail insurance solutions tailored to your needs. Expert guidance, competitive rates, and seamless claims support."
        primaryCTA={{ text: "Get Free Quote", href: "/contact" }}
        secondaryCTA={{ text: "Our Services", href: "#services" }}
        showStats={true}
      />

      {/* Services Overview */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Services
            </h2>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              Comprehensive insurance solutions for businesses and individuals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ServiceCard
                  key={service.title}
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  delay={index * 0.1}
                />
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/corporate-insurance" className="btn-secondary inline-flex items-center space-x-2">
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose SPY Insurance */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Why Choose SPY Insurance
            </h2>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              Your trusted partner for comprehensive insurance solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-dark/70">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate & Retail Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Corporate */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-primary-dark to-primary-dark/90 text-white p-8"
            >
              <Building2 className="w-12 h-12 mb-4 text-accent-green" />
              <h3 className="text-2xl font-bold mb-4">Corporate Insurance</h3>
              <p className="text-white/90 mb-6">
                Comprehensive risk management solutions designed for businesses of all sizes. 
                Protect your assets, employees, and operations with tailored insurance programs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span>Employee Benefits & Group Health</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span>Liability & Property Insurance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span>Marine & Engineering Coverage</span>
                </li>
              </ul>
              <Link href="/corporate-insurance" className="btn-primary bg-accent-green hover:bg-[#7FA03D] inline-flex items-center space-x-2">
                <span>Explore Corporate Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Retail */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-accent-green/10 to-accent-green/5 p-8 border-2 border-accent-green/20"
            >
              <Users className="w-12 h-12 mb-4 text-accent-green" />
              <h3 className="text-2xl font-bold mb-4 text-primary-dark">Retail Insurance</h3>
              <p className="text-primary-dark/80 mb-6">
                Personalized insurance solutions for individuals and families. 
                Find the right coverage for your health, vehicle, home, and life.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-primary-dark">Health & Life Insurance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-primary-dark">Motor & Travel Insurance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-primary-dark">Home & Personal Accident</span>
                </li>
              </ul>
              <Link href="/retail-insurance" className="btn-primary inline-flex items-center space-x-2">
                <span>Explore Retail Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              Specialized insurance solutions across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={industry.href}
                  className="card text-center hover:border-accent-green hover:border-2 transition-all block h-full"
                >
                  <Briefcase className="w-8 h-8 text-accent-green mx-auto mb-2" />
                  <span className="text-primary-dark font-medium">{industry.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/industries" className="btn-outline inline-flex items-center space-x-2">
              <span>View All Industries</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Blog Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              Stay informed with our latest articles and insurance insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="card group cursor-pointer"
              >
                <div className="w-full h-48 bg-gradient-to-br from-accent-green/20 to-primary-dark/10 rounded-lg mb-4"></div>
                <span className="text-sm text-accent-green font-medium">Insurance Tips</span>
                <h3 className="text-xl font-semibold text-primary-dark mt-2 mb-2 group-hover:text-accent-green transition-colors">
                  Understanding Group Health Insurance Benefits
                </h3>
                <p className="text-primary-dark/70 mb-4">
                  Learn how group health insurance can benefit your employees and your business...
                </p>
                <Link href="/blog" className="text-accent-green font-medium hover:underline inline-flex items-center space-x-2">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog" className="btn-secondary inline-flex items-center space-x-2">
              <span>View All Articles</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-green to-[#7FA03D] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Contact us today for a free consultation and personalized insurance quote
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-white text-accent-green px-8 py-3 rounded-lg font-medium hover:bg-background-light transition-all hover:scale-105">
                Get Free Quote
              </Link>
              <Link href="tel:+911234567890" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-accent-green transition-all">
                Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

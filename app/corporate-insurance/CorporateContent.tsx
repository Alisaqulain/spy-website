"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import {
  Users,
  Heart,
  Shield,
  Building,
  Ship,
  Wrench,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CorporateContent() {
  const services = [
    {
      icon: Users,
      title: "Employee Benefits",
      description: "Comprehensive employee benefits packages including health, life, and disability insurance to attract and retain top talent.",
      href: "#employee-benefits",
    },
    {
      icon: Heart,
      title: "Group Health Insurance",
      description: "Affordable group health insurance plans designed to keep your employees healthy while managing costs effectively.",
      href: "#group-health",
    },
    {
      icon: Shield,
      title: "Liability Insurance",
      description: "Protect your business from legal claims with comprehensive general liability, professional liability, and product liability coverage.",
      href: "#liability",
    },
    {
      icon: Building,
      title: "Property Insurance",
      description: "Safeguard your business assets including buildings, equipment, inventory, and machinery against fire, theft, and natural disasters.",
      href: "#property",
    },
    {
      icon: Ship,
      title: "Marine Insurance",
      description: "Complete marine insurance coverage for cargo, hull, and freight forwarding businesses with global reach.",
      href: "#marine",
    },
    {
      icon: Wrench,
      title: "Engineering Insurance",
      description: "Specialized engineering insurance for construction projects, machinery breakdown, and contractor's all risk coverage.",
      href: "#engineering",
    },
  ];

  const features = [
    "Customized insurance programs",
    "Risk assessment & advisory",
    "Competitive premium rates",
    "Fast claims processing",
    "24/7 support",
    "Dedicated account manager",
  ];

  return (
    <>
      <Hero
        title="Comprehensive Corporate Insurance Solutions"
        subtitle="Corporate Insurance"
        description="Protect your business with tailored insurance programs designed to manage risks and ensure continuity. Expert guidance for businesses of all sizes."
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Corporate Insurance Services
            </h2>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              Comprehensive coverage solutions for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* Detailed Sections */}
      <section id="employee-benefits" className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-accent-green" />
              </div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Employee Benefits
              </h2>
              <p className="text-lg text-primary-dark/70 mb-6">
                Attract and retain top talent with comprehensive employee benefits packages. 
                Our solutions include health insurance, life insurance, disability coverage, 
                and retirement plans tailored to your workforce.
              </p>
              <ul className="space-y-3 mb-6">
                {["Group Health Insurance", "Group Life Insurance", "Disability Insurance", "Retirement Plans", "Wellness Programs"].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-primary-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Get Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <FileText className="w-12 h-12 text-accent-green mb-4" />
              <h3 className="text-xl font-semibold text-primary-dark mb-4">
                Benefits Include
              </h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-primary-dark/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Group Health Section */}
      <section id="group-health" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-full h-96 bg-gradient-to-br from-accent-green/20 to-primary-dark/10 rounded-xl"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-accent-green" />
              </div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Group Health Insurance
              </h2>
              <p className="text-lg text-primary-dark/70 mb-6">
                Affordable and comprehensive group health insurance plans that protect your employees 
                and their families. We work with leading insurers to provide the best coverage at 
                competitive rates.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="card p-4">
                  <div className="text-2xl font-bold text-accent-green mb-1">5000+</div>
                  <div className="text-sm text-primary-dark/70">Employees Covered</div>
                </div>
                <div className="card p-4">
                  <div className="text-2xl font-bold text-accent-green mb-1">24/7</div>
                  <div className="text-sm text-primary-dark/70">Support Available</div>
                </div>
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-primary-dark/90 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Protect Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Get a customized corporate insurance quote tailored to your business needs
            </p>
            <Link href="/contact" className="bg-accent-green text-white px-8 py-3 rounded-lg font-medium hover:bg-[#7FA03D] transition-all hover:scale-105 inline-block">
              Request Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

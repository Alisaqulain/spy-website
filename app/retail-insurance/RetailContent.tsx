"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import {
  Heart,
  Car,
  Shield,
  Plane,
  Home,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function RetailContent() {
  const services = [
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive health insurance plans for individuals and families with cashless treatment at network hospitals.",
      href: "#health",
    },
    {
      icon: Car,
      title: "Motor Insurance",
      description: "Complete motor insurance coverage for cars, bikes, and commercial vehicles with quick claim settlement.",
      href: "#motor",
    },
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Secure your family's future with term life, whole life, and endowment plans from leading insurers.",
      href: "#life",
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      description: "Protect your trips with comprehensive travel insurance covering medical emergencies, trip cancellation, and baggage loss.",
      href: "#travel",
    },
    {
      icon: Home,
      title: "Home Insurance",
      description: "Safeguard your home and belongings against fire, theft, natural disasters, and other perils.",
      href: "#home",
    },
    {
      icon: AlertCircle,
      title: "Personal Accident",
      description: "Financial protection against accidental death, disability, and medical expenses due to accidents.",
      href: "#personal-accident",
    },
  ];

  return (
    <>
      <Hero
        title="Personalized Insurance Solutions for You and Your Family"
        subtitle="Retail Insurance"
        description="Find the right insurance coverage to protect what matters most. Expert guidance, competitive rates, and seamless service."
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
              Our Retail Insurance Services
            </h2>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              Comprehensive coverage solutions for individuals and families
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

      {/* Health Insurance Detail */}
      <section id="health" className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-accent-green" />
              </div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Health Insurance
              </h2>
              <p className="text-lg text-primary-dark/70 mb-6">
                Comprehensive health insurance plans that provide financial protection 
                against medical expenses. Choose from individual, family floater, or 
                senior citizen plans with cashless treatment facilities.
              </p>
              <ul className="space-y-3 mb-6">
                {["Cashless treatment at 5000+ hospitals", "Pre & post hospitalization coverage", "Day care procedures covered", "No claim bonus up to 50%", "Lifetime renewal"].map((item) => (
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
              <h3 className="text-xl font-semibold text-primary-dark mb-4">
                Coverage Options
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Individual Plan", coverage: "₹5L - ₹1Cr" },
                  { name: "Family Floater", coverage: "₹10L - ₹2Cr" },
                  { name: "Senior Citizen", coverage: "₹5L - ₹50L" },
                  { name: "Critical Illness", coverage: "₹10L - ₹50L" },
                ].map((plan) => (
                  <div key={plan.name} className="flex justify-between items-center p-4 bg-background-light rounded-lg">
                    <span className="font-medium text-primary-dark">{plan.name}</span>
                    <span className="text-accent-green font-semibold">{plan.coverage}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Motor Insurance Detail */}
      <section id="motor" className="section-padding bg-white">
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
                <Car className="w-8 h-8 text-accent-green" />
              </div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Motor Insurance
              </h2>
              <p className="text-lg text-primary-dark/70 mb-6">
                Comprehensive motor insurance coverage for your car, bike, or commercial vehicle. 
                Get third-party liability or comprehensive coverage with add-ons like zero depreciation, 
                engine protection, and roadside assistance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="card p-4 text-center">
                  <div className="text-2xl font-bold text-accent-green mb-1">24hrs</div>
                  <div className="text-sm text-primary-dark/70">Claim Settlement</div>
                </div>
                <div className="card p-4 text-center">
                  <div className="text-2xl font-bold text-accent-green mb-1">5000+</div>
                  <div className="text-sm text-primary-dark/70">Garage Network</div>
                </div>
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Get Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-green to-[#7FA03D] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing the Right Plan?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Our insurance experts are here to help you find the perfect coverage
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-white text-accent-green px-8 py-3 rounded-lg font-medium hover:bg-background-light transition-all hover:scale-105">
                Get Free Consultation
              </Link>
              <Link href="tel:+911234567890" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-accent-green transition-all">
                Call: +91 123 456 7890
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

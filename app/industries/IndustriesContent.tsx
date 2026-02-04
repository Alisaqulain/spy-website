"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import {
  Factory,
  Laptop,
  Truck,
  Heart,
  Building2,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "Comprehensive coverage for manufacturing facilities, machinery, inventory, and business interruption.",
    services: ["Property Insurance", "Machinery Breakdown", "Product Liability", "Business Interruption"],
  },
  {
    id: "it",
    name: "IT & Technology",
    icon: Laptop,
    description: "Specialized cyber insurance, professional liability, and technology errors & omissions coverage.",
    services: ["Cyber Insurance", "Professional Liability", "Errors & Omissions", "Data Breach Coverage"],
  },
  {
    id: "logistics",
    name: "Logistics & Transportation",
    icon: Truck,
    description: "Complete coverage for logistics companies, freight forwarders, and transportation businesses.",
    services: ["Cargo Insurance", "Fleet Insurance", "Marine Insurance", "General Liability"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    description: "Medical malpractice, professional liability, and specialized coverage for healthcare facilities.",
    services: ["Malpractice Insurance", "Professional Liability", "Property Insurance", "Cyber Insurance"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building2,
    description: "Property insurance, builder's risk, and professional liability for real estate developers.",
    services: ["Property Insurance", "Builder's Risk", "Professional Liability", "General Liability"],
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    description: "Comprehensive coverage for retail stores, warehouses, and e-commerce businesses.",
    services: ["Property Insurance", "Inventory Coverage", "Cyber Insurance", "General Liability"],
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Specialized insurance solutions for schools, colleges, and educational institutions.",
    services: ["Property Insurance", "Student Accident", "Professional Liability", "General Liability"],
  },
  {
    id: "finance",
    name: "Finance & Banking",
    icon: Briefcase,
    description: "Professional liability, cyber insurance, and specialized coverage for financial institutions.",
    services: ["Professional Liability", "Cyber Insurance", "Fidelity Insurance", "Directors & Officers"],
  },
];

export default function IndustriesContent() {
  return (
    <>
      <Hero
        title="Specialized Insurance Solutions Across Industries"
        subtitle="Industries We Serve"
        description="Tailored insurance programs designed for the unique risks and challenges of your industry"
      />

      {/* Industries Grid */}
      <section className="section-padding bg-white">
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
              Expert insurance solutions tailored to your industry's specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="card group cursor-pointer h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-accent-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-green transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-primary-dark/70 mb-4 flex-grow">
                    {industry.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {industry.services.slice(0, 2).map((service) => (
                      <div key={service} className="text-sm text-primary-dark/60">
                        • {service}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/contact?industry=${industry.id}`}
                    className="inline-flex items-center space-x-2 text-accent-green font-medium hover:space-x-3 transition-all group-hover:underline"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Industry-Specific Expertise
              </h2>
              <p className="text-lg text-primary-dark/70 mb-6">
                Each industry faces unique risks and challenges. Our team of experienced 
                insurance professionals understands these nuances and designs customized 
                insurance programs that address your specific needs.
              </p>
              <p className="text-lg text-primary-dark/70 mb-8">
                We work closely with businesses across diverse sectors to provide 
                comprehensive risk management solutions, competitive premiums, and 
                exceptional claims support.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Consult Our Experts</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "50+", label: "Industries Served" },
                { value: "5000+", label: "Business Clients" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="text-3xl font-bold text-accent-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-dark/70">{stat.label}</div>
                </motion.div>
              ))}
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
              Don't See Your Industry Listed?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              We provide insurance solutions for businesses across all sectors. 
              Contact us to discuss your specific requirements.
            </p>
            <Link href="/contact" className="bg-accent-green text-white px-8 py-3 rounded-lg font-medium hover:bg-[#7FA03D] transition-all hover:scale-105 inline-block">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

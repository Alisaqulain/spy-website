"use client";

import Hero from "@/components/Hero";
import { Shield, Target, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with the highest ethical standards and transparency.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering exceptional service and innovative solutions.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your success is our priority. We build long-term partnerships.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Deep industry knowledge and continuous learning drive our solutions.",
  },
];

const milestones = [
  { year: "2009", title: "Company Founded", description: "Started as a small insurance brokerage firm" },
  { year: "2012", title: "1000 Clients", description: "Reached milestone of 1000 satisfied clients" },
  { year: "2015", title: "National Expansion", description: "Expanded operations across India" },
  { year: "2018", title: "5000+ Clients", description: "Served over 5000 businesses and individuals" },
  { year: "2024", title: "Digital Transformation", description: "Launched digital platform for seamless service" },
];

export default function AboutContent() {
  return (
    <>
      <Hero
        title="Your Trusted Partner in Insurance Solutions"
        subtitle="About SPY Insurance"
        description="15+ years of excellence in providing comprehensive insurance solutions to businesses and individuals across India"
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Our Story
              </h2>
              <p className="text-lg text-primary-dark/70 mb-4">
                SPY Insurance Brokers Pvt. Ltd. was founded in 2009 with a vision to make 
                insurance accessible, understandable, and affordable for everyone. What started 
                as a small brokerage firm has grown into one of India's trusted insurance partners.
              </p>
              <p className="text-lg text-primary-dark/70 mb-4">
                Over the years, we've built strong relationships with leading insurance companies 
                and developed expertise across diverse industries. Our team of certified professionals 
                works tirelessly to provide personalized solutions that protect what matters most.
              </p>
              <p className="text-lg text-primary-dark/70">
                Today, we serve over 5000 clients across India, from small businesses to large 
                corporations, helping them navigate the complex world of insurance with confidence 
                and ease.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "5000+", label: "Happy Clients" },
                  { value: "50+", label: "Insurance Partners" },
                  { value: "100+", label: "Team Members" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-accent-green mb-2">
                      {stat.value}
                    </div>
                    <div className="text-primary-dark/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="w-16 h-16 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-primary-dark/70">
                To provide comprehensive, affordable, and accessible insurance solutions that 
                protect our clients' assets, health, and future. We strive to simplify insurance 
                and empower individuals and businesses to make informed decisions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8"
            >
              <div className="w-16 h-16 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-primary-dark/70">
                To become India's most trusted and innovative insurance broker, recognized for 
                excellence in service, integrity in business, and commitment to client success. 
                We envision a future where everyone has access to quality insurance protection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
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
                    {value.title}
                  </h3>
                  <p className="text-primary-dark/70">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-green/30"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:text-right"}`}>
                    <div className="card">
                      <div className="text-accent-green font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-dark mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-primary-dark/70">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-green rounded-full border-4 border-white"></div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "CEO & Founder", bio: "20+ years in insurance industry" },
              { name: "Priya Sharma", role: "Director - Corporate", bio: "Expert in corporate risk management" },
              { name: "Amit Patel", role: "Director - Retail", bio: "Specialized in retail insurance solutions" },
            ].map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-accent-green/20 to-primary-dark/10 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-primary-dark mb-1">
                  {leader.name}
                </h3>
                <p className="text-accent-green font-medium mb-2">{leader.role}</p>
                <p className="text-primary-dark/70 text-sm">{leader.bio}</p>
              </motion.div>
            ))}
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
              Join Our Growing Family
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Experience the difference of working with a trusted insurance partner
            </p>
            <Link href="/contact" className="bg-white text-accent-green px-8 py-3 rounded-lg font-medium hover:bg-background-light transition-all hover:scale-105 inline-block">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

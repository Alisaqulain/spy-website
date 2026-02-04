"use client";

import Hero from "@/components/Hero";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Insurance Advisor",
    department: "Sales",
    location: "New Delhi",
    type: "Full-time",
    experience: "3-5 years",
    description: "We are looking for an experienced insurance advisor to join our corporate sales team.",
  },
  {
    id: 2,
    title: "Claims Executive",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    experience: "2-4 years",
    description: "Handle claims processing and client support for our retail insurance division.",
  },
  {
    id: 3,
    title: "Business Development Manager",
    department: "Business Development",
    location: "Bangalore",
    type: "Full-time",
    experience: "5-7 years",
    description: "Drive business growth by building relationships with corporate clients.",
  },
  {
    id: 4,
    title: "Customer Support Executive",
    department: "Support",
    location: "Hyderabad",
    type: "Full-time",
    experience: "1-2 years",
    description: "Provide excellent customer service and support to our insurance clients.",
  },
];

const cultureBenefits = [
  "Competitive salary and performance bonuses",
  "Health insurance and wellness programs",
  "Professional development opportunities",
  "Flexible work arrangements",
  "Collaborative and inclusive work environment",
  "Career growth and advancement paths",
];

export default function CareersContent() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: "",
    coverLetter: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Application submitted successfully! We'll contact you soon.");
  };

  return (
    <>
      <Hero
        title="Build Your Career with SPY Insurance"
        subtitle="Careers"
        description="Join a team of passionate professionals dedicated to protecting what matters most"
      />

      {/* Company Culture */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Why Work With Us
              </h2>
              <p className="text-lg text-primary-dark/70 mb-6">
                At SPY Insurance, we believe in fostering a culture of growth, innovation, 
                and collaboration. We invest in our people and provide opportunities for 
                professional development and career advancement.
              </p>
              <p className="text-lg text-primary-dark/70 mb-8">
                Join us and be part of a team that's making a difference in the insurance 
                industry, helping businesses and individuals protect their future.
              </p>
              <div className="space-y-3">
                {cultureBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-primary-dark">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                Our Values
              </h3>
              <div className="space-y-4">
                {[
                  "Integrity in everything we do",
                  "Excellence in service delivery",
                  "Innovation and continuous learning",
                  "Respect and collaboration",
                  "Client-first approach",
                ].map((value) => (
                  <div key={value} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-green rounded-full mt-2"></div>
                    <span className="text-primary-dark">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              Explore opportunities to join our team
            </p>
          </motion.div>

          <div className="space-y-4 mb-12">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card cursor-pointer hover:shadow-xl transition-all"
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Briefcase className="w-5 h-5 text-accent-green" />
                      <h3 className="text-xl font-semibold text-primary-dark">
                        {job.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-primary-dark/70 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <span>Experience: {job.experience}</span>
                      <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-primary-dark/70">{job.description}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJob(selectedJob === job.id ? null : job.id);
                    }}
                    className="mt-4 md:mt-0 btn-primary"
                  >
                    {selectedJob === job.id ? "Hide Details" : "Apply Now"}
                  </button>
                </div>
                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <h4 className="font-semibold text-primary-dark mb-3">
                      Job Requirements:
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {[
                        "Relevant experience in insurance or related field",
                        "Strong communication and interpersonal skills",
                        "Ability to work in a fast-paced environment",
                        "Customer-focused approach",
                      ].map((req) => (
                        <li key={req} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent-green mt-1 flex-shrink-0" />
                          <span className="text-primary-dark/70">{req}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        setFormData({ ...formData, position: job.title });
                        document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <span>Apply for this Position</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Apply Now
              </h2>
              <p className="text-lg text-primary-dark/70">
                Fill out the form below and we'll get back to you soon
              </p>
            </div>

            <form onSubmit={handleSubmit} className="card space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary-dark font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-primary-dark font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary-dark font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-primary-dark font-medium mb-2">
                    Position Applied For *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-primary-dark font-medium mb-2">
                  Years of Experience *
                </label>
                <input
                  type="text"
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-primary-dark font-medium mb-2">
                  Resume/CV (PDF) *
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  required
                  onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0]?.name || "" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-primary-dark font-medium mb-2">
                  Cover Letter
                </label>
                <textarea
                  rows={5}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

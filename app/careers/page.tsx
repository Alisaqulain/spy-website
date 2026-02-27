"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, Briefcase, ArrowRight, Upload } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const benefits = [
  "Competitive compensation and performance-linked incentives",
  "Group health and life insurance",
  "Learning and development programmes",
  "Inclusive and collaborative culture",
  "Growth opportunities across corporate, retail, and industry practices",
];

const positions = [
  { title: "Senior Risk Advisor", location: "Mumbai", dept: "Corporate" },
  { title: "Retail Insurance Advisor", location: "Delhi NCR", dept: "Retail" },
  { title: "Claims Executive", location: "Bangalore", dept: "Operations" },
  { title: "Industry Specialist – Power", location: "Hyderabad", dept: "Industry" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resume: FileList | null;
};

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Career application:", data);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join Our Team"
        description="Build your career with a leading insurance broker. We look for talent that shares our commitment to client service, integrity, and excellence."
        primaryCTA={{ text: "View Open Positions", href: "#positions" }}
        breadcrumb={[{ label: "Careers", href: "/careers" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Company Culture" subtitle="We believe in teamwork, continuous learning, and putting clients first." />
          <p className="max-w-3xl mx-auto text-center text-primary-navy/80 mb-12">
            Our culture is built on professionalism, transparency, and respect. We invest in our people through training, clear career paths, and a supportive work environment. Whether you're in corporate broking, retail, claims, or industry practice—you'll have the opportunity to grow and make an impact.
          </p>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeading title="Benefits" subtitle="What we offer to our team members." />
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-soft">
                <CheckCircle className="w-6 h-6 text-accent-gold shrink-0" />
                <span className="text-primary-navy/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="positions" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Open Positions" subtitle="Current openings across our offices." />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {positions.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-primary-navy">{p.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-primary-navy/70">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {p.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {p.dept}
                    </span>
                  </div>
                </div>
                <Link href="#apply" className="btn-primary text-sm py-2 inline-flex items-center gap-2 self-start md:self-center">
                  Apply
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="apply" className="section-padding bg-background-light">
        <div className="container-custom max-w-2xl">
          <SectionHeading title="Application Form" subtitle="Submit your details and resume. We'll get back to you." />
          {submitted ? (
            <div className="card text-center">
              <CheckCircle className="w-16 h-16 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-navy mb-2">Thank You</h3>
              <p className="text-primary-navy/80">We have received your application and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="card space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary-navy mb-2">Full Name *</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-2xl border border-primary-navy/20 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-navy mb-2">Email *</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-3 rounded-2xl border border-primary-navy/20 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-navy mb-2">Phone</label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-2xl border border-primary-navy/20 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-navy mb-2">Position of Interest *</label>
                <select
                  {...register("position", { required: "Please select a position" })}
                  className="w-full px-4 py-3 rounded-2xl border border-primary-navy/20 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                >
                  <option value="">Select</option>
                  {positions.map((p) => (
                    <option key={p.title} value={p.title}>{p.title} – {p.location}</option>
                  ))}
                </select>
                {errors.position && <p className="text-red-600 text-sm mt-1">{errors.position.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-navy mb-2">Resume (PDF) *</label>
                <input
                  type="file"
                  accept=".pdf"
                  {...register("resume", { validate: (v) => (v && v.length > 0) || "Please upload your resume (PDF)" })}
                  className="w-full px-4 py-3 rounded-2xl border border-primary-navy/20 focus:ring-2 focus:ring-accent-gold outline-none flex items-center gap-2"
                />
                {errors.resume && <p className="text-red-600 text-sm mt-1">{errors.resume.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-navy mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-primary-navy/20 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                  placeholder="Brief note about your experience and interest"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Upload className="w-5 h-5" />
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

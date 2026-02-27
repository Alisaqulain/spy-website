"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { CONTACT } from "@/lib/site-config";
import Link from "next/link";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form:", data);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have a question or need a quote? Our team is ready to help with corporate, retail, or industry insurance solutions."
        breadcrumb={[{ label: "Contact", href: "/contact" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-primary-navy">Phone</p>
                      <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-primary-navy/80 hover:text-accent-gold">
                        {CONTACT.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-primary-navy">Email</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-primary-navy/80 hover:text-accent-gold">
                        {CONTACT.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-primary-navy">Address</p>
                      <p className="text-primary-navy/80">{CONTACT.address}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary-navy mb-6">Send a Message</h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card text-center py-12"
                >
                  <Send className="w-16 h-16 text-accent-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-navy mb-2">Message Sent</h3>
                  <p className="text-primary-navy/80">Thank you for reaching out. We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="card space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-navy mb-2">Name *</label>
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
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
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
                      <label className="block text-sm font-medium text-primary-navy mb-2">Subject *</label>
                      <select
                        {...register("subject", { required: "Please select a subject" })}
                        className="w-full px-4 py-3 rounded-2xl border border-primary-navy/20 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                      >
                        <option value="">Select</option>
                        <option value="corporate">Corporate Insurance</option>
                        <option value="retail">Retail Insurance</option>
                        <option value="industry">Industry Solutions</option>
                        <option value="claims">Claims Support</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-navy mb-2">Message *</label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-2xl border border-primary-navy/20 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none"
                      placeholder="How can we help?"
                    />
                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary w-full md:w-auto flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-primary-navy mb-6">Find Us</h2>
          <div className="w-full h-80 bg-primary-navy/10 rounded-2xl flex items-center justify-center text-primary-navy/50">
            Map placeholder – integrate Google Maps or your preferred map provider here.
          </div>
        </div>
      </section>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-40 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-card hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  );
}

"use client";

import Hero from "@/components/Hero";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 123 456 7890",
    link: "tel:+911234567890",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@spyinsurance.com",
    link: "mailto:info@spyinsurance.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "123 Business District, New Delhi - 110001, India",
    link: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM",
    link: "#",
  },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    insuranceType: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        insuranceType: "",
      });
    }, 3000);
  };

  return (
    <>
      <Hero
        title="Get in Touch with Our Insurance Experts"
        subtitle="Contact Us"
        description="Have questions? Need a quote? We're here to help. Contact us today for free consultation."
      />

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-dark mb-6">
                  Get in Touch
                </h2>
                <p className="text-primary-dark/70 mb-8">
                  We're here to help you find the right insurance solution. 
                  Reach out to us through any of these channels.
                </p>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary-dark mb-1">
                            {info.title}
                          </h3>
                          {info.link !== "#" ? (
                            <a
                              href={info.link}
                              className="text-primary-dark/70 hover:text-accent-green transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-primary-dark/70">{info.content}</p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-accent-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">
                      Thank You!
                    </h3>
                    <p className="text-primary-dark/70 mb-6">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-primary-dark mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            Insurance Type
                          </label>
                          <select
                            value={formData.insuranceType}
                            onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                          >
                            <option value="">Select Insurance Type</option>
                            <option value="corporate">Corporate Insurance</option>
                            <option value="retail">Retail Insurance</option>
                            <option value="health">Health Insurance</option>
                            <option value="motor">Motor Insurance</option>
                            <option value="life">Life Insurance</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-primary-dark font-medium mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-primary-dark font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          rows={6}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full md:w-auto inline-flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-primary-dark/70">
              We're located in the heart of New Delhi's business district
            </p>
          </motion.div>
          <div className="card p-0 overflow-hidden">
            <div className="w-full h-96 bg-gradient-to-br from-accent-green/20 to-primary-dark/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent-green mx-auto mb-4" />
                <p className="text-primary-dark font-medium">
                  Google Maps Integration
                </p>
                <p className="text-primary-dark/70 text-sm mt-2">
                  123 Business District, New Delhi - 110001, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-primary-dark/90 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Call us now for instant support and free consultation
            </p>
            <a
              href="tel:+911234567890"
              className="bg-accent-green text-white px-8 py-3 rounded-lg font-medium hover:bg-[#7FA03D] transition-all hover:scale-105 inline-block"
            >
              Call: +91 123 456 7890
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

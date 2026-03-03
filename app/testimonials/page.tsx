"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, Instagram, Play } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSlider from "@/components/TestimonialSlider";
import { testimonials as defaultTestimonials } from "@/lib/testimonials-data";
import type { Testimonial } from "@/lib/testimonials-data";
import { SOCIAL } from "@/lib/site-config";

/** Featured video entries for the video section (YouTube embed or Instagram link) */
const featuredVideos = [
  {
    id: "1",
    title: "Client success story",
    type: "youtube" as const,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    description: "Hear from our clients about their experience with SPRY.",
  },
  {
    id: "2",
    title: "Why choose SPRY",
    type: "youtube" as const,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    description: "Quick overview of our approach to risk and insurance.",
  },
  {
    id: "3",
    title: "More on Instagram",
    type: "instagram" as const,
    url: SOCIAL.instagram,
    description: "Reels, tips and client stories on our Instagram.",
  },
];

const defaultVideoSection = { videoSectionTitle: "Video Testimonials", videoSectionSubtitle: "Watch client stories and insights. More videos on our Instagram." };

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [videoSection, setVideoSection] = useState(defaultVideoSection);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.ok ? r.json() : [])
      .then((data) => Array.isArray(data) && data.length > 0 && setTestimonials(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch("/api/sections/testimonials-page")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => data && setVideoSection({ videoSectionTitle: data.videoSectionTitle ?? defaultVideoSection.videoSectionTitle, videoSectionSubtitle: data.videoSectionSubtitle ?? defaultVideoSection.videoSectionSubtitle }))
      .catch(() => {});
  }, []);

  const textTestimonials = testimonials.filter((t) => !t.videoUrl);
  const videoTestimonials = testimonials.filter((t) => t.videoUrl);

  return (
    <>
      <PageHero
        title="What Our Clients Say"
        subtitle="Testimonials"
        description="Trusted by businesses and individuals across India. Hear from those who have partnered with us for risk management and insurance solutions."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Testimonials", href: "/testimonials" }]}
      />

      {/* Featured slider */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeading
            title="Featured Stories"
            subtitle="A selection of client experiences. Browse all testimonials below or watch more on our Instagram."
          />
          <div className="max-w-4xl mx-auto mt-8">
            <TestimonialSlider compact testimonialsList={testimonials} />
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title={videoSection.videoSectionTitle}
            subtitle={videoSection.videoSectionSubtitle}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden bg-background-light border border-primary-navy/5 shadow-soft hover:shadow-card-hover transition-shadow"
              >
                {t.videoUrl && (t.videoUrl.startsWith("/uploads/") ? (
                  <div className="aspect-video bg-primary-navy/10 relative">
                    <video src={t.videoUrl} controls className="absolute inset-0 w-full h-full object-cover" title={t.videoTitle || t.name} />
                  </div>
                ) : (t.videoUrl.includes("youtube.com") || t.videoUrl.includes("youtu.be")) ? (
                  <div className="aspect-video bg-primary-navy/10 relative">
                    <iframe
                      src={
                        t.videoUrl.includes("/embed/")
                          ? t.videoUrl
                          : t.videoUrl.includes("youtu.be/")
                            ? `https://www.youtube.com/embed/${t.videoUrl.split("youtu.be/")[1]?.split("?")[0] || ""}`
                            : `https://www.youtube.com/embed/${t.videoUrl.split("v=")[1]?.split("&")[0] || ""}`
                      }
                      title={t.videoTitle || t.name}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <a
                    href={t.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-video bg-primary-navy flex items-center justify-center group"
                  >
                    <div className="text-center text-white">
                      <div className="w-16 h-16 rounded-full bg-accent-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-accent-gold" />
                      </div>
                      <span className="font-semibold">Watch video</span>
                    </div>
                  </a>
                ))}
                <div className="p-5">
                  <h3 className="font-bold text-primary-navy mb-1">{t.videoTitle || t.name}</h3>
                  <p className="text-sm text-primary-navy/70">{t.role}, {t.company}</p>
                </div>
              </motion.div>
            ))}
            {featuredVideos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden bg-background-light border border-primary-navy/5 shadow-soft hover:shadow-card-hover transition-shadow"
              >
                {video.type === "youtube" ? (
                  <div className="aspect-video bg-primary-navy/10 relative">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-video bg-primary-navy flex items-center justify-center group"
                  >
                    <div className="text-center text-white">
                      <div className="w-16 h-16 rounded-full bg-accent-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <Instagram className="w-8 h-8 text-accent-gold" />
                      </div>
                      <span className="font-semibold">Watch on Instagram</span>
                    </div>
                  </a>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-primary-navy mb-1">{video.title}</h3>
                  <p className="text-sm text-primary-navy/70">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-2xl bg-accent-gold text-primary-navy px-6 py-3 font-semibold shadow-lg shadow-accent-gold/25 hover:bg-amber-500 transition-colors"
            >
              <Play className="w-5 h-5" />
              View all reels on Instagram
            </motion.a>
          </div>
        </div>
      </section>

      {/* All testimonials grid */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-8 text-center">
            All Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {textTestimonials.map((t, i) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl bg-background-light border border-primary-navy/5 p-6 md:p-8 shadow-soft hover:shadow-card-hover transition-shadow h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-gold/15 flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-accent-gold" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <blockquote className="text-primary-navy/90 mb-6 flex-1 leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-primary-navy">{t.name}</p>
                  <p className="text-primary-navy/70 text-sm">{t.role}, {t.company}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Reels CTA */}
      <section className="section-padding bg-primary-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent-gold/20 flex items-center justify-center mx-auto mb-6">
              <Instagram className="w-8 h-8 text-accent-gold" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Watch More on Instagram</h2>
            <p className="text-white/85 mb-6">
              Follow us for reels, tips, and client stories. Stay connected with SPRY.
            </p>
            <motion.a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-2xl bg-accent-gold text-primary-navy px-6 py-3 font-semibold shadow-lg shadow-accent-gold/25 hover:bg-amber-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              View Reels on Instagram
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

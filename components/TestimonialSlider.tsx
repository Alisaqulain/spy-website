"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials as defaultTestimonials } from "@/lib/testimonials-data";
import type { Testimonial } from "@/lib/testimonials-data";

interface TestimonialSliderProps {
  /** When true, hide the section label and heading (e.g. on the testimonials page). */
  compact?: boolean;
  /** Optional list (e.g. from API); falls back to default static list. */
  testimonialsList?: Testimonial[];
}

export default function TestimonialSlider({ compact = false, testimonialsList }: TestimonialSliderProps) {
  const testimonials = testimonialsList && testimonialsList.length > 0 ? testimonialsList : defaultTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const t = testimonials[currentIndex];

  return (
    <section className={compact ? "py-0" : "section-padding bg-white"}>
      <div className={compact ? "" : "container-custom"}>
        {!compact && (
          <>
            <span className="block text-center text-accent-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Testimonials
            </span>
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Trusted by businesses and individuals across India. Here’s what they have to say about working with us."
            />
          </>
        )}
        <div className={`relative max-w-4xl mx-auto px-4 md:px-12 ${compact ? "" : "mt-8"}`}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl bg-background-light border border-primary-navy/5 p-8 md:p-10 text-center shadow-soft"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-gold/15 flex items-center justify-center mx-auto mb-6">
                <Quote className="w-7 h-7 text-accent-gold" />
              </div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-primary-navy/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                &ldquo;{t.content}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-primary-navy">{t.name}</p>
                <p className="text-primary-navy/70 text-sm mt-1">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-primary-navy/10 shadow-card flex items-center justify-center hover:border-accent-gold hover:text-accent-gold transition-colors touch-manipulation"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-primary-navy/10 shadow-card flex items-center justify-center hover:border-accent-gold hover:text-accent-gold transition-colors touch-manipulation"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentIndex ? "bg-accent-gold w-8" : "bg-primary-navy/20 w-2 hover:bg-primary-navy/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

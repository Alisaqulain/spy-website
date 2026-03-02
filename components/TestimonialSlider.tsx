"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO",
    company: "TechCorp Industries",
    content: "SPRY has been our trusted partner for over five years. Their expertise in corporate insurance has helped us manage risks effectively and save significantly on premiums. Highly professional team.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "HR Director",
    company: "Global Services Ltd",
    content: "The employee benefits programme designed by SPRY has been exceptional. Our employees are happy, and the claims process is seamless. We recommend them to every business we know.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    company: "Patel Enterprises",
    content: "As a small business owner, finding the right insurance was overwhelming. SPRY made it simple and affordable. Their team is professional, responsive, and always available when we need them.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Finance Manager",
    company: "Manufacturing Co.",
    content: "Their risk assessment and advisory services are top-notch. We have avoided potential losses thanks to their proactive approach. SPRY truly understands our business and industry needs.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "COO",
    company: "Infrastructure Solutions",
    content: "From placement to claims, SPRY delivers end-to-end. Their lenders insurance advisory helped us meet our financiers' requirements smoothly. A reliable partner for any corporate.",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <span className="block text-center text-accent-gold font-semibold text-sm uppercase tracking-wider mb-2">
          Testimonials
        </span>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by businesses and individuals across India. Here’s what they have to say about working with us."
        />

        <div className="relative max-w-4xl mx-auto px-4 md:px-12">
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

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
    content: "SPY Insurance has been our trusted partner for over 5 years. Their expertise in corporate insurance solutions has helped us manage risks effectively and save significantly on premiums.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "HR Director",
    company: "Global Services Ltd",
    content: "The employee benefits program designed by SPY Insurance has been exceptional. Our employees are happy, and the claims process is seamless. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    company: "Patel Enterprises",
    content: "As a small business owner, finding the right insurance was overwhelming. SPY Insurance made it simple and affordable. Their team is professional and always available.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Finance Manager",
    company: "Manufacturing Co.",
    content: "Their risk assessment and advisory services are top-notch. We've avoided potential losses thanks to their proactive approach. SPY Insurance truly understands our business needs.",
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
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
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

  return (
    <section className="section-padding bg-background-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
            Trusted by businesses and individuals across India
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="card text-center"
            >
              <Quote className="w-12 h-12 text-accent-green mx-auto mb-6" />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-primary-dark/80 mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <p className="font-semibold text-primary-dark">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-primary-dark/70">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent-green hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent-green hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent-green w-8"
                    : "bg-primary-dark/30"
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

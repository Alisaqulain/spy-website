"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type Slide = {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  image: string;
  imagePosition?: string;
};

const slides: Slide[] = [
  {
    title: "Expert Risk Management for Your Business",
    subtitle: "Corporate & Retail Solutions",
    description: "We help organisations and individuals manage insurable risks with tailored insurance programmes, independent advisory, and end-to-end support.",
    primaryCTA: { text: "Explore Corporate", href: "/corporate" },
    secondaryCTA: { text: "Explore Retail", href: "/retail" },
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85",
    imagePosition: "center center",
  },
  {
    title: "Get the Right Guidance. Manage Your Risks.",
    subtitle: "Trusted Insurance Brokers",
    description: "Making insurance decisions easier and more informed. Specialised solutions at optimised costs across verticals and industries.",
    primaryCTA: { text: "About Us", href: "/about" },
    secondaryCTA: { text: "Our Services", href: "#risk-management" },
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=85",
    imagePosition: "center center",
  },
  {
    title: "Risk Management Solutions That Work",
    subtitle: "Independent Advisory",
    description: "Through independent risk assessment and advisory backed by knowledge and experience, we help you eliminate uncertainties and manage insurable risks.",
    primaryCTA: { text: "Explore Solutions", href: "/corporate" },
    secondaryCTA: { text: "Contact Us", href: "/contact" },
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=85",
    imagePosition: "center center",
  },
  {
    title: "Your Peace of Mind, Our Expertise",
    subtitle: "Leading Insurance Brokers",
    description: "Transform uncertainties into opportunities with carefully selected coverage. Expert assistance anytime, anywhere.",
    primaryCTA: { text: "Get a Quote", href: "/contact" },
    secondaryCTA: { text: "Case Studies", href: "/case-studies" },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=85",
    imagePosition: "center 30%",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 overflow-hidden -mt-20 md:-mt-24">
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* Background image – more visible, lighter overlay so art shows through */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover animate-hero-zoom"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: slide.imagePosition ?? "center center",
                }}
              />
              {/* Lighter gradient: strong on right (for text), softer on left so background art shows */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(105deg, rgba(11,31,58,0.45) 0%, rgba(11,31,58,0.75) 45%, rgba(11,31,58,0.92) 100%)",
                }}
              />
              {/* Very subtle pattern for depth */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "36px 36px",
                }}
              />
            </div>
            <div className="relative z-10 container-custom h-full flex items-center px-4 md:px-8 pt-24 pb-32">
              <div className="max-w-xl w-full text-left ml-0 lg:ml-auto lg:pl-8">
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-accent-gold font-bold text-xs uppercase tracking-[0.2em] mb-4"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg md:text-xl text-white/95 max-w-xl mb-8 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)]"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={slide.primaryCTA.href}
                      className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2 shadow-lg shadow-accent-gold/30"
                    >
                      {slide.primaryCTA.text}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={slide.secondaryCTA.href}
                      className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary-navy inline-flex items-center gap-2"
                    >
                      {slide.secondaryCTA.text}
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent-gold rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

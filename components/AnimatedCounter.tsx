"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setDisplay(end);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {prefix}
      <span>{display}</span>
      {suffix}
    </motion.span>
  );
}

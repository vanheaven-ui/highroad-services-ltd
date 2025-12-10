"use client";

import { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react"; 

const StylisticLogo = (): JSX.Element => (
  <div className="inline-flex flex-col items-start leading-none mb-6">
    <span className="text-3xl md:text-4xl font-heading font-black text-accent-gold">
      HighRoad
    </span>
    <span
      className="text-sm font-subheading font-semibold uppercase tracking-widest ml-1"
      style={{
        marginTop: "-4px",
        verticalAlign: "sub",
        fontSize: "0.75em",
        color: "white",
      }}
    >
      Services Ltd
    </span>
  </div>
);

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const svgVariants: Variants = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

// New Variant for the Scroll Indicator animation
const scrollIndicatorVariants: Variants = {
  initial: { opacity: 0, y: -5 },
  animate: {
    opacity: 1,
    y: [0, 10, 0], // Subtle bounce effect
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero(): JSX.Element {
  return (
    <section className="bg-primary text-white relative overflow-hidden py-24 md:py-32">
      {/* Background SVG */}
      <motion.div
        className="absolute inset-0 z-0 opacity-100"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M 0 0 L 1440 0 L 1440 500 C 1200 650, 700 800, 0 700 Z"
            fill="currentColor"
            className="text-accent-gold/5"
          />
          <circle
            cx="1000"
            cy="150"
            r="80"
            fill="currentColor"
            className="text-white/5"
          />
          <circle
            cx="400"
            cy="650"
            r="120"
            fill="currentColor"
            className="text-white/3"
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-4xl mx-auto px-6 relative z-10 text-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={fadeUpVariants}>
          <StylisticLogo />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-sm uppercase tracking-widest text-accent-gold mb-6 font-subheading font-semibold"
          variants={fadeUpVariants}
        >
          Research, Consultancy & Training
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight tracking-tight mb-6"
          variants={fadeUpVariants}
        >
          Analysis That Drives Action
        </motion.h1>

        {/* Description – Cleaned and humanized */}
        <motion.p
          className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto font-body leading-relaxed"
          variants={fadeUpVariants}
        >
          Offering comprehensive research, strategic consultancy, and training
          programs, including flexible e-learning modules, to help organizations
          make informed decisions and achieve sustainable results.
        </motion.p>

        {/* ❌ REMOVED CTAs to improve flow:
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeUpVariants}
        >
          ... [Removed Link Components] ...
        </motion.div>
        */}

        {/* Subtle Trust Signal */}
        <motion.p
          className="mt-12 text-sm opacity-75 font-body italic pt-6 border-t border-white/10 max-w-md mx-auto"
          variants={fadeUpVariants}
        >
          Serving clients across sectors and regions.
        </motion.p>

        {/* SCROLL INDICATOR - New addition */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pt-16 cursor-pointer hidden md:block"
          variants={scrollIndicatorVariants}
          initial="initial"
          animate="animate"
          aria-label="Scroll down to next section"
        >
          <ChevronDown className="w-8 h-8 text-accent-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

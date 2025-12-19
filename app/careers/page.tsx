"use client";

import { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { GraduationCap, ChevronDown } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                               Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const scrollIndicatorVariants: Variants = {
  initial: { opacity: 0, y: -4 },
  animate: {
    opacity: 1,
    y: [0, 10, 0],
    transition: {
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                   Hero                                     */
/* -------------------------------------------------------------------------- */

export default function HighRoadAcademyHero(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-primary text-white py-24 md:py-32">
      {/* Abstract Background */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 0 L 1440 0 L 1440 520 C 1150 680, 720 820, 0 720 Z"
            fill="currentColor"
            className="text-accent-gold/5"
          />
          <circle
            cx="1080"
            cy="160"
            r="90"
            fill="currentColor"
            className="text-white/6"
          />
          <circle
            cx="360"
            cy="660"
            r="130"
            fill="currentColor"
            className="text-white/4"
          />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUpVariants}
          className="inline-flex items-center gap-3 mb-8"
        >
          <GraduationCap className="w-7 h-7 text-accent-gold" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
            HighRoad Academy
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-6"
        >
          Advanced Training in
          <br />
          Policy & Economic Analysis
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
        >
          HighRoad Academy delivers specialised, practice-oriented training in
          impact evaluation and advanced economic modelling to strengthen
          evidence-based policymaking and development practice across Africa.
        </motion.p>

        {/* Subtle trust signal */}
        <motion.p
          variants={fadeUpVariants}
          className="mt-12 pt-6 text-sm opacity-75 italic border-t border-white/10 max-w-md mx-auto"
        >
          Designed for policymakers, analysts, researchers, and development
          practitioners.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2"
          variants={scrollIndicatorVariants}
          initial="initial"
          animate="animate"
          aria-label="Scroll to explore programmes"
        >
          <ChevronDown className="w-8 h-8 text-accent-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { Briefcase, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";

/* -------------------------------------------------------------------------- */
/*                               Motion Variants                              */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.6, 0.8, 0.6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
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
/*                             Careers Page Component                         */
/* -------------------------------------------------------------------------- */

export default function CareersPage(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-primary text-white py-24 md:py-32">
      {/* Abstract Background - Unique geometric wave + floating orbs */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Soft wave layer */}
          <path
            d="M0 300 Q 360 100, 720 200 T 1440 150 L 1440 900 L 0 900 Z"
            fill="currentColor"
            className="text-accent-gold/8"
          />

          {/* Floating accent orbs with subtle pulse */}
          <motion.circle
            cx="200"
            cy="180"
            r="80"
            fill="currentColor"
            className="text-accent-gold/10"
            variants={pulseVariants}
            animate="animate"
          />
          <motion.circle
            cx="1100"
            cy="600"
            r="120"
            fill="currentColor"
            className="text-white/8"
            variants={pulseVariants}
            animate="animate"
          />
          <motion.circle
            cx="800"
            cy="300"
            r="60"
            fill="currentColor"
            className="text-accent-gold/6"
            variants={pulseVariants}
            animate="animate"
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Icon + Label */}
        <motion.div
          variants={fadeUpVariants}
          className="inline-flex items-center gap-4 mb-10"
        >
          <Briefcase className="w-10 h-10 text-accent-gold" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
            Careers at HighRoad Academy
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-8"
        >
          We are Not Hiring
          <br />
          <span className="text-accent-gold">Right Now</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          HighRoad Academy is a small, focused team dedicated to delivering
          world-class training in policy and economic analysis across Africa. We
          do not have any open positions at the moment, but we are always
          interested in hearing from exceptional talent.
        </motion.p>

        {/* Call to Action - Stay in Touch */}
        <motion.div
          variants={fadeUpVariants}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Want to work with us in the future?
          </h2>
          <p className="text-white/80 mb-8">
            Drop us a note telling us about yourself and what excites you about
            evidence-based policy and economic analysis.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-primary font-bold rounded-xl shadow-xl hover:bg-yellow-500 transition transform hover:-translate-y-1"
          >
            <Mail className="w-6 h-6" />
            Send Us Your Profile
          </Link>
        </motion.div>

        {/* Subtle footer note */}
        <motion.p
          variants={fadeUpVariants}
          className="mt-16 text-sm opacity-70 italic"
        >
          We review all submissions and reach out when suitable opportunities
          arise.
        </motion.p>

        {/* Scroll indicator (if there's more content below on the site) */}
        <motion.div
          className="hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2"
          variants={scrollIndicatorVariants}
          initial="initial"
          animate="animate"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8 text-accent-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

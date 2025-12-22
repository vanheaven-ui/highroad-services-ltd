"use client";

import { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { Handshake, Mail, ChevronDown } from "lucide-react";
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

const floatVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
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
/*                           Partnerships Page Component                      */
/* -------------------------------------------------------------------------- */

export default function PartnershipsPage(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-primary text-white py-24 md:py-32">
      {/* Abstract Background - Interconnected nodes with subtle floating motion */}
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
          {/* Soft interconnected wave */}
          <path
            d="M0 400 Q 480 200, 960 300 T 1440 250 L 1440 900 L 0 900 Z"
            fill="currentColor"
            className="text-accent-gold/7"
          />

          {/* Floating connection nodes (representing partnerships) */}
          <g>
            <motion.circle
              cx="320"
              cy="220"
              r="12"
              fill="currentColor"
              className="text-accent-gold/40"
              variants={floatVariants}
              animate="animate"
            />
            <motion.circle
              cx="720"
              cy="380"
              r="16"
              fill="currentColor"
              className="text-white/30"
              variants={floatVariants}
              animate="animate"
            />
            <motion.circle
              cx="1100"
              cy="180"
              r="10"
              fill="currentColor"
              className="text-accent-gold/50"
              variants={floatVariants}
              animate="animate"
            />
            <motion.circle
              cx="500"
              cy="600"
              r="14"
              fill="currentColor"
              className="text-white/20"
              variants={floatVariants}
              animate="animate"
            />
            <motion.circle
              cx="900"
              cy="550"
              r="18"
              fill="currentColor"
              className="text-accent-gold/30"
              variants={floatVariants}
              animate="animate"
            />

            {/* Subtle connecting lines */}
            <line
              x1="320"
              y1="220"
              x2="720"
              y2="380"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/10"
            />
            <line
              x1="720"
              y1="380"
              x2="1100"
              y2="180"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/10"
            />
            <line
              x1="500"
              y1="600"
              x2="900"
              y2="550"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/10"
            />
          </g>
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
          <Handshake className="w-10 h-10 text-accent-gold" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
            Partnerships & Collaborations
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-8"
        >
          Building Strategic
          <br />
          <span className="text-accent-gold">Alliances</span>
        </motion.h1>

        {/* Supporting Text - Reframed for broader appeal */}
        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          HighRoad Academy is actively exploring partnerships with organisations
          that value high-quality, practice-oriented training in policy and
          economic analysis. We welcome collaborations with any entity, public,
          private, or non-profit, committed to strengthening evidence-based
          decision-making across Africa.
        </motion.p>

        {/* Call to Action Card - Updated to be more inclusive */}
        <motion.div
          variants={fadeUpVariants}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Interested in partnering with us?
          </h2>
          <p className="text-white/80 mb-8">
            If your organisation believes in the power of rigorous training to
            drive better policy outcomes, we would love to hear from you. Let us
            discuss how our specialised programmes can complement or enhance
            your initiatives.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-primary font-bold rounded-xl shadow-xl hover:bg-yellow-500 transition transform hover:-translate-y-1"
          >
            <Mail className="w-6 h-6" />
            Get in Touch
          </Link>
        </motion.div>

        {/* Subtle closing note */}
        <motion.p
          variants={fadeUpVariants}
          className="mt-16 text-sm opacity-70 italic"
        >
          All partnership inquiries are reviewed personally by our leadership
          team.
        </motion.p>

        {/* Scroll indicator */}
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

"use client";

import {
  Aperture,
  Search,
  TrendingUp,
  Send,
  CheckCircle,
  Brain,
  Target,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";
// 💡 IMPORT FRAMER MOTION, Variants is still useful for child components
import { motion, Variants } from "framer-motion";

// --- DATA STRUCTURES (NO CHANGES) ---

const fourPillars = [
  {
    icon: Aperture,
    title: "1. Define the Causal Question",
    description:
      "We start not with a solution, but with a precise, academically-sound research question. This ensures project objectives are measurable, focused, and aligned with client goals.",
    color: "bg-blue-500/10 text-blue-700",
  },
  {
    icon: Search,
    title: "2. Gather & Validate Data",
    description:
      "Executing multi-modal data collection (field surveys, public records, proprietary data) with industry-leading quality assurance protocols to ensure validity and reliability.",
    color: "bg-green-500/10 text-green-700",
  },
  {
    icon: TrendingUp,
    title: "3. Analyze with Precision",
    description:
      "Application of advanced econometric modeling, causal inference techniques (e.g., DiD, RCTs), and statistical software (Stata/R) to turn complex data into verifiable evidence.",
    color: "bg-red-500/10 text-red-700",
  },
  {
    icon: Send,
    title: "4. Deliver Actionable Strategy",
    description:
      "Translating technical findings into clear, implementable policy recommendations, strategic plans, and investment roadmaps for immediate client action.",
    color: "bg-yellow-500/10 text-yellow-700",
  },
];

const methodologyHighlights = [
  {
    icon: CheckCircle,
    title: "Causal Inference Focus",
    description:
      "We prioritize establishing causality (X leads to Y) over mere correlation, offering greater confidence in policy and investment outcomes.",
  },
  {
    icon: Brain,
    title: "Econometric Modeling",
    description:
      "Advanced model construction and statistical analysis are standard, not exceptions, ensuring our forecasts and projections withstand scrutiny.",
  },
  {
    icon: Target,
    title: "Adaptive Learning Loops",
    description:
      "Our M&E systems are designed for real-time feedback, allowing clients to adapt project strategies mid-stream for optimal impact.",
  },
];

// --- FRAMER MOTION VARIANTS ---
// These are only used for children where staggering or whileInView is needed.

// Container for staggering the four pillars
const pillarContainerVariants: Variants = {
  // Only defining the state that triggers the children
  visible: {
    transition: {
      staggerChildren: 0.1, // Delay between each pillar's animation
    },
  },
};

// Item animation for the four pillars
const pillarItemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Item animation for the highlights list
const highlightItemVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- MAIN PAGE COMPONENT ---

export default function ApproachPage(): JSX.Element {
  return (
    // 💡 REFACTOR: Using direct property definition for the main page entrance.
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 1. Hero Header */}
      <section className="bg-primary text-white relative overflow-hidden py-20 md:py-28 text-center">
        {/* SVG background: No animation needed here, keep as div */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Geometric Pattern Elements */}
            <circle
              cx="200"
              cy="150"
              r="100"
              fill="currentColor"
              className="text-white/5"
            />
            <circle
              cx="800"
              cy="450"
              r="150"
              fill="currentColor"
              className="text-white/10"
            />
            <line
              x1="0"
              y1="300"
              x2="1200"
              y2="300"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/10"
            />
            <line
              x1="600"
              y1="0"
              x2="600"
              y2="600"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/10"
            />
          </svg>
        </div>

        {/* 💡 Animate the Hero Content (relative to the main tag) */}
        <motion.div
          className="max-w-4xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-snug drop-shadow-lg">
            The HighRoad Standard: Integrity, Evidence, Client Impact.
          </h1>
          <p className="mt-6 text-white/80 text-xl max-w-3xl mx-auto font-body">
            Our approach is built on core values of **Integrity, Transparency,
            and Commitment**. We apply the highest standards of evidence-based
            methodology to solve complex economic and policy challenges for
            lasting client success.
          </p>
        </motion.div>
      </section>
      {/* 2. The Four-Pillar Process (Visually Structured) */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
            Our Consulting Lifecycle
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            The Four Pillars of Strategic Partnership
          </h3>
        </div>

        {/* 💡 APPLY STAGGERED CONTAINER */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={pillarContainerVariants}
          initial="hidden" // Ensure children start hidden
          whileInView="visible" // Triggers animation when section enters viewport
          viewport={{ once: true, amount: 0.4 }}
        >
          {fourPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              // 💡 APPLY STAGGERED ITEM
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg border-t-8 border-primary/5 hover:border-accent-gold transition duration-300 transform hover:-translate-y-1"
                variants={pillarItemVariants}
              >
                <div
                  className={`w-16 h-16 ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`w-8 h-8 ${pillar.color.split(" ")[1]}`} />
                </div>
                <h4 className="text-xl font-heading font-bold text-primary mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-gray-600 font-body leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
      {/* 3. Methodological Section (The Proof of Authority) */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Title Block */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
                Beyond Simple Analysis
              </h2>
              <h3 className="text-3xl font-heading font-black text-primary mt-2 mb-4">
                Our Method is Our Edge
              </h3>
              <p className="text-gray-700 font-body">
                Our commitment to **ethical practice and transparency** ensures
                our insights are robust, peer-review ready, and provide
                <span className="ml-1 text-accent-gold font-bold">
                  quantitative confidence
                </span>
                in every strategic decision.
              </p>
              <Link
                href="/experts"
                className="mt-6 inline-flex items-center text-primary font-bold border-b-2 border-primary/50 hover:border-accent-gold transition"
              >
                Explore Our Expert Team &rarr;
              </Link>
            </motion.div>

            {/* Highlights Grid (Sequential slide-in) */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={pillarContainerVariants} // Reuse container variant for stagger
            >
              {methodologyHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-white p-6 rounded-xl shadow border-l-4 border-accent-gold/50"
                  variants={highlightItemVariants}
                >
                  <item.icon className="w-6 h-6 mr-4 mt-1 text-accent-gold flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-primary">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      ---
      {/* 4. Client Collaboration Model (Conversion CTA) */}
      <motion.section
        className="bg-primary/95 py-16 md:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready for an Evidence-Based Partnership?
          </h2>
          <p className="text-lg text-white/80 mb-8 font-body">
            Our collaborative model ensures full transparency, continuous client
            engagement, and tailored output that fits your organizational needs
            and capacity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-accent-gold text-primary font-bold rounded-full shadow-2xl text-xl hover:bg-yellow-500 hover:text-white transition transform hover:scale-105"
          >
            Define Your Project Scope Today
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}

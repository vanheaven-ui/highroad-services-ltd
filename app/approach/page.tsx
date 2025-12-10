"use client";

import {
  Aperture,
  Search,
  TrendingUp,
  Send,
  CheckCircle,
  Brain,
  Target,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";
import { motion, Variants } from "framer-motion";

// --- DATA STRUCTURES ---

const fourPillars = [
  {
    icon: Aperture,
    title: "1. Define the Causal Question",
    description:
      "We start not with a solution, but with a precise, practical research question. This ensures project objectives are measurable, focused, and aligned with client goals.",
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
      "Application of advanced econometric modeling, causal inference techniques such as DiD and RCTs, and statistical software like Stata or R to turn complex data into verifiable evidence.",
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
      "We prioritize establishing causality rather than simple correlations, offering greater confidence in policy and investment outcomes.",
  },
  {
    icon: Brain,
    title: "Econometric Modeling",
    description:
      "Advanced model construction and statistical analysis are built into every engagement, ensuring forecasts and projections can withstand scrutiny.",
  },
  {
    icon: Target,
    title: "Adaptive Learning Loops",
    description:
      "Our monitoring and evaluation systems use real-time feedback, allowing clients to adjust strategies mid-stream for optimal impact.",
  },
];

// --- FRAMER MOTION VARIANTS ---

const staggerContainer: Variants = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const pillarCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- MAIN PAGE COMPONENT ---

export default function ApproachPage(): JSX.Element {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* FOUR PILLARS SECTION */}
      <section className="bg-white pt-12 pb-24 md:pt-16 md:pb-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight">
              How We Work: The Straightforward Path to Lasting Impact
            </h1>

            <p className="mt-4 text-xl text-gray-700 font-body">
              Every HighRoad project follows a clear, four-step process grounded in
              solid evidence and shaped around what you need for practical, real-world results.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Connector Line */}
            <div className="absolute inset-0 hidden lg:flex items-center justify-around pointer-events-none">
              <div className="flex-1 border-t-2 border-dashed border-primary/20 mt-16 mx-8" />
              <div className="flex-1 border-t-2 border-dashed border-primary/20 mt-16 mx-8" />
              <div className="flex-1 border-t-2 border-dashed border-primary/20 mt-16 mx-8" />
            </div>

            {fourPillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={index}
                  className="relative p-6 bg-white rounded-xl shadow-2xl border-t-4 border-accent-gold/70 lg:mt-16 transition duration-300 transform hover:shadow-primary/20"
                  variants={pillarCardVariants}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 ${pillar.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${pillar.color.split(" ")[1]}`} />
                    </div>

                    <h4 className="text-2xl font-heading font-black text-primary">
                      {index + 1}
                    </h4>
                  </div>

                  <h4 className="text-xl font-heading font-bold text-primary mb-2">
                    {pillar.title}
                  </h4>

                  <p className="text-gray-600 font-body leading-relaxed text-base">
                    {pillar.description}
                  </p>

                  {index < fourPillars.length - 1 && (
                    <div className="block lg:hidden mt-4 text-center">
                      <ArrowRight className="w-6 h-6 text-primary mx-auto animate-bounce-x" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* STATEMENT OF AUTHORITY */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <motion.div
              className="lg:col-span-2 space-y-6 lg:sticky lg:top-20 self-start p-6 bg-white rounded-xl shadow-xl border-t-4 border-primary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
                What Sets Us Apart
              </h2>

              <h3 className="text-3xl font-heading font-black text-primary">
                Why Our Work Delivers Real Confidence
              </h3>

              <p className="text-gray-700 font-body leading-relaxed border-l-4 border-accent-gold pl-4 italic">
                We use transparent and reliable methods that make our insights
                trustworthy, easy to follow, and ready to support your most
                important decisions.
              </p>

              <Link
                href="/experts"
                className="mt-4 inline-flex items-center text-primary font-bold border-b-2 border-primary/50 hover:border-accent-gold transition"
              >
                Meet the Team Behind This →
              </Link>
            </motion.div>

            <motion.div
              className="lg:col-span-3 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={staggerContainer}
            >
              {methodologyHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col sm:flex-row items-start p-8 rounded-xl shadow-lg bg-white border-l-8 border-primary/10 hover:border-primary transition duration-300"
                  variants={slideInRight}
                >
                  <item.icon className="w-8 h-8 mr-6 mt-1 text-primary flex-shrink-0" />

                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-1">
                      {item.title}
                    </h4>

                    <p className="text-base text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
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
            connection, and outputs tailored to your specific needs.
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

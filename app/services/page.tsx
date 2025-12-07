"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services"; // Use the actual imported services data

// Data for the 'Our Process' steps
const processSteps = [
  {
    step: 1,
    title: "Define",
    description:
      "Clear definition of the problem, scope, and objectives using **proven analytical rigor**.", // 💡 Changed "PhD-level rigor"
  },
  {
    step: 2,
    title: "Gather",
    description:
      "Multi-modal data collection (surveys, public data, interviews) with strict quality control.",
  },
  {
    step: 3,
    title: "Analyze",
    description:
      "Application of advanced econometric models and causal inference techniques.",
  },
  {
    step: 4,
    title: "Action",
    description:
      "Delivering clear, actionable policy recommendations and implementation plans.",
  },
];

// --- Animation Variants ---

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child item
      when: "beforeChildren",
    },
  },
};

const cardItem: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const sectionSlideUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ServicesPageContent() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      {/* 🚀 1. Unique Hero Section: Authority Reinforcement - Initial fade/slide-down */}
      <motion.section
        className="bg-primary pt-24 pb-16 md:py-32 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-snug">
            Evidence-Driven Solutions for Economic Impact
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-3xl mx-auto font-body">
            Our **expert economists** turn complex data into **actionable policy
            and investment strategy**. We provide the analytical rigor required
            for sustainable development and measurable success in East Africa.
            {/* 💡 Removed "Our PhD economists" */}
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3 bg-accent-gold text-primary font-bold rounded-lg shadow-2xl text-lg hover:bg-yellow-500 hover:text-white transition transform hover:scale-[1.02]"
          >
            Start Your Consultation
          </a>
        </div>
      </motion.section>

      <hr />

      {/* 📊 2. Enhanced Services Grid - Staggered Fade-in on scroll */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
            Core Competencies
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Rigor & Relevance
          </h3>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div key={service.title} variants={cardItem}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="/approach"
            className="text-lg font-semibold text-primary hover:text-accent-gold transition border-b-2 border-primary/20 hover:border-accent-gold/50 pb-1"
          >
            View Our Detailed Research Methodology →
          </a>
        </div>
      </motion.section>

      <hr />

      {/* ⚙️ 3. Unique "Our Process" Section - Staggered Fade-in on scroll */}
      <motion.section
        className="bg-gray-50 py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
              Our Professional Approach{" "}
              {/* 💡 Changed "Our Academic Approach" */}
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
              The Four Pillars of HighRoad Consulting
            </h3>
          </div>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <motion.div
                key={item.step}
                variants={cardItem} // Use the same staggered variant for these cards
                className="text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-accent-gold/50 hover:shadow-xl transition duration-300"
              >
                <p className="text-5xl font-heading font-black text-accent-gold/50 mb-4">
                  {item.step}
                </p>
                <h4 className="text-xl font-heading font-bold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 font-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <hr />

      {/* 📞 4. Final Conversion CTA Block - Simple slide-up on scroll */}
      <motion.section
        className="bg-primary/95 py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionSlideUp}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Partner with Our Experts?{" "}
            {/* 💡 Changed "PhD Economists" */}
          </h2>
          <p className="text-lg text-white/80 mb-8 font-body">
            Our team is ready to provide the evidence required for your next
            major policy or investment decision.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3 bg-accent-gold text-white font-bold rounded-lg shadow-2xl border-2 border-white text-lg hover:bg-yellow-500 transition transform hover:scale-[1.02]"
          >
            Schedule a Discovery Call
          </a>
        </div>
      </motion.section>
    </motion.main>
  );
}

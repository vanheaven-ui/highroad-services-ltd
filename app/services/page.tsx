"use client";

import { motion, Variants } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import Link from "next/link"; 

// Data for the 'Our Process' steps
const processSteps = [
  {
    step: 1,
    title: "Define",
    description:
      "Clear definition of policy questions, analytical scope, and learning objectives grounded in institutional and macroeconomic context.",
  },
  {
    step: 2,
    title: "Gather",
    description:
      "Structured data compilation and preparation, including survey, administrative, and macroeconomic datasets aligned to analytical needs.",
  },
  {
    step: 3,
    title: "Analyze",
    description:
      "Application of rigorous impact evaluation methods and economy-wide modelling frameworks to assess policy effectiveness and macroeconomic dynamics.",
  },
  {
    step: 4,
    title: "Apply",
    description:
      "Translation of analytical results into policy insights, simulations, and practical learning outcomes for decision-makers and practitioners.",
  },
];

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      {/* 📊 1. Services Grid */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
            Core Competencies
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Precision & Impact
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-body leading-relaxed">
            We turn complex data into actionable policy and investment strategy,
            providing the analytical depth required for sustainable development
            and measurable success.
          </p>
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
          <Link
            href="/approach"
            className="text-lg font-semibold text-primary hover:text-accent-gold transition border-b-2 border-primary/20 hover:border-accent-gold/50 pb-1"
          >
            View Our Detailed Research Methodology →
          </Link>
        </div>
      </motion.section>

      <hr />

      {/* ⚙️ 2. Our Process */}
      <motion.section
        className="bg-gray-50 py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
              Our Professional Approach
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
              The Four Pillars of HighRoad Consulting
            </h3>
          </div>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <motion.div
                key={item.step}
                variants={cardItem}
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

      {/* 📞 3. Final CTA */}
      <motion.section
        className="bg-primary/95 py-10 md:py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionSlideUp}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Partner with Our Experts?
          </h2>
          <p className="text-lg text-white/80 mb-8 font-body">
            Our team is ready to provide the evidence required for your next
            major policy or investment decision.
          </p>
          {/* ✅ Replace <a> with Link */}
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3 bg-accent-gold text-white font-bold rounded-lg shadow-2xl border-2 border-white text-lg hover:bg-yellow-500 transition transform hover:scale-[1.02]"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}

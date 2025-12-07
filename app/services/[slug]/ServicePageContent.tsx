"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Zap,
  Globe,
  LineChart,
  ArrowLeft,
  // 💡 All Lucide icons must be imported here, in the client component
  BarChart3,
  Users,
  Briefcase,
  Building,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Service } from "@/data/services";
import { SVGProps } from "react";
import { slugify } from "@/lib/slugify";

// 💡 NEW: Icon mapping moved to the Client Component
const iconMap: Record<string, React.ComponentType<SVGProps<SVGSVGElement>>> = {
  "bar-chart-3": BarChart3,
  users: Users,
  briefcase: Briefcase,
  building: Building,
  globe: Globe,
  "line-chart": LineChart,
  default: CheckCircle,
};

// --- Animation Variants ---

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const listContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- Component Props ---

interface ServicePageContentProps {
  service: Service;
  // ❌ Removed ServiceIcon prop, as it's a non-serializable function
  services: Service[]; // Pass the full services array for the related services mapping
}

export default function ServicePageContent({
  service,
  services,
}: ServicePageContentProps) {
  // 💡 Icon component is determined here, on the client
  const ServiceIcon = iconMap[service.icon] || iconMap.default;

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      {/* 1. HERO SECTION - Initial fade/slide-down on mount */}
      <motion.section
        className={`pt-24 pb-16 md:py-36 ${service.color} text-white border-b-4 border-white/50 shadow-inner relative`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="absolute top-4 left-0 md:top-6 md:left-6 z-10">
            <Link
              href="/services"
              className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
              aria-label="Back to Services"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300 flex-shrink-0" />
              <span className="hidden md:inline">Back to Services</span>
            </Link>
          </div>

          <div className="text-center relative pt-8 md:pt-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/75 mb-3">
              **Quality** for measurable {/* ✅ FIX: Changed "Rigor" */}
              {service.title.includes("Consulting") ? "Outcomes" : "Impact"}
            </p>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full inline-flex">
                <ServiceIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight max-w-4xl mx-auto">
              {service.title}
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-white/90 font-light mb-8">
              {service.description}
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-accent-gold text-primary font-bold rounded-lg shadow-2xl text-lg hover:bg-yellow-500 transition transform hover:scale-[1.02] border-2 border-white"
            >
              Secure Your Evidence-Base →
            </Link>
            <motion.div
              className="mt-12 flex flex-wrap justify-center space-x-6 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="flex items-center text-white/90 my-1">
                <Zap className="w-4 h-4 mr-2 text-accent-gold" /> **Specialist**
                Led {/* ✅ FIX: Removed "PhD Economist Led" */}
              </span>
              <span className="flex items-center text-white/90 my-1">
                <Globe className="w-4 h-4 mr-2 text-accent-gold" /> East Africa
                Focused
              </span>
              <span className="flex items-center text-white/90 my-1">
                <LineChart className="w-4 h-4 mr-2 text-accent-gold" /> Causal
                Impact Analysis
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. OVERVIEW & CALLOUT - Scroll animation (whileInView) */}
      <motion.div
        className="bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold mb-2">
                The Analytical Edge
              </h2>
              <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                Comprehensive Service Overview
              </h3>
              <p className="whitespace-pre-line text-gray-700 leading-relaxed text-lg font-body">
                {service.detailedOverview}
              </p>
            </div>

            <div className="lg:col-span-1 p-6 bg-surface border-l-4 border-accent-gold rounded-xl shadow-lg h-fit">
              <Lightbulb className="w-8 h-8 text-accent-gold mb-4" />
              <p className="text-xl font-heading font-semibold text-primary mb-3">
                Need Immediate Insight?
              </p>
              <p className="text-gray-700 mb-6">
                Our team specializes in rapid diagnostic assessments. Get a
                focused, evidence-based review in weeks, not months.
              </p>
              <Link
                href="/contact"
                className="text-primary font-bold hover:text-accent-gold transition flex items-center"
              >
                Request Fast Track →
              </Link>
            </div>
          </div>
        </section>
      </motion.div>

      <hr className="border-t border-gray-200" />

      {/* 3. HIGHLIGHTS - Staggered Fade-In */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary text-center">
            Benefits & Differentiation
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center mt-2">
            Key Differentiators
          </h3>
          <motion.ul
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={listContainerVariants}
          >
            {service.highlights.map((point, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants} // Applies staggered animation to each list item
                className="p-8 bg-white shadow-xl rounded-xl border-t-4 border-accent-gold/70 hover:shadow-2xl transition duration-300"
              >
                <CheckCircle className="w-6 h-6 text-accent-gold mb-3" />
                <p className="text-lg font-body text-gray-700 leading-relaxed">
                  {point}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <hr className="border-t border-gray-200" />

      {/* 4. METHODOLOGY (TIMELINE) - Staggered Fade-In */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold text-center">
            Process Transparency
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center mt-2">
            {service.methodology.title}
          </h3>
          <motion.div
            className="relative grid md:grid-cols-1 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={listContainerVariants}
          >
            {/* Vertical Line remains static */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />

            {service.methodology.steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants} // Applies staggered animation to each step
                className={`flex relative items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-gold text-white font-black text-xl flex items-center justify-center z-10 mr-4 md:mr-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  {index + 1}
                </div>
                <div
                  className={`p-6 md:w-5/12 rounded-xl border border-gray-200 shadow-md bg-surface ${
                    index % 2 === 0 ? "md:text-right md:mr-10" : "md:ml-10"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed font-body">
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="border-t border-gray-200" />

      {/* 5. CASE STUDIES - Staggered Grid Fade-In */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary text-center">
            Results & Successes
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center mt-2">
            Case Studies: The Evidence of Our Work
          </h3>
          <motion.div
            className="grid md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listContainerVariants}
          >
            {service.caseStudies.map((caseItem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-2xl border-b-8 border-accent-gold/60 hover:border-accent-gold transition duration-300"
              >
                <h4 className="text-xl font-heading text-primary font-bold mb-3">
                  {caseItem.title}
                </h4>
                <p className="text-gray-600 mb-4 font-body">
                  {caseItem.description}
                </p>
                <p className="text-2xl text-primary font-black mt-4 border-t border-gray-200 pt-4">
                  <span className="mr-1">Impact:</span>
                  <span className="text-accent-gold">{caseItem.impact}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. RELATED SERVICES - Staggered Grid Fade-In */}
      {service.relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center">
              Related Services
            </h3>
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={listContainerVariants}
            >
              {service.relatedServices
                .map((relatedId) => services.find((s) => s.id === relatedId))
                .filter(Boolean)
                .map((related, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Link
                      href={`/services/${slugify(related!.title)}`}
                      className="group p-6 bg-surface hover:bg-primary transition rounded-xl shadow-lg hover:shadow-2xl flex flex-col justify-between h-full"
                    >
                      <div>
                        <h4 className="font-heading text-xl font-bold mb-2 text-primary group-hover:text-white transition">
                          {related!.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-white/80 text-sm mb-4">
                          {related!.description}
                        </p>
                      </div>
                      <div className="text-accent-gold group-hover:text-white flex items-center font-bold">
                        Explore <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* 7. FINAL CTA - Simple fade up */}
      <motion.section
        className="py-20 bg-primary/95 text-center text-white"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to work with Top Experts?{" "}
            {/* ✅ FIX: Removed "PhD Economists" */}
          </h2>
          <p className="text-lg text-white/80 mb-8 font-body">
            Elevate your decision-making with evidence-based **precision**.{" "}
            {/* ✅ FIX: Removed "rigor" */}
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-accent-gold text-primary font-bold rounded-lg shadow-2xl hover:bg-yellow-500 transition transform hover:scale-[1.02]"
          >
            Request Proposal
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}

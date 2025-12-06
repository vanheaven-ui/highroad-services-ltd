"use client"; // Added this client directive to match the user's initial request

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Lightbulb,
  Zap,
  BarChart3,
  Users,
  Briefcase,
  Building,
  Globe,
  LineChart,
} from "lucide-react";
import { SVGProps } from "react";
// 💡 IMPORT FRAMER MOTION
import { motion, Variants } from "framer-motion";

// Assuming Service and services are correctly typed/defined
import { Service, services } from "@/data/services";
// Assuming slugify utility exists
import { slugify } from "@/lib/slugify";

interface ServicePageProps {
  params: { slug: string }; // Changed to non-Promise for client component usage
}

// Map ServiceIcon strings to actual Lucide components
const iconMap: Record<string, React.ComponentType<SVGProps<SVGSVGElement>>> = {
  "bar-chart-3": BarChart3,
  users: Users,
  briefcase: Briefcase,
  building: Building,
  globe: Globe,
  "line-chart": LineChart,
  default: CheckCircle,
};

// --- FRAMER MOTION VARIANTS ---

// Container for staggering items in a list/grid
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Small stagger delay
      delayChildren: 0.2,
    },
  },
};

// Item animation for cards/highlights (slide-up)
const itemSlideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Item animation for the methodology timeline (alternating slides)
const timelineItemVariants: (isReversed: boolean) => Variants = (
  isReversed
) => ({
  hidden: { opacity: 0, x: isReversed ? 100 : -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

// Main component (changed to be a standard client component function)
export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;

  const service: Service | undefined = services.find(
    (s) => slugify(s.title) === slug
  );

  if (!service) return notFound();

  const ServiceIcon = iconMap[service.icon] || iconMap.default;

  return (
    // 💡 MAIN PAGE WRAPPER FOR INITIAL FADE-IN
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* 1. HERO SECTION */}
      <section
        className={`pt-24 pb-16 md:py-36 ${service.color} text-white border-b-4 border-white/50 shadow-inner relative`}
      >
        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Back Button (subtle animation) */}
          <motion.div
            className="absolute top-4 left-0 md:top-6 md:left-6 z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
              aria-label="Back to Services"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300 flex-shrink-0" />
              <span className="hidden md:inline">Back to Services</span>
            </Link>
          </motion.div>

          {/* Hero Content (Main Fade-In/Slide-Down) */}
          <motion.div
            className="text-center relative pt-8 md:pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-white/75 mb-3">
              Rigor for measurable{" "}
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
              className="inline-block px-10 py-4 bg-accentGold text-primary font-bold rounded-lg shadow-2xl text-lg hover:bg-yellow-500 transition transform hover:scale-[1.02] border-2 border-white"
            >
              Secure Your Evidence-Base →
            </Link>
            <div className="mt-12 flex flex-wrap justify-center space-x-6 text-sm font-medium">
              {/* Icons can be wrapped for a subtle staggered entry if desired */}
              <span className="flex items-center text-white/90 my-1">
                <Zap className="w-4 h-4 mr-2 text-accentGold" /> PhD Economist
                Led
              </span>
              <span className="flex items-center text-white/90 my-1">
                <Globe className="w-4 h-4 mr-2 text-accentGold" /> East Africa
                Focused
              </span>
              <span className="flex items-center text-white/90 my-1">
                <LineChart className="w-4 h-4 mr-2 text-accentGold" /> Causal
                Impact Analysis
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & CALLOUT */}
      <div className="bg-white">
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Overview Text */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold mb-2">
                The Analytical Edge
              </h2>
              <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                Comprehensive Service Overview
              </h3>
              <p className="whitespace-pre-line text-gray-700 leading-relaxed text-lg font-body">
                {service.detailedOverview}
              </p>
            </motion.div>

            {/* Callout Box */}
            <motion.div
              className="lg:col-span-1 p-6 bg-surface border-l-4 border-accentGold rounded-xl shadow-lg h-fit"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Lightbulb className="w-8 h-8 text-accentGold mb-4" />
              <p className="text-xl font-heading font-semibold text-primary mb-3">
                Need Immediate Insight?
              </p>
              <p className="text-gray-700 mb-6">
                Our team specializes in rapid diagnostic assessments. Get a
                focused, evidence-based review in weeks, not months.
              </p>
              <Link
                href="/contact"
                className="text-primary font-bold hover:text-accentGold transition flex items-center"
              >
                Request Fast Track →
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <hr className="border-t border-gray-200" />

      {/* 3. HIGHLIGHTS */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary text-center">
            Benefits & Differentiation
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center mt-2">
            Key Differentiators
          </h3>
          {/* 💡 APPLY STAGGERED CONTAINER for Highlights */}
          <motion.ul
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {service.highlights.map((point, idx) => (
              <motion.li
                key={idx}
                className="p-8 bg-white shadow-xl rounded-xl border-t-4 border-accentGold/70 hover:shadow-2xl transition duration-300"
                variants={itemSlideUpVariants}
              >
                <CheckCircle className="w-6 h-6 text-accentGold mb-3" />
                <p className="text-lg font-body text-gray-700 leading-relaxed">
                  {point}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <hr className="border-t border-gray-200" />

      {/* 4. METHODOLOGY */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold text-center">
            Process Transparency
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center mt-2">
            {service.methodology.title}
          </h3>
          {/* 💡 APPLY STAGGERED CONTAINER for Methodology */}
          <motion.div
            className="relative grid md:grid-cols-1 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />
            {service.methodology.steps.map((step, index) => {
              const isReversed = index % 2 === 0;
              return (
                // 💡 Apply alternating slide variant
                <motion.div
                  key={index}
                  className={`flex relative items-start md:items-center ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                  variants={timelineItemVariants(isReversed)}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accentGold text-white font-black text-xl flex items-center justify-center z-10 mr-4 md:mr-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    {index + 1}
                  </div>
                  <div
                    className={`p-6 md:w-5/12 rounded-xl border border-gray-200 shadow-md bg-surface ${
                      isReversed ? "md:text-right md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed font-body">
                      {step}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <hr className="border-t border-gray-200" />

      {/* 5. CASE STUDIES */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary text-center">
            Results & Successes
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center mt-2">
            Case Studies: The Evidence of Our Work
          </h3>
          {/* 💡 APPLY STAGGERED CONTAINER for Case Studies */}
          <motion.div
            className="grid md:grid-cols-2 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {service.caseStudies.map((caseItem, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-2xl border-b-8 border-accentGold/60 hover:border-accentGold transition duration-300"
                variants={itemSlideUpVariants}
              >
                <h4 className="text-xl font-heading text-primary font-bold mb-3">
                  {caseItem.title}
                </h4>
                <p className="text-gray-600 mb-4 font-body">
                  {caseItem.description}
                </p>
                <p className="text-2xl text-primary font-black mt-4 border-t border-gray-200 pt-4">
                  <span className="mr-1">Impact:</span>
                  <span className="text-accentGold">{caseItem.impact}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. RELATED SERVICES */}
      {service.relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center">
              Related Services
            </h3>
            {/* 💡 APPLY STAGGERED CONTAINER for Related Services */}
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {service.relatedServices
                .map((relatedId) => services.find((s) => s.id === relatedId))
                .filter(Boolean)
                .map((related) => (
                  <motion.div key={related!.id} variants={itemSlideUpVariants}>
                    <Link
                      href={`/services/${slugify(related!.title)}`}
                      className="group p-6 bg-surface hover:bg-primary transition rounded-xl shadow-lg hover:shadow-2xl flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-heading text-xl font-bold mb-2 text-primary group-hover:text-white transition">
                          {related!.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-white/80 text-sm mb-4">
                          {related!.description}
                        </p>
                      </div>
                      <div className="text-accentGold group-hover:text-white flex items-center font-bold">
                        Explore <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* 7. FINAL CTA */}
      <section className="py-20 bg-primary/95 text-center text-white">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to work with PhD Economists?
          </h2>
          <p className="text-lg text-white/80 mb-8 font-body">
            Elevate your decision-making with evidence-based rigor.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-accentGold text-primary font-bold rounded-lg shadow-2xl hover:bg-yellow-500 transition transform hover:scale-[1.02]"
          >
            Request Proposal
          </Link>
        </motion.div>
      </section>
    </motion.main>
  );
}

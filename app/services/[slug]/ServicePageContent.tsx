"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Globe,
  LineChart,
  BarChart3,
  Users,
  Briefcase,
  Building,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Service } from "@/data/services";
import { FullCaseStudy } from "@/data/case-studies";
import { SVGProps } from "react";
import { slugify } from "@/lib/slugify";
import CaseStudyModal from "@/components/case-study/CaseStudyModal";

// Icon mapping
const iconMap: Record<string, React.ComponentType<SVGProps<SVGSVGElement>>> = {
  "bar-chart-3": BarChart3,
  users: Users,
  briefcase: Briefcase,
  building: Building,
  globe: Globe,
  "line-chart": LineChart,
  default: CheckCircle,
};

// Animation variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const listContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  ...itemVariants,
  hover: {
    scale: 1.02,
    rotateX: 5,
    rotateY: 2,
    transition: { duration: 0.3, ease: "easeOut" },
    z: 10,
  },
  tap: {
    scale: 0.98,
    rotateX: 0,
    rotateY: 0,
    transition: { duration: 0.1 },
  },
};

const overlayVariants: Variants = {
  initial: { y: "100%", opacity: 0 },
  hover: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

interface ServicePageContentProps {
  service: Service & { caseStudies: FullCaseStudy[] };
  services: Service[];
}

export default function ServicePageContent({
  service,
  services,
}: ServicePageContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<FullCaseStudy | null>(
    null
  );

  const ServiceIcon = iconMap[service.icon] || iconMap.default;

  const handleCardClick = (caseItem: FullCaseStudy) => {
    setSelectedStudy(caseItem);
    setIsModalOpen(true);
  };

  return (
    <motion.main initial="hidden" animate="visible">
      {/* 1. Service Header */}
      <motion.section
        className={`pt-20 pb-12 md:pt-28 md:pb-16 ${service.color} text-white border-b-4 border-white/50 shadow-inner relative`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/75 mb-3">
            Quality for measurable{" "}
            {service.title.includes("Consulting") ? "Outcomes" : "Impact"}
          </p>

          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full inline-flex">
              <ServiceIcon className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4 leading-tight max-w-4xl mx-auto">
            {service.title}
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/90 font-light mb-8">
            {service.description}
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {service.highlights.slice(0, 3).map((highlight, idx) => (
                <div
                  key={idx}
                  className="text-center p-3 bg-white/10 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-accent-gold mx-auto mb-1" />
                  <p className="text-xs text-white/90">
                    {highlight.split(".")[0]}
                  </p>
                </div>
              ))}
            </div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            >
              <p className="text-sm text-white/75 mb-2">
                Explore our approach below
              </p>
              <div className="w-1 h-8 bg-white/50 rounded-full mx-auto animate-bounce" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. Overview & Callout */}
      <motion.div
        className="bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Overview */}
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

          {/* Callout */}
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
        </section>
      </motion.div>

      <hr className="border-t border-gray-200" />

      {/* 3. Highlights */}
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
                variants={itemVariants}
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

      {/* 4. Methodology */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold text-center">
            Process Transparency
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary text-center mt-2">
            {service.methodology.title}
          </h3>

          <motion.div
            className="relative grid md:grid-cols-1 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={listContainerVariants}
          >
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />

            {service.methodology.steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
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

      {/* 5. Case Studies */}
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
            {service.caseStudies.map((cs) => (
              <motion.div
                key={cs.id}
                variants={cardVariants}
                className="relative bg-white rounded-xl shadow-2xl border-b-8 border-accent-gold/60 hover:border-accent-gold transition duration-300 cursor-pointer overflow-hidden group"
                onClick={() => handleCardClick(cs)}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="p-8 relative z-10">
                  <h4 className="text-xl font-heading text-primary font-bold mb-3">
                    {cs.title}
                  </h4>
                  <p className="text-gray-600 mb-4 font-body">{cs.summary}</p>
                  <p className="text-2xl text-primary font-black mt-4 border-t border-gray-200 pt-4">
                    <span className="mr-1">Impact:</span>
                    <span className="text-accent-gold">{cs.impact}</span>
                  </p>
                </div>

                {/* Slide-Up Overlay */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent p-8 text-white z-20"
                  variants={overlayVariants}
                >
                  <div className="text-center">
                    <p className="text-sm font-medium mb-2 opacity-90">
                      Discover detailed insights
                    </p>
                    <div className="flex items-center justify-center space-x-3 font-bold uppercase tracking-wide text-sm">
                      <span>Dive Deeper</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Related Services */}
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
                      href={`/services/${slugify(related!.id)}`}
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

      {/* 7. Final CTA */}
      <motion.section
        className="py-20 bg-primary/95 text-center text-white"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to work with top experts?
          </h2>
          <p className="text-lg text-white/80 mb-8 font-body">
            Elevate your decision-making with evidence-based precision.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-accent-gold text-primary font-bold rounded-lg shadow-2xl hover:bg-yellow-500 transition transform hover:scale-[1.02]"
          >
            Request Proposal
          </Link>
        </div>
      </motion.section>

      {/* Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        study={selectedStudy}
      />
    </motion.main>
  );
}

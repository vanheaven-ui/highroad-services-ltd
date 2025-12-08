"use client";

import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  Users,
  Lightbulb,
  Zap,
  BookOpen,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";

/* ----------------------------------------------
 * FRAMER MOTION VARIANTS
---------------------------------------------- */
const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const slideUpItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ----------------------------------------------
 * CAREERS PAGE CONTENT
---------------------------------------------- */

// Data for the culture/pillars section
const culturePillars = [
  {
    icon: Lightbulb,
    title: "Thought Leadership",
    description:
      "Contribute original research that shapes policy and drives development discourse across the continent.",
  },
  {
    icon: BookOpen,
    title: "Continuous Growth",
    description:
      "Work alongside PhD-level experts, fostering a culture of mentorship, advanced training, and intellectual curiosity.",
  },
  {
    icon: Users,
    title: "High-Impact Collaboration",
    description:
      "Join multi-disciplinary teams on projects with major national and international partners (USAID, World Bank, AERC, IDRC).",
  },
];

function CareersPage(): JSX.Element {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen"
    >
      {/* 1. Hero Section: The Invitation */}
      <section className="bg-primary pt-24 pb-20 md:pt-32 md:pb-28 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={fadeInVariants}>
            <p className="text-sm font-subheading font-semibold uppercase tracking-widest text-accent-gold mb-3">
              Join the Vanguard of Economic Insight
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-tight">
              Careers at HighRoad
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto font-body opacity-90">
              We seek visionary economists, data scientists, and policy experts
              ready to transform complex data into clear, actionable strategies
              for sustainable development in Africa.
            </p>
          </motion.div>
        </div>
        {/* Subtle background abstract element */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Briefcase className="w-full h-full transform scale-[4] translate-y-1/2 rotate-12" />
        </div>
      </section>

      {/* 2. Our Value Proposition */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-subheading font-semibold uppercase tracking-widest text-accent-gold">
            Why HighRoad?
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            The Advantage of Advanced Practice
          </h3>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {culturePillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={slideUpItemVariants}
              className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-accent-gold/80"
            >
              <pillar.icon className="w-8 h-8 text-accent-gold mb-4" />
              <h4 className="text-xl font-heading font-bold text-primary mb-2">
                {pillar.title}
              </h4>
              <p className="text-gray-700 font-body">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Current Opportunities & CTA (The unique section) */}
      <section className="bg-white py-16 md:py-24 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center text-red-500 mb-4">
            <Zap className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-subheading font-bold uppercase tracking-wider">
              No Current Openings
            </h2>
          </div>

          <h3 className="text-4xl font-display font-black text-primary mb-6">
            Future-Proof Your Application
          </h3>
          <p className="text-lg text-gray-700 font-body max-w-3xl mx-auto mb-10">
            While we currently do not have any active job vacancies, we are
            always interested in hearing from exceptional talent, especially
            Ph.D.-level economists and data scientists.
          </p>

          <motion.div
            className="bg-gray-100 p-8 rounded-xl shadow-xl border border-gray-200"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-xl font-heading font-semibold text-primary mb-4">
              Submit Your CV for Future Consideration
            </p>

            <Link
              href="mailto:highroadservicesltd@gmail.com?subject=Inquiry%20for%20Future%20Career%20Opportunities"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent-gold text-primary font-subheading font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition transform hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5 mr-3" />
              Send Us Your Resume
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <p className="mt-4 text-sm text-gray-500">
              We will retain your profile and contact you immediately when a
              fitting opportunity arises. By sending your resume, you agree to
              our{" "}
              <Link
                href="/legal#privacy"
                className="underline hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

export default CareersPage;

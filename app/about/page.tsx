"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX, useState } from "react";
import {
  CheckCircle2,
  TrendingUp,
  Handshake,
  CornerDownRight,
  LucideIcon,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import TeamCard from "@/components/experts/TeamCard";
import { ExpertModalProvider } from "@/components/experts/ExpertModalProvider";
import { teamMembersData } from "@/data/team";

/* ===============================
  TYPES
================================= */

interface FounderPlaceholderProps {
  color?: string;
}

interface CoreStrength {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

/* ===============================
  FALLBACK SVG (Founder Placeholder)
================================= */

const FounderPlaceholder = ({
  color = "#1F2937",
}: FounderPlaceholderProps): JSX.Element => (
  <div className="absolute inset-0 rounded-lg shadow-xl bg-gray-100 flex items-center justify-center p-8 border-4 border-accent-gold/50">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full opacity-60"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <rect x="15" y="10" width="6" height="4" rx="1" ry="1" />
      <path d="M18 14v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5" />
    </svg>
  </div>
);

/* ===============================
  DATA
================================= */

const coreStrengths: CoreStrength[] = [
  {
    icon: CheckCircle2,
    title: "Verifiable Evidence",
    description:
      "Our policy insights are built using econometric models, providing results that withstand peer review and financial scrutiny.",
    color: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Strategic Roadmaps",
    description:
      "We translate complex analysis into clear, implementable roadmaps for policy adoption, market entry, and investment optimization.",
    color: "text-green-600",
  },
  {
    icon: Handshake,
    title: "Capacity Building",
    description:
      "Tailored programs designed to strengthen institutional effectiveness in research implementation and data-driven decision-making.",
    color: "text-red-600",
  },
];

/* ===============================
  FRAMER-MOTION VARIANTS
================================= */

const pageVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const listItemVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const teamGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const teamCardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ===============================
  PAGE COMPONENT
================================= */

export default function About(): JSX.Element {
  const [imageError, setImageError] = useState(false);

  const founderImagePath = "/images/norman.png";

  return (
    <ExpertModalProvider>
      <motion.main initial="initial" animate="animate" variants={pageVariants}>
        {/* ============================
            1. ORIGINAL STORY HEADER (CTA REMOVED)
        ============================= */}

        <section className="bg-white pt-10 pb-16 md:pt-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left */}
            <motion.div
              className="lg:col-span-2 space-y-4 pt-10 lg:sticky lg:top-10 self-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-gold border-l-4 border-accent-gold pl-3">
                Our Origin Story
              </p>

              <h1 className="text-4xl font-heading font-black text-primary leading-snug">
                Taking the High Road.
              </h1>

              <p className="text-gray-700 mt-2 text-sm italic">
                Led by PhD Economists with Extensive Expertise
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                We eliminate uncertainty from high-stakes economic decisions.
              </h2>

              <p className="text-xl font-body text-gray-700 leading-relaxed">
                Highroad Services Ltd provides specialised consultancy and
                research services to support effective planning, implementation
                and performance improvement. Its core services include baseline,
                mid-term and endline surveys, feasibility studies, strategy
                development, and comprehensive monitoring and evaluation. The
                firm also offers human capacity development, policy analysis,
                environmental and social impact assessments, as well as job
                evaluation, staff surveys and workload analysis. Through these
                services, Highroad Services Ltd delivers evidence-based insights
                that strengthen decision-making and enhance organisational
                effectiveness. The company is supported by a diverse team with
                extensive experience, whose profiles are outlined below.
              </p>

              {/* ❌ REMOVED PREMATURE CTA to maintain narrative flow.
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-xl hover:bg-primary/90 transition"
              >
                Start the Conversation →
              </Link>
              */}
            </motion.div>
          </div>
        </section>

        {/* ============================
            2. FOUNDER STORY + TIMELINE
        ============================= */}

        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
          {/* Timeline Line */}
          <div className="absolute left-6 lg:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/10 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* IMAGE BLOCK */}
            <motion.div
              className="flex-1 mx-auto md:mx-0 order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-sm mx-auto aspect-square relative">
                {imageError ? (
                  <FounderPlaceholder color="#1F2937" />
                ) : (
                  <Image
                    src={founderImagePath}
                    alt="Dr. Norman Tumwine, Founder"
                    fill
                    className="rounded-lg shadow-2xl border-4 border-accent-gold/50 object-cover"
                    onError={() => setImageError(true)}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                )}
              </div>

              <p className="text-sm text-center text-gray-500 mt-4 font-semibold">
                Dr. Norman Tumwine, Founder
              </p>
            </motion.div>

            {/* TEXT BLOCK */}
            <div className="space-y-8 md:order-2 lg:order-1 lg:text-right">
              {/* Challenge */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute right-0 top-0 h-4 w-4 rounded-full bg-accent-gold ring-8 ring-gray-50/50 hidden lg:block translate-x-1/2" />

                <h2 className="text-sm font-semibold uppercase tracking-widest text-red-600 mb-2">
                  The Challenge
                </h2>

                <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                  The Gap in Evidence
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  While holding key advisory roles, Dr. Tumwine witnessed a
                  recurring flaw:
                  <strong> high-stakes decisions</strong> were often based on
                  weak data—leading to stalled development and misallocated
                  resources.
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                className="relative pt-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute right-0 top-6 h-4 w-4 rounded-full bg-accent-gold ring-8 ring-gray-50/50 hidden lg:block translate-x-1/2" />

                <h2 className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-2">
                  The Solution
                </h2>

                <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                  A Commitment to Precision
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  HighRoad Services Ltd was founded to redefine evidence-based
                  consulting through advanced{" "}
                  <strong>econometric modeling</strong> and a commitment to
                  <strong> uncompromising quality</strong>.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================
            3. CORE STRENGTHS
        ============================= */}

        <section className="bg-gray-100 py-16 md:py-24 relative">
          <div className="absolute left-6 lg:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/10 hidden lg:block" />

          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <h2 className="text-3xl font-bold text-primary text-center mb-10">
              The High Road Standard: Our Pillars of Value
            </h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={listContainerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.4 }}
            >
              {coreStrengths.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    className="p-8 bg-white border border-primary/10 rounded-xl shadow-xl transition duration-300 transform hover:shadow-2xl hover:-translate-y-1"
                    variants={listItemVariants}
                  >
                    <div className="p-3 inline-block rounded-full bg-accent-gold/20 mb-4">
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>

                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ============================
            4. NEW TEAM SECTION – Minimalist Grid with Subtle Connections
        ============================= */}

        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-white">
          {/* Subtle connecting lines for uniqueness – faint horizontal threads */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-accent-gold/2 to-transparent h-0.5 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
            style={{ zIndex: 0 }}
          />

          <motion.div
            className="text-center mb-12 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto font-body">
              PhD economists blending rigorous analysis with practical strategy.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10"
            variants={teamGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembersData.map((member) => (
              <motion.div
                key={member.name}
                className="group"
                variants={teamCardVariants}
                whileHover={{ y: -4 }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ============================
            5. MISSION & VISION
        ============================= */}

        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
          <div className="absolute left-6 lg:left-1/2 transform -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-accent-gold ring-8 ring-white/50 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
            {/* Mission */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-2xl border-l-8 border-accent-gold transition hover:shadow-3xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-3 flex items-center">
                Our Mission
                <CornerDownRight className="w-5 h-5 ml-2 text-accent-gold" />
              </h2>

              <p className="text-lg text-gray-700">
                To empower institutions with evidence-driven insights and
                actionable recommendations that drive sustainable development.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-2xl border-l-8 border-primary transition hover:shadow-3xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-3 flex items-center">
                Our Vision
                <CornerDownRight className="w-5 h-5 ml-2 text-primary" />
              </h2>

              <p className="text-lg text-gray-700">
                To be the most trusted economic consultancy—delivering
                high-impact, evidence-based solutions for a prosperous future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ============================
            6. FINAL CTA (Updated to "Start the Conversation")
        ============================= */}

        <motion.section
          className="bg-primary/95 py-16 md:py-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Take the High Road with Your Project?
            </h2>

            <p className="text-lg text-white/80 mb-8 font-body">
              Our team of economists and strategists is ready to deliver the
              analytical quality and actionable roadmaps your institution needs.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center px-8 py-3 bg-accent-gold text-primary font-bold rounded-lg shadow-2xl border-2 border-white text-lg hover:bg-yellow-500 transition transform hover:scale-[1.02]"
            >
              Start the Conversation →
            </Link>
          </div>
        </motion.section>
      </motion.main>
    </ExpertModalProvider>
  );
}

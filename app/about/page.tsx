"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import {
  CheckCircle2,
  TrendingUp,
  Handshake,
  CornerDownRight,
  LucideIcon,
} from "lucide-react";
// 💡 FIX 1: Removed unused 'AnimatePresence'
import { motion, Variants } from "framer-motion";

// --- TYPESCRIPT INTERFACE for FounderPlaceholder ---
interface FounderPlaceholderProps {
  size?: number;
  color?: string;
}

// --- START: SVG Fallback Component ---
// (No changes here, keeping only the component for brevity)
const FounderPlaceholder = ({
  size = 400,
  color = "#1F2937",
}: FounderPlaceholderProps): JSX.Element => (
  <div
    className="rounded-lg shadow-xl bg-gray-100 flex items-center justify-center p-8 border-4 border-accentGold/50"
    style={{ width: size, height: size, minWidth: size, minHeight: size }}
  >
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
// --- END: SVG Fallback Component ---

const hasFounderImage = false;

// --- TYPESCRIPT INTERFACE for Core Strengths ---
interface CoreStrength {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

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

// --- FRAMER MOTION VARIANTS ---

// Base animation for the entire page content (for smooth mount)
const pageVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Container for staggering the core strengths cards
const listContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15, // Delay between each card's animation
    },
  },
};

// Item animation for the core strengths cards
const listItemVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About(): JSX.Element {
  const establishmentDate = "January 2024";

  return (
    // 💡 Apply the main page animation wrapper
    <motion.main initial="initial" animate="animate" variants={pageVariants}>
      {/* 1. ASYMMETRICAL NARRATIVE HEADER (The Problem & The Promise) */}
      {/* Using standard div/section here as the motion wrapper is on the main tag */}
      <section className="bg-white pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT: Meta and Origin */}
          <motion.div
            className="lg:col-span-2 space-y-4 pt-10 lg:sticky lg:top-10 self-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accentGold border-l-4 border-accentGold pl-3">
              Our Origin Story
            </p>
            <h1 className="text-4xl font-heading font-black text-primary leading-snug">
              Taking the High Road.
            </h1>
            <p className="text-gray-700 mt-2 text-sm italic">
              Founded in {establishmentDate}
            </p>
          </motion.div>

          {/* RIGHT: The Core Mission */}
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
              HighRoad Services Ltd is the trusted **evidence-based** economic
              consultancy. We empower governments, international NGOs, and
              businesses by delivering **strategic policy advice** and
              **analytical quality** that translates complex data into
              sustainable development outcomes.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-xl hover:bg-primary/90 transition"
            >
              Start the Conversation →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- */}

      {/* 2. FOUNDER STORY & TIMELINE SPINE */}
      {/* This section will use staggered sequencing */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 lg:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/10 hidden lg:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* IMAGE COLUMN (Always on the side) */}
          <motion.div
            className="flex-1 max-w-sm mx-auto md:mx-0 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {hasFounderImage ? (
              <Image
                src="/founder.jpg"
                alt="Dr. Norman Tumwine, Founder"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl border-4 border-accentGold/50"
              />
            ) : (
              <FounderPlaceholder size={400} color="#1F2937" />
            )}
            <p className="text-sm text-center text-gray-500 mt-4 font-semibold">
              Dr. Norman Tumwine, Founder
            </p>
          </motion.div>

          {/* NARRATIVE TEXT COLUMN (Sequential Reveal) */}
          <div className="space-y-8 md:order-2 lg:order-1 lg:text-right">
            {/* TIMELINE DOT 1: The Challenge */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute right-0 top-0 h-4 w-4 rounded-full bg-accentGold ring-8 ring-gray-50/50 hidden lg:block transform translate-x-1/2"></div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-red-600 mb-2">
                The Challenge
              </h2>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                The Gap in Evidence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {/* 💡 FIX 2: Escaped apostrophe on line 239 */}
                While holding key advisory roles at top firms and institutions
                like PADRI and RTD, Dr. Tumwine repeatedly witnessed a crucial
                flaw: **high-stakes policy and investment decisions** were often
                based on weak, unverifiable data, leading to stalled development
                and wasted resources.
              </p>
            </motion.div>

            {/* TIMELINE DOT 2: The Solution */}
            <motion.div
              className="relative pt-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }} // Delayed slightly
            >
              <div className="absolute right-0 top-6 h-4 w-4 rounded-full bg-accentGold ring-8 ring-gray-50/50 hidden lg:block transform translate-x-1/2"></div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-2">
                The Solution
              </h2>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                A Commitment to Precision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {/* 💡 FIX 3: Escaped apostrophe on line 240 */}
                The mission became clear: founding a firm dedicated to
                **uncompromising, verifiable evidence**—a true &apos;High
                Road&apos; standard for economic consulting. HighRoad Services
                Ltd was established to fuse advanced **econometric modeling**
                with strategic action, ensuring every recommendation is backed
                by **unwavering quality**.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 3. CORE STRENGTHS (The Pillars of the High Road Standard) */}
      <section className="bg-gray-100 py-16 md:py-24 relative">
        {/* Vertical Timeline Line Extension (Optional) */}
        <div className="absolute left-6 lg:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/10 hidden lg:block"></div>

        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">
            The High Road Standard: Our Pillars of Value
          </h2>

          {/* 💡 APPLY STAGGERED CONTAINER */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={listContainerVariants}
            initial="initial"
            whileInView="animate" // Triggers animation when section enters viewport
            viewport={{ once: true, amount: 0.4 }}
          >
            {coreStrengths.map((item, index) => {
              const Icon = item.icon;
              return (
                // 💡 APPLY STAGGERED ITEM
                <motion.div
                  key={index}
                  className="p-8 bg-white border border-primary/10 rounded-xl shadow-xl transition duration-300 transform hover:shadow-2xl hover:-translate-y-1"
                  variants={listItemVariants}
                >
                  <div
                    className={`p-3 inline-block rounded-full bg-accentGold/20 mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-700 text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- */}

      {/* 4. MISSION & VISION (Framed and Connected) */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
        {/* Timeline Dot 3: Mission/Future */}
        <div className="absolute left-6 lg:left-1/2 transform -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-accentGold ring-8 ring-white/50 hidden lg:block"></div>

        {/* Applying individual animations to the mission/vision blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
          {/* Mission Block */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-2xl border-l-8 border-accentGold transition hover:shadow-3xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-3 flex items-center">
              Our Mission{" "}
              <CornerDownRight className="w-5 h-5 ml-2 text-accentGold" />
            </h2>
            <p className="text-lg text-gray-700">
              To empower organizations and governments with evidence-driven
              insights and actionable economic recommendations that drive
              **sustainable development globally**.
            </p>
          </motion.div>

          {/* Vision Block */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-2xl border-l-8 border-primary transition hover:shadow-3xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-3 flex items-center">
              Our Vision{" "}
              <CornerDownRight className="w-5 h-5 ml-2 text-primary" />
            </h2>
            <p className="text-lg text-gray-700">
              To be the most trusted consultancy and research partner in
              economics, defining the highest standard for **high-impact
              solutions** and a prosperous future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- */}

      {/* 5. Team CTA */}
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
            Our team of expert economists and strategists is ready to deliver
            the analytical quality and actionable roadmaps your institution
            needs.
          </p>
          <Link
            href="/experts"
            className="mt-8 inline-flex items-center px-8 py-3 bg-accent-gold text-primary font-bold rounded-lg shadow-2xl border-2 border-white text-lg hover:bg-yellow-500 transition transform hover:scale-[1.02]"
          >
            Explore Our Experts &rarr;
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}

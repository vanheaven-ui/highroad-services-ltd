"use client";

import TeamCard, { TeamMember } from "@/components/experts/TeamCard";
import { Users } from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";
// 💡 IMPORT FRAMER MOTION
import { motion, Variants } from "framer-motion";

// --- TYPE DEFINITIONS ---
// DEFINITION CHANGE: Define the Affiliation type here to resolve the error.
export interface Affiliation {
  name: string;
  type:
    | "Industry Association"
    | "Policy Think Tank"
    | "Development Finance"
    | "Development Partner"
    | "Industry";
  description: string;
  logoUrl: string;
  websiteUrl: string;
}

// --- DATA STRUCTURES (UNCHANGED) ---

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Norman Tumwine",
    title: "Founder & Chief Economist",
    focus: "Applied Econometrics & Policy Analysis",
    qualifications: "Ph.D. Economics, Makerere University",
    bioSummary:
      "A specialist in causal inference for development policy, Dr. Tumwine leads all quantitative research and strategic advisory services. His work has been published in several top regional journals.",
    email: "norman-tumwine@highroad.example",
    linkedinUrl: "#",
    // imageSrc: "/images/evelyn.jpg",
  },
  {
    name: "Dr. Enock Nyorekwa",
    title: "Senior Economist/Consultant",
    focus: "SDG Impact Evaluation & Data Science",
    qualifications: "Ph.D. Economics, University of Cape Town",
    bioSummary:
      "With over 15 years experience, Dr. Nyorekwa focuses on designing robust SDG assessment for large international development projects, ensuring data quality and accountability.",
    email: "enyorekwa@highroad.example",
    linkedinUrl: "#",
    // imageSrc: "/images/ben.jpg",
  },
  {
    name: "Dr. Richard Magaala",
    title: "Senior Strategy Consultant",
    focus: "Market Feasibility & Sector Strategy",
    qualifications: "M.Sc. Finance, London School of Economics (LSE)",
    bioSummary:
      "Richard is the firm's expert in investment viability, guiding clients through complex market entry strategies and financial forecasting for sustainable growth.",
    email: "richard-magaala@highroad.example",
    linkedinUrl: "#",
    // imageSrc: "/images/zara.jpg",
  },
];

const industryPartners: Affiliation[] = [
  {
    name: "African Development Policy Group (ADPG)",
    type: "Policy Think Tank",
    description:
      "A non-academic partnership focused on joint policy reform projects and capacity building initiatives across the continent.",
    logoUrl: "/logos/adpg.png",
    websiteUrl: "#",
  },
  {
    name: "East African Development Bank (EADB)",
    type: "Development Finance",
    description:
      "Strategic research partnership focused on regional infrastructure investment viability and economic integration studies.",
    logoUrl: "/logos/eadb.png",
    websiteUrl: "#",
  },
  {
    name: "Global Finance & Investment Forum",
    type: "Industry Association",
    description:
      "Providing deep sector knowledge and collaboration on market feasibility studies for private sector investment.",
    logoUrl: "/logos/gfia.png",
    websiteUrl: "#",
  },
];

// --- FRAMER MOTION VARIANTS ---

// Container for staggering team members and partners
const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each item
    },
  },
};

// Item animation for team cards and partner logos
const slideUpItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- MAIN PAGE COMPONENT ---

export default function ExpertsPage(): JSX.Element {
  return (
    // 💡 APPLY MAIN PAGE FADE-IN
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 1. DISTINCTIVE Narrative Header */}
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-20 text-center">
        {/* 💡 Animate Header Content separately */}
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-black text-primary leading-snug">
            Meet Our Experts
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto font-body text-gray-700">
            HighRoad is led by a team of consultants with **advanced
            qualifications** and supported by strategic partnerships with top
            industry and development institutions. Our expertise drives
            actionable strategy.
          </p>
          <hr className="w-1/4 mx-auto mt-6 border-t border-primary/20" />
        </motion.div>
      </section>
      ---
      {/* 2. Core Leadership Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
            Focused Expertise. Proven Results.
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Our Core Leadership
          </h3>
        </div>

        {/* 💡 APPLY STAGGERED CONTAINER for Team Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembers.map((member) => (
            // 💡 Wrap TeamCard in motion.div with item variant
            <motion.div key={member.name} variants={slideUpItemVariants}>
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA for Full Team/Recruitment */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/careers"
            className="px-8 py-3 bg-accent-gold text-primary font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            View Full Consultant Team (and Careers) &rarr;
          </Link>
        </motion.div>
      </section>
      ---
      {/* 3. Affiliations and Partnerships Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Titles */}
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
              Strategic Alliances
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
              Institutional Partners
            </h3>
          </div>

          {/* New Logo Grid for Affiliations */}
          {/* 💡 APPLY STAGGERED CONTAINER for Partners */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-items-center mb-16"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {industryPartners.map((aff) => (
              // 💡 Wrap Partner div in motion.div with item variant
              <motion.div
                key={aff.name}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md border border-gray-200 w-full h-full text-center hover:shadow-xl transition"
                variants={slideUpItemVariants}
              >
                <span className="text-2xl font-bold text-primary/80">
                  {aff.name}
                </span>
                <span className="text-sm text-gray-500 mt-1">{aff.type}</span>
              </motion.div>
            ))}
          </motion.div>
          {/* End Logo Grid */}

          {/* Unique Callout about the network */}
          <motion.div
            className="mt-16 text-center p-8 bg-white rounded-xl shadow-lg border-l-8 border-accentGold/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center text-lg font-semibold text-primary">
              <Users className="w-6 h-6 mr-3 text-accentGold" />
              Our network ensures deep industry insight backed by global policy
              and financial standards.
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

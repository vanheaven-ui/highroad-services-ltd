"use client";

import TeamCard, { TeamMember } from "@/components/experts/TeamCard";
import { ExpertModalProvider } from "@/components/experts/ExpertModalProvider";
import { FullExpertProfile } from "@/components/experts/ExpertProfileModal";

import { Briefcase, Trophy, Zap, Globe, Cpu, Handshake } from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";
import { motion, Variants } from "framer-motion";

/* ----------------------------------------------
   TEAM MEMBERS DATA
---------------------------------------------- */
const teamMembersData: FullExpertProfile[] = [
  {
    name: "Dr. Norman Tumwine",
    title: "Founder & Chief Economist",
    focus: "Applied Econometrics & Policy Analysis",
    qualifications: "Ph.D. Economics, Makerere University",
    bioSummary:
      "A specialist in causal inference for development policy, Dr. Tumwine leads all quantitative research and strategic advisory services. His work has been published in several top regional journals.",
    email: "norman-tumwine@highroad.example",
    linkedinUrl: "#",
    imageSrc: "",
    fullBio:
      "Dr. Tumwine holds extensive expertise in complex econometric modeling, experimental design (RCTs), and quasi-experimental methods (DiD, RDD). His career spans advisory roles for governmental ministries and international development organizations across East Africa, focusing on leveraging data for structural reform and macroeconomic stability. He is passionate about translating 'precision' analysis into clear, practical policy recommendations that drive measurable growth and poverty reduction.",
    keyProjects: [
      "Led the impact evaluation of a $50M regional trade facilitation project (2020-2022).",
      "Designed national policy simulations for climate change adaptation funding.",
      "Authored the financial feasibility report for a major infrastructure bond issuance.",
    ],
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
    imageSrc: "",
    fullBio:
      "Dr. Nyorekwa is a veteran in monitoring and evaluation (M&E) for large-scale development programs funded by the World Bank and various UN agencies. His specialization lies in integrating cutting-edge data science techniques, including machine learning and spatial econometrics, to deliver high-frequency, verifiable impact assessments, particularly for projects targeting Sustainable Development Goals (SDGs) in health and education.",
    keyProjects: [
      "Developed the M&E framework for a multi-country sanitation program (SDG 6).",
      "Pioneered the use of satellite imagery for rapid poverty mapping in urban centers.",
      "Served as lead consultant on a $10M public health sector effectiveness review.",
    ],
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
    imageSrc: "",
    fullBio:
      "Richard leverages his background in corporate finance and strategy consulting to advise private equity firms, DFIs, and large corporations operating in African markets. His approach is rooted in rigorous financial modeling and comprehensive scenario analysis, ensuring investment decisions are financially sound and sustainable in complex regulatory environments. He excels at translating economic policy into tangible business opportunities.",
    keyProjects: [
      "Completed a successful market entry strategy for a major telecoms firm in West Africa.",
      "Provided due diligence and financial modeling for a multi-million-dollar land acquisition.",
      "Developed a five-year growth strategy for a regional logistics company, optimizing capital expenditure.",
    ],
  },
];

/* ----------------------------------------------
   FRAMER MOTION VARIANTS
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

/* ----------------------------------------------
   MAIN PAGE CONTENT
---------------------------------------------- */
function ExpertsPageContent(): JSX.Element {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ---------------------------------------------- */}
      {/* 1. Narrative Header */}
      {/* ---------------------------------------------- */}
      <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 text-center">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-black text-primary leading-snug">
            Meet Our Experts: The Core of Your Strategy
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto font-body text-gray-700">
            HighRoad is led by specialist consultants whose{" "}
            <strong>deep sector experience</strong> and advanced training
            directly translate into actionable, high-impact strategy and policy
            recommendations.
          </p>

          <hr className="w-1/4 mx-auto mt-6 border-t border-primary/20" />
        </motion.div>
      </section>

      {/* ---------------------------------------------- */}
      {/* 2. Core Leadership Team */}
      {/* ---------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
            Focused Expertise. Proven Results.
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Our Core Leadership
          </h3>
          <p className="mt-2 text-gray-600">
            Click any profile to view full expertise, track record, and key
            projects.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembersData.map((member) => (
            <motion.div key={member.name} variants={slideUpItemVariants}>
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/careers"
            className="px-8 py-3 bg-accentGold text-primary font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Explore Career Opportunities →
          </Link>
        </motion.div>
      </section>

      {/* ---------------------------------------------- */}
      {/* 3. Strategic Advantage */}
      {/* ---------------------------------------------- */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
              Methodology. Experience. Results.
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
              The HighRoad Strategic Advantage
            </h3>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Our expertise is backed by a framework that ensures analytical
              rigor and reliable, implementable outcomes.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Pillar 1 */}
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-accentGold/70"
              variants={slideUpItemVariants}
            >
              <Cpu className="w-8 h-8 text-accentGold mb-4" />
              <h4 className="text-xl font-heading font-bold text-primary mb-3">
                Advanced Analytical Rigor
              </h4>
              <p className="text-gray-700">
                We utilize{" "}
                <strong>Ph.D.-level econometrics and data science</strong> to
                ensure every finding is statistically robust and validated
                against global academic standards.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-accentGold/70"
              variants={slideUpItemVariants}
            >
              <Globe className="w-8 h-8 text-accentGold mb-4" />
              <h4 className="text-xl font-heading font-bold text-primary mb-3">
                Global Standards, Local Context
              </h4>
              <p className="text-gray-700">
                Our team blends international best practice with{" "}
                <strong>deep regional knowledge</strong> across the continent.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-accentGold/70"
              variants={slideUpItemVariants}
            >
              <Handshake className="w-8 h-8 text-accentGold mb-4" />
              <h4 className="text-xl font-heading font-bold text-primary mb-3">
                Strategy Built for Implementation
              </h4>
              <p className="text-gray-700">
                We don’t just deliver reports; we deliver{" "}
                <strong>clear, funded roadmaps</strong> designed for immediate
                implementation and measurable success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

/* ----------------------------------------------
   EXPORT WITH PROVIDER WRAPPER
---------------------------------------------- */
export default function ExpertsPage() {
  return (
    <ExpertModalProvider>
      <ExpertsPageContent />
    </ExpertModalProvider>
  );
}

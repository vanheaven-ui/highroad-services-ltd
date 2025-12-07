"use client";

import { FullCaseStudy } from "@/components/case-study/CaseStudyModal";
import { ModalProvider, useModal } from "@/components/case-study/ModalProvider";
import CaseStudyCard from "@/components/CasestudyCard";
import Link from "next/link";
import React, { JSX } from "react";
// 💡 IMPORT FRAMER MOTION
import { motion, Variants } from "framer-motion";

// --- TYPE DEFINITIONS ---
type CaseStudy = FullCaseStudy;

// --- CASE STUDIES DATA (UNCHANGED) ---
const caseStudies: CaseStudy[] = [
  {
    title: "Agricultural Policy Research and Optimization",
    context:
      "Client needed to optimize the coffee export value chain for smallholder farmers in the Western region, facing persistent low prices and market volatility.",
    summary:
      "Conducted proprietary field research, combined with advanced econometric modeling (Difference-in-Differences and instrumental variables) to identify key market access barriers and infrastructure bottlenecks.",
    impact:
      "20% average increase in farm-gate income for 10,000+ smallholder beneficiaries.",
    client: "National Agriculture Board",
    region: "Western Region, Uganda",
    date: "Q3 2024",
    detailedDescription: `
      **Phase 1: Diagnostic Assessment**
      Conducted a census of 10,000 smallholder farmers. Found that 40% of post-harvest loss was due to poor drying and storage infrastructure. Mapped the entire value chain from farm to port.

      **Phase 2: Econometric Modeling & Scenario Planning**
      Used a General Equilibrium Model (GEM) to simulate the impact of various policy interventions (e.g., subsidized drying facilities, cooperative formation). The optimal scenario showed that reducing transport costs by 10% and improving quality could boost farmer revenue by $5 million annually.

      **Phase 3: Implementation & Monitoring**
      Supported the establishment of 20 farmer cooperatives and trained 50 local extension officers. Developed a digital monitoring system to track price transmission and farmer adoption of new techniques. The final recommendation led to a national policy adjustment in coffee grading standards.
    `,
  },
  {
    title: "Urban Economic Feasibility Study: Industrial Park",
    context:
      "Assessing the potential for a new 500-acre industrial park development near Kampala, focused on light manufacturing, and securing foundational funding from DFIs.",
    summary:
      "Provided a comprehensive 15-year economic forecast, detailed land-use projections, financial risk models, and a robust investment mitigation strategy covering political, environmental, and infrastructure risks.",
    impact:
      "Successfully secured $50 Million in foundational development financing from international partners.",
    client: "Ministry of Trade and Industry",
    region: "Greater Kampala Metropolitan Area",
    date: "Q1 2025",
    detailedDescription: `
      **Market Analysis & Demand Projection**
      We analyzed regional and international demand for goods produced in the proposed park sectors (textiles, agro-processing). Projected a peak employment of 15,000 people within 10 years.

      **Financial Modeling & Funding Strategy**
      Developed a detailed cash flow model to determine the project's viability. Calculated a projected **Internal Rate of Return (IRR) of 14.5%** over the 15-year period. This model was used directly in successful negotiations with three Development Finance Institutions (DFIs).

      **Infrastructure & Risk Assessment**
      The risk assessment highlighted dependence on reliable energy supply. We proposed a dedicated sub-station plan and a redundant water supply system, which were integral to the final pitch. The ESIA ensured compliance with international safeguard policies, mitigating community displacement risks.
    `,
  },
  {
    title: "Microfinance Impact Evaluation in Eastern Uganda",
    context:
      "Evaluated the causal impact of a digital micro-loan program on women-owned businesses in rural areas, seeking to validate and improve the program's efficiency.",
    summary:
      "Used Randomized Control Trial (RCT) methodology combined with qualitative field interviews to measure social and economic outcomes, identifying areas for scale-up and optimization.",
    impact:
      "Program redesign led to a 15% improvement in client business sustainability and reduced default rates by 5%.",
    client: "International Development NGO",
    region: "Eastern Uganda",
    date: "Q4 2023",
    detailedDescription: `
      **RCT Design and Implementation**
      Implemented a cluster-randomized trial across 50 villages, dividing participants into treatment and control groups. The primary outcome was measured by comparing business income and household consumption.

      **Key Findings and Recommendations**
      The RCT showed a significant positive impact on income, but also revealed a need for integrated business training. The redesign recommendation was to pair the digital loan disbursement with weekly financial literacy modules, which resulted in improved outcomes (the 15% increase in sustainability).

      **Methodological Rigor**
      The study controlled for seasonal effects and pre-existing socio-economic factors using baseline and endline surveys, ensuring the observed impact was causal.
    `,
  },
  {
    title: "ESIA for a Large-Scale Infrastructure Project",
    context:
      "Required an Environmental and Social Impact Assessment (ESIA) for a new large-scale mining operation to meet World Bank Group and IFC compliance standards.",
    summary:
      "Completed a full ESIA report, developed a comprehensive Stakeholder Engagement Plan (SEP), and designed long-term environmental remediation and local benefits programs.",
    impact:
      "Achieved full compliance with international safeguards, enabling project continuity and fostering strong community relations.",
    client: "Multinational Mining Corporation",
    region: "Northern Region, DRC Border",
    date: "Q2 2024",
    detailedDescription: `
      **Environmental Baseline & Mitigation**
      Conducted detailed baseline studies of air, water, and biodiversity. Developed a site-specific biodiversity offset strategy and a waste management plan that exceeded national standards.

      **Social Impact & Stakeholder Engagement**
      Identified sensitive indigenous populations and cultural heritage sites. The SEP involved over 50 community meetings, leading to a mutually agreed-upon Resettlement Action Plan (RAP) that satisfied all World Bank Performance Standards (PS1-PS8).

      **Regulatory Clearance**
      The final ESIA document was successfully submitted to the relevant government bodies and the World Bank, securing the necessary environmental permit for operation.
    `,
  },
];

// --- FRAMER MOTION VARIANTS ---

// Container for staggering the cards
const cardContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between each card's animation
    },
  },
};

// Item animation for each individual card
const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- WRAPPER COMPONENT TO USE MODAL CONTEXT ---
interface CaseStudyCardWithModalProps {
  study: CaseStudy;
}

const CaseStudyCardWithModal: React.FC<CaseStudyCardWithModalProps> = ({
  study,
}) => {
  const { openModal } = useModal();

  // 💡 APPLY FRAMER MOTION ITEM VARIANT HERE
  return (
    <motion.div variants={cardItemVariants}>
      <CaseStudyCard
        key={study.title}
        title={study.title}
        context={study.context}
        summary={study.summary}
        impact={study.impact}
        onViewFullStudy={() => openModal(study)}
      />
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function CaseStudiesPage(): JSX.Element {
  return (
    <ModalProvider>
      {/* 💡 APPLY MAIN PAGE FADE-IN */}
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Hero Section (Consistent Style) */}
        <section className="bg-primary text-white relative overflow-hidden py-20 md:py-28 text-center">
          {/* Absolute SVG background: No animation needed */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid slice"
            >
              <circle
                cx="200"
                cy="150"
                r="100"
                fill="currentColor"
                className="text-white/5"
              />
              <circle
                cx="800"
                cy="450"
                r="150"
                fill="currentColor"
                className="text-white/10"
              />
              <line
                x1="0"
                y1="300"
                x2="1200"
                y2="300"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white/10"
              />
              <line
                x1="600"
                y1="0"
                x2="600"
                y2="600"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white/10"
              />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Subheading */}
            <p className="text-sm uppercase tracking-widest text-accent-gold mb-4 font-semibold">
              Evidence-Based Results
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-snug drop-shadow-lg">
              Verified Impact. Causal Results.
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg max-w-3xl mx-auto font-body opacity-90">
              We don&apos;t just deliver data; we deliver evidence of **causal
              impact**. Explore how our rigorous **econometric models** and
              policy advice have shaped successful outcomes.
            </p>

            {/* Single CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-accent-gold text-primary font-bold rounded-lg shadow-xl ring-2 ring-accent-gold/30 hover:bg-yellow-500 hover:shadow-2xl hover:ring-accent-gold/50 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>

        {/* Case Study Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
              Our Portfolio of Excellence
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
              Client Success Stories
            </h3>
          </div>

          {/* 💡 APPLY STAGGERED CONTAINER */}
          <motion.div
            className="grid grid-cols-1 gap-10"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible" // Triggers animation when section enters viewport
            viewport={{ once: true, amount: 0.1 }}
          >
            {caseStudies.map((study) => (
              <CaseStudyCardWithModal key={study.title} study={study} />
            ))}
          </motion.div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gray-50 py-16 md:py-20 border-t border-gray-200">
          {/* 💡 APPLY FADE/SLIDE-IN ON SCROLL */}
          <motion.div
            className="max-w-4xl mx-auto text-center px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Need Quantitative Confidence?
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-body">
              Our methods are **peer-reviewed** and strategically precise. If
              your project demands verifiable results and strategic precision,
              let&apos;s connect.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center px-8 py-3 bg-accent-gold text-primary font-bold rounded-lg shadow-2xl border-2 border-primary text-lg hover:bg-yellow-500 hover:text-primary transition transform hover:scale-[1.02]"
            >
              Schedule a Free Strategy Session
            </Link>
          </motion.div>
        </section>
      </motion.main>
    </ModalProvider>
  );
}

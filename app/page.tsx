"use client";

import Hero from "@/components/Hero";
import AffiliationsSection from "@/components/AffiliationsSection";
import ApproachSection from "@/components/ApproachSection";
import ImpactSection from "@/components/ImpactSection";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CasestudyCard";
import Link from "next/link";
import { JSX } from "react";
import { services } from "@/data/services";
import { FullCaseStudy } from "@/components/case-study/CaseStudyModal";
import { ModalProvider, useModal } from "@/components/case-study/ModalProvider";
// 💡 IMPORT FRAMER MOTION
import { motion, Variants } from "framer-motion";

// CaseStudy type matches FullCaseStudy
type CaseStudy = FullCaseStudy;

// --- FRAMER MOTION VARIANTS ---

// Container variant for staggered lists (Services and Case Studies)
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Item variant for cards (slide-up)
const itemSlideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ----------------------
// 3. Case Studies Data (UNCHANGED)
// ----------------------
const caseStudies: CaseStudy[] = [
  {
    title: "Agricultural Policy Research and Optimization",
    context:
      "Client needed to optimize the coffee export value chain for smallholder farmers in the Western region, facing persistent low prices and market volatility.",
    summary:
      "Identified key market access barriers and infrastructure bottlenecks through proprietary field research, econometric modeling, and stakeholder workshops. Recommended a phased intervention strategy focusing on quality control and direct market linkages.",
    impact:
      "10,000+ beneficiaries with a 20% average increase in farm-gate income within two seasons.",
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
      "Provided a comprehensive 15-year economic forecast, detailed financial projections (IRR, NPV), and a tailored risk mitigation strategy covering political, environmental, and infrastructure risks. The study included an Environmental and Social Impact Assessment (ESIA).",
    impact:
      "Improved city planning and secured $50 Million in foundational development funding from international partners.",
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
];

// ----------------------
// 4. Custom Case Study Component to use Modal
// ----------------------
interface HomeCaseStudyCardProps {
  study: CaseStudy;
}

const HomeCaseStudyCard: React.FC<HomeCaseStudyCardProps> = ({ study }) => {
  const { openModal } = useModal();

  // 💡 WRAP COMPONENT IN motion.div
  return (
    <motion.div
      className="flex-shrink-0 w-[90vw] md:w-[65vw] lg:w-[50vw] xl:w-[45vw]"
      key={study.title}
      variants={itemSlideUpVariants}
    >
      <CaseStudyCard
        title={study.title}
        summary={study.summary}
        context={study.context}
        impact={study.impact}
        onViewFullStudy={() => openModal(study)}
      />
    </motion.div>
  );
};

// ----------------------
// 5. Main Component Wrapped in Provider
// ----------------------
export default function Home(): JSX.Element {
  return (
    <ModalProvider>
      {/* 💡 Animate Hero separately if it doesn't already use motion */}
      <Hero />

      <main>
        {/* Impact Section */}
        {/* Assume ImpactSection is a large component, animate it on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <ImpactSection />
        </motion.div>

        {/* Affiliations Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <AffiliationsSection />
        </motion.div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <ApproachSection />
        </motion.div>

        {/* ⭐ NEW: Engaging CTA to the About Page ⭐ */}
        <motion.section
          className="bg-primary py-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto text-center px-6">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Why Choose Our Rigor?
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Our success is rooted in our founding principles, team expertise,
              and unique methodology.
            </p>
            <Link
              href="/about"
              className="px-8 py-3 bg-accent-gold text-primary font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition transform hover:scale-[1.05]"
            >
              Meet Our Founders & Mission
            </Link>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          {/* Title Fade-in */}
          <motion.h2
            className="text-4xl font-heading font-bold text-primary mb-12 border-b-4 border-accent-gold inline-block pb-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Our Core Services: Expertise in Action
          </motion.h2>

          {/* 💡 APPLY STAGGERED CONTAINER for Services */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={itemSlideUpVariants}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  color={service.color}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/services"
              className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition"
            >
              View Detailed Capabilities
            </Link>
          </motion.div>
        </section>

        {/* Case Studies Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title Fade-in */}
            <motion.h2
              className="text-4xl font-heading font-bold text-primary mb-12 border-b-4 border-accent-gold inline-block pb-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              Verified Impact & Case Studies
            </motion.h2>
          </div>

          {/* Horizontal Scroll */}
          <div className="overflow-x-auto pb-6">
            {/* 💡 APPLY STAGGERED CONTAINER for Case Studies */}
            <motion.div
              className="flex space-x-8 px-6 md:px-10 lg:px-24 w-max"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }} // Less amount for horizontal scroll
            >
              {caseStudies.map((study) => (
                <HomeCaseStudyCard key={study.title} study={study} />
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="max-w-6xl mx-auto text-center mt-12 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/case-studies"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent-gold hover:text-primary transition"
            >
              Explore More Success Stories
            </Link>
          </motion.div>
        </section>
      </main>
    </ModalProvider>
  );
}

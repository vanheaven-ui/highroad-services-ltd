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
import { ModalProvider, useModal } from "@/components/case-study/ModalProvider";
import { motion, Variants } from "framer-motion";
import { caseStudies, FullCaseStudy } from "@/data/case-studies";

// CaseStudy type matches FullCaseStudy
type CaseStudy = FullCaseStudy;

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemSlideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ----------------------
// Custom Case Study Component using Modal
// ----------------------
interface HomeCaseStudyCardProps {
  study: CaseStudy;
}

const HomeCaseStudyCard: React.FC<HomeCaseStudyCardProps> = ({ study }) => {
  const { openModal } = useModal();

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
// Main Home Component
// ----------------------
export default function Home(): JSX.Element {
  // Function to get two random case studies
  const getRandomCaseStudies = (num: number): CaseStudy[] => {
    const shuffled = [...caseStudies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomCaseStudies = getRandomCaseStudies(2);

  return (
    <ModalProvider>
      <Hero />

      <main>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <ImpactSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <AffiliationsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <ApproachSection />
        </motion.div>

        <motion.section
          className="bg-primary py-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto text-center px-6">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Why Choose the HighRoad Approach?
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Our strength comes from our founding principles, team experience,
              and a methodology built around clarity, evidence, and real-world
              implementation.
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
          <motion.h2
            className="text-4xl font-heading font-bold text-primary mb-12 border-b-4 border-accent-gold inline-block pb-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Our Core Services: Expertise in Action
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemSlideUpVariants}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  color={service.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Case Studies Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
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

          <div className="overflow-x-auto pb-6">
            <motion.div
              className="flex space-x-8 px-6 md:px-10 lg:px-24 w-max"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {randomCaseStudies.map((study) => (
                <HomeCaseStudyCard key={study.title} study={study} />
              ))}
            </motion.div>
          </div>

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

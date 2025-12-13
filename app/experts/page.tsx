"use client";

import TeamCard from "@/components/experts/TeamCard";
import { ExpertModalProvider } from "@/components/experts/ExpertModalProvider";

import { Globe, Cpu, Handshake } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { teamMembersData } from "@/data/team";

/* ----------------------------------------------
 * FRAMER MOTION VARIANTS (UPDATED FOR CONSISTENCY)
---------------------------------------------- */
const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }, // Added small delay for smoother start
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
 * MAIN PAGE CONTENT (UPDATED ANIMATION TRIGGERS)
---------------------------------------------- */
function ExpertsPageContent(): JSX.Element {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 1. Narrative Header */}
      <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 text-center">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-black text-primary leading-snug">
            OUR TEAM
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto font-body text-gray-700">
            HighRoad Services Ltd is led by specialist consultants whose{" "}
            <strong>deep sector experience</strong> and advanced training
            directly translate into actionable, high-impact strategy and policy
            recommendations.
          </p>

          <hr className="w-1/4 mx-auto mt-6 border-t border-primary/20" />
        </motion.div>
      </section>

      {/* 2. Core Leadership Team */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-sm font-subheading font-semibold uppercase tracking-widest text-accent-gold">
            Focused Expertise. Proven Results.
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Our Core Leadership
          </h3>
          <p className="mt-2 text-gray-600 font-body">
            Click any profile to view full expertise, track record, and key
            projects.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible" // ← Changed from whileInView to animate for reliable triggering
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
          animate={{ opacity: 1, scale: 1 }} // ← Changed from whileInView to animate for consistency
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/careers"
            className="px-8 py-3 bg-accent-gold text-primary font-subheading font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Explore Career Opportunities →
          </Link>
        </motion.div>
      </section>

      {/* 3. Strategic Advantage */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-subheading font-semibold uppercase tracking-widest text-accent-gold">
              Methodology. Experience. Results.
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
              The HighRoad Strategic Advantage
            </h3>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto font-body">
              Our expertise is backed by a framework that ensures analytical
              rigor and reliable, implementable outcomes.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible" // ← Changed from whileInView to animate for reliable triggering
          >
            {/* Pillar 1 */}
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-accent-gold/70"
              variants={slideUpItemVariants}
            >
              <Cpu className="w-8 h-8 text-accent-gold mb-4" />
              <h4 className="text-xl font-heading font-bold text-primary mb-3">
                Advanced Analytical Rigor
              </h4>
              <p className="text-gray-700 font-body">
                We utilize{" "}
                <strong>Ph.D.-level econometrics and data science</strong> to
                ensure every finding is statistically robust and validated
                against global academic standards.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-accent-gold/70"
              variants={slideUpItemVariants}
            >
              <Globe className="w-8 h-8 text-accent-gold mb-4" />
              <h4 className="text-xl font-heading font-bold text-primary mb-3">
                Global Standards, Local Context
              </h4>
              <p className="text-gray-700 font-body">
                Our team blends international best practice with{" "}
                <strong>deep regional knowledge</strong> across the continent.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-accent-gold/70"
              variants={slideUpItemVariants}
            >
              <Handshake className="w-8 h-8 text-accent-gold mb-4" />
              <h4 className="text-xl font-heading font-bold text-primary mb-3">
                Strategy Built for Implementation
              </h4>
              <p className="text-gray-700 font-body">
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
 * EXPORT WITH PROVIDER WRAPPER (NO CHANGE)
---------------------------------------------- */
export default function ExpertsPage() {
  return (
    <ExpertModalProvider>
      <ExpertsPageContent />
    </ExpertModalProvider>
  );
}

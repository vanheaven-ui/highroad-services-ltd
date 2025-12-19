"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  ChevronDown,
  TrendingUp,
  Cpu,
  LineChart,
  Users,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Briefcase,
  Building,
  UserCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                               Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 0.6 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const scrollIndicatorVariants: Variants = {
  initial: { opacity: 0, y: -4 },
  animate: {
    opacity: [0.4, 1, 0.4],
    y: [0, 12, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function HighRoadAcademyPage() {
  const flagshipCourses = [
    {
      title: "Impact Evaluation",
      icon: TrendingUp,
      color: "bg-blue-600",
      description:
        "Practical methods for designing, implementing, and interpreting impact evaluations using experimental and quasi-experimental approaches.",
      topics: [
        "Foundations of Impact Evaluation",
        "Randomized Controlled Trials (RCTs)",
        "Difference-in-Differences (DiD)",
        "Propensity Score Matching (PSM)",
        "Regression Discontinuity Design (RDD)",
        "Instrumental Variables (IV)",
        "Ethical, Gender & Practical Considerations",
        "Integration of AI Tools for Data Analysis & Predictive Insights",
        "Policy Interpretation of Results",
      ],
      target:
        "M&E specialists, researchers, government staff, NGOs, consultants",
    },
    {
      title: "Computable General Equilibrium (CGE) Modelling",
      subtitle: "Using GAMS for Policy Analysis",
      icon: Cpu,
      color: "bg-amber-600",
      description:
        "Hands-on training in building, calibrating, and simulating CGE models to assess economy-wide effects of policy reforms.",
      topics: [
        "Theoretical Foundations & Social Accounting Matrices",
        "GAMS Programming for CGE",
        "Model Calibration & Benchmarking",
        "Policy Simulations (tax, trade, climate, social protection)",
        "Sensitivity Analysis & Extensions",
        "Use of AI-Assisted Tools for Model Enhancement & Scenario Forecasting",
        "Communication of Results",
      ],
      target: "Economists, policy analysts, postgraduate students, planners",
    },
    {
      title: "Dynamic Stochastic General Equilibrium (DSGE) Models",
      subtitle: "For Macroeconomic Policy Analysis",
      icon: LineChart,
      color: "bg-purple-600",
      description:
        "Advanced micro-founded modelling used by central banks for monetary, fiscal, and macro-financial policy analysis under uncertainty.",
      topics: [
        "Microeconomic Foundations & Stochastic Shocks",
        "Model Structure & Solution Methods",
        "Calibration, Estimation & Bayesian Techniques",
        "Policy Simulations & Diagnostics",
        "Incorporating Machine Learning for Improved Estimation & Forecasting",
        "Model Extensions & Applications",
      ],
      target: "PhD/MSc students, central bank economists, macro analysts",
    },
  ];

  const participantProfiles = [
    {
      icon: Briefcase,
      title: "Government Technical Staff & Policymakers",
      desc: "Officers in ministries, planning units, and regulatory bodies who commission or use analytical work for evidence-based decisions.",
    },
    {
      icon: Building,
      title: "Central Banks & Macroeconomic Analysts",
      desc: "Economists responsible for forecasting, monetary policy, and financial stability analysis.",
    },
    {
      icon: UserCheck,
      title: "Researchers & Postgraduate Students (MSc/PhD)",
      desc: "Academics and advanced students seeking practical, publishable skills in impact evaluation and macroeconomic modelling.",
    },
    {
      icon: Users,
      title: "Development Practitioners & M&E Specialists",
      desc: "Staff from NGOs, international organisations, and consulting firms who design and evaluate programmes.",
    },
  ];

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero with Abstract Background */}
      <section className="relative overflow-hidden bg-primary text-white py-24 md:py-32">
        {/* Abstract SVG Background */}
        <motion.div
          className="absolute inset-0 z-0"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 0 L 1440 0 L 1440 520 C 1150 680, 720 820, 0 720 Z"
              fill="currentColor"
              className="text-accent-gold/5"
            />
            <circle
              cx="1080"
              cy="160"
              r="90"
              fill="currentColor"
              className="text-white/6"
            />
            <circle
              cx="360"
              cy="660"
              r="130"
              fill="currentColor"
              className="text-white/4"
            />
            <circle
              cx="720"
              cy="300"
              r="60"
              fill="currentColor"
              className="text-accent-gold/8"
            />
          </svg>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-3 mb-8"
          >
            <GraduationCap className="w-8 h-8 text-accent-gold" />
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
              HighRoad Academy
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-8"
          >
            Advanced Training in
            <br />
            Policy & Economic Analysis
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            HighRoad Academy delivers specialised, practice-oriented training in
            impact evaluation and advanced economic modelling, now enhanced
            with modern AI tools  to strengthen evidence-based policymaking and
            development practice.
          </motion.p>

          <motion.p
            variants={fadeUpVariants}
            className="text-sm opacity-75 italic border-t border-white/10 pt-6 max-w-md mx-auto"
          >
            Designed specifically for policymakers, central bank economists,
            researchers, postgraduate students, and development practitioners.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2"
            variants={scrollIndicatorVariants}
            initial="initial"
            animate="animate"
            aria-label="Scroll to explore programmes"
          >
            <ChevronDown className="w-8 h-8 text-accent-gold" />
          </motion.div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div variants={fadeUpVariants}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold mb-3">
              Bridging Critical Skills Gaps
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Practical Training for Evidence-Based Decision-Making
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Few institutions in Africa offer hands-on training in these
              advanced methods. HighRoad Academy addresses this need with
              programmes that blend proven analytical techniques, practical
              software application, real-world case studies, and contemporary AI
              tools to enhance modelling, forecasting, and insight generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Programmes */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeUpVariants}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Flagship Programmes
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Specialised Training Offerings
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {flagshipCourses.map((course, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`relative rounded-2xl shadow-xl overflow-hidden border-t-8 ${course.color} text-white`}
              >
                <div className="absolute inset-0 bg-black/20 z-0" />

                <div className="relative z-10 p-8">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <course.icon className="w-8 h-8" />
                  </div>

                  <h4 className="text-2xl font-bold mb-2">
                    {course.title}
                    {course.subtitle && (
                      <span className="block text-lg font-medium mt-1 opacity-90">
                        {course.subtitle}
                      </span>
                    )}
                  </h4>

                  <p className="text-white/95 mb-8 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <p className="text-sm uppercase tracking-wider opacity-80">
                      Key Topics Include
                    </p>
                    <ul className="space-y-2 text-sm">
                      {course.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/30">
                    <p className="text-sm uppercase tracking-wider opacity-80 mb-1">
                      Primarily Designed For
                    </p>
                    <p className="text-sm font-medium">{course.target}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For – Strengthened Emphasis */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeUpVariants}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold mb-3">
              Who We Serve
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Training Designed Specifically For
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {participantProfiles.map((profile, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariants}
                className="bg-surface p-8 rounded-xl shadow-lg border-t-4 border-accent-gold/70 hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-gold/10 rounded-full flex items-center justify-center">
                  <profile.icon className="w-9 h-9 text-accent-gold" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">
                  {profile.title}
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {profile.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUpVariants} className="mt-16 text-center">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Whether you work in government, a central bank, academia, or an
              international development organisation, our programmes give you
              the exact skills needed to produce credible, policy-relevant
              analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          variants={fadeUpVariants}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Build Advanced Analytical Capacity?
          </h2>
          <p className="text-xl text-white/85 mb-10 max-w-3xl mx-auto">
            Contact us to discuss upcoming cohorts, custom training needs, or
            institutional partnerships.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-accent-gold text-primary font-bold text-lg rounded-full shadow-2xl hover:bg-yellow-500 transition transform hover:scale-105"
          >
            Enquire About Training
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </motion.div>
      </section>
    </motion.main>
  );
}

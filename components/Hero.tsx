// components/Hero.tsx
"use client";

import Link from "next/link";
import { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";

const StylisticLogoText = (): JSX.Element => (
  <span className="inline-flex flex-col items-start leading-none pr-1">
    <span className="text-lg md:text-xl font-heading font-black text-accent-gold">
      HighRoad
    </span>
    <span
      className="text-xs font-subheading font-semibold uppercase tracking-widest ml-1 opacity-90"
      style={{
        marginTop: "-4px",
        verticalAlign: "sub",
        fontSize: "0.65em",
        color: "white",
      }}
    >
      Services Ltd
    </span>
  </span>
);

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const textSlideInVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const svgVariants: Variants = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

export default function Hero(): JSX.Element {
  return (
    <section className="bg-primary text-white relative overflow-hidden py-20 md:py-32">
      {/* Background SVG */}
      <motion.div
        className="absolute inset-0 z-0 opacity-100"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M 0 0 L 1440 0 L 1440 500 C 1200 650, 700 800, 0 700 Z"
            fill="currentColor"
            className="text-accent-gold/5"
          />

          <circle
            cx="1000"
            cy="150"
            r="80"
            fill="currentColor"
            className="text-white/5"
          />
          <circle
            cx="400"
            cy="650"
            r="120"
            fill="currentColor"
            className="text-white/3"
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="
          max-w-7xl mx-auto px-6 relative z-10
          grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start
          text-center lg:text-left
        "
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <div className="lg:col-span-7 w-full">
          <motion.p
            className="text-sm uppercase tracking-widest text-accent-gold mb-3 font-subheading font-semibold"
            variants={textSlideInVariants}
          >
            Research, Consultancy & Training
          </motion.p>

          <motion.h1
            className="
              text-4xl sm:text-[2.7rem] md:text-6xl 
              font-display font-extrabold leading-tight tracking-tight drop-shadow-lg
            "
            variants={textSlideInVariants}
          >
            Turning Data into{" "}
            <span className="text-accent-gold mr-2">Decisions That Drive</span>
            <br className="hidden sm:inline" />
            Real Results.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base md:text-lg opacity-90 mx-auto lg:mx-0 font-body"
            variants={textSlideInVariants}
          >
            Through expert research, consultancy, and training,{" "}
            <StylisticLogoText />
            delivers clear, practical strategies powered by deep analysis and
            hands-on experience. Helping you solve challenges and achieve
            measurable success.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start"
            variants={textSlideInVariants}
          >
            <Link
              href="/contact"
              className="
                w-full lg:w-auto px-8 py-3 
                inline-flex justify-center text-center
                bg-accent-gold text-primary font-subheading font-bold rounded-lg 
                shadow-xl ring-2 ring-accent-gold/30
                hover:bg-accent-gold hover:shadow-2xl hover:ring-accent-gold/50
                transition-all duration-300 transform hover:scale-[1.02]
              "
            >
              Request a Consultation
            </Link>

            <Link
              href="/experts"
              className="
                w-full lg:w-auto px-8 py-3 text-center 
                border border-white rounded-lg 
                hover:bg-white hover:text-primary font-subheading font-semibold transition
              "
            >
              Meet the Team
            </Link>
          </motion.div>
        </div>

        {/* Right Column – Desktop Only */}
        <motion.div
          className="
            hidden lg:block lg:col-span-5 
            p-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10
            text-left
          "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-heading font-bold mb-4 text-accent-gold">
            Our Core Differentiators
          </h3>

          <p className="text-sm opacity-80 mb-6 font-body">
            We build solutions that last. Our methodology ensures:
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-accent-gold mt-1 mr-3" />
              <div>
                <p className="font-subheading font-semibold text-white">
                  Deep Domain Expertise
                </p>
                <p className="text-sm opacity-70 font-body">
                  Led by expert economists and seasoned policy veterans.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-accent-gold mt-1 mr-3" />
              <div>
                <p className="font-subheading font-semibold text-white">
                  Actionable Insights
                </p>
                <p className="text-sm opacity-70 font-body">
                  Translating complex analysis into clear, implementable
                  roadmaps.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-accent-gold mt-1 mr-3" />
              <div>
                <p className="font-subheading font-semibold text-white">
                  Global Standards, Local Context
                </p>
                <p className="text-sm opacity-70 font-body">
                  Delivering internationally benchmarked quality across all
                  projects.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8 pt-4 border-t border-white/10">
            <p className="text-sm italic opacity-75 text-center font-body">
              Partnered with governments, NGOs, and businesses worldwide.
            </p>
          </div>
        </motion.div>

        {/* Mobile-only trust signal */}
        <motion.div
          className="lg:hidden text-center mt-8 w-full"
          variants={textSlideInVariants}
        >
          <p className="text-sm italic opacity-75 font-body">
            Partnered with governments, NGOs, and businesses worldwide.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

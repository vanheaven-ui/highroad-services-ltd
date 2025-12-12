"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft, ArrowRight, XCircle } from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";

/* ----------------------------------------------
 * FRAMER MOTION VARIANTS
---------------------------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

/* ----------------------------------------------
 * NOT FOUND PAGE CONTENT
---------------------------------------------- */
function NotFoundPage(): JSX.Element {
  return (
    <motion.main
      className="bg-primary min-h-screen flex flex-col justify-center items-center text-white px-6 py-16 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-xl mx-auto text-center">
        {/* Large 404 Error Code with Accent */}
        <motion.p
          className="font-display font-black text-9xl md:text-[10rem] leading-none mb-4 tracking-tighter"
          variants={itemVariants}
          style={{ WebkitTextStroke: "2px #FACC15" }}
        >
          <span className="text-transparent">404</span>
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
          variants={itemVariants}
        >
          <XCircle className="inline w-8 h-8 mr-2 text-red-400" />
          Analysis Failed: Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl text-gray-300 mb-10 font-body max-w-lg mx-auto"
          variants={itemVariants}
        >
          It seems the analytical path you chose led to a dead end. We could not
          locate the data on this specific page address.
        </motion.p>

        {/* Navigation CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent-gold text-primary font-subheading font-bold rounded-lg shadow-xl hover:bg-yellow-500 transition transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5 mr-3" />
            Return to Homepage
          </Link>

          <Link
            href="/experts"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-400 text-gray-300 font-subheading font-bold rounded-lg shadow-lg hover:border-accent-gold hover:text-accent-gold transition transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            Check Out Our Experts
          </Link>
        </motion.div>
      </div>

      {/* Background Arrow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <ArrowRight className="w-full h-full transform scale-[6] translate-x-1/3 translate-y-1/4" />
      </div>
    </motion.main>
  );
}

export default NotFoundPage;

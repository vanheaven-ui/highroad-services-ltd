"use client";

import { motion, Variants } from "framer-motion";
import { Lock, FileText, ArrowRight } from "lucide-react";
import React, { JSX, useState, useEffect, useRef } from "react"; // Added useState, useEffect, useRef
import Link from "next/link";

// --- CUSTOMIZATION REQUIRED ---
// Fill in these placeholders with your company's actual details.
const COMPANY_NAME = "HighRoad Services LTD";
const JURISDICTION = "The Republic of Uganda";
const COMPANY_EMAIL = "highroadservicesltd@gmail.com";
const RESUME_RETENTION_DURATION = "2 years";
// ------------------------------

/* ----------------------------------------------
 * FRAMER MOTION VARIANTS
---------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
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
 * LEGAL PAGE COMPONENT
---------------------------------------------- */

function LegalPageContent(): JSX.Element {
  // State to track the currently active section (URL hash)
  const [activeSection, setActiveSection] = useState("#privacy");

  // Ref to hold the elements to observe
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is intersecting (visible), set it as active
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px 0px -60% 0px", // When the top 40% of the element enters view
        threshold: 0,
      }
    );

    // Start observing the two main sections
    const privacyEl = document.getElementById("privacy");
    const termsEl = document.getElementById("terms");

    if (privacyEl) observer.observe(privacyEl);
    if (termsEl) observer.observe(termsEl);

    // Cleanup the observer on unmount
    return () => {
      if (privacyEl) observer.unobserve(privacyEl);
      if (termsEl) observer.unobserve(termsEl);
    };
  }, []); // Run only once on mount

  // Helper function to apply active link styles
  const getLinkClasses = (sectionId: string) => {
    const base =
      "flex items-center transition duration-200 p-2 rounded-lg -ml-2";
    if (activeSection === sectionId) {
      return `${base} font-bold text-primary bg-accent-gold/20 shadow-sm`;
    }
    return `${base} text-gray-600 hover:text-accent-gold hover:bg-gray-100`;
  };

  return (
    <motion.main
      className="bg-gray-50 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 1. Hero Section: Title and Date */}
      <section className="bg-white pt-20 pb-12 md:pt-28 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={slideUpItemVariants}>
            <h1 className="text-4xl md:text-6xl font-display font-black text-primary leading-snug flex items-center">
              <Lock className="w-10 h-10 mr-4 text-accent-gold" />
              Legal & Compliance
            </h1>
            <p className="mt-4 text-xl text-gray-700 font-body">
              Our commitment to your privacy and the terms governing the use of
              our digital services.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              **Last Updated:**{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* 2. Left Column: Anchored Navigation (Table of Contents) */}
        <motion.nav className="lg:col-span-1" variants={slideUpItemVariants}>
          <div className="sticky top-20 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-heading font-bold text-primary mb-4 border-b pb-2">
              On This Page
            </h3>
            <ul className="space-y-1 font-subheading text-sm">
              <li>
                <Link href="#privacy" className={getLinkClasses("#privacy")}>
                  <Lock className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className={getLinkClasses("#terms")}>
                  <FileText className="w-4 h-4 mr-2" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="flex items-center text-blue-600 hover:text-accent-gold transition mt-4 pt-3 border-t border-gray-200 p-2 -ml-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Return to Careers
                </Link>
              </li>
            </ul>
          </div>
        </motion.nav>

        {/* 3. Right Column: Document Content */}
        <div className="lg:col-span-3 space-y-16">
          {/* --- PRIVACY POLICY SECTION --- */}
          <motion.section
            id="privacy"
            className="p-8 bg-white rounded-xl shadow-xl"
            variants={slideUpItemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-6 border-l-4 border-accent-gold pl-4">
              Privacy Policy
            </h2>

            <p className="mb-6 text-gray-700">
              {COMPANY_NAME} ("us", "we", or "our") operates this website (the
              "Service"). This page informs you of our policies regarding the
              collection, use, and disclosure of Personal Data when you use our
              Service.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              1. Data Collection
            </h3>
            <p className="text-gray-700 mb-4">
              We collect several types of information for various purposes to
              provide and improve our Service to you.
            </p>

            <h4 className="text-xl font-heading font-semibold text-primary mt-6 mb-2">
              A. Personal Data Voluntarily Submitted
            </h4>
            <p className="text-gray-700">
              While using our Service, you may provide us with certain
              personally identifiable information ("Personal Data") that can be
              used to contact or identify you. This includes, but is not limited
              to:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li>
                  **Email Address and Name** (when contacting us or submitting a
                  career inquiry)
                </li>
                <li>
                  **Resume/CV Content** (when submitting a career inquiry, which
                  may include qualifications, work history, and contact details)
                </li>
              </ul>
            </p>

            <h4 className="text-xl font-heading font-semibold text-primary mt-6 mb-2">
              B. Usage Data (Automatically Collected)
            </h4>
            <p className="text-gray-700">
              We also collect information on how the Service is accessed and
              used ("Usage Data") via standard analytics. This Usage Data may
              include your IP address, browser type, pages visited, time spent
              on pages, and referring sites.
            </p>

            <h4 className="text-xl font-heading font-semibold text-primary mt-6 mb-2">
              C. Tracking & Cookies Data
            </h4>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to track the
              activity on our Service. Cookies are primarily used to distinguish
              unique users and analyze site traffic patterns.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              2. Use of Data
            </h3>
            <p className="text-gray-700">
              {COMPANY_NAME} uses the collected data primarily:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li>To maintain and improve the Service.</li>
                <li>
                  **To assess and process job applications and inquiries (the
                  primary use of submitted Personal Data).**
                </li>
                <li>
                  To monitor the usage of the Service for analytical
                  improvement.
                </li>
              </ul>
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              3. Retention of Data
            </h3>
            <p className="text-gray-700">
              We retain your Personal Data only for as long as is necessary for
              the purposes set out in this Privacy Policy. Career inquiries and
              resumes submitted via email will be retained for up to **
              {RESUME_RETENTION_DURATION}** for future hiring consideration.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              4. Disclosure and Security
            </h3>
            <p className="text-gray-700">
              We will not share or sell your Personal Data to third parties for
              marketing purposes. We strive to use commercially acceptable means
              to protect your data, but we cannot guarantee its absolute
              security.
            </p>
          </motion.section>

          {/* --- TERMS & CONDITIONS SECTION --- */}
          <motion.section
            id="terms"
            className="p-8 bg-white rounded-xl shadow-xl"
            variants={slideUpItemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-6 border-l-4 border-accent-gold pl-4">
              Terms and Conditions
            </h2>
            <p className="mb-6 text-gray-700">
              These Terms and Conditions ("Terms") constitute a legally binding
              agreement between you and {COMPANY_NAME} regarding your use of the
              Service.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              1. Intellectual Property Rights
            </h3>
            <p className="text-gray-700">
              The Service and its original content, features, and functionality,
              including all expert profiles and project data, are and will
              remain the exclusive property of **{COMPANY_NAME}** and its
              licensors, protected by copyright and other laws of **
              {JURISDICTION}** and foreign countries.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              2. Use of Site Content & Disclaimer
            </h3>
            <p className="text-gray-700">
              The content provided on the Service is for general informational
              purposes only. It is **not intended** and does not constitute
              professional, financial, or legal consulting advice.
            </p>
            <p className="text-gray-700 mt-4">
              You may **not** reproduce, duplicate, copy, sell, resell, or
              exploit any portion of the Service, or its content without express
              written permission.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              3. Limitation of Liability
            </h3>
            <p className="text-gray-700">
              In no event shall {COMPANY_NAME}, nor its directors, employees, or
              partners, be liable for any indirect or consequential damages
              arising from your use or inability to use the Service.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              4. Governing Law
            </h3>
            <p className="text-gray-700">
              These Terms shall be governed and construed in accordance with the
              laws of **{JURISDICTION}**.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              5. Contact Us
            </h3>
            <p className="text-gray-700">
              If you have any questions about these Terms or the Privacy Policy,
              please contact us at: **{COMPANY_EMAIL}**
            </p>
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
}

export default LegalPageContent;

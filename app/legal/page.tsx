"use client";

import { motion, Variants } from "framer-motion";
import { Lock, FileText, ArrowRight } from "lucide-react";
import React, { JSX, useState, useEffect } from "react";
import Link from "next/link";

// --- CUSTOMIZATION REQUIRED ---
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
  // Track the currently active section (URL hash)
  const [activeSection, setActiveSection] = useState("#privacy");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0,
      }
    );

    const privacyEl = document.getElementById("privacy");
    const termsEl = document.getElementById("terms");

    if (privacyEl) observer.observe(privacyEl);
    if (termsEl) observer.observe(termsEl);

    return () => {
      if (privacyEl) observer.unobserve(privacyEl);
      if (termsEl) observer.unobserve(termsEl);
    };
  }, []);

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
      {/* HERO SECTION */}
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
              <strong>Last Updated:</strong>{" "}
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
        {/* LEFT NAVIGATION */}
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

        {/* CONTENT AREA */}
        <div className="lg:col-span-3 space-y-16">
          {/* PRIVACY POLICY */}
          <motion.section
            id="privacy"
            className="p-8 bg-white rounded-xl shadow-xl"
            variants={slideUpItemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-6 border-l-4 border-accent-gold pl-4">
              Privacy Policy
            </h2>

            <p className="mb-6 text-gray-700">
              {COMPANY_NAME} (&quot;us&quot;, &quot;we&quot;, or
              &quot;our&quot;) operates this website (the &quot;Service&quot;).
              This page informs you of our policies regarding the collection,
              use, and disclosure of Personal Data when you use our Service.
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
            <p className="text-gray-700 mb-3">
              While using our Service, you may provide us with certain personal
              information (&quot;Personal Data&quot;) that can be used to
              contact or identify you.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
              <li>
                <strong>Email Address and Name</strong> (when contacting us or
                submitting a career inquiry)
              </li>
              <li>
                <strong>Resume/CV Content</strong> (including qualifications and
                work history)
              </li>
            </ul>

            <h4 className="text-xl font-heading font-semibold text-primary mt-6 mb-2">
              B. Usage Data (Automatically Collected)
            </h4>
            <p className="text-gray-700">
              We collect analytics data such as IP address, browser type, pages
              visited, time spent on pages, and referring sites.
            </p>

            <h4 className="text-xl font-heading font-semibold text-primary mt-6 mb-2">
              C. Tracking & Cookies Data
            </h4>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to analyze site
              traffic patterns.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              2. Use of Data
            </h3>
            <p className="text-gray-700 mb-3">
              {COMPANY_NAME} uses collected data for:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
              <li>Maintaining and improving the Service</li>
              <li>
                <strong>
                  Assessing and processing job applications and inquiries
                </strong>
              </li>
              <li>Monitoring website usage</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              3. Retention of Data
            </h3>
            <p className="text-gray-700">
              We retain resumes and career inquiries for up to{" "}
              <strong>{RESUME_RETENTION_DURATION}</strong> for future hiring
              consideration.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              4. Disclosure and Security
            </h3>
            <p className="text-gray-700">
              We do not sell your Personal Data. We apply commercially
              acceptable security measures but cannot guarantee absolute
              security.
            </p>
          </motion.section>

          {/* TERMS & CONDITIONS */}
          <motion.section
            id="terms"
            className="p-8 bg-white rounded-xl shadow-xl"
            variants={slideUpItemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-6 border-l-4 border-accent-gold pl-4">
              Terms and Conditions
            </h2>

            <p className="mb-6 text-gray-700">
              These Terms (&quot;Terms&quot;) form a legally binding agreement
              between you and {COMPANY_NAME} regarding your use of the Service.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              1. Intellectual Property Rights
            </h3>
            <p className="text-gray-700">
              All content, design, and features of the Service remain the
              property of <strong>{COMPANY_NAME}</strong> and are protected
              under the laws of <strong>{JURISDICTION}</strong>.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              2. Use of Site Content & Disclaimer
            </h3>
            <p className="text-gray-700">
              Content is provided for general informational purposes only and
              should not be considered professional, financial, or legal advice.
            </p>
            <p className="text-gray-700 mt-4">
              You may not reproduce, duplicate, or resell any portion of this
              Service without written consent.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              3. Limitation of Liability
            </h3>
            <p className="text-gray-700">
              {COMPANY_NAME} is not liable for indirect or consequential damages
              arising from the use of this Service.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              4. Governing Law
            </h3>
            <p className="text-gray-700">
              These Terms are governed in accordance with the laws of{" "}
              <strong>{JURISDICTION}</strong>.
            </p>

            <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">
              5. Contact Us
            </h3>
            <p className="text-gray-700">
              For questions regarding these Terms, contact{" "}
              <strong>{COMPANY_EMAIL}</strong>.
            </p>
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
}

export default LegalPageContent;

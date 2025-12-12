"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { AnimatePresence } from "framer-motion";

// Import the required components
import UnderConstructionModal from "./UnderContsructionModal";
import ActionModalLink from "./ActionModalLink"; // Assuming ActionModalLink is here

// --- Custom Link Components ---
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const SlidingUnderlineLink: React.FC<FooterLinkProps> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="group relative inline-block text-white/80 hover:text-accent-gold transition duration-300 overflow-hidden font-body"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-gold transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
  </Link>
);

// We keep SimpleHoverLink for standard, non-intercepted <a> tags (e.g., external sites if we don't intercept them)
const SimpleHoverLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="hover:text-accent-gold transition duration-300 font-body"
  >
    {children}
  </a>
);

// --- NEW INTERCEPTIVE CONTACT LINK WRAPPER ---
interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
  label: string; // The raw email/phone number for the modal
}

const InterceptedContactLink: React.FC<ContactLinkProps> = ({
  href,
  children,
  label,
}) => {
  // Determine if we should use ActionModalLink (mailto or tel) or a standard link
  const shouldIntercept = href.startsWith("mailto:") || href.startsWith("tel:");

  // The styling is applied to the children regardless of the wrapper
  const linkClasses =
    "hover:text-accent-gold transition duration-300 font-body";

  // If it's a mailto or tel link, use the modal wrapper
  if (shouldIntercept) {
    return (
      <ActionModalLink href={href} label={label}>
        <span className={linkClasses}>{children}</span>
      </ActionModalLink>
    );
  }

  // Otherwise, use a standard link (should not happen for mailto/tel but provides a fallback)
  return (
    <a href={href} className={linkClasses}>
      {children}
    </a>
  );
};

// --- Footer Component ---
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="bg-primary text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-12">
            {/* Column 1: Logo and Mission (Unchanged) */}
            <div>
              <div className="relative flex flex-col items-start mb-4">
                <span className="text-3xl font-heading font-black text-white">
                  HighRoad
                </span>
                <svg
                  className="absolute -top-0 left-16 w-20 h-10 pointer-events-none"
                  viewBox="0 0 100 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 10 40 Q 50 5 90 40"
                    stroke="#CFA83B"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.95"
                    style={{
                      filter: "drop-shadow(0 1px 3px rgba(207, 168, 59, 0.5))",
                    }}
                  />
                </svg>
                <span className="text-xs font-subheading font-semibold uppercase tracking-widest mt-[-4px] ml-1 text-accent-gold nav-logo-sub">
                  Services Ltd
                </span>
              </div>

              <p className="text-sm opacity-80 mb-4 font-body">
                <span className="font-bold">Strategic consulting</span>,
                <span className="font-bold"> impact research</span>, and
                <span className="font-bold"> professional training</span> for
                development and economic growth.
              </p>

              <p className="text-xs font-subheading font-semibold uppercase tracking-wider text-accent-gold mt-4">
                Consultancy & Training Focused
              </p>
            </div>

            {/* Column 2: Quick Links (Unchanged) */}
            <div>
              <h4 className="font-subheading font-semibold text-lg mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <SlidingUnderlineLink href="/about">
                    About Us & Mission
                  </SlidingUnderlineLink>
                </li>
                <li>
                  <SlidingUnderlineLink href="/services">
                    Our Expertise
                  </SlidingUnderlineLink>
                </li>
                <li>
                  <SlidingUnderlineLink href="/case-studies">
                    Projects & Impact
                  </SlidingUnderlineLink>
                </li>
                <li>
                  <SlidingUnderlineLink href="/experts">
                    Meet the Consultants
                  </SlidingUnderlineLink>
                </li>
                <li>
                  <SlidingUnderlineLink href="/contact">
                    Request a Proposal
                  </SlidingUnderlineLink>
                </li>
                <li>
                  <SlidingUnderlineLink href="/legal#privacy">
                    Privacy Policy
                  </SlidingUnderlineLink>
                </li>
                <li>
                  <SlidingUnderlineLink href="/legal#terms">
                    Terms & Conditions
                  </SlidingUnderlineLink>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact - MODIFIED HERE */}
            <div>
              <h4 className="font-subheading font-semibold text-lg mb-4">
                Contact
              </h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-accent-gold flex-shrink-0" />
                  <span className="font-body">
                    P.O Box 21446,
                    <br />
                    Plot 4 Ttula, Kawempe,
                    <br />
                    Kampala, Uganda
                  </span>
                </li>

                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-accent-gold" />
                  {/* Replaced SimpleHoverLink with InterceptedContactLink for Mail */}
                  <InterceptedContactLink
                    href="mailto:highroadservicesltd@gmail.com"
                    label="highroadservicesltd@gmail.com"
                  >
                    highroadservicesltd@gmail.com
                  </InterceptedContactLink>
                </li>

                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-accent-gold" />
                  {/* Replaced SimpleHoverLink with InterceptedContactLink for Phone */}
                  <InterceptedContactLink
                    href="tel:+256772688639"
                    label="+256 772 688 639"
                  >
                    +256 772 688 639
                  </InterceptedContactLink>
                </li>
              </ul>
            </div>

            {/* Column 4: Research & Insights (Unchanged) */}
            <div>
              <h4 className="font-subheading font-semibold text-lg mb-4">
                Research & Insights
              </h4>
              <p className="text-sm opacity-80 mb-4 font-body">
                Stay updated with our latest policy analysis and publications.
              </p>

              {/* MODIFICATION: Use Modal instead of Link */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full py-2 bg-accent-gold text-primary font-subheading font-bold rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-xl relative group overflow-hidden inline-flex justify-center"
              >
                Subscribe to Research
                <span className="absolute top-0 left-0 w-full h-[3px] bg-primary transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
              </button>
            </div>
          </div>

          {/* Copyright (Unchanged) */}
          <div className="mt-8 text-center text-xs opacity-60 font-body">
            &copy; {currentYear} HighRoad Services Ltd. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal (Under Construction) */}
      <AnimatePresence>
        {showModal && (
          <UnderConstructionModal
            onClose={() => setShowModal(false)}
            title="Subscribe Feature Under Construction"
            description="We are finalizing our research subscription system. Stay tuned!"
          />
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { JSX } from "react";

interface FullMenuDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

/* ----------------------------------------------
   DRAWER LOGO COMPONENT
   Matches Navbar style but optimized for drawer
---------------------------------------------- */
const DrawerLogo = () => (
  <div className="relative flex flex-col items-start">
    <span
      className="text-4xl font-heading font-black relative"
      style={{ color: "#CFA83B" }}
    >
      HighRoad
    </span>

    <svg
      className="absolute -top-1 -right-1 w-20 h-10 pointer-events-none"
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 80 40 Q 50 10 20 40"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
        style={{ filter: "drop-shadow(0 1px 2px rgba(255, 255, 255, 0.2))" }}
      />
    </svg>

    <span
      className="font-semibold uppercase tracking-widest mt-[-4px] ml-1"
      style={{ color: "#FFFFFF", fontSize: "0.9em" }}
    >
      Services Ltd
    </span>
  </div>
);

/* ----------------------------------------------
   MENU CONTENT DEFINITIONS
---------------------------------------------- */
const menuContent = [
  {
    title: "Our Expertise",
    href: "/services",
    description: "See our core capabilities across policy, data, and strategy.",
    links: [
      { name: "Sectoral Assessments", href: "/services/assessments" },
      { name: "Econometric Modeling", href: "/services/modeling" },
      { name: "M&E and Impact Evaluation", href: "/services/m-e" },
    ],
  },
  {
    title: "Client Success",
    href: "/case-studies",
    description: "Explore verified impact and client testimonials.",
    links: [
      { name: "Development Finance", href: "/studies/finance" },
      { name: "Government Policy", href: "/studies/policy" },
      { name: "NGO Strategy", href: "/studies/ngo" },
    ],
  },
  {
    title: "Firm & Team",
    href: "/experts",
    description: "Meet our PhD scholars and academic affiliations.",
    links: [
      { name: "Our Methodology", href: "/approach" },
      { name: "Partnerships", href: "/experts/partners" },
      { name: "Careers", href: "/careers" },
    ],
  },
];

/* ----------------------------------------------
   FULL MENU DRAWER COMPONENT
---------------------------------------------- */
export default function FullMenuDrawer({
  isOpen,
  setIsOpen,
}: FullMenuDrawerProps): JSX.Element {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
      transition={{ type: "tween", duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-primary text-white overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 mt-4 md:mt-0">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2"
          >
            <DrawerLogo />
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="p-3 rounded-full hover:bg-white/10 transition"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Mega Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {menuContent.map((section) => (
            <div
              key={section.title}
              className="p-4 border-l-4 border-accent-gold/50"
            >
              {/* Main section link */}
              <Link
                href={section.href}
                onClick={() => setIsOpen(false)}
                className={`block text-3xl font-heading font-bold mb-2 transition hover:text-accent-gold ${
                  pathname === section.href ? "text-accent-gold" : "text-white"
                }`}
              >
                {section.title}
              </Link>

              <p className="text-white/70 text-sm mb-6">
                {section.description}
              </p>

              {/* Sub-links */}
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center text-lg font-body font-medium transition hover:text-accent-gold group"
                    >
                      <ArrowRight className="w-5 h-5 mr-3 transition group-hover:translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center border-t border-white/20 pt-8">
          <h4 className="text-xl font-heading mb-4">
            Ready to discuss your project?
          </h4>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex px-8 py-3 bg-accent-gold text-white font-bold rounded-lg shadow-xl ring-2 ring-accent-gold/30 hover:bg-accent-gold hover:shadow-2xl hover:ring-accent-gold/50 transition-all duration-300"
          >
            Request Proposal Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

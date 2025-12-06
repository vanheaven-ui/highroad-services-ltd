"use client";

import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import React, { JSX, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import FullMenuDrawer from "./FullMenuDrawer";

// --------------------------------------------------------
// --- Navigation Links (MODIFIED) ---
// --------------------------------------------------------
const navLinks = [
  // Added Home link
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" }, // Changed from Expertise
  { name: "Projects", href: "/case-studies" }, // Changed from Case Studies
  { name: "Our Team", href: "/experts" }, // Changed from Team & Affiliations
  { name: "Our Approach", href: "/approach" },
];

// --------------------------------------------------------
// --- Framer Motion Variants ---
// --------------------------------------------------------
const listVariants: Variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

// --------------------------------------------------------
// --- Mobile Nav Dropdown Component ---
// --------------------------------------------------------
interface MobileDropdownProps {
  links: typeof navLinks;
  isOpen: boolean;
  onLinkClick: () => void;
  pathname: string;
}

const MobileNavDropdown = ({
  links,
  isOpen,
  onLinkClick,
  pathname,
}: MobileDropdownProps): JSX.Element => (
  <motion.div
    className="absolute top-full mt-2 w-[250px] bg-white dark:bg-primary shadow-2xl rounded-xl overflow-hidden right-1/2 translate-x-1/2 border border-gray-100 dark:border-gray-700"
    variants={listVariants}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    style={{ pointerEvents: isOpen ? "auto" : "none" }}
  >
    <motion.div className="flex flex-col p-4 space-y-2">
      {/* Navigation Links */}
      {links.map((link) => {
        // MODIFIED: Corrected isActive check for the Home link ("/")
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <motion.div variants={itemVariants} key={link.name}>
            <Link
              href={link.href}
              onClick={onLinkClick}
              className={`
                w-full block px-4 py-2 text-sm font-semibold uppercase rounded-lg transition duration-150 text-center relative
                ${
                  isActive
                    ? "bg-accent-gold text-primary border-b-[3px] border-accent-gold pb-1"
                    : "text-primary dark:text-white hover:bg-accent-gold dark:hover:bg-accent-gold hover:text-primary"
                }
              `}
            >
              {link.name}
            </Link>
          </motion.div>
        );
      })}

      {/* Contact Icons */}
      <motion.div
        variants={itemVariants}
        className="pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-center space-x-6"
      >
        <a
          href="tel:+256772688639"
          onClick={onLinkClick}
          className="p-2 rounded-full text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="mailto:highroadservicesltd@gmail.com"
          onClick={onLinkClick}
          className="p-2 rounded-full text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Email us"
        >
          <Mail className="h-5 w-5" />
        </a>
      </motion.div>
    </motion.div>
  </motion.div>
);

// --------------------------------------------------------
// --- Animated Grid Icon Component (No changes) ---
// --------------------------------------------------------
interface AnimatedGridIconProps {
  isOpen: boolean;
  color: string;
}

const circleProps = {
  r: 3,
  vectorEffect: "non-scaling-stroke",
  fill: "currentColor",
};

const AnimatedGridIcon = ({ isOpen, color }: AnimatedGridIconProps) => {
  const iconVariants: Variants = {
    closed: { rotate: 0, transition: { duration: 0.3 } },
    open: { rotate: 45, transition: { duration: 0.3 } },
  };

  const GridPoints = [
    { cx: 7, cy: 7 },
    { cx: 23, cy: 7 },
    { cx: 7, cy: 23 },
    { cx: 23, cy: 23 },
  ];

  const GridPointsOpen = [
    { cx: 15, cy: 3 },
    { cx: 27, cy: 15 },
    { cx: 15, cy: 27 },
    { cx: 3, cy: 15 },
  ];

  return (
    <motion.div
      variants={iconVariants}
      animate={isOpen ? "open" : "closed"}
      className="w-6 h-6 flex items-center justify-center"
      style={{ color }}
    >
      <motion.svg
        viewBox="0 0 30 30"
        className="w-6 h-6"
        overflow="visible"
        preserveAspectRatio="none"
      >
        {GridPoints.map((point, index) => (
          <motion.circle
            key={index}
            {...circleProps}
            animate={{
              cx: isOpen ? GridPointsOpen[index].cx : point.cx,
              cy: isOpen ? GridPointsOpen[index].cy : point.cy,
            }}
            transition={{ duration: 0.3, delay: isOpen ? index * 0.05 : 0 }}
          />
        ))}
      </motion.svg>
    </motion.div>
  );
};

// --------------------------------------------------------
// --- Stylistic Logo Component (No changes) ---
// --------------------------------------------------------
interface LogoProps {
  isActive: boolean;
  nonActiveColor: string;
  iconColor: string;
}

const StylisticLogo = ({ isActive, nonActiveColor, iconColor }: LogoProps) => (
  <div className="relative flex flex-col items-start">
    {/* HighRoad Text */}
    <span
      className="text-2xl font-heading font-black nav-text relative"
      style={{ color: isActive ? "#CFA83B" : nonActiveColor }}
    >
      HighRoad
    </span>

    {/* Curved Element (SVG Arc/Swoosh above the text) */}
    <svg
      className="absolute -top-1 -right-1 w-20 h-10 pointer-events-none"
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 80 40 Q 50 10 20 40"
        stroke="#0b2545"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
        style={{ filter: "drop-shadow(0 1px 2px rgba(207, 168, 59, 0.3))" }}
      />
    </svg>

    {/* Services Ltd Subscript */}
    <span
      className="text-xs font-semibold uppercase tracking-widest mt-[-4px] ml-1 nav-logo-sub"
      style={{ color: iconColor, verticalAlign: "sub", fontSize: "0.65em" }}
    >
      Services Ltd
    </span>
  </div>
);

// --------------------------------------------------------
// --- Main Navbar Component ---
// --------------------------------------------------------
export default function Navbar(): JSX.Element {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 100;
    if (scrolled !== isScrolled) setIsScrolled(scrolled);
  });

  const navVariants: Variants = {
    top: { backgroundColor: "rgba(255, 255, 255, 0.95)", borderRadius: 50 },
    scrolled: { backgroundColor: "rgba(11, 37, 69, 1)", borderRadius: 0 },
  };

  const nonActiveColor = isScrolled ? "#FFFFFF" : "#0B2545";
  const iconColor = isScrolled ? "#CFA83B" : "#0B2545";
  const isLogoActive = pathname === "/";

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-6">
        <motion.nav
          className="shadow-xl rounded-full p-2 border border-gray-100 flex items-center justify-between transition-none"
          variants={navVariants}
          initial="top"
          animate={isScrolled ? "scrolled" : "top"}
          transition={{ duration: 0.2 }}
        >
          {/* Logo */}
          <Link href="/" className="p-2">
            <StylisticLogo
              isActive={isLogoActive}
              nonActiveColor={nonActiveColor}
              iconColor={iconColor}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => {
              // MODIFIED: Corrected isActive check for the Home link ("/")
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              // Conditional classes for base state (no inline color needed)
              const baseClasses = clsx(
                "px-4 py-2 rounded-full text-sm font-body font-medium transition duration-200 uppercase tracking-wide nav-link relative group",
                {
                  // Non-active base
                  "text-primary": !isScrolled && !isActive,
                  "text-white": isScrolled && !isActive,
                  // Active base (combined for both scrolled/non-scrolled)
                  "text-primary bg-accent-gold": isActive,
                }
              );

              const activeBorderStyle = isActive
                ? { borderBottomWidth: 3, paddingBottom: "5px" }
                : { borderBottomWidth: 0, paddingBottom: "8px" };

              return (
                <div
                  key={link.name}
                  className="flex relative overflow-visible"
                  style={{ borderBottomColor: "#CFA83B", ...activeBorderStyle }}
                >
                  <Link
                    href={link.href}
                    className={clsx(baseClasses, {
                      // Hovers (only on non-active)
                      "hover:bg-accent-gold hover:text-primary": !isActive,
                      // Active doesn't need hover, but you could add if desired
                    })}
                  >
                    {link.name}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent-gold transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 text-primary rounded-full hover:bg-gray-100 transition nav-icon shadow-inner"
              aria-label="Toggle main navigation links"
            >
              <AnimatedGridIcon isOpen={isMobileMenuOpen} color={iconColor} />
            </button>
            <MobileNavDropdown
              links={navLinks}
              isOpen={isMobileMenuOpen}
              onLinkClick={() => setIsMobileMenuOpen(false)}
              pathname={pathname}
            />
          </div>

          {/* Contact Icons / Drawer */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+256000000000"
              className="hidden lg:flex items-center p-2 rounded-full hover:bg-surface transition"
            >
              <Phone
                className="h-5 w-5 nav-icon"
                style={{ color: iconColor }}
              />
            </a>
            <a
              href="mailto:info@highroad.com"
              className="hidden lg:flex items-center p-2 rounded-full hover:bg-surface transition"
            >
              <Mail className="h-5 w-5 nav-icon" style={{ color: iconColor }} />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-primary rounded-full hover:bg-surface transition nav-icon"
              style={{ color: iconColor }}
              aria-label="Toggle secondary menu drawer"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </motion.nav>
      </header>

      <FullMenuDrawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}

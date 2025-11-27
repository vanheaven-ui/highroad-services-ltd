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
import FullMenuDrawer from "./FullMenuDrawer";

const navLinks = [
  { name: "About Us", href: "/about" }, // <-- NEW LINK ADDED
  { name: "Expertise", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Team & Affiliations", href: "/experts" },
  { name: "Our Approach", href: "/approach" },
];
// --------------------------------------------------------
// --- FRAMER MOTION VARIANTS ---
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
// --- Liquid Gold Ripple Component (Fixed) ---
// --------------------------------------------------------
const LiquidGoldRipple = () => (
  <motion.div
    className="absolute inset-0 rounded-full opacity-0 blur-0 z-0"
    initial={{ scale: 0, opacity: 0, filter: "blur(0px)" }}
    whileHover={{
      scale: 2,
      opacity: [0.6, 0.4, 0.2, 0],
      filter: "blur(12px)",
    }}
    transition={{
      scale: { duration: 0.8, ease: "easeOut" },
      opacity: { duration: 1.2, ease: "easeInOut" },
      filter: { duration: 0.8, ease: "easeOut" },
    }}
    style={{
      background:
        "radial-gradient(circle, #CFA83B40 0%, #CFA83B20 50%, #CFA83B10 80%, transparent 100%)",
    }}
  />
);
// --------------------------------------------------------
// --- 1. Mobile Nav Dropdown Component (Updated) ---
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
      {/* 1. Navigation Links */}
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href) && link.href !== "/";
        return (
          <motion.div variants={itemVariants} key={link.name}>
            <Link
              href={link.href}
              onClick={onLinkClick}
              className={`
                w-full block px-4 py-2 text-sm font-semibold uppercase rounded-lg transition duration-150 text-center relative
                ${
                isActive
                  ? "bg-accentGold text-primary border-b-[3px] border-accentGold pb-1"
                  : "text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }
              `}
            >
              {/* Liquid Gold Ripple (now without overflow-hidden on parent) */}
              {!isActive && <LiquidGoldRipple />}
              {link.name}
            </Link>
          </motion.div>
        );
      })}
      {/* 2. Contact Icons Section (New) */}
      <motion.div
        variants={itemVariants}
        className="pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-center space-x-6"
      >
        {/* Phone Icon Link */}
        <a
          href="tel:+256000000000"
          onClick={onLinkClick}
          className="p-2 rounded-full text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>
        {/* Mail Icon Link */}
        <a
          href="mailto:info@highroad.com"
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
// --- 2. Unique Animated Grid Icon Component ---
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
// --- Main Navbar Component (Updated CTA Section) ---
// --------------------------------------------------------
export default function Navbar(): JSX.Element {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 100;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  });
  const navVariants: Variants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderRadius: 50,
    },
    scrolled: {
      backgroundColor: "rgba(11, 37, 69, 1)",
      borderRadius: 0,
    },
  };
  const nonActiveColor = isScrolled ? "#FFFFFF" : "#0B2545";
  const iconColor = isScrolled ? "#CFA83B" : "#0B2545";
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
          {/* SECTION 1: Logo/Brand (Left) */}
          <Link href="/" className="flex items-center space-x-2 p-2">
            <span
              className={`text-2xl font-heading font-black nav-text ${
                pathname === "/"
                  ? "text-accentGold active-text"
                  : "text-primary"
              }`}
              style={{ color: pathname === "/" ? "#CFA83B" : nonActiveColor }}
            >
              HighRoad
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-widest hidden sm:inline nav-logo-sub"
              style={{ color: iconColor }}
            >
              Services Ltd
            </span>
          </Link>
          {/* SECTION 2: Navigation Links (Center) */}
          {/* 1. Desktop Links (lg:flex) */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => {
              const isActive =
                pathname.startsWith(link.href) && link.href !== "/";
              const linkColor = isActive
                ? isScrolled
                  ? "#FFFFFF"
                  : "#0B2545"
                : nonActiveColor;
              const activeBorderStyle = isActive
                ? { borderBottomWidth: 3, paddingBottom: "5px" }
                : { borderBottomWidth: 0, paddingBottom: "8px" };
              return (
                <div
                  key={link.name}
                  className="flex relative overflow-visible" // Added overflow-visible to allow ripple expansion
                  style={{ borderBottomColor: "#CFA83B", ...activeBorderStyle }}
                >
                  <Link
                    href={link.href}
                    className={`
                      px-4 py-2 rounded-full text-sm font-body font-medium transition duration-200 uppercase tracking-wide nav-link relative group
                      ${
                      isActive
                        ? "bg-accentGold text-primary active"
                        : "text-primary"
                    }
                    `}
                    style={{
                      color: linkColor,
                      ...activeBorderStyle,
                    }}
                  >
                    {/* Liquid Gold Ripple (now without overflow-hidden) */}
                    {!isActive && <LiquidGoldRipple />}
                    {link.name}
                    {!isActive && (
                      <span
                        className={`
                          absolute bottom-0 left-0 w-full h-[3px] bg-accentGold
                          transform scale-x-0 transition-transform duration-300 ease-out origin-center
                          group-hover:scale-x-100
                        `}
                      ></span>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
          {/* 2. Mobile Menu Toggle & Dropdown (Center, Hidden on lg and up) */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 text-primary rounded-full hover:bg-gray-100 transition nav-icon shadow-inner"
              aria-label="Toggle main navigation links"
            >
              {/* UNIQUE ICON: Animated Grid/Dots Icon (Center) */}
              <AnimatedGridIcon isOpen={isMobileMenuOpen} color={iconColor} />
            </button>
            {/* Render the Mobile Dropdown (Now includes contact icons) */}
            <MobileNavDropdown
              links={navLinks}
              isOpen={isMobileMenuOpen}
              onLinkClick={() => setIsMobileMenuOpen(false)}
              pathname={pathname}
            />
          </div>
          {/* SECTION 3: Contact/CTAs (Right) */}
          <div className="flex items-center space-x-4">
            {/* Phone and Mail Icons - Visible only on large screens (lg+) */}
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
            {/* Hamburger Menu Toggle (Far Right - Restored) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-primary rounded-full hover:bg-surface transition nav-icon"
              style={{ color: iconColor }}
              aria-label="Toggle secondary menu drawer"
            >
              {/* Standard Menu/X for the Full Drawer */}
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

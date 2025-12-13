"use client";

import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import React, {
  JSX,
  useState,
  useRef,
  useEffect,
  forwardRef,
  useMemo,
} from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import FullMenuDrawer from "./FullMenuDrawer";
import { services } from "@/data/services";
import ThemeSwitcher from "./ThemeSwitcher";

// IMPORTANT: Import the ActionModalLink component
import ActionModalLink from "./ActionModalLink";

// --- Types ---
interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

interface ServiceLink {
  name: string;
  href: string;
}

// --- Shared Variants (Unchanged) ---
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

const submenuVariants: Variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// --- Nav Links (Unchanged) ---
const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Projects", href: "/case-studies" },
  { name: "Our Approach", href: "/approach" },
  { name: "Contact Us", href: "/contact" },
] as const;

// --- Services Dropdown (Unchanged) ---
const servicesDropdown: ServiceLink[] = services.map((service) => ({
  name: service.title,
  href: `/services/${service.id}`,
}));

// --- NEW ACTION LINK FOR NAVBAR UTILITY/MOBILE ---
interface NavActionLinkProps {
  href: string;
  icon: React.ElementType;
  iconColor: string;
  isMobile?: boolean;
  onLinkClick: () => void;
}

const NavActionLink: React.FC<NavActionLinkProps> = ({
  href,
  icon: Icon,
  iconColor,
  isMobile = false,
  onLinkClick,
}) => {
  const label = useMemo(() => {
    return href.replace(/^(mailto|tel):/, "");
  }, [href]);

  const baseClasses = clsx("flex items-center p-2 rounded-full transition", {
    "hidden lg:flex hover:bg-surface": !isMobile,
    "text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800":
      isMobile,
  });

  return (
    <ActionModalLink href={href} label={label}>
      <span
        onClick={onLinkClick}
        className={baseClasses}
        aria-label={Icon === Phone ? "Call us" : "Email us"}
      >
        <Icon
          className={clsx("h-5 w-5 nav-icon", {
            "h-5 w-5": isMobile,
          })}
          style={{ color: isMobile ? undefined : iconColor }}
        />
      </span>
    </ActionModalLink>
  );
};

// --- Mobile Dropdown (Unchanged) ---
interface MobileDropdownProps {
  links: NavLink[];
  servicesLinks: ServiceLink[];
  isOpen: boolean;
  onLinkClick: () => void;
  pathname: string;
  onClose: () => void;
}

const MobileNavDropdown = forwardRef<HTMLDivElement, MobileDropdownProps>(
  ({ links, servicesLinks, isOpen, onLinkClick, pathname, onClose }, ref) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setServicesOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <motion.div
        ref={ref}
        className="absolute top-full mt-2 w-[250px] bg-white dark:bg-primary shadow-2xl rounded-xl overflow-hidden right-1/2 translate-x-1/2 border border-gray-100 dark:border-gray-700"
        variants={listVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.div ref={dropdownRef} className="flex flex-col p-4 space-y-2">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            if (link.hasDropdown) {
              return (
                <motion.div variants={itemVariants} key={link.name}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={clsx(
                      "w-full flex items-center justify-between px-4 py-2 text-sm font-bold text-primary dark:text-white opacity-70 uppercase tracking-wide rounded-lg transition duration-150 text-left group",
                      {
                        "bg-gray-100 dark:bg-gray-800": servicesOpen,
                        "hover:bg-gray-100 dark:hover:bg-gray-800":
                          !servicesOpen,
                      }
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 group-hover:text-accent-gold ${
                        servicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <motion.div
                    variants={submenuVariants}
                    initial="closed"
                    animate={servicesOpen ? "open" : "closed"}
                    className="overflow-hidden"
                  >
                    <div className="space-y-1 pl-4 border-t border-gray-200 dark:border-gray-700 pt-2">
                      {servicesLinks.map((service, idx) => (
                        <motion.div
                          key={service.name}
                          variants={itemVariants}
                          className="overflow-hidden"
                        >
                          <Link
                            href={service.href}
                            onClick={onLinkClick}
                            className={clsx(
                              "w-full block px-4 py-1 text-xs font-subheading rounded-lg transition duration-150 relative text-left",
                              {
                                "bg-accent-gold text-primary":
                                  pathname.startsWith(service.href),
                                "text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800":
                                  !pathname.startsWith(service.href),
                              }
                            )}
                          >
                            {service.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            }

            return (
              <motion.div variants={itemVariants} key={link.name}>
                <Link
                  href={link.href}
                  onClick={onLinkClick}
                  className={clsx(
                    "w-full block px-4 py-2 text-sm font-subheading font-semibold uppercase rounded-lg transition duration-150 text-center relative",
                    {
                      "bg-accent-gold text-primary border-b-[3px] border-accent-gold pb-1":
                        isActive,
                      "text-primary dark:text-white hover:bg-accent-gold dark:hover:bg-accent-gold hover:text-primary":
                        !isActive,
                    }
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}

          {/* MOBILE CONTACT LINKS */}
          <motion.div
            variants={itemVariants}
            className="pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-center space-x-6"
          >
            <NavActionLink
              href="tel:+256772688639"
              icon={Phone}
              iconColor=""
              isMobile={true}
              onLinkClick={onLinkClick}
            />
            <NavActionLink
              href="mailto:highroadservicesltd@gmail.com"
              icon={Mail}
              iconColor=""
              isMobile={true}
              onLinkClick={onLinkClick}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

MobileNavDropdown.displayName = "MobileNavDropdown";

// --- Desktop Services Dropdown (Unchanged) ---
interface ServicesDropdownProps {
  isScrolled: boolean;
  services: ServiceLink[];
  pathname: string;
}

const DesktopServicesDropdown = ({
  isScrolled,
  services,
  pathname,
}: ServicesDropdownProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = clsx(
    "px-4 py-2 rounded-full font-subheading font-medium transition duration-200 uppercase tracking-wide nav-link relative flex items-center space-x-1",
    {
      "text-primary": !isScrolled,
      "text-white": isScrolled,
    }
  );

  const activeService = services.some((service) =>
    pathname.startsWith(service.href)
  );

  const activeClasses = clsx(baseClasses, {
    "text-primary bg-accent-gold": activeService,
    "hover:bg-accent-gold hover:text-primary": !activeService,
  });

  const iconColor = activeService
    ? "text-primary"
    : isScrolled
    ? "text-white"
    : "text-primary";

  return (
    <div
      className="flex relative overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={activeClasses}
        style={{ fontSize: "13px", cursor: "pointer" }}
      >
        <span>Services</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isHovered ? "rotate-180" : "rotate-0"
          }`}
          style={{ color: iconColor }}
        />
        {activeService && (
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent-gold" />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10, pointerEvents: "none" }}
        animate={
          isHovered
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: 10, pointerEvents: "none" }
        }
        transition={{ duration: 0.2 }}
        className="absolute top-full mt-2 w-64 bg-white dark:bg-primary shadow-2xl rounded-xl p-3 border border-gray-100 dark:border-gray-700"
        style={{ zIndex: 60 }}
      >
        <div className="flex flex-col space-y-2">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className={clsx(
                "block px-3 py-2 text-sm rounded-lg transition duration-150 text-left",
                {
                  "bg-accent-gold text-primary font-semibold":
                    pathname.startsWith(service.href),
                  "text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800":
                    !pathname.startsWith(service.href),
                }
              )}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// --- Animated Grid Icon (Unchanged) ---
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

// --- Logo (Unchanged) ---
interface LogoProps {
  isActive: boolean;
  nonActiveColor: string;
  iconColor: string;
}

const StylisticLogo = ({ isActive, nonActiveColor, iconColor }: LogoProps) => (
  <div className="relative flex flex-col items-start">
    <span
      className="text-2xl font-heading font-black nav-text relative"
      style={{ color: isActive ? "#CFA83B" : nonActiveColor }}
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
        stroke="#0b2545"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
        style={{ filter: "drop-shadow(0 1px 2px rgba(207, 168, 59, 0.3))" }}
      />
    </svg>
    <span
      className="text-xs font-subheading font-semibold uppercase tracking-widest mt-[-4px] ml-1 nav-logo-sub"
      style={{ color: iconColor, verticalAlign: "sub", fontSize: "0.65em" }}
    >
      Services Ltd
    </span>
  </div>
);

// --- Navbar ---
export default function Navbar(): JSX.Element {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 100;
    if (scrolled !== isScrolled) setIsScrolled(scrolled);
  });

  // Click outside handler for mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const navVariants: Variants = {
    top: { backgroundColor: "rgba(255, 255, 255, 0.95)", borderRadius: 50 },
    scrolled: { backgroundColor: "rgba(11, 37, 69, 1)", borderRadius: 0 },
  };

  const nonActiveColor = isScrolled ? "#FFFFFF" : "#0B2545";
  const iconColor = isScrolled ? "#CFA83B" : "#0B2545";
  const isLogoActive = pathname === "/";

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4 sm:px-6">
        <motion.nav
          className="shadow-xl rounded-full border border-gray-100 dark:border-gray-700 flex items-center justify-between transition-none px-4 py-2 md:px-6"
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
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              const baseClasses = clsx(
                "px-4 py-2 rounded-full font-subheading font-medium transition duration-200 uppercase tracking-wide nav-link relative group",
                {
                  "text-primary": !isScrolled && !isActive,
                  "text-white": isScrolled && !isActive,
                  "text-primary bg-accent-gold": isActive,
                }
              );

              const activeBorderStyle = isActive
                ? { borderBottomWidth: 3, paddingBottom: "5px" }
                : { borderBottomWidth: 0, paddingBottom: "8px" };

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="flex relative overflow-visible"
                    style={{
                      borderBottomColor: "#CFA83B",
                      ...activeBorderStyle,
                    }}
                  >
                    <DesktopServicesDropdown
                      isScrolled={isScrolled}
                      services={servicesDropdown}
                      pathname={pathname}
                    />
                  </div>
                );
              }

              return (
                <div
                  key={link.name}
                  className="flex relative overflow-visible"
                  style={{ borderBottomColor: "#CFA83B", ...activeBorderStyle }}
                >
                  <Link
                    href={link.href}
                    className={clsx(baseClasses, {
                      "hover:bg-accent-gold hover:text-primary": !isActive,
                    })}
                    style={{ fontSize: "13px" }}
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

          {/* Right side controls - unified group for better mobile layout */}
          <div className="flex items-center space-x-2">
            {/* Mobile Navigation Hamburger */}
            <div className="lg:hidden relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition shadow-inner"
                aria-label="Toggle main navigation links"
                style={{ color: iconColor }}
              >
                <AnimatedGridIcon isOpen={isMobileMenuOpen} color={iconColor} />
              </button>
              <MobileNavDropdown
                ref={mobileDropdownRef}
                links={navLinks}
                servicesLinks={servicesDropdown}
                isOpen={isMobileMenuOpen}
                onLinkClick={() => setIsMobileMenuOpen(false)}
                pathname={pathname}
                onClose={() => setIsMobileMenuOpen(false)}
              />
            </div>

            {/* Contact Icons (hidden on very small screens if needed - currently visible on all) */}
            <div className="hidden sm:flex items-center space-x-2">
              <NavActionLink
                href="tel:+256772688639"
                icon={Phone}
                iconColor={iconColor}
                onLinkClick={() => {}}
              />
              <NavActionLink
                href="mailto:highroadservicesltd@gmail.com"
                icon={Mail}
                iconColor={iconColor}
                onLinkClick={() => {}}
              />
            </div>

            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Full Menu Drawer Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-full hover:bg-surface transition"
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

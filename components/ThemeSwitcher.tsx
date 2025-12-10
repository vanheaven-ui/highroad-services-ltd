"use client";

import React, { JSX, useState, useRef, useEffect } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Framer Motion Variants ---
const listVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2, staggerChildren: 0.05, staggerDirection: -1 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      staggerChildren: 0.05,
    },
  },
};
// ------------------------------

// Shared Tooltip Component (Desktop only) - Hoisted outside
const Tooltip: React.FC<{ showTooltip: boolean }> = ({ showTooltip }) => (
  <AnimatePresence>
    {showTooltip && (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.9 }}
        transition={{ duration: 0.15 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-primary/95 dark:bg-primary/95 text-accent-gold text-xs font-medium rounded-md whitespace-nowrap shadow-lg border border-accent-gold/20 z-50"
        style={{ pointerEvents: "none" }}
      >
        <div className="relative">
          Switch Theme Mode
          {/* Unique arrow pointing up */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/95 dark:border-t-primary/95" />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function ThemeSwitcher(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const themes: {
    name: string;
    value: "light" | "dark" | "system";
    icon: React.ElementType;
  }[] = [
    { name: "Light", value: "light", icon: Sun },
    { name: "Dark", value: "dark", icon: Moon },
    { name: "System", value: "system", icon: Monitor },
  ];

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    if (window.innerWidth >= 1024) {
      setIsHovered(false); // Close expanded on desktop after selection
    } else {
      setIsMenuOpen(false); // Close mobile menu
    }
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen]);

  // Render active-only for compact desktop/mobile toggle view
  const renderActiveOnly = () => {
    const activeTheme = themes.find((t) => t.value === theme);
    if (!activeTheme) return null;

    const Icon = activeTheme.icon;

    return (
      <motion.button
        onClick={() => handleThemeChange(activeTheme.value)} // Still clickable for consistency
        className={`
          relative z-10 flex items-center justify-center p-2.5 rounded-full transition-colors duration-300
          text-primary dark:text-white
          hover:text-accent-gold dark:hover:text-accent-gold
        `}
        aria-label={`Current theme: ${activeTheme.name}`}
        whileTap={{ scale: 0.95 }}
      >
        {/* Active Background Indicator */}
        <motion.div
          layoutId="active-theme-background"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute inset-0 bg-primary dark:bg-primary rounded-full shadow-md"
        />

        {/* Icon */}
        <span className="relative z-20">
          <Icon className="h-5 w-5 text-accent-gold" />
        </span>
      </motion.button>
    );
  };

  // Render full buttons for expanded/mobile popup
  const renderButtons = (className: string) => {
    return (
      <motion.div
        className={className}
        variants={listVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {themes.map(({ name, value, icon: Icon }) => {
          const isActive = theme === value;

          return (
            <motion.button
              key={value}
              onClick={() => handleThemeChange(value)}
              className={`
                relative z-10 flex items-center justify-center p-2.5 rounded-full transition-colors duration-300
                text-primary dark:text-white
                hover:text-accent-gold dark:hover:text-accent-gold
                ${isActive ? "" : "opacity-70"}
              `}
              aria-label={`Switch to ${name} theme`}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active Background Indicator */}
              {isActive && (
                <motion.div
                  layoutId="active-theme-background"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute inset-0 bg-primary dark:bg-primary rounded-full shadow-md"
                />
              )}

              {/* Icon */}
              <span
                className={`relative z-20 transition-colors duration-300 ${
                  isActive
                    ? "text-accent-gold" // Force gold when active for maximum visibility
                    : "text-inherit"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* 1. Desktop: Compact Active + Expand on Hover */}
      <div className="hidden lg:block relative">
        <div
          className="flex items-center justify-center p-1.5 bg-white/70 dark:bg-primary/50 backdrop-blur-md rounded-full shadow-xl border border-gray-100 dark:border-primary/10 overflow-hidden w-32"
          onMouseEnter={() => {
            setIsHovered(true);
            setShowTooltip(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setShowTooltip(false);
          }}
        >
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-1"
              >
                {renderButtons("flex items-center space-x-1")}
              </motion.div>
            ) : (
              <motion.div
                key="compact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center items-center"
              >
                {renderActiveOnly()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Tooltip showTooltip={showTooltip} />
      </div>

      {/* 2. Mobile/Medium: Active Icon Toggle + Popup */}
      <div className="lg:hidden relative">
        {/* Toggle Button with Active Icon */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setTimeout(() => setShowTooltip(false), 150)} // Delay to allow menu interaction
          className="p-2.5 rounded-full text-primary dark:text-white bg-white/70 dark:bg-primary/50 backdrop-blur-md shadow-xl border border-gray-100 dark:border-primary/10 hover:bg-gray-100 dark:hover:bg-primary/70 transition relative z-10"
          aria-label="Toggle theme selection"
          whileTap={{ scale: 0.95 }}
        >
          {renderActiveOnly()}
        </motion.button>

        {/* Animated Pop-up Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="absolute top-full right-0 mt-2 z-50 origin-top-right"
            >
              {renderButtons(
                "flex flex-col space-y-2 p-3 bg-white/90 dark:bg-primary/90 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 dark:border-primary/20"
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip for Mobile/Medium (on focus) */}
        <Tooltip showTooltip={showTooltip} />
      </div>
    </div>
  );
}

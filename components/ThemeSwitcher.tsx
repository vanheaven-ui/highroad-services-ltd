"use client";

import React, { JSX, useState } from "react";
import { Moon, Sun, Monitor, Palette } from "lucide-react";
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

export default function ThemeSwitcher(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

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
                // Default Inactive Color: White icon in dark mode, Primary (dark) icon in light mode
                text-primary dark:text-white
                // Hover Color: Always Gold
                hover:text-accent-gold dark:hover:text-accent-gold
                // Opacity when not active
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
                  // Ensure active background is strong color
                  className="absolute inset-0 bg-primary dark:bg-primary rounded-full shadow-md"
                />
              )}

              {/* Icon (above the motion.div background) */}
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
    <div className="relative">
      {/* 1. Full Display (Large Screens and Up) */}
      {renderButtons(
        "hidden lg:flex items-center p-1.5 bg-white/70 dark:bg-primary/50 backdrop-blur-md rounded-full shadow-xl border border-gray-100 dark:border-primary/10"
      )}

      {/* 2. Compact Display (Below Large Screens) */}
      <div className="lg:hidden">
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2.5 rounded-full text-primary dark:text-white bg-white/70 dark:bg-primary/50 backdrop-blur-md shadow-xl border border-gray-100 dark:border-primary/10 hover:bg-gray-100 dark:hover:bg-primary/70 transition"
          aria-label="Toggle theme selection"
          whileTap={{ scale: 0.95 }}
        >
          <Palette className="h-5 w-5" />
        </motion.button>

        {/* Animated Pop-up Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 z-50 origin-top-right"
            >
              {renderButtons(
                "flex flex-col space-y-2 p-3 bg-white/90 dark:bg-primary/90 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 dark:border-primary/20"
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

"use client";

import React, { JSX } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function ThemeSwitcher(): JSX.Element {
  const { theme, setTheme } = useTheme();

  const themes: {
    name: string;
    value: "light" | "dark" | "system";
    icon: React.ElementType;
  }[] = [
    { name: "Light", value: "light", icon: Sun },
    { name: "Dark", value: "dark", icon: Moon },
    { name: "System", value: "system", icon: Monitor },
  ];

  return (
    <div className="flex items-center space-x-2 p-2 bg-surface/80 backdrop-blur-sm rounded-xl shadow-lg border border-primary/10">
      {themes.map(({ name, value, icon: Icon }) => (
        <motion.button
          key={value}
          onClick={() => setTheme(value)}
          className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 relative 
                      ${
                        theme === value
                          ? "bg-primary text-accentGold shadow-md"
                          : "text-foreground/60 hover:bg-surface hover:text-primary"
                      }`}
          aria-label={`Switch to ${name} theme`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="h-5 w-5" />

          {/* Active indicator badge */}
          {theme === value && (
            <motion.div
              layoutId="active-theme-indicator"
              className="absolute -top-1 -right-1 w-3 h-3 bg-accentGold rounded-full border-2 border-primary"
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

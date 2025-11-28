"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "highroad-theme";

// Helper function to get the current system theme preference
const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Helper function to handle class application
const applyTheme = (theme: "light" | "dark") => {
  if (typeof document === "undefined") return;
  const html = document.documentElement;

  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize theme from localStorage synchronously
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
    return storedTheme || "system";
  });

  // Force re-render on system theme changes when using "system"
  const [update, setUpdate] = useState(0);

  // Derive resolvedTheme synchronously
  const resolvedTheme = useMemo(() => {
    return theme === "system" ? getSystemTheme() : theme;
  }, [theme, update]);

  // Apply theme class whenever resolvedTheme changes
  useEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme]);

  // Save/remove theme to/from localStorage when theme changes
  useEffect(() => {
    if (theme !== "system") {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } else {
      // If theme is system, remove storage key so we read system default next time
      localStorage.removeItem(THEME_STORAGE_KEY);
    }
  }, [theme]);

  // Handle system preference changes
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => {
        setUpdate((prev) => prev + 1);
      };

      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
    }),
    [theme, resolvedTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

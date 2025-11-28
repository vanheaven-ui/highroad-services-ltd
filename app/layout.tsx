import type { Metadata } from "next";

// Import Google Fonts
import { Merriweather, Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Narbar";
import ConsultationCTAButton from "@/components/ConsultationCTAButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";

// NEW: Theme Provider
import { ThemeProvider } from "@/context/theme-context";

import React, { JSX } from "react";

// -----------------------------
// Custom Font Variables
// -----------------------------
const merriweather = Merriweather({
  variable: "--font-heading",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

// -----------------------------
// Metadata Configuration
// -----------------------------
export const metadata: Metadata = {
  title:
    "HighRoad Services Ltd | PhD-Led Economic Policy & Research in East Africa",

  description:
    "Evidence-based economic consultancy and policy advisory in Uganda. Our PhD economists, affiliated with Makerere and Kyambogo Universities, deliver rigorous data analysis, feasibility studies, and M&E services across East Africa.",

  keywords: [
    "Economic Consultancy Uganda",
    "Policy Advisory East Africa",
    "PhD Economists Kampala",
    "Feasibility Studies",
    "Impact Monitoring and Evaluation",
    "Makerere Kyambogo Research",
  ],

  openGraph: {
    title: "Academic Rigor: Economic Consulting by PhD Scholars | HighRoad",
    description:
      "Delivering data-driven policy and strategy for sustainable growth in Uganda and the EAC region.",
    url: "https://www.highroad-services.vercel.app",
    siteName: "HighRoad Services Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Economic Strategy and Policy Consultants in Kampala",
      },
    ],
    locale: "en_UG",
    type: "website",
  },

  alternates: {
    canonical: "https://www.highroad-services.vercel.app",
  },

  authors: [{ name: "HighRoad Services Ltd" }],
};

// -----------------------------
// Root Layout Component
// -----------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <Navbar />

          <main className="pt-32 md:pt-40">{children}</main>

          <Footer />

          {/* Theme Switcher — fixed top-right */}
          <div className="fixed top-24 right-4 z-50">
            <ThemeSwitcher />
          </div>

          {/* Consultation CTA — fixed bottom-right */}
          <ConsultationCTAButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

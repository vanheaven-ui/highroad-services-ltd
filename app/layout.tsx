import type { Metadata } from "next";

// Import Local Font for Merriweather (Self-Hosted) - REMOVED!
// Import Google Font for Merriweather (REMOTE)
import { Merriweather } from "next/font/google"; // <-- Changed import
// Import Google Font for Inter (Still Remote)
import { Inter } from "next/font/google";

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
// MERRIWEATHER: REVERTED TO GOOGLE FONT
const merriweather = Merriweather({
  // <-- Changed font function name
  variable: "--font-heading",
  // Request the weights 300, 400, 700, and 900 from Google Fonts
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

// INTER: REMAINS AS GOOGLE FONT
const inter = Inter({
  variable: "--font-body",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

// -----------------------------
// Metadata Configuration (CLEANED - UNCHANGED from last request)
// -----------------------------
export const metadata: Metadata = {
  // Title: Focused on core services, removed academic mention
  title:
    "HighRoad Services Ltd | Economic Consulting, Strategy & Training in East Africa",

  // Description: Concise, emphasizes expertise and delivery, removes specific affiliations
  description:
    "Delivering **data-driven economic consulting**, policy advisory, and professional training in Uganda. Our experts provide rigorous analysis, feasibility studies, and Monitoring & Evaluation (M&E) services across East Africa.",

  keywords: [
    "Economic Consultancy Uganda",
    "Policy Advisory East Africa",
    "Economists Kampala",
    "Feasibility Studies",
    "Impact Monitoring and Evaluation",
    "Professional Training Africa",
  ],

  openGraph: {
    // OG Title: Concise, high-level service description
    title: "Strategic Consulting & Policy Expertise | HighRoad Services Ltd",
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
// Root Layout Component (Unchanged)
// -----------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        // The class names here remain correct
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

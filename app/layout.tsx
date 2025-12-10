import type { Metadata } from "next";

// Import Google Font for Merriweather (REMOTE)
import { Merriweather } from "next/font/google";
// Import Google Font for Inter (Still Remote)
import { Inter } from "next/font/google";
// NEW: Import the additional Google Fonts
import { Playfair_Display } from "next/font/google"; // For display/hero elements
import { Raleway } from "next/font/google"; // For subheadings/nav

import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Narbar";
import ConsultationCTAButton from "@/components/ConsultationCTAButton";

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

// NEW: Playfair Display Config
const playfair = Playfair_Display({
  variable: "--font-display",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

// NEW: Raleway Config
const raleway = Raleway({
  variable: "--font-subheading",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// -----------------------------
// Metadata Configuration (CLEANED - UNCHANGED from last request)
// -----------------------------

export const metadata: Metadata = {
  // Page Title
  title: "HighRoad Services Ltd | Economic Consulting, Strategy & Training",

  // Meta Description
  description:
    "Delivering data-driven economic consulting, policy advisory, and professional training worldwide. Our experts provide rigorous analysis, feasibility studies, and Monitoring & Evaluation (M&E) services to international organizations.",

  // SEO Keywords
  keywords: [
    "Economic Consulting Firm",
    "Policy Advisory Services",
    "Econometric Modeling",
    "Feasibility Studies Consultant",
    "Impact Monitoring and Evaluation (M&E)",
    "Causal Inference Consulting",
    "Professional Development Training",
    "Data-Driven Strategy",
    "Global Development Consulting",
  ],

  // OpenGraph Metadata
  openGraph: {
    title: "Strategic Consulting & Policy Expertise | HighRoad Services Ltd",
    description:
      "Delivering data-driven policy and strategy for sustainable global growth.",
    url: "https://www.highroad-services.vercel.app",
    siteName: "HighRoad Services Ltd",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Economic Strategy and Policy Consultants",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Canonical URL
  alternates: {
    canonical: "https://highroad-services-ltd.vercel.app",
  },

  // Authors
  authors: [{ name: "HighRoad Services Ltd" }],

  // Favicon + Icons
  icons: {
    icon: [
      { url: "/assets/favicon.ico", sizes: "any" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/assets/safari-pinned-tab.svg",
        color: "#0b2545",
      },
      {
        rel: "shortcut icon",
        url: "/assets/favicon.ico",
      },
    ],
  },
  metadataBase: new URL("https://highroad-services-ltd.vercel.app"),
};

// -----------------------------
// Root Layout Component (Updated with GSC Meta Tag)
// -----------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="vq7I3LuzNhr-ZvsIahUnxWSeUZ1pFFmDCR5oIwr42YI"
        />
      </head>
      <body
        // The class names here remain correct
        className={`${merriweather.variable} ${inter.variable} ${playfair.variable} ${raleway.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <Navbar />

          <main className="pt-32 md:pt-40">{children}</main>

          <Footer />

          {/* Consultation CTA — fixed bottom-right */}
          <ConsultationCTAButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

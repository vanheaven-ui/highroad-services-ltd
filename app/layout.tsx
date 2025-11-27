import type { Metadata } from "next";
// Import the custom free Google Fonts defined in your project
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import React, { JSX } from "react";
import Navbar from "@/components/Narbar";
import ConsultationCTAButton from "@/components/ConsultationCTAButton";

// Custom Fonts for CSS Variables ---
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

export const metadata: Metadata = {
  // Primary Title
  title:
    "HighRoad Services Ltd | PhD-Led Economic Policy & Research in East Africa",

  // High-Value Meta Description
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

  // Open Graph (for social media sharing)
  openGraph: {
    title: "Academic Rigor: Economic Consulting by PhD Scholars | HighRoad",
    description:
      "Delivering data-driven policy and strategy for sustainable growth in Uganda and the EAC region.",
    url: "https://www.highroad-services.vercel.app", // REMINDER: Replace with actual domain
    siteName: "HighRoad Services Ltd",
    images: [
      {
        url: "/og-image.jpg", // REMINDER: Create this image
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
        <Navbar />
        <main className="pt-32 md:pt-40">
          {children}
        </main>
        <Footer />

        <ConsultationCTAButton />
      </body>
    </html>
  );
}

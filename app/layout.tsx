import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Narbar";
import ConsultationCTAButton from "@/components/ConsultationCTAButton";

import { ThemeProvider } from "@/context/theme-context";

import React, { JSX } from "react";

// -----------------------------
// Self-Hosted Local Fonts – exact file names from your screenshot
// -----------------------------
const merriweather = localFont({
  src: [
    {
      path: "./fonts/merriweather/merriweather-v33-latin-300.woff2",
      weight: "300",
    },
    {
      path: "./fonts/merriweather/merriweather-v33-latin-regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/merriweather/merriweather-v33-latin-700.woff2",
      weight: "700",
    },
    {
      path: "./fonts/merriweather/merriweather-v33-latin-900.woff2",
      weight: "900",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/inter/inter-v20-latin-300.woff2", weight: "300" },
    { path: "./fonts/inter/inter-v20-latin-regular.woff2", weight: "400" },
    { path: "./fonts/inter/inter-v20-latin-600.woff2", weight: "600" },
    { path: "./fonts/inter/inter-v20-latin-700.woff2", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});

const playfair = localFont({
  src: [
    {
      path: "./fonts/playfair-display/playfair-display-v40-latin-regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/playfair-display/playfair-display-v40-latin-700.woff2",
      weight: "700",
    },
    {
      path: "./fonts/playfair-display/playfair-display-v40-latin-900.woff2",
      weight: "900",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const raleway = localFont({
  src: [
    { path: "./fonts/raleway/raleway-v37-latin-300.woff2", weight: "300" },
    { path: "./fonts/raleway/raleway-v37-latin-regular.woff2", weight: "400" },
    { path: "./fonts/raleway/raleway-v37-latin-700.woff2", weight: "700" },
  ],
  variable: "--font-subheading",
  display: "swap",
});

// -----------------------------
// Metadata (I updated the urls to your real domain)
// -----------------------------
export const metadata: Metadata = {
  title: "HighRoad Services Ltd | Economic Consulting, Strategy & Training",
  description:
    "Delivering data-driven economic consulting, policy advisory, and professional training worldwide. Our experts provide rigorous analysis, feasibility studies, and Monitoring & Evaluation (M&E) services to international organizations.",
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
  openGraph: {
    title: "Strategic Consulting & Policy Expertise | HighRoad Services Ltd",
    description:
      "Delivering data-driven policy and strategy for sustainable global growth.",
    url: "https://www.highroadservicesltd.com",
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
  alternates: {
    canonical: "https://www.highroadservicesltd.com",
  },
  authors: [{ name: "HighRoad Services Ltd" }],
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
  metadataBase: new URL("https://www.highroadservicesltd.com"),
};

// -----------------------------
// Root Layout – now 100% working with your exact file names
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0b2545" />
      </head>
      <body
        className={`${merriweather.variable} ${inter.variable} ${playfair.variable} ${raleway.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="pt-32 md:pt-40">{children}</main>
          <Footer />
          <ConsultationCTAButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

import Link from "next/link";
import React, { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    // 1. Add relative positioning to hold the absolute background
    <section className="bg-primary text-white relative overflow-hidden py-20 md:py-28">
      {/* 2. ABSOLUTE SVG BACKGROUND PLACEHOLDER */}
      <div className="absolute inset-0 opacity-10">
        {/* GUIDANCE FOR CLIENT: This SVG pattern should be abstract, geometric, or a subtle map overlay 
            to symbolize data, global reach, or complex systems. It should be light enough not to distract 
            from the text, using the primary color tone.
            */}
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Abstract geometric/data pattern using primary color, highly transparent */}
          <rect width="100%" height="100%" className="fill-primary" />
          <circle
            cx="200"
            cy="150"
            r="100"
            className="fill-accentGold opacity-30"
          />
          <circle
            cx="800"
            cy="450"
            r="150"
            fill="currentColor"
            className="text-accentGold opacity-20"
          />
          <line
            x1="0"
            y1="300"
            x2="1200"
            y2="300"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white opacity-10"
          />
          <line
            x1="600"
            y1="0"
            x2="600"
            y2="600"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white opacity-10"
          />
          {/* The actual SVG should be cleaner and more complex, but this placeholder 
                guides the use of subtle patterns in brand colors.
                */}
        </svg>
      </div>

      {/* 3. Content wrapped in z-10 to stay above the background */}
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left relative z-10">
        <p className="text-sm uppercase tracking-widest text-accentGold mb-2 font-semibold">
          Economic Policy & Strategy by PhD Scholars
        </p>

        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-snug">
          <span className="mr-1">Academic Rigor. Actionable Insights.</span>
          <br className="hidden sm:inline" />
          Transforming Economic Outcomes in Africa.
        </h1>

        <p className="mt-6 max-w-4xl text-lg md:text-xl opacity-90">
          We leverage <strong>advanced econometric models</strong> and{" "}
          <strong>deep regional expertise</strong> delivered by a core team of{" "}
          <strong>PhD economists</strong> affiliated with top Ugandan
          institutions (Makerere and Kyambogo). We ensure sustainable, equitable
          growth across the continent.
        </p>

        {/* Trust Indicators */}
        <div className="mt-8">
          <p className="text-sm italic opacity-75">
            Trusted by Ministries, NGOs, and Development Partners across the
            region.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-accentGold text-white font-bold rounded-lg shadow-xl ring-2 ring-accentGold/30 hover:bg-accent-gold hover:shadow-2xl hover:ring-accentGold/50 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Request Proposal Now
          </Link>
          <Link
            href="/experts" // Link to a dedicated Team/Expert page
            className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-primary font-semibold transition"
          >
            Meet Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
}

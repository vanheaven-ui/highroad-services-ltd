"use client";

import {
  Aperture,
  Search,
  TrendingUp,
  Send,
  CheckCircle,
  Brain,
  Target,
} from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";

// --- DATA STRUCTURES ---

const fourPillars = [
  {
    icon: Aperture,
    title: "1. Define the Causal Question",
    description:
      "We start not with a solution, but with a precise, academically-sound research question. This ensures project objectives are measurable, focused, and aligned with client goals.",
    color: "bg-blue-500/10 text-blue-700",
  },
  {
    icon: Search,
    title: "2. Gather & Validate Data",
    description:
      "Executing multi-modal data collection (field surveys, public records, proprietary data) with industry-leading quality assurance protocols to ensure validity and reliability.",
    color: "bg-green-500/10 text-green-700",
  },
  {
    icon: TrendingUp,
    title: "3. Analyze with Rigor",
    description:
      "Application of advanced econometric modeling, causal inference techniques (e.g., DiD, RCTs), and statistical software (Stata/R) to turn complex data into verifiable evidence.",
    color: "bg-red-500/10 text-red-700",
  },
  {
    icon: Send,
    title: "4. Deliver Actionable Strategy",
    description:
      "Translating technical findings into clear, implementable policy recommendations, strategic plans, and investment roadmaps for immediate client action.",
    color: "bg-yellow-500/10 text-yellow-700",
  },
];

const methodologyHighlights = [
  {
    icon: CheckCircle,
    title: "Causal Inference Focus",
    description:
      "We prioritize establishing causality (X leads to Y) over mere correlation, offering greater confidence in policy and investment outcomes.",
  },
  {
    icon: Brain,
    title: "Econometric Modeling",
    description:
      "Advanced model construction and statistical analysis are standard, not exceptions, ensuring our forecasts and projections withstand scrutiny.",
  },
  {
    icon: Target,
    title: "Adaptive Learning Loops",
    description:
      "Our M&E systems are designed for real-time feedback, allowing clients to adapt project strategies mid-stream for optimal impact.",
  },
];

// --- MAIN PAGE COMPONENT ---

export default function ApproachPage(): JSX.Element {
  return (
    <main>
      {/* 🚀 1. Unique Philosophy Header (Setting the Tone) */}
      <section className="bg-primary pt-24 pb-16 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-snug">
            The HighRoad Standard: Rigor, Evidence, Impact.
          </h1>
          <p className="mt-6 text-white/80 text-xl max-w-3xl mx-auto font-body">
            Our approach is rooted in **academic excellence** and **practical
            relevance**. We apply the gold standard of research
            methodology—usually reserved for PhD dissertations—to solve
            real-world economic and policy challenges.
          </p>
        </div>
      </section>

      {/* --- */}

      {/* ⚙️ 2. The Four-Pillar Process (Visually Structured) */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
            Our Consulting Lifecycle
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            The Four Pillars of Strategic Partnership
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fourPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg border-t-8 border-primary/5 hover:border-accentGold transition duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`w-8 h-8 ${pillar.color.split(" ")[1]}`} />{" "}
                  {/* Extracts the text color class */}
                </div>
                <h4 className="text-xl font-heading font-bold text-primary mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-gray-600 font-body leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- */}

      {/* 🔬 3. Methodological Rigor Section (The Proof of Authority) */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Title Block */}
            <div className="lg:col-span-1">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
                Beyond Simple Analysis
              </h2>
              <h3 className="text-3xl font-heading font-black text-primary mt-2 mb-4">
                Our Method is Our Edge
              </h3>
              <p className="text-gray-700 font-body">
                We utilize methods favored by research institutions and central
                banks, ensuring our insights are robust, peer-review ready, and
                provide<span className="ml-1 text-accentGold font-bold">quantitative confidence</span>.
              </p>
              <Link
                href="/experts"
                className="mt-6 inline-flex items-center text-primary font-bold border-b-2 border-primary/50 hover:border-accentGold transition"
              >
                Meet the PhD Economists →
              </Link>
            </div>

            {/* Highlights Grid */}
            <div className="lg:col-span-2 space-y-6">
              {methodologyHighlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-6 rounded-xl shadow border-l-4 border-accentGold/50"
                >
                  <item.icon className="w-6 h-6 mr-4 mt-1 text-accentGold flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-primary">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 🤝 4. Client Collaboration Model (Conversion CTA) */}
      <section className="bg-primary/95 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready for an Evidence-Based Partnership?
          </h2>
          <p className="text-lg text-white/80 mb-8 font-body">
            Our collaborative model ensures full transparency, continuous client
            engagement, and tailored output that fits your organizational needs
            and capacity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-accent-gold text-primary font-bold rounded-full shadow-2xl text-xl hover:bg-yellow-500 hover:text-white transition transform hover:scale-105"
          >
            Define Your Project Scope Today
          </Link>
        </div>
      </section>
    </main>
  );
}

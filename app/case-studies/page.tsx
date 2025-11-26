import CaseStudyCard from "@/components/CasestudyCard";
import { Link } from "lucide-react";
import React, { JSX } from "react";

// --- TYPE DEFINITIONS ---
interface CaseStudy {
  title: string;
  context: string; // Added context field
  summary: string;
  impact: string;
}

// --- ENHANCED DATA STRUCTURES ---

const caseStudies: CaseStudy[] = [
  {
    title: "Agricultural Policy Research and Optimization",
    context:
      "Client needed to optimize the coffee export value chain for smallholder farmers in the Western region.",
    summary:
      "Conducted proprietary field research, combined with advanced econometric modeling (Difference-in-Differences and instrumental variables) to identify key market access barriers and infrastructure bottlenecks.",
    impact:
      "20% average increase in farm-gate income for 10,000+ smallholder beneficiaries.",
  },
  {
    title: "Urban Economic Feasibility Study: Industrial Park",
    context:
      "Assessing the potential for a new industrial park near Kampala and securing foundational international funding.",
    summary:
      "Provided a comprehensive 15-year economic forecast, detailed land-use projections, financial risk models, and a robust investment mitigation strategy.",
    impact:
      "Successfully secured $50 Million in foundational development financing from international partners.",
  },
  {
    title: "Microfinance Impact Evaluation in Eastern Uganda",
    context:
      "Evaluated the causal impact of a digital micro-loan program on women-owned businesses in rural areas.",
    summary:
      "Used Randomized Control Trial (RCT) methodology combined with qualitative field interviews to measure social and economic outcomes, identifying areas for scale-up.",
    impact:
      "Program redesign led to a 15% improvement in client business sustainability and reduced default rates by 5%.",
  },
  {
    title: "ESIA for a Large-Scale Infrastructure Project",
    context:
      "Required an Environmental and Social Impact Assessment (ESIA) for a new mining operation to meet World Bank compliance standards.",
    summary:
      "Completed a full ESIA report, developed a comprehensive Stakeholder Engagement Plan (SEP), and designed long-term environmental remediation and local benefits programs.",
    impact:
      "Achieved full compliance with international safeguards, enabling project continuity and fostering strong community relations.",
  },
];

// --- MAIN PAGE COMPONENT ---

export default function CaseStudiesPage(): JSX.Element {
  return (
    <main>
      {/* Hero Header (Full Width, High Contrast) */}
      <section className="bg-primary/95 pt-24 pb-16 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-snug">
            Verified Impact. Causal Results.
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-3xl mx-auto font-body">
            We don't just deliver data; we deliver evidence of impact. Explore
            how our rigorous econometric models and policy advice have shaped
            successful outcomes across East Africa.
          </p>

          {/* CTA to talk about their project */}
          <a
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3 bg-accentGold text-primary font-bold rounded-lg shadow-2xl text-lg hover:bg-yellow-500 transition transform hover:scale-[1.02]"
          >
            Discuss Your Project
          </a>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
            Our Portfolio of Excellence
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Client Success Stories
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {/* Use a single column grid for the new wide card design */}
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.title}
              title={study.title}
              context={study.context}
              summary={study.summary}
              impact={study.impact}
            />
          ))}
        </div>
      </section>

      {/* Final CTA Block (Reassurance) */}
      <section className="bg-gray-50 py-16 md:py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Need Quantitative Confidence?
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-body">
            Our methods are peer-reviewed and academically rigorous. If your
            project demands verifiable results and strategic precision, let's
            connect.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-primary text-white font-bold rounded-full shadow-lg text-xl hover:bg-accentGold hover:text-primary transition transform hover:scale-105"
          >
            Schedule a Free Strategy Session
          </a>
        </div>
      </section>
    </main>
  );
}

// components/ApproachSection.tsx
import React, { JSX } from "react";
import { FlaskConical, Code, Zap } from "lucide-react";

const approachPillars = [
  {
    icon: FlaskConical,
    title: "1. Academic Rigor & Field Research",
    description:
      "Leveraging our university affiliations, we conduct **primary field data collection** and robust analysis to ensure localized, reliable inputs.",
  },
  {
    icon: Code,
    title: "2. Bespoke Econometric Modeling",
    description:
      "Our PhD economists utilize **Stata/R and advanced causal inference** to develop predictive models tailored specifically to African market dynamics.",
  },
  {
    icon: Zap,
    title: "3. Policy Translation & Impact",
    description:
      "We translate complex research into clear, **implementable policy roadmaps** and measurable strategies for immediate, high-level impact.",
  },
];

export default function ApproachSection(): JSX.Element {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-heading font-bold text-primary text-center mb-4">
        The HighRoad Differentiator: Our Unique Methodology
      </h2>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        We bridge the gap between rigorous academic research and practical,
        on-the-ground implementation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {approachPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="p-8 bg-white rounded-xl border-t-4 border-accentGold shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <pillar.icon className="h-10 w-10 text-accentGold mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-3">
              {pillar.title}
            </h3>
            <p className="text-gray-700">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

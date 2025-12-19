import React, { JSX } from "react";
import { Database, TrendingUp, Users } from "lucide-react";

const approachPillars = [
  {
    icon: Database,
    title: "1. Data Integrity & Contextualization",
    description:
      "We prioritize primary and administrative data, rigorous validation, and contextual grounding to ensure all inputs are locally relevant, reliable, and decision-ready.",
  },
  {
    icon: TrendingUp,
    title: "2. Advanced Analytical & Policy Modelling",
    description:
      "We apply impact evaluation methods, general equilibrium frameworks, and advanced quantitative analysis to generate robust, policy-relevant evidence for decision-making.",
  },
  {
    icon: Users,
    title: "3. Policy Translation & Capacity Development",
    description:
      "We translate complex analytical results into actionable policy insights and deliver structured, practice-oriented capacity development to strengthen institutional effectiveness.",
  },
];

export default function ApproachSection(): JSX.Element {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-heading font-bold text-primary text-center mb-4">
        The HighRoad Differentiator: Our Unique Methodology
      </h2>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        We bridge the gap between rigorous data analysis and practical,
        on-the-ground implementation to guarantee measurable impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {approachPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="p-8 bg-white rounded-xl border-t-4 border-accent-gold shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <pillar.icon className="h-10 w-10 text-accent-gold mb-4" />
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

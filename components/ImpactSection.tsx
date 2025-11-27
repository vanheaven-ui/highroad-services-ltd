// components/ImpactSection.tsx
import React, { JSX } from 'react';

const impactMetrics = [
  { value: "$1.2B+", label: "In Advised Project Capital" },
  { value: "15+", label: "National Policies Influenced" },
  { value: "25+", label: "Combined Years of Expert Experience" },
];

export default function ImpactSection(): JSX.Element {
  return (
    <section className="bg-primary py-12 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="p-4 border-r border-accentGold/40 last:border-r-0"> {/* Border changed to accentGold */}
              <p className="text-5xl font-bold text-accentGold mb-2 font-heading">
                {metric.value}
              </p>
              <p className="text-lg font-medium uppercase tracking-wider opacity-90">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
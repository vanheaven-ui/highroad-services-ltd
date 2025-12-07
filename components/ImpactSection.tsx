import React, { JSX } from 'react';

const impactPillars = [
  { value: "Precision & Clarity", label: "Evidence-Based Decision Making" },
  { value: "Lasting Influence", label: "Shaping Policy and Investment" },
  { value: "Qualified Team", label: "Driven by Credentials and Fieldwork" }, 
];

export default function ImpactSection(): JSX.Element {
  return (
    <section className="bg-primary py-12 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {impactPillars.map((pillar) => (
            <div key={pillar.label} className="p-4 border-r border-accent-gold/40 last:border-r-0">
              <p className="text-4xl font-bold text-accent-gold mb-2 font-heading">
                {pillar.value} {/* Now a compelling header */}
              </p>
              <p className="text-base md:text-lg font-medium uppercase tracking-wider opacity-90">
                {pillar.label} {/* Now a descriptive subtitle */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React, { JSX } from 'react';

// Using simple array for university partners
const universityPartners = [
  { name: "Makerere University", location: "Kampala" },
  { name: "Kyambogo University", location: "Kampala" },
];

export default function AffiliationsSection(): JSX.Element {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-gray-500 mb-10 uppercase tracking-wider">
          Backed by Academic Rigor and Local Thought Leadership
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20 opacity-80">
          
          {/* Static PhD/Expert Indicator */}
          <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-accentGold font-heading leading-none">Ph.D.</span>
              <p className="text-sm mt-1 text-primary font-semibold">Core Research Team</p>
          </div>

          {/* University Partners */}
          {universityPartners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Replace the text below with actual university logo images when available */}
              <p className="text-4xl font-heading font-bold text-primary opacity-75">
                {partner.name.split(' ')[0][0]}{partner.name.split(' ')[1][0]}
              </p>
              <p className="text-xs mt-2 text-gray-600 font-medium">Affiliated lecturers/professors at {partner.name}</p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
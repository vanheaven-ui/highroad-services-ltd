import React, { JSX } from "react";

export default function AffiliationsSection(): JSX.Element {
  const services = [
    {
      title: "Research",
      description:
        "In-depth analysis to uncover actionable insights for informed decision-making.",
      // Using a letter/initial for the icon placeholder for cleaner rendering
      icon: "R",
      color: "text-blue-600 bg-blue-100",
    },
    {
      title: "Consultancy",
      description:
        "Tailored strategies and guidance to navigate complex challenges with confidence.",
      icon: "C",
      color: "text-green-600 bg-green-100",
    },
    {
      title: "Training",
      description:
        "Custom programs in AI, data analytics, and leadership to build skills and empower your team for lasting success.",
      icon: "T",
      color: "text-accent-gold bg-yellow-100",
    },
  ];

  return (
    // Component name is now AffiliationsSection
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Updated headings to reflect "Our Expertise" and "What We Offer" */}
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-widest mb-2 text-center md:text-left">
          What We Offer
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-16 text-center md:text-left">
          Our Expertise
        </h2>

        {/* Asymmetrical/Stacked layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                bg-white p-6 md:p-8 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]
                border border-gray-100
                ${
                  // Staggered layout logic
                  index === 1 ? "md:col-start-2 lg:col-start-auto" : ""
                }
              `}
            >
              <div className="flex items-start">
                {/* Icon styling: Themed circle with bold initial/placeholder */}
                <div
                  className={`
                    flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center 
                    text-xl font-bold mr-4 shadow-md 
                    ${service.color}
                  `}
                >
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-primary mb-2">
                    {service.title}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

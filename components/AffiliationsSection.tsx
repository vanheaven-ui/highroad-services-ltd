import React, { JSX } from "react";
import { BarChart3, Users, GraduationCap } from "lucide-react";

export default function AffiliationsSection(): JSX.Element {
  // Updated data structure to use professional Lucide Icons and clearer color names
  const services = [
    {
      title: "Research & Analysis",
      description:
        "In-depth analytical research to generate rigorous, policy-relevant evidence for decision-making.",
      icon: BarChart3,
      color: "text-blue-700 bg-blue-50 border-blue-200",
    },
    {
      title: "Consultancy & Strategy",
      description:
        "Evidence-based advisory and strategic support to navigate complex policy and development challenges.",
      icon: Users,
      color: "text-primary bg-primary/5 border-primary/20",
    },
    {
      title: "Training & Capacity Development (HighRoad Academy)",
      description:
        "All capacity building is conducted under HighRoad Academy. Specialised, practice-oriented training in impact evaluation, CGE, and DSGE modelling for policymakers, analysts, and development practitioners.",
      icon: GraduationCap,
      color: "text-accent-gold-darker bg-yellow-50 border-yellow-200",
    },
  ];

  return (
    // Section remains clean (no background color)
    <section className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-widest mb-2 text-center">
          What We Do
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 text-center">
          Our Core Pillars of Value
        </h2>

        <hr className="w-1/3 mx-auto border-t-2 border-accent-gold mb-10" />

        {/* Service-Tiled Flow Layout (content unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                bg-white p-6 md:p-8 rounded-xl shadow-xl border-t-8 border-accent-gold/50
                hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01]
                hover:border-accent-gold
              `}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon styling: Themed square with shadow and bold color */}
                <div
                  className={`
                    flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center 
                    text-3xl font-bold mb-6 shadow-lg transition-colors
                    ${service.color}
                  `}
                >
                  {/* Render the imported Lucide Icon component */}
                  <service.icon className="w-8 h-8" />
                </div>

                <h4 className="text-2xl font-heading font-bold text-primary mb-3">
                  {service.title}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

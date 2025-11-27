import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

// Data for the 'Our Process' steps
const processSteps = [
  {
    step: 1,
    title: "Define",
    description:
      "Clear definition of the problem, scope, and objectives using PhD-level rigor.",
  },
  {
    step: 2,
    title: "Gather",
    description:
      "Multi-modal data collection (surveys, public data, interviews) with strict quality control.",
  },
  {
    step: 3,
    title: "Analyze",
    description:
      "Application of advanced econometric models and causal inference techniques.",
  },
  {
    step: 4,
    title: "Action",
    description:
      "Delivering clear, actionable policy recommendations and implementation plans.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* 🚀 1. Unique Hero Section: Authority Reinforcement */}
      <section className="bg-primary pt-24 pb-16 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-snug">
            Evidence-Driven Solutions for Economic Impact
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-3xl mx-auto font-body">
            Our PhD economists turn complex data into **actionable policy and
            investment strategy**. We provide the analytical rigor required for
            sustainable development and measurable success in East Africa.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3 bg-accentGold text-primary font-bold rounded-lg shadow-2xl text-lg hover:bg-yellow-500 transition transform hover:scale-[1.02]"
          >
            Start Your Consultation
          </a>
        </div>
      </section>

      {/* --- */}

      {/* 📊 2. Enhanced Services Grid (Grid of Enhanced Cards) */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
            Core Competencies
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Rigor & Relevance
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            // NOTE: Assuming ServiceCard component is updated to accept 'icon' and 'color' props
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>

        {/* 📌 Unique CTA 2: Quick Jump to Methodology */}
        <div className="mt-16 text-center">
          <a
            href="/approach"
            className="text-lg font-semibold text-primary hover:text-accentGold transition border-b-2 border-primary/20 hover:border-accentGold/50 pb-1"
          >
            View Our Detailed Research Methodology →
          </a>
        </div>
      </section>

      {/* --- */}

      {/* ⚙️ 3. Unique "Our Process" Section: Demonstrating Rigor */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
              Our Academic Approach
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
              The Four Pillars of HighRoad Consulting
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-accentGold/50 hover:shadow-xl transition duration-300"
              >
                <p className="text-5xl font-heading font-black text-accentGold/50 mb-4">
                  {item.step}
                </p>
                <h4 className="text-xl font-heading font-bold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 font-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 📞 4. Final Conversion CTA Block */}
      <section className="bg-primary/95 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Partner with PhD Economists?
          </h2>
          <p className="text-lg text-white/80 mb-8 font-body">
            Our team is ready to provide the evidence required for your next
            major policy or investment decision.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3 bg-accentGold text-white font-bold rounded-lg shadow-2xl border-2 border-white text-lg hover:bg-yellow-500 transition transform hover:scale-[1.02]"
          >
            Schedule a Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}

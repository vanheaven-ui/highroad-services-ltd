import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Baseline Surveys",
    description:
      "Comprehensive surveys to collect accurate data for program planning, monitoring, and evaluation.",
  },
  {
    title: "Feasibility Studies",
    description:
      "Detailed assessments of projects, policies, or programs to ensure viability and maximize impact.",
  },
  {
    title: "Strategy Development",
    description:
      "Designing actionable strategies for economic growth, organizational development, and policy implementation.",
  },
  {
    title: "Monitoring and Evaluation (M&E)",
    description:
      "Robust M&E frameworks to measure program effectiveness and ensure accountability.",
  },
  {
    title: "Human Capacity Development",
    description:
      "Tailored training programs to strengthen skills, knowledge, and performance of teams and organizations.",
  },
  {
    title: "Policy Analysis and Development",
    description:
      "Evidence-based analysis to guide policy formulation, evaluation, and reform processes.",
  },
  {
    title: "Environmental and Social Impact Assessment (ESIA)",
    description:
      "Comprehensive assessments to ensure sustainable and socially responsible project implementation.",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Our Core Services
        </h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
          HighRoad Services Ltd offers a comprehensive range of consultancy and
          research services designed to deliver actionable insights and
          measurable impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

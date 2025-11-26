"use client";

import Hero from "@/components/Hero";
import AffiliationsSection from "@/components/AffiliationsSection";
import ApproachSection from "@/components/ApproachSection";
import ImpactSection from "@/components/ImpactSection";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CasestudyCard";
import Link from "next/link";
import { JSX } from "react";

// ----------------------
// 1. Types
// ----------------------
interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface CaseStudy {
  title: string;
  context: string;
  summary: string;
  impact: string;
}

// ----------------------
// 2. Services Data
// ----------------------
const services: Service[] = [
  {
    title: "Baseline Surveys & Needs Assessment",
    description:
      "Establish robust, accurate metrics and situational analyses to measure project success from day one.",
    icon: "clipboard-list",
    color: "bg-blue-500/10 text-blue-700",
  },
  {
    title: "Investment Viability & Feasibility Studies",
    description:
      "De-risk major capital projects with comprehensive economic forecasting, market demand analysis, and risk models.",
    icon: "trending-up",
    color: "bg-green-500/10 text-green-700",
  },
  {
    title: "National & Sector Strategy Development",
    description:
      "Craft resilient, long-term strategies aligned with global trends, regional development goals, and local realities.",
    icon: "flag",
    color: "bg-purple-500/10 text-purple-700",
  },
  {
    title: "Impact Monitoring & Evaluation (M&E)",
    description:
      "Real-time tracking, deep evaluation, and learning systems to ensure maximum efficiency and return on investment.",
    icon: "zap",
    color: "bg-red-500/10 text-red-700",
  },
  {
    title: "Evidence-Based Policy Advisory",
    description:
      "Shaping progressive, sustainable public policies through rigorous analysis and clear, implementable recommendations.",
    icon: "scale",
    color: "bg-yellow-500/10 text-yellow-700",
  },
  {
    title: "Advanced Human Capacity Development",
    description:
      "Leveraging our PhD-level academic expertise, we provide specialized training in advanced econometrics (Stata/R) and causal inference techniques.",
    icon: "users",
    color: "bg-indigo-500/10 text-indigo-700",
  },
  {
    title: "Environmental & Social Impact (ESIA)",
    description:
      "Integrating sustainability and ethical risk mitigation into economic plans for compliant and responsible development.",
    icon: "leaf",
    color: "bg-teal-500/10 text-teal-700",
  },
];

// ----------------------
// 3. Case Studies Data
// ----------------------
const caseStudies: CaseStudy[] = [
  {
    title: "Agricultural Policy Research and Optimization",
    context:
      "Client needed to optimize the coffee export value chain for smallholder farmers in the Western region.",
    summary:
      "Identified key market access barriers and infrastructure bottlenecks through proprietary field research and econometric modeling.",
    impact:
      "10,000+ beneficiaries with a 20% average increase in farm-gate income within two seasons.",
  },
  {
    title: "Urban Economic Feasibility Study: Industrial Park",
    context:
      "Assessing the potential for a new industrial park development near Kampala and securing foundational funding.",
    summary:
      "Provided a comprehensive 15-year economic forecast, financial projections, and risk mitigation strategy.",
    impact:
      "Improved city planning and secured $50 Million in foundational development funding from international partners.",
  },
];

// ----------------------
// 4. Main Component
// ----------------------
export default function Home(): JSX.Element {
  return (
    <>
      <Hero />

      <main>
        {/* Impact Section */}
        <ImpactSection />

        {/* Affiliations Section */}
        <AffiliationsSection />

        {/* Approach Section */}
        <ApproachSection />

        {/* Services */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-12 border-b-4 border-accent-gold inline-block pb-1">
            Our Core Services: Expertise in Action
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition"
            >
              View Detailed Capabilities
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 border-b-4 border-accent-gold inline-block pb-1">
              Verified Impact & Case Studies
            </h2>
          </div>

          {/* Horizontal Scroll */}
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-8 px-6 md:px-10 lg:px-24 w-max">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="flex-shrink-0 w-[90vw] md:w-[65vw] lg:w-[50vw] xl:w-[45vw]"
                >
                  <CaseStudyCard
                    title={study.title}
                    summary={study.summary}
                    context={study.context}
                    impact={study.impact}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-6xl mx-auto text-center mt-12 px-6">
            <Link
              href="/case-studies"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent-gold hover:text-primary transition"
            >
              Explore More Success Stories
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

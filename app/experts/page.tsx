"use client";

import AffiliationCard, {
  Affiliation,
} from "@/components/experts/AffiliationCard";
import TeamCard, { TeamMember } from "@/components/experts/TeamCard";
import { Users } from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";

// --- DATA STRUCTURES ---

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Norman Tumwine",
    title: "Founder & Chief Economist",
    focus: "Applied Econometrics & Policy Analysis",
    qualifications: "Ph.D. Economics, Makerere University",
    bioSummary:
      "A specialist in causal inference for development policy, Dr. Katto leads all quantitative research and strategic advisory services. Her work has been published in several top regional journals.",
    email: "norman-tumwine@highroad.example",
    linkedinUrl: "#",
    // imageSrc: "/images/evelyn.jpg",
  },
  {
    name: "Dr. Enock Nyorekwa",
    title: "Senior Economist/Consultant",
    focus: "SDG Impact Evaluation & Data Science",
    qualifications: "Ph.D. Statistics, University of Cape Town",
    bioSummary:
      "With over 15 years experience, Dr. Enock focuses on designing robust SDG assesment for large international development projects, ensuring data quality and accountability.",
    email: "enyorekwa@highroad.example",
    linkedinUrl: "#",
    // imageSrc: "/images/ben.jpg",
  },
  {
    name: "Dr. Richard Magaala",
    title: "Senior Strategy Consultant",
    focus: "Market Feasibility & Sector Strategy",
    qualifications: "M.Sc. Finance, London School of Economics (LSE)",
    bioSummary:
      "Richard is the firm's expert in investment viability, guiding clients through complex market entry strategies and financial forecasting for sustainable growth.",
    email: "richard-magaala@highroad.example",
    linkedinUrl: "#",
    // imageSrc: "/images/zara.jpg",
  },
];

const affiliations: Affiliation[] = [
  {
    name: "Makerere University Business School (MUBS)",
    type: "Academic",
    description:
      "Collaboration on advanced research methodologies, access to specialized data sets, and faculty exchange programs.",
    logoUrl: "/logos/mubs.png",
    websiteUrl: "#",
  },
  {
    name: "East African Development Bank (EADB)",
    type: "Development Partner",
    description:
      "Strategic research partnership focused on regional infrastructure investment viability and economic integration studies.",
    logoUrl: "/logos/eadb.png",
    websiteUrl: "#",
  },
  {
    name: "African Development Policy Group",
    type: "Industry",
    description:
      "Joint projects and capacity building initiatives across sub-Saharan Africa, particularly focused on policy reform.",
    logoUrl: "/logos/adpg.png",
    websiteUrl: "#",
  },
];

// --- MAIN PAGE COMPONENT ---

export default function ExpertsPage(): JSX.Element {
  return (
    <main>
      {/* 🚀 1. Hero Header */}
      <section className="bg-gray-50 pt-24 pb-16 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-primary leading-snug">
            Our Experts & Global Network
          </h1>
          <p className="mt-6 text-gray-700 text-xl max-w-3xl mx-auto font-body">
            HighRoad is led by <strong>PhD-level economists</strong> and supported by
            strategic partnerships with top academic and development
            institutions across the continent.
          </p>
        </div>
      </section>

      {/* --- */}

      {/* 👨‍💼 2. Core Leadership Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
            Academic Rigor in Practice
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Meet Our Core Leadership
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* CTA for Full Team/Recruitment */}
        <div className="text-center mt-16">
          <Link
            href="/careers"
            className="px-8 py-3 bg-accentGold text-primary font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            View Full Consultant Team (and Careers)
          </Link>
        </div>
      </section>

      {/* --- */}

      {/* 🤝 3. Affiliations and Partnerships Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accentGold">
              Strategic Alliances
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
              Institutional Affiliations & Partners
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {affiliations.map((aff) => (
              <AffiliationCard key={aff.name} affiliation={aff} />
            ))}
          </div>

          {/* Unique Callout about the network */}
          <div className="mt-16 text-center p-8 bg-white rounded-xl shadow-lg border-l-8 border-accentGold/50">
            <div className="flex items-center justify-center text-lg font-semibold text-primary">
              <Users className="w-6 h-6 mr-3 text-accentGold" />
              Our network ensures local insight backed by global academic
              standards.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

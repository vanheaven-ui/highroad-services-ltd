import { ChevronRight } from "lucide-react";

export interface Affiliation {
  name: string;
  type: "Academic" | "Development Partner" | "Industry";
  description: string;
  logoUrl: string; // Placeholder for logo
  websiteUrl: string;
}

const AffiliationCard = ({ affiliation }: { affiliation: Affiliation }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 space-y-3 border-l-4 border-primary/50">
    <div className="flex items-center space-x-4">
      {/* Logo Placeholder */}
      <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-primary/50 text-xs flex-shrink-0">
        [Logo Placeholder]
      </div>
      <div>
        <h4 className="text-lg font-heading font-bold text-primary">
          {affiliation.name}
        </h4>
        <p className="text-xs font-semibold uppercase tracking-widest text-accentGold">
          {affiliation.type}
        </p>
      </div>
    </div>

    <p className="text-gray-700 text-sm font-body">{affiliation.description}</p>

    <a
      href={affiliation.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-primary font-semibold text-sm hover:text-accentGold transition"
    >
      Visit Website
      <ChevronRight className="w-4 h-4 ml-1" />
    </a>
  </div>
);

export default AffiliationCard;

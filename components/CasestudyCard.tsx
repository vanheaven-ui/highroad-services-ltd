import React, { FC, JSX } from "react";
import { TrendingUp, Briefcase, ChevronRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  summary: string; // Solution / Approach
  impact: string; // Quantified Result
  context?: string; // Challenge / Background
  // Function to open the modal, provided via useModal()
  onViewFullStudy: () => void;
}

const CaseStudyCard: FC<CaseStudyCardProps> = ({
  title,
  summary,
  impact,
  context,
  onViewFullStudy,
}): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-2xl transition duration-500 transform hover:-translate-y-1 overflow-hidden border border-gray-100 group">
      {/* Left / Top Content */}
      <div className="p-6 md:p-8 flex-grow">
        {/* Title */}
        <h4 className="font-heading text-2xl font-black text-primary mb-3 group-hover:text-accent-gold transition duration-300">
          {title}
        </h4>

        {/* Context */}
        {context && (
          <div className="mb-4 flex items-center text-sm font-body text-gray-600">
            <Briefcase className="w-4 h-4 mr-2 text-primary/50 flex-shrink-0" />
            <span className="italic">{context}</span>
          </div>
        )}

        {/* Solution Summary */}
        <h5 className="font-semibold text-primary/80 mt-4 mb-2">
          Our Solution & Approach:
        </h5>

        <p className="text-gray-700 text-base leading-relaxed">{summary}</p>

        {/* Modal Trigger Button */}
        <button
          onClick={onViewFullStudy}
          className="mt-6 inline-flex items-center text-primary font-semibold hover:text-accent-gold transition duration-300 group-hover:underline"
          aria-label={`View full study for ${title}`}
        >
          View Full Study
          <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Impact Block */}
      <div className="md:w-1/3 bg-primary p-6 md:p-8 flex-shrink-0 flex flex-col justify-center">
        <div className="flex items-center text-lg font-extrabold text-accent-gold mb-2">
          <TrendingUp className="w-6 h-6 mr-3 text-accent-gold" />
          Impact Delivered
        </div>

        <p className="text-xl md:text-2xl font-body font-black text-white leading-snug">
          {impact}
        </p>

        <p className="mt-2 text-sm text-white/70">
          Quantified, verified results.
        </p>
      </div>
    </div>
  );
};

export default CaseStudyCard;

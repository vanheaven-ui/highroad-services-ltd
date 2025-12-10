"use client";
import { FullCaseStudy } from "@/data/case-studies";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Briefcase,
  Search,
  CheckCircle,
  BarChart3, // New Icon for Analysis/Modeling
  Wrench, // New Icon for Infrastructure/Implementation
} from "lucide-react";
interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  study: FullCaseStudy | null;
}
const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  study,
}) => {
  if (!study) return null;
  // --- ENHANCED PARSER FUNCTION ---
  const parseDetailedDescription = (desc: string) => {
    const blocks = desc.split("\n\n");
    const parsedSections = [];
    let i = 0;
    // Helper function to map headings to relevant icons
    const getIconAndStyle = (heading: string) => {
      if (
        heading.toLowerCase().includes("phase 1") ||
        heading.toLowerCase().includes("market analysis")
      ) {
        return {
          Icon: Search,
          color: "text-blue-600",
          border: "border-blue-600",
        };
      }
      if (
        heading.toLowerCase().includes("phase 2") ||
        heading.toLowerCase().includes("modeling") ||
        heading.toLowerCase().includes("econometric")
      ) {
        return {
          Icon: BarChart3,
          color: "text-red-600",
          border: "border-red-600",
        };
      }
      if (
        heading.toLowerCase().includes("phase 3") ||
        heading.toLowerCase().includes("implementation") ||
        heading.toLowerCase().includes("risk assessment")
      ) {
        return {
          Icon: Wrench,
          color: "text-green-600",
          border: "border-green-600",
        };
      }
      // Fallback (e.g., if the heading is just "Project Scope")
      return {
        Icon: CheckCircle,
        color: "text-primary",
        border: "border-primary",
      };
    };
    while (i < blocks.length) {
      const block = blocks[i].trim();
      // Check if the block is a designated sub-heading
      // Relaxed regex to allow for Phase numbers: /^[A-Z][a-zA-Z\s&0-9]+$/
      if (block && i % 2 === 0 && block.match(/^[A-Z][a-zA-Z\s&0-9:]+$/)) {
        const heading = block;
        const content = blocks[i + 1] ? blocks[i + 1].trim() : "";
        const { Icon, color, border } = getIconAndStyle(heading);
        parsedSections.push(
          <motion.div
            key={heading}
            // NEW STYLING: shadow-xl, border-l-4, transition for hover
            className={`p-6 bg-white rounded-lg shadow-xl border-l-4 ${border} transition duration-300 hover:shadow-2xl`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (i / 2) }}
          >
            <div className="flex items-start mb-3">
              {/* Icon uses the theme color */}
              <Icon className={`w-6 h-6 mr-3 mt-0.5 ${color} flex-shrink-0`} />
              {/* BOLDER HEADING: text-xl, font-extrabold, tracking-wide */}
              <h4 className="text-xl font-extrabold text-primary tracking-wide leading-snug">
                {heading}
              </h4>
            </div>
            {/* CONTENT INDENTATION: pl-9 for visual alignment */}
            <div className="pl-9">
              <p className="text-gray-700 leading-relaxed text-base">
                {content}
              </p>
            </div>
          </motion.div>
        );
        i += 2; // Skip content block
      } else {
        // Fallback for non-heading/intro blocks - slightly softer styling
        parsedSections.push(
          <div key={i} className="mb-6 pl-4 border-l-2 border-gray-100">
            <p className="text-gray-600 leading-relaxed text-base italic">
              {block}
            </p>
          </div>
        );
        i++;
      }
    }
    return parsedSections;
  };
  // --- END ENHANCED PARSER FUNCTION ---
  return (
    <AnimatePresence>
      {isOpen && (
        // Backdrop (Animates opacity)
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Close when clicking outside the modal
        >
          {/* Modal Container (Animates scale and Y position) */}
          <motion.div
            className="relative bg-white text-primary rounded-xl shadow-2xl max-w-7xl w-[90vw] h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-primary hover:bg-red-500 hover:text-white transition z-10"
              aria-label="Close Case Study"
            >
              <X className="w-6 h-6" />
            </button>
            {/* Modal Content */}
            <div className="p-8 md:p-16">
              <span className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-accent-gold mb-2">
                Case Study
                <ExternalLink className="w-4 h-4 ml-2" />
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 border-l-4 border-accent-gold pl-4">
                {study.title}
              </h1>
              {/* Key Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-sm font-medium text-gray-700 border-t border-b py-4">
                <p className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-accent-gold" />
                  <span className="font-bold text-lg text-primary mr-2">
                    Impact:
                  </span>
                  {study.impact}
                </p>
                {study.client && (
                  <p className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-accent-gold" />
                    <span className="font-bold text-lg text-primary mr-2">
                      Client:
                    </span>
                    {study.client}
                  </p>
                )}
                {study.region && (
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-accent-gold" />
                    <span className="font-bold text-lg text-primary mr-2">
                      Region:
                    </span>
                    {study.region}
                  </p>
                )}
                {study.date && (
                  <p className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-accent-gold" />
                    <span className="font-bold text-lg text-primary mr-2">
                      Date:
                    </span>
                    {study.date}
                  </p>
                )}
              </div>
              {/* Summary and Context */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    The Challenge (Context)
                  </h3>
                  <p className="text-gray-700 leading-relaxed italic border-l-4 border-gray-200 pl-3">
                    {study.context}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Our Approach (Summary)
                  </h3>
                  <p className="text-gray-700 leading-relaxed border-l-4 border-accent-gold/50 pl-3">
                    {study.summary}
                  </p>
                </div>
              </div>
              {/* Detailed Description */}
              <div className="text-lg text-gray-800 leading-relaxed">
                <div className="flex items-center mb-10 pl-4 border-l-4 border-accent-gold bg-primary/5 rounded-r-lg py-3 pr-4 shadow-sm">
                  <Briefcase className="w-6 h-6 mr-3 text-accent-gold flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-primary uppercase tracking-wide">
                    Detailed Findings & Implementation
                  </h2>
                </div>
                <div className="pl-0 space-y-10">
                  {/* Render the dynamically parsed, enhanced sections */}
                  {parseDetailedDescription(study.detailedDescription)}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default CaseStudyModal;

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, MapPin, TrendingUp, Users } from "lucide-react";

// Assuming these types are defined or passed via context
export interface FullCaseStudy {
  title: string;
  context: string;
  summary: string;
  impact: string;
  client?: string; // Additional detail
  region?: string; // Additional detail
  date?: string; // Additional detail
  detailedDescription: string; // The full content
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  study: FullCaseStudy | null;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, study }) => {
  if (!study) return null;

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
              <span className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-accentGold mb-2">
                Case Study
                <ExternalLink className="w-4 h-4 ml-2" />
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 border-l-4 border-accentGold pl-4">
                {study.title}
              </h1>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-sm font-medium text-gray-700 border-t border-b py-4">
                <p className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-accentGold" />
                    <span className="font-bold text-lg text-primary mr-2">Impact:</span> 
                    {study.impact}
                </p>
                {study.client && (
                    <p className="flex items-center">
                        <Users className="w-5 h-5 mr-2 text-accentGold" /> 
                        <span className="font-bold text-lg text-primary mr-2">Client:</span> 
                        {study.client}
                    </p>
                )}
                {study.region && (
                    <p className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-accentGold" /> 
                        <span className="font-bold text-lg text-primary mr-2">Region:</span> 
                        {study.region}
                    </p>
                )}
                {study.date && (
                    <p className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-accentGold" /> 
                        <span className="font-bold text-lg text-primary mr-2">Date:</span> 
                        {study.date}
                    </p>
                )}
              </div>

              {/* Summary and Context */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">The Challenge (Context)</h3>
                    <p className="text-gray-700 leading-relaxed italic border-l-4 border-gray-200 pl-3">
                        {study.context}
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">Our Approach (Summary)</h3>
                    <p className="text-gray-700 leading-relaxed border-l-4 border-accentGold/50 pl-3">
                        {study.summary}
                    </p>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">
                <h2 className="text-3xl font-black text-primary mb-4">Detailed Findings & Implementation</h2>
                {study.detailedDescription}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
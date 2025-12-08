"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Link as LinkIcon,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { TeamMember } from "./TeamCard";

// Define the full expert data structure for the modal
export interface FullExpertProfile extends TeamMember {
  fullBio: string; // Detailed section for the modal
  keyProjects: string[]; // List of project highlights
  imageSrc: string; // Profile picture URL
}

interface ExpertProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  expert: FullExpertProfile | null;
}

// Custom Fallback SVG for when imageSrc is missing
const ExpertFallbackSVG = () => (
  <svg
    className="w-full h-full text-gray-400 bg-gray-200 p-8 rounded-xl shadow-inner"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 16C8.68 16 4.9 17.65 4 20.91C5.64 18.9 8.28 17 12 17C15.72 17 18.36 18.9 20 20.91C19.1 17.65 15.32 16 12 16Z"
    />
  </svg>
);

const ExpertProfileModal: React.FC<ExpertProfileModalProps> = ({
  isOpen,
  onClose,
  expert,
}) => {
  if (!expert) return null;

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
            className="relative bg-white text-primary rounded-xl shadow-2xl max-w-6xl w-[90vw] h-[90vh] overflow-y-auto"
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
              aria-label="Close Profile"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="md:grid md:grid-cols-3 gap-10">
              {/* Left Column: Image and Key Info */}
              <div className="p-8 bg-surface border-r border-gray-200">
                <div className="aspect-square w-full mb-6 rounded-xl overflow-hidden shadow-xl">
                  {expert.imageSrc ? (
                    <img
                      src={expert.imageSrc}
                      alt={`Profile picture of ${expert.name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ExpertFallbackSVG />
                  )}
                </div>

                <h2 className="text-3xl font-heading font-black text-primary mb-1">
                  {expert.name}
                </h2>
                <h3 className="text-xl font-subheading font-semibold text-accent-gold mb-4">
                  {expert.title}
                </h3>

                <hr className="my-4" />

                <div className="space-y-3 text-gray-700 font-body">
                  <p className="flex items-start">
                    <GraduationCap className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
                    <span className="font-medium">Qualification:</span>{" "}
                    {expert.qualifications}
                  </p>
                  <p className="flex items-start">
                    <Briefcase className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
                    <span className="font-medium">Expertise:</span>{" "}
                    {expert.focus}
                  </p>
                  {expert.linkedinUrl && (
                    <Link
                      href={expert.linkedinUrl}
                      target="_blank"
                      // UPDATED: LinkedIn now uses golden hover
                      className="flex items-center text-blue-600 hover:text-accent-gold transition font-subheading"
                    >
                      <LinkIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                      View LinkedIn Profile
                    </Link>
                  )}
                  <a
                    href={`mailto:${expert.email}`}
                    // UPDATED: Email uses primary color with golden hover
                    className="flex items-center text-primary hover:text-accent-gold transition font-subheading"
                  >
                    <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="break-all min-w-0 font-medium">
                      {expert.email}
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Column: Detailed Bio and Projects */}
              <div className="col-span-2 p-8 md:p-10">
                <h1 className="text-3xl md:text-4xl font-display font-black mb-6 border-l-4 border-accent-gold pl-4">
                  Full Profile & Track Record
                </h1>

                {/* Summary */}
                <div className="mb-8">
                  <h4 className="text-2xl font-heading font-bold text-primary mb-3">
                    Professional Summary
                  </h4>
                  <p className="text-gray-700 leading-relaxed italic border-l-4 border-gray-200 pl-4 font-body">
                    {expert.bioSummary}
                  </p>
                </div>

                {/* Full Bio */}
                <div className="mb-10 text-lg text-gray-800 leading-relaxed whitespace-pre-line font-body">
                  <h4 className="text-2xl font-heading font-bold text-primary mb-3">
                    Detailed Background
                  </h4>
                  <p>{expert.fullBio}</p>
                </div>

                {/* Key Projects */}
                <div>
                  <h4 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-accent-gold" />
                    Key Project Highlights
                  </h4>
                  <ul className="space-y-3 list-disc list-inside text-gray-700 font-body">
                    {expert.keyProjects.map((project, index) => (
                      <li key={index} className="pl-2 relative">
                        <span className="text-primary font-semibold block">
                          {project}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExpertProfileModal;

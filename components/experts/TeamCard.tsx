"use client";

import {
  Briefcase,
  GraduationCap,
  Mail,
  Link as LinkIcon,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useExpertModal } from "./ExpertModalProvider";
import { FullExpertProfile } from "./ExpertProfileModal";

// Export the base type (used in the data file)
export interface TeamMember {
  name: string;
  title: string;
  focus: string;
  qualifications: string;
  bioSummary: string;
  email: string;
  linkedinUrl: string;
  imageSrc?: string;
}

interface TeamCardProps {
  // The card component now expects the FULL profile data to pass to the modal
  member: FullExpertProfile;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const { openExpertModal } = useExpertModal();

  return (
    <div
      className="group bg-white p-6 rounded-xl shadow-xl border-t-4 border-primary/20 hover:border-accent-gold transition duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full"
      onClick={() => openExpertModal(member)}
    >
      {/* Top Section: Image and Name */}
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 border-2 border-primary">
          {member.imageSrc ? (
            <img
              src={member.imageSrc}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <Users className="w-full h-full p-2 text-primary/80" /> // Fallback SVG
          )}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-heading font-black text-primary group-hover:text-accent-gold transition">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-gray-600">{member.title}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4 flex-grow">
        <p className="flex items-center text-sm text-gray-700">
          <Briefcase className="w-4 h-4 mr-2 text-accent-gold flex-shrink-0" />
          <span className="font-semibold">Focus:</span> {member.focus}
        </p>
        <p className="flex items-center text-sm text-gray-700">
          <GraduationCap className="w-4 h-4 mr-2 text-accent-gold flex-shrink-0" />
          <span className="font-semibold">Key Qualification:</span>{" "}
          {member.qualifications}
        </p>
        <p className="text-sm text-gray-600 italic mt-2 line-clamp-2">
          {member.bioSummary}
        </p>
      </div>

      {/* MODIFIED: Added hover:underline class to achieve the desired effect */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-accent-gold font-bold group-hover:text-primary transition">
        <span className="group-hover:underline transition duration-300">
          View Full Profile
        </span>
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

export default TeamCard;

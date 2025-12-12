"use client";

import { Briefcase, GraduationCap, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useExpertModal } from "./ExpertModalProvider";
import { FullExpertProfile } from "@/data/team";

// Export the base type (used in your data file)
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
  member: FullExpertProfile; // full modal data
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const { openExpertModal } = useExpertModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="group bg-white p-6 rounded-xl shadow-xl border-t-4 border-primary/20 hover:border-accent-gold transition duration-300 cursor-pointer flex flex-col h-full"
      onClick={() => openExpertModal(member)}
    >
      {/* Top Section: Image + Name */}
      <div className="flex items-center mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 border-2 border-primary flex-shrink-0">
          {member.imageSrc ? (
            <Image
              src={member.imageSrc}
              alt={member.name}
              fill
              className="object-cover"
            />
          ) : (
            <Users className="absolute inset-0 w-full h-full p-2 text-primary/80" />
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

      {/* Bottom Link */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-accent-gold font-bold group-hover:text-primary transition">
        <span className="group-hover:underline transition duration-300">
          View Full Profile
        </span>

        <motion.div
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <ArrowRight className="w-5 h-5 ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamCard;

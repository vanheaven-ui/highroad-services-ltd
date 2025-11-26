import { GraduationCap, LinkIcon, Mail } from "lucide-react";

export interface TeamMember {
  name: string;
  title: string;
  focus: string; // Area of expertise
  qualifications: string; // Highest degree, e.g., "Ph.D. Economics, Yale"
  bioSummary: string;
  email: string;
  linkedinUrl: string;
  // imageSrc: string; // Assuming you would use real images
}

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="bg-white rounded-xl shadow-xl p-8 transition duration-300 hover:shadow-2xl border-t-4 border-primary hover:border-accentGold transform hover:scale-[1.01]">
    {/* Profile Image (Placeholder) */}
    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-accentGold/50 flex items-center justify-center text-primary/50 text-xs"></div>

    <div className="text-center">
      <h3 className="text-2xl font-heading font-black text-primary">
        {member.name}
      </h3>
      <p className="text-base text-accentGold font-semibold mt-1">
        {member.title}
      </p>
      <p className="text-sm text-gray-600 italic mb-3">Focus: {member.focus}</p>

      {/* Qualifications Badge */}
      <div className="inline-flex items-center text-sm font-bold bg-primary/10 text-primary py-1 px-3 rounded-full mb-4">
        <GraduationCap className="w-4 h-4 mr-2" />
        {member.qualifications}
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mb-6 font-body">
        {member.bioSummary}
      </p>
    </div>

    {/* Contact Links */}
    <div className="flex justify-center space-x-4 border-t pt-4">
      <a
        href={`mailto:${member.email}`}
        className="text-primary hover:text-accentGold transition"
        aria-label={`Email ${member.name}`}
      >
        <Mail className="w-5 h-5" />
      </a>
      <a
        href={member.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-accentGold transition"
        aria-label={`LinkedIn profile for ${member.name}`}
      >
        <LinkIcon className="w-5 h-5" />
      </a>
    </div>
  </div>
);

export default TeamCard;
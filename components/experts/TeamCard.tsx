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
  <div className="bg-white rounded-xl shadow-2xl p-8 transition duration-300 hover:shadow-3xl border-l-4 border-primary hover:border-accentGold transform hover:-translate-y-1">
    {/* Qualification Badge (High Visibility) */}
    <div className="flex justify-between items-center mb-4">
      <div className="inline-flex items-center text-xs font-bold bg-accentGold/20 text-primary py-1 px-3 rounded-full uppercase tracking-wider">
        <GraduationCap className="w-4 h-4 mr-2 text-accentGold" />
        {member.qualifications}
      </div>
      {/* Profile Image (Placeholder) */}
      <div className="w-16 h-16 bg-gray-200 rounded-full border-4 border-primary/10 flex items-center justify-center text-primary/50 text-xs"></div>
    </div>

    <div className="text-left">
      <h3 className="text-2xl font-heading font-black text-primary leading-tight">
        {member.name}
      </h3>
      <p className="text-base text-accentGold font-semibold mt-1">
        {member.title}
      </p>
      {/* Enhanced Focus Area */}
      <p className="text-sm text-gray-700 italic mt-2 mb-4">
        Core Focus: <span className="font-bold">{member.focus}</span>
      </p>

      <p className="text-gray-700 text-sm leading-relaxed mb-6 font-body border-t border-gray-100 pt-4">
        {member.bioSummary}
      </p>
    </div>

    {/* Contact Links (More prominent) */}
    <div className="flex justify-start space-x-6 border-t pt-4">
      <a
        href={`mailto:${member.email}`}
        className="text-primary hover:text-accentGold transition flex items-center text-sm font-semibold"
        aria-label={`Email ${member.name}`}
      >
        <Mail className="w-5 h-5 mr-1" /> Contact
      </a>
      <a
        href={member.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-accentGold transition flex items-center text-sm font-semibold"
        aria-label={`LinkedIn profile for ${member.name}`}
      >
        <LinkIcon className="w-5 h-5 mr-1" /> Profile
      </a>
    </div>
  </div>
);

export default TeamCard;

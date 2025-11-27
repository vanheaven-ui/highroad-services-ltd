import { FlaskConical, LucideIcon } from "lucide-react";
import React, { FC } from "react";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

// NOTE: We use a generic LucideIcon type for the icon mapping logic in a real app.
// For simplicity here, we'll map a string name to a specific icon component.

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; // The name of the icon (e.g., 'database')
  color: string; 
}

// Simplified Icon Mapping (You would expand this in a real project)
const IconMap: { [key: string]: LucideIcon } = {
  database: FlaskConical, // Placeholder
  zap: FlaskConical, // Placeholder
  "trending-up": FlaskConical, // Placeholder
  "clipboard-list": FlaskConical, // Placeholder
  users: FlaskConical, // Placeholder
  leaf: FlaskConical, // Placeholder
};

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  color,
}) => {
  const ServiceIcon = IconMap[icon] || FlaskConical;

  const [bgColor, textColor] = color.split(" ");

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-transparent hover:border-accentGold">
      <div className="flex items-start space-x-4 mb-4">
        {/* Icon Container with Color Accent */}
        <div className={`p-3 rounded-full ${bgColor} flex-shrink-0`}>
          <ServiceIcon className={`h-6 w-6 ${textColor}`} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-primary self-center">
          {title}
        </h3>
      </div>

      <p className="mt-3 text-gray-700 font-body text-base">{description}</p>
      <Link
        href={`/services/${slugify(title)}`}
        className="mt-6 inline-flex items-center text-accentGold font-semibold border-b-2 border-accentGold/50 hover:border-accentGold transition duration-200"
      >
        Read Deep Dive →
      </Link>
    </div>
  );
};

export default ServiceCard;

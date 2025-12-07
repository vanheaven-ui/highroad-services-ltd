import React from "react";

interface ContactDetailProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href: string;
  target?: string;
}

const ContactDetail = ({
  icon: Icon,
  label,
  value,
  href,
  target,
}: ContactDetailProps) => (
  <a
    href={href}
    target={target}
    className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-100 transition duration-200 group"
  >
    <Icon className="w-5 h-5 mr-4 mt-1 text-primary group-hover:text-accent-gold flex-shrink-0" />
    <div>
      <span className="block text-sm font-semibold text-primary">{label}</span>
      <span className="block text-base text-gray-700 group-hover:text-primary transition">
        {value}
      </span>
    </div>
  </a>
);

export default ContactDetail;

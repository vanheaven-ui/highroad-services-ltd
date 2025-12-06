"use client";

import { useState, JSX } from "react";
// 💡 IMPORT FRAMER MOTION
import { motion, Variants } from "framer-motion";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  ChevronRight,
  Send,
  LucideIcon,
} from "lucide-react";

// --- TYPESCRIPT INTERFACES ---
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactDetailProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  target?: string;
}

interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

interface FormInputProps {
  label: string;
  name: keyof Omit<FormData, "message">;
  type: "text" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

// --- FRAMER MOTION VARIANTS ---

// Container for the whole page/section
const containerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variants for staggering the Contact Details (parent)
const detailListVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1, // Small delay between each contact item
    },
  },
};

// Variants for each individual ContactDetail item (child)
const detailItemVariants: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// Variants for the main Form block (unique entrance)
const formVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
};

// --- TEMPORARY INLINE COMPONENTS (Type-Safe) ---

const ContactDetail = ({
  icon: Icon,
  label,
  value,
  href,
  target,
}: ContactDetailProps): JSX.Element => (
  // 💡 APPLY FRAMER MOTION TO EACH DETAIL ITEM
  <motion.a
    variants={detailItemVariants}
    href={href}
    target={target}
    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-accentGold/50 hover:border-accentGold"
  >
    <Icon className="w-5 h-5 mr-4 mt-1 text-primary flex-shrink-0" />
    <div>
      <span className="text-sm font-semibold uppercase tracking-wider text-accentGold block">
        {label}
      </span>
      <span className="text-base text-gray-800 font-body break-words">
        {value}
      </span>
    </div>
  </motion.a>
);

const FormLabel = ({ htmlFor, children }: FormLabelProps): JSX.Element => (
  <label
    htmlFor={htmlFor}
    className="block text-sm font-bold text-primary mb-1"
  >
    {children}
  </label>
);

const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}: FormInputProps): JSX.Element => (
  <div>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <input
      name={name}
      id={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="mt-1 w-full border border-gray-300 rounded-lg p-3 font-body text-gray-800 focus:outline-none focus:ring-4 focus:ring-accentGold/50 transition"
    />
  </div>
);

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const fieldName = e.target.name as keyof FormData;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    // Note: In a real app, you would send the data to a server here.
    // Cleared for demonstration:
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleChange(
      e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    );
  };

  return (
    <main className="bg-white">
      {/* 1. Main Container: Form-Dominant, Asymmetrical Grid */}
      {/* 💡 APPLY MAIN CONTAINER MOTION */}
      <motion.section
        className="bg-gray-50 max-w-7xl mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-24 rounded-xl shadow-2xl mt-8 mb-10"
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        {/* Title Block - Centered and Punchy (Slightly delayed for smooth flow) */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-black text-primary leading-snug">
            Schedule Your Strategy Session
          </h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-body text-gray-700">
            The first step to measurable impact is a **rigorous conversation**.
            Connect with our team directly or use the form to begin defining
            your project scope.
          </p>
        </motion.div>

        {/* --- ASYMMETRICAL GRID: 2/5 (Details) vs 3/5 (Form) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ASIDE COLUMN (2/5): Contact Information & Expectations */}
          <div className="lg:col-span-2 space-y-10 p-8 rounded-xl bg-primary/5 shadow-inner">
            {/* Key Contact Info Block */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={detailListVariants} // 💡 CONTAINER FOR STAGGERING
            >
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-accentGold pl-3">
                Connect Directly
              </h2>
              <div className="space-y-4">
                <ContactDetail
                  icon={Mail}
                  label="Email Inquiry"
                  value="highroadservicesltd@gmail.com"
                  href="mailto:highroadservicesltd@gmail.com"
                />
                <ContactDetail
                  icon={Phone}
                  label="Talk to a Consultant"
                  value="+256 772 688 639"
                  href="tel:+256772688639"
                />
                <ContactDetail
                  icon={MapPin}
                  label="Head Office"
                  value="P.O Box 21446, Plot 4, Ttula, Kawempe, Kampala, Uganda"
                  href="https://maps.app.goo.gl/..."
                  target="_blank"
                />
              </div>
            </motion.div>

            {/* 📌 Unique UX: Setting Expectations (The Trust Builder) */}
            <motion.div
              className="pt-4 border-t border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }} // Delayed after details
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                Our Proposal Process Guarantee
              </h3>

              {/* Unique Callout from old Hero */}
              <div className="mb-4 flex items-center text-primary font-semibold text-lg p-3 bg-accentGold/30 rounded-lg">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                Response Guaranteed within **12 Hours.**
              </div>

              <ul className="space-y-3">
                {[
                  "Define Challenge & Scope",
                  "In-house Rigor Check",
                  "Detailed Proposal Delivery",
                  "Project Kick-off & Launch",
                ].map((step, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 text-base font-body"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-accentGold flex-shrink-0" />
                    <span className="font-bold mr-1">{index + 1}.</span> {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* MAIN FORM AREA (3/5): Highest Priority Element */}
          {/* 💡 APPLY FORM MOTION */}
          <motion.div
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-xl shadow-3xl border-t-4 border-accentGold"
            initial="initial"
            animate="animate"
            variants={formVariants} // Slides in from the right
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 flex items-center">
              <Send className="w-7 h-7 mr-3 text-accentGold" /> Start the
              Discussion
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <FormInput
                  label="Work Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Subject Field */}
              <FormInput
                label="Project Subject/Focus Area"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="E.g., Feasibility Study for Industrial Park, M&E System Design"
              />

              {/* Message Area */}
              <div>
                <FormLabel htmlFor="message">
                  Project Brief / Inquiry Details
                </FormLabel>
                <textarea
                  name="message"
                  id="message"
                  rows={8} // Increased rows for more space
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full border border-gray-300 rounded-lg p-4 font-body text-gray-800 focus:outline-none focus:ring-4 focus:ring-accentGold/50 transition resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-10 py-3 bg-accent-gold text-primary font-bold rounded-lg shadow-xl text-lg hover:bg-yellow-500 transition transform hover:scale-[1.005]"
              >
                Send Strategic Request
              </button>

              {submitted && (
                <motion.p
                  className="mt-4 flex items-center text-lg text-green-700 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Success! We will respond within 12 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

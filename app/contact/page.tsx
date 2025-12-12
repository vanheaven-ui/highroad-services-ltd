"use client";

import { useState, useRef, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  ChevronRight,
  Send,
  HardHat,
} from "lucide-react";
import UnderConstructionModal from "@/components/UnderContsructionModal";

// -------------------------
// Types
// -------------------------
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactDetailProps {
  icon: typeof Mail; // Generic type for icons
  label: string;
  value: string;
  href: string;
  target?: string;
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

// -------------------------
// Variants for Animations
// -------------------------
const containerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const detailListVariants: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const detailItemVariants: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const formVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
};

const subscriptionVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
};

// -------------------------
// Reusable UI Components
// -------------------------
const ContactDetail = ({
  icon: Icon,
  label,
  value,
  href,
  target,
}: ContactDetailProps) => (
  <motion.a
    variants={detailItemVariants}
    href={href}
    target={target}
    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-accent-gold/50 hover:border-accent-gold"
  >
    <Icon className="w-5 h-5 mr-4 mt-1 text-primary flex-shrink-0" />
    <div className="flex-1">
      <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold block">
        {label}
      </span>
      <span className="text-base text-gray-800 font-body break-all">
        {value}
      </span>
    </div>
  </motion.a>
);

const FormLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) => (
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
}: FormInputProps) => (
  <div>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="mt-1 w-full border border-gray-300 rounded-lg p-3 font-body text-gray-800 focus:outline-none focus:ring-4 focus:ring-accent-gold/50 transition"
    />
  </div>
);

// -------------------------
// Main Contact Page
// -------------------------
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showConstructionModal, setShowConstructionModal] = useState(false);
  const subscribeRef = useRef<HTMLDivElement>(null);

  // Scroll to subscription section if hash exists
  useEffect(() => {
    if (window.location.hash === "#subscribe" && subscribeRef.current) {
      setTimeout(() => {
        subscribeRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof FormData;
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="bg-white">
      <motion.section
        className="bg-gray-50 max-w-7xl mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-24 rounded-xl shadow-2xl mt-8 mb-10"
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        {/* Title */}
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
            The first step to measurable impact is a rigorous conversation.
            Connect with our team directly or use the form to begin defining
            your project scope.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Aside */}
          <div className="lg:col-span-2 space-y-10 p-8 rounded-xl bg-primary/5 shadow-inner">
            {/* Contact Details */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={detailListVariants}
            >
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-accent-gold pl-3">
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

            {/* Proposal Guarantee */}
            <motion.div
              className="pt-4 border-t border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                Our Proposal Process Guarantee
              </h3>
              <div className="mb-4 flex items-center text-primary font-semibold text-lg p-3 bg-accent-gold/30 rounded-lg">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                Response Guaranteed within 12 Hours.
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
                    <ChevronRight className="w-4 h-4 mr-2 text-accent-gold" />
                    <span className="font-bold mr-1">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Subscription Section */}
            <motion.div
              id="subscribe"
              ref={subscribeRef}
              className="pt-8 border-t border-primary/10"
              initial="initial"
              animate="animate"
              variants={subscriptionVariants}
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                Receive Our Research & Insights
              </h3>
              <p className="text-sm text-gray-700 mb-4 font-body">
                Get exclusive access to our latest policy reports and sector
                analysis delivered to your inbox.
              </p>
              <button
                onClick={() => setShowConstructionModal(true)}
                className="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-md text-base hover:bg-primary/90 transition transform hover:scale-[1.005] duration-300 inline-flex items-center justify-center"
              >
                <HardHat className="w-5 h-5 mr-2" />
                Subscribe to Research
              </button>
            </motion.div>
          </div>

          {/* Main Contact Form */}
          <motion.div
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-xl shadow-3xl border-t-4 border-accent-gold"
            initial="initial"
            animate="animate"
            variants={formVariants}
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 flex items-center">
              <Send className="w-7 h-7 mr-3 text-accent-gold" />
              Start the Discussion
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Work Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <FormInput
                label="Project Subject / Focus Area"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="E.g., Feasibility Study, M&E System Design"
              />
              <div>
                <FormLabel htmlFor="message">
                  Project Brief / Inquiry Details
                </FormLabel>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full border border-gray-300 rounded-lg p-4 font-body text-gray-800 focus:outline-none focus:ring-4 focus:ring-accent-gold/50 transition resize-y"
                />
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

      {/* Modal */}
      <AnimatePresence>
        {showConstructionModal && (
          <UnderConstructionModal
            title="Subscribe to Research"
            description="The 'Subscribe to Research' feature is currently being finalized. We are integrating our system with our research publication pipeline to deliver the most current insights."
            subDescription="Please check back soon! In the meantime, feel free to use the contact form above for specific inquiries."
            buttonText="Got It, Back to Contact"
            onClose={() => setShowConstructionModal(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

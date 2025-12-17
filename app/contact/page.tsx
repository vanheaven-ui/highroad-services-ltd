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
  ChevronDown,
} from "lucide-react";
import UnderConstructionModal from "@/components/UnderContsructionModal";
import ActionModalLink from "@/components/ActionModalLink";

// Import services data
import { services } from "@/data/services";

// -------------------------
// Types
// -------------------------
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FormInputProps {
  label: string;
  name: keyof Omit<FormData, "message">;
  type?: "text" | "email";
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  required?: boolean;
  placeholder?: string;
  as?: "input" | "select";
  options?: { value: string; label: string }[];
  error?: string;
}

// -------------------------
// Variants for Animations
// -------------------------
const containerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const detailListVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
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

// Toast variants
const toastVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
};

// -------------------------
// Reusable UI Components
// -------------------------
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
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  as = "input",
  options,
  error,
}: FormInputProps) => (
  <div>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    {as === "select" ? (
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full appearance-none border rounded-lg p-3 pr-10 font-body text-gray-800 focus:outline-none focus:ring-4 transition bg-white ${
            error
              ? "border-red-500 focus:ring-red-500/50"
              : "border-gray-300 focus:ring-accent-gold/50"
          }`}
        >
          <option value="" disabled>
            Select a service area
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
      </div>
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full border rounded-lg p-3 font-body text-gray-800 focus:outline-none focus:ring-4 transition ${
          error
            ? "border-red-500 focus:ring-red-500/50"
            : "border-gray-300 focus:ring-accent-gold/50"
        }`}
      />
    )}
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
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
  const [errors, setErrors] = useState<FormErrors>({});
  const [showToast, setShowToast] = useState(false);
  const [showConstructionModal, setShowConstructionModal] = useState(false);
  const subscribeRef = useRef<HTMLDivElement>(null);

  // Service options for dropdown
  const serviceOptions = services.map((service) => ({
    value: service.title,
    label: service.title,
  }));

  const allOptions = [
    { value: "General Inquiry", label: "General Inquiry" },
    ...serviceOptions,
  ];

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name as keyof FormData;
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.subject) newErrors.subject = "Please select a service area";
    if (!formData.message.trim())
      newErrors.message = "Please provide inquiry details";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate successful submission
      setShowToast(true);
      setTimeout(() => setShowToast(false), 6000);

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
    // If validation fails, errors will show under fields and no toast
  };

  return (
    <main className="bg-white relative">
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
                <ActionModalLink
                  href="mailto:highroadservicesltd@gmail.com"
                  label="highroadservicesltd@gmail.com"
                >
                  <motion.a
                    variants={detailItemVariants}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-accent-gold/50 hover:border-accent-gold cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Mail className="w-5 h-5 mr-4 mt-1 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold block">
                        Email Inquiry
                      </span>
                      <span className="text-base text-gray-800 font-body break-all">
                        highroadservicesltd@gmail.com
                      </span>
                    </div>
                  </motion.a>
                </ActionModalLink>

                <ActionModalLink
                  href="tel:+256772688639"
                  label="+256 772 688 639"
                >
                  <motion.a
                    variants={detailItemVariants}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-accent-gold/50 hover:border-accent-gold cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Phone className="w-5 h-5 mr-4 mt-1 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold block">
                        Talk to a Consultant
                      </span>
                      <span className="text-base text-gray-800 font-body">
                        +256 772 688 639
                      </span>
                    </div>
                  </motion.a>
                </ActionModalLink>

                <ActionModalLink
                  href="https://maps.app.goo.gl/..." // Replace with actual link
                  label="Google Maps"
                >
                  <motion.a
                    variants={detailItemVariants}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-accent-gold/50 hover:border-accent-gold cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MapPin className="w-5 h-5 mr-4 mt-1 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold block">
                        Head Office
                      </span>
                      <span className="text-base text-gray-800 font-body">
                        P.O Box 21446, Plot 4, Ttula, Kawempe, Kampala, Uganda
                      </span>
                    </div>
                  </motion.a>
                </ActionModalLink>
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

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  error={errors.name}
                />
                <FormInput
                  label="Work Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  error={errors.email}
                />
              </div>

              <FormInput
                label="Project Subject / Focus Area"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                as="select"
                options={allOptions}
                error={errors.subject}
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
                  placeholder="Tell us about your project, challenges, or objectives..."
                  className={`mt-2 w-full border rounded-lg p-4 font-body text-gray-800 focus:outline-none focus:ring-4 transition resize-y ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500/50"
                      : "border-gray-300 focus:ring-accent-gold/50"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-10 py-3 bg-accent-gold text-primary font-bold rounded-lg shadow-xl text-lg hover:bg-yellow-500 transition transform hover:scale-[1.005]"
              >
                Send Strategic Request
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-white rounded-xl shadow-2xl border border-accent-gold/30 px-8 py-5 flex items-center gap-4 max-w-md">
              <div className="bg-accent-gold/20 p-3 rounded-full">
                <CheckCircle className="w-8 h-8 text-accent-gold" />
              </div>
              <div>
                <p className="font-bold text-primary text-lg">
                  Message Sent Successfully!
                </p>
                <p className="text-gray-600 text-sm">
                  We guarantee a response within 12 hours.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

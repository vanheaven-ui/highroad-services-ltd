"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  Send,
  HardHat,
  ChevronDown,
  AlertCircle,
  Loader2,
  WifiOff,
  RotateCcw,
} from "lucide-react";
import UnderConstructionModal from "@/components/UnderContsructionModal";
import ActionModalLink from "@/components/ActionModalLink";
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

type FormErrors = Partial<Record<keyof FormData, string>>;
type Touched = Partial<Record<keyof FormData, boolean>>;

// -------------------------
// Animation Variants
// -------------------------
const containerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const detailListVariants: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
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

const successVariants: Variants = {
  initial: { opacity: 0, scale: 0.96, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.96, y: -20, transition: { duration: 0.3 } },
};

const errorShake: Variants = {
  initial: { x: 0 },
  shake: { x: [0, -8, 8, -8, 8, 0], transition: { duration: 0.4 } },
};

// -------------------------
// Field validation helpers
// -------------------------
function validateField(name: keyof FormData, value: string): string | undefined {
  switch (name) {
    case "name":
      return !value.trim() ? "Full name is required" : undefined;
    case "email":
      if (!value.trim()) return "Email address is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Enter a valid email address";
      return undefined;
    case "subject":
      return !value ? "Please select a focus area" : undefined;
    case "message":
      if (!value.trim()) return "Please describe your project or inquiry";
      if (value.trim().length < 20) return "Please provide a bit more detail (at least 20 characters)";
      return undefined;
  }
}

// -------------------------
// Field input component
// -------------------------
interface FieldProps {
  id: string;
  label: string;
  error?: string;
  touched?: boolean;
  valid?: boolean;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}

const Field = ({ id, label, error, touched, valid, hint, required, children }: FieldProps) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="block text-sm font-semibold text-primary">
        {label}
        {required && <span className="text-accent-gold ml-1">*</span>}
      </label>
      {touched && valid && !error && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-1 text-xs text-green-600 font-medium"
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          Looks good
        </motion.span>
      )}
    </div>
    {children}
    <AnimatePresence mode="wait">
      {touched && error ? (
        <motion.p
          key="error"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 text-sm text-red-600"
        >
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          {error}
        </motion.p>
      ) : hint && !error ? (
        <motion.p
          key="hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-xs text-gray-500"
        >
          {hint}
        </motion.p>
      ) : null}
    </AnimatePresence>
  </div>
);

function inputClass(touched?: boolean, error?: string, valid?: boolean) {
  const base =
    "w-full border rounded-lg px-3.5 py-2.5 font-body text-gray-800 text-sm focus:outline-none focus:ring-2 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed";
  if (touched && error) return `${base} border-red-400 focus:ring-red-400/40 bg-red-50/30`;
  if (touched && valid) return `${base} border-green-400 focus:ring-green-400/40 bg-green-50/20`;
  return `${base} border-gray-300 focus:ring-accent-gold/50 focus:border-accent-gold`;
}

// -------------------------
// Main Contact Page
// -------------------------
const MESSAGE_MIN = 20;
const MESSAGE_MAX = 1500;

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showConstructionModal, setShowConstructionModal] = useState(false);
  const [shakeForm, setShakeForm] = useState(false);

  const subscribeRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const firstErrorRef = useRef<HTMLElement | null>(null);

  const serviceOptions = services.map((s) => ({ value: s.title, label: s.title }));
  const allOptions = [{ value: "General Inquiry", label: "General Inquiry" }, ...serviceOptions];

  useEffect(() => {
    if (window.location.hash === "#subscribe" && subscribeRef.current) {
      setTimeout(() => subscribeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
    }
  }, []);

  // Auto-grow textarea
  const growTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 400)}px`;
  }, []);

  useEffect(() => {
    growTextarea();
  }, [formData.message, growTextarea]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    }
    if (submitError) setSubmitError(null);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const key = e.target.name as keyof FormData;
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateField(key, formData[key]) }));
  };

  const validateAll = (): boolean => {
    const allTouched: Touched = { name: true, email: true, subject: true, message: true };
    const newErrors: FormErrors = {};
    (Object.keys(allTouched) as (keyof FormData)[]).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setTouched(allTouched);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) {
      setShakeForm(true);
      setTimeout(() => setShakeForm(false), 500);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");

      setSubmitted(true);
    } catch (err) {
      if (!navigator.onLine || (err instanceof TypeError && err.message === "Failed to fetch")) {
        setSubmitError("No internet connection. Please check your network and try again.");
      } else {
        setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setTouched({});
    setSubmitError(null);
    setSubmitted(false);
  };

  const isValid = (key: keyof FormData) =>
    touched[key] && !errors[key] && formData[key].trim().length > 0;

  const charCount = formData.message.length;
  const charPercent = Math.min((charCount / MESSAGE_MAX) * 100, 100);

  return (
    <main className="bg-white relative">
      <motion.section
        className="bg-gray-50 max-w-7xl mx-auto px-6 pt-10 pb-12 md:pt-12 md:pb-16 rounded-xl shadow-2xl mt-8 mb-8"
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-black text-primary leading-snug">
            Schedule Your Strategy Session
          </h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-body text-gray-700">
            The first step to measurable impact is a rigorous conversation. Connect
            with our team directly or use the form to begin defining your project scope.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Aside */}
          <div className="lg:col-span-2 space-y-10 p-8 rounded-xl bg-primary/5 shadow-inner">
            <motion.div initial="initial" animate="animate" variants={detailListVariants}>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-accent-gold pl-3">
                Connect Directly
              </h2>
              <div className="space-y-4">
                <ActionModalLink href="mailto:info@highroadservicesltd.com" label="info@highroadservicesltd.com">
                  <motion.a
                    variants={detailItemVariants}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-accent-gold/50 hover:border-accent-gold cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Mail className="w-5 h-5 mr-4 mt-1 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold block">Email Inquiry</span>
                      <span className="text-base text-gray-800 font-body break-all">info@highroadservicesltd.com</span>
                    </div>
                  </motion.a>
                </ActionModalLink>

                <ActionModalLink href="tel:+256772688639" label="+256 772 688 639">
                  <motion.a
                    variants={detailItemVariants}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-accent-gold/50 hover:border-accent-gold cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Phone className="w-5 h-5 mr-4 mt-1 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold block">Talk to a Consultant</span>
                      <span className="text-base text-gray-800 font-body">+256 772 688 639</span>
                    </div>
                  </motion.a>
                </ActionModalLink>

                <ActionModalLink href="https://maps.app.goo.gl/..." label="Google Maps">
                  <motion.a
                    variants={detailItemVariants}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-accent-gold/50 hover:border-accent-gold cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MapPin className="w-5 h-5 mr-4 mt-1 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold block">Head Office</span>
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
              <div className="mb-4 flex items-center text-primary font-semibold text-base p-3 bg-accent-gold/30 rounded-lg">
                <Clock className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                Response Guaranteed within 12 Hours
              </div>
              <ul className="space-y-3">
                {["Define Challenge & Scope", "In-house Rigor Check", "Detailed Proposal Delivery", "Project Kick-off & Launch"].map(
                  (step, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm font-body">
                      <ChevronRight className="w-4 h-4 mr-2 text-accent-gold flex-shrink-0" />
                      <span className="font-bold mr-1">{index + 1}.</span>
                      {step}
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Subscription */}
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
                Get exclusive access to our latest policy reports and sector analysis delivered to your inbox.
              </p>
              <button
                onClick={() => setShowConstructionModal(true)}
                className="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-md text-sm hover:bg-primary/90 transition transform hover:scale-[1.005] duration-300 inline-flex items-center justify-center"
              >
                <HardHat className="w-4 h-4 mr-2" />
                Subscribe to Research
              </button>
            </motion.div>
          </div>

          {/* Main Contact Form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-xl shadow-xl border-t-4 border-accent-gold overflow-hidden"
            initial="initial"
            animate="animate"
            variants={formVariants}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── Success Panel ── */
                <motion.div
                  key="success"
                  variants={successVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="p-8 md:p-12 flex flex-col items-center text-center h-full justify-center min-h-[480px]"
                >
                  <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-2">
                    Message Received
                  </p>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-3">
                    Thank You, {formData.name.split(" ")[0]}!
                  </h2>
                  <p className="text-gray-600 font-body text-base leading-relaxed max-w-sm mb-2">
                    Your inquiry has been sent successfully. We will review your project brief and respond within{" "}
                    <strong className="text-primary">12 hours</strong>.
                  </p>
                  <p className="text-sm text-gray-500 mb-8">
                    A copy of your message was sent to <span className="font-semibold text-primary">{formData.email}</span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition duration-200 text-sm flex-1"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Send Another
                    </button>
                  </div>

                  <div className="mt-10 pt-6 border-t border-gray-100 w-full">
                    <p className="text-xs text-gray-400 font-body">
                      While you wait, explore our{" "}
                      <a href="/case-studies" className="text-accent-gold hover:underline font-semibold">
                        project portfolio
                      </a>{" "}
                      or{" "}
                      <a href="/services" className="text-accent-gold hover:underline font-semibold">
                        service offerings
                      </a>.
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.div key="form" variants={successVariants} initial="initial" animate="animate" exit="exit">
                  <div className="px-8 md:px-12 pt-8 md:pt-10 pb-2">
                    <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-3">
                      <Send className="w-6 h-6 text-accent-gold" />
                      Start the Discussion
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 font-body">
                      Fields marked <span className="text-accent-gold font-bold">*</span> are required
                    </p>
                  </div>

                  <motion.form
                    onSubmit={handleSubmit}
                    className="px-8 md:px-12 pb-8 md:pb-10 pt-6 space-y-5"
                    noValidate
                    variants={errorShake}
                    animate={shakeForm ? "shake" : "initial"}
                  >
                    <fieldset disabled={isSubmitting} className="space-y-5 border-none p-0 m-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Name */}
                        <Field
                          id="name"
                          label="Full Name"
                          error={errors.name}
                          touched={touched.name}
                          valid={isValid("name")}
                          required
                        >
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Dr. Jane Nakato"
                            className={inputClass(touched.name, errors.name, isValid("name"))}
                          />
                        </Field>

                        {/* Email */}
                        <Field
                          id="email"
                          label="Work Email"
                          error={errors.email}
                          touched={touched.email}
                          valid={isValid("email")}
                          hint="We'll reply to this address"
                          required
                        >
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="jane@organisation.org"
                            className={inputClass(touched.email, errors.email, isValid("email"))}
                          />
                        </Field>
                      </div>

                      {/* Focus Area */}
                      <Field
                        id="subject"
                        label="Project Focus Area"
                        error={errors.subject}
                        touched={touched.subject}
                        valid={isValid("subject")}
                        hint="Select the service closest to your needs"
                        required
                      >
                        <div className="relative">
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`appearance-none ${inputClass(touched.subject, errors.subject, isValid("subject"))} pr-10`}
                          >
                            <option value="" disabled>Choose a service area…</option>
                            {allOptions.map((o) => (
                              <option key={o.value} value={o.value}>{o.label}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </Field>

                      {/* Message */}
                      <Field
                        id="message"
                        label="Project Brief / Inquiry"
                        error={errors.message}
                        touched={touched.message}
                        valid={isValid("message")}
                        hint={`Describe your project, goals, and timeline. Min ${MESSAGE_MIN} characters.`}
                        required
                      >
                        <div className="relative">
                          <textarea
                            ref={textareaRef}
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Tell us about your project — the challenge you're facing, your objectives, the scale of the work, and any relevant context..."
                            maxLength={MESSAGE_MAX}
                            rows={5}
                            style={{ resize: "none", overflow: "hidden", minHeight: "120px" }}
                            className={inputClass(touched.message, errors.message, isValid("message"))}
                          />
                          {/* Character count bar */}
                          <div className="absolute bottom-2 right-3 flex items-center gap-2">
                            <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-300 ${
                                  charCount < MESSAGE_MIN
                                    ? "bg-gray-300"
                                    : charCount > MESSAGE_MAX * 0.9
                                    ? "bg-red-400"
                                    : "bg-green-400"
                                }`}
                                style={{ width: `${charPercent}%` }}
                              />
                            </div>
                            <span
                              className={`text-xs font-mono tabular-nums ${
                                charCount > MESSAGE_MAX * 0.9 ? "text-red-500" : "text-gray-400"
                              }`}
                            >
                              {charCount}/{MESSAGE_MAX}
                            </span>
                          </div>
                        </div>
                      </Field>
                    </fieldset>

                    {/* Submit error */}
                    <AnimatePresence>
                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                        >
                          {submitError.toLowerCase().includes("internet") ||
                          submitError.toLowerCase().includes("network") ||
                          submitError.toLowerCase().includes("connection") ? (
                            <WifiOff className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <p className="text-sm font-semibold">{submitError}</p>
                            <p className="text-xs mt-0.5 text-red-600/80">
                              Or email us directly at{" "}
                              <a href="mailto:info@highroadservicesltd.com" className="underline">
                                info@highroadservicesltd.com
                              </a>
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center w-full px-10 py-3.5 bg-accent-gold text-primary font-bold rounded-lg shadow-lg text-base hover:bg-yellow-500 transition-all duration-200 hover:scale-[1.005] active:scale-[0.998] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-accent-gold gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending your request…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Strategic Request
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400 font-body">
                      By submitting, you agree to our{" "}
                      <a href="/legal#privacy" className="underline hover:text-primary transition">
                        Privacy Policy
                      </a>
                      . We never share your data.
                    </p>
                  </motion.form>
                </motion.div>
              )}
            </AnimatePresence>
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

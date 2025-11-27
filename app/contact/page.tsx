"use client";

import { useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import ContactDetail from "@/components/contact/ContactDetail";
import FormInput from "@/components/contact/FormInput";
import FormLabel from "@/components/contact/FormLabel";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // Added subject field for better lead filtering
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add API call to send form data
    console.log(formData);
    setSubmitted(true);
    // Clear form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main>
      {/* 🚀 1. Unique Hero Header: Focus on Scheduled Consultation */}
      <section className="bg-primary/95 pt-24 pb-16 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-snug">
            Schedule Your Strategy Session
          </h1>
          <p className="mt-6 text-white/80 text-xl max-w-3xl mx-auto font-body">
            The first step to measurable impact is a **rigorous conversation**.
            Use the form below or contact us directly to begin defining your
            project scope.
          </p>

          {/* Unique Callout */}
          <div className="mt-8 flex justify-center items-center text-white/90">
            <Clock className="w-5 h-5 mr-3 text-accentGold" />
            <span className="font-semibold text-lg">
              Response Guaranteed within 12 Hours.
            </span>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 📝 2. Asymmetrical Form and Information Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* ASYMMETRIC COLUMN 1: Contact Information & Expectations (Left 1/3) */}
          <div className="lg:col-span-1 space-y-10">
            {/* 📌 Key Contact Info Block */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4 border-l-4 border-accentGold pl-3">
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
            </div>

            {/* 📌 Unique UX: Setting Expectations (The Trust Builder) */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Our Proposal Process
              </h3>
              <ul className="space-y-3">
                {[
                  "Define Challenge",
                  "Rigor Check",
                  "Proposal Delivery",
                  "Project Launch",
                ].map((step, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 text-sm font-body"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-accentGold flex-shrink-0" />
                    <span className="font-semibold mr-1">{index + 1}.</span>{" "}
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ASYMMETRIC COLUMN 2: The Contact Form (Right 2/3) */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-xl shadow-xl border-t-4 border-primary">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Start the Discussion
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Group */}
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

              {/* Subject Field (New for better lead quality) */}
              <FormInput
                label="Project Subject/Focus Area"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
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
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full border border-gray-300 rounded-lg p-4 font-body text-gray-800 focus:outline-none focus:ring-4 focus:ring-accentGold/50 transition resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full md:w-auto px-10 py-3 bg-accentGold text-primary font-bold rounded-lg shadow-md text-lg hover:bg-yellow-500 transition transform hover:scale-[1.01]"
              >
                Send Request
              </button>

              {submitted && (
                <p className="mt-4 flex items-center text-lg text-green-700 font-semibold">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Thank you! Your inquiry has been received. We will respond
                  within 12 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
          Reach out to HighRoad Services Ltd for consultancy, research
          inquiries, or partnership opportunities. We respond promptly and
          professionally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accentGold"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accentGold"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accentGold"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-accentGold text-primary font-semibold rounded-md hover:bg-yellow-400 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-2 text-green-600 font-medium">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>

        {/* Company Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">
            Contact Information
          </h2>
          <p className="text-gray-700">
            <strong>Email:</strong> info@highroad.example
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +256 700 000000
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> Kampala, Uganda
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-primary">
              Request a Proposal
            </h3>
            <p className="text-gray-700 mt-2">
              Fill out the form or contact us directly to discuss your project
              requirements. We deliver evidence-based solutions and actionable
              insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

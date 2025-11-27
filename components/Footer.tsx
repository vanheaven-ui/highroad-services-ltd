import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import React, { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-12">
          {/* Column 1: Brand & Academic Authority */}
          <div>
            <h3 className="text-3xl font-heading font-black text-accentGold mb-4">
              HighRoad
            </h3>
            <p className="text-sm opacity-80 mb-4">
              Academic rigor meets actionable policy. Driven by PhD scholars and
              local expertise.
            </p>
            {/* Affiliation Callout */}
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-accentGold">
                Affiliated: Makerere & Kyambogo Universities
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (UPDATED) */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {/* NEW ABOUT US LINK ADDED */}
              <li>
                <Link
                  href="/about"
                  className="hover:text-accentGold transition"
                >
                  About Us & Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accentGold transition"
                >
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-accentGold transition"
                >
                  Verified Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="hover:text-accentGold transition"
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accentGold transition"
                >
                  Request a Proposal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-accentGold flex-shrink-0" />
                <span>
                  P.O Box 21446, <br /> Plot 4 Ttula, Kawempe, <br />
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accentGold" />
                <a
                  href="mailto:highroadservicesltd@gmail.com"
                  className="hover:underline"
                >
                  highroadservicesltd@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accentGold" />
                <a href="tel:+256000000000" className="hover:underline">
                  +256 772 688 639
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Research CTA */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Research & Insights</h4>
            <p className="text-sm opacity-80 mb-4">
              Stay updated with our latest policy analysis and publications.
            </p>
            <button className="w-full py-2 bg-accentGold text-primary font-bold rounded-md hover:bg-yellow-500 transition">
              Subscribe to Research
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs opacity-60">
          &copy; {new Date().getFullYear()} HighRoad Services Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

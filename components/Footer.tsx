import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-12">
          {/* Column 1: Brand & Academic Authority */}
          <div>
            {/* Logo with golden arc */}
            <div className="relative flex flex-col items-start mb-4">
              <span
                className="text-3xl font-heading font-black relative inline-block"
                style={{ color: "white" }}
              >
                HighRoad
              </span>

              <svg
                className="absolute -top-0 left-16 w-20 h-10 pointer-events-none"
                viewBox="0 0 100 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 10 40 Q 50 5 90 40"
                  stroke="#CFA83B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.95"
                  style={{
                    filter: "drop-shadow(0 1px 3px rgba(207, 168, 59, 0.5))",
                  }}
                />
              </svg>

              {/* Services Ltd Subscript */}
              <span
                className="text-xs font-semibold uppercase tracking-widest mt-[-4px] ml-1 nav-logo-sub"
                style={{
                  color: "#CFA83B",
                  verticalAlign: "sub",
                  fontSize: "0.65em",
                }}
              >
                Services Ltd
              </span>
            </div>

            <p className="text-sm opacity-80 mb-4">
              Academic rigor meets actionable policy. Driven by PhD scholars and
              local expertise.
            </p>

            {/* Affiliation */}
            <p className="text-xs font-semibold uppercase tracking-wider text-accentGold mt-4">
              Affiliated: Makerere & Kyambogo Universities
            </p>
          </div>

          {/* Column 2: Quick Links - FULL NAVBAR-STYLE HOVER EFFECT APPLIED */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link
                  href="/about"
                  className="group relative inline-block hover:text-accentGold transition duration-300"
                >
                  About Us & Mission
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accentGold transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="group relative inline-block hover:text-accentGold transition duration-300"
                >
                  Our Expertise
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accentGold transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="group relative inline-block hover:text-accentGold transition duration-300"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accentGold transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="group relative inline-block hover:text-accentGold transition duration-300"
                >
                  Meet the Team
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accentGold transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group relative inline-block hover:text-accentGold transition duration-300"
                >
                  Request a Proposal
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accentGold transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details - SIMPLIFIED HOVER (COLOR ONLY, NO UNDERLINE FOR CLEAN UX) */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-accentGold flex-shrink-0" />
                <span>
                  P.O Box 21446, <br />
                  Plot 4 Ttula, Kawempe, <br />
                  Kampala, Uganda
                </span>
              </li>

              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accentGold" />
                <a
                  href="mailto:highroadservicesltd@gmail.com"
                  className="hover:text-accentGold transition duration-300"
                >
                  highroadservicesltd@gmail.com
                </a>
              </li>

              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accentGold" />
                <a
                  href="tel:+256772688639"
                  className="hover:text-accentGold transition duration-300"
                >
                  +256 772 688 639
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Research Newsletter - BUTTON HOVER ENHANCED WITH NAVBAR-INSPIRED SCALE */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Research & Insights</h4>
            <p className="text-sm opacity-80 mb-4">
              Stay updated with our latest policy analysis and publications.
            </p>

            {/* Enhanced: Added underline-like accent on hover, plus scale for polish */}
            <button className="w-full py-2 bg-accent-gold text-primary font-bold rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-xl relative group overflow-hidden">
              Subscribe to Research
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
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
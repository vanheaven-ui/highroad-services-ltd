import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import React from "react";

// --- Custom Link Component for Consistent Styling ---
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

// Sliding underline link
const SlidingUnderlineLink: React.FC<FooterLinkProps> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="group relative inline-block text-white/80 hover:text-accent-gold transition duration-300 overflow-hidden"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-gold transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
  </Link>
);

// Simple hover link (no underline)
const SimpleHoverLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a href={href} className="hover:text-accent-gold transition duration-300">
    {children}
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-12">
          {/* Column 1 */}
          <div>
            <div className="relative flex flex-col items-start mb-4">
              <span className="text-3xl font-heading font-black relative inline-block text-white">
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

              <span className="text-xs font-semibold uppercase tracking-widest mt-[-4px] ml-1 text-accent-gold nav-logo-sub">
                Services Ltd
              </span>
            </div>

            <p className="text-sm opacity-80 mb-4">
              <span className="font-bold">Strategic consulting</span>,{" "}
              <span className="font-bold">impact research</span>, and{" "}
              <span className="font-bold">professional training</span> for
              development and economic growth.
            </p>

            <p className="text-xs font-semibold uppercase tracking-wider text-accent-gold mt-4">
              Consultancy & Training Focused
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <SlidingUnderlineLink href="/about">
                  About Us & Mission
                </SlidingUnderlineLink>
              </li>
              <li>
                <SlidingUnderlineLink href="/services">
                  Our Expertise
                </SlidingUnderlineLink>
              </li>
              <li>
                <SlidingUnderlineLink href="/case-studies">
                  Projects & Impact
                </SlidingUnderlineLink>
              </li>
              <li>
                <SlidingUnderlineLink href="/experts">
                  Meet the Consultants
                </SlidingUnderlineLink>
              </li>
              <li>
                <SlidingUnderlineLink href="/contact">
                  Request a Proposal
                </SlidingUnderlineLink>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-accent-gold flex-shrink-0" />
                <span>
                  P.O Box 21446, <br />
                  Plot 4 Ttula, Kawempe, <br />
                  Kampala, Uganda
                </span>
              </li>

              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent-gold" />
                <SimpleHoverLink href="mailto:highroadservicesltd@gmail.com">
                  highroadservicesltd@gmail.com
                </SimpleHoverLink>
              </li>

              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent-gold" />
                <SimpleHoverLink href="tel:+256772688639">
                  +256 772 688 639
                </SimpleHoverLink>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Research & Insights</h4>
            <p className="text-sm opacity-80 mb-4">
              Stay updated with our latest policy analysis and publications.
            </p>

            <button className="w-full py-2 bg-accent-gold text-primary font-bold rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-xl relative group overflow-hidden">
              Subscribe to Research
              <span className="absolute top-0 left-0 w-full h-[3px] bg-primary transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs opacity-60">
          &copy; {currentYear} HighRoad Services Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

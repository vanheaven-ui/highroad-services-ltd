"use client";

import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import React, { JSX, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimate,
} from "framer-motion";
import { usePathname } from "next/navigation";
import FullMenuDrawer from "./FullMenuDrawer";

const navLinks = [
  { name: "Expertise", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Team & Affiliations", href: "/experts" },
  { name: "Our Approach", href: "/approach" },
];

export default function Navbar(): JSX.Element {
  const { scrollY } = useScroll();
  // scope is attached to <motion.nav>
  const [scope, animate] = useAnimate();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold = 100;

    if (latest > threshold) {
      // SCROLLED STATE: Dark Background
      animate(
        scope.current,
        {
          // Target the root element with the scope ref
          y: 0,
          borderRadius: 0,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "rgba(11, 37, 69, 1)",
        },
        { duration: 0.2 }
      );

      // 📌 FIX: Use selector strings relative to the scope/root element
      animate(
        ".nav-text:not(.active-text)",
        { color: "#FFFFFF" },
        { duration: 0.2 }
      );
      animate(
        ".nav-link:not(.active)",
        { color: "#FFFFFF" },
        { duration: 0.2 }
      );
      animate(".nav-icon", { color: "#CFA83B" }, { duration: 0.2 });
      animate(".nav-logo-sub", { color: "#CFA83B" }, { duration: 0.2 });

      // Active link border/padding on scroll
      animate(
        ".nav-link.active",
        {
          borderBottomWidth: 3,
          paddingBottom: 5,
        },
        { duration: 0.2 }
      );
    } else {
      // TOP STATE: Light Background
      animate(
        scope.current,
        {
          // Target the root element with the scope ref
          y: 0,
          borderRadius: 50,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        },
        { duration: 0.2 }
      );

      // 📌 FIX: Use selector strings relative to the scope/root element
      animate(
        ".nav-text:not(.active-text)",
        { color: "#0B2545" },
        { duration: 0.2 }
      );
      animate(
        ".nav-link:not(.active)",
        { color: "#0B2545" },
        { duration: 0.2 }
      );
      animate(".nav-icon", { color: "#0B2545" }, { duration: 0.2 });
      animate(".nav-logo-sub", { color: "#0B2545" }, { duration: 0.2 });

      // Remove active link border/padding off-scroll
      animate(
        ".nav-link.active",
        {
          borderBottomWidth: 0,
          paddingBottom: 8,
        },
        { duration: 0.2 }
      );
    }
  });

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-6">
        {/* 📌 scope is attached to motion.nav, making all elements inside accessible */}
        <motion.nav
          ref={scope}
          className="shadow-xl rounded-full p-2 border border-gray-100 flex items-center justify-between transition-none"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: 50,
            padding: 8,
          }}
        >
          {/* Logo/Brand (Left) - Home is active */}
          <Link href="/" className="flex items-center space-x-2 p-2">
            <motion.span // This element is inside scope.current
              className={`text-2xl font-heading font-black nav-text ${
                pathname === "/"
                  ? "text-accentGold active-text"
                  : "text-primary"
              }`}
              style={{ color: pathname === "/" ? "#CFA83B" : "#0B2545" }}
            >
              HighRoad
            </motion.span>
            <motion.span // This element is inside scope.current
              className="text-xs font-semibold uppercase tracking-widest hidden sm:inline nav-logo-sub"
              style={{ color: "#0B2545" }}
            >
              Services Ltd
            </motion.span>
          </Link>

          {/* Navigation Links (Center) */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => {
              const isActive =
                pathname.startsWith(link.href) && link.href !== "/";

              return (
                <motion.div // This element is inside scope.current
                  key={link.name}
                  className="flex"
                  style={{ borderBottomColor: "#CFA83B" }}
                >
                  <Link
                    href={link.href}
                    // 📌 Target class used in animate()
                    className={`
                            px-4 py-2 rounded-full text-sm font-body font-medium transition duration-200 uppercase tracking-wide nav-link relative group
                            ${
                              isActive
                                ? "bg-accentGold text-primary active"
                                : "text-primary"
                            }
                        `}
                    style={{
                      color: isActive
                        ? "#0B2545"
                        : scrollY.get() > 100
                        ? "#FFFFFF"
                        : "#0B2545",
                      borderBottomWidth: 0,
                    }}
                  >
                    {link.name}

                    {!isActive && (
                      <span
                        className={`
                                    absolute bottom-0 left-0 w-full h-[3px] bg-accentGold 
                                    transform scale-x-0 transition-transform duration-300 ease-out origin-center 
                                    group-hover:scale-x-100
                                `}
                      ></span>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Contact/CTA (Right) */}
          <div className="flex items-center space-x-4">
            {/* Phone Icon */}
            <a
              href="tel:+256000000000"
              className="hidden md:flex items-center p-2 rounded-full hover:bg-surface transition"
            >
              <Phone
                className="h-5 w-5 nav-icon"
                style={{ color: "#0B2545" }}
              />
            </a>
            {/* Mail Icon */}
            <a
              href="mailto:info@highroad.com"
              className="hidden md:flex items-center p-2 rounded-full hover:bg-surface transition"
            >
              <Mail className="h-5 w-5 nav-icon" style={{ color: "#0B2545" }} />
            </a>

            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-primary rounded-full hover:bg-surface transition nav-icon"
              style={{ color: "#0B2545" }}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </motion.nav>
      </header>
      <FullMenuDrawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}

"use client";

import React, { useState, useRef, useEffect, JSX } from "react";
import Link from "next/link";
import { CalendarCheck, XCircle } from "lucide-react"; // Removed unused X & ArrowDownCircle
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

export default function ConsultationCTAButton(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (buttonRef.current) {
        setButtonRect(buttonRef.current.getBoundingClientRect());
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isModalOpen]);

  const toggleModal = () => {
    if (buttonRef.current) {
      setButtonRect(buttonRef.current.getBoundingClientRect());
    }
    setIsModalOpen(!isModalOpen);
  };

  const modalVariants: Variants = {
    closed: buttonRect
      ? {
          x: 0,
          y: 0,
          left: buttonRect.left,
          top: buttonRect.top,
          width: buttonRect.width,
          height: buttonRect.height,
          opacity: 0,
          borderRadius: 9999,
          transition: {
            duration: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
          } as Transition,
        }
      : { opacity: 0, scale: 0.8, transition: { duration: 0.2 } as Transition },

    open: {
      x: "50%",
      y: "50%",
      left: "50%",
      top: "50%",
      width: "90vw",
      height: "90vh",
      transform: "translate(-50%, -50%)",
      opacity: 1,
      borderRadius: 16,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
        delay: 0.1,
      } as Transition,
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const buttonText = isModalOpen ? "Close Scheduler" : "Book Consultation";
  const buttonIcon = isModalOpen ? XCircle : CalendarCheck;

  return (
    <>
      <Link
        href={isModalOpen ? "#" : "/contact"}
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}
        className="fixed bottom-6 right-6 z-[60] flex items-center space-x-3 p-4 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/20 backdrop-blur-sm"
        aria-label={buttonText}
      >
        <motion.div
          className="flex items-center space-x-2"
          animate={{ rotate: isModalOpen ? 360 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {React.createElement(buttonIcon, {
            className: "h-5 w-5 relative",
            key: buttonText,
          })}

          <AnimatePresence mode="wait">
            <motion.span
              key={buttonText}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.15 }}
              className="hidden md:inline font-bold text-sm uppercase tracking-wider"
            >
              {buttonText}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </Link>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <motion.div
              className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl"
              variants={modalVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
              style={{ left: buttonRect?.left, top: buttonRect?.top }}
            >
              <motion.div
                className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="flex items-center space-x-3"
                  variants={childVariants}
                >
                  <div className="p-2 bg-accent-gold rounded-full">
                    <CalendarCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold text-primary">
                      Schedule Your Strategy Session
                    </h2>
                    <p className="text-sm text-gray-600">
                      30-min free consultation with our PhD economists
                    </p>
                  </div>
                </motion.div>
                <motion.button
                  onClick={toggleModal}
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-primary transition-all duration-200 flex items-center space-x-1 group/close"
                  aria-label="Close booking modal"
                  variants={childVariants}
                >
                  <XCircle className="h-5 w-5 group-hover/close:scale-110 transition-transform" />
                  <span className="hidden sm:inline text-sm font-medium">
                    Close
                  </span>
                </motion.button>
              </motion.div>

              <motion.div
                className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-120px)]"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={childVariants} className="mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Ready to elevate your decisions with evidence-based
                    insights? Book a no-obligation call to discuss your project.
                  </p>
                </motion.div>

                <motion.div
                  variants={childVariants}
                  className="bg-gradient-to-br from-gray-50 to-white border border-accent-gold/20 rounded-xl p-6 mb-8 shadow-sm"
                >
                  <motion.h3
                    variants={childVariants}
                    className="font-semibold text-primary mb-3 flex items-center"
                  >
                    <CalendarCheck className="h-4 w-4 mr-2 text-accent-gold" />
                    Select Your Slot
                  </motion.h3>
                  <div className="w-full h-96 md:h-[500px] relative">
                    <iframe
                      src="https://calendly.com/vanheaven6/30min?embed_domain=yourdomain.com&embed_type=Inline"
                      width="100%"
                      height="100%"
                      style={{ border: "0", borderRadius: "8px" }}
                      title="Calendly Embed"
                      className="rounded-lg"
                    />
                  </div>
                  <motion.p
                    variants={childVariants}
                    className="text-xs text-gray-500 mt-3 text-center"
                  >
                    Powered by secure, real-time availability
                  </motion.p>
                </motion.div>

                <motion.div variants={childVariants} className="space-y-4">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-4 border-l-4 border-accent-gold pl-3">
                    What Happens Next?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg"
                      variants={childVariants}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-blue-600">
                          1
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Pick a 30-min slot that fits your schedule.
                      </p>
                    </motion.div>
                    <motion.div
                      className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg"
                      variants={childVariants}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-green-600">
                          2
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Share a quick note on your goals.
                      </p>
                    </motion.div>
                    <motion.div
                      className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg"
                      variants={childVariants}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-purple-600">
                          3
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        We confirm &amp; prep tailored insights.
                      </p>
                    </motion.div>
                    <motion.div
                      className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg"
                      variants={childVariants}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-orange-600">
                          4
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Hop on the call – let&apos;s build your edge.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={childVariants}
                  className="mt-8 pt-6 border-t border-gray-100 text-center"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-gray-800 text-white font-bold rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    onClick={toggleModal}
                  >
                    Not ready to book? Visit Contact Page
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

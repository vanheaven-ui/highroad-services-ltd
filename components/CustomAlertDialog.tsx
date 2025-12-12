"use client";

import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";

interface ButtonProps {
  label: string;
  action: () => void;
  isPrimary?: boolean;
}

interface CustomAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  body?: string;
  primary?: ButtonProps;
  secondary?: ButtonProps;
}

// --- Button Component (Unchanged) ---
const Button: React.FC<ButtonProps> = ({ label, action, isPrimary }) => {
  const baseClasses =
    "px-5 py-2 text-sm font-subheading font-bold uppercase tracking-wide rounded-lg transition transform duration-300 hover:scale-[1.03] shadow-md";

  // Primary: Gold accent background with dark text/border
  const primaryClasses =
    "bg-accent-gold text-primary border-2 border-primary hover:bg-yellow-500 dark:hover:bg-yellow-600";

  // Secondary: Light grey background with primary text
  const secondaryClasses =
    "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600";

  return (
    <button
      onClick={action}
      className={`${baseClasses} ${
        isPrimary ? primaryClasses : secondaryClasses
      }`}
    >
      {label}
    </button>
  );
};

// --- Framer Motion Variants ---

const backdropVariants: Variants = {
  initial: { opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" },
  animate: { opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.8)" },
  exit: { opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" },
};

const dialogVariants: Variants = {
  // Starts slightly off-screen above
  initial: { y: -50, opacity: 0, scale: 0.9 },
  // Moves to the top of the container (which is offset by the 'pt-32' class)
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  // Exits slightly upward
  exit: { y: -30, opacity: 0, scale: 0.95 },
};

// --- CustomAlertDialog Component (Modified) ---
export const CustomAlertDialog: React.FC<CustomAlertDialogProps> = ({
  isOpen,
  onClose,
  title = "",
  body = "",
  primary,
  secondary,
}) => {
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        // Backdrop - Alignment changed to items-start with a large top padding
        <motion.div
          // MODIFICATION: Use items-start to align content to the top
          // ADDITION: Use pt-32 (or pt-48 for higher) to push the content down into the center view
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-32"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClose}
          aria-modal="true"
        >
          {/* Modal Container */}
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-sm mx-auto border-t-4 border-accent-gold dark:border-accent-gold"
            variants={dialogVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 border-b border-gray-100 dark:border-gray-700 flex justify-between items-start">
              <h3 className="text-xl font-heading font-bold text-primary dark:text-white mr-4">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-primary dark:hover:text-white transition p-1 -mt-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              <p className="text-gray-700 dark:text-gray-300 font-body">
                {body}
              </p>
            </div>

            {/* Footer/Actions */}
            <div className="p-5 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-b-xl flex justify-end gap-3">
              {secondary && <Button {...secondary} />}
              {primary && <Button {...primary} isPrimary />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof document !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
};

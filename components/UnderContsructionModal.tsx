// components/UnderConstructionModal.tsx
"use client";

import { motion, Variants, Transition } from "framer-motion";
import { HardHat } from "lucide-react";

interface UnderConstructionModalProps {
  title?: string;
  description?: string;
  subDescription?: string;
  buttonText?: string;
  onClose: () => void;
}

const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const modalVariants: Variants = {
  initial: { y: "-100%", opacity: 0, scale: 0.7 },
  animate: {
    y: "0",
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 15, delay: 0.1 },
  },
  exit: { y: "-100%", opacity: 0, scale: 0.7, transition: { duration: 0.3 } },
};

export default function UnderConstructionModal({
  title = "Feature Under Construction",
  description = `The feature is currently being finalized. We are integrating our system to deliver the most current insights.`,
  subDescription = `Please check back soon! In the meantime, feel free to use available contact options for inquiries.`,
  buttonText = "Got It, Back",
  onClose,
}: UnderConstructionModalProps) {
  const waggleTransition: Transition = {
    duration: 2.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      variants={backdropVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full text-center border-t-4 border-accent-gold"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          animate={{ rotate: [0, -3, 3, 0] }}
          transition={waggleTransition}
        >
          <HardHat className="w-12 h-12 mx-auto text-accent-gold mb-4" />
        </motion.div>

        <h3 className="text-3xl font-heading font-bold text-primary mb-3">
          {title}
        </h3>
        <p className="text-gray-700 text-lg font-body mb-6">{description}</p>
        <p className="text-gray-700 text-sm mb-6">{subDescription}</p>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center px-6 py-2 bg-primary text-white font-bold rounded-lg shadow-lg text-base hover:bg-primary/90 transition"
        >
          {buttonText}
        </button>
      </motion.div>
    </motion.div>
  );
}

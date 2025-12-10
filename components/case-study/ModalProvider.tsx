"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import CaseStudyModal from "./CaseStudyModal";
import { FullCaseStudy } from "@/data/case-studies";

interface ModalContextType {
  openModal: (study: FullCaseStudy) => void;
  closeModal: () => void;
  isOpen: boolean;
  study: FullCaseStudy | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [study, setStudy] = useState<FullCaseStudy | null>(null);

  const openModal = useCallback((studyData: FullCaseStudy) => {
    setStudy(studyData);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setStudy(null);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen, study }}>
      {children}
      <CaseStudyModal isOpen={isOpen} onClose={closeModal} study={study} />
    </ModalContext.Provider>
  );
};

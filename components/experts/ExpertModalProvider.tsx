"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import ExpertProfileModal, { FullExpertProfile } from "./ExpertProfileModal";

interface ExpertModalContextType {
  openExpertModal: (expert: FullExpertProfile) => void;
  closeExpertModal: () => void;
  isExpertModalOpen: boolean;
  expertData: FullExpertProfile | null;
}

const ExpertModalContext = createContext<ExpertModalContextType | undefined>(
  undefined
);

export const useExpertModal = () => {
  const context = useContext(ExpertModalContext);
  if (!context) {
    throw new Error(
      "useExpertModal must be used within an ExpertModalProvider"
    );
  }
  return context;
};

export const ExpertModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [expertData, setExpertData] = useState<FullExpertProfile | null>(null);

  const openExpertModal = useCallback((expert: FullExpertProfile) => {
    setExpertData(expert);
    setIsExpertModalOpen(true);
  }, []);

  const closeExpertModal = useCallback(() => {
    setIsExpertModalOpen(false);
    setExpertData(null);
  }, []);

  return (
    <ExpertModalContext.Provider
      value={{
        openExpertModal,
        closeExpertModal,
        isExpertModalOpen,
        expertData,
      }}
    >
      {children}
      {/* The modal is rendered at the root of the provider */}
      <ExpertProfileModal
        isOpen={isExpertModalOpen}
        onClose={closeExpertModal}
        expert={expertData}
      />
    </ExpertModalContext.Provider>
  );
};

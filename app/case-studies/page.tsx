"use client";

import { ModalProvider, useModal } from "@/components/case-study/ModalProvider";
import CaseStudyCard from "@/components/CasestudyCard";
import Link from "next/link";
import React, { useState, useMemo, JSX } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, ListFilter, RotateCcw } from "lucide-react";
import { caseStudies, FullCaseStudy } from "@/data/case-studies";

type CaseStudy = FullCaseStudy;

const ITEMS_PER_PAGE = 5;

// --- FRAMER MOTION VARIANTS ---
const cardContainerVariants: Variants = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- COMPONENTS OUTSIDE MAIN RENDER ---
interface CaseStudyCardWithModalProps {
  study: CaseStudy;
}

const CaseStudyCardWithModal: React.FC<CaseStudyCardWithModalProps> = ({
  study,
}) => {
  const { openModal } = useModal();
  return (
    <motion.div variants={cardItemVariants}>
      <CaseStudyCard
        key={study.title}
        title={study.title}
        context={study.context}
        summary={study.summary}
        impact={study.impact}
        onViewFullStudy={() => openModal(study)}
      />
    </motion.div>
  );
};

// Pagination Controls
interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}) => (
  <div className="flex justify-center items-center space-x-4 mt-12 pt-6 border-t border-gray-200">
    <button
      onClick={onPrev}
      disabled={currentPage === 1}
      className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition ${
        currentPage === 1
          ? "text-gray-400 bg-gray-100 cursor-not-allowed"
          : "text-primary bg-white border border-gray-300 hover:bg-gray-50"
      }`}
    >
      <ChevronLeft className="w-4 h-4 mr-1" />
      Previous
    </button>
    <span className="text-gray-700 font-semibold">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={onNext}
      disabled={currentPage === totalPages}
      className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition ${
        currentPage === totalPages
          ? "text-gray-400 bg-gray-100 cursor-not-allowed"
          : "text-primary bg-white border border-gray-300 hover:bg-gray-50"
      }`}
    >
      Next
      <ChevronRight className="w-4 h-4 ml-1" />
    </button>
  </div>
);

// Filter Controls
interface FilterControlsProps {
  selectedClient: string;
  uniqueClients: string[];
  onChange: (value: string) => void;
  onReset: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  selectedClient,
  uniqueClients,
  onChange,
  onReset,
}) => (
  <div className="flex justify-end items-center gap-4 mb-8">
    <div className="relative flex items-center">
      <ListFilter className="w-5 h-5 text-primary absolute left-3 pointer-events-none" />
      <select
        onChange={(e) => onChange(e.target.value)}
        value={selectedClient}
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:ring-accent-gold focus:border-accent-gold appearance-none bg-white"
      >
        <option value="All Clients">All Clients ({caseStudies.length})</option>
        {uniqueClients
          .filter((c) => c !== "All Clients")
          .map((client) => (
            <option key={client} value={client}>
              {client} ({caseStudies.filter((s) => s.client === client).length})
            </option>
          ))}
      </select>
    </div>
    {selectedClient !== "All Clients" && (
      <button
        onClick={onReset}
        className="flex items-center text-sm text-gray-600 hover:text-primary transition"
      >
        <RotateCcw className="w-4 h-4 mr-1" />
        Reset Filter
      </button>
    )}
  </div>
);

// --- MAIN PAGE COMPONENT ---
export default function CaseStudiesPage(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState("All Clients");

  // --- DERIVED DATA ---
  const uniqueClients = useMemo(() => {
    const clients = caseStudies
      .map((s) => s.client)
      .filter(Boolean) as string[];
    return ["All Clients", ...Array.from(new Set(clients))].sort();
  }, []);

  const filteredCaseStudies = useMemo(() => {
    if (selectedClient === "All Clients") return caseStudies;
    return caseStudies.filter((s) => s.client === selectedClient);
  }, [selectedClient]);

  const totalItems = filteredCaseStudies.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = useMemo(
    () => filteredCaseStudies.slice(startIndex, endIndex),
    [filteredCaseStudies, startIndex, endIndex]
  );

  // --- HANDLERS ---
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    document
      .getElementById("case-study-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    document
      .getElementById("case-study-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClientChange = (value: string) => {
    setSelectedClient(value);
    if (currentPage !== 1) setCurrentPage(1); // Safe page reset
  };

  const handleResetFilter = () => setSelectedClient("All Clients");

  return (
    <ModalProvider>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
              Our Portfolio of Excellence
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
              Client Success Stories
            </h3>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Dive into real projects where our evidence-based approach turned
              challenges into measurable wins. Use the filter below to narrow
              the results by client.
            </p>
          </div>

          {/* FILTER CONTROLS */}
          <FilterControls
            selectedClient={selectedClient}
            uniqueClients={uniqueClients}
            onChange={handleClientChange}
            onReset={handleResetFilter}
          />

          {/* CASE STUDY GRID */}
          <motion.div
            key={`${selectedClient}-${currentPage}`}
            id="case-study-grid"
            className="grid grid-cols-1 gap-10"
            variants={cardContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentProjects.length > 0 ? (
              currentProjects.map((study) => (
                <CaseStudyCardWithModal key={study.title} study={study} />
              ))
            ) : (
              <div className="text-center py-10 text-gray-600">
                No case studies found for the selected client on this page.
              </div>
            )}
          </motion.div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onNext={handleNextPage}
              onPrev={handlePrevPage}
            />
          )}
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16 md:py-20 border-t border-gray-200">
          <motion.div
            className="max-w-4xl mx-auto text-center px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-body">
              Our track record shows what’s possible with clear, data-driven
              strategies. Let’s talk about your next project.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center px-8 py-3 bg-accent-gold text-primary font-bold rounded-lg shadow-2xl border-2 border-primary text-lg hover:bg-yellow-500 hover:text-primary transition transform hover:scale-[1.02]"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </section>
      </motion.main>
    </ModalProvider>
  );
}

"use client";

import React, {
  useState,
  ReactNode,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { CustomAlertDialog } from "./CustomAlertDialog";

interface ActionModalLinkProps {
  href: string;
  children: ReactNode;
  label: string; // The text/value shown in the modal prompt
}

type PendingAction = "openHref" | "newTab" | null;

type ModalContent = {
  title: string;
  body: string;
  primary: {
    label: string;
    action: () => void;
  };
  secondary: {
    label: string;
    action: () => void;
  };
};

export default function ActionModalLink({
  href,
  children,
  label,
}: ActionModalLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pendingActionRef = useRef<PendingAction>(null);

  const isMailto = href.startsWith("mailto:");
  const isTel = href.startsWith("tel:");

  const isExternal = useMemo(() => {
    try {
      if (isMailto || isTel || !href.startsWith("http")) return false;
      const currentHost = window.location.host;
      const linkHost = new URL(href).host;
      return currentHost !== linkHost;
    } catch {
      return false;
    }
  }, [href, isMailto, isTel]);

  const needsModal = isMailto || isTel || isExternal;

  // --- Execute side-effects safely via useEffect ---
  useEffect(() => {
    if (isOpen) {
      pendingActionRef.current = null;
      return;
    }

    const action = pendingActionRef.current;
    if (action) {
      pendingActionRef.current = null;
      if (action === "openHref") {
        window.location.href = href;
      } else if (action === "newTab") {
        window.open(href, "_blank", "noopener,noreferrer");
      }
    }
  }, [isOpen, href]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (needsModal) {
        e.preventDefault();
        setIsOpen(true);
      }
    },
    [needsModal]
  );

  const handleAction = useCallback(
    (action: "open" | "copy" | "newTab") => {
      setIsOpen(false);

      if (action === "copy") {
        const valueToCopy = href.replace(/^(mailto|tel):/, "");
        navigator.clipboard
          .writeText(valueToCopy)
          .then(() => console.log(`Copied: ${valueToCopy}`))
          .catch((err) => console.error("Failed to copy text: ", err));
        return;
      }

      // For navigation (mailto, tel, or external), use pendingAction
      if (needsModal) {
        if (action === "open") pendingActionRef.current = "openHref";
        if (action === "newTab") pendingActionRef.current = "newTab";
      }
    },
    [needsModal, href]
  );

  const getModalContent = useCallback((): ModalContent | null => {
    if (isMailto) {
      return {
        title: "Contact via Email",
        body: `How would you like to handle the email address: ${label}?`,
        primary: { label: "Open Mail App", action: () => handleAction("open") },
        secondary: {
          label: "Copy Address",
          action: () => handleAction("copy"),
        },
      };
    }

    if (isTel) {
      return {
        title: "Contact via Phone",
        body: `Do you want to initiate a call to: ${label}?`,
        primary: { label: "Call Now", action: () => handleAction("open") },
        secondary: { label: "Copy Number", action: () => handleAction("copy") },
      };
    }

    if (isExternal) {
      return {
        title: "External Link Warning",
        body: `You are about to navigate to an external website: ${label}`,
        primary: {
          label: "Continue in New Tab",
          action: () => handleAction("newTab"),
        },
        secondary: { label: "Cancel", action: () => setIsOpen(false) },
      };
    }

    return null;
  }, [isMailto, isTel, isExternal, label, handleAction]);

  if (!needsModal) {
    return <a href={href}>{children}</a>;
  }

  const content = getModalContent();

  return (
    <>
      <a href={href} onClick={handleLinkClick}>
        {children}
      </a>

      <CustomAlertDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...content}
      />
    </>
  );
}

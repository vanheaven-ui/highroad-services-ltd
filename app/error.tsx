"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, WifiOff, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const isNetworkError =
    error.message?.toLowerCase().includes("fetch") ||
    error.message?.toLowerCase().includes("network") ||
    error.message?.toLowerCase().includes("failed to fetch") ||
    !navigator.onLine;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        <div className="bg-white rounded-2xl shadow-2xl border-t-4 border-accent-gold p-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            {isNetworkError ? (
              <WifiOff className="w-8 h-8 text-primary" />
            ) : (
              <AlertTriangle className="w-8 h-8 text-accent-gold" />
            )}
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-2">
            {isNetworkError ? "Connection Error" : "Unexpected Error"}
          </p>

          <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">
            {isNetworkError ? "No Internet Connection" : "Something Went Wrong"}
          </h1>

          <p className="text-gray-600 font-body leading-relaxed mb-8">
            {isNetworkError
              ? "We couldn't reach the server. Please check your internet connection and try again."
              : "An unexpected error occurred. If this persists, please reach out to us directly."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-6 py-3 bg-accent-gold text-primary font-bold rounded-lg hover:bg-yellow-500 transition duration-200"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition duration-200"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500 font-body">
          Need immediate help?{" "}
          <a
            href="mailto:info@highroadservicesltd.com"
            className="text-accent-gold hover:underline font-semibold"
          >
            info@highroadservicesltd.com
          </a>
        </p>
      </div>
    </main>
  );
}

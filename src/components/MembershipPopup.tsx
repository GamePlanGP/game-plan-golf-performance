"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const SHOW_DELAY_MS = 5000;
const DISMISSED_KEY = "membership-popup-dismissed";

const highlights = [
  "Unlimited GC Quad bay time",
  "High-speed video in every bay",
  "Open 5am – 10pm, every day",
  "No contract — cancel anytime",
];

export default function MembershipPopup() {
  const [open, setOpen] = useState(false);

  // Show once, 5 seconds after landing, unless already dismissed this session.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISSED_KEY)) return;
    } catch {
      // Storage unavailable — fall through and show the popup.
    }
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // Ignore — the popup just may show again on the next visit.
    }
  }, []);

  // Close on Escape and lock body scroll while the popup is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="membership-popup-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-brand-gray-950 border border-brand-green/40 rounded-lg p-6 md:p-8 max-h-[90vh] overflow-y-auto text-center">
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute top-4 right-4 text-brand-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <span className="inline-block text-brand-green text-xs font-semibold tracking-widest uppercase">
          Practice Membership
        </span>
        <h2
          id="membership-popup-title"
          className="font-heading text-3xl font-bold text-white mt-2"
        >
          Unlimited Practice for{" "}
          <span className="text-brand-green">$149/mo</span>
        </h2>
        <p className="text-brand-gray-300 text-sm leading-relaxed mt-3">
          Tour-level GC Quad data and high-speed video, whenever you want it. The
          best value in San Diego.
        </p>

        <ul className="mt-5 space-y-2 text-left max-w-xs mx-auto">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg
                className="w-4 h-4 text-brand-green shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-brand-gray-300 text-sm">{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/memberships"
          onClick={close}
          className="mt-6 inline-flex w-full items-center justify-center bg-brand-green hover:bg-brand-green-hover text-white text-sm font-semibold tracking-wide uppercase px-6 py-3 rounded transition-colors"
        >
          Become a Member
        </Link>
        <button
          type="button"
          onClick={close}
          className="mt-3 text-brand-gray-400 hover:text-white text-sm transition-colors"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}

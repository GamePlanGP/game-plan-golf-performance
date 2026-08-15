"use client";

import { useState } from "react";

export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-brand-gray-900/50 transition-colors"
      >
        <span className="text-white font-semibold text-base md:text-lg">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-brand-green shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-brand-gray-300 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

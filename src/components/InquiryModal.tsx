"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { submitInquiry } from "@/app/actions/inquiry";

type InquiryModalProps = {
  open: boolean;
  onClose: () => void;
  /** Inquiry type passed to the server action — sets the email subject line. */
  type: "membership" | "contact" | "training";
  title: string;
  description: string;
  /** Prefills the message box so the recipient knows what the inquiry is about. */
  defaultMessage?: string;
};

export default function InquiryModal({
  open,
  onClose,
  type,
  title,
  description,
  defaultMessage = "",
}: InquiryModalProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: defaultMessage,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Records when the form became interactive, so the server can reject
  // submissions that arrive implausibly fast (a sign of automation).
  const mountedAtRef = useRef(0);
  useEffect(() => {
    if (open) {
      mountedAtRef.current = Date.now();
      setSubmitted(false);
      setError("");
      setFormState((s) => ({ ...s, message: defaultMessage }));
    }
  }, [open, defaultMessage]);

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    formData.set("form_elapsed_ms", String(Date.now() - mountedAtRef.current));
    const result = await submitInquiry(type, formData);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
    setLoading(false);
  }

  const inputClasses =
    "w-full bg-brand-dark border border-brand-gray-800 rounded-lg px-4 py-3 text-white text-sm placeholder-brand-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
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

        {submitted ? (
          <div className="text-center py-12">
            <div className="text-brand-green mb-4">
              <svg
                className="w-12 h-12 mx-auto"
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
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Message Sent
            </h3>
            <p className="text-brand-gray-400 text-sm">
              We&apos;ll get back to you within one business day.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 bg-brand-green text-brand-dark font-semibold tracking-wide uppercase text-sm px-6 py-3 rounded hover:bg-brand-green-hover transition-colors active:scale-[0.98]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <span className="text-brand-green text-sm font-semibold tracking-widest uppercase">
                Contact Me for Pricing
              </span>
              <h2
                id="inquiry-modal-title"
                className="font-heading text-xl font-bold text-white mt-2"
              >
                {title}
              </h2>
              <p className="text-brand-gray-400 text-sm mt-2">{description}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="inquiry-name"
                  name="name"
                  required
                  className={inputClasses}
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="inquiry-email"
                  className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="inquiry-email"
                  name="email"
                  required
                  className={inputClasses}
                  placeholder="you@email.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="inquiry-phone"
                className="block text-sm font-medium text-brand-gray-300 mb-1.5"
              >
                Phone{" "}
                <span className="text-brand-gray-500">(optional)</span>
              </label>
              <input
                type="tel"
                id="inquiry-phone"
                name="phone"
                className={inputClasses}
                placeholder="(555) 000-0000"
                value={formState.phone}
                onChange={(e) =>
                  setFormState({ ...formState, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="inquiry-message"
                className="block text-sm font-medium text-brand-gray-300 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="inquiry-message"
                name="message"
                rows={4}
                className={inputClasses}
                placeholder="How can we make you a better golfer?"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-green text-brand-dark font-semibold tracking-wide uppercase text-sm px-6 py-3 rounded hover:bg-brand-green-hover transition-colors active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending…" : "Send Message"}
            </button>

            {/*
              Honeypot — hidden from real visitors (off-screen, untabbable, and
              hidden from assistive tech). Bots that auto-fill every field will
              populate it, and the server silently drops those submissions.
              Do not remove.
            */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
            >
              <label htmlFor="inquiry-company_website">
                Company website (leave blank)
              </label>
              <input
                type="text"
                id="inquiry-company_website"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

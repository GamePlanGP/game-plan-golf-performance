"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PromoBannerProps {
  href: string;
}

export default function PromoBanner({ href }: PromoBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green-muted via-brand-green to-brand-green-hover pt-24 md:pt-28 pb-8 md:pb-10">
      {/* Animated glow */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl pointer-events-none"
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Copy */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.span
              className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full pl-2.5 pr-4 py-1 mb-4"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-white"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              />
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Limited-Time Offer
              </span>
            </motion.span>

            <h2 className="font-heading text-white font-bold tracking-tight text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.05]">
              Elite Coaching for Every Golfer —{" "}
              <span className="whitespace-nowrap">Now $99 a Session</span>
            </h2>

            <p className="mt-3 text-white/90 text-sm md:text-base leading-relaxed">
              Christian helps golfers of every level get better &mdash; building
              the swing that&apos;s right for{" "}
              <span className="font-semibold text-white">you</span>, not a
              one-size-fits-all method. Golf Level 3 TPI Certified with deep
              expertise in{" "}
              <span className="font-semibold text-white">
                ground reaction forces
              </span>
              , he uses force plate data to build the most efficient movement
              pattern for each golfer.
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0 flex flex-col items-center gap-2">
            <Link
              href={href}
              className="inline-flex items-center justify-center gap-2 font-bold tracking-wide uppercase rounded-lg bg-white text-brand-green text-sm md:text-base px-7 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_50px_rgba(0,0,0,0.35)] active:translate-y-0 active:scale-[0.98]"
            >
              Claim the $99 Rate
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <span className="text-white/70 text-xs">
              No membership required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

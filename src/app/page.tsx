"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { CITIES_SERVED } from "@/lib/constants";

/* ─── Icon components ─── */
function TargetIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function ChartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 16l4-4 4 4 5-5" />
    </svg>
  );
}

function DumbbellIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.5 6.5h11M4 9h2.5v6H4a1 1 0 01-1-1v-4a1 1 0 011-1zM17.5 9H20a1 1 0 011 1v4a1 1 0 01-1 1h-2.5V9zM6.5 7v10M17.5 7v10M6.5 12h11" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function CrosshairIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeWidth={1.5} d="M12 3v4m0 10v4M3 12h4m10 0h4" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

/* ─── Hero line animation ─── */
const heroLines = [
  { text: "Your Swing", className: "text-white" },
  { text: "Has Data.", className: "text-white" },
  { text: "Start Using It.", className: "text-brand-green" },
];

/* ─── Data visualization mock ─── */
function DataVisualization() {
  const metrics = [
    { label: "Ball Speed", value: "167.2", unit: "mph", change: "+4.3" },
    { label: "Launch Angle", value: "11.8", unit: "°", change: "+0.7" },
    { label: "Spin Rate", value: "2,412", unit: "rpm", change: "-340" },
    { label: "Carry Distance", value: "278.4", unit: "yds", change: "+12.1" },
  ];

  return (
    <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 md:p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-brand-gray-400 text-xs uppercase tracking-wider">
            Session Data — Driver
          </p>
          <p className="text-white font-heading font-bold text-lg mt-1">
            GC Quad Analysis
          </p>
        </div>
        <motion.div
          className="text-brand-green text-xs font-semibold bg-brand-green/10 px-3 py-1 rounded-full flex items-center gap-1.5"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
          Live Session
        </motion.div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {metrics.map((metric, i) => (
          <FadeIn key={metric.label} delay={0.1 * i}>
            <div className="bg-brand-dark rounded-lg p-4 border border-brand-gray-800">
              <p className="text-brand-gray-500 text-xs uppercase tracking-wider">
                {metric.label}
              </p>
              <p className="text-white font-heading font-bold text-2xl mt-1">
                <AnimatedCounter value={metric.value} />
                <span className="text-brand-gray-400 text-sm ml-1 font-normal">
                  {metric.unit}
                </span>
              </p>
              <p className="text-brand-green text-xs font-semibold mt-1">
                {metric.change}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      {/* Animated chart */}
      <div className="mt-6 h-32 bg-brand-dark rounded-lg border border-brand-gray-800 flex items-end justify-around px-4 pb-4 gap-1.5">
        {[65, 72, 68, 80, 75, 82, 78, 88, 85, 90, 87, 92].map((h, i) => (
          <motion.div
            key={i}
            className="bg-brand-green/20 rounded-t w-full relative overflow-hidden"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-green to-brand-green/60 rounded-t" style={{ height: "50%" }} />
          </motion.div>
        ))}
      </div>
      <p className="text-brand-gray-500 text-xs mt-3 text-center">
        Carry distance trend — 12 shot sequence
      </p>
    </div>
  );
}

/* ─── Credential Badge (inline, upgraded) ─── */
function CredBadge({
  icon,
  label,
  sublabel,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="flex items-center gap-3 px-5 py-4 group">
        <div className="w-10 h-10 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-white text-sm font-semibold leading-tight">{label}</p>
          <p className="text-brand-gray-400 text-xs mt-0.5">{sublabel}</p>
        </div>
      </div>
    </FadeIn>
  );
}

/* ─── Page ─── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax background image */}
        <motion.div className="absolute inset-0" style={{ y: heroImageY, scale: heroImageScale }}>
          {/*
            [REPLACE] Hero background image
            Ideal: Wide shot of the facility interior with GC Quad bays, dramatic lighting
            Aspect ratio: 16:9 minimum, full-bleed
          */}
          <Image
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80"
            alt="Golfer in focused practice position"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <motion.span
              className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Locally Owned in San Marcos, CA
            </motion.span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              {heroLines.map((line, i) => (
                <motion.span
                  key={i}
                  className={`block ${line.className}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + i * 0.15,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-brand-gray-300 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              GC Quad launch monitors. High-speed video. Real data on every
              shot. Every session at Game Plan is built on real numbers — so
              your improvement is measurable, not theoretical.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Button href="/memberships" size="lg">
                Become a Member
              </Button>
              <Button href="/lessons" variant="secondary" size="lg">
                Book a Lesson
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-5 inline-block"
            >
              <Link
                href="/memberships"
                className="inline-flex items-center gap-3 bg-brand-green/10 border border-brand-green/30 rounded-full pl-2 pr-5 py-2 hover:bg-brand-green/20 hover:border-brand-green/50 transition-colors duration-200"
              >
                <span className="bg-brand-green text-white text-sm font-bold px-3 py-1 rounded-full">
                  $149/mo
                </span>
                <span className="text-brand-gray-300 text-sm">Unlimited practice membership</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <svg className="w-6 h-6 text-brand-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Credibility Bar ─── */}
      <section className="bg-brand-gray-950 border-y border-brand-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-gray-800">
            <CredBadge
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
                </svg>
              }
              label="Locally Owned"
              sublabel="By Golfers"
              delay={0}
            />
            <CredBadge
              icon={<CrosshairIcon />}
              label="GC Quad Technology"
              sublabel="PGA Tour Standard"
              delay={0.05}
            />
            <CredBadge
              icon={<ActivityIcon />}
              label="Swing Catalyst"
              sublabel="3D Force Plate Analysis"
              delay={0.1}
            />
            <a
              href="https://www.forbes.com/sites/scottkramer/2025/08/27/how-state-of-the-art-golf-tech-helped-remedy-my-swing-in-an-instant/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <CredBadge
                icon={<span className="font-heading font-bold text-sm">F</span>}
                label="Featured in Forbes"
                sublabel="August 2025"
                delay={0.15}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Three Pillars of Better Golf"
            description="Every golfer's path to improvement is different. We meet you where you are with coaching, practice, and physical training — all powered by data."
          />

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<ChartIcon />}
              title="Practice Memberships"
              description="Self-serve GC Quad bays with high-speed video, open 5am to 10pm, every day. Unlimited tour-level practice for $149/month — the best value in San Diego."
              href="/memberships"
              delay={0}
            />
            <ServiceCard
              icon={<TargetIcon />}
              title="Lessons"
              description="One-on-one coaching from Swing Catalyst certified instructors with professional playing experience. GC Quad data, force plates, and high-speed video — not a screen in an empty bay."
              href="/lessons"
              delay={0.1}
            />
            <ServiceCard
              icon={<DumbbellIcon />}
              title="Personal Training"
              description="Golf-specific athletic training from a NASM-CPT, TPI Level 2 certified trainer. Build the body your swing demands."
              href="/training"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ─── We Don't Guess. We Measure. ─── */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Our Approach"
                title="We Don't Guess. We Measure."
                description="Every session generates real data. Every coaching decision is backed by evidence. This is what separates serious golf performance from hitting balls and hoping."
                align="left"
              />

              <div className="space-y-5">
                {[
                  {
                    icon: <CrosshairIcon />,
                    title: "GC Quad Launch Monitor",
                    desc: "Optical tracking captures ball speed, launch angle, spin rate, and spin axis with PGA Tour-level accuracy. More precise than radar-based systems for ball data.",
                  },
                  {
                    icon: <CameraIcon />,
                    title: "High-Speed Video",
                    desc: "Frame-by-frame analysis reveals positions and transitions invisible to the naked eye. See exactly what your body does — not what it feels like it does.",
                  },
                  {
                    icon: <ActivityIcon />,
                    title: "Swing Catalyst Force Plates",
                    desc: "Embedded force plates measure ground reaction forces throughout your swing — how you load, transfer, and deliver power from the ground up. Technology you won't find at a simulator bar.",
                  },
                  {
                    icon: <DumbbellIcon />,
                    title: "3D Movement Screening",
                    desc: "Full body mobility and stability assessment tied directly to your swing mechanics. Identifies physical limitations affecting your ball flight.",
                  },
                ].map((item, i) => (
                  <FadeIn key={item.title} delay={0.1 * i}>
                    <div className="flex gap-4 p-4 rounded-lg hover:bg-white/[0.02] transition-colors duration-300">
                      <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base">
                          {item.title}
                        </h3>
                        <p className="text-brand-gray-400 text-sm mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn delay={0.2} direction="right">
              <DataVisualization />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="From Our Golfers"
            title="Results They Can Feel — and Measure"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="I have had a couple great sessions with Ryan. His expertise in both the swing and sequence of how power is generated was very helpful in helping me unlock potential. He showed me with the use of pressure plates where I was bleeding energy. I saw gains while I was there and even more since then. My index has dropped from a 7.1 to a 4.9 in just a few weeks."
              author="Jose Miraflor"
              detail="Google Review"
              href="https://maps.app.goo.gl/Cb4Dk4EAGvTW8Uss6"
              image="/testimonials/jose-miraflor.jpg"
              delay={0}
            />
            <TestimonialCard
              quote="Ryan and Christian have created an outstanding facility that makes you feel welcome the moment you walk through the door. They take the time to walk you through the technology, ensuring you get the most out of each session. It's a top-tier environment that's not only relaxing but also a great place to focus on improving your game."
              author="Ian Corso"
              detail="Google Review"
              href="https://maps.app.goo.gl/Ahkv8pZuTFdy5vd97"
              image="/testimonials/ian-corso.jpg"
              delay={0.1}
            />
            <TestimonialCard
              quote="I have been a member for several months and it has been a great experience. Not only are Ryan and Christian good people, but the set up and equipment has really helped me analyze my swing and make improvements. Would highly recommend if you are interested in improving your game!"
              author="Steven Gordon"
              detail="Google Review"
              href="https://maps.app.goo.gl/5XZCPVvhKQocGR7n9"
              image="/testimonials/steven-gordon.jpg"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ─── Why Game Plan ─── */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Game Plan"
            title="Performance Facility, Not a Simulator Bar"
            description="Franchise simulator bars rent you a screen. We coach you in person with the same technology used on the PGA Tour."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Simulator Bar column */}
            <FadeIn>
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 md:p-8">
                <p className="text-brand-gray-500 text-sm font-semibold tracking-widest uppercase mb-6">
                  At a Simulator Bar
                </p>
                <ul className="space-y-4">
                  {[
                    "Self-guided simulator sessions",
                    "No instructor in the bay with you",
                    "Radar-based launch monitors",
                    "Radar monitors require special range balls — not your gamer ball",
                    "No force plates or biomechanics",
                    "No physical training program",
                    "Franchise — same playbook everywhere",
                    "Shared space — simulator foursomes and parties in the next bay",
                    "Entertainment-first environment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-gray-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-brand-gray-400 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Game Plan column */}
            <FadeIn delay={0.1}>
              <div className="bg-brand-green/5 border border-brand-green/20 rounded-lg p-6 md:p-8">
                <p className="text-brand-green text-sm font-semibold tracking-widest uppercase mb-6">
                  At Game Plan
                </p>
                <ul className="space-y-4">
                  {[
                    "Certified instructor coaching every session",
                    "Swing Catalyst force plates — ground reaction data",
                    "GC Quad optical monitor — use your own ball for real-world numbers",
                    "High-speed video in every bay — even self-serve",
                    "Fiberbuilt hitting mats — premium turf, regularly maintained and replaced",
                    "Golf-specific physical training (NASM + TPI)",
                    "Locally owned — owner is the head performance coach",
                    "Members only — private community, no public walk-ins",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-brand-gray-200 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Local Community ─── */}
      <section className="py-16 md:py-20 bg-brand-gray-950 border-y border-brand-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
              Proudly Serving
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
              North County San Diego&apos;s Premier Golf Performance Facility
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 max-w-2xl mx-auto">
              {CITIES_SERVED.map((city, i) => (
                <span key={city} className="text-brand-gray-300 text-sm">
                  {city}
                  {i < CITIES_SERVED.length - 1 && (
                    <span className="text-brand-gray-600 ml-3">&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-24 md:py-32 bg-brand-darker relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-brand-green/8 via-transparent to-transparent" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-green/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to Stop Guessing?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-lg text-brand-gray-300 max-w-xl mx-auto">
              Book your first session and see what your swing data reveals.
              Every lesson starts with measurement — and ends with a plan.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8">
              <Button href="/lessons" size="lg">
                Book Your First Session
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

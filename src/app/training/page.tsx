"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

const credentials = [
  {
    title: "NASM-CPT",
    description: "National Academy of Sports Medicine — Certified Personal Trainer",
  },
  {
    title: "TPI Level 2 Fitness",
    description: "Titleist Performance Institute — Golf Fitness Specialist",
  },
  {
    title: "TPI Level 2 Power",
    description: "Titleist Performance Institute — Power Specialist",
  },
  {
    title: "Golf Digest Certified",
    description: "Golf Digest Certified Fitness Trainer",
  },
];

const process = [
  {
    step: "01",
    title: "Assessment",
    description:
      "We start with a TPI Screening and physical assessment. This identifies mobility restrictions, stability deficits, and strength imbalances that directly affect your swing mechanics and ball flight.",
  },
  {
    step: "02",
    title: "Customized Program",
    description:
      "Based on your screening results and golf goals, we build a training program specific to your body. Not a generic workout — a targeted plan that addresses your individual physical limitations.",
  },
  {
    step: "03",
    title: "Train & Track",
    description:
      "Regular training sessions with measurable progress markers. We track improvements in mobility, strength, and power — and correlate them directly to changes in your swing data and on-course performance.",
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          {/*
            [REPLACE] Background: Athlete in focused training — kettlebell swing, resistance band,
            or functional movement in a gym/performance setting
            Aspect ratio: 16:9, full-bleed
          */}
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Athletic training environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-dark/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
                Personal Training
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Build the Body Your Swing Demands
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-brand-gray-300 leading-relaxed">
                Physical limitations show up in ball flight data. We identify
                them, build a plan around them, and train you to move better —
                so you can swing better.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8">
                <Button href="#training-options" size="lg">
                  Book a Training Session
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 bg-brand-gray-950 border-y border-brand-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {credentials.map((cred, i) => (
              <FadeIn key={cred.title} delay={0.1 * i}>
                <div className="text-center">
                  <p className="text-brand-green font-heading font-bold text-lg">
                    {cred.title}
                  </p>
                  <p className="text-brand-gray-400 text-xs mt-1 leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Connection */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Why It Matters"
                title="Your Body Is Your Equipment"
                description="A $500 driver won't fix a hip that can't rotate. Physical limitations directly affect ball flight — and no amount of swing coaching will overcome them. That's why we train the body alongside the swing."
                align="left"
              />
              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  {[
                    {
                      limitation: "Limited hip rotation",
                      effect: "Inconsistent path, compensatory slide",
                    },
                    {
                      limitation: "Weak glutes",
                      effect: "Loss of ground force, reduced speed",
                    },
                    {
                      limitation: "Thoracic spine stiffness",
                      effect: "Restricted shoulder turn, poor sequencing",
                    },
                    {
                      limitation: "Poor ankle mobility",
                      effect: "Unstable base, sway in transition",
                    },
                  ].map((item) => (
                    <div
                      key={item.limitation}
                      className="flex items-start gap-3 bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-4"
                    >
                      <svg
                        className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {item.limitation}
                        </p>
                        <p className="text-brand-gray-400 text-xs mt-0.5">
                          Swing effect: {item.effect}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80"
                  alt="Athlete performing rotational exercise"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Process"
            title="Assessment to Results"
            description="Every training program starts with data — a full movement screening that connects your physical capabilities to your swing mechanics."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {process.map((item, i) => (
              <FadeIn key={item.step} delay={0.1 * i}>
                <div className="relative">
                  <span className="text-brand-green/20 font-heading font-bold text-7xl absolute -top-4 -left-2">
                    {item.step}
                  </span>
                  <div className="relative pt-8">
                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Adult & Junior */}
      <section id="training-options" className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-8 h-full">
                <span className="text-brand-green text-sm font-semibold tracking-widest uppercase">
                  Adult Training
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-3 mb-4">
                  Perform at Your Peak — Longer
                </h3>
                <p className="text-brand-gray-300 text-sm leading-relaxed mb-4">
                  Whether you&apos;re chasing distance, recovering from injury,
                  or just want to play pain-free into your 60s and beyond, adult
                  training programs are designed around your specific movement
                  profile and goals.
                </p>
                <ul className="space-y-2">
                  {[
                    "Mobility and flexibility programming",
                    "Rotational power development",
                    "Injury prevention and recovery support",
                    "Strength training scaled to your level",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-brand-gray-300"
                    >
                      <span className="text-brand-green">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://clients.uschedule.com/gameplangolfperformance/Product/PrepayServiceDetail/37593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-between bg-brand-dark border border-brand-gray-700 hover:border-brand-green text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors"
                >
                  <span>8-Pack Fitness</span>
                  <span className="text-brand-green">$1,000</span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-8 h-full">
                <span className="text-brand-green text-sm font-semibold tracking-widest uppercase">
                  Junior Training
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-3 mb-4">
                  Build Athletes, Not Just Golfers
                </h3>
                <p className="text-brand-gray-300 text-sm leading-relaxed mb-4">
                  Junior programs focus on building a strong athletic foundation
                  that supports long-term development. We train movement
                  quality, coordination, and sport-specific power — not just
                  golf mechanics.
                </p>
                <ul className="space-y-2">
                  {[
                    "Age-appropriate strength and conditioning",
                    "Movement quality and coordination",
                    "Speed and power development",
                    "Injury prevention for growing bodies",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-brand-gray-300"
                    >
                      <span className="text-brand-green">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://clients.uschedule.com/gameplangolfperformance/Product/PrepayServiceDetail/42706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-between bg-brand-dark border border-brand-gray-700 hover:border-brand-green text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors"
                >
                  <span>Junior Fitness Session</span>
                  <span className="text-brand-green">$135/session</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Your Swing Is Only as Good as Your Body Allows
            </h2>
            <p className="mt-4 text-lg text-brand-gray-300">
              Start with a TPI Screening and find out exactly what your
              body needs to unlock the swing you&apos;re capable of.
            </p>
            <div className="mt-8">
              <Button href="https://clients.uschedule.com/gameplangolfperformance/Product/PrepayServiceDetail/42384" size="lg">
                Book a Screening
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

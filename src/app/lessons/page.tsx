"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { BOOKING_URL } from "@/lib/constants";

const techStack = [
  {
    title: "GC Quad Launch Monitor",
    description:
      "Quadrascopic optical cameras capture ball speed, launch angle, spin rate, spin axis, and club delivery data with tour-level precision. Unlike radar systems, GC Quad measures the ball directly — which means you can use your own gamer ball and get accurate, real-world numbers, not estimates calibrated to a range ball.",
    stat: "200+ data points per shot",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&q=80",
    /*
      [REPLACE] Image: Close-up of GC Quad unit or screen showing launch monitor data
      Aspect ratio: 4:3
      Alt: "GC Quad launch monitor displaying ball flight data"
    */
  },
  {
    title: "High-Speed Video Analysis",
    description:
      "Multiple camera angles capture your swing at high frame rates, revealing positions and transitions that are invisible in real time. Paired with drawing tools and overlay comparisons, you see exactly where your movement pattern diverges from your target positions.",
    stat: "Frame-by-frame breakdown",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",
    /*
      [REPLACE] Image: High-speed camera setup or split-screen swing comparison
      Aspect ratio: 4:3
      Alt: "High-speed video analysis of golf swing"
    */
  },
  {
    title: "Swing Catalyst Force Plates",
    description:
      "Swing Catalyst dual 3D force plates measure ground reaction forces throughout your swing — showing how you load, transfer, and deliver power from the ground up. This data connects your physical movement to your ball flight in a way that no camera can. It's technology you won't find at a simulator bar.",
    stat: "Ground reaction force mapping",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    /*
      [REPLACE] Image: Golfer standing on force plates, or force plate data visualization
      Aspect ratio: 4:3
      Alt: "Force plate analysis during golf swing"
    */
  },
];

export default function LessonsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          {/*
            [REPLACE] Background: Coach working 1:1 with a golfer mid-lesson
            Aspect ratio: 16:9, full-bleed
          */}
          <Image
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80"
            alt="Golf coaching session"
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
                Lessons
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Coaching That Adjusts to You, Not the Other Way Around
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-brand-gray-300 leading-relaxed">
                Every golfer&apos;s swing is different. Your coaching should be
                too. We use data to build a plan around how <em>you</em> move —
                not a one-size-fits-all method.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8">
                <Button href={BOOKING_URL} size="lg" external>
                  Book a Lesson
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How We Coach"
            title="Data First. Feel Second. Results Always."
            description="We start by measuring what's actually happening in your swing. Then we connect the data to what you feel. The result: changes that stick because they're grounded in reality, not guesswork."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Measure",
                description:
                  "Your first session starts with a full data capture — launch monitor numbers, high-speed video from multiple angles, and force plate readings. We establish your baseline across every club you bring.",
              },
              {
                step: "02",
                title: "Analyze",
                description:
                  "We identify the specific patterns in your data that are costing you distance, accuracy, or consistency. No guessing about what 'might' be wrong — the numbers tell us exactly where to focus.",
              },
              {
                step: "03",
                title: "Build Your Plan",
                description:
                  "You leave every session with a clear, prioritized improvement plan. We sequence changes so you can practice with confidence between sessions, knowing exactly what to work on and why.",
              },
            ].map((item, i) => (
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

      {/* Instructors */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Your Instructors"
            title="Certified. Experienced. Data-Driven."
            description="Every lesson at Game Plan is led by an instructor who is Swing Catalyst certified and equipped with force plate technology. This isn't a driving range lesson — it's a professional coaching session backed by tour-level data."
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12">
            {[
              {
                name: "Ryan Faust",
                role: "Founder & Head Instructor",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
                /*
                  [REPLACE] Image: Professional photo of Ryan Faust
                  Aspect ratio: 3:4 (portrait)
                  Alt: "Ryan Faust — Founder & Head Instructor"
                */
                bio: "Ryan built Game Plan around the belief that every golfer deserves access to tour-level coaching. A former competitive amateur turned instructor, he combines swing coaching expertise with athletic performance training — using data from every angle to build plans that actually stick.",
                credentials: [
                  "Swing Catalyst Ambassador & Level 2",
                  "Swing Catalyst — Ground Reaction Force Certified",
                  "TPI Level 3 Golf",
                  "TPI Certified — Power 2 & Fitness 2",
                  "NASM Certified Personal Trainer",
                  "Mach 3 Speed Training Authorized",
                ],
              },
              {
                name: "Christian Chang",
                role: "Instructor",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
                /*
                  [REPLACE] Image: Professional photo of Christian Chang
                  Aspect ratio: 3:4 (portrait)
                  Alt: "Christian Chang — Instructor"
                */
                bio: "Christian grew up playing golf in San Diego before turning pro in 2016 and competing on the Mackenzie Tour (PGA Canada) and mini-tour circuits. He brings that competitive, data-informed edge to every lesson — tailoring each session to how the individual golfer moves and what they're working toward.",
                credentials: [
                  "Swing Catalyst Level 2 Certified",
                  "Former Professional Golfer",
                  "Mackenzie Tour (PGA Canada)",
                ],
              },
            ].map((instructor, i) => (
              <FadeIn key={instructor.name} delay={0.1 * i}>
                <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg overflow-hidden">
                  <div className="relative aspect-[3/4] max-h-[400px]">
                    <Image
                      src={instructor.image}
                      alt={`${instructor.name} — ${instructor.role}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-gray-950 via-brand-gray-950/40 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="font-heading text-2xl font-bold text-white">
                        {instructor.name}
                      </h3>
                      <p className="text-brand-green text-sm font-semibold mt-1">
                        {instructor.role}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-4">
                    <p className="text-brand-gray-300 text-sm leading-relaxed">
                      {instructor.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {instructor.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="bg-brand-dark border border-brand-gray-800 text-brand-gray-200 text-xs font-semibold px-3 py-1.5 rounded"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation callout */}
      <section className="py-16 bg-brand-green/5 border-y border-brand-green/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              &ldquo;Unlike the typical driving range pro,
              <br />
              <span className="text-brand-green">
                we don&apos;t guess — we measure.&rdquo;
              </span>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Technology"
            title="Tour-Level Data in Every Session"
            description="The same technology used by PGA Tour players and their coaches. Except you don't need a tour card to access it."
          />

          <div className="space-y-16 md:space-y-24">
            {techStack.map((tech, i) => (
              <FadeIn key={tech.title} delay={0.1}>
                <div
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={tech.image}
                        alt={tech.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-brand-green/90 text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                          {tech.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                      {tech.title}
                    </h3>
                    <p className="text-brand-gray-300 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              See What Your Data Says
            </h2>
            <p className="mt-4 text-lg text-brand-gray-300">
              Your first lesson includes a complete data capture and analysis.
              Walk out with numbers you&apos;ve never seen and a plan to use
              them.
            </p>
            <div className="mt-8">
              <Button href={BOOKING_URL} size="lg" external>
                Book Your First Lesson
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

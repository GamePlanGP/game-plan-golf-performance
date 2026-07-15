import Link from "next/link";
import FadeIn from "./FadeIn";

interface PromoBannerProps {
  href: string;
}

export default function PromoBanner({ href }: PromoBannerProps) {
  return (
    <section className="bg-brand-green py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest">
                Limited-Time Offer
              </p>
              <p className="text-white font-heading text-xl md:text-2xl font-bold mt-1">
                $99 / Session with Christian Chang
              </p>
              <p className="text-white/90 text-sm mt-1 max-w-xl">
                Golf Level 3 TPI Certified &middot; Ground Reaction Force
                Expert. Buy as many sessions as you&apos;d like, up front
                &mdash; lessons expire 3 months after purchase.
              </p>
            </div>
            <Link
              href={href}
              className="inline-flex items-center justify-center shrink-0 font-semibold tracking-wide uppercase rounded transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] bg-white text-brand-green hover:bg-brand-gray-100 px-6 py-3 text-sm"
            >
              Book With Christian
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

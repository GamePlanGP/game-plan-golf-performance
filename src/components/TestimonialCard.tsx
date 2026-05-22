import Image from "next/image";
import FadeIn from "./FadeIn";

interface TestimonialCardProps {
  quote: string;
  author: string;
  detail?: string;
  href?: string;
  image?: string;
  delay?: number;
}

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-brand-green"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({
  quote,
  author,
  detail,
  href,
  image,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="relative bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 md:p-8 h-full flex flex-col overflow-hidden group hover:border-brand-gray-700 transition-colors duration-300">
        {/* Subtle gradient accent on top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />

        <StarRating />
        <blockquote className="text-white leading-relaxed flex-1 text-base md:text-lg font-medium">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-6 pt-4 border-t border-brand-gray-800 flex items-center gap-3">
          {image && (
            <Image
              src={image}
              alt={author}
              width={40}
              height={40}
              className="rounded-full shrink-0"
            />
          )}
          <div>
            <cite className="text-brand-green font-semibold not-italic text-sm tracking-wide">
              {author}
            </cite>
            {detail &&
              (href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray-500 text-xs mt-0.5 hover:text-brand-green transition-colors duration-200 block"
                >
                  {detail}
                </a>
              ) : (
                <p className="text-brand-gray-500 text-xs mt-0.5">{detail}</p>
              ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

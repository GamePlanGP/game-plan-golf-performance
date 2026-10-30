import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { BLOG_POSTS } from "@/lib/blog";

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="From the GP Lab"
            title="Blog"
            description="Practice tips and guidance to help you get more out of every session."
          />
        </div>
      </section>

      {/* Posts */}
      <section className="pb-24 md:pb-32 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {BLOG_POSTS.map((post, i) => (
              <FadeIn key={post.slug} delay={0.1 * i}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-brand-gray-950 border border-brand-gray-800 hover:border-brand-green rounded-lg p-8 transition-colors"
                >
                  <h2 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-brand-gray-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 text-brand-green text-sm font-semibold">
                    Read Post →
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

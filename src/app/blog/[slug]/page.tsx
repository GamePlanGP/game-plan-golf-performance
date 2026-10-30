import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import { BLOG_POSTS, getPost, BlogBlock } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-brand-gray-300 text-lg leading-relaxed mb-6">
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3 className="font-heading text-xl md:text-2xl font-bold text-white mt-10 mb-3">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mb-6 space-y-4">
          {block.items.map((item) => (
            <li
              key={item.text}
              className="flex gap-3 text-brand-gray-300 text-lg leading-relaxed"
            >
              <span
                className="mt-3 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"
                aria-hidden="true"
              />
              <span>
                {item.lead && (
                  <strong className="text-white font-semibold">
                    {item.lead}{" "}
                  </strong>
                )}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className="my-8 border-l-4 border-brand-green bg-brand-gray-950 rounded-r-lg p-6">
          <p className="text-brand-gray-300 text-lg leading-relaxed">
            <strong className="text-brand-green font-semibold">
              {block.label}:
            </strong>{" "}
            {block.text}
          </p>
        </aside>
      );
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-6 hover:underline"
          >
            ← Blog
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-10">
            {post.title}
          </h1>
        </FadeIn>

        {post.sections.map((section, i) => (
          <section key={section.heading ?? i} className={i > 0 ? "mt-14" : ""}>
            {section.heading && (
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
                {section.heading}
              </h2>
            )}
            {section.blocks.map((block, j) => (
              <Block key={j} block={block} />
            ))}
          </section>
        ))}

        <div className="mt-16 pt-10 border-t border-brand-gray-800 flex flex-col sm:flex-row gap-4">
          <Button href="/memberships">Become a Member</Button>
          <Button href="/lessons" variant="secondary">
            Book a Lesson
          </Button>
        </div>
      </div>
    </article>
  );
}

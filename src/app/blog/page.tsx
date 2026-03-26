import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import JsonLd from '@/components/JsonLd'
import { blogPosts } from '@/lib/blog-data'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Car Detailing Tips & Guides | JRC Detailing Blog',
  description:
    'Expert car detailing tips, pricing guides, and paint protection advice from Jesse Curtain at JRC Detailing. Covering ceramic coating, paint correction, and mobile detailing in Brisbane.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Car Detailing Tips & Guides | JRC Detailing Blog',
    description:
      'Expert car detailing tips, pricing guides, and paint protection advice from JRC Detailing in Victoria Point, Brisbane South.',
    url: `${SITE_URL}/blog`,
  },
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ])}
      />

      {/* Hero */}
      <section className="bg-dark pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Blog
            </p>
            <h1 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl lg:text-6xl">
              Car Detailing Tips &amp; Guides
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray">
              Practical advice on car care, paint protection, and getting the most out of
              professional detailing. Written by Jesse Curtain, with {'>'}7 years of
              hands-on experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-white/6 bg-dark-2 p-8 transition-all duration-300 hover:border-red/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-red/5"
                >
                  {/* Date and read time */}
                  <div className="mb-4 flex items-center gap-3">
                    <time
                      dateTime={post.date}
                      className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-white/30"
                    >
                      {formatDate(post.date)}
                    </time>
                    <span className="text-white/10">|</span>
                    <span className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-white/30">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 font-heading text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-red">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-white/50">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center gap-2 font-heading text-[0.65rem] font-semibold uppercase tracking-[2px] text-red transition-all duration-300 group-hover:gap-3">
                    Read Article
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-heading text-3xl font-extrabold md:text-4xl">
              Need Professional Detailing?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-white/50">
              Whether your car needs a quick refresh or a full transformation, Jesse
              can help. Mobile service across Victoria Point, Redlands, and Brisbane
              South.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-red px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25 hover:scale-[1.03] active:scale-[0.98]"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
              >
                View Packages
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

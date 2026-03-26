import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/AnimatedSection'
import JsonLd from '@/components/JsonLd'
import { blogPosts, getBlogPost, getRelatedPosts } from '@/lib/blog-data'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE_URL, CONTACT } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `${SITE_URL}/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function articleSchema(post: {
  title: string
  excerpt: string
  date: string
  author: string
  slug: string
  keywords: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: 'Founder & Lead Detailer',
      worksFor: {
        '@type': 'LocalBusiness',
        name: 'JRC Detailing',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'JRC Detailing',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post)

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
        ])}
      />

      {/* Header */}
      <section className="bg-dark pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-white/30"
            >
              <Link
                href="/"
                className="transition-colors hover:text-white/60"
              >
                Home
              </Link>
              <span className="text-white/15">/</span>
              <Link
                href="/blog"
                className="transition-colors hover:text-white/60"
              >
                Blog
              </Link>
              <span className="text-white/15">/</span>
              <span className="text-white/50">{post.title}</span>
            </nav>

            {/* Meta */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <time
                dateTime={post.date}
                className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-red"
              >
                {formatDate(post.date)}
              </time>
              <span className="text-white/10">|</span>
              <span className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-white/30">
                {post.readTime}
              </span>
              <span className="text-white/10">|</span>
              <span className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-white/30">
                By {post.author}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-dark pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h2:text-white md:prose-h2:text-3xl
                prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-h3:text-white/90
                prose-p:text-white/60 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-blue prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-blue-hover prose-a:transition-colors
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-white/60 prose-ol:text-white/60
                prose-li:marker:text-red prose-li:mb-1
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>
        </div>
      </article>

      {/* Divider */}
      <div className="mx-auto max-w-3xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-red/30 to-transparent" />
      </div>

      {/* CTA */}
      <section className="bg-dark py-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <div className="rounded-lg border border-red/20 bg-dark-2 p-8 text-center md:p-12">
              <p className="mb-2 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
                Ready to Book?
              </p>
              <h2 className="mb-4 font-heading text-2xl font-extrabold md:text-3xl">
                Get Your Car Looking Its Best
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-base text-white/50">
                Professional mobile detailing across Victoria Point, Redlands, and
                Brisbane South. Call Jesse for a free, no-obligation quote.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-sm bg-red px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={CONTACT.phoneHref}
                  className="rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Call {CONTACT.phone}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-black py-20">
          <div className="mx-auto max-w-7xl px-6">
            <AnimatedSection className="mb-12 text-center">
              <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
                Keep Reading
              </p>
              <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
                Related Articles
              </h2>
            </AnimatedSection>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {relatedPosts.map((related, i) => (
                <AnimatedSection key={related.slug} delay={i * 0.1}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group flex h-full flex-col rounded-lg border border-white/6 bg-dark-2 p-8 transition-all duration-300 hover:border-blue/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue/5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <time
                        dateTime={related.date}
                        className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-white/30"
                      >
                        {formatDate(related.date)}
                      </time>
                      <span className="text-white/10">|</span>
                      <span className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-white/30">
                        {related.readTime}
                      </span>
                    </div>
                    <h3 className="mb-3 font-heading text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-blue">
                      {related.title}
                    </h3>
                    <p className="flex-grow text-sm leading-relaxed text-white/45">
                      {related.excerpt}
                    </p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

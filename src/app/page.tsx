import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import StatsRow from '@/components/StatsRow'
import ServiceCard from '@/components/ServiceCard'
import AnimatedSection from '@/components/AnimatedSection'
import SectionDivider from '@/components/SectionDivider'
import JsonLd from '@/components/JsonLd'
import { services, addons, galleryImages, areas, polishingImage, ceramicBgImage } from '@/lib/data'
import { CONTACT, OWNER, SITE_URL, SITE_NAME } from '@/lib/constants'
import { breadcrumbSchema, serviceSchema, faqSchema, reviewSchema } from '@/lib/seo'

const homeFaqs = [
  {
    question: 'What areas does JRC Detailing service?',
    answer:
      'JRC Detailing is a fully mobile service covering Victoria Point, Cleveland, Capalaba, Redland Bay, Thornlands, Wellington Point, Ormiston, Alexandra Hills, Birkdale, Wynnum, Manly, and greater Brisbane South. Jesse brings everything needed directly to your location.',
  },
  {
    question: 'How do I book a mobile detail?',
    answer:
      'You can book by calling 0481 998 874, sending a message through the contact form, or reaching out via Instagram @jrc.detailing_. Jesse will get back to you with a tailored quote for your vehicle.',
  },
  {
    question: 'What is included in a full detail?',
    answer:
      'The Full Detail ($370) includes a thorough interior detail with shampoo and steam cleaning, exterior wash, 1-stage polish, wax protection, door jams cleaned, and wheels dressed. It is the most popular package for a complete inside-and-out transformation.',
  },
]

export const metadata = {
  title: 'Car Detailing Victoria Point | Mobile Detailing Brisbane South',
  description:
    'Professional mobile car detailing in Victoria Point, Redlands and Brisbane South. Ceramic coating, paint correction, interior detailing from $99. 7+ years experience. Call 0481 998 874.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  const topServices = services.slice(0, 6)
  const previewImages = galleryImages.slice(0, 4)

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: SITE_URL }])} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <JsonLd data={reviewSchema()} />
      {topServices.map((service) => (
        <JsonLd key={service.slug} data={serviceSchema(service)} />
      ))}

      {/* ── Hero ── */}
      <Hero />

      {/* ── Trust Bar ── */}
      <TrustBar />

      {/* ── Stats Row ── */}
      <section className="bg-black py-20">
        <StatsRow />
      </section>

      {/* ── About Split ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Image */}
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={polishingImage}
                  alt="Jesse Curtain machine polishing a vehicle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>
            </AnimatedSection>

            {/* Right: Copy */}
            <AnimatedSection direction="right">
              <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
                About JRC
              </p>
              <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
                Meet <span className="text-gradient-blue">Jesse Curtain</span>
              </h2>
              <p className="mb-4 text-base leading-relaxed text-white/60">
                With {OWNER.experience} years of hands-on experience, Jesse has built JRC Detailing
                on precision, quality products, and results that speak for themselves. From daily
                drivers to prestige vehicles, every detail gets the same meticulous attention.
                Specialising in{' '}
                <Link href="/ceramic-coating" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                  ceramic coating in Brisbane
                </Link>,{' '}
                <Link href="/paint-correction" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                  paint correction
                </Link>, and{' '}
                <Link href="/interior-detailing" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                  interior car detailing
                </Link>.
              </p>
              <p className="mb-8 text-base leading-relaxed text-white/60">
                Based in {OWNER.location}, JRC Detailing is a fully mobile service covering the
                Redlands, Bayside, and greater Brisbane South. No workshop needed; Jesse brings
                everything to your door.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-block rounded-sm bg-red px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Learn More About Jesse
                </Link>
                <Link
                  href="/contact"
                  className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Get a Quote
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="red" />

      {/* ── Services Overview ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Services &amp; Pricing
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              Packages for Every Vehicle
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              From a quick refresh to a full transformation. All packages include mobile service
              across Victoria Point, Redlands &amp; Brisbane South.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topServices.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
            >
              View All Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Extras
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              Customise Your Detail
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              Add any of these extras to your chosen package for the perfect finish.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {addons.map((addon, i) => (
              <AnimatedSection key={addon.name} delay={i * 0.08}>
                <div className="group rounded-lg border border-glass-border bg-dark-2 p-6 text-center transition-all duration-300 hover:border-blue/20 hover:-translate-y-1 hover:shadow-md hover:shadow-blue/5">
                  <h3 className="mb-3 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white">
                    {addon.name}
                  </h3>
                  <p className="mb-2 font-heading text-2xl font-bold text-blue transition-colors duration-300 group-hover:text-blue-hover">
                    <span className="text-base font-medium text-blue/70">$</span>
                    {addon.price}
                  </p>
                  <p className="text-[0.7rem] font-medium text-red/70">
                    Add to any detail
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="blue" />

      {/* ── Why JRC ── */}
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Decorative background orbs */}
        <div
          className="absolute -top-32 -left-32 h-64 w-64 rounded-full opacity-[0.03] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,30,58,1) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full opacity-[0.03] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,1) 0%, transparent 70%)' }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              The Difference
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              Why Brisbane Chooses JRC
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              Professional results, premium products, and a mobile service that comes to you.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Mobile Service',
                description:
                  'We come to you. No drop-offs, no waiting. Professional results in your driveway.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
              },
              {
                title: '7+ Years Experience',
                description:
                  'From luxury dealerships to family cars. Over seven years of hands-on detailing expertise.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: 'Premium Products',
                description:
                  'AutoSmart, Bowden\'s Own, Gyeon, and CarPro. Only professional-grade products.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
              },
              {
                title: 'Dealership Trusted',
                description:
                  'The same standard trusted by BMW, Mercedes, Mazda, Ford, and more.',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.12} direction="left">
                <div className="group flex h-full flex-col items-center rounded-lg border border-white/6 bg-dark-2 p-8 text-center transition-all duration-300 hover:border-blue/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue/5">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red/10 text-red transition-all duration-500 group-hover:bg-blue/10 group-hover:text-blue group-hover:scale-110 group-hover:rotate-6">
                    {card.icon}
                  </div>
                  <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-[1px] text-white">
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/45">
                    {card.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
            >
              View All Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="red" />

      {/* ── Customer Reviews ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Customer Reviews
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              Rated 5.0 stars on{' '}
              <a
                href={CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover"
              >
                Google
              </a>{' '}
              and{' '}
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover"
              >
                Instagram
              </a>.
            </p>
          </AnimatedSection>

          {/* Google Rating Summary */}
          <AnimatedSection className="mb-12">
            <a
              href={CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mx-auto flex max-w-md items-center justify-center gap-4 rounded-xl border border-white/10 bg-white/5 px-8 py-5 transition-all duration-300 hover:border-yellow-500/30 hover:bg-yellow-500/5"
            >
              {/* Google G icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" className="flex-shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">5.0</span>
                  <span className="text-xl text-yellow-400">★★★★★</span>
                </div>
                <p className="text-xs text-white/40">47 reviews on Google</p>
              </div>
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="ml-auto text-white/20 transition-all duration-300 group-hover:text-yellow-400 group-hover:translate-x-1"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                text: 'Incredible attention to detail. Jesse transformed my BMW inside and out. Best detailer in the Redlands.',
                stars: 5,
                source: 'Google Review',
              },
              {
                text: 'Had the ceramic coating done on my new Mazda CX-5. The finish is unreal and water just sheets off. Could not be happier.',
                stars: 5,
                source: 'Google Review',
              },
              {
                text: 'Third time using JRC for a full detail. Consistently great results every time. Would not go anywhere else.',
                stars: 5,
                source: 'Google Review',
              },
            ].map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <a
                  href={CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-white/6 bg-dark-2 p-8 transition-all duration-300 hover:border-blue/20 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue/5"
                >
                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: review.stars }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg transition-transform duration-300 group-hover:scale-110">&#9733;</span>
                    ))}
                  </div>
                  <p className="mb-6 text-base leading-relaxed text-white/60 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="h-px w-8 bg-red/30 mb-4" />
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" className="flex-shrink-0">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <p className="font-heading text-[0.65rem] font-semibold uppercase tracking-[2px] text-white/30">
                      {review.source}
                    </p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={CONTACT.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-red px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="text-yellow-300">★</span>
                Leave a Google Review
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
              >
                See More on Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="blue" />

      {/* ── Gallery Preview ── */}
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Decorative background orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full opacity-[0.02] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,1) 0%, transparent 70%)' }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Our Work
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              Precision in Every Detail
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              Real results from real vehicles. No filters, no tricks.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {previewImages.map((img, i) => (
              <AnimatedSection key={img.alt} delay={i * 0.08}>
                <div className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 font-heading text-[0.6rem] font-bold uppercase tracking-[2px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {img.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
            >
              View Full Gallery
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="subtle" />

      {/* ── Ceramic CTA ── */}
      <section className="relative overflow-hidden py-32">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={ceramicBgImage}
            alt="Ceramic coating water beading"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)' }} />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <AnimatedSection className="text-center lg:text-left">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Paint Protection
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              Ceramic Coating That Lasts for Years
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/60">
              Professional-grade{' '}
              <Link href="/ceramic-coating" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                ceramic coating
              </Link>{' '}
              applied over fully corrected paintwork. The
              ultimate protection for vehicles that deserve more than a standard wax. Ideal for{' '}
              <Link href="/new-car-protection" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                new car protection
              </Link>{' '}
              or after a{' '}
              <Link href="/paint-correction" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                full paint correction
              </Link>.
            </p>

            <ul className="mb-10 grid gap-3 sm:grid-cols-2 max-w-2xl">
              {[
                'Multi-year paint protection',
                'Extreme hydrophobic properties',
                'UV and chemical resistance',
                'Showroom gloss finish',
                'Full paint correction included',
                'Dealership trusted application',
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-base text-white/70">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0 text-red"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/ceramic-coating"
                className="inline-block rounded-sm bg-blue px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-black transition-all duration-300 hover:bg-blue-hover hover:shadow-lg hover:shadow-blue/25 hover:scale-[1.03] active:scale-[0.98]"
              >
                Learn About Ceramic Coating
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
              >
                Get a Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Coverage
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              We Come to You
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              Fully mobile across the Redlands, Bayside, and Brisbane South. No workshop visit
              required.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, i) => (
              <AnimatedSection key={area.slug} delay={i * 0.04}>
                <Link
                  href={`/areas/${area.slug}`}
                  className={`inline-block rounded-full px-5 py-2.5 font-heading text-[0.65rem] font-semibold uppercase tracking-[2px] transition-all duration-300 ${
                    area.primary
                      ? 'bg-red text-white hover:bg-red-hover hover:shadow-lg hover:shadow-red/25'
                      : 'border border-white/12 text-white/50 hover:border-red/40 hover:text-white hover:bg-red/10'
                  }`}
                >
                  {area.name}
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/areas"
              className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
            >
              View All Areas
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Instagram CTA ── */}
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Decorative background orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,30,58,1) 0%, transparent 70%)' }}
        />

        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Instagram info */}
            <AnimatedSection direction="left">
              <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
                Follow Along
              </p>
              <h2 className="mb-4 font-heading text-3xl font-extrabold md:text-4xl">
                See the Latest Work on Instagram
              </h2>
              <p className="mb-6 text-base leading-relaxed text-white/50">
                Before-and-after transformations, ceramic coating results, detailing
                tips, and behind-the-scenes content. Follow {CONTACT.instagram} for
                regular updates straight from the detailing bay.
              </p>

              {/* Handle badge */}
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-8 inline-flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-6 py-4 transition-all duration-300 hover:border-red/30 hover:bg-red/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white transition-transform duration-300 group-hover:scale-110">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-white">
                    {CONTACT.instagram}
                  </p>
                  <p className="text-xs text-white/40">
                    Follow for latest work
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-auto text-white/30 transition-all duration-300 group-hover:text-red group-hover:translate-x-1"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>

              <div>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-sm bg-red px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Follow on Instagram
                </a>
              </div>
            </AnimatedSection>

            {/* Right: Instagram embed with fallback */}
            <AnimatedSection direction="right">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-dark-2">
                <iframe
                  src="https://www.instagram.com/jrc.detailing_/embed"
                  width="100%"
                  height="480"
                  style={{ border: 'none', background: '#1a1a1a' }}
                  loading="lazy"
                  title="JRC Detailing Instagram feed"
                  allow="encrypted-media"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-heading text-4xl font-extrabold text-red md:text-5xl">
              Ready for a Showroom Finish?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60">
              Get in touch for a free quote. Jesse will get back to you with a tailored package
              for your vehicle, whether it is a daily driver or a weekend showpiece.
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
                Call {OWNER.firstName}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

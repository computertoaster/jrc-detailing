import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import StatsRow from '@/components/StatsRow'
import ServiceCard from '@/components/ServiceCard'
import AnimatedSection from '@/components/AnimatedSection'
import JsonLd from '@/components/JsonLd'
import { services, addons, galleryImages, areas, polishingImage, ceramicBgImage } from '@/lib/data'
import { CONTACT, OWNER, SITE_URL } from '@/lib/constants'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo'

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
  title: 'Premium Mobile Car Detailing | Victoria Point & Brisbane South',
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
              </p>
              <p className="mb-8 text-base leading-relaxed text-white/60">
                Based in {OWNER.location}, JRC Detailing is a fully mobile service covering the
                Redlands, Bayside, and greater Brisbane South. No workshop needed; Jesse brings
                everything to your door.
              </p>
              <Link
                href="/about"
                className="inline-block rounded-sm bg-red px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25"
              >
                More About Jesse
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

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
              className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
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
                <div className="rounded-lg border border-glass-border bg-dark-2 p-6 text-center transition-all duration-300 hover:border-white/12 hover:-translate-y-1">
                  <h3 className="mb-3 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white">
                    {addon.name}
                  </h3>
                  <p className="mb-2 font-heading text-2xl font-bold text-blue">
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

      {/* ── Gallery Preview ── */}
      <section className="bg-black py-24">
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
              className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              View Full Gallery
            </Link>
          </AnimatedSection>
        </div>
      </section>

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
              Professional-grade ceramic coating applied over fully corrected paintwork. The
              ultimate protection for vehicles that deserve more than a standard wax.
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
                <li key={benefit} className="flex items-center gap-3 text-sm text-white/70">
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

            <Link
              href="/contact"
              className="inline-block rounded-sm bg-blue px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-black transition-all duration-300 hover:bg-blue-hover hover:shadow-lg hover:shadow-blue/25"
            >
              Request a Quote
            </Link>
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

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className={`rounded-full px-5 py-2.5 font-heading text-[0.65rem] font-semibold uppercase tracking-[2px] transition-all duration-300 ${
                    area.primary
                      ? 'bg-red text-white hover:bg-red-hover hover:shadow-lg hover:shadow-red/25'
                      : 'border border-white/12 text-white/50 hover:border-red/40 hover:text-white hover:bg-red/10'
                  }`}
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/areas"
              className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              View All Areas
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Instagram CTA ── */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Follow Along
            </p>
            <h2 className="mb-4 font-heading text-3xl font-extrabold md:text-4xl">
              See the Latest Work
            </h2>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-lg text-white/60 transition-colors duration-300 hover:text-blue"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="font-heading text-sm font-semibold tracking-wide">
                {CONTACT.instagram}
              </span>
            </a>
          </AnimatedSection>
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
                className="rounded-sm bg-red px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25"
              >
                Get a Quote
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                Call Jesse
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

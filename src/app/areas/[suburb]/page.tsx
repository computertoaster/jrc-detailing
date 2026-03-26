import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { areas, services } from '@/lib/data'
import { CONTACT, OWNER } from '@/lib/constants'

interface SuburbPageProps {
  params: Promise<{ suburb: string }>
}

export async function generateStaticParams() {
  return areas.map((area) => ({ suburb: area.slug }))
}

export async function generateMetadata({ params }: SuburbPageProps): Promise<Metadata> {
  const { suburb } = await params
  const area = areas.find((a) => a.slug === suburb)
  if (!area) return {}

  return {
    title: `Car Detailing ${area.name} | Mobile Detailing`,
    description: `Professional mobile car detailing in ${area.name}. Ceramic coating, paint correction, interior detail. 7+ years experience. Based in Victoria Point, servicing ${area.region}.`,
  }
}

export default async function SuburbPage({ params }: SuburbPageProps) {
  const { suburb } = await params
  const area = areas.find((a) => a.slug === suburb)

  if (!area) notFound()

  const nearbyAreas = areas.filter(
    (a) => a.region === area.region && a.slug !== area.slug
  )

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-black pb-4 pt-28 md:pt-36">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-light">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="text-white/20">/</span>
            <Link href="/areas" className="transition-colors hover:text-white">
              Areas
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white">{area.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-black pb-12 pt-6">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-5xl">
              Car Detailing in {area.name}
            </h1>
            <p className="max-w-2xl text-gray-light">{area.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-10">
            <h2 className="mb-2 font-heading text-2xl font-bold text-white md:text-3xl">
              Services Available in {area.name}
            </h2>
            <p className="text-sm text-gray-light">
              All services are mobile. Jesse brings the full setup to your location.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services#${service.slug}`}
                  className="block rounded-xl border border-white/6 bg-dark-2/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red/30 hover:bg-dark-3"
                >
                  <div className="mb-1 font-heading text-lg font-bold text-white">
                    {service.name}
                  </div>
                  <div className="mb-3 font-heading text-sm font-semibold text-red">
                    {service.price ? `From $${service.price}` : service.priceLabel || 'Custom Quote'}
                  </div>
                  <p className="text-sm text-gray-light">{service.shortDesc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JRC */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-10">
            <h2 className="mb-2 font-heading text-2xl font-bold text-white md:text-3xl">
              Why Choose JRC for {area.name}
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-3">
            <AnimatedSection delay={0}>
              <div className="rounded-xl border border-white/6 bg-dark-2/50 p-6 backdrop-blur-sm">
                <h3 className="mb-3 font-heading text-lg font-bold text-gold">
                  Mobile Convenience
                </h3>
                <p className="text-sm text-gray-light">
                  No drop-offs, no waiting rooms. Jesse comes to your {area.name} address
                  with a complete mobile studio setup, including water, power, and
                  professional-grade products.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-xl border border-white/6 bg-dark-2/50 p-6 backdrop-blur-sm">
                <h3 className="mb-3 font-heading text-lg font-bold text-gold">
                  7+ Years Experience
                </h3>
                <p className="text-sm text-gray-light">
                  With over seven years in the industry, {OWNER.firstName} has detailed
                  everything from daily drivers to high-end European vehicles. Every job
                  gets the same meticulous care.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-xl border border-white/6 bg-dark-2/50 p-6 backdrop-blur-sm">
                <h3 className="mb-3 font-heading text-lg font-bold text-gold">
                  Dealership Trusted
                </h3>
                <p className="text-sm text-gray-light">
                  {OWNER.firstName} has worked with BMW, Mercedes, and other major dealership
                  brands. You get the same standard of work, right in your {area.name} driveway.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyAreas.length > 0 && (
        <section className="bg-dark py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <AnimatedSection className="mb-8">
              <h2 className="mb-2 font-heading text-2xl font-bold text-white md:text-3xl">
                Nearby Areas in {area.region}
              </h2>
              <p className="text-sm text-gray-light">
                Also servicing these suburbs near {area.name}.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-wrap gap-3">
                {nearbyAreas.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/areas/${nearby.slug}`}
                    className={`rounded-lg px-5 py-2.5 font-heading text-[0.65rem] font-semibold uppercase tracking-[2px] transition-all duration-300 ${
                      nearby.primary
                        ? 'bg-red text-white hover:bg-red-hover'
                        : 'border border-white/8 bg-dark-2/50 text-white/70 backdrop-blur-sm hover:border-red/50 hover:bg-red hover:text-white'
                    }`}
                  >
                    {nearby.name}
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
              Book your detail in {area.name}
            </h2>
            <p className="mb-8 text-gray-light">
              Ready for a showroom finish? Get in touch with {OWNER.firstName} to book your
              mobile detail in {area.name}.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-red px-8 py-4 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25"
              >
                Get a Quote
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="inline-block rounded-lg border border-white/10 bg-dark-2 px-8 py-4 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/20 hover:bg-dark-3"
              >
                Call {CONTACT.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

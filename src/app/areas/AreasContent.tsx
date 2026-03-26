'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { areas } from '@/lib/data'

const regionOrder = ['Redlands', 'Bayside', 'Brisbane South', 'Brisbane']

function groupByRegion() {
  const groups: Record<string, typeof areas> = {}
  for (const area of areas) {
    if (!groups[area.region]) groups[area.region] = []
    groups[area.region].push(area)
  }
  return groups
}

export default function AreasContent() {
  const grouped = groupByRegion()

  return (
    <>
      {/* Hero */}
      <section className="bg-black pb-12 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimatedSection>
            <h1 className="mb-4 font-heading text-4xl font-bold text-white md:text-6xl">
              Mobile Car Detailing Service Areas
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray-light md:text-lg">
              Mobile detailing across Brisbane South and the Redlands. Browse our{' '}
              <Link href="/services" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                services and pricing
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                request a free quote
              </Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Area Groups */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            {regionOrder.map((region, ri) => {
              const regionAreas = grouped[region]
              if (!regionAreas) return null
              return (
                <AnimatedSection key={region} delay={ri * 0.1}>
                  <h2 className="mb-6 font-heading text-xl font-bold text-blue md:text-2xl">
                    {region}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {regionAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/areas/${area.slug}`}
                        className={`rounded-lg px-5 py-2.5 font-heading text-[0.65rem] font-semibold uppercase tracking-[2px] transition-all duration-300 ${
                          area.primary
                            ? 'bg-red text-white hover:bg-red-hover hover:shadow-lg hover:shadow-red/25'
                            : 'border border-white/8 bg-dark-2/50 text-white/70 backdrop-blur-sm hover:border-red/50 hover:bg-red hover:text-white'
                        }`}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Based in Victoria Point */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
              Based in Victoria Point
            </h2>
            <div className="space-y-4 text-gray-light">
              <p>
                JRC Detailing is based in Victoria Point, right in the heart of the
                Redlands. As a fully mobile service, Jesse brings everything needed for a
                professional detail directly to your home, office, or workplace.
              </p>
              <p>
                No need to drop your car off and arrange a lift. We come to you with a
                full setup: generator, water supply, professional-grade products, and
                years of experience. You get dealership-quality results in your own
                driveway.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
              In your area? Let&apos;s go.
            </h2>
            <p className="mb-8 text-gray-light">
              If your suburb is listed above, Jesse can be at your door. If it&apos;s not
              listed, get in touch anyway; we may still be able to help. Check out our{' '}
              <Link href="/ceramic-coating" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                ceramic coating in Brisbane
              </Link>,{' '}
              <Link href="/paint-correction" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                paint correction
              </Link>,{' '}
              <Link href="/interior-detailing" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                interior car detailing
              </Link>, and our{' '}
              <Link href="/services" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                full service range and pricing
              </Link>.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-red px-8 py-4 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25"
            >
              Get a Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

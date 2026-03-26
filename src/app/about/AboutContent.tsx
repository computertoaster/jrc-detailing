'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import StatsRow from '@/components/StatsRow'
import { polishingImage } from '@/lib/data'
import { DEALER_BRANDS } from '@/lib/constants'

const values = [
  {
    title: 'Precision',
    description: 'Every panel, every crevice, every time.',
  },
  {
    title: 'Quality Products',
    description: 'Professional-grade products from trusted brands including Gyeon, CarPro, AutoSmart, and Bowden\'s Own.',
  },
  {
    title: 'Mobile Convenience',
    description: 'Full studio experience at your door.',
  },
  {
    title: 'Dealership Trusted',
    description: 'Same standard trusted by BMW, Mercedes, and more.',
  },
]

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-dark to-black pb-16 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimatedSection>
            <h1 className="mb-4 font-heading text-4xl font-bold text-white md:text-6xl">
              About JRC Detailing, Victoria Point
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray-light md:text-lg">
              7+ years of precision, quality, and passion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Jesse */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={polishingImage}
                  alt="Jesse Curtain polishing a vehicle"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="right">
              <h2 className="mb-6 font-heading text-2xl font-bold text-blue md:text-3xl">
                Meet Jesse Curtain
              </h2>
              <div className="space-y-4 text-gray-light">
                <p>
                  With over 7 years in the detailing industry, Jesse built JRC Detailing on
                  three things: precision, quality, and a genuine passion for cars.
                </p>
                <p>
                  From luxury European marques at BMW and Mercedes dealerships to everyday
                  family vehicles, Jesse has worked on just about everything that rolls on
                  four wheels. That breadth of experience means every job gets the same
                  meticulous attention to detail, regardless of the badge on the bonnet.
                </p>
                <p>
                  Based in Victoria Point, JRC Detailing is a fully mobile service covering
                  the Redlands, Bayside, and Brisbane South. Jesse brings the full studio
                  experience to your driveway, so you can get dealership-quality results
                  without leaving home. Explore the full range of{' '}
                  <Link href="/services" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                    services and packages
                  </Link>{' '}
                  including{' '}
                  <Link href="/ceramic-coating" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                    ceramic coating
                  </Link>,{' '}
                  <Link href="/paint-correction" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                    paint correction
                  </Link>, and{' '}
                  <Link href="/interior-detailing" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                    interior detailing
                  </Link>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-white/6 bg-dark-2/50 p-6 text-center backdrop-blur-sm"
                >
                  <h3 className="mb-3 font-heading text-lg font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-light">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black">
        <StatsRow />
      </section>

      {/* Dealership Partners */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-10 text-center">
            <h2 className="mb-2 font-heading text-2xl font-bold text-white md:text-3xl">
              Dealership Trusted
            </h2>
            <p className="text-sm text-gray-light">
              Jesse has detailed for some of Australia&apos;s most trusted dealership brands.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {DEALER_BRANDS.map((brand) => (
                <div
                  key={brand}
                  className="rounded-lg border border-white/6 bg-dark-2/50 px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white/60 backdrop-blur-sm"
                >
                  {brand}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
              Ready to experience the difference?
            </h2>
            <p className="mb-8 text-gray-light">
              Get a quote from Jesse and see why customers across Brisbane South keep
              coming back. Servicing{' '}
              <Link href="/areas" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                Victoria Point, Redlands, and Brisbane South
              </Link>.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-red px-8 py-4 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="inline-block rounded-lg border border-white/10 bg-dark-2 px-8 py-4 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/20 hover:bg-dark-3"
              >
                View Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import AnimatedSection from '@/components/AnimatedSection'
import SectionDivider from '@/components/SectionDivider'
import JsonLd from '@/components/JsonLd'
import { services, addons } from '@/lib/data'
import { CONTACT, OWNER, SITE_URL } from '@/lib/constants'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo'

function getAddonIcon(name: string) {
  const n = name.toLowerCase()
  if (n.includes('headlight')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue">
        <path d="M9 18h6M10 22h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 9a3 3 0 11-6 0 6 6 0 1112 0c0 2-1.5 3-3 4v1H9v-1c-1.5-1-3-2-3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (n.includes('dog') || n.includes('pet') || n.includes('hair')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue">
        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .137 1.217 1.5 2 2.5 2s1.868-.853 3-2c1.132-1.147 2-3.828 2-4.828zM14 5.172C14 3.782 15.577 2.679 17.5 3c2.823.47 4.113 6.006 4 7-.137 1.217-1.5 2-2.5 2s-1.868-.853-3-2c-1.132-1.147-2-3.828-2-4.828z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14v.5M16 14v.5M11.25 16.25h1.5L12 17l-.75-.75z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.42 11.247A13.152 13.152 0 004 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a13.152 13.152 0 00-.42-3.31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (n.includes('glass') || n.includes('hydro')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (n.includes('carpet') || n.includes('leather') || n.includes('protect')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  // Default sparkle
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const metadata = {
  title: 'Car Detailing Prices Brisbane | Mobile Packages from $99',
  description:
    'Car detailing prices and packages in Brisbane South from $99. Mini detail, interior detail, full detail, prestige detail, ceramic coating. Mobile service across Victoria Point and Redlands.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Car Detailing Prices Brisbane | Mobile Packages | JRC Detailing',
    description:
      'Professional mobile detailing packages from $99. Mini detail, full detail, prestige detail, ceramic coating, paint correction. Victoria Point, Redlands and Brisbane South.',
  },
}

const faqs = [
  {
    question: 'How long does each service take?',
    answer:
      'It depends on the package. Mini Detail: 1 to 2 hours. Interior Detail: 2 to 3 hours. Full Cut & Polish: 4 to 6 hours. Full Detail: 4 to 5 hours. Prestige Detail: 6 to 8 hours. Ceramic Coating: 1 to 2 days depending on vehicle condition.',
  },
  {
    question: 'Do you come to me?',
    answer:
      'Yes. JRC Detailing is a fully mobile service. Jesse brings everything needed directly to your home, office, or wherever your vehicle is located. No workshop visit required.',
  },
  {
    question: 'What products do you use?',
    answer:
      'JRC Detailing uses professional-grade products from AutoSmart, Bowden\'s Own, Gyeon, and CarPro. These are trusted brands used by professional detailers and dealerships across Australia. No shortcuts, no cheap substitutes.',
  },
  {
    question: 'Can I combine services?',
    answer:
      'Absolutely. Any add-on can be paired with any package. Common combos include headlight restoration with a full detail, or hydrophobic glass coating with a prestige package.',
  },
  {
    question: 'Do you work on all vehicle types?',
    answer:
      'Cars, SUVs, utes, 4WDs, and luxury vehicles of all makes and models. From a Corolla to an AMG, every vehicle gets the same level of care and attention.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Services', url: `${SITE_URL}/services` },
        ])}
      />
      {services.map((service) => (
        <JsonLd key={service.slug} data={serviceSchema(service)} />
      ))}
      <JsonLd data={faqSchema(faqs)} />

      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-dark pt-36 pb-20">
        {/* Gradient accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-15 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(196,30,58,0.2) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              What We Offer
            </p>
            <h1 className="mb-6 font-heading text-5xl font-extrabold md:text-6xl">
              Mobile Detailing Services &amp; Pricing
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-light">
              Professional mobile detailing across the{' '}
              <Link href="/areas" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                Redlands, Bayside, and Brisbane South
              </Link>.
              Every package is delivered at your door by {OWNER.firstName}, with {OWNER.experience}{' '}
              years of experience and dealership-grade products. Looking for something specific?
              Check out our dedicated{' '}
              <Link href="/ceramic-coating" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                ceramic coating in Brisbane
              </Link>,{' '}
              <Link href="/paint-correction" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                paint correction specialists
              </Link>, and{' '}
              <Link href="/interior-detailing" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                interior car detailing
              </Link>{' '}
              pages.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Service Cards Grid ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="red" />

      {/* ── Detailed Service Breakdowns ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              In Depth
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              What Each Package Includes
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              Full breakdowns so you know exactly what you are getting.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.06}>
                <div
                  id={service.slug}
                  className="scroll-mt-28 rounded-lg border border-white/6 bg-dark-2 p-8 transition-colors hover:border-white/10"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    {/* Left: Name + Description */}
                    <div className="flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-3">
                        <h3 className="font-heading text-xl font-bold text-white">
                          {service.name}
                        </h3>
                        {service.badge && (
                          <span className="rounded-full bg-red/15 px-3 py-1 font-heading text-[0.55rem] font-bold uppercase tracking-[1px] text-red">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/50">
                        {service.description}
                      </p>
                    </div>

                    {/* Right: Price */}
                    <div className="flex-shrink-0 text-right">
                      {service.price !== null ? (
                        <span className="font-heading text-3xl font-bold text-blue">
                          <span className="text-lg font-medium text-blue/70">$</span>
                          {service.price}
                        </span>
                      ) : (
                        <span className="font-heading text-xl font-semibold text-blue">
                          {service.priceLabel || 'Custom Quote'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="mt-6 border-t border-white/6 pt-6">
                    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-white/50"
                        >
                          <svg
                            width="14"
                            height="14"
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
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Extras
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              Add-Ons
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              Pair any of these with your chosen package.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {addons.map((addon, i) => (
              <AnimatedSection key={addon.name} delay={i * 0.08}>
                <div className="group rounded-lg border border-glass-border bg-dark-2 p-6 text-center transition-all duration-300 hover:border-blue/20 hover:-translate-y-1 hover:shadow-md hover:shadow-blue/5">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue/15">
                    {getAddonIcon(addon.name)}
                  </div>
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

      {/* ── FAQ ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Common Questions
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              FAQ
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={i * 0.06}>
                <div className="rounded-lg border border-white/6 bg-dark-2 p-6">
                  <h3 className="mb-3 font-heading text-base lg:text-lg font-bold text-white">
                    {faq.question}
                  </h3>
                  <p className="text-base leading-relaxed text-white/50">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Ready for a Quote?
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              Get Your Vehicle Detailed
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60">
              Send through your vehicle details and {OWNER.firstName} will get back to you with
              a tailored quote. Same-week bookings usually available. Have questions? Check the{' '}
              <Link href="/faq" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                car detailing FAQ
              </Link>{' '}
              or learn more{' '}
              <Link href="/about" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                about Jesse and JRC Detailing
              </Link>.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-red px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25 hover:scale-[1.03] active:scale-[0.98]"
              >
                Request a Quote
              </Link>
              <a
                href="tel:0481998874"
                className="rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
              >
                Call 0481 998 874
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

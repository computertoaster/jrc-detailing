import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import AnimatedSection from '@/components/AnimatedSection'
import JsonLd from '@/components/JsonLd'
import { services, addons } from '@/lib/data'
import { CONTACT, OWNER, SITE_URL } from '@/lib/constants'
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo'

export const metadata = {
  title: 'Services & Pricing',
  description:
    'Professional car detailing packages from $99. Mini detail $99, interior detail $189, full cut and polish $320, full detail $370, prestige detail $550, ceramic coating custom quote. Mobile service across Victoria Point, Redlands and Brisbane South.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services & Pricing | JRC Detailing',
    description:
      'Professional car detailing packages from $99. Mini detail, full detail, prestige detail, ceramic coating, paint correction. Mobile service across Victoria Point, Redlands & Brisbane South.',
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
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              What We Offer
            </p>
            <h1 className="mb-6 font-heading text-5xl font-extrabold md:text-6xl">
              Services &amp; Pricing
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-light">
              Professional mobile detailing across the Redlands, Bayside, and Brisbane South.
              Every package is delivered at your door by {OWNER.firstName}, with {OWNER.experience}{' '}
              years of experience and dealership-grade products.
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

      {/* ── Detailed Service Breakdowns ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection className="mb-16 text-center">
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
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">
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
                          className="flex items-center gap-2.5 text-[0.8rem] text-white/50"
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
                  <h3 className="mb-3 font-heading text-sm font-bold text-white">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">{faq.answer}</p>
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
              Ready to Book?
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              Get Your Vehicle Detailed
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60">
              Send through your vehicle details and {OWNER.firstName} will get back to you with
              a tailored quote. Same-week bookings usually available.
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
                Call {CONTACT.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

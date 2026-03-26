import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import JsonLd from '@/components/JsonLd'
import { services, ceramicBgImage } from '@/lib/data'
import { CONTACT, OWNER, DEALER_BRANDS, SITE_URL } from '@/lib/constants'
import { breadcrumbSchema, serviceSchema, faqSchema, howToSchema } from '@/lib/seo'

export const metadata = {
  title: 'Ceramic Coating Brisbane | Paint Protection Specialists',
  description:
    'Professional ceramic coating in Brisbane South and Victoria Point. Multi-year paint protection with full paint correction included. Hydrophobic, UV resistant, showroom gloss. Free quote.',
  alternates: {
    canonical: '/ceramic-coating',
  },
  openGraph: {
    title: 'Ceramic Coating Brisbane | Paint Protection | JRC Detailing',
    description:
      'Professional ceramic coating in Victoria Point and Brisbane South. Multi-year paint protection with full paint correction included. Trusted by BMW, Mercedes and major dealerships.',
  },
}

const ceramicService = services.find((s) => s.slug === 'ceramic-coating')!

const benefits = [
  {
    title: 'Multi-Year Protection',
    description: 'Professional-grade coatings that protect your paintwork for 2 to 5+ years.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Hydrophobic',
    description: 'Water beads and sheets off the surface, taking dirt and contaminants with it.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
  },
  {
    title: 'UV Resistance',
    description: 'Blocks harmful UV rays that cause fading, oxidation, and clear coat breakdown.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    title: 'Chemical Resistance',
    description: 'Guards against bird droppings, tree sap, bug splatter, and industrial fallout.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.527a2 2 0 01-.211.896L4.72 20.55a1 1 0 00.9 1.45h12.76a1 1 0 00.9-1.45l-5.069-10.127A2 2 0 0114 9.527V2" />
        <path d="M8.5 2h7" />
      </svg>
    ),
  },
  {
    title: 'Enhanced Gloss',
    description: 'Produces a deep, wet-look shine that turns heads wherever you go.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Easy Maintenance',
    description: 'Dirt and grime have nowhere to stick. A simple wash keeps your car looking fresh.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Assessment',
    description:
      'Jesse inspects the paintwork under controlled lighting to identify swirl marks, scratches, oxidation, and any areas that need special attention.',
  },
  {
    step: 2,
    title: 'Decontamination & Clay Bar',
    description:
      'The exterior is thoroughly washed, decontaminated with iron remover, and clay barred to remove bonded contaminants from the paint surface.',
  },
  {
    step: 3,
    title: 'Paint Correction',
    description:
      'Multi-stage machine polishing removes swirl marks, light scratches, and oxidation. The paint is restored to a flawless finish before coating.',
  },
  {
    step: 4,
    title: 'Surface Prep',
    description:
      'A prep wash strips any remaining polish residue, oils, and wax from the surface. The paint must be completely bare for proper coating adhesion.',
  },
  {
    step: 5,
    title: 'Ceramic Application',
    description:
      'The ceramic coating is applied panel by panel in a controlled environment. Each layer is levelled and allowed to flash before removal.',
  },
  {
    step: 6,
    title: 'Curing & Inspection',
    description:
      'The coating cures under controlled conditions. A final inspection under specialised lighting confirms full coverage and a flawless finish.',
  },
]

const ceramicFaqs = [
  {
    question: 'How long does ceramic coating last?',
    answer:
      '2 to 5+ years depending on the coating system chosen, vehicle use, and maintenance routine. Jesse will recommend the right product for your situation and budget.',
  },
  {
    question: 'Can I wash my car after ceramic coating?',
    answer:
      'Wait 7 days for the coating to fully cure, then wash as normal using the two-bucket method. Avoid automatic car washes permanently; the brushes will degrade the coating over time.',
  },
  {
    question: 'Is paint correction included?',
    answer:
      'Yes. Full paint correction is always included with every ceramic coating job. Applying a coating over defective paint would lock in the imperfections, so the surface is always corrected first.',
  },
  {
    question: 'New car vs used car?',
    answer:
      'Both benefit significantly. New vehicles get protection from day one before the paint is damaged by the elements. Used vehicles get the paint restored through correction, then locked in with the coating.',
  },
]

export default function CeramicCoatingPage() {
  const ceramicServiceData = services.find((s) => s.slug === 'ceramic-coating')!

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Ceramic Coating', url: `${SITE_URL}/ceramic-coating` },
        ])}
      />
      <JsonLd data={serviceSchema(ceramicServiceData)} />
      <JsonLd data={faqSchema(ceramicFaqs)} />
      <JsonLd
        data={howToSchema(
          'Professional Ceramic Coating Process',
          'A six-step ceramic coating process used by JRC Detailing to protect your vehicle paintwork for years.',
          processSteps.map((step) => ({
            name: step.title,
            text: step.description,
          }))
        )}
      />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={ceramicBgImage}
            alt="Water beading on ceramic coated paint"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        </div>

        {/* Red glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(196,30,58,0.25) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-20 text-center">
          <AnimatedSection>
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Paint Protection
            </p>
            <h1 className="mb-6 font-heading text-5xl font-extrabold md:text-7xl">
              Ceramic Coating
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Multi-year paint protection for your investment. Professional-grade coatings
              applied over{' '}
              <Link href="/paint-correction" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                fully corrected paintwork
              </Link>{' '}
              by {OWNER.firstName}, with {OWNER.experience}{' '}
              years of hands-on experience. Mobile service across{' '}
              <Link href="/areas" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                Victoria Point, Redlands, and Brisbane South
              </Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What is Ceramic Coating ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              The Science
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              What is Ceramic Coating?
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/60">
              Ceramic coating is a liquid polymer that chemically bonds to your vehicle&apos;s
              clear coat, forming a permanent layer of protection. Unlike wax or sealant that
              sits on top and wears away, ceramic becomes part of the surface. JRC Detailing
              uses professional-grade Gyeon and CarPro ceramic coating systems, trusted by
              detailers worldwide. The result is extreme hydrophobic properties, resistance to
              UV damage, chemicals, and contaminants, plus a deep, glossy finish that lasts
              for years.
            </p>
          </AnimatedSection>

          {/* Benefits Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.08}>
                <div className="rounded-lg border border-white/6 bg-dark-2 p-6 transition-all duration-300 hover:border-white/12 hover:-translate-y-1">
                  <div className="mb-4 text-red">{benefit.icon}</div>
                  <h3 className="mb-2 font-heading text-base font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/45">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Process ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Step by Step
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              The Process
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              Every ceramic coating follows a proven six-step process. No shortcuts.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.06}>
                <div className="flex gap-6 rounded-lg border border-white/6 bg-dark-2 p-6 transition-colors hover:border-white/10">
                  {/* Step Number */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red/10 font-heading text-xl font-bold text-red">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-2 font-heading text-base font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="mb-12 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Included
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              What You Get
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-lg border border-white/6 bg-dark-2 p-8">
              <ul className="grid gap-3 sm:grid-cols-2">
                {ceramicService.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-base text-white/60"
                  >
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Dealership Trust ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Reputation
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              Trusted by{' '}
              <span className="text-gradient-blue">
                {DEALER_BRANDS.slice(0, 3).join(', ')}
              </span>{' '}
              &amp; More
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/60">
              {OWNER.firstName} has built a reputation with dealerships and private collectors
              alike. The same professional-grade process used for dealership handover vehicles
              is applied to every private client vehicle. No difference in quality, no
              compromises.
            </p>

            {/* Brand pills */}
            <div className="flex flex-wrap justify-center gap-4">
              {DEALER_BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-white/10 bg-dark-2 px-5 py-2 font-heading text-[0.6rem] font-bold uppercase tracking-[3px] text-white/40 transition-colors hover:text-blue hover:border-blue/30"
                >
                  {brand}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Investment
            </p>
            <h2 className="mb-8 font-heading text-4xl font-extrabold md:text-5xl">
              Pricing
            </h2>

            <div className="rounded-lg border border-blue/20 bg-dark-2 p-10">
              <h3 className="mb-2 font-heading text-2xl font-bold text-blue">
                Custom Quote
              </h3>
              <p className="mx-auto mb-6 max-w-lg text-base leading-relaxed text-white/50">
                Every vehicle is different. Pricing depends on vehicle size, current paint
                condition, the coating system chosen, and whether additional{' '}
                <Link href="/paint-correction" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                  correction work
                </Link>{' '}
                is required. {OWNER.firstName} will inspect your vehicle and provide a detailed
                quote with no obligation. Got a{' '}
                <Link href="/new-car-protection" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                  new vehicle
                </Link>? Check our dedicated new car protection page.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-sm bg-blue px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-black transition-all duration-300 hover:bg-blue-hover hover:shadow-lg hover:shadow-blue/25"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Common Questions
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              Ceramic Coating FAQ
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {ceramicFaqs.map((faq, i) => (
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

      {/* ── CTA ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-heading text-4xl font-extrabold text-red md:text-5xl">
              Get Your Custom Quote
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60">
              Send through your vehicle details and {OWNER.firstName} will provide a no-obligation
              quote tailored to your vehicle, its condition, and the level of protection you need.
              View all{' '}
              <Link href="/services" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                mobile detailing services and pricing
              </Link>. Have questions? Read the{' '}
              <Link href="/faq" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                ceramic coating FAQ
              </Link>.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-red px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:0481998874"
                className="rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
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

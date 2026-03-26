import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/seo'
import { CONTACT, OWNER, DEALER_BRANDS } from '@/lib/constants'

export const metadata = {
  title: 'New Car Paint Protection Brisbane | Ceramic Coating',
  description:
    'Protect your new car from day one with professional ceramic coating in Brisbane South and Victoria Point. Better quality and value than dealership paint protection. Free quote.',
  alternates: { canonical: '/new-car-protection' },
  openGraph: {
    title: 'New Car Paint Protection Brisbane | Ceramic Coating | JRC Detailing',
    description:
      'Professional new car protection in Victoria Point and Brisbane South. Ceramic coating that outperforms dealership paint protection at a better price.',
  },
}

const threats = [
  {
    title: 'UV Damage',
    description:
      'Queensland sun is relentless. UV rays break down clear coat and cause oxidation, fading, and chalking within months of leaving the dealership.',
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
    title: 'Bird Droppings & Tree Sap',
    description:
      'Acidic contaminants etch into fresh clear coat quickly. New paint is softer for the first few months, making it more vulnerable to permanent damage.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
  },
  {
    title: 'Road Contaminants',
    description:
      'Tar, brake dust, industrial fallout, and road grime bond to unprotected paint and cause staining and micro-marring from everyday driving.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.527a2 2 0 01-.211.896L4.72 20.55a1 1 0 00.9 1.45h12.76a1 1 0 00.9-1.45l-5.069-10.127A2 2 0 0114 9.527V2" />
        <path d="M8.5 2h7" />
      </svg>
    ),
  },
  {
    title: 'Wash Damage',
    description:
      'Automatic car washes and poor washing technique introduce swirl marks and fine scratches from day one. These become visible within weeks on unprotected paint.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
]

const comparisonRows = [
  { feature: 'Paint correction before application', dealership: false, jrc: true },
  { feature: 'Transparent pricing', dealership: false, jrc: true },
  { feature: 'Professional-grade coating products', dealership: 'Varies', jrc: true },
  { feature: 'Applied by a detailing specialist', dealership: false, jrc: true },
  { feature: 'Hydrophobic finish', dealership: true, jrc: true },
  { feature: 'Multi-year protection', dealership: 'Varies', jrc: true },
  { feature: 'Aftercare guidance included', dealership: false, jrc: true },
  { feature: 'Independent, unbiased recommendation', dealership: false, jrc: true },
]

const newCarFaqs = [
  {
    question: 'Do I need paint protection on a new car?',
    answer:
      'Yes. New car paint is actually more vulnerable in the first few months because the clear coat has not fully hardened. Applying ceramic coating early protects against UV, bird droppings, tree sap, and road contaminants before any damage occurs. It is far easier and more cost-effective to protect new paint than to correct damaged paint later.',
  },
  {
    question: 'Is aftermarket ceramic coating as good as dealership paint protection?',
    answer:
      'In most cases, aftermarket ceramic coating applied by a professional detailer is superior. Dealership paint protection is often applied by non-specialist staff using entry-level products, with significant mark-ups. JRC Detailing uses professional-grade coatings, includes full surface preparation, and applies the coating in controlled conditions for the best possible bond and longevity.',
  },
  {
    question: 'How soon after purchase should I get paint protection done?',
    answer:
      'As soon as possible. Ideally within the first week of ownership, before the paint is exposed to environmental damage. Some customers arrange protection before even collecting their vehicle from the dealership. Contact Jesse to schedule your new car protection.',
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Vehicle Inspection',
    description:
      'Even new cars can have paint defects from transport, dealer handling, or pre-delivery cleaning. Jesse inspects the paintwork under controlled lighting to identify any issues.',
  },
  {
    step: 2,
    title: 'Decontamination',
    description:
      'The vehicle is thoroughly washed and decontaminated to remove any transport film, dealer-applied compounds, and environmental contaminants. Clay bar treatment ensures the surface is perfectly clean.',
  },
  {
    step: 3,
    title: 'Paint Enhancement',
    description:
      'A light machine polish removes any fine scratches or swirls from dealer handling or transport. The paint is brought to its best possible condition before coating.',
  },
  {
    step: 4,
    title: 'Ceramic Application',
    description:
      'Professional-grade ceramic coating is applied panel by panel. Each layer is levelled carefully and allowed to flash before the next stage. The result is a deep, wet-look finish with extreme hydrophobic properties.',
  },
  {
    step: 5,
    title: 'Curing & Handover',
    description:
      'The coating cures under controlled conditions. Jesse provides full aftercare instructions so you know exactly how to maintain the protection and maximise its lifespan.',
  },
]

export default function NewCarProtectionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://jrcdetailing.com.au' },
          { name: 'New Car Protection', url: 'https://jrcdetailing.com.au/new-car-protection' },
        ])}
      />
      <JsonLd data={faqSchema(newCarFaqs)} />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-black to-black" />

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
              Protect Your Investment
            </p>
            <h1 className="mb-6 font-heading text-5xl font-extrabold md:text-7xl">
              New Car Protection
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Protect your investment from day one. Professional{' '}
              <Link href="/ceramic-coating" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                ceramic coating
              </Link>{' '}
              for new vehicles,
              applied by a detailing specialist with {OWNER.experience} years of experience. Better
              quality, better value, and better results than dealership paint protection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Protect a New Car ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Why It Matters
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              Why Protect a New Car?
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/60">
              New car paint is not as tough as you might think. The clear coat takes months to fully
              harden after leaving the factory, making it especially vulnerable to environmental
              damage. Without protection, Queensland&apos;s UV, bird droppings, tree sap, and road
              contaminants start degrading the finish from day one.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {threats.map((threat, i) => (
              <AnimatedSection key={threat.title} delay={i * 0.08}>
                <div className="rounded-lg border border-white/6 bg-dark-2 p-6 transition-all duration-300 hover:border-white/12 hover:-translate-y-1">
                  <div className="mb-4 text-red">{threat.icon}</div>
                  <h3 className="mb-2 font-heading text-sm font-bold text-white">
                    {threat.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/45">{threat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── JRC vs Dealership ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Know the Difference
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              JRC Detailing vs Dealership
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/60">
              Dealerships often mark up paint protection significantly and have it applied by
              non-specialist staff. JRC Detailing offers the same or better quality at a better
              price, applied by a professional detailer who specialises in paint protection.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto rounded-lg border border-white/6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/6 bg-dark-2">
                    <th className="p-4 text-left font-heading text-xs font-bold uppercase tracking-[2px] text-white/60">
                      Feature
                    </th>
                    <th className="p-4 text-center font-heading text-xs font-bold uppercase tracking-[2px] text-white/40">
                      Dealership
                    </th>
                    <th className="p-4 text-center font-heading text-xs font-bold uppercase tracking-[2px] text-red">
                      JRC Detailing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-white/4 ${i % 2 === 0 ? 'bg-dark-2/50' : ''}`}
                    >
                      <td className="p-4 text-sm text-white/60">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.dealership === true ? (
                          <span className="text-green-400">&#10003;</span>
                        ) : row.dealership === false ? (
                          <span className="text-red">&#10007;</span>
                        ) : (
                          <span className="text-sm text-white/30">{row.dealership}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.jrc === true ? (
                          <span className="text-green-400">&#10003;</span>
                        ) : (
                          <span className="text-red">&#10007;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── The Process ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              How It Works
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              The New Car Protection Process
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              A proven process specifically designed for new vehicles.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.06}>
                <div className="flex gap-6 rounded-lg border border-white/6 bg-dark-2 p-6 transition-colors hover:border-white/10">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red/10 font-heading text-xl font-bold text-red">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-sm font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dealership Brands ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Dealership Trusted
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              Brands We Work With
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/60">
              JRC Detailing is trusted by major dealerships to prepare and protect new vehicles.
              The same standard of care is applied to every private client vehicle.
            </p>

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

      {/* ── FAQ ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Common Questions
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              New Car Protection FAQ
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {newCarFaqs.map((faq, i) => (
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

      {/* ── CTA ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-heading text-4xl font-extrabold text-red md:text-5xl">
              Just Picked Up Your New Car?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60">
              Get in touch with {OWNER.firstName} to discuss protection options for your new
              vehicle. The sooner you protect it, the better the long-term results. View all{' '}
              <Link href="/services" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                mobile detailing services and pricing
              </Link>{' '}
              or learn more about our{' '}
              <Link href="/ceramic-coating" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                ceramic coating process
              </Link>. Mobile service across{' '}
              <Link href="/areas" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                Victoria Point, Redlands, and Brisbane South
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

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/seo'
import { CONTACT, OWNER } from '@/lib/constants'

export const metadata = {
  title: 'Interior Car Detailing Brisbane | Steam Clean from $189',
  description:
    'Professional interior car detailing in Brisbane South and Victoria Point. Steam cleaning, leather care, odour removal, pet hair extraction. From $189. Mobile service across Redlands.',
  alternates: { canonical: '/interior-detailing' },
  openGraph: {
    title: 'Interior Car Detailing Brisbane | Steam Clean | JRC Detailing',
    description:
      'Professional interior detailing in Victoria Point and Brisbane South. Steam clean seats, carpets, leather care, odour removal. From $189.',
  },
}

const inclusions = [
  {
    title: 'Full Vacuum',
    description:
      'Every surface is vacuumed thoroughly, including under seats, between crevices, boot, and door pockets. Compressed air blows out dust from vents and tight spaces.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
      </svg>
    ),
  },
  {
    title: 'Steam Cleaning',
    description:
      'High-temperature steam lifts embedded dirt, stains, and bacteria from fabric seats, carpets, and floor mats. Steam sanitises without harsh chemicals and dries faster than traditional shampooing.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M4 14h16a0 0 0 010 0c0 3.314-3.582 6-8 6s-8-2.686-8-6a0 0 0 010 0z" />
        <path d="M12 2v2M8 4v2M16 4v2" />
      </svg>
    ),
  },
  {
    title: 'Vinyl & Plastics',
    description:
      'All dashboard, console, door cards, and trim pieces are cleaned and dressed. UV-protective dressing prevents fading and cracking from Queensland sun exposure.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Windows Inside & Out',
    description:
      'All glass surfaces are cleaned streak-free inside and out for maximum visibility and a polished appearance.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Interior Deodoriser',
    description:
      'A professional deodoriser neutralises odours at the source rather than masking them. Your cabin smells fresh and clean without overpowering fragrances.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
  },
]

const specialistServices = [
  {
    title: 'Leather Care',
    description:
      'Leather seats and surfaces receive a dedicated cleaning and conditioning treatment. The cleaner removes body oils, grime, and dye transfer without damaging the leather. The conditioner replenishes moisture, prevents cracking, and maintains a natural, supple feel. Regular leather care extends the life of your seats significantly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <rect x="4" y="3" width="16" height="8" rx="2" />
        <path d="M8 7h8" />
      </svg>
    ),
  },
  {
    title: 'Odour Removal',
    description:
      'Persistent odours from food, smoke, mildew, or spills are treated at the source. Jesse identifies where the smell originates, cleans the affected area, and applies professional-grade deodorising treatments. For severe cases, an ozone treatment can be arranged to eliminate odours completely.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
  },
  {
    title: 'Pet Hair Removal',
    description:
      'Pet hair embeds deep into fabric seats, carpets, and floor mats. JRC Detailing uses specialised tools and techniques to extract pet hair from every surface. This is available as an add-on to any interior service for $40.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .137 1.217 1.5 2 2.5 2s1.868-.853 3-2c1.132-1.147 2-3.828 2-4.828zM14 5.172C14 3.782 15.577 2.679 17.5 3c2.823.47 4.113 6.006 4 7-.137 1.217-1.5 2-2.5 2s-1.868-.853-3-2c-1.132-1.147-2-3.828-2-4.828z" />
        <path d="M11.25 16.25h1.5L12 17l-.75-.75z" />
        <path d="M4.42 11.247A13.152 13.152 0 004 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a13.152 13.152 0 00-.42-3.31" />
      </svg>
    ),
  },
]

const steamVsShampooBenefits = [
  { benefit: 'Drying time', steam: 'Hours (much faster)', shampoo: 'Up to 24 hours' },
  { benefit: 'Chemical use', steam: 'Minimal to none', shampoo: 'Cleaning solutions required' },
  { benefit: 'Sanitisation', steam: 'Kills bacteria and dust mites', shampoo: 'Cleans surface only' },
  { benefit: 'Stain removal', steam: 'Effective on most stains', shampoo: 'Effective on most stains' },
  { benefit: 'Suitable for leather', steam: 'Yes, with care', shampoo: 'No, can damage leather' },
  { benefit: 'Odour removal', steam: 'Neutralises at source', shampoo: 'Can leave damp smell' },
]

const interiorFaqs = [
  {
    question: 'How much does interior detailing cost?',
    answer:
      'The Interior Detail is $189. It includes full vacuum, steam or shampoo of seats and carpets, vinyl and plastics cleaned and dressed, windows inside and out, and interior deodoriser. Pet hair removal is an additional $40 add-on.',
  },
  {
    question: 'How long does an interior detail take?',
    answer:
      'An interior detail typically takes 2 to 3 hours depending on the size and condition of the vehicle. Heavily soiled interiors or vehicles with pet hair may take longer.',
  },
  {
    question: 'Do you steam clean or shampoo?',
    answer:
      'JRC Detailing primarily uses steam cleaning as it is faster-drying, chemical-free, and sanitises the surface. Shampooing is used when specific stains require a targeted cleaning agent. Jesse selects the best method based on your vehicle\'s interior materials and condition.',
  },
  {
    question: 'Can you remove pet hair from my car?',
    answer:
      'Yes. Pet hair removal is available as an add-on for $40. Jesse uses specialised tools to extract embedded pet hair from fabric seats, carpets, boot liners, and floor mats.',
  },
  {
    question: 'Can you remove smoke smell from a car?',
    answer:
      'Yes. Smoke odour is treated with deep cleaning of all soft surfaces, headliner cleaning, and professional deodorising treatments. For severe smoke damage, an ozone treatment may be recommended for complete elimination.',
  },
  {
    question: 'Do you clean leather seats?',
    answer:
      'Yes. Leather seats are cleaned with a pH-balanced leather cleaner and conditioned to restore suppleness and prevent cracking. Leather care is included in the interior detail for vehicles with leather seats.',
  },
]

export default function InteriorDetailingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://jrcdetailing.com.au' },
          { name: 'Interior Detailing', url: 'https://jrcdetailing.com.au/interior-detailing' },
        ])}
      />
      <JsonLd data={faqSchema(interiorFaqs)} />

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
              Deep Clean
            </p>
            <h1 className="mb-6 font-heading text-5xl font-extrabold md:text-7xl">
              Interior Detailing
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Professional interior detailing that transforms your cabin from tired to fresh.
              Steam cleaning, leather care, odour removal, and meticulous attention to every
              surface. From $189 with {OWNER.firstName}. Pair with a{' '}
              <Link href="/ceramic-coating" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                ceramic coating
              </Link>{' '}
              for complete inside-and-out protection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              The Package
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              What&apos;s Included in an Interior Detail
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60">
              The Interior Detail ($189) covers every surface inside your vehicle. Here is
              exactly what you get.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.06}>
                <div className="group rounded-lg border border-white/6 bg-dark-2 p-6 transition-all duration-300 hover:border-red/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-red/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red/10 text-red transition-all duration-300 group-hover:scale-110 group-hover:bg-red/15">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 font-heading text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/45">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Steam vs Shampoo ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Methods
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              Steam Cleaning vs Shampooing
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60">
              JRC Detailing uses steam cleaning as the primary method for interior fabrics.
              Here is how the two methods compare.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto rounded-lg border border-white/6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/6 bg-dark-2">
                    <th className="p-4 text-left font-heading text-xs font-bold uppercase tracking-[2px] text-white/60">
                      Factor
                    </th>
                    <th className="p-4 text-center font-heading text-xs font-bold uppercase tracking-[2px] text-red">
                      Steam
                    </th>
                    <th className="p-4 text-center font-heading text-xs font-bold uppercase tracking-[2px] text-white/40">
                      Shampoo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {steamVsShampooBenefits.map((row, i) => (
                    <tr
                      key={row.benefit}
                      className={`border-b border-white/4 ${i % 2 === 0 ? 'bg-dark-2/50' : ''}`}
                    >
                      <td className="p-4 text-sm font-medium text-white/60">{row.benefit}</td>
                      <td className="p-4 text-center text-sm text-white/50">{row.steam}</td>
                      <td className="p-4 text-center text-sm text-white/40">{row.shampoo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Specialist Services ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Specialist Care
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              Beyond the Standard Clean
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {specialistServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="group rounded-lg border border-white/6 bg-dark-2 p-8 transition-all duration-300 hover:border-red/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-red/5">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red/10 text-red transition-all duration-300 group-hover:scale-110 group-hover:bg-red/15">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 font-heading text-base font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/45">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Investment
            </p>
            <h2 className="mb-8 font-heading text-4xl font-extrabold md:text-5xl">Pricing</h2>

            <div className="rounded-lg border border-white/6 bg-dark-2 p-10 mb-6">
              <h3 className="mb-2 font-heading text-2xl font-bold text-white">Interior Detail</h3>
              <p className="mb-4 font-heading text-4xl font-extrabold text-red">$189</p>
              <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-white/50">
                Full vacuum, steam or shampoo seats and carpets, vinyl and plastics cleaned and
                dressed, windows inside and out, interior deodoriser. 2 to 3 hours on-site.
              </p>
            </div>

            <div className="rounded-lg border border-white/6 bg-dark-2 p-6">
              <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-[2px] text-white/60">
                Add-Ons
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center justify-between rounded border border-white/4 px-4 py-3">
                  <span className="text-sm text-white/50">Pet Hair Removal</span>
                  <span className="font-heading text-sm font-bold text-red">$40</span>
                </div>
                <div className="flex items-center justify-between rounded border border-white/4 px-4 py-3">
                  <span className="text-sm text-white/50">Carpet &amp; Leather Protection</span>
                  <span className="font-heading text-sm font-bold text-red">$120</span>
                </div>
              </div>
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
              Interior Detailing FAQ
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {interiorFaqs.map((faq, i) => (
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
              Refresh Your Interior
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60">
              Whether it is a quick refresh or a deep clean for a neglected cabin, {OWNER.firstName}{' '}
              will bring it back to life. View all{' '}
              <Link href="/services" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                mobile detailing services and packages
              </Link>{' '}
              or pair your interior clean with a{' '}
              <Link href="/paint-correction" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                paint correction
              </Link>{' '}
              for a complete transformation. Servicing{' '}
              <Link href="/areas" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                Victoria Point, Redlands, and Brisbane South
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

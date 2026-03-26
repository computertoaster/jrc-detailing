import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, howToSchema } from '@/lib/seo'
import { CONTACT, OWNER } from '@/lib/constants'
import { polishingImage } from '@/lib/data'

export const metadata = {
  title: 'Paint Correction',
  description:
    'Professional paint correction in Victoria Point, Redlands & Brisbane South. Machine polishing to remove swirl marks, scratches, and oxidation. From $320. JRC Detailing.',
  alternates: { canonical: '/paint-correction' },
  openGraph: {
    title: 'Paint Correction Brisbane | Swirl Mark Removal | JRC Detailing',
    description:
      'Professional paint correction and machine polishing in Victoria Point & Brisbane South. Remove swirl marks, scratches, oxidation. From $320.',
  },
}

const stages = [
  {
    stage: '1-Stage Polish',
    description:
      'Removes light swirl marks and minor surface imperfections. Ideal for well-maintained vehicles that need a refresh. Typically achieves 60 to 70% defect removal and leaves a noticeably cleaner, glossier finish.',
    included: 'Included in the Full Detail ($370)',
  },
  {
    stage: '2-Stage Cut & Polish',
    description:
      'A heavier cut followed by a refining polish. Removes moderate swirl marks, light scratches, water spots, and oxidation. Achieves 80 to 90% defect removal and produces a deep, reflective finish.',
    included: 'Included in the Prestige Detail ($550)',
  },
  {
    stage: '3-Stage Machine Cut & Polish',
    description:
      'The full correction process: heavy cut, medium polish, and finishing polish. Removes heavy swirl marks, deeper scratches, oxidation, and orange peel. Achieves 95%+ defect removal. Wet sanding is available for the most severe defects.',
    included: 'Full Cut & Polish ($320) as a standalone service',
  },
]

const signs = [
  {
    title: 'Swirl Marks',
    description:
      'Circular spider-web patterns visible under direct sunlight or strong lighting. Usually caused by automatic car washes, poor washing technique, or dirty wash mitts.',
  },
  {
    title: 'Light Scratches',
    description:
      'Fine surface scratches from daily use, car park incidents, or brushing against the vehicle. If you can feel it with a fingernail, it may need wet sanding.',
  },
  {
    title: 'Oxidation',
    description:
      'Dull, chalky, or faded paintwork caused by prolonged UV exposure. Common on vehicles parked outdoors in Queensland without a garage or carport.',
  },
  {
    title: 'Water Spots',
    description:
      'Mineral deposits left behind from water evaporating on the surface. If left untreated, they etch into the clear coat and become permanent.',
  },
  {
    title: 'Dull Paint',
    description:
      'Paint that has lost its depth, gloss, and colour vibrancy. Often a combination of embedded contaminants, micro-marring, and UV degradation working together.',
  },
  {
    title: 'Before Ceramic Coating',
    description:
      'Ceramic coating locks in whatever is underneath. Applying coating over defective paint preserves the imperfections permanently. Paint correction should always be done first.',
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Thorough Wash',
    description:
      'A full exterior wash using the two-bucket method to safely remove loose dirt, dust, and road grime without introducing new scratches to the surface.',
  },
  {
    step: 2,
    title: 'Decontamination',
    description:
      'Iron remover and tar remover break down bonded contaminants. These are particles embedded in the clear coat that regular washing cannot remove.',
  },
  {
    step: 3,
    title: 'Clay Bar Treatment',
    description:
      'A clay bar glides across the surface to pull out remaining embedded contaminants. The paint should feel glass-smooth after this step.',
  },
  {
    step: 4,
    title: 'Test Spot',
    description:
      'Jesse tests a small area with different pad and compound combinations to determine the most effective approach for your specific paint type and condition.',
  },
  {
    step: 5,
    title: 'Machine Polishing',
    description:
      'Using a dual-action or rotary polisher, Jesse systematically works through each panel. Multiple stages of diminishing abrasive compounds remove defects and refine the finish.',
  },
  {
    step: 6,
    title: 'Sealant Protection',
    description:
      'A high-quality sealant wax is applied to protect the freshly corrected paint. This provides months of protection and maintains the deep gloss achieved during correction.',
  },
]

const paintCorrectionFaqs = [
  {
    question: 'How much does paint correction cost?',
    answer:
      'The Full Cut & Polish is $320 and includes a 3-stage machine polish, clay bar, and sealant wax. The Prestige Detail at $550 includes a 2-stage cut and polish alongside a full interior detail, engine bay clean, and headlight restoration. For vehicles needing the most intensive correction, pricing is discussed on inspection.',
  },
  {
    question: 'Will paint correction remove deep scratches?',
    answer:
      'Machine polishing removes defects within the clear coat layer. If a scratch has gone through the clear coat into the base coat or primer, polishing alone cannot fully remove it, but it can significantly reduce visibility. Wet sanding is available for deeper defects where applicable.',
  },
  {
    question: 'How often should I get paint correction?',
    answer:
      'Paint correction removes a thin layer of clear coat, so it should not be done frequently. For most vehicles, once every 1 to 2 years is appropriate. Applying ceramic coating after correction extends the interval significantly by protecting the corrected surface.',
  },
  {
    question: 'Can you do paint correction on my driveway?',
    answer:
      'Yes. JRC Detailing is fully mobile. Jesse brings all equipment including machine polishers, lighting rigs, and power supply. Ideally, the vehicle should be in a shaded area or garage for the best results, but on-site work at your home is standard.',
  },
]

export default function PaintCorrectionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://jrcdetailing.com.au' },
          { name: 'Paint Correction', url: 'https://jrcdetailing.com.au/paint-correction' },
        ])}
      />
      <JsonLd data={faqSchema(paintCorrectionFaqs)} />
      <JsonLd
        data={howToSchema(
          'How to Correct Car Paint',
          'Professional paint correction process to remove swirl marks, scratches, and oxidation from vehicle paintwork.',
          processSteps.map((s) => ({ name: s.title, text: s.description }))
        )}
      />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={polishingImage}
            alt="Machine polishing a car panel"
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
              Restore Your Paint
            </p>
            <h1 className="mb-6 font-heading text-5xl font-extrabold md:text-7xl">
              Paint Correction
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Professional machine polishing to remove swirl marks, scratches, oxidation, and
              dullness. Restore your paintwork to a deep, flawless finish. From $320 with{' '}
              {OWNER.firstName}, {OWNER.experience} years experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What is Paint Correction ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              The Craft
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              What is Paint Correction?
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/60">
              Paint correction is the process of using machine polishers and specialised compounds
              to permanently remove surface imperfections from your vehicle&apos;s clear coat. This
              includes swirl marks, light scratches, water spots, oxidation, and dullness. Unlike
              fillers or glazes that temporarily hide defects, paint correction physically levels
              the surface for a genuine, lasting result.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stages Explained ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Correction Levels
            </p>
            <h2 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
              1-Stage vs 2-Stage vs 3-Stage
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              The number of stages refers to the number of polishing passes with different compounds and pads.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {stages.map((stage, i) => (
              <AnimatedSection key={stage.stage} delay={i * 0.08}>
                <div className="rounded-lg border border-white/6 bg-dark-2 p-8 transition-colors hover:border-white/10">
                  <h3 className="mb-3 font-heading text-lg font-bold text-white">
                    {stage.stage}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/50">{stage.description}</p>
                  <p className="text-sm font-medium text-red">{stage.included}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── When You Need Paint Correction ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Signs to Look For
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              When You Need Paint Correction
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signs.map((sign, i) => (
              <AnimatedSection key={sign.title} delay={i * 0.06}>
                <div className="rounded-lg border border-white/6 bg-dark-2 p-6 transition-all duration-300 hover:border-white/12 hover:-translate-y-1">
                  <h3 className="mb-2 font-heading text-sm font-bold text-white">{sign.title}</h3>
                  <p className="text-sm leading-relaxed text-white/45">{sign.description}</p>
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
              The Correction Process
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray">
              A methodical, multi-step process that produces consistent, professional results.
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

      {/* ── Pricing ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Pricing
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              Paint Correction Packages
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedSection delay={0}>
              <div className="rounded-lg border border-white/6 bg-dark-2 p-8 transition-colors hover:border-white/10">
                <h3 className="mb-2 font-heading text-xl font-bold text-white">
                  Full Cut &amp; Polish
                </h3>
                <p className="mb-4 font-heading text-3xl font-extrabold text-red">$320</p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li className="flex items-center gap-2">
                    <span className="text-red">&#10003;</span> Exterior wash
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red">&#10003;</span> Clay bar treatment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red">&#10003;</span> 3-stage machine cut &amp; polish
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red">&#10003;</span> Sealant wax
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red">&#10003;</span> Wheels cleaned &amp; dressed
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red">&#10003;</span> Wet sanding if necessary
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-lg border border-gold/20 bg-dark-2 p-8 transition-colors hover:border-gold/30">
                <div className="mb-2 inline-block rounded-full bg-gold/10 px-3 py-1 font-heading text-[0.6rem] font-bold uppercase tracking-[2px] text-gold">
                  Best Value
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-white">Prestige Detail</h3>
                <p className="mb-4 font-heading text-3xl font-extrabold text-gold">$550</p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li className="flex items-center gap-2">
                    <span className="text-gold">&#10003;</span> Everything in Cut &amp; Polish
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">&#10003;</span> Full interior detail
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">&#10003;</span> Engine bay cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">&#10003;</span> Headlight restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">&#10003;</span> Black plastics restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">&#10003;</span> 2-stage cut &amp; polish + wax
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Before / After Concept ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
              Results
            </p>
            <h2 className="mb-6 font-heading text-4xl font-extrabold md:text-5xl">
              The Difference is Visible
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/60">
              Paint correction produces a dramatic visual transformation. Swirl marks, dullness,
              and haze are replaced with depth, clarity, and mirror-like reflections. The results
              speak for themselves under any lighting condition.
            </p>
            <Link
              href="/gallery"
              className="inline-block rounded-sm border border-white/20 px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              View Gallery
            </Link>
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
              Paint Correction FAQ
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {paintCorrectionFaqs.map((faq, i) => (
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
              Restore Your Paintwork
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60">
              Send {OWNER.firstName} a photo of your paint condition and he will recommend the
              right level of correction for your vehicle.
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

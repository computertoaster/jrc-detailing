'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import JsonLd from '@/components/JsonLd'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'
import { CONTACT, OWNER, DEALER_BRANDS } from '@/lib/constants'

const faqSections = [
  {
    title: 'General Questions',
    faqs: [
      {
        question: 'What is JRC Detailing?',
        answer: `JRC Detailing is a professional mobile car detailing business based in Victoria Point, Queensland. Owned and operated by ${OWNER.name}, JRC Detailing has ${OWNER.experience} years of hands-on experience and is trusted by major dealerships including ${DEALER_BRANDS.join(', ')}. Every job is completed on-site at your home, office, or dealership.`,
      },
      {
        question: 'What areas do you service?',
        answer:
          'JRC Detailing services Victoria Point, Cleveland, Capalaba, Redland Bay, Thornlands, Wellington Point, Ormiston, Alexandra Hills, Birkdale, Sheldon, Mount Cotton, Wynnum, Manly, Chandler, Springwood, Rochedale, Logan, Brisbane CBD, and Brisbane South. The core service area covers Redlands, Bayside, and Brisbane South.',
      },
      {
        question: 'Do you come to me?',
        answer:
          'Yes. JRC Detailing is a fully mobile service. Jesse comes to your home, office, or dealership with all the equipment needed. You do not need to drop your car anywhere.',
      },
      {
        question: 'How do I book?',
        answer: `You can book by calling ${CONTACT.phone}, emailing ${CONTACT.email}, or using the contact form on the website. Jesse will confirm availability and provide a quote based on your vehicle and the service you need.`,
      },
      {
        question: 'What are your hours?',
        answer:
          'JRC Detailing operates 7 days a week by appointment, from 7am to 6pm. Bookings are recommended to secure your preferred date and time.',
      },
    ],
  },
  {
    title: 'Services & Pricing',
    faqs: [
      {
        question: 'How much does car detailing cost?',
        answer:
          'JRC Detailing offers packages at every level. Mini Detail: $99. Interior Detail: $189. Full Cut & Polish: $320. Full Detail: $370. Prestige Detail: $550. Ceramic Coating: custom quote based on vehicle size and condition. Add-ons include Headlight Restoration ($50), Dog Hair Removal ($40), Hydrophobic Glass Coating ($100), and Carpet & Leather Protection ($120).',
      },
      {
        question: 'What is included in a full detail?',
        answer:
          'The Full Detail ($370) includes a thorough exterior wash, full interior vacuum, windows inside and out, vinyl and plastics cleaned and dressed, interior deodoriser, wheels cleaned and dressed, shampoo or steam clean of seats and carpets, door jams cleaned, and a 1-stage polish with wax protection. It is the most popular package for a complete inside-and-out transformation.',
      },
      {
        question: 'What is the difference between a full detail and a prestige detail?',
        answer:
          'The Full Detail ($370) includes a 1-stage polish and wax with a full interior clean. The Prestige Detail ($550) upgrades to a 2-stage full cut and polish, and adds engine bay cleaning, headlight restoration, and black plastics restoration. The Prestige Detail is the ultimate bumper-to-bumper transformation for vehicles that need every surface perfected.',
      },
      {
        question: 'Do you do paint correction?',
        answer:
          'Yes. JRC Detailing offers professional paint correction as part of the Full Cut & Polish ($320) and Prestige Detail ($550). The process includes a 3-stage machine cut and polish, clay bar treatment, and sealant wax. Wet sanding is available for deeper defects such as heavy scratches or orange peel.',
      },
      {
        question: 'What is ceramic coating?',
        answer:
          'Ceramic coating is a liquid polymer that chemically bonds to your vehicle\'s clear coat, forming a permanent layer of protection. Unlike wax or sealant that wears away over weeks, ceramic coating lasts for years. It provides extreme hydrophobic properties, UV resistance, chemical resistance, and a deep glossy finish.',
      },
      {
        question: 'How much does ceramic coating cost in Brisbane?',
        answer:
          'Ceramic coating pricing varies based on vehicle size, paint condition, and the coating system chosen. JRC Detailing provides custom quotes after inspecting the vehicle. Every ceramic coating includes full paint correction to ensure the surface is flawless before the coating is applied.',
      },
      {
        question: 'How long does ceramic coating last?',
        answer:
          'Professional ceramic coatings last 2 to 5+ years depending on the product chosen, how the vehicle is used, and maintenance habits. Jesse recommends the right coating system for your situation and provides aftercare guidance to maximise longevity.',
      },
      {
        question: 'Do you offer new car protection packages?',
        answer:
          'Yes. Ceramic coating is ideal for new vehicles. Applying protection before the paint is exposed to UV, bird droppings, tree sap, and road contaminants preserves the factory finish from day one. JRC Detailing regularly applies new car protection for customers collecting vehicles from dealerships.',
      },
    ],
  },
  {
    title: 'Process',
    faqs: [
      {
        question: 'How long does each service take?',
        answer:
          'Mini Detail: 1 to 2 hours. Interior Detail: 2 to 3 hours. Full Cut & Polish: 4 to 6 hours. Full Detail: 4 to 5 hours. Prestige Detail: 6 to 8 hours. Ceramic Coating: 1 to 2 days depending on the vehicle condition and coating system. Timeframes may vary based on vehicle size and condition.',
      },
      {
        question: 'What products do you use?',
        answer:
          'JRC Detailing uses professional-grade products from AutoSmart, Bowden\'s Own, Gyeon, and CarPro. These are trusted brands used by professional detailers and dealerships across Australia. Jesse selects products based on the specific needs of each vehicle.',
      },
      {
        question: 'Can I wash my car after ceramic coating?',
        answer:
          'Wait at least 7 days for the coating to fully cure before washing. After curing, wash using the two-bucket method with a pH-neutral car shampoo. Avoid automatic car washes permanently, as the brushes will degrade the coating over time.',
      },
      {
        question: 'Do you work on all vehicle types?',
        answer:
          'Yes. JRC Detailing works on all vehicle types including sedans, SUVs, utes, 4WDs, luxury vehicles, and everyday daily drivers. From a Mazda 3 to a BMW X5, every vehicle receives the same professional standard of care.',
      },
    ],
  },
  {
    title: 'Trust & Quality',
    faqs: [
      {
        question: 'Which dealerships do you work with?',
        answer: `JRC Detailing is trusted by ${DEALER_BRANDS.join(', ')} dealerships for vehicle preparation, new car protection, and detailing. The same professional-grade process used for dealership vehicles is applied to every private client booking.`,
      },
      {
        question: 'How many years of experience do you have?',
        answer: `${OWNER.name} has ${OWNER.experience} years of professional car detailing experience. That includes work across dealerships, private clients, and vehicle preparation for sale.`,
      },
      {
        question: 'Are you insured?',
        answer:
          'Yes. JRC Detailing is fully insured and operates as a professional mobile detailing business. Every job is covered.',
      },
    ],
  },
]

// Flatten all FAQs for schema
const allFaqs = faqSections.flatMap((section) => section.faqs)

function FAQAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-lg border border-white/6 bg-dark-2 transition-colors hover:border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="font-heading text-sm font-bold text-white pr-4">{question}</h3>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`flex-shrink-0 text-red transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-6 pb-6 text-sm leading-relaxed text-white/50">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://jrcdetailing.com.au' },
          { name: 'FAQ', url: 'https://jrcdetailing.com.au/faq' },
        ])}
      />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
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
              Got Questions?
            </p>
            <h1 className="mb-6 font-heading text-5xl font-extrabold md:text-7xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Everything you need to know about JRC Detailing, our services, pricing, and
              process. If your question is not listed here, give {OWNER.firstName} a call.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ Sections ── */}
      {faqSections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={`${sectionIndex % 2 === 0 ? 'bg-dark' : 'bg-black'} py-24`}
        >
          <div className="mx-auto max-w-3xl px-6">
            <AnimatedSection className="mb-12 text-center">
              <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-red">
                {section.title}
              </p>
              <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
                {section.title}
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {section.faqs.map((faq, i) => (
                <AnimatedSection key={faq.question} delay={i * 0.05}>
                  <FAQAccordionItem question={faq.question} answer={faq.answer} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-heading text-4xl font-extrabold text-red md:text-5xl">
              Still Have Questions?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60">
              {OWNER.firstName} is happy to answer any questions about services, pricing, or the
              detailing process. Get in touch today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-red px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25"
              >
                Contact Form
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

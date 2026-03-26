'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'
import { CONTACT, OWNER } from '@/lib/constants'

const faqs = [
  {
    question: 'How do I book?',
    answer:
      'Call, text, email, or use the form above. Jesse responds within a few hours.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'Victoria Point, Redlands, Bayside, and Brisbane South. See the full list on our areas page.',
  },
  {
    question: 'How much notice do I need?',
    answer:
      'Ideally 2 to 3 days, but same-week bookings are often available.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'Cash, bank transfer, and card payment are all available.',
  },
]

export default function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pb-12 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimatedSection>
            <h1 className="mb-4 font-heading text-4xl font-bold text-white md:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray-light md:text-lg">
              Ready for a showroom finish? {OWNER.firstName} personally handles every
              enquiry. Prefer to{' '}
              <Link href="/book" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                book online
              </Link>? Browse our{' '}
              <Link href="/services" className="text-blue underline underline-offset-2 transition-colors hover:text-blue-hover">
                services and pricing
              </Link>{' '}
              first.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <h2 className="mb-8 font-heading text-2xl font-bold text-white">
                Contact Details
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-4 text-gray-light transition-colors duration-300 hover:text-white"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/6 bg-dark-2">
                    <svg
                      className="h-5 w-5 text-red"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-gray">
                      Phone
                    </div>
                    <div className="text-white">{CONTACT.phone}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 text-gray-light transition-colors duration-300 hover:text-white"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/6 bg-dark-2">
                    <svg
                      className="h-5 w-5 text-red"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-gray">
                      Email
                    </div>
                    <div className="text-white">{CONTACT.email}</div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-light transition-colors duration-300 hover:text-white"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/6 bg-dark-2">
                    <svg className="h-5 w-5 text-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-gray">
                      Instagram
                    </div>
                    <div className="text-white">{CONTACT.instagram}</div>
                  </div>
                </a>

                {/* Operating Info */}
                <div className="mt-8 rounded-xl border border-white/6 bg-dark-2/50 p-6 backdrop-blur-sm">
                  <div className="mb-2 font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-gray">
                    Availability
                  </div>
                  <p className="text-white">
                    Mobile Service &middot; 7 Days by Appointment
                  </p>
                  <p className="mt-3 text-sm text-gray-light">
                    Covering Victoria Point, Redlands, Bayside, and Brisbane South. Jesse
                    brings the full studio setup to your home or workplace.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right">
              <h2 className="mb-8 font-heading text-2xl font-bold text-white">
                Send an Enquiry
              </h2>
              <div className="rounded-xl border border-white/6 bg-dark-2/50 p-6 backdrop-blur-sm md:p-8">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={i * 0.1}>
                <div className="rounded-xl border border-white/6 bg-dark-2/50 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 font-heading text-lg font-bold text-white">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-light">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
              Service Coverage
            </h2>
            <p className="text-gray-light">
              Based in Victoria Point, JRC Detailing provides mobile car detailing across
              the Redlands Coast, Bayside suburbs, and greater Brisbane South. From
              Cleveland to Springwood, Wynnum to Logan, Jesse covers it all. Check our{' '}
              <Link
                href="/areas"
                className="text-red transition-colors hover:text-white"
              >
                areas page
              </Link>{' '}
              for the full list of suburbs serviced.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

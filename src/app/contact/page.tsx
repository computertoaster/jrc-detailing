import { Metadata } from 'next'
import ContactContent from './ContactContent'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'

const contactFaqs = [
  {
    question: 'How do I book a detail with JRC Detailing?',
    answer:
      'You can book by calling 0481 998 874, sending a message through the contact form on this page, or reaching out via Instagram @jrc.detailing_. Jesse will respond with a tailored quote for your vehicle.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'JRC Detailing is fully mobile across Victoria Point, Cleveland, Capalaba, Redland Bay, Thornlands, Wellington Point, Ormiston, Alexandra Hills, Birkdale, Wynnum, Manly, Springwood, Rochedale, Logan, and greater Brisbane South.',
  },
  {
    question: 'How quickly can I get a booking?',
    answer:
      'Same-week bookings are usually available. Contact Jesse with your vehicle details and preferred date, and he will confirm availability.',
  },
]

export const metadata: Metadata = {
  title: 'Get a Car Detailing Quote | Contact JRC Detailing',
  description:
    'Request a free car detailing quote from JRC Detailing. Call, text, email, or use our contact form. Mobile service across Victoria Point, Redlands and Brisbane South.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Contact', url: `${SITE_URL}/contact` },
        ])}
      />
      <JsonLd data={faqSchema(contactFaqs)} />
      <ContactContent />
    </>
  )
}

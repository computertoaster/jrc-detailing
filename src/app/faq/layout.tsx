import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Common questions about car detailing services, pricing, ceramic coating, and mobile detailing in Victoria Point, Redlands & Brisbane South. JRC Detailing FAQ.',
  alternates: { canonical: '/faq' },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

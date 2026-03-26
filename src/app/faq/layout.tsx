import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Detailing FAQ | Prices, Services and Process',
  description:
    'How much does car detailing cost? Common questions about detailing prices, ceramic coating, paint correction, and mobile service in Victoria Point, Redlands and Brisbane South.',
  alternates: { canonical: '/faq' },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

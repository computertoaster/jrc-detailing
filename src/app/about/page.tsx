import { Metadata } from 'next'
import AboutContent from './AboutContent'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, personSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Jesse Curtain | Car Detailer Victoria Point',
  description:
    'Meet Jesse Curtain, founder of JRC Detailing in Victoria Point. 7+ years of professional car detailing experience. Trusted by BMW, Mercedes and major dealerships. Brisbane South.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'About', url: `${SITE_URL}/about` },
        ])}
      />
      <JsonLd data={personSchema()} />
      <AboutContent />
    </>
  )
}

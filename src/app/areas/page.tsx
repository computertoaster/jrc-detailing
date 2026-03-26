import { Metadata } from 'next'
import AreasContent from './AreasContent'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Service Areas',
  description:
    'Mobile car detailing across Victoria Point, Redlands, Bayside & Brisbane South. See all suburbs serviced by JRC Detailing.',
  alternates: {
    canonical: '/areas',
  },
}

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Service Areas', url: `${SITE_URL}/areas` },
        ])}
      />
      <AreasContent />
    </>
  )
}

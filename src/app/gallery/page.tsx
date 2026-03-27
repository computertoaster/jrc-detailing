import { Metadata } from 'next'
import GalleryContent from './GalleryContent'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, imageGallerySchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'See the results of professional car detailing by JRC Detailing. Ceramic coating, paint correction, interior detail. Victoria Point & Brisbane South.',
  alternates: {
    canonical: '/gallery',
  },
}

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Gallery', url: `${SITE_URL}/gallery` },
        ])}
      />
      <JsonLd data={imageGallerySchema()} />
      <GalleryContent />
    </>
  )
}

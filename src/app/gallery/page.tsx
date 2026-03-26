import { Metadata } from 'next'
import GalleryContent from './GalleryContent'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'See the results of professional car detailing by JRC Detailing. Ceramic coating, paint correction, interior detail. Victoria Point & Brisbane South.',
}

export default function GalleryPage() {
  return <GalleryContent />
}

import { Metadata } from 'next'
import AreasContent from './AreasContent'

export const metadata: Metadata = {
  title: 'Service Areas',
  description:
    'Mobile car detailing across Victoria Point, Redlands, Bayside & Brisbane South. See all suburbs serviced by JRC Detailing.',
}

export default function AreasPage() {
  return <AreasContent />
}

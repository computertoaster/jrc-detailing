import { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Jesse Curtain, founder of JRC Detailing. 7+ years of professional car detailing experience. Trusted by BMW, Mercedes & major dealerships. Victoria Point & Brisbane South.',
}

export default function AboutPage() {
  return <AboutContent />
}

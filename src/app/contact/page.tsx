import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with JRC Detailing. Call, text, email, or use our contact form. Mobile car detailing across Victoria Point, Redlands & Brisbane South.',
}

export default function ContactPage() {
  return <ContactContent />
}

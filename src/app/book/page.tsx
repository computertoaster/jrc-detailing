import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import BookingForm from './BookingForm'

export const metadata = {
  title: 'Book Your Detail',
  description:
    'Book a professional mobile car detail with JRC Detailing. Select your service, choose a date, and get confirmed. Victoria Point, Redlands & Brisbane South.',
  alternates: {
    canonical: '/book',
  },
}

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Book', url: `${SITE_URL}/book` },
        ])}
      />
      <BookingForm />
    </>
  )
}

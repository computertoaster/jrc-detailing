import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import JsonLd from '@/components/JsonLd'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'
import { localBusinessSchema, organizationSchema } from '@/lib/seo'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} | Premium Mobile Car Detailing | Victoria Point & Brisbane South`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'car detailing victoria point',
    'mobile car detailing brisbane south',
    'ceramic coating brisbane',
    'paint correction redlands',
    'mobile detailing redlands',
    'car detailing brisbane south',
    'ceramic coating victoria point',
    'cut and polish brisbane',
    'interior detailing redlands',
    'mobile car wash victoria point',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_NAME} | Premium Mobile Car Detailing`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: 'en_AU',
    type: 'website',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Premium Mobile Car Detailing`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'PLACEHOLDER',
  },
  other: {
    'geo.region': 'AU-QLD',
    'geo.placename': 'Victoria Point',
    'theme-color': '#c41e3a',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
      </head>
      <body className="bg-black font-body text-white antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={organizationSchema()} />
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}

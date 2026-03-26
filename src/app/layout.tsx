import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'

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
  openGraph: {
    title: `${SITE_NAME} | Premium Mobile Car Detailing`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: 'en_AU',
    type: 'website',
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(SITE_URL),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-black font-body text-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}

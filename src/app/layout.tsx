import type { Metadata } from 'next'
import Script from 'next/script'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import AnalyticsEvents from '@/components/AnalyticsEvents'
import JsonLd from '@/components/JsonLd'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, CONTACT } from '@/lib/constants'
import { localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/seo'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'

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
    site: '@jrcdetailing_',
    creator: '@jrcdetailing_',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {},
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        <link rel="author" href="https://jrcdetailing.com.au/about" />
        <meta name="geo.position" content="-27.5837;153.1303" />
        <meta name="ICBM" content="-27.5837, 153.1303" />
      </head>
      <body className="bg-black font-body text-white antialiased noise-overlay">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />

        {/* Google Analytics (GA4) */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                send_page_view: true,
                cookie_flags: 'SameSite=None;Secure'
              });`}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');`}
          </Script>
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");`}
          </Script>
        )}

        <AnalyticsEvents />
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}

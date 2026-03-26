import { Service } from './data'

const SITE_URL = 'https://jrcdetailing.com.au'

const SERVED_SUBURBS = [
  'Victoria Point',
  'Cleveland',
  'Capalaba',
  'Redland Bay',
  'Thornlands',
  'Wellington Point',
  'Ormiston',
  'Alexandra Hills',
  'Birkdale',
  'Sheldon',
  'Mount Cotton',
  'Wynnum',
  'Manly',
  'Chandler',
  'Springwood',
  'Rochedale',
  'Logan',
  'Brisbane CBD',
  'Brisbane South',
]

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoRepair'],
    name: 'JRC Detailing',
    description:
      'Premium mobile car detailing in Victoria Point, Redlands and Brisbane South. Ceramic coating, paint correction, interior detailing. 7+ years experience. Trusted by BMW, Mercedes and major dealerships.',
    telephone: '+61481998874',
    email: 'jesse@jrcdetailing.com.au',
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    priceRange: '$99 - $550+',
    areaServed: SERVED_SUBURBS.map((suburb) => ({
      '@type': 'Place',
      name: suburb,
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Victoria Point',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.5837,
      longitude: 153.1303,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Jesse Curtain',
    },
    sameAs: ['https://www.instagram.com/jrc.detailing_/'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
    },
  }
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'JRC Detailing',
    },
    areaServed: [
      { '@type': 'Place', name: 'Victoria Point' },
      { '@type': 'Place', name: 'Redlands' },
      { '@type': 'Place', name: 'Brisbane South' },
    ],
    ...(service.price !== null
      ? {
          offers: {
            '@type': 'Offer',
            price: service.price.toString(),
            priceCurrency: 'AUD',
          },
        }
      : {}),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JRC Detailing',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+61481998874',
      contactType: 'customer service',
      areaServed: 'AU',
      availableLanguage: 'English',
    },
    founder: {
      '@type': 'Person',
      name: 'Jesse Curtain',
    },
    sameAs: ['https://www.instagram.com/jrc.detailing_/'],
  }
}

export function howToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jesse Curtain',
    jobTitle: 'Founder & Lead Detailer',
    worksFor: {
      '@type': 'LocalBusiness',
      name: 'JRC Detailing',
    },
    knowsAbout: [
      'Car Detailing',
      'Ceramic Coating',
      'Paint Correction',
      'Vehicle Care',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Victoria Point',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
  }
}

import { Service } from './data'

const SITE_URL = 'https://jrcdetailing.com.au'
const GOOGLE_MAPS_URL = 'https://g.page/r/CZuK3_XFd-o_EAI'

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
    sameAs: [
      'https://www.instagram.com/jrc.detailing_/',
      GOOGLE_MAPS_URL,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
    },
    hasMap: GOOGLE_MAPS_URL,
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
    sameAs: [
      'https://www.instagram.com/jrc.detailing_/',
      GOOGLE_MAPS_URL,
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'JRC Detailing',
    url: SITE_URL,
    description:
      'Premium mobile car detailing in Victoria Point, Redlands and Brisbane South. Ceramic coating, paint correction, interior detailing.',
    publisher: {
      '@type': 'Organization',
      name: 'JRC Detailing',
      url: SITE_URL,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/services?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
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

export function reviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'JRC Detailing',
    url: SITE_URL,
    telephone: '+61481998874',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: { '@type': 'Person', name: 'Verified Customer' },
        reviewBody:
          'Incredible attention to detail. Jesse transformed my BMW inside and out. Best detailer in the Redlands.',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: { '@type': 'Person', name: 'Verified Customer' },
        reviewBody:
          'Had the ceramic coating done on my new Mazda CX-5. The finish is unreal and water just sheets off. Could not be happier.',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: { '@type': 'Person', name: 'Verified Customer' },
        reviewBody:
          'Third time using JRC for a full detail. Consistently great results every time. Would not go anywhere else.',
      },
    ],
    sameAs: [
      'https://www.instagram.com/jrc.detailing_/',
      GOOGLE_MAPS_URL,
    ],
  }
}

export function imageGallerySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'JRC Detailing Gallery',
    description:
      'Gallery of professional car detailing work by JRC Detailing in Victoria Point, Brisbane South. Ceramic coating, paint correction, interior detailing results.',
    url: `${SITE_URL}/gallery`,
    publisher: {
      '@type': 'LocalBusiness',
      name: 'JRC Detailing',
      url: SITE_URL,
    },
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

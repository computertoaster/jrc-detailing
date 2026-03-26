export const SITE_NAME = 'JRC Detailing'
export const SITE_TAGLINE = 'Premium Mobile Car Detailing'
export const SITE_DESCRIPTION = 'Premium mobile car detailing in Victoria Point, Redlands & Brisbane South. Ceramic coating, paint correction, interior detailing. 7+ years experience. Trusted by BMW, Mercedes & major dealerships.'
export const SITE_URL = 'https://jrcdetailing.com.au'

export const CONTACT = {
  phone: '0481 998 874',
  phoneHref: 'tel:0481998874',
  email: 'jesse@jrcdetailing.com.au',
  instagram: '@jrc.detailing_',
  instagramUrl: 'https://www.instagram.com/jrc.detailing_/',
} as const

export const OWNER = {
  name: 'Jesse Curtain',
  firstName: 'Jesse',
  experience: '7+',
  location: 'Victoria Point, QLD',
} as const

export const DEALER_BRANDS = ['BMW', 'Mercedes', 'Mazda', 'Ford', 'Hyundai', 'Nissan', 'Geely'] as const

export const NAV_LINKS: readonly { href: string; label: string; cta?: boolean }[] = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/ceramic-coating', label: 'Ceramic' },
  { href: '/about', label: 'About' },
  { href: '/areas', label: 'Areas' },
  { href: '/contact', label: 'Get a Quote', cta: true },
]
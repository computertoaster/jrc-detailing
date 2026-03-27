import Link from 'next/link'
import Image from 'next/image'
import { CONTACT, OWNER, SITE_NAME } from '@/lib/constants'

const googleStars = '★★★★★'

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/ceramic-coating', label: 'Ceramic Coating' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

const footerServiceLinks = [
  { href: '/paint-correction', label: 'Paint Correction' },
  { href: '/interior-detailing', label: 'Interior Detailing' },
  { href: '/new-car-protection', label: 'New Car Protection' },
  { href: '/areas', label: 'Service Areas' },
  { href: '/contact', label: 'Get a Quote' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt={SITE_NAME}
            width={120}
            height={46}
            className="opacity-80"
          />
        </div>

        {/* Nav Links */}
        <nav aria-label="Footer navigation" className="mb-4">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-xs font-semibold uppercase tracking-[2px] text-white/40 transition-colors duration-300 hover:text-red"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            {footerServiceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-white/25 transition-colors duration-300 hover:text-red"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Tagline */}
        <p className="text-center font-heading text-[0.7rem] font-medium uppercase tracking-[3px] text-white/30 mb-3">
          Premium Mobile Car Detailing
        </p>

        {/* Location */}
        <p className="text-center text-sm text-white/25 mb-10">
          {OWNER.location} &middot; Servicing Redlands, Bayside &amp; Brisbane South
        </p>

        {/* Google Review CTA */}
        <div className="mx-auto mb-10 text-center">
          <a
            href={CONTACT.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 py-3 transition-all duration-300 hover:border-yellow-500/30 hover:bg-yellow-500/5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="flex-shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-heading text-[0.65rem] font-semibold uppercase tracking-[2px] text-white/50">
              Review us on Google
            </span>
            <span className="text-lg text-yellow-400">{googleStars}</span>
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto mb-8 h-px w-24 bg-white/6" />

        {/* Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-white/30">
          <a
            href={CONTACT.phoneHref}
            className="transition-colors hover:text-red"
          >
            {CONTACT.phone}
          </a>
          <span className="text-white/10">|</span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="transition-colors hover:text-red"
          >
            {CONTACT.email}
          </a>
          <span className="text-white/10">|</span>
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-red"
            aria-label={`Follow JRC Detailing on Instagram ${CONTACT.instagram}`}
          >
            {CONTACT.instagram}
          </a>
        </div>

        {/* Business Info */}
        <p className="text-center text-[0.7rem] text-white/20 mb-4">
          {SITE_NAME} | {OWNER.location} | {CONTACT.phone} | {CONTACT.email}
        </p>

        {/* Copyright */}
        <p className="text-center text-[0.7rem] text-white/15">
          &copy; 2026 {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

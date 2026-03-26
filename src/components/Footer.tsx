import Link from 'next/link'
import Image from 'next/image'
import { CONTACT, OWNER, SITE_NAME } from '@/lib/constants'

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/ceramic-coating', label: 'Ceramic' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
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
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-[0.65rem] font-semibold uppercase tracking-[2px] text-white/40 transition-colors duration-300 hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center font-heading text-[0.7rem] font-medium uppercase tracking-[3px] text-white/30 mb-3">
          Premium Mobile Car Detailing
        </p>

        {/* Location */}
        <p className="text-center text-[0.75rem] text-white/25 mb-10">
          {OWNER.location} &middot; Servicing Redlands, Bayside &amp; Brisbane South
        </p>

        {/* Divider */}
        <div className="mx-auto mb-8 h-px w-24 bg-white/6" />

        {/* Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-[0.75rem] text-white/30">
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
          >
            {CONTACT.instagram}
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-[0.7rem] text-white/15">
          &copy; 2026 {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

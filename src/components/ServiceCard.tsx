'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Service } from '@/lib/data'

function getFeatureIcon(feature: string) {
  const f = feature.toLowerCase()

  // Water / Wash
  if (f.includes('wash') || f.includes('rinse') || f.includes('water')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  // Vacuum / Dust
  if (f.includes('vacuum') || f.includes('dust') || f.includes('blow')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  // Windows / Glass
  if (f.includes('window') || f.includes('glass')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }

  // Wheels / Tyres
  if (f.includes('wheel') || f.includes('tyre') || f.includes('tire') || f.includes('rim')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }

  // Polish / Wax / Shine / Sealant
  if (f.includes('polish') || f.includes('wax') || f.includes('shine') || f.includes('gloss') || f.includes('sealant')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  // Clay Bar / Hand treatment
  if (f.includes('clay')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <path d="M18 11V6a2 2 0 00-2-2 2 2 0 00-2 2v0M14 10V4a2 2 0 00-2-2 2 2 0 00-2 2v6M10 10.5V6a2 2 0 00-2-2 2 2 0 00-2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8a2 2 0 012 2v7a5 5 0 01-5 5H9a5 5 0 01-5-5v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  // Shampoo / Steam / Clean
  if (f.includes('shampoo') || f.includes('steam') || f.includes('sanitise') || f.includes('deodor')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 3.34A10 10 0 0122 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  // Engine Bay / Gear
  if (f.includes('engine')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  // Headlight / Light / Bulb
  if (f.includes('headlight') || f.includes('light')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <path d="M9 18h6M10 22h4M12 2v1M4.22 4.22l.71.71M1 12h1M4.22 19.78l.71-.71M23 12h-1M19.78 4.22l-.71.71M19.78 19.78l-.71-.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 9a3 3 0 11-6 0 6 6 0 1112 0c0 2-1.5 3-3 4v1H9v-1c-1.5-1-3-2-3-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  // Leather
  if (f.includes('leather') || f.includes('upholstery')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="3" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }

  // Vinyl / Plastics / Dashboard / Trim / Dress
  if (f.includes('vinyl') || f.includes('plastic') || f.includes('dashboard') || f.includes('trim') || f.includes('dress')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  // Door / Jam
  if (f.includes('door')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
      </svg>
    )
  }

  // Protection / Coating / Ceramic
  if (f.includes('protect') || f.includes('coat') || f.includes('ceramic') || f.includes('hydro')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  // Correction / Cut / Compound
  if (f.includes('correct') || f.includes('cut') || f.includes('compound') || f.includes('sand')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M16 8l-8 8M8 8l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  // Default: checkmark
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-red">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const hasPrice = service.price !== null

  return (
    <Link href={`/services#${service.slug}`} className="group block">
      <motion.div
        whileHover={{
          y: -6,
          rotateX: 2,
          rotateY: -1,
          transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
        }}
        style={{ transformPerspective: 800 }}
        className={`relative overflow-hidden rounded-lg border bg-dark-2 p-6 transition-all duration-500 hover:shadow-xl ${
          service.featured
            ? 'border-red/30 hover:shadow-red/15'
            : 'border-white/6 hover:border-blue/25 hover:shadow-blue/10'
        }`}
      >
        {/* Red top-line glow on hover */}
        <div
          className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-500 ${
            service.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          style={{
            background: service.featured
              ? 'linear-gradient(90deg, transparent, rgba(196,30,58,0.6), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)',
          }}
        />

        {/* Featured gradient */}
        {service.featured && (
          <div
            className="absolute top-0 left-0 right-0 h-32 opacity-20"
            style={{
              background: 'linear-gradient(180deg, rgba(196,30,58,0.15), transparent)',
            }}
          />
        )}

        {/* Badge */}
        {service.badge && (
          <div className="absolute -top-px right-4">
            <div className="rounded-b-md bg-red px-3 py-1.5 font-heading text-[0.55rem] font-bold uppercase tracking-[1px] text-white shadow-lg shadow-red/25">
              {service.badge}
            </div>
          </div>
        )}

        {/* Service name */}
        <h3 className="mb-3 font-heading text-xs sm:text-sm font-bold uppercase tracking-[2px] text-white">
          {service.name}
        </h3>

        {/* Price */}
        <div className="mb-4">
          {hasPrice ? (
            <span className="font-heading text-3xl font-bold text-blue transition-all duration-300 group-hover:text-blue-hover">
              <span className="text-lg font-medium text-blue/70">$</span>
              {service.price}
            </span>
          ) : (
            <span className="font-heading text-lg font-semibold text-blue transition-colors duration-300 group-hover:text-blue-hover">
              {service.priceLabel || 'Custom Quote'}
            </span>
          )}
        </div>

        {/* Red divider */}
        <div className="mb-4 h-0.5 w-10 bg-red/40 transition-all duration-500 group-hover:w-16 group-hover:bg-red/70" />

        {/* Short description */}
        <p className="mb-5 text-sm sm:text-base leading-relaxed text-white/40">
          {service.shortDesc}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.slice(0, 5).map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-white/50">
              {getFeatureIcon(feature)}
              {feature}
            </li>
          ))}
          {service.features.length > 5 && (
            <li className="text-sm text-white/30">
              +{service.features.length - 5} more included
            </li>
          )}
        </ul>

        {/* View details hint */}
        <div className="mt-6 flex items-center gap-2 font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-red/60 transition-colors group-hover:text-red">
          View Details
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </Link>
  )
}

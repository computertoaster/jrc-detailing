'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Service } from '@/lib/data'

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
            <li key={feature} className="flex items-start gap-2.5 text-sm text-white/50">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red/60" />
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

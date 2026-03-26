import Link from 'next/link'
import type { Service } from '@/lib/data'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const hasPrice = service.price !== null

  return (
    <Link href={`/services#${service.slug}`} className="group block">
      <div
        className={`relative overflow-hidden rounded-lg border bg-dark-2 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
          service.featured
            ? 'border-red/30 hover:shadow-red/10'
            : 'border-white/6 hover:border-white/12 hover:shadow-white/5'
        }`}
      >
        {/* Red top-line glow on hover */}
        <div
          className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-500 ${
            service.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(196,30,58,0.6), transparent)',
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
        <h3 className="mb-3 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white">
          {service.name}
        </h3>

        {/* Price */}
        <div className="mb-4">
          {hasPrice ? (
            <span className="font-heading text-2xl font-bold text-gold">
              <span className="text-base font-medium text-gold/70">$</span>
              {service.price}
            </span>
          ) : (
            <span className="font-heading text-lg font-semibold text-gold">
              {service.priceLabel || 'Custom Quote'}
            </span>
          )}
        </div>

        {/* Red divider */}
        <div className="mb-4 h-0.5 w-10 bg-red/40" />

        {/* Short description */}
        <p className="mb-5 text-sm leading-relaxed text-white/40">
          {service.shortDesc}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.slice(0, 5).map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-[0.8rem] text-white/50">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red/60" />
              {feature}
            </li>
          ))}
          {service.features.length > 5 && (
            <li className="text-[0.75rem] text-white/30">
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
      </div>
    </Link>
  )
}

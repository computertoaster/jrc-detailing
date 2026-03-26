import { DEALER_BRANDS } from '@/lib/constants'

export default function TrustBar() {
  return (
    <section className="border-y border-white/6 bg-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 md:flex-row md:gap-10">
        {/* Label */}
        <div className="flex items-center gap-4 whitespace-nowrap">
          <span className="font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-white/40">
            Trusted by Dealerships
          </span>
          <span className="hidden h-6 w-px bg-white/10 md:block" />
        </div>

        {/* Brands */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {DEALER_BRANDS.map((brand) => (
            <span
              key={brand}
              className="font-heading text-[0.65rem] font-bold uppercase tracking-[4px] text-white/20 transition-colors duration-300 hover:text-gold"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

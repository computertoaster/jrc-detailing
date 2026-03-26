'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: string
  suffix: string
  label: string
  numericValue: number
  decimals?: number
}

const stats: Stat[] = [
  { value: '7', suffix: '+', label: 'Years Experience', numericValue: 7 },
  { value: '7', suffix: '', label: 'Dealer Brands', numericValue: 7 },
  { value: '5.0', suffix: '', label: 'Star Rated', numericValue: 5, decimals: 1 },
  { value: '100', suffix: '%', label: 'Mobile Service', numericValue: 100 },
]

function AnimatedCounter({ target, decimals = 0, suffix }: { target: number; decimals?: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const steps = 40
    const stepDuration = duration / steps
    let step = 0

    const interval = setInterval(() => {
      step++
      const progress = step / steps
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)

      if (step >= steps) {
        setCount(target)
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      <span className="text-red">{suffix}</span>
    </span>
  )
}

export default function StatsRow() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-lg border border-white/6 bg-dark-2/50 p-6 text-center backdrop-blur-sm"
            >
              <div className="mb-2 font-heading text-3xl font-bold text-white md:text-4xl">
                <AnimatedCounter
                  target={stat.numericValue}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>
              <div className="font-heading text-[0.55rem] font-semibold uppercase tracking-[2px] text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

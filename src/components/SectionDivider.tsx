'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionDividerProps {
  variant?: 'red' | 'blue' | 'subtle'
}

export default function SectionDivider({ variant = 'subtle' }: SectionDividerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  const colours = {
    red: 'from-transparent via-red/30 to-transparent',
    blue: 'from-transparent via-blue/30 to-transparent',
    subtle: 'from-transparent via-white/8 to-transparent',
  }

  return (
    <div ref={ref} className="relative flex items-center justify-center py-1">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`h-px w-full max-w-md bg-gradient-to-r ${colours[variant]}`}
      />
      {/* Centre dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`absolute h-1.5 w-1.5 rounded-full ${
          variant === 'red' ? 'bg-red/50' : variant === 'blue' ? 'bg-blue/50' : 'bg-white/15'
        }`}
      />
    </div>
  )
}

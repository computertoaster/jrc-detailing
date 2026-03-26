'use client'

import { motion } from 'framer-motion'
import { CONTACT } from '@/lib/constants'

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2.5, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3"
    >
      {/* Instagram */}
      <motion.a
        href={CONTACT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-3/90 backdrop-blur-xl border border-white/10 text-white/70 transition-colors hover:text-white hover:border-white/20"
        aria-label="Follow JRC Detailing on Instagram"
        title="Follow on Instagram"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </motion.a>

      {/* Phone */}
      <motion.a
        href={CONTACT.phoneHref}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-red text-white shadow-lg shadow-red/30 animate-pulse-slow"
        aria-label="Call JRC Detailing"
        title="Call JRC Detailing"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      </motion.a>
    </motion.div>
  )
}

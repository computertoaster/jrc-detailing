'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.97, 1.03, 0.97] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/logo.png"
          alt="JRC Detailing"
          width={140}
          height={54}
          priority
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 font-heading text-[0.6rem] font-semibold uppercase tracking-[4px] text-white/30"
      >
        Loading...
      </motion.p>
    </div>
  )
}

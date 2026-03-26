'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
}))

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6">
      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-red/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Red radial glow */}
      <div
        className="absolute top-1/3 left-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(196,30,58,0.3) 0%, transparent 70%)',
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-10"
      >
        <Image
          src="/logo.png"
          alt="JRC Detailing"
          width={120}
          height={46}
          priority
        />
      </motion.div>

      {/* 404 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 font-heading text-[clamp(8rem,20vw,14rem)] font-black leading-none"
        style={{
          background: 'linear-gradient(135deg, #c41e3a 0%, #d92845 50%, #a01830 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        404
      </motion.h1>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mb-4 font-heading text-2xl font-bold uppercase tracking-[3px] text-white md:text-3xl"
      >
        Page Not Found
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 mb-10 max-w-md text-center text-sm text-white/50 md:text-base"
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-sm bg-red px-8 py-4 font-heading text-[0.7rem] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-xl hover:shadow-red/25"
        >
          Back to Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-8 py-4 font-heading text-[0.7rem] font-semibold uppercase tracking-[2px] text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
        >
          View Services
        </Link>
      </motion.div>
    </div>
  )
}

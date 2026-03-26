'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { heroImage } from '@/lib/data'
import { CONTACT, OWNER } from '@/lib/constants'

const stagger = {
  container: {
    animate: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
    },
  },
} as const

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src={heroImage}
          alt="Premium car detailing"
          fill
          className="object-cover scale-110"
          priority
          sizes="100vw"
          quality={85}
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* Red radial glow */}
      <div
        className="absolute top-1/3 left-1/2 z-[1] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(196,30,58,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute bottom-1/4 right-1/4 z-[1] h-[400px] w-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,23,0.2) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        variants={stagger.container}
        initial="initial"
        animate="animate"
      >
        {/* Logo */}
        <motion.div variants={stagger.item} className="mb-8 flex justify-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/logo.png"
              alt="JRC Detailing"
              width={180}
              height={180}
              className="max-w-[120px] md:max-w-[180px] drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Tagline badge */}
        <motion.div variants={stagger.item} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
            </span>
            <span className="font-heading text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-[2px] text-white/80">
              {OWNER.experience} Years &middot; Mobile &middot; Dealership Trusted
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1 variants={stagger.item} className="mb-6 font-heading leading-[0.95]">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
            Premium
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Mobile <span className="text-red">Detailing</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={stagger.item}
          className="mx-auto mb-4 max-w-xl text-lg text-white/60 sm:text-xl"
        >
          Dealership-grade results, delivered to your door.
        </motion.p>

        {/* Areas */}
        <motion.p
          variants={stagger.item}
          className="mb-10 font-heading text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[3px] sm:tracking-[4px] text-white/30"
        >
          Victoria Point &middot; Redlands &middot; Bayside &middot; Brisbane South
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={stagger.item}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-2 rounded-sm bg-red px-8 py-4 font-heading text-[0.7rem] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-xl hover:shadow-red/25"
          >
            View Packages
            <svg
              width="14"
              height="14"
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
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-8 py-4 font-heading text-[0.7rem] font-semibold uppercase tracking-[2px] text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white hover:bg-white/5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call {OWNER.firstName}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden sm:flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-heading text-[0.55rem] font-semibold uppercase tracking-[3px] text-white/25">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-red to-transparent" />
      </motion.div>
    </section>
  )
}

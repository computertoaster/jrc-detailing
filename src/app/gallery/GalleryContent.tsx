'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { galleryImages } from '@/lib/data'
import { CONTACT } from '@/lib/constants'

export default function GalleryContent() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setSelectedImage(null), [])

  return (
    <>
      {/* Hero */}
      <section className="bg-black pb-12 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimatedSection>
            <h1 className="mb-4 font-heading text-4xl font-bold text-white md:text-6xl">
              Our Work
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray-light md:text-lg">
              See the results. Every vehicle detailed to perfection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, i) => (
              <AnimatedSection
                key={image.label}
                delay={i * 0.1}
                className={image.wide ? 'sm:col-span-2' : ''}
              >
                <motion.div
                  whileHover="hovered"
                  initial="idle"
                  onClick={() => setSelectedImage(i)}
                  className="group relative cursor-pointer overflow-hidden rounded-lg"
                >
                  <motion.div
                    variants={{
                      idle: { scale: 1, rotate: 0 },
                      hovered: { scale: 1.06, rotate: 0.5 },
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className={`relative ${image.wide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        image.wide
                          ? '(max-width: 640px) 100vw, 50vw'
                          : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                      }
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Dark overlay on hover */}
                  <motion.div
                    variants={{
                      idle: { opacity: 0 },
                      hovered: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  />

                  {/* Label + expand icon slides up on hover */}
                  <motion.div
                    variants={{
                      idle: { opacity: 0, y: 20 },
                      hovered: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4"
                  >
                    <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                      {image.label}
                    </span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Close gallery image"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
                sizes="90vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  {galleryImages[selectedImage].label}
                </p>
                <p className="text-sm text-white/50">
                  {galleryImages[selectedImage].alt}
                </p>
              </div>
            </motion.div>

            {/* Navigation arrows */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage - 1) }}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Previous image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {selectedImage < galleryImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage + 1) }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Next image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
              See the Process
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray-light">
              Watch Jesse at work. Real detailing, real results.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedSection>
              <div className="overflow-hidden rounded-lg">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/gallery/detail-12.jpg"
                  className="w-full aspect-video object-cover"
                >
                  <source src="/gallery/video-detailing.mp4" type="video/mp4" />
                </video>
                <p className="mt-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white/40">
                  Detailing in Action
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="overflow-hidden rounded-lg">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/gallery/detail-22.jpg"
                  className="w-full aspect-video object-cover"
                >
                  <source src="/gallery/video-polish.mp4" type="video/mp4" />
                </video>
                <p className="mt-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white/40">
                  Cut &amp; Polish Process
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Google Reviews + Instagram CTA */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <div className="mb-8">
              <a
                href={CONTACT.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-all duration-300 hover:border-yellow-500/30 hover:bg-yellow-500/5"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-heading text-xs font-semibold uppercase tracking-[2px] text-white/50">
                  Review us on Google
                </span>
                <span className="text-lg text-yellow-400">★★★★★</span>
              </a>
            </div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
              Want to see more?
            </h2>
            <p className="mb-8 text-gray-light">
              Follow us on Instagram for the latest transformations, behind-the-scenes
              work, and customer results.
            </p>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-blue transition-colors duration-300 hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              {CONTACT.instagram}
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Book CTA */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
              Ready for your transformation?
            </h2>
            <p className="mb-8 text-gray-light">
              Get in touch with Jesse to book your detail.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-red px-8 py-4 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25"
            >
              Book Your Detail
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

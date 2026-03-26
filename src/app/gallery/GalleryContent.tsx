'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { galleryImages } from '@/lib/data'
import { CONTACT } from '@/lib/constants'

export default function GalleryContent() {
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
                  className="group relative cursor-pointer overflow-hidden rounded-lg"
                >
                  <motion.div
                    variants={{
                      idle: { scale: 1 },
                      hovered: { scale: 1.05 },
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="relative aspect-[4/3]"
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
                    />
                  </motion.div>

                  {/* Dark overlay on hover */}
                  <motion.div
                    variants={{
                      idle: { opacity: 0 },
                      hovered: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/50"
                  />

                  {/* Label slides up on hover */}
                  <motion.div
                    variants={{
                      idle: { opacity: 0, y: 20 },
                      hovered: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute bottom-0 left-0 right-0 p-4"
                  >
                    <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                      {image.label}
                    </span>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
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

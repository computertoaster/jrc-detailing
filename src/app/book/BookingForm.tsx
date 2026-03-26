'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { services, addons, areas } from '@/lib/data'
import type { Service, Addon } from '@/lib/data'
import AnimatedSection from '@/components/AnimatedSection'

const STEPS = ['Service', 'Vehicle', 'Date & Time', 'Confirm']

const TIME_SLOTS = [
  'Morning (7am-10am)',
  'Late Morning (10am-12pm)',
  'Afternoon (12pm-3pm)',
  'Late Afternoon (3pm-6pm)',
]

const REFERRAL_SOURCES = [
  'Instagram',
  'Google',
  'Word of mouth',
  'Dealership',
  'Other',
]

function getTomorrow(): string {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

interface FormData {
  serviceSlug: string
  selectedAddons: string[]
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  vehicleColour: string
  conditionNotes: string
  preferredDate: string
  preferredTime: string
  alternativeDate: string
  address: string
  suburb: string
  name: string
  phone: string
  email: string
  referralSource: string
  specialRequests: string
}

const initialFormData: FormData = {
  serviceSlug: '',
  selectedAddons: [],
  vehicleMake: '',
  vehicleModel: '',
  vehicleYear: '',
  vehicleColour: '',
  conditionNotes: '',
  preferredDate: '',
  preferredTime: '',
  alternativeDate: '',
  address: '',
  suburb: '',
  name: '',
  phone: '',
  email: '',
  referralSource: '',
  specialRequests: '',
}

/* ── Step Progress Bar ── */
function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {STEPS.map((label, i) => {
          const stepNum = i + 1
          const isCompleted = currentStep > stepNum
          const isActive = currentStep === stepNum

          return (
            <div key={label} className="flex flex-1 items-center">
              {/* Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-xs sm:text-sm font-heading font-bold transition-all duration-300 ${
                    isCompleted
                      ? 'bg-blue text-white'
                      : isActive
                        ? 'bg-blue text-white shadow-lg shadow-blue/30'
                        : 'bg-dark-3 text-white/40 border border-dark-5'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNum
                  )}
                </div>
                <span
                  className={`mt-2 text-[0.65rem] font-heading uppercase tracking-[1.5px] hidden sm:block ${
                    isActive || isCompleted ? 'text-white' : 'text-white/30'
                  }`}
                >
                  {label}
                </span>
              </div>

              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="mx-2 h-[2px] flex-1 sm:mx-3">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      currentStep > stepNum ? 'bg-blue' : 'bg-dark-5'
                    }`}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Slide animation variants ── */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
}

/* ── Main BookingForm ── */
export default function BookingForm() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [form, setForm] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const selectedService = useMemo(
    () => services.find((s) => s.slug === form.serviceSlug) ?? null,
    [form.serviceSlug]
  )

  const selectedAddonObjects = useMemo(
    () => addons.filter((a) => form.selectedAddons.includes(a.name)),
    [form.selectedAddons]
  )

  const totalEstimate = useMemo(() => {
    const servicePrice = selectedService?.price ?? 0
    const addonsPrice = selectedAddonObjects.reduce((sum, a) => sum + a.price, 0)
    return servicePrice + addonsPrice
  }, [selectedService, selectedAddonObjects])

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function toggleAddon(name: string) {
    setForm((prev) => ({
      ...prev,
      selectedAddons: prev.selectedAddons.includes(name)
        ? prev.selectedAddons.filter((a) => a !== name)
        : [...prev.selectedAddons, name],
    }))
  }

  function goNext() {
    setDirection(1)
    setStep((s) => Math.min(s + 1, 4))
  }

  function goBack() {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 1))
  }

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return form.serviceSlug !== ''
      case 2:
        return form.vehicleMake.trim() !== '' && form.vehicleModel.trim() !== ''
      case 3:
        return form.preferredDate !== '' && form.preferredTime !== '' && form.address.trim() !== ''
      case 4:
        return form.name.trim() !== '' && form.phone.trim() !== '' && form.email.trim() !== ''
      default:
        return false
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError('')
    setSubmitting(true)

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || 'Failed to submit booking')
      }

      setSubmitted(true)
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or call us on 0481 998 874.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="relative min-h-screen bg-dark pt-36 pb-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue/15"
          >
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-12 w-12 text-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-heading text-3xl font-bold uppercase tracking-wider text-white sm:text-4xl"
          >
            Booking Request Sent!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-4 text-lg text-white/60"
          >
            Jesse will be in touch within a few hours to confirm your detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Link
              href="/"
              className="mt-8 inline-block rounded-sm bg-blue px-8 py-3 font-heading text-[0.7rem] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-blue/80"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen bg-dark pt-36 pb-24">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl font-bold uppercase tracking-wider text-white sm:text-4xl lg:text-5xl">
              Book Your Detail
            </h1>
            <p className="mt-4 text-white/50 text-lg">
              Select your service, pick a date, and Jesse will confirm your booking.
            </p>
          </div>
        </AnimatedSection>

        <ProgressBar currentStep={step} />

        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait" custom={direction}>
            {step === 1 && (
              <motion.div
                key="step-1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <StepService
                  selectedSlug={form.serviceSlug}
                  selectedAddons={form.selectedAddons}
                  onSelectService={(slug) => update('serviceSlug', slug)}
                  onToggleAddon={toggleAddon}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <StepVehicle form={form} update={update} />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <StepDateTime form={form} update={update} />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step-4"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <StepConfirm
                  form={form}
                  update={update}
                  selectedService={selectedService}
                  selectedAddons={selectedAddonObjects}
                  totalEstimate={totalEstimate}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error message */}
          {submitError && (
            <div className="mt-4 rounded-sm border border-red/30 bg-red/10 px-4 py-3 text-center text-sm text-red">
              {submitError}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={goBack}
                disabled={submitting}
                className="w-full sm:w-auto rounded-sm border border-white/10 px-6 py-3 min-h-[48px] font-heading text-[0.7rem] font-semibold uppercase tracking-[2px] text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white disabled:opacity-30"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!canProceed()}
                className="w-full sm:w-auto rounded-sm bg-blue px-8 py-3 min-h-[48px] font-heading text-[0.7rem] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-blue/80 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canProceed() || submitting}
                className={`w-full sm:w-auto rounded-sm bg-red px-8 py-3 min-h-[48px] font-heading text-[0.7rem] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25 disabled:opacity-30 disabled:cursor-not-allowed ${submitting ? 'cursor-wait' : ''}`}
              >
                {submitting ? 'Submitting...' : 'Submit Booking'}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   Step 1: Select Service
   ═══════════════════════════════════════════ */
function StepService({
  selectedSlug,
  selectedAddons,
  onSelectService,
  onToggleAddon,
}: {
  selectedSlug: string
  selectedAddons: string[]
  onSelectService: (slug: string) => void
  onToggleAddon: (name: string) => void
}) {
  return (
    <div>
      <h2 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-6">
        Select Your Service
      </h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {services.map((service) => (
          <button
            key={service.slug}
            type="button"
            onClick={() => onSelectService(service.slug)}
            className={`group relative rounded-sm border p-5 text-left transition-all duration-300 ${
              selectedSlug === service.slug
                ? 'border-blue bg-blue/8 shadow-lg shadow-blue/10'
                : 'border-glass-border bg-dark-2 hover:border-white/15'
            }`}
          >
            {service.badge && (
              <span className="absolute -top-2.5 right-4 rounded-full bg-red px-3 py-0.5 text-[0.6rem] font-heading font-bold uppercase tracking-wider text-white">
                {service.badge}
              </span>
            )}

            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              {service.name}
            </h3>

            <p className="mt-1 text-lg font-bold text-blue">
              {service.price !== null ? `$${service.price}` : service.priceLabel}
            </p>

            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              {service.shortDesc}
            </p>

            {/* Selection indicator */}
            {selectedSlug === service.slug && (
              <div className="absolute top-4 right-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue">
                  <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Add-ons */}
      <div className="mt-8">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white/70 mb-4">
          Optional Add-ons
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {addons.map((addon) => (
            <label
              key={addon.name}
              className={`flex cursor-pointer items-center gap-3 rounded-sm border p-4 transition-all duration-300 ${
                selectedAddons.includes(addon.name)
                  ? 'border-blue bg-blue/8'
                  : 'border-glass-border bg-dark-2 hover:border-white/15'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedAddons.includes(addon.name)}
                onChange={() => onToggleAddon(addon.name)}
                className="sr-only"
              />
              <div
                className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border transition-all ${
                  selectedAddons.includes(addon.name)
                    ? 'border-blue bg-blue'
                    : 'border-white/20 bg-dark-3'
                }`}
              >
                {selectedAddons.includes(addon.name) && (
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium text-white">{addon.name}</span>
              </div>
              <span className="text-sm font-bold text-blue">${addon.price}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   Step 2: Vehicle Details
   ═══════════════════════════════════════════ */
function StepVehicle({
  form,
  update,
}: {
  form: FormData
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void
}) {
  return (
    <div>
      <h2 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-6">
        Vehicle Details
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            Make <span className="text-red">*</span>
          </label>
          <input
            type="text"
            value={form.vehicleMake}
            onChange={(e) => update('vehicleMake', e.target.value)}
            placeholder="e.g. BMW"
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white placeholder-white/25 focus:border-blue focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            Model <span className="text-red">*</span>
          </label>
          <input
            type="text"
            value={form.vehicleModel}
            onChange={(e) => update('vehicleModel', e.target.value)}
            placeholder="e.g. X5"
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white placeholder-white/25 focus:border-blue focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">Year</label>
          <input
            type="text"
            value={form.vehicleYear}
            onChange={(e) => update('vehicleYear', e.target.value)}
            placeholder="e.g. 2024"
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white placeholder-white/25 focus:border-blue focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">Colour</label>
          <input
            type="text"
            value={form.vehicleColour}
            onChange={(e) => update('vehicleColour', e.target.value)}
            placeholder="e.g. Black Sapphire"
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white placeholder-white/25 focus:border-blue focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-white/60">
          Condition Notes
        </label>
        <textarea
          value={form.conditionNotes}
          onChange={(e) => update('conditionNotes', e.target.value)}
          placeholder="Any specific areas of concern? Scratches, stains, pet hair, etc."
          rows={4}
          className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white placeholder-white/25 focus:border-blue focus:outline-none transition-colors resize-none"
        />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   Step 3: Date & Time
   ═══════════════════════════════════════════ */
function StepDateTime({
  form,
  update,
}: {
  form: FormData
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void
}) {
  const minDate = getTomorrow()

  return (
    <div>
      <h2 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-6">
        Date & Time
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            Preferred Date <span className="text-red">*</span>
          </label>
          <input
            type="date"
            value={form.preferredDate}
            onChange={(e) => update('preferredDate', e.target.value)}
            min={minDate}
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white focus:border-blue focus:outline-none transition-colors [color-scheme:dark]"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            Preferred Time <span className="text-red">*</span>
          </label>
          <select
            value={form.preferredTime}
            onChange={(e) => update('preferredTime', e.target.value)}
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white focus:border-blue focus:outline-none transition-colors appearance-none"
          >
            <option value="">Select a time slot</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            Alternative Date <span className="text-white/30">(optional)</span>
          </label>
          <input
            type="date"
            value={form.alternativeDate}
            onChange={(e) => update('alternativeDate', e.target.value)}
            min={minDate}
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white focus:border-blue focus:outline-none transition-colors [color-scheme:dark]"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            Suburb
          </label>
          <select
            value={form.suburb}
            onChange={(e) => update('suburb', e.target.value)}
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white focus:border-blue focus:outline-none transition-colors appearance-none"
          >
            <option value="">Select your suburb</option>
            {areas.map((area) => (
              <option key={area.slug} value={area.name}>
                {area.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-white/60">
          Location / Address <span className="text-red">*</span>
        </label>
        <textarea
          value={form.address}
          onChange={(e) => update('address', e.target.value)}
          placeholder="Where should Jesse come to you?"
          rows={3}
          className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white placeholder-white/25 focus:border-blue focus:outline-none transition-colors resize-none"
        />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   Step 4: Your Details & Confirm
   ═══════════════════════════════════════════ */
function StepConfirm({
  form,
  update,
  selectedService,
  selectedAddons,
  totalEstimate,
}: {
  form: FormData
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void
  selectedService: Service | null
  selectedAddons: Addon[]
  totalEstimate: number
}) {
  return (
    <div>
      <h2 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-6">
        Your Details
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            Name <span className="text-red">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white placeholder-white/25 focus:border-blue focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            Phone <span className="text-red">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="0400 000 000"
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white placeholder-white/25 focus:border-blue focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            Email <span className="text-red">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@email.com"
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white placeholder-white/25 focus:border-blue focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            How did you hear about us?
          </label>
          <select
            value={form.referralSource}
            onChange={(e) => update('referralSource', e.target.value)}
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white focus:border-blue focus:outline-none transition-colors appearance-none"
          >
            <option value="">Select one</option>
            {REFERRAL_SOURCES.map((src) => (
              <option key={src} value={src}>
                {src}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/60">
            Special Requests
          </label>
          <textarea
            value={form.specialRequests}
            onChange={(e) => update('specialRequests', e.target.value)}
            placeholder="Anything else Jesse should know?"
            rows={3}
            className="w-full rounded-sm bg-dark-3 border border-dark-5 px-4 py-3 min-h-[48px] text-base text-white placeholder-white/25 focus:border-blue focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      {/* Booking Summary */}
      <div className="mt-8 rounded-sm border border-glass-border bg-dark-2 p-6">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
          Booking Summary
        </h3>

        <div className="space-y-3 text-sm">
          {/* Service */}
          {selectedService && (
            <div className="flex items-center justify-between">
              <span className="text-white/60">{selectedService.name}</span>
              <span className="font-bold text-white">
                {selectedService.price !== null ? `$${selectedService.price}` : 'Custom Quote'}
              </span>
            </div>
          )}

          {/* Add-ons */}
          {selectedAddons.map((addon) => (
            <div key={addon.name} className="flex items-center justify-between">
              <span className="text-white/40">+ {addon.name}</span>
              <span className="text-white/70">${addon.price}</span>
            </div>
          ))}

          {/* Divider */}
          <div className="border-t border-white/6 pt-3" />

          {/* Vehicle */}
          {(form.vehicleMake || form.vehicleModel) && (
            <div className="flex items-center justify-between">
              <span className="text-white/40">Vehicle</span>
              <span className="text-white/70">
                {[form.vehicleYear, form.vehicleMake, form.vehicleModel].filter(Boolean).join(' ')}
                {form.vehicleColour ? ` (${form.vehicleColour})` : ''}
              </span>
            </div>
          )}

          {/* Date & Time */}
          {form.preferredDate && (
            <div className="flex items-center justify-between">
              <span className="text-white/40">Date</span>
              <span className="text-white/70">{form.preferredDate}</span>
            </div>
          )}
          {form.preferredTime && (
            <div className="flex items-center justify-between">
              <span className="text-white/40">Time</span>
              <span className="text-white/70">{form.preferredTime}</span>
            </div>
          )}

          {/* Location */}
          {form.address && (
            <div className="flex items-center justify-between">
              <span className="text-white/40">Location</span>
              <span className="text-white/70 text-right max-w-[60%]">
                {form.suburb ? `${form.suburb} — ` : ''}
                {form.address}
              </span>
            </div>
          )}

          {/* Divider + Total */}
          <div className="border-t border-white/6 pt-3">
            <div className="flex items-center justify-between">
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Estimated Total
              </span>
              <span className="text-xl font-bold text-blue">
                {selectedService?.price !== null ? `$${totalEstimate}` : 'Custom Quote'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-4 text-center text-xs text-white/30">
        Jesse will confirm your booking within a few hours. Payment is collected on the day.
      </p>
    </div>
  )
}

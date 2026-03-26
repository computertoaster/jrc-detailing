'use client'

import { useState, FormEvent } from 'react'
import { services } from '@/lib/data'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    vehicle: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitError(false)
    setSending(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Failed to send')
      }

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          vehicle: '',
          message: '',
        })
      }, 3000)
    } catch {
      setSubmitError(true)
      setTimeout(() => setSubmitError(false), 4000)
    } finally {
      setSending(false)
    }
  }

  const inputClasses =
    'w-full rounded-lg border border-white/8 bg-dark-3 px-4 py-3 min-h-[48px] text-sm sm:text-base text-white placeholder-white/20 outline-none transition-colors duration-300 focus:border-red/50 focus:bg-dark-4'

  const labelClasses =
    'mb-2 block font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-gray'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Status announcements for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {submitted && 'Your enquiry has been sent successfully.'}
        {submitError && 'There was an error sending your enquiry. Please try again.'}
      </div>

      {/* Name + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            aria-required="true"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="04XX XXX XXX"
            required
            aria-required="true"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className={labelClasses}>
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={inputClasses}
        />
      </div>

      {/* Service + Vehicle */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-service" className={labelClasses}>
            Service
          </label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClasses} appearance-none`}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
                {s.price ? ` — $${s.price}` : ` — ${s.priceLabel || 'Custom Quote'}`}
              </option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-vehicle" className={labelClasses}>
            Vehicle
          </label>
          <input
            type="text"
            id="contact-vehicle"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            placeholder="e.g. 2022 BMW X5"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your vehicle and what you need..."
          rows={4}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Error message */}
      {submitError && (
        <p className="text-center text-sm text-red">
          Something went wrong. Please try again or call us on 0481 998 874.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitted || sending}
        className={`w-full rounded-lg py-4 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white transition-all duration-300 ${
          submitted
            ? 'bg-green-600 shadow-lg shadow-green-600/25'
            : submitError
              ? 'bg-red/60'
              : 'bg-red hover:bg-red-hover hover:shadow-lg hover:shadow-red/25'
        } ${sending ? 'opacity-70 cursor-wait' : ''}`}
      >
        {submitted ? 'SENT!' : sending ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}

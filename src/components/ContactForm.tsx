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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
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
  }

  const inputClasses =
    'w-full rounded-lg border border-white/8 bg-dark-3 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300 focus:border-red/50 focus:bg-dark-4'

  const labelClasses =
    'mb-2 block font-heading text-[0.6rem] font-semibold uppercase tracking-[2px] text-gray'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="04XX XXX XXX"
            required
            className={inputClasses}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={inputClasses}
        />
      </div>

      {/* Service + Vehicle */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className={labelClasses}>
            Service
          </label>
          <select
            id="service"
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
          <label htmlFor="vehicle" className={labelClasses}>
            Vehicle
          </label>
          <input
            type="text"
            id="vehicle"
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
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your vehicle and what you need..."
          rows={4}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitted}
        className={`w-full rounded-lg py-4 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white transition-all duration-300 ${
          submitted
            ? 'bg-green-600 shadow-lg shadow-green-600/25'
            : 'bg-red hover:bg-red-hover hover:shadow-lg hover:shadow-red/25'
        }`}
      >
        {submitted ? 'SENT!' : 'Send Enquiry'}
      </button>
    </form>
  )
}

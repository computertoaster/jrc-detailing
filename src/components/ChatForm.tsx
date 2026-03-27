'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@/lib/data'
import { trackFormSubmission } from '@/lib/gtag'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  vehicle: string
  message: string
}

interface ChatMessage {
  id: number
  sender: 'bot' | 'user'
  text: string
  type?: 'text' | 'phone' | 'email' | 'service' | 'vehicle' | 'textarea' | 'summary'
}

const serviceOptions = [
  ...services.map((s) => ({
    label: s.name,
    price: s.price ? `$${s.price}` : s.priceLabel || 'Custom Quote',
    value: s.name,
  })),
]

export default function ChatForm() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    vehicle: '',
    message: '',
  })
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [sending, setSending] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const messageIdRef = useRef(0)

  const getNextId = () => {
    messageIdRef.current += 1
    return messageIdRef.current
  }

  const botQuestions: { text: string | ((data: FormData) => string); type: ChatMessage['type'] }[] = [
    { text: "Hey! I'm Jesse's assistant. Let's get you booked in. What's your name?", type: 'text' },
    { text: (data: FormData) => `Nice to meet you, ${data.name}! What's the best number to reach you?`, type: 'phone' },
    { text: 'And your email?', type: 'email' },
    { text: 'What service are you interested in?', type: 'service' },
    { text: 'What vehicle do you drive?', type: 'vehicle' },
    { text: 'Any specific concerns? Scratches, stains, pet hair? (Optional, you can skip this)', type: 'textarea' },
    { text: "Here's your summary. Ready to send?", type: 'summary' },
  ]

  // Show first bot message on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false)
      setMessages([
        {
          id: getNextId(),
          sender: 'bot',
          text: botQuestions[0].text as string,
          type: botQuestions[0].type,
        },
      ])
    }, 1200)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Auto-scroll within chat container only (not the whole page)
  useEffect(() => {
    const el = chatEndRef.current
    if (el?.parentElement) {
      el.parentElement.scrollTop = el.parentElement.scrollHeight
    }
  }, [messages, isTyping])

  // Auto-focus input when typing stops
  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isTyping, step])

  const addBotMessage = (stepIndex: number) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const q = botQuestions[stepIndex]
      const text = typeof q.text === 'function' ? q.text(formData) : q.text
      setMessages((prev) => [
        ...prev,
        { id: getNextId(), sender: 'bot', text, type: q.type },
      ])
    }, 800 + Math.random() * 600)
  }

  const advanceStep = (userText: string, field: keyof FormData, value: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: getNextId(), sender: 'user', text: userText },
    ])

    // Update form data
    const newData = { ...formData, [field]: value }
    setFormData(newData)
    setInputValue('')

    const nextStep = step + 1
    setStep(nextStep)

    // Show next bot message with updated form data
    if (nextStep < botQuestions.length) {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const q = botQuestions[nextStep]
        const text = typeof q.text === 'function' ? q.text(newData) : q.text
        setMessages((prev) => [
          ...prev,
          { id: getNextId(), sender: 'bot', text, type: q.type },
        ])
      }, 800 + Math.random() * 600)
    }
  }

  const handleTextSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() && step !== 5) return

    const fieldMap: Record<number, keyof FormData> = {
      0: 'name',
      1: 'phone',
      2: 'email',
      4: 'vehicle',
      5: 'message',
    }

    const field = fieldMap[step]
    if (field !== undefined) {
      advanceStep(inputValue.trim() || '(No additional notes)', field, inputValue.trim())
    }
  }

  const handleServiceSelect = (serviceName: string) => {
    const option = serviceOptions.find((o) => o.value === serviceName)
    const displayText = option ? `${option.label} (${option.price})` : serviceName
    advanceStep(displayText, 'service', serviceName)
  }

  const handleSkip = () => {
    advanceStep('(Skipped)', 'message', '')
  }

  const handleSubmit = async () => {
    setSending(true)
    setSubmitError(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to send')

      trackFormSubmission('chat_form', formData.service)
      setSubmitted(true)
      setMessages((prev) => [
        ...prev,
        {
          id: getNextId(),
          sender: 'bot',
          text: `Thanks ${formData.name}! Jesse will be in touch shortly. You can also call us on 0481 998 874 if you need a faster response.`,
        },
      ])
    } catch {
      setSubmitError(true)
    } finally {
      setSending(false)
    }
  }

  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  const currentBotType = step < botQuestions.length ? botQuestions[step].type : null

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* Chat Header */}
      <div className="flex items-center gap-3 rounded-t-2xl border border-glass-border bg-dark-3 px-5 py-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red text-sm font-bold text-white">
          J
        </div>
        <div>
          <div className="font-heading text-sm font-bold text-white">JRC Booking Assistant</div>
          <div className="flex items-center gap-1.5 text-xs text-gray">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            Online
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex flex-col gap-3 overflow-y-auto border-x border-glass-border bg-dark-2 p-4 sm:p-6" style={{ minHeight: '400px', maxHeight: '520px' }}>
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red text-[0.65rem] font-bold text-white">
                  J
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-blue text-white rounded-br-md'
                    : 'bg-dark-3 text-gray-light rounded-bl-md'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red text-[0.65rem] font-bold text-white">
                J
              </div>
              <div className="flex gap-1 rounded-2xl bg-dark-3 px-4 py-3 rounded-bl-md">
                <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray" style={{ animationDelay: '0ms' }} />
                <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray" style={{ animationDelay: '150ms' }} />
                <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summary card (step 6) */}
        {step === 6 && !isTyping && !submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="rounded-xl border border-glass-border bg-dark-3 p-5">
              <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
                Enquiry Summary
              </h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray">Name</span>
                  <span className="font-medium text-white">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Phone</span>
                  <span className="font-medium text-white">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Email</span>
                  <span className="font-medium text-white">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Service</span>
                  <span className="font-medium text-white">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Vehicle</span>
                  <span className="font-medium text-white">{formData.vehicle}</span>
                </div>
                {formData.message && (
                  <div className="flex justify-between">
                    <span className="text-gray">Notes</span>
                    <span className="max-w-[60%] text-right font-medium text-white">{formData.message}</span>
                  </div>
                )}
              </div>

              {submitError && (
                <p className="mt-4 text-center text-sm text-red">
                  Something went wrong. Please try again or call 0481 998 874.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={sending}
                className={`mt-5 w-full rounded-lg bg-red py-3.5 font-heading text-[0.7rem] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-red-hover hover:shadow-lg hover:shadow-red/25 ${
                  sending ? 'cursor-wait opacity-70' : ''
                }`}
              >
                {sending ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </div>
          </motion.div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="rounded-b-2xl border border-t-0 border-glass-border bg-dark-3 p-4">
        {submitted ? (
          <div className="flex items-center justify-center gap-2 py-2 text-sm text-green-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Enquiry sent! Jesse will be in touch.
          </div>
        ) : isTyping || step >= 6 ? (
          <div className="py-2 text-center text-xs text-gray">
            {isTyping ? 'JRC Bot is typing...' : 'Review your details above'}
          </div>
        ) : currentBotType === 'service' ? (
          /* Service selection pills */
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleServiceSelect(option.value)}
                className="rounded-full border border-glass-border bg-dark-4 px-4 py-2.5 text-sm text-gray-light transition-all duration-200 hover:border-blue/50 hover:bg-blue hover:text-white"
              >
                {option.label}
                <span className="ml-1.5 text-xs text-gray">{option.price}</span>
              </button>
            ))}
          </div>
        ) : currentBotType === 'textarea' ? (
          /* Textarea with skip option */
          <form onSubmit={handleTextSubmit} className="flex flex-col gap-2">
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your concerns here..."
              rows={2}
              className="w-full resize-none rounded-lg border border-glass-border bg-dark-4 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-blue/50"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleSkip}
                className="flex-1 rounded-lg border border-glass-border bg-dark-4 py-2.5 text-sm text-gray transition-colors hover:text-white"
              >
                Skip
              </button>
              <button
                type="submit"
                className="flex-1 rounded-lg bg-blue py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
              >
                Send
              </button>
            </div>
          </form>
        ) : (
          /* Standard text/phone/email input */
          <form onSubmit={handleTextSubmit} className="flex gap-2">
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type={currentBotType === 'phone' ? 'tel' : currentBotType === 'email' ? 'email' : 'text'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                step === 0
                  ? 'Type your name...'
                  : step === 1
                    ? '04XX XXX XXX'
                    : step === 2
                      ? 'your@email.com'
                      : step === 4
                        ? 'e.g. 2024 BMW X5'
                        : 'Type here...'
              }
              autoComplete={
                step === 0
                  ? 'name'
                  : step === 1
                    ? 'tel'
                    : step === 2
                      ? 'email'
                      : 'off'
              }
              className="flex-1 rounded-lg border border-glass-border bg-dark-4 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-blue/50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="rounded-lg bg-blue px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-hover disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

import { Resend } from 'resend'

// Lazy initialisation so the build succeeds without RESEND_API_KEY present.
// The key is only required at runtime when an email is actually sent.
let _resend: Resend | null = null

export function getResend(): Resend {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set')
    }
    _resend = new Resend(process.env.RESEND_API_KEY)
  }
  return _resend
}

export const FROM_EMAIL = 'JRC Detailing <noreply@jrcdetailing.com.au>'
export const JESSE_EMAIL = 'jesse@jrcdetailing.com.au'

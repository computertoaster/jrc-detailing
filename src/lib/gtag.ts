export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || ''

// Core gtag helper
export function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...(args as Parameters<typeof window.gtag>))
  }
}

// Track page views (handled automatically by gtag config, but available for SPA navigation)
export function trackPageView(url: string) {
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// Form submission (GA4 recommended event: generate_lead)
export function trackFormSubmission(formName: string, service?: string) {
  gtag('event', 'generate_lead', {
    form_name: formName,
    service_interested: service || 'not_specified',
    currency: 'AUD',
  })
}

// Phone click
export function trackPhoneClick(location: string) {
  gtag('event', 'phone_click', {
    link_text: '0481 998 874',
    click_location: location,
  })
}

// Email click
export function trackEmailClick(location: string) {
  gtag('event', 'email_click', {
    click_location: location,
  })
}

// CTA button clicks
export function trackCTAClick(ctaName: string, location: string) {
  gtag('event', 'cta_click', {
    cta_name: ctaName,
    click_location: location,
  })
}

// Service package viewed
export function trackServiceView(serviceName: string, price?: string) {
  gtag('event', 'view_item', {
    items: [{
      item_name: serviceName,
      price: price || undefined,
      item_category: 'detailing_service',
    }],
  })
}

// Instagram click
export function trackInstagramClick(location: string) {
  gtag('event', 'social_click', {
    platform: 'instagram',
    click_location: location,
  })
}

// Google review click
export function trackReviewClick() {
  gtag('event', 'review_click', {
    platform: 'google',
  })
}

// Scroll depth (enhanced measurement covers this, but available for custom use)
export function trackScrollDepth(percentage: number) {
  gtag('event', 'scroll_depth', {
    percent_scrolled: percentage,
  })
}

// Declare gtag on window for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

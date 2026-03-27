'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView, trackPhoneClick, trackEmailClick, trackInstagramClick, GA_MEASUREMENT_ID } from '@/lib/gtag'

export default function AnalyticsEvents() {
  const pathname = usePathname()

  // Track SPA page navigations
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      trackPageView(pathname)
    }
  }, [pathname])

  // Global click listener for tel:, mailto:, and social links
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href) return

      // Phone clicks
      if (href.startsWith('tel:')) {
        const section = target.closest('section, footer, nav, header')
        const location = section?.id || section?.tagName?.toLowerCase() || 'page'
        trackPhoneClick(location)
      }

      // Email clicks
      if (href.startsWith('mailto:')) {
        const section = target.closest('section, footer, nav, header')
        const location = section?.id || section?.tagName?.toLowerCase() || 'page'
        trackEmailClick(location)
      }

      // Instagram clicks
      if (href.includes('instagram.com')) {
        const section = target.closest('section, footer, nav, header')
        const location = section?.id || section?.tagName?.toLowerCase() || 'page'
        trackInstagramClick(location)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}

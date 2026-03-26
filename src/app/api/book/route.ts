import { NextResponse } from 'next/server'
import { getResend, FROM_EMAIL, JESSE_EMAIL } from '@/lib/email'
import { bookingNotification, bookingConfirmation } from '@/lib/email-templates'
import { services, addons } from '@/lib/data'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.serviceSlug) {
      return NextResponse.json(
        { error: 'Name, phone, email, and service are required' },
        { status: 400 }
      )
    }

    // Resolve service and addon details from slug/names
    const selectedService = services.find((s) => s.slug === data.serviceSlug)
    const selectedAddons = Array.isArray(data.selectedAddons)
      ? addons.filter((a) => data.selectedAddons.includes(a.name))
      : []

    const servicePrice = selectedService?.price ?? null
    const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0)
    const totalEstimate = servicePrice !== null ? servicePrice + addonsTotal : 0

    const bookingData = {
      ...data,
      serviceName: selectedService?.name || data.serviceSlug,
      servicePrice,
      selectedAddons: selectedAddons.map((a) => ({ name: a.name, price: a.price })),
      totalEstimate,
    }

    // Send notification to Jesse
    const resend = getResend()
    await resend.emails.send({
      from: FROM_EMAIL,
      to: JESSE_EMAIL,
      subject: `New Booking Request: ${selectedService?.name || data.serviceSlug} - ${data.name}`,
      html: bookingNotification(bookingData),
    })

    // Send confirmation to customer
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: 'Booking Request Received | JRC Detailing',
      html: bookingConfirmation(bookingData),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}

import { NextResponse } from 'next/server'
import { getResend, FROM_EMAIL, JESSE_EMAIL } from '@/lib/email'
import { contactNotification, contactConfirmation } from '@/lib/email-templates'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      )
    }

    // Send notification to Jesse
    const resend = getResend()
    await resend.emails.send({
      from: FROM_EMAIL,
      to: JESSE_EMAIL,
      subject: `New Enquiry from ${data.name}`,
      html: contactNotification(data),
    })

    // Send confirmation to customer (if email provided)
    if (data.email) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: data.email,
        subject: 'Thanks for your enquiry | JRC Detailing',
        html: contactConfirmation(data),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send enquiry. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}

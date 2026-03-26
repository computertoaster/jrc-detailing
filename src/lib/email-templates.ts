/* ──────────────────────────────────────────────
   JRC Detailing: Branded HTML Email Templates
   ────────────────────────────────────────────── */

interface ContactData {
  name: string
  phone: string
  email?: string
  service?: string
  vehicle?: string
  message?: string
}

interface BookingData {
  name: string
  phone: string
  email: string
  serviceSlug?: string
  serviceName?: string
  servicePrice?: number | null
  selectedAddons?: { name: string; price: number }[]
  vehicleMake?: string
  vehicleModel?: string
  vehicleYear?: string
  vehicleColour?: string
  conditionNotes?: string
  preferredDate?: string
  preferredTime?: string
  alternativeDate?: string
  address?: string
  suburb?: string
  referralSource?: string
  specialRequests?: string
  totalEstimate?: number
}

/* ── Shared layout pieces ── */

function emailWrapper(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JRC Detailing</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0a0a0a;padding:28px 32px;text-align:center;border-radius:8px 8px 0 0;">
              <h1 style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-size:22px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#ffffff;">
                JRC DETAILING
              </h1>
            </td>
          </tr>

          <!-- Red accent line -->
          <tr>
            <td style="background-color:#c41e3a;height:3px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:32px;">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0a0a0a;padding:24px 32px;text-align:center;border-radius:0 0 8px 8px;">
              <p style="margin:0 0 4px;font-size:13px;color:#999999;">
                JRC Detailing &nbsp;|&nbsp; Victoria Point, QLD
              </p>
              <p style="margin:0 0 4px;font-size:13px;color:#999999;">
                <a href="tel:0481998874" style="color:#999999;text-decoration:none;">0481 998 874</a>
                &nbsp;|&nbsp;
                <a href="mailto:jesse@jrcdetailing.com.au" style="color:#999999;text-decoration:none;">jesse@jrcdetailing.com.au</a>
              </p>
              <p style="margin:0;font-size:13px;color:#999999;">
                <a href="https://instagram.com/jrc.detailing_" style="color:#999999;text-decoration:none;">@jrc.detailing_</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function ctaButton(text: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px auto 0;">
  <tr>
    <td style="background-color:#c41e3a;border-radius:6px;">
      <a href="${href}" style="display:inline-block;padding:14px 32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#ffffff;text-decoration:none;">
        ${text}
      </a>
    </td>
  </tr>
</table>`
}

function secondaryButton(text: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:12px auto 0;">
  <tr>
    <td style="border:2px solid #2563eb;border-radius:6px;">
      <a href="${href}" style="display:inline-block;padding:12px 28px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#2563eb;text-decoration:none;">
        ${text}
      </a>
    </td>
  </tr>
</table>`
}

function detailRow(label: string, value: string): string {
  if (!value) return ''
  return `<tr>
    <td style="padding:8px 12px;font-size:13px;font-weight:600;color:#666666;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f0f0f0;">${label}</td>
    <td style="padding:8px 12px;font-size:14px;color:#1a1a1a;border-bottom:1px solid #f0f0f0;">${value}</td>
  </tr>`
}

function sectionHeading(text: string): string {
  return `<h2 style="margin:28px 0 12px;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#c41e3a;">${text}</h2>`
}

/* ══════════════════════════════════════════════════
   CONTACT: Notification to Jesse
   ══════════════════════════════════════════════════ */

export function contactNotification(data: ContactData): string {
  const rows = [
    detailRow('Name', data.name),
    detailRow('Phone', `<a href="tel:${data.phone}" style="color:#2563eb;text-decoration:none;">${data.phone}</a>`),
    data.email ? detailRow('Email', `<a href="mailto:${data.email}" style="color:#2563eb;text-decoration:none;">${data.email}</a>`) : '',
    detailRow('Service', data.service || 'Not specified'),
    detailRow('Vehicle', data.vehicle || 'Not provided'),
    detailRow('Message', data.message || 'No message'),
  ].join('')

  const body = `
    <h2 style="margin:0 0 4px;font-size:20px;font-weight:700;color:#1a1a1a;">New Enquiry</h2>
    <p style="margin:0 0 20px;font-size:14px;color:#666666;">Someone has submitted the contact form on the website.</p>

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #e5e5e5;border-radius:6px;overflow:hidden;">
      ${rows}
    </table>

    <div style="text-align:center;">
      ${data.email ? ctaButton(`Reply to ${data.name}`, `mailto:${data.email}`) : ctaButton(`Call ${data.name}`, `tel:${data.phone}`)}
    </div>
  `

  return emailWrapper(body)
}

/* ══════════════════════════════════════════════════
   CONTACT: Confirmation to Customer
   ══════════════════════════════════════════════════ */

export function contactConfirmation(data: ContactData): string {
  const serviceBlock = data.service
    ? `<p style="margin:16px 0 0;font-size:14px;color:#666666;">
        <strong style="color:#1a1a1a;">Service enquiry:</strong> ${data.service}
      </p>`
    : ''

  const body = `
    <h2 style="margin:0 0 4px;font-size:20px;font-weight:700;color:#1a1a1a;">Thanks for getting in touch!</h2>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#444444;">
      Hi ${data.name}, thanks for your enquiry. Jesse will review it and get back to you within a few hours.
    </p>

    ${serviceBlock}

    ${sectionHeading('Get in Touch')}

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #e5e5e5;border-radius:6px;overflow:hidden;">
      ${detailRow('Phone', '<a href="tel:0481998874" style="color:#2563eb;text-decoration:none;">0481 998 874</a>')}
      ${detailRow('Email', '<a href="mailto:jesse@jrcdetailing.com.au" style="color:#2563eb;text-decoration:none;">jesse@jrcdetailing.com.au</a>')}
      ${detailRow('Instagram', '<a href="https://instagram.com/jrc.detailing_" style="color:#2563eb;text-decoration:none;">@jrc.detailing_</a>')}
    </table>

    <p style="margin:24px 0 0;font-size:14px;color:#666666;line-height:1.5;">
      Cheers,<br />
      <strong style="color:#1a1a1a;">Jesse Curtain</strong><br />
      JRC Detailing
    </p>
  `

  return emailWrapper(body)
}

/* ══════════════════════════════════════════════════
   BOOKING: Notification to Jesse
   ══════════════════════════════════════════════════ */

export function bookingNotification(data: BookingData): string {
  const vehicle = [data.vehicleYear, data.vehicleMake, data.vehicleModel]
    .filter(Boolean)
    .join(' ')

  const addonsHtml = data.selectedAddons?.length
    ? data.selectedAddons.map((a) => `${a.name} (+$${a.price})`).join(', ')
    : 'None'

  const priceDisplay =
    data.servicePrice !== null && data.servicePrice !== undefined
      ? `$${data.servicePrice}`
      : 'Custom Quote'

  const totalDisplay =
    data.totalEstimate !== null && data.totalEstimate !== undefined && data.totalEstimate > 0
      ? `$${data.totalEstimate}`
      : 'Custom Quote'

  const rows = [
    detailRow('Service', `${data.serviceName || 'Not specified'} (${priceDisplay})`),
    detailRow('Add-ons', addonsHtml),
    detailRow('Vehicle', vehicle || 'Not provided'),
    data.vehicleColour ? detailRow('Colour', data.vehicleColour) : '',
    detailRow('Condition', data.conditionNotes || 'No notes'),
  ].join('')

  const scheduleRows = [
    detailRow('Preferred Date', data.preferredDate || 'Not specified'),
    detailRow('Time Slot', data.preferredTime || 'Not specified'),
    data.alternativeDate ? detailRow('Alt. Date', data.alternativeDate) : '',
    detailRow('Address', data.address || 'Not provided'),
    data.suburb ? detailRow('Suburb', data.suburb) : '',
  ].join('')

  const customerRows = [
    detailRow('Name', data.name),
    detailRow('Phone', `<a href="tel:${data.phone}" style="color:#2563eb;text-decoration:none;">${data.phone}</a>`),
    detailRow('Email', `<a href="mailto:${data.email}" style="color:#2563eb;text-decoration:none;">${data.email}</a>`),
    data.referralSource ? detailRow('Heard About Us', data.referralSource) : '',
    data.specialRequests ? detailRow('Special Requests', data.specialRequests) : '',
  ].join('')

  const body = `
    <h2 style="margin:0 0 4px;font-size:20px;font-weight:700;color:#1a1a1a;">New Booking Request</h2>
    <p style="margin:0 0 20px;font-size:14px;color:#666666;">A new booking has been submitted on the website.</p>

    ${sectionHeading('Service Details')}
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #e5e5e5;border-radius:6px;overflow:hidden;">
      ${rows}
    </table>

    ${sectionHeading('Schedule & Location')}
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #e5e5e5;border-radius:6px;overflow:hidden;">
      ${scheduleRows}
    </table>

    ${sectionHeading('Customer')}
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #e5e5e5;border-radius:6px;overflow:hidden;">
      ${customerRows}
    </table>

    <!-- Estimated Total -->
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px;border:2px solid #c41e3a;border-radius:6px;">
      <tr>
        <td style="padding:16px 20px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#666666;">Estimated Total</td>
              <td style="text-align:right;font-size:24px;font-weight:800;color:#c41e3a;">${totalDisplay}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <div style="text-align:center;">
      ${ctaButton(`Call ${data.name}`, `tel:${data.phone}`)}
      ${secondaryButton(`Email ${data.name}`, `mailto:${data.email}`)}
    </div>
  `

  return emailWrapper(body)
}

/* ══════════════════════════════════════════════════
   BOOKING: Confirmation to Customer
   ══════════════════════════════════════════════════ */

export function bookingConfirmation(data: BookingData): string {
  const vehicle = [data.vehicleYear, data.vehicleMake, data.vehicleModel]
    .filter(Boolean)
    .join(' ')

  const summaryRows = [
    detailRow('Service', data.serviceName || 'Not specified'),
    detailRow('Date', data.preferredDate || 'Not specified'),
    detailRow('Time', data.preferredTime || 'Not specified'),
    detailRow('Vehicle', vehicle || 'Not provided'),
    detailRow('Location', [data.address, data.suburb].filter(Boolean).join(', ') || 'Not provided'),
  ].join('')

  const body = `
    <h2 style="margin:0 0 4px;font-size:20px;font-weight:700;color:#1a1a1a;">Booking Request Received!</h2>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#444444;">
      Hi ${data.name}, your booking request has been received. Jesse will confirm your booking within a few hours.
    </p>

    ${sectionHeading('Your Booking Summary')}
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #e5e5e5;border-radius:6px;overflow:hidden;">
      ${summaryRows}
    </table>

    <p style="margin:20px 0 0;font-size:14px;color:#666666;line-height:1.5;">
      If you need to make changes, call or text <a href="tel:0481998874" style="color:#2563eb;text-decoration:none;font-weight:600;">0481 998 874</a>.
    </p>

    ${sectionHeading('What Happens Next?')}
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="padding:10px 0;vertical-align:top;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="width:36px;vertical-align:top;">
                <div style="width:28px;height:28px;background-color:#c41e3a;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#ffffff;">1</div>
              </td>
              <td style="padding-left:12px;">
                <p style="margin:0;font-size:14px;color:#1a1a1a;font-weight:600;">Jesse reviews your request</p>
                <p style="margin:4px 0 0;font-size:13px;color:#666666;">He will check his schedule and confirm availability.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;vertical-align:top;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="width:36px;vertical-align:top;">
                <div style="width:28px;height:28px;background-color:#c41e3a;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#ffffff;">2</div>
              </td>
              <td style="padding-left:12px;">
                <p style="margin:0;font-size:14px;color:#1a1a1a;font-weight:600;">Confirmation call or text</p>
                <p style="margin:4px 0 0;font-size:13px;color:#666666;">You will receive a call or text to lock in the details.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;vertical-align:top;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="width:36px;vertical-align:top;">
                <div style="width:28px;height:28px;background-color:#c41e3a;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#ffffff;">3</div>
              </td>
              <td style="padding-left:12px;">
                <p style="margin:0;font-size:14px;color:#1a1a1a;font-weight:600;">Jesse arrives at your location</p>
                <p style="margin:4px 0 0;font-size:13px;color:#666666;">On the scheduled day, Jesse comes to you with everything needed.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;vertical-align:top;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="width:36px;vertical-align:top;">
                <div style="width:28px;height:28px;background-color:#c41e3a;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#ffffff;">4</div>
              </td>
              <td style="padding-left:12px;">
                <p style="margin:0;font-size:14px;color:#1a1a1a;font-weight:600;">Payment on completion</p>
                <p style="margin:4px 0 0;font-size:13px;color:#666666;">You only pay once you are happy with the result.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="margin:24px 0 0;font-size:14px;color:#666666;line-height:1.5;">
      Cheers,<br />
      <strong style="color:#1a1a1a;">Jesse Curtain</strong><br />
      JRC Detailing
    </p>
  `

  return emailWrapper(body)
}

import { Resend } from 'resend'
import { type NextRequest, NextResponse } from 'next/server'
import type { ReactElement } from 'react'
import { Datetime } from '@/core/date/datetime'
import { checkBotId } from 'botid/server'

const resend = new Resend(process.env['RESEND_API_KEY']!)

interface ContactRequest {
  name: string
  email: string
  message: string
}

interface ContactResponse {
  success?: boolean
  message?: string
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
  try {
    const verification = await checkBotId()

    if (verification.isBot) {
      return NextResponse.json(
        {
          error:
            'Access denied. You look like a bot. If the error persists and you are not a bot, please contact me through my email cesar at cesalberca dot com',
        },
        { status: 403 },
      )
    }

    const body: ContactRequest = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const currentDate = Datetime.fromNow().toLocaleString('en-US', {
      timeZone: 'Europe/Madrid',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    // Send notification email to me
    try {
      const { ContactNotificationEmail } = await import('@/emails/transactional/contact-notification-email')

      await resend.emails.send({
        from: process.env['RESEND_EMAIL_FROM']!,
        to: 'cesar@cesalberca.com',
        subject: `New contact form submission from ${name}`,
        replyTo: email,
        react: ContactNotificationEmail({ name, email, message, date: currentDate }) as ReactElement,
      })
    } catch (error) {
      console.error('Contact notification email error:', error)
      return NextResponse.json({ error: 'Failed to send notification email' }, { status: 500 })
    }

    // Send auto-reply confirmation email to the person who contacted me
    try {
      const { ContactConfirmationEmail } = await import('@/emails/transactional/contact-confirmation-email')

      await resend.emails.send({
        from: process.env['RESEND_EMAIL_FROM']!,
        to: email,
        subject: "Thanks for reaching out - I'll get back to you soon!",
        replyTo: 'cesar@cesalberca.com',
        react: ContactConfirmationEmail({ name }) as ReactElement,
      })
    } catch (error) {
      console.error('Contact confirmation email error:', error)
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. I'll get back to you soon!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

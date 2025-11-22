import { Resend } from 'resend'
import { type NextRequest, NextResponse } from 'next/server'
import type { ReactElement } from 'react'
import { sign } from 'jsonwebtoken'
import NewsletterConfirmationEmail from '@/emails/transactional/newsletter-confirmation-email'
import { env } from '@/env'

const resend = new Resend(env.RESEND_API_KEY)

interface SubscribeRequest {
  email: string
  firstName: string
  lastName: string
}

interface SubscribeResponse {
  contactId?: string
  message?: string
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<SubscribeResponse>> {
  try {
    const body: SubscribeRequest = await request.json()
    const { email, firstName, lastName } = body

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Create confirmation token
    const jwtSecret = env.JWT_SECRET
    if (!jwtSecret) {
      return NextResponse.json({ error: 'JWT secret not configured' }, { status: 500 })
    }

    const confirmationToken = sign({ email, firstName, lastName }, jwtSecret, {
      expiresIn: '24h',
    })

    // Send confirmation email
    try {
      await resend.emails.send({
        from: env.RESEND_EMAIL_FROM,
        to: email,
        subject: 'Confirm the Frontend Architecture Newsletter Subscription',
        replyTo: 'cesar@cesalberca.com',
        react: NewsletterConfirmationEmail({
          firstName,
          confirmationToken,
          email,
        }) as ReactElement,
      })
    } catch (error) {
      console.error('Confirmation email import/send error:', error)
      return NextResponse.json({ error: 'Failed to send confirmation email' }, { status: 500 })
    }

    return NextResponse.json(
      {
        message: 'Confirmation email sent successfully',
      },
      { status: 200 },
    )
  } catch (_error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

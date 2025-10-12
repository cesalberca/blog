import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import type { ReactElement } from 'react'
import { verify } from 'jsonwebtoken'
import NewsletterWelcomeEmail from '@/content/emails/transactional/newsletter-welcome-email'

const resend = new Resend(process.env['RESEND_API_KEY']!)

interface ConfirmationTokenPayload {
  email: string
  firstName: string
  lastName: string
}

interface ConfirmRequest {
  token: string
  email: string
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ConfirmRequest = await request.json()
    const { token, email: emailParam } = body

    if (!token) {
      return NextResponse.json({ error: 'Missing confirmation token' }, { status: 400 })
    }

    if (!emailParam) {
      return NextResponse.json({ error: 'Missing email parameter' }, { status: 400 })
    }

    // Verify the token
    const jwtSecret = process.env['JWT_SECRET']
    if (!jwtSecret) {
      return NextResponse.json({ error: 'JWT secret not configured' }, { status: 500 })
    }

    let payload: ConfirmationTokenPayload
    try {
      payload = verify(token, jwtSecret) as ConfirmationTokenPayload
    } catch (error) {
      return NextResponse.json({ error: 'Invalid or expired confirmation token' }, { status: 400 })
    }

    const { email, firstName, lastName } = payload

    // Verify that the email in the token matches the email in the URL
    if (email !== emailParam) {
      return NextResponse.json({ error: 'Email mismatch between token and URL parameter' }, { status: 400 })
    }

    // Check if contact already exists using Resend API
    const audienceId = process.env['RESEND_AUDIENCE_ID']
    if (!audienceId) {
      return NextResponse.json({ error: 'Audience ID is not set' }, { status: 500 })
    }

    // Check if the contact already exists
    try {
      const existingContact = await resend.contacts.get({
        email,
        audienceId,
      })

      if (existingContact.data) {
        return NextResponse.json(
          {
            success: true,
            message: 'Subscription already confirmed',
            alreadyConfirmed: true,
          },
          { status: 200 },
        )
      }
    } catch (error) {
      console.error('Error checking if contact already exists:', error)
      // Contact doesn't exist, which is expected for new subscriptions
      // Continue with the confirmation process
    }

    const contactResult = await resend.contacts.create({
      email,
      firstName,
      lastName,
      audienceId,
    })

    console.log({ contactResult })

    // Handle duplicate contact gracefully - this can happen if the contact already exists
    if (contactResult.error) {
      // If it's a duplicate contact error, continue with the flow but don't send welcome email
      if (
        contactResult.error.message?.toLowerCase().includes('already exists') ||
        contactResult.error.message?.toLowerCase().includes('duplicate')
      ) {
        return NextResponse.json(
          {
            success: true,
            message: 'Subscription confirmed (already exists)',
            alreadySubscribed: true,
          },
          { status: 200 },
        )
      }
      // For other errors, return error
      return NextResponse.json({ error: contactResult.error.message }, { status: 500 })
    }

    // Send welcome email
    try {
      await resend.emails.send({
        from: process.env['RESEND_EMAIL_FROM']!,
        to: email,
        subject: 'Welcome to the newsletter!',
        replyTo: 'cesar@cesalberca.com',
        react: NewsletterWelcomeEmail({ firstName }) as ReactElement,
      })
    } catch (error) {
      console.error('Welcome email import/send error:', error)
      // Don't fail the confirmation if welcome email fails
    }

    // Return success response
    return NextResponse.json({ success: true, message: 'Subscription confirmed successfully' }, { status: 200 })
  } catch (error) {
    console.error('Newsletter confirmation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

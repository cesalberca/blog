import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { EmailTemplate } from '@/emails/email-template'

const resend = new Resend(process.env['RESEND_API_KEY']!)

interface SubscribeRequest {
  email: string
  firstName: string
  lastName: string
}

interface SubscribeResponse {
  success: boolean
  contactId?: string
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<SubscribeResponse>> {
  try {
    const body: SubscribeRequest = await request.json()
    const { email, firstName, lastName } = body

    // Validate required fields
    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 })
    }

    // Add contact to Resend audience
    const audienceId = process.env['RESEND_AUDIENCE_ID']

    if (audienceId === undefined) {
      return NextResponse.json({ success: false, error: 'Audience ID is not set' }, { status: 400 })
    }

    const contactResult = await resend.contacts.create({
      email,
      firstName,
      lastName,
      audienceId,
    })

    if (contactResult.error) {
      return NextResponse.json({ success: false, error: contactResult.error.message }, { status: 500 })
    }

    try {
      const welcomeEmailModule = await import('@/content/emails/transactional/welcome-email')
      const { WelcomeEmail } = welcomeEmailModule

      await resend.emails.send({
        from: process.env['EMAIL_FROM']!,
        to: email,
        subject: 'Welcome to the newsletter!',
        react: await EmailTemplate({
          title: 'Welcome to the newsletter!',
          description: 'Thanks for subscribing to our newsletter',
          children: await WelcomeEmail({ firstName: firstName ?? 'there' }),
        }),
      })
    } catch (error) {
      console.error('Welcome email import/send error:', error)
      // Don't fail the subscription if welcome email fails
    }

    return NextResponse.json({
      success: true,
      contactId: contactResult.data?.id,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

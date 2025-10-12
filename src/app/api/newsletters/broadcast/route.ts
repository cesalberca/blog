import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import type { ReactElement } from 'react'
import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'

const resend = new Resend(process.env['RESEND_API_KEY']!)

interface BroadcastRequest {
  newsletterSlug: string
  audienceId: string
  from: string
  token?: string
}

interface BroadcastResponse {
  broadcastId?: string
  message?: string
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<BroadcastResponse>> {
  try {
    const body: BroadcastRequest = await request.json()
    const { newsletterSlug, audienceId, from, token } = body

    // Validate required fields
    if (!newsletterSlug || !audienceId || !from) {
      return NextResponse.json({ error: 'Missing required fields: newsletterSlug, audienceId, from' }, { status: 400 })
    }

    // Validate authentication token
    const expectedToken = process.env['NEWSLETTER_BROADCAST_TOKEN']
    if (!expectedToken) {
      return NextResponse.json({ error: 'Newsletter broadcast not configured' }, { status: 500 })
    }

    if (!token || token !== expectedToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
      // Dynamically import the newsletter component
      const newsletterModule = await import(`@/content/emails/newsletters/${newsletterSlug}.tsx`)
      const NewsletterComponent = newsletterModule.default
      const metadata: NewsletterMetadata = newsletterModule.metadata

      if (!NewsletterComponent) {
        return NextResponse.json({ error: 'Newsletter component not found' }, { status: 404 })
      }

      // Create broadcast using Resend
      const broadcast = await resend.broadcasts.create({
        from,
        subject: metadata.subject,
        react: NewsletterComponent() as ReactElement,
        audienceId,
      })

      if (broadcast.error) {
        console.error('Resend broadcast creation error:', broadcast.error)
        return NextResponse.json({ error: broadcast.error.message }, { status: 500 })
      }

      return NextResponse.json(
        {
          broadcastId: broadcast.data?.id,
          message: 'Broadcast created successfully',
        },
        { status: 200 },
      )
    } catch (importError) {
      console.error('Newsletter import error:', importError)
      return NextResponse.json({ error: `Failed to load newsletter: ${newsletterSlug}` }, { status: 404 })
    }
  } catch (error) {
    console.error('Newsletter broadcast error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

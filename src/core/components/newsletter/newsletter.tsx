'use client'

import type { FC } from 'react'
import { NewsletterForm } from './newsletter-form'

export const Newsletter: FC = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <NewsletterForm />
    </div>
  )
}

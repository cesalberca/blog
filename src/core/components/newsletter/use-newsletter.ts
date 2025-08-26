'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

export interface UseNewsletterOptions {
  onSuccess?: () => void
}

export const useNewsletter = (options: UseNewsletterOptions = {}) => {
  const t = useTranslations()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      toast(t('newsletter.success'))

      setIsSubmitting(false)
      setName('')
      setEmail('')
      options.onSuccess?.()
    } catch (err) {
      toast.error(t('newsletter.success'), {
        description: err instanceof Error ? err.message : 'Something went wrong',
      })
      setIsSubmitting(false)
    }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    isSubmitting,
    handleSubmit,
  }
}

'use client'

import type { FC, FormEvent } from 'react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Send } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

export const Newsletter: FC = () => {
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
    } catch (err) {
      toast.error(t('newsletter.success'), {
        description: err instanceof Error ? err.message : 'Something went wrong',
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <form onSubmit={handleSubmit} className={cn('space-y-4')}>
        <div className="space-y-2">
          <Label htmlFor="name">
            {t('newsletter.nameLabel')}{' '}
            <span className="text-xs text-muted-foreground">({t('newsletter.optional')})</span>
          </Label>
          <Input
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t('newsletter.namePlaceholder')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            {t('newsletter.emailLabel')} <span className="text-xs text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('newsletter.emailPlaceholder')}
            required
          />
        </div>

        <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
          <Send size={16} />
          {isSubmitting ? t('newsletter.submitting') : t('newsletter.submit')}
        </Button>

        <div className="text-xs text-muted-foreground text-center pt-2">
          <span>{t('newsletter.privacyNotice')}</span>
        </div>
      </form>
    </div>
  )
}

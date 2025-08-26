'use client'

import type React from 'react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronDown, ChevronUp, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

export interface NewsletterCardProps {
  defaultExpanded?: boolean
}

export const NewsletterCard: React.FC<NewsletterCardProps> = ({ defaultExpanded = false }) => {
  const t = useTranslations()
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
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
      setIsExpanded(false)
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
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      {!defaultExpanded && (
        <div
          className="p-6 cursor-pointer flex items-center justify-between hover:bg-muted/50"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <h2 className="text-xl font-semibold">{t('newsletter.title')}</h2>
            <p className="text-sm text-muted-foreground mt-1">{t('newsletter.description')}</p>
          </div>
          <div className="text-primary">{isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
        </div>
      )}

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isExpanded || defaultExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {defaultExpanded && (
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold">{t('newsletter.joinNow')}</h3>
            </div>
          )}

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
    </div>
  )
}

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

export const Newsletter: React.FC = () => {
  const t = useTranslations()
  const [isExpanded, setIsExpanded] = useState(false)
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
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
        <div
          className="p-6 cursor-pointer flex items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <h2 className="text-xl font-semibold">{t('newsletter.title')}</h2>
            <p className="text-sm text-muted-foreground mt-1">{t('newsletter.description')}</p>
          </div>
          <div className="text-primary">{isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
        </div>

        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('newsletter.nameLabel')}</Label>
              <Input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={t('newsletter.namePlaceholder')}
                className="transition-all duration-300 ease-in-out"
                style={{
                  transform: isExpanded ? 'translateY(0)' : 'translateY(10px)',
                  opacity: isExpanded ? 1 : 0,
                  transitionDelay: '50ms',
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('newsletter.emailLabel')}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t('newsletter.emailPlaceholder')}
                required
                className="transition-all duration-300 ease-in-out"
                style={{
                  transform: isExpanded ? 'translateY(0)' : 'translateY(10px)',
                  opacity: isExpanded ? 1 : 0,
                  transitionDelay: '100ms',
                }}
              />
            </div>
            <Button
              type="submit"
              className="w-full transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
              disabled={isSubmitting}
              style={{
                transform: isExpanded ? 'translateY(0)' : 'translateY(10px)',
                opacity: isExpanded ? 1 : 0,
                transitionDelay: '150ms',
              }}
            >
              <Send size={16} />
              {isSubmitting ? t('newsletter.submitting') : t('newsletter.submit')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

'use client'

import { type FC, type FormEvent, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import { httpClient } from '@/lib/http-client'

export interface NewsletterFormProps {
  className?: string
  showTitle?: boolean
  onSuccess?: () => void
}

export const NewsletterForm: FC<NewsletterFormProps> = ({ className, showTitle = false, onSuccess }) => {
  const t = useTranslations()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await httpClient.post('/api/newsletter', {
        email,
        firstName,
        lastName,
      })

      toast(t('newsletter.success'))

      setIsSubmitting(false)
      setFirstName('')
      setLastName('')
      setEmail('')
      onSuccess?.()
    } catch (err) {
      toast.error(t('newsletter.success'), {
        description: err instanceof Error ? err.message : 'Something went wrong',
      })
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      {showTitle && (
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold">{t('newsletter.joinNow')}</h3>
        </div>
      )}

      <div className="space-y-2 flex gap-4">
        <div className="flex-1">
          <Label htmlFor="firstName">
            {t('newsletter.firstNameLabel')} <span className="text-xs text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={t('newsletter.firstNamePlaceholder')}
          />
        </div>

        <div className="flex-1">
          <Label htmlFor="lastName">
            {t('newsletter.lastNameLabel')} <span className="text-xs text-red-500">*</span>
          </Label>
          <Input
            id="lastName"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
            placeholder={t('newsletter.lastNamePlaceholder')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          {t('newsletter.emailLabel')} <span className="text-xs text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
  )
}

'use client'

import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useNewsletter, type UseNewsletterOptions } from './use-newsletter'

export interface NewsletterFormProps {
  className?: string
  showTitle?: boolean
  onSuccess?: UseNewsletterOptions['onSuccess']
}

export const NewsletterForm: FC<NewsletterFormProps> = ({ className, showTitle = false, onSuccess }) => {
  const t = useTranslations()
  const { name, setName, email, setEmail, isSubmitting, handleSubmit } = useNewsletter(onSuccess ? { onSuccess } : {})

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      {showTitle && (
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
  )
}

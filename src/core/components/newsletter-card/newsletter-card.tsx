'use client'

import { type FC, useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NewsletterForm } from '@/core/components/newsletter/newsletter-form'
import { Button } from '@/components/ui/button'

export interface NewsletterCardProps {
  defaultExpanded?: boolean
}

export const NewsletterCard: FC<NewsletterCardProps> = ({ defaultExpanded = false }) => {
  const t = useTranslations()
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const handleSuccess = () => {
    setIsExpanded(false)
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      {!defaultExpanded && (
        <Button
          type="button"
          variant="invisible"
          className="w-full px-8 py-12 flex items-center justify-between hover:bg-muted/50 text-left"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="newsletter-card-panel"
        >
          <div>
            <h2 className="text-xl m-0! font-semibold">{t('newsletter.title')}</h2>
            <p className="text-sm text-muted-foreground mt-1 mb-0!">{t('newsletter.description')}</p>
          </div>
          <div className="text-primary">{isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
        </Button>
      )}

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isExpanded || defaultExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0',
        )}
        id="newsletter-card-panel"
      >
        <NewsletterForm className="p-6" showTitle={defaultExpanded} onSuccess={handleSuccess} />
      </div>
    </div>
  )
}

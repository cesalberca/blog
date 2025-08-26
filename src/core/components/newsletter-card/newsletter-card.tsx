'use client'

import type React from 'react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NewsletterForm } from '@/core/components/newsletter/newsletter-form'

export interface NewsletterCardProps {
  defaultExpanded?: boolean
}

export const NewsletterCard: React.FC<NewsletterCardProps> = ({ defaultExpanded = false }) => {
  const t = useTranslations()
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const handleSuccess = () => {
    setIsExpanded(false)
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
        <NewsletterForm className="p-6" showTitle={defaultExpanded} onSuccess={handleSuccess} />
      </div>
    </div>
  )
}

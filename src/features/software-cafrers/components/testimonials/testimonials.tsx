import type { FC } from 'react'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export const Testimonials: FC = () => {
  const t = useTranslations('softwareCafrers.testimonials')

  return (
    <div className="space-y-8">
      <h2 className={cn('my-6')}>
        <AccentText>{t('title')}</AccentText>
      </h2>
      <div className="grid gap-6">
        {t.raw('reviews').map((review: { quote: string; source: string }) => (
          <blockquote
            key={review.source}
            className="border-l-4 border-accent pl-6 py-2 italic text-lg"
          >
            <p className="mb-3 text-muted-foreground">&#34;{review.quote}&#34;</p>
            <footer className="text-sm font-semibold not-italic">— {review.source}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  )
}

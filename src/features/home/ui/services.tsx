import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { LeetCard } from '@/core/components/leet-card/leet-card'
import { SearchIcon } from 'lucide-react'
import { LeetBackground } from '@/core/components/leet-card/leet-background'

export const Services: FC = () => {
  const t = useTranslations()

  return (
    <div>
      <p>After 10 years of experience in Frontend Development . I can provide </p>
      <div className="full-width-section grid grid-cols-3 gap-4">
        <LeetBackground>
          <p>Architecture</p>
        </LeetBackground>
      </div>
    </div>
  )
}

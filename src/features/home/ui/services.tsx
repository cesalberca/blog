import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { MaskCard } from '@/core/components/mask-card/mask-card'
import { SearchIcon } from 'lucide-react'

export const Services: FC = () => {
  const t = useTranslations()

  return (
    <div>
      <p>After 10 years of experience in Frontend Development . I can provide </p>
      <div className="full-width-section grid grid-cols-3 gap-4">
        <MaskCard icon={<SearchIcon />}>
          <p>Architecture</p>
        </MaskCard>
        <MaskCard icon={<SearchIcon />}>
          <p>Courses</p>
        </MaskCard>
        <MaskCard icon={<SearchIcon />}>
          <p>Consultancy</p>
        </MaskCard>
      </div>
    </div>
  )
}

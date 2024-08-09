import type { FC, ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { LeetCard } from '@/core/components/leet-card/leet-card'
import { GraduationCap, Signpost, Users } from 'lucide-react'

const Title: FC<{
  value: string
  icon: ReactNode
}> = ({ value, icon }) => (
  <div className="flex flex-col justify-center">
    {icon}
    <h3>{value}</h3>
  </div>
)

export const Services: FC = () => {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-4">
      <p className="mb-m wrapper">{t.rich('home.services.description')}</p>
      <div className="bleed-width-section grid md:grid-cols-3 gap-1">
        <LeetCard
          className="items-end"
          center={<Title value={t('home.services.consultancy')} icon={<Signpost size={72} />} />}
        >
          <p>{t('home.services.consultancyDescription')}</p>
        </LeetCard>
        <LeetCard
          className="items-end"
          center={<Title value={t('home.services.training')} icon={<GraduationCap size={72} />} />}
        >
          <p>{t('home.services.trainingDescription')}</p>
        </LeetCard>
        <LeetCard
          className="items-end"
          center={<Title value={t('home.services.development')} icon={<Users size={72} />} />}
        >
          <p>{t('home.services.developmentDescription')}</p>
        </LeetCard>
      </div>
    </div>
  )
}

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { Markdown } from '@/core/components/markdown/markdown'
import { Link } from '@/core/components/link/link'

export const Experience: FC = () => {
  const t = useTranslations()
  const experiences = [
    {
      title: t('experience.freelancer.title'),
      dates: t('experience.freelancer.dates'),
      description: t('experience.freelancer.description'),
    },
    {
      title: t('experience.autentia.title'),
      dates: t('experience.autentia.dates'),
      description: t('experience.autentia.description'),
    },
    {
      title: t('experience.writer.title'),
      dates: t('experience.writer.dates'),
      description: t('experience.writer.description'),
    },
    {
      title: t('experience.codemotionAmbassador.title'),
      dates: t('experience.codemotionAmbassador.dates'),
      description: t('experience.codemotionAmbassador.description'),
    },
    {
      title: t('experience.codemotion.title'),
      dates: t('experience.codemotion.dates'),
      description: t('experience.codemotion.description'),
    },
    {
      title: t('experience.cice.title'),
      dates: t('experience.cice.dates'),
      description: t('experience.cice.description'),
    },
    {
      title: t('experience.escuelaIt.title'),
      dates: t('experience.escuelaIt.dates'),
      description: t('experience.escuelaIt.description'),
    },
    {
      title: t('experience.pensemos.title'),
      dates: t('experience.pensemos.dates'),
      description: t('experience.pensemos.description'),
    },
    {
      title: t('experience.comercialTalk.title'),
      dates: t('experience.comercialTalk.dates'),
      description: t('experience.comercialTalk.description'),
    },
  ]

  return (
    <div className="p-6 sm:p-10">
      <div className="max-w-3xl mx-auto">
        <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 after:left-0 grid gap-10">
          {experiences.map((x, i) => (
            <div key={i} className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <h4 className="font-medium font-body">{x.title}</h4>
              <div className="text-muted-foreground">
                {x.dates}
                <br />
                <Markdown value={x.description} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link className="text-xs" href="https://cesalberca.com/cv">
            {t('experience.cv')}
          </Link>
        </div>
      </div>
    </div>
  )
}

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { Markdown } from '@/core/components/markdown/markdown'
import { Link } from '@/core/components/link/link'

export const Experience: FC = () => {
  const t = useTranslations()
  const experiences = [
    {
      title: t('home.experience.freelancer.title'),
      dates: t('home.experience.freelancer.dates'),
      description: t('home.experience.freelancer.description'),
    },
    {
      title: t('home.experience.autentia.title'),
      dates: t('home.experience.autentia.dates'),
      description: t('home.experience.autentia.description'),
    },
    {
      title: t('home.experience.writer.title'),
      dates: t('home.experience.writer.dates'),
      description: t('home.experience.writer.description'),
    },
    {
      title: t('home.experience.codemotionAmbassador.title'),
      dates: t('home.experience.codemotionAmbassador.dates'),
      description: t('home.experience.codemotionAmbassador.description'),
    },
    {
      title: t('home.experience.codemotion.title'),
      dates: t('home.experience.codemotion.dates'),
      description: t('home.experience.codemotion.description'),
    },
    {
      title: t('home.experience.cice.title'),
      dates: t('home.experience.cice.dates'),
      description: t('home.experience.cice.description'),
    },
    {
      title: t('home.experience.escuelaIt.title'),
      dates: t('home.experience.escuelaIt.dates'),
      description: t('home.experience.escuelaIt.description'),
    },
    {
      title: t('home.experience.pensemos.title'),
      dates: t('home.experience.pensemos.dates'),
      description: t('home.experience.pensemos.description'),
    },
    {
      title: t('home.experience.comercialTalk.title'),
      dates: t('home.experience.comercialTalk.dates'),
      description: t('home.experience.comercialTalk.description'),
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
        <div className="mt-m">
          <Link
            className="text-xs"
            to="https://drive.google.com/file/d/1t92bJEKGwYaepUlZT7JrJd7zIWly6XqK/view?usp=drive_link"
          >
            {t('home.experience.cv')}
          </Link>
        </div>
      </div>
    </div>
  )
}

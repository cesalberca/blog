import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import type { Talk as TalkDomain } from '../../domain/talk'
import { container } from '../../../../container'
import { TalkDetail } from '../../domain/talk-detail'
import { Talk } from '../talk/talk'
import { Page } from '../../../../core/components/page/page'

export const TalksPage: FC<{ talks: TalkDomain[] }> = ({ talks }) => {
  const t = useTranslations()

  return (
    <Page>
      <h1>{t('talks.title')}</h1>
      {talks.map(talk => (
        <div key={talk.id.value}>
          <Talk detail={container.resolve(TalkDetail).fromTalk(talk)} />
          <hr />
        </div>
      ))}
    </Page>
  )
}

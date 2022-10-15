import type { FC } from 'react'
import styles from './talks.module.scss'
import { useTranslations } from 'next-intl'
import type { Talk as TalkDomain } from '../../domain/talk'
import { bind } from '../../../../core/utils/bind'
import { container } from '../../../../container'
import { TalkDetail } from '../../domain/talk-detail'
import { Talk } from '../talk/talk'

const cx = bind(styles)

export const Talks: FC<{ talks: TalkDomain[] }> = ({ talks }) => {
  const t = useTranslations()

  return (
    <div>
      <h1>{t('talks_title')}</h1>
      {talks.map(talk => (
        <div key={talk.id.value}>
          <Talk detail={container.resolve(TalkDetail).fromTalk(talk)} />
          <hr />
        </div>
      ))}
    </div>
  )
}

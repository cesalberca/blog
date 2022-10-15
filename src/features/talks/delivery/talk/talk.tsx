import type { FC } from 'react'
import styles from './talk.module.scss'
import { useTranslations } from 'use-intl'
import { TalkSection } from '../talk-section/talk-section'
import type { TalkDetail } from '../../../blog/ui/pages/talks/talk-detail'
import { Markdown } from '../../../../core/components/markdown/markdown'
import { Link } from '../../../../core/components/link/link'
import { bind } from '../../../../core/utils/bind'

const cx = bind(styles)

export const Talk: FC<{ detail: ReturnType<TalkDetail['fromTalk']> }> = ({ detail }) => {
  const t = useTranslations()
  return (
    <div className={cx('talk')}>
      <TalkSection title={t('talks_talkTitle')} description={detail.title} />
      <TalkSection title={t('talks_talkAbstract')}>
        <Markdown value={detail.abstract} />
      </TalkSection>
      <TalkSection title={t('talks_talkTopics')} description={detail.topics} />
      <TalkSection title={t('talks_talkLength')} description={t('talks_talkLengthMinutes') + detail.length} />
      <TalkSection title={t('talks_talkDifficulty')} description={detail.difficulty.toString()} />
      {detail.events.length !== 0 && (
        <TalkSection title={t('talks_event')}>
          {detail.events.map((event, i) => (
            <div key={i}>
              <p>
                {event.name} – <small>{event.datetime}</small>
                <div className={cx('links')}>
                  {event.slides && <Link to={event.slides.value}>{t('talks_talkSlides')}</Link>}
                  {event.code && <Link to={event.code.value}>{t('talks_talkCode')}</Link>}
                  {event.demo && <Link to={event.demo.value}>{t('talks_talkDemo')}</Link>}
                  {event.video && <Link to={event.video.value}>{t('talks_talkVideo')}</Link>}
                </div>
              </p>
            </div>
          ))}
        </TalkSection>
      )}
    </div>
  )
}

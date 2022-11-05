import type { FC } from 'react'
import styles from './talk.module.scss'
import { useTranslations } from 'next-intl'
import type { TalkDetail } from '../../domain/talk-detail'
import { Markdown } from '../../../../core/components/markdown/markdown'
import { bind } from '../../../../core/utils/bind'
import Image from 'next/image'
import { Link } from '../../../../core/components/link/link'
import { Difficulty } from '../../domain/difficulty'
import { Tag } from '../../../../core/components/tag/tag'

const cx = bind(styles)

export const Talk: FC<{ detail: ReturnType<TalkDetail['fromTalk']> }> = ({ detail }) => {
  const difficulties: Record<Difficulty, string> = {
    [Difficulty.ADVANCED]: 'talks.talkDifficultyAdvanced',
    [Difficulty.INTERMEDIATE]: 'talks.talkDifficultyIntermediate',
    [Difficulty.EASY]: 'talks.talkDifficultyEasy',
  }

  const t = useTranslations()
  return (
    <div className={cx('talk')}>
      <div className={cx('talk__image-wrapper')}>
        <Image fill sizes={'800px'} className={cx('talk__image-wrapper__image')} src={detail.image} alt={'me'} />
        <footer className={cx('talk__image-wrapper__topics')}>
          {detail.topics.map(x => (
            <Tag key={x.value}>{x.value}</Tag>
          ))}
        </footer>
      </div>
      <div className={cx('talk__info')}>
        <h2 className={cx('talk__info__title')}>{detail.title}</h2>
        <div className={cx('talk__info__byline')}>
          <small>{t('talks.talkLengthMinutes', { length: detail.length })}</small>
          <small>{t(difficulties[detail.difficulty] as any)}</small>
        </div>

        <Markdown value={detail.abstract} />

        {detail.events.length !== 0 && (
          <div className={cx('talk__info__event')}>
            {detail.events.map((event, i) => (
              <div key={i}>
                <h4 className={cx('talk__info__event__name')}>{event.name}</h4>
                <small>{event.datetime}</small>
                <div className={cx('talk__info__event__links')}>
                  {event.slides && <Link to={event.slides.value}>{t('talks.talkSlides')}</Link>}
                  {event.code && <Link to={event.code.value}>{t('talks.talkCode')}</Link>}
                  {event.demo && <Link to={event.demo.value}>{t('talks.talkDemo')}</Link>}
                  {event.video && <Link to={event.video.value}>{t('talks.talkVideo')}</Link>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

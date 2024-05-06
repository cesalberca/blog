import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import type { TalkDetail } from '../../domain/talk-detail'
import { Markdown } from '../../../../core/components/markdown/markdown'
import Image from 'next/image'
import { Link } from '../../../../core/components/link/link'
import { Difficulty } from '../../domain/difficulty'
import { Tag } from '../../../../core/components/tag/tag'

export const Talk: FC<{ detail: ReturnType<TalkDetail['fromTalk']> }> = ({ detail }) => {
  const difficulties: Record<Difficulty, string> = {
    [Difficulty.ADVANCED]: 'talks.talkDifficultyAdvanced',
    [Difficulty.INTERMEDIATE]: 'talks.talkDifficultyIntermediate',
    [Difficulty.EASY]: 'talks.talkDifficultyEasy',
  }

  const t = useTranslations()
  return (
    <div>
      <div>
        <Image fill sizes={'800px'} src={detail.image} alt={'me'} />
        <footer>
          {detail.topics.map(x => (
            <Tag key={x.value}>{x.value}</Tag>
          ))}
        </footer>
      </div>
      <div>
        <h2>{detail.title}</h2>
        <div>
          <small>{t('talks.talkLengthMinutes', { length: detail.length })}</small>
          <small>{t(difficulties[detail.difficulty] as any)}</small>
        </div>

        <Markdown value={detail.abstract} />

        {detail.events.length !== 0 && (
          <div>
            {detail.events.map((event, i) => (
              <div key={i}>
                <h4>{event.name}</h4>
                <small>{event.datetime}</small>
                <div>
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

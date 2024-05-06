import type { FC } from 'react'
import { Links } from '../links/links'
import { Direction } from '../../types/direction'
import { Datetime } from '../../datetime'
import { useTranslations } from 'next-intl'

export const Footer: FC = () => {
  const t = useTranslations()

  const currentYear = Datetime.fromNow().year

  return (
    <footer>
      <div>
        <Links direction={Direction.VERTICAL} />
        <section>
          <small>{t('footer.madeWith', { currentYear })}</small>
        </section>
      </div>
    </footer>
  )
}

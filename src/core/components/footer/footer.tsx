import type { FC } from 'react'
import { Links } from '../links/links'
import { Direction } from '../../types/direction'
import { Datetime } from '../../datetime'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

export const Footer: FC = () => {
  const t = useTranslations()
  const { locale, locales, route, push } = useRouter()

  const currentYear = Datetime.fromNow().year

  return (
    <footer>
      <div>
        <Links direction={Direction.VERTICAL} />
        <select value={locale} onChange={event => push(route, undefined, { locale: event.target.value })}>
          {locales?.map(x => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
        <section>
          <small>{t('footer.madeWith', { currentYear })}</small>
        </section>
      </div>
    </footer>
  )
}

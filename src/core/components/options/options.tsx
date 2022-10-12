import { FC } from 'react'
import styles from './options.module.scss'
import { bind } from '../../utils/bind'
import { Theme } from '../../../features/blog/application/state/theme'
import { Locale } from '../../../features/blog/domain/language/locale'

const cx = bind(styles)

export const Options: FC = () => {
  const themes = [
    { text: 'light', value: Theme.LIGHT },
    { text: 'dark', value: Theme.DARK },
  ]

  const locales = [
    { text: 'en', value: Locale.EN },
    { text: 'es', value: Locale.ES },
  ]
  return (
    <div className={cx('options')}>
      <select>
        {themes.map(x => (
          <option key={x.value} value={x.value}>
            {x.text}
          </option>
        ))}
      </select>
      <select>
        {locales.map(x => (
          <option key={x.value} value={x.value}>
            {x.text}
          </option>
        ))}
      </select>
    </div>
  )
}

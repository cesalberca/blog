import type { FC } from 'react'
import { useContext } from 'react'
import styles from './options.module.scss'
import { bind } from '../../utils/bind'
import { Theme } from '../../../features/theme/domain/theme'
import { ThemeContext } from '../../../features/theme/delivery/theme-context'

const cx = bind(styles)

export const Options: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const themes = [
    { text: 'light', value: Theme.LIGHT },
    { text: 'dark', value: Theme.DARK },
  ]

  const locales = [
    { text: 'en', value: 'en' },
    { text: 'es', value: 'es' },
  ]

  return (
    <div className={cx('options')}>
      <select value={theme} onChange={event => setTheme(event.target.value as Theme)}>
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

import type { FC } from 'react'
import { useContext } from 'react'
import styles from './options.module.scss'
import { bind } from '../../utils/bind'
import { Theme } from '../../../features/theme/domain/theme'
import { ThemeContext } from '../../../features/theme/delivery/theme-context'
import DarkMode from '../../../../public/assets/icons/dark_mode.svg'
import LightMode from '../../../../public/assets/icons/light_mode.svg'
import { useTranslations } from 'next-intl'
import { ButtonIcon } from '../button-icon/button-icon'

const cx = bind(styles)

export const Options: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const t = useTranslations()

  return (
    <div className={cx('options')}>
      <ButtonIcon
        onClick={() => {
          setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        }}
        icon={theme === Theme.LIGHT ? LightMode : DarkMode}
        alt={t('common.theme')}
      ></ButtonIcon>
    </div>
  )
}

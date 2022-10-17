import type { FC, PropsWithChildren } from 'react'
import styles from './theme-provider.module.scss'
import { bind } from '../../../core/utils/bind'
import type { Theme } from '../domain/theme'
import { ThemeContext } from './theme-context'

const cx = bind(styles)

export const ThemeProvider: FC<PropsWithChildren<{ theme: Theme; setTheme: (theme: Theme) => void }>> = ({
  children,
  theme,
  setTheme,
}) => {
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div className={cx({ [theme]: true }, 'wrapper')}>{children}</div>
    </ThemeContext.Provider>
  )
}

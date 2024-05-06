import type { FC, PropsWithChildren } from 'react'
import type { Theme } from '../domain/theme'
import { ThemeContext } from './theme-context'

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
      <div>{children}</div>
    </ThemeContext.Provider>
  )
}

import { createContext } from 'react'
import { Theme } from '../domain/theme'

export const ThemeContext = createContext<{ theme: Theme; setTheme: (theme: Theme) => void }>({
  theme: Theme.LIGHT,
  setTheme: () => {},
})

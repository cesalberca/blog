import { Theme } from './Theme'

export class ThemeService {
  public toString(theme: Theme): string {
    switch (theme) {
      case Theme.DEFAULT:
      case Theme.LIGHT:
        return 'ligth'
      case Theme.DARK:
        return 'dark'
      default:
        throw new Error('Theme could not be found')
    }
  }

  public toTheme(string: string): Theme {
    switch (string) {
      case 'light':
        return Theme.LIGHT
      case 'dark':
        return Theme.DARK
      default:
        throw new Error('String could not be mapped to a theme')
    }
  }
}

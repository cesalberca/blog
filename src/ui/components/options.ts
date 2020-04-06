import { Theme } from '../theme/theme'
import { Translation } from './translation'
import { Locale } from '../../domain/language/locale'
import { Inject } from '../../domain/types/inject'
import { TYPES } from '../../types'
import { StateManager } from '../../application/state/state-manager'
import { css, customElement, html, LitElement } from '/web_modules/lit-element'

@customElement('app-options')
export class Options extends LitElement {
  @Inject(TYPES.TRANSLATION)
  translation!: Translation

  @Inject(TYPES.STATE_MANAGER)
  stateManager!: StateManager

  theme = Theme.DEFAULT
  themes = [
    { text: this.light, value: Theme.LIGHT },
    { text: this.dark, value: Theme.DARK }
  ]

  locale = Locale.DEFAULT
  locales = [
    { text: this.en, value: Locale.EN },
    { text: this.es, value: Locale.ES }
  ]

  get en() {
    return this.translation('_en')
  }

  get es() {
    return this.translation('_es')
  }

  get light() {
    return this.translation('_light')
  }

  get dark() {
    return this.translation('_dark')
  }

  changeLocale(locale: Locale) {
    this.stateManager.state.locale = locale
  }

  changeTheme(theme: Theme) {
    this.stateManager.state.theme = theme
  }

  static get styles() {
    return css`
      .options {
        display: flex;
        flex-direction: row;
      }

      select {
        margin-right: var(--small-size);
        background: var(--blue-dark-color-1);
        color: var(--white-color);
        -webkit-appearance: none;
        border: none;
        font-weight: 600;
        text-transform: uppercase;
        padding: var(--small-size);
        border-radius: 0;
      }
    `
  }

  render() {
    return html` <div class="options">
      <label>
        <select @change="${this.changeLocale(this.locale)}">
          ${this.locales.map(locale => `<option value="${locale.value}">${locale.text}</option>`)}
        </select>
      </label>
      <label>
        <select @change="${this.changeTheme(this.theme)}">
          ${this.themes.map(theme => `<option value="${theme.value}">${theme.text}</option>`)}
        </select>
      </label>
    </div>`
  }
}

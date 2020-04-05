import { Theme } from '../theme/theme'
import { Translate } from './translate'
import { Locale } from '../../domain/language/locale'
import { Inject } from '../../domain/types/inject'
import { TYPES } from '../../types'
import { StateManager } from '../../application/state/state-manager'
import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-options')
export class Options extends LitElement {
  @Inject(TYPES.TRANSLATE)
  translate!: Translate

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
    return this.translate('_en')
  }

  get es() {
    return this.translate('_es')
  }

  get light() {
    return this.translate('_light')
  }

  get dark() {
    return this.translate('_dark')
  }

  changeLocale(locale: Locale) {
    this.stateManager.state.locale = locale
  }

  changeTheme(theme: Theme) {
    this.stateManager.state.theme = theme
  }

  static get styles() {
    return css`.options {
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
    }`
  }

  render() {
    return html`
    <div class="options">
    <label>
      <select v-model="locale" @change="changeLocale(locale)">
        <option v-for="locale in locales" :key="locale.value" :value="locale.value">{{
          locale.text
        }}</option>
      </select>
    </label>
    <label>
      <select v-model="theme" @change="changeTheme(theme)">
        <option v-for="theme in themes" :key="theme.value" :value="theme.value">{{
          theme.text
        }}</option>
      </select>
    </label>
  </div>`
  }
}

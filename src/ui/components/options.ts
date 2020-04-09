import { Theme } from '../theme/theme.js'
import { Translation } from './translation.js'
import { Locale } from '../../domain/language/locale.js'
import { Inject } from '../../domain/types/inject.js'
import { TYPES } from '../../types.js'
import { State } from '../../application/state/state.js'
import { css, customElement, html, LitElement, property } from '/web_modules/lit-element.js'
import { subscribe } from '../subscribe.js'

@customElement('app-options')
export class Options extends LitElement {
  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  @Inject(TYPES.STATE)
  readonly stateManager!: State

  @property({ type: Number })
  theme = Theme.DEFAULT

  @property({ type: Number })
  locale = Locale.DEFAULT

  themes = [
    { text: this.light, value: Theme.LIGHT },
    { text: this.dark, value: Theme.DARK }
  ]

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
    this.dispatchEvent(
      new CustomEvent('on-locale-change', { detail: locale, bubbles: true, composed: true })
    )
  }

  changeTheme(theme: Theme) {
    this.dispatchEvent(
      new CustomEvent('on-theme-change', { detail: theme, bubbles: true, composed: true })
    )
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
    return html`<div class="options">
      <label>
        <select @change="${() => this.changeLocale(this.locale)}">
          ${this.locales.map(
            locale => html`<option value="${locale.value}">${subscribe(locale.text)}</option>`
          )}
        </select>
      </label>
      <label>
        <select @change="${() => this.changeTheme(this.theme)}">
          ${this.themes.map(theme => html`<option value="${theme.value}">${subscribe(theme.text)}</option>`)}
        </select>
      </label>
    </div>`
  }
}

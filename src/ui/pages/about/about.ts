import { Translation } from '../../components/translation.js'
import { Markdown } from '../../../domain/markdown.js'
import { Inject } from '../../../domain/types/inject.js'
import { TYPES } from '../../../types.js'
import { customElement, LitElement, html } from '/web_modules/lit-element.js'

@customElement('app-about')
export class About extends LitElement {
  @Inject(TYPES.TRANSLATION)
  translation!: Translation

  get title() {
    return this.translation('about_title')
  }

  get description() {
    return Markdown.fromValue(this.translation('about_description'))
  }

  render() {
    return html`<app-page>
      <h1>{{ title }}</h1>
      <markdown-component :body="description"></markdown-component>
    </app-page>`
  }
}

import { Translation } from '../../components/translation'
import { Markdown } from '../../../domain/markdown'
import { Inject } from '../../../domain/types/inject'
import { TYPES } from '../../../types'
import { customElement, LitElement, html } from '/web_modules/lit-element'

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

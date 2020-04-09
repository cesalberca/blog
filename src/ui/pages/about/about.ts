import { Translation } from '../../components/translation.js'
import { Inject } from '../../../domain/types/inject.js'
import { TYPES } from '../../../types.js'
import { customElement, html, LitElement } from '/web_modules/lit-element.js'

@customElement('app-about')
export class About extends LitElement {
  @Inject(TYPES.TRANSLATION)
  translation!: Translation

  get title() {
    return this.translation('about_title')
  }

  get description() {
    return this.translation('about_description')
  }

  render() {
    return html`<app-page>
      <h1>${this.title}</h1>
      <app-markdown .markdown="${this.description}"></app-markdown>
    </app-page>`
  }
}

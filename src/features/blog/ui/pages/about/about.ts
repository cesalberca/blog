import { Translation } from '../../components/translation'
import { Inject } from '../../../domain/types/inject'
import { TYPES } from '../../../types'
import { customElement, html, LitElement } from 'lit-element'
import { subscribe } from '../../subscribe'
import { general } from '../../general'

@customElement('app-about')
export class About extends LitElement {
  @Inject(TYPES.TRANSLATION)
  translation!: Translation

  static get styles() {
    return [general]
  }

  get aboutTitle() {
    return this.translation('about_title')
  }

  get description() {
    return this.translation('about_description')
  }

  render() {
    return html`<app-page>
      <h1>${subscribe(this.aboutTitle)}</h1>
      <app-markdown .markdown="${subscribe(this.description)}"></app-markdown>
    </app-page>`
  }
}

import { Translate } from '../../components/translate'
import { Markdown } from '../../../domain/markdown'
import { Inject } from '../../../domain/types/inject'
import { TYPES } from '../../../types'
import { customElement, LitElement, html } from 'lit-element'

@customElement('app-about')
export class About extends LitElement {
  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  get title() {
    return this.translate('about_title')
  }

  get description() {
    return Markdown.fromValue(this.translate('about_description'))
  }

  render() {
    return html`<app-page>
      <h1>{{ title }}</h1>
      <markdown-component :body="description"></markdown-component>
    </app-page>`
  }
}

import { Translate } from '../../components/translate'
import { Markdown } from '../../../domain/markdown'
import { Inject } from '../../../domain/types/inject'
import { TYPES } from '../../../types'
import { customElement, LitElement } from 'lit-element'

@customElement('x-about')
export class XAbout extends LitElement {
  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  get title() {
    return this.translate('about_title')
  }

  get description() {
    return Markdown.fromValue(this.translate('about_description'))
  }

  render() {
    return html`<x-page>
      <h1>{{ title }}</h1>
      <markdown-component :body="description"></markdown-component>
    </x-page>`
  }
}

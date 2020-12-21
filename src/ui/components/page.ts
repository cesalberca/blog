import { css, customElement, html, LitElement } from 'lit-element'
import { general } from '../general.js'

@customElement('app-page')
export class Page extends LitElement {
  static get styles() {
    return [general, css`
      .page {
        padding: var(--large-size) var(--medium-size) var(--medium-size);
        min-height: 100vh;
      }

      .wrapper {
        margin: 0 auto;
        max-width: var(--body-width);
      }
    `]
  }

  render() {
    return html`<div>
      <div class="page">
        <div class="wrapper">
          <slot />
        </div>
      </div>
      <app-footer></app-footer>
    </div>`
  }
}

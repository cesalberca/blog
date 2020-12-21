import { css, customElement, LitElement, property, html } from 'lit-element'
import { general } from '../../general.js'

@customElement('app-talk-section')
export class TalkSection extends LitElement {
  @property()
  readonly title!: string

  @property()
  readonly description!: string

  static get styles() {
    return [
      general,
      css`
        .talk > section {
          display: flex;
          flex-direction: column;
          align-items: baseline;
        }

        .title {
          margin-top: var(--small-size);
          margin-bottom: 0;
        }
      `
    ]
  }

  render() {
    return html`<section>
      <h3 class="title">
        <strong>${this.title}</strong>
      </h3>
      <slot>
        <p>${this.description}</p>
      </slot>
    </section>`
  }
}

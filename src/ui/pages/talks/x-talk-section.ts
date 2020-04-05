import { css, customElement, LitElement, property } from 'lit-element'

@customElement('x-talk-section')
export class XTalkSection extends LitElement {
  @property()
  title!: string

  @property()
  description!: string

  static get styles() {
    return css`
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
  }

  render() {
    return html` <section>
      <h3 class="title">
        <strong>{{ title }}</strong>
      </h3>
      <slot>
        <p>{{ description }}</p>
      </slot>
    </section>`
  }
}

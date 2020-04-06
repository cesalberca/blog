import { css, customElement, LitElement, property, html } from '/web_modules/lit-element.js'

@customElement('app-talk-section')
export class TalkSection extends LitElement {
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
        <strong>${this.title}</strong>
      </h3>
      <slot>
        <p>${this.description}</p>
      </slot>
    </section>`
  }
}

import { css, customElement, LitElement, property, html } from 'lit-element'

@customElement('x-hero')
export default class XHero extends LitElement {
  @property({ type: String, required: true })
  image!: string

  get style() {
    return { 'background-image': `url(${this.image})` }
  }

  static get styles() {
    return css`
      .image {
        --title-color: var(--black-color);
        min-height: 45vh;
        padding-top: var(--medium-size);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: inset 0 8px 20px 0 hsla(0, 0%, 0%, 0.5);
      }

      .wrapper {
        mix-blend-mode: difference;
      }
    `
  }

  render() {
    return html` <div class="image" :style="style">
      <div class="wrapper">
        <slot></slot>
      </div>
    </div>`
  }
}

import { css, customElement, LitElement, property, html } from '/web_modules/lit-element'

@customElement('app-hero')
export class Hero extends LitElement {
  @property({ type: String })
  image!: string

  get customStyle() {
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
    return html` <div class="image" style="${this.customStyle}">
      <div class="wrapper">
        <slot></slot>
      </div>
    </div>`
  }
}

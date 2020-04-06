import { customElement, LitElement, property, html, css } from '/web_modules/lit-element'

@customElement('app-link')
export class Link extends LitElement {
  @property({ type: String })
  to?: string

  @property({ type: Boolean })
  external: boolean = false

  get target() {
    return this.external ? '_blank' : '_self'
  }

  static get styles() {
    return css`
      a {
        color: var(--link-color);
        text-decoration: none;
        transition: ease color 0.5s;
        transform-style: preserve-3d;
        position: relative;
      }

      a:after {
        --link-offset: 3px;
        content: '';
        transform: translateZ(-1px);
        width: calc(100% + var(--link-offset) * 2);
        height: 1px;
        position: absolute;
        background-color: var(--link-color);
        bottom: calc(var(--link-offset) * -1);
        transition: ease height 0.25s;
        left: calc(var(--link-offset) * -1);
        right: calc(100% + var(--link-offset));
        z-index: -1;
        display: inline-block;
      }

      a:hover:after {
        height: calc(100% + 2px);
      }

      a:hover {
        color: var(--link-hover-color);
      }
    `
  }

  render() {
    return html` <a href="${this.to}" target="${this.target}"><slot></slot></a>`
  }
}

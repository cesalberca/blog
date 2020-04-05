import { css, customElement, LitElement, html } from 'lit-element'

@customElement('app-tag')
export class Tag extends LitElement {
  static get styles() {
    return css`
      .tag {
        color: var(--white-color);
        background-color: var(--dark-blue);
        padding: var(--base);
        border-radius: 5px;
        line-height: 1;
      }
    `
  }

  render() {
    return html` <span class="tag"><slot></slot></span>`
  }
}

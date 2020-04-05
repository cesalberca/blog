import { css, customElement, html, LitElement } from 'lit-element'

@customElement('cesalberca-blog')
export class App extends LitElement {
  static get styles() {
    return css`
      .full-height {
        min-height: 100vh;
      }
    `
  }

  render() {
    return html` <main>
      <app-theming class="full-height">
        <x-navbar></x-navbar>
        <router-view></router-view>
      </app-theming>
    </main>`
  }
}

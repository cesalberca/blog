import { css, customElement, html, LitElement, PropertyValues, query } from '/web_modules/lit-element.js'
import { RouterSlot } from 'router-slot'

@customElement('cesalberca-blog')
export class CesalbercaBlog extends LitElement {
  @query('router-slot')
  routerSlot!: RouterSlot

  static get styles() {
    return css`
      .full-height {
        min-height: 100vh;
      }
    `
  }

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props)
    this.routerSlot.add([
      {
        path: '/about',
        component: () => import('./pages/about-page')
      },
      {
        path: '/',
        component: () => import('./pages/home-page')
      },
      {
        path: '**',
        redirectTo: '/'
      }
    ])
  }

  render() {
    return html` <main>
      <app-theming class="full-height">
        <app-navbar></app-navbar>
        <router-slot></router-slot>
      </app-theming>
    </main>`
  }
}

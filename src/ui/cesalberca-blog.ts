import {
  css,
  customElement,
  html,
  LitElement,
  PropertyValues,
  query
} from '/web_modules/lit-element.js'
import { RouterSlot } from '/web_modules/router-slot.js'

@customElement('cesalberca-blog')
export class CesalbercaBlog extends LitElement {
  @query('router-slot')
  readonly routerSlot!: RouterSlot

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
        path: 'articles',
        component: () => import('./pages/articles-page.js')
      },
      {
        path: 'articles/:id',
        component: () => import('./pages/article-page.js')
      },
      {
        path: 'about',
        component: () => import('./pages/about-page.js')
      },
      {
        path: 'talks',
        component: () => import('./pages/talks-page.js')
      },
      {
        path: '/',
        component: () => import('./pages/home-page.js')
      },
      {
        path: '**',
        redirectTo: '/'
      }
    ])
  }

  render() {
    return html`<main>
      <app-theming class="full-height">
        <app-navbar></app-navbar>
        <router-slot></router-slot>
      </app-theming>
    </main>`
  }
}

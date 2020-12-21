import {
  css,
  customElement,
  html,
  LitElement,
  property,
  PropertyValues,
  query
} from 'lit-element'
import { RouterSlot } from 'router-slot'
import { Inject } from '../domain/types/inject.js'
import { TYPES } from '../types.js'
import { Store } from '../application/state/store.js'
import { Locale } from '../domain/language/locale.js'
import { Theme } from '../application/state/theme.js'
import { general } from './general.js'
import { Home } from './pages/home/home.js'

@customElement('cesalberca-blog')
export class CesalbercaBlog extends LitElement {
  @query('router-slot')
  readonly routerSlot!: RouterSlot

  @Inject(TYPES.STORE)
  @property({ type: Object })
  readonly state!: Store

  static get styles() {
    return [
      general,
      css`
        .full-height {
          min-height: 100vh;
        }
      `
    ]
  }

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props)
    this.routerSlot.add([
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
        component: Home
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
        <app-navbar
          @on-locale-change="${(event: CustomEvent<Locale>) => {
            this.state.patch({ locale: event.detail })
          }}"
          @on-theme-change="${(event: CustomEvent<Theme>) => {
            this.state.patch({ theme: event.detail })
          }}"
        ></app-navbar>
        <router-slot></router-slot>
      </app-theming>
    </main>`
  }
}

import { Translation } from './translation.js'
import { Direction } from './direction.js'
import { Inject } from '../../domain/types/inject.js'
import { TYPES } from '../../types.js'
import { customElement, LitElement, property, css, html } from '/web_modules/lit-element.js'
import { classMap } from '/web_modules/lit-html/directives/class-map.js'
import { State } from '../../application/state/state.js'
import { subscribe } from '../subscribe.js'

@customElement('app-links')
export class Links extends LitElement {
  @Inject(TYPES.TRANSLATION)
  @property({ type: Function })
  readonly translation!: Translation

  @Inject(TYPES.STATE)
  @property({ type: Object })
  readonly state!: State

  @property({ type: Number })
  readonly direction: Direction = Direction.HORIZONTAL

  get links() {
    switch (this.direction) {
      case Direction.HORIZONTAL:
        return 'horizontal'
      case Direction.VERTICAL:
        return 'vertical'
      default:
        return ''
    }
  }

  get translations() {
    return {
      home: this.translation('home_title'),
      about: this.translation('about_title'),
      talks: this.translation('talks_title'),
      articles: this.translation('article_title')
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
      }

      .horizontal,
      .vertical {
        display: flex;
        width: 100%;
        align-items: center;
      }

      .horizontal {
        flex-direction: row;
      }

      .vertical {
        flex-direction: column;
        align-items: flex-start;
      }

      .links > * {
        font-size: var(--body-text);
        color: var(--link-color);
        margin-right: var(--medium-size);
        transition: 0.25s ease opacity, 0.25s ease background-color;
        padding: 0 var(--small-size);
        text-decoration: none;
        width: max-content;
      }

      .links > *:hover {
        background-color: var(--blue-dark-color-1);
        opacity: var(--active-opacity);
      }

      .links > *:after {
        content: none;
      }

      .vertical.links > * {
        padding: 0;
      }

      .vertical.links > *:hover {
        padding: 0;
        background-color: initial;
      }

      .home {
        margin-right: auto;
        font-size: var(--title-text);
        color: white;
        padding: 0;
      }

      .home:hover {
        background-color: initial;
      }

      .router-link-active {
        text-shadow: 0 0 0.65px var(--link-color);
      }
    `
  }

  render() {
    return html`<div class="${classMap({ [this.links]: true, links: true })}">
      <a href="/" class="home">${subscribe(this.translations.home)}</a>
      <a href="/talks">${subscribe(this.translations.talks)}</a>
      <a href="/about">${subscribe(this.translations.about)}</a>
    </div>`
  }
}

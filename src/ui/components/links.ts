import { Translation } from './translation'
import { Direction } from './direction'
import { Inject } from '../../domain/types/inject'
import { TYPES } from '../../types'
import { customElement, LitElement, property, css, html } from '/web_modules/lit-element'
import { classMap } from 'lit-html/directives/class-map'

@customElement('app-links')
export class Links extends LitElement {
  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

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
      <router-link to="/" exact class="home">${this.translations.home}</router-link>
      <router-link to="/talks">${this.translations.talks}</router-link>
      <router-link to="/about">${this.translations.about}</router-link>
    </div>`
  }
}

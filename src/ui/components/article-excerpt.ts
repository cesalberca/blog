import { Translation } from './translation'
import { Article } from '../../domain/articles/article'
import { TYPES } from '../../types'
import { Inject } from '../../domain/types/inject'
import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('app-article-excerpt')
export class ArticleExcerpt extends LitElement {
  @property({ type: String })
  excerpt!: ReturnType<Article['getExcerpt']>

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  onAction() {
    return this.excerpt.id
  }

  static get styles() {
    return css`
      .excerpt {
        display: block;
      }

      .excerpt:after {
        content: none;
      }

      .excerpt:hover {
        color: inherit;
        cursor: pointer;
      }

      .slugline {
        font-size: calc(var(--body-text) - 2);
        color: var(--gray-color);
      }

      .accented-slugline {
        color: var(--primary-color);
      }
    `
  }

  get minutes() {
    return this.translation('_minutes')
  }

  render() {
    return html`<app-link class="excerpt" tabindex="0" @click="onAction" @keydown.enter="onAction">
      <h3>{{ excerpt.title }}</h3>
      <div class="slugline">
        <span>{{ excerpt.date }}</span>
        <span class="accented-slugline"> / </span>
        <span>{{ excerpt.readingTime.minutes }} {{ minutes }}</span>
      </div>
      <p v-html="excerpt.body"></p>
    </app-link>`
  }
}

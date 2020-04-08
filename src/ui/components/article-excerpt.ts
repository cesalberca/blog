import { Translation } from './translation.js'
import { Article } from '../../domain/articles/article.js'
import { TYPES } from '../../types.js'
import { Inject } from '../../domain/types/inject.js'
import { css, customElement, html, LitElement, property } from '/web_modules/lit-element.js'

@customElement('app-article-excerpt')
export class ArticleExcerpt extends LitElement {
  @property({ type: Object })
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
      <h3>${this.excerpt.title}</h3>
      <div class="slugline">
        <span>${this.excerpt.date}</span>
        <span class="accented-slugline"> / </span>
        <span>${this.excerpt.readingTime.minutes} ${this.minutes}</span>
      </div>
      <p>${this.excerpt.body}</p>
    </app-link>`
  }
}

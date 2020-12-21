import { Translation } from './translation.js'
import { Article } from '../../domain/articles/article.js'
import { TYPES } from '../../types.js'
import { Inject } from '../../domain/types/inject.js'
import { css, customElement, html, LitElement, property } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import { subscribe } from '../subscribe.js'
import { general } from '../general.js'

@customElement('app-article-excerpt')
export class ArticleExcerpt extends LitElement {
  @property({ type: Object })
  excerpt!: ReturnType<Article['getExcerpt']>

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  static get styles() {
    return [
      general,
      css`
        .excerpt {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        .excerpt:visited {
          color: var(--foreground-color);
        }

        .excerpt:hover {
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
    ]
  }

  get minutes() {
    return this.translation('_minutes')
  }

  render() {
    return html`<a href="${`/articles/${this.excerpt.id.value}`}" class="excerpt" tabindex="0">
      <h3>${unsafeHTML(this.excerpt.title)}</h3>
      <div class="slugline">
        <span>${this.excerpt.date}</span>
        <span class="accented-slugline"> <strong>/</strong> </span>
        <span>${this.excerpt.readingTime.minutes} ${subscribe(this.minutes)}</span>
      </div>
      <p>${unsafeHTML(this.excerpt.body)}</p>
    </a>`
  }
}

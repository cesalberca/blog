import { TranslationService } from '../../../domain/translation-service.js'
import { Translation } from '../../components/translation.js'
import { TYPES } from '../../../types.js'
import { GetArticleUseCase } from '../../../application/use-cases/get-article-use-case.js'
import { Id } from '../../../domain/id.js'
import { Inject } from '../../../domain/types/inject.js'
import { Store } from '../../../application/state/store.js'
import { css, customElement, html, LitElement } from 'lit-element'
import { Article as ArticleObject } from '../../../domain/articles/article.js'
import { Params, queryParentRouterSlot } from 'router-slot'
import { subscribe } from '../../subscribe.js'
import { general } from '../../general.js'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

@customElement('app-article')
export class Article extends LitElement {
  @Inject(TYPES.STORE)
  readonly state!: Store

  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  @Inject(TYPES.WINDOW)
  readonly window!: Window

  @Inject(TYPES.GET_ARTICLE_USE_CASE)
  readonly getArticleUseCase!: GetArticleUseCase

  article: Observable<ArticleObject | null> = of(null)

  static get styles() {
    return [
      general,
      css`
        .content {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .loading:after {
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
          animation: ellipsis steps(4, end) 900ms infinite;
          content: '\\2026';
          width: 0;
        }

        @keyframes ellipsis {
          to {
            width: 35px;
          }
        }

        @-webkit-keyframes ellipsis {
          to {
            width: 35px;
          }
        }

        .header {
          display: flex;
        }

        .hero {
          margin-bottom: var(--medium-size);
        }

        .title {
          filter: invert(1);
          padding: var(--medium-size);
          margin-top: var(--big-size);
          text-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.5);
        }

        .header > * {
          margin-right: var(--small-size);
        }

        .date {
          font-style: italic;
        }

        .dash {
          color: var(--primary-color);
        }

        .time {
          font-style: italic;
        }

        .locale {
          margin-left: var(--small-size);
        }

        .social-links {
          margin-bottom: var(--big-size);
        }

        .article p {
          margin-bottom: var(--medium-size);
        }
      `
    ]
  }

  get params(): Params {
    return queryParentRouterSlot(this)!.match!.params
  }

  async connectedCallback(): Promise<void> {
    super.connectedCallback()
    this.window.document.documentElement.style.setProperty('--navbar-background', 'transparent')
    this.window.document.documentElement.style.setProperty('--navbar-position', 'absolute')
    this.window.document.documentElement.style.setProperty('--navbar-text-shadow', '0 0 10px black')
    this.article = this.getArticleUseCase.execute({
      id: Id.fromValue(this.params.id)
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.window.document.documentElement.style.removeProperty('--navbar-background')
    this.window.document.documentElement.style.removeProperty('--navbar-position')
    this.window.document.documentElement.style.removeProperty('--navbar-text-shadow')
  }

  get minutes() {
    return this.translation('_minutes')
  }

  getDate(article: ArticleObject) {
    return this.state
      .observable()
      .pipe(map(({ locale }) => article.date.format(this.translationService.toLiteral(locale))))
  }

  getArticleLocale(article: ArticleObject) {
    return this.translationService.toLiteral(article.locale)
  }

  render() {
    return html`${subscribe(
      this.article.pipe(
        map(article => {
          if (article === null) {
            return html`<app-page
              ><div class="content">
                <h2 class="loading">${subscribe(this.translation('_loading'))}</h2>
              </div></app-page
            >`
          }

          return html`<article class="article">
            <app-hero .image="${article.image}" class="hero">
              <h1 class="title">
                ${unsafeHTML(article.title)}
              </h1>
            </app-hero>
            <app-page>
              <header class="header">
                <span class="date">${subscribe(this.getDate(article))}</span>
                <span class="dash">—</span>
                <span class="time"
                  >${article.getReadingTime().minutes} ${subscribe(this.minutes)}</span
                >
                <app-tag class="locale">${this.getArticleLocale(article)}</app-tag>
              </header>
              <app-markdown class="article" .markdown="${article.body.value}"></app-markdown>
              <app-social-links
                class="social-links"
                .body="${article.getSummary()}"
              ></app-social-links>
            </app-page>
          </article>`
        })
      )
    )}`
  }
}

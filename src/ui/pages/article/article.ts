import { TranslationService } from '../../../domain/translation-service.js'
import { Translation } from '../../components/translation.js'
import { TYPES } from '../../../types.js'
import { GetArticleUseCase } from '../../../application/use-cases/get-article-use-case.js'
import { Id } from '../../../domain/id.js'
import { Inject } from '../../../domain/types/inject.js'
import { State } from '../../../application/state/state.js'
import { css, customElement, html, LitElement, property } from '/web_modules/lit-element.js'
import { Article as ArticleObject } from '../../../domain/articles/article.js'
import { Params, queryParentRouterSlot } from '/web_modules/router-slot.js'
import { subscribe } from '../../subscribe.js'

@customElement('app-article')
export class Article extends LitElement {
  @property({ type: Object })
  article: ArticleObject | null = null

  @Inject(TYPES.STATE)
  readonly state!: State

  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  @Inject(TYPES.WINDOW)
  readonly window!: Window

  @Inject(TYPES.GET_ARTICLE_USE_CASE)
  getArticleUseCase!: GetArticleUseCase

  get params(): Params {
    return queryParentRouterSlot(this)!.match!.params
  }

  async connectedCallback(): Promise<void> {
    super.connectedCallback()
    this.article = await this.getArticleUseCase.execute({
      id: Id.fromValue(this.params.id)
    })
  }

  get date() {
    return this.article!.date.format(this.translationService.toString(this.state.value().locale))
  }

  get minutes() {
    return this.translation('_minutes')
  }

  get articleLocale() {
    return this.translationService.toString(this.article!.locale)
  }

  get title() {
    return this.article!.title
  }

  get body() {
    return this.article!.body
  }

  static get styles() {
    return css`
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
  }

  render() {
    if (this.article === null) {
      return html`<h2>Article not found</h2>`
    }

    return html`<article class="article">
      <app-hero .image="${this.article.image}" class="hero">
        <h1 class="title">${this.article.title}</h1>
      </app-hero>
      <app-page>
        <header class="header">
          <span class="date">${this.date}</span>
          <span class="dash">—</span>
          <span class="time">${this.article.getReadingTime().minutes} ${subscribe(this.minutes)}</span>
          <app-tag class="locale">${this.articleLocale}</app-tag>
        </header>
        <app-markdown class="article" .markdown="${this.article.body.value}"></app-markdown>
        <app-social-links class="social-links" .body="${this.article.getSummary()}" />
      </app-page>
    </article>`
  }
}

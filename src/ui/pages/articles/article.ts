import { TranslationService } from '../../../domain/translation-service.js'
import { Translation } from '../../components/translation.js'
import { TYPES } from '../../../types.js'
import { GetArticleUseCase } from '../../../application/use-cases/get-article-use-case.js'
import { Id } from '../../../domain/id.js'
import { Inject } from '../../../domain/types/inject.js'
import { StateManager } from '../../../application/state/state-manager.js'
import { css, customElement, html, LitElement } from '/web_modules/lit-element.js'
import { Article as ArticleObject } from '../../../domain/articles/article.js'
import { container } from '../../../container.js'

@customElement('app-article')
export class Article extends LitElement {
  article: ArticleObject | null = null

  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  @Inject(TYPES.WINDOW)
  readonly window!: Window

  async onLocaleChange() {
    this.article = await container.get<GetArticleUseCase>(TYPES.GET_ARTICLE_USE_CASE).execute({
      id: Id.fromValue('a')
    })
  }

  get date() {
    return this.article!.date.format(
      this.translationService.toString(this.stateManager.state.locale)
    )
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
    return html` <article v-if="article" class="article">
      <app-hero :image="article.image" class="hero">
        <h1 class="title">{{ article.title }}</h1>
      </app-hero>
      <app-page>
        <header class="header">
          <span class="date">{{ date }}</span>
          <span class="dash">—</span>
          <span class="time">{{ article.getReadingTime().minutes }} {{ minutes }}</span>
          <app-tag class="locale">{{ articleLocale }}</app-tag>
        </header>
        <app-markdown class="article" :body="body"></app-markdown>
        <app-social-links class="social-links" :body="article.getSummary()" />
      </app-page>
    </article>`
  }
}

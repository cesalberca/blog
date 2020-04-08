import { TranslationService } from '../../../domain/translation-service.js'
import { Translation } from '../../components/translation.js'
import { TYPES } from '../../../types.js'
import { GetAllArticlesUseCase } from '../../../application/use-cases/get-all-articles-use-case.js'
import { Article } from '../../../domain/articles/article.js'
import { Id } from '../../../domain/id.js'
import { Inject } from '../../../domain/types/inject.js'
import { StateManager } from '../../../application/state/state-manager.js'
import { container } from '../../../container.js'
import { customElement, html, LitElement } from '/web_modules/lit-element.js'

@customElement('app-articles')
export class Articles extends LitElement {
  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  articles: Article[] = []

  connectedCallback(): void {
    super.connectedCallback()
    container
      .get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .execute()
      .then(x => {
        this.articles = x
      })
  }

  navigateToArticleById(id: Id) {
    history.pushState(
      {
        id: id.value,
        locale: this.translationService.toString(this.stateManager.state.locale)
      },
      '',
      `/articles/${id.value}`
    )
  }

  get title() {
    return this.translation('article_title')
  }

  render() {
    return html`<div>
      <h1>${this.title}</h1>
      <app-article-excerpt
        v-for="article in articles"
        :key="article.id.slug"
        :excerpt="article.getExcerpt()"
        @on-action="${this.navigateToArticleById}"
      />
    </div>`
  }
}

import { TranslationService } from '../../../domain/translation-service'
import { Translation } from '../../components/translation'
import { TYPES } from '../../../types'
import { GetAllArticlesUseCase } from '../../../application/use-cases/get-all-articles-use-case'
import { Article } from '../../../domain/articles/article'
import { Id } from '../../../domain/id'
import { Inject } from '../../../domain/types/inject'
import { StateManager } from '../../../application/state/state-manager'
import { container, Container } from '../../../container'
import { customElement, html, LitElement } from 'lit-element'

@customElement('app-articles')
export class Articles extends LitElement {
  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  articles: Article[] = []

  async onLocaleChange() {
    this.articles = await Container.instance()
      .get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .execute()
  }

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
      '/article'
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
        @on-action="navigateToArticleById"
      />
    </div>`
  }
}

import { TranslationService } from '../../../domain/translation-service.js'
import { Translation } from '../../components/translation.js'
import { TYPES } from '../../../types.js'
import { GetAllArticlesUseCase } from '../../../application/use-cases/get-all-articles-use-case.js'
import { Article } from '../../../domain/articles/article.js'
import { Inject } from '../../../domain/types/inject.js'
import { container } from '../../../container.js'
import { customElement, html, LitElement } from '/web_modules/lit-element.js'
import { State } from '../../../application/state/state.js'
import { subscribe } from '../../subscribe.js'

@customElement('app-articles')
export class Articles extends LitElement {
  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.STATE)
  readonly state!: State

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

  get articleTitle() {
    return this.translation('article_title')
  }

  render() {
    return html`<div>
      <h1>${subscribe(this.articleTitle)}</h1>
      <app-article-excerpt
        v-for="article in articles"
        :key="article.id.slug"
        :excerpt="article.getExcerpt()"
      />
    </div>`
  }
}

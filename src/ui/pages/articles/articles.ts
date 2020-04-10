import { TranslationService } from '../../../domain/translation-service.js'
import { Translation } from '../../components/translation.js'
import { TYPES } from '../../../types.js'
import { GetAllArticlesUseCase } from '../../../application/use-cases/get-all-articles-use-case.js'
import { Article } from '../../../domain/articles/article.js'
import { Inject } from '../../../domain/types/inject.js'
import { container } from '../../../container.js'
import { customElement, html, LitElement } from '/web_modules/lit-element.js'
import { Store } from '../../../application/state/store.js'
import { subscribe } from '../../subscribe.js'
import { general } from '../../styles/general.js'

@customElement('app-articles')
export class Articles extends LitElement {
  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.STORE)
  readonly state!: Store

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  articles: Article[] = []

  static get styles() {
    return [general]
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

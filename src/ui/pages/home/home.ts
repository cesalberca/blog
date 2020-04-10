import { Article } from '../../../domain/articles/article.js'
import { Translation } from '../../components/translation.js'
import { TYPES } from '../../../types.js'
import { Inject } from '../../../domain/types/inject.js'
import { TranslationService } from '../../../domain/translation-service.js'
import { GetAllArticlesUseCase } from '../../../application/use-cases/get-all-articles-use-case.js'
import { container } from '../../../container.js'
import { css, customElement, html, LitElement, property } from '/web_modules/lit-element.js'
import { unsafeHTML } from '/web_modules/lit-html/directives/unsafe-html.js'
import { Store } from '../../../application/state/store.js'
import { subscribe } from '../../subscribe.js'
import { map } from '/web_modules/rxjs/operators.js'
import { general } from '../../styles/general.js'

@customElement('app-home')
export class Home extends LitElement {
  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.STORE)
  readonly state!: Store

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  @property({ type: Array })
  articles: Article[] = []

  static get styles() {
    return [
      general,
      css`
        .hero {
          background-color: var(--primary-color);
        }

        .wrapper {
          display: flex;
          margin: 0 auto;
          max-width: var(--body-width);
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--medium-size);
          overflow: hidden;
        }

        .title {
          color: var(--white-color);
          font-size: var(--title-text);
        }

        @media (max-width: 768px) {
          .title {
            margin: 0;
          }

          .caption,
          .title {
            padding: var(--medium-size);
          }
        }

        .articles {
          margin-top: 0;
        }

        .caption {
          --bold-color: var(--white-color);
          font-size: var(--body-text);
          color: var(--white-color);
          margin: 0;
        }

        .photo {
          max-width: 500px;
          transform: scale(-1, 1);
          mix-blend-mode: soft-light;
        }

        @media (max-width: 768px) {
          .wrapper {
            flex-direction: column;
          }
        }
      `
    ]
  }

  async connectedCallback(): Promise<void> {
    super.connectedCallback()
    this.articles = await container
      .get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .execute()
  }

  get articlesTitle() {
    return this.translation('home_articles')
  }

  get heroTitle() {
    return this.translation('home_heroTitle')
  }

  get heroCaption() {
    return this.translation('home_heroCaption')
  }

  render() {
    return html`<main>
      <div class="hero">
        <div class="wrapper">
          <header>
            <h1 class="title">${subscribe(this.heroTitle.pipe(map(x => unsafeHTML(x))))}</h1>
            <p class="caption">${subscribe(this.heroCaption.pipe(map(x => unsafeHTML(x))))}</p>
          </header>
          <img class="photo" src="ui/images/me.png" alt="César Alberca" />
        </div>
      </div>
      <app-page>
        <h2 class="articles">${subscribe(this.articlesTitle)}</h2>
        ${this.articles.map(article => {
          return html`<app-article-excerpt
            .excerpt="${article.getExcerpt()}"
          ></app-article-excerpt>`
        })}
      </app-page>
    </main>`
  }
}

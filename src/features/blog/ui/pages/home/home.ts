import { Article } from '../../../domain/articles/article'
import { Translation } from '../../components/translation'
import { TYPES } from '../../../types'
import { Inject } from '../../../domain/types/inject'
import { TranslationService } from '../../../domain/translation-service'
import { GetAllArticlesUseCase } from '../../../application/use-cases/get-all-articles-use-case'
import { container } from '../../../container'
import { css, customElement, html, LitElement } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { Store } from '../../../application/state/store'
import { subscribe } from '../../subscribe'
import { map } from 'rxjs/operators'
import { general } from '../../general'
import { Observable } from 'rxjs'

@customElement('app-home')
export class Home extends LitElement {
  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.STORE)
  readonly state!: Store

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  articles: Observable<Article[]> = container.get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE).execute()

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
          padding: 0 var(--m);
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
            padding: var(--m);
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
      `,
    ]
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
        ${subscribe(
          this.articles.pipe(
            map(articles =>
              articles.map(
                article => html`<app-article-excerpt .excerpt="${article.getExcerpt()}"></app-article-excerpt>`,
              ),
            ),
          ),
        )}
      </app-page>
    </main>`
  }
}

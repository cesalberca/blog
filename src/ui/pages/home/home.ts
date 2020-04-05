import me from '../../images/me.png'
import { Id } from '../../../domain/id'
import { Article } from '../../../domain/articles/article'
import { Translate } from '../../components/translate'
import { TYPES } from '../../../types'
import { Inject } from '../../../domain/types/inject'
import { StateManager } from '../../../application/state/state-manager'
import { TranslationService } from '../../../domain/translation-service'
import { GetAllArticlesUseCase } from '../../../application/use-cases/get-all-articles-use-case'
import { Container } from '../../../container'
import { customElement, LitElement, html, css } from 'lit-element'

@customElement('app-home')
export class Home extends LitElement {
  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  articles: Article[] = []
  me = me

  async onLocaleChange() {
    this.articles = await Container.instance()
      .get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .execute()
  }

  navigateToArticleById(id: Id) {
    this.$router.push({
      name: 'article',
      params: {
        id: id.value,
        locale: this.translationService.toString(this.stateManager.state.locale)
      }
    })
  }

  get articlesTitle() {
    return this.translate('home_articles')
  }

  get heroTitle() {
    return this.translate('home_heroTitle')
  }

  get heroCaption() {
    return this.translate('home_heroCaption')
  }

  static get styles() {
    return css`
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
  }

  render() {
    return html` <main>
      <div class="hero">
        <div class="wrapper">
          <header>
            <h1 class="title" v-html="heroTitle"></h1>
            <p class="caption" v-html="heroCaption"></p>
          </header>
          <img class="photo" :src="me" alt="César Alberca" />
        </div>
      </div>
      <x-page>
        <h2 class="articles">{{ articlesTitle }}</h2>
        <x-article-excerpt
          v-for="article in articles"
          :key="article.id.slug"
          :excerpt="article.getExcerpt()"
          @on-action="navigateToArticleById"
        />
      </x-page>
    </main>`
  }
}

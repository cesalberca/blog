import { Watch } from 'nuxt-property-decorator'
import { TranslationService } from '../../../domain/translation-service'
import { Translate } from '../../components/translate'
import { TYPES } from '../../../types'
import { GetArticleUseCase } from '../../../application/use-cases/get-article-use-case'
import { Article } from '../../../domain/articles/article'
import { Id } from '../../../domain/id'
import { Inject } from '../../../domain/types/inject'
import { StateManager } from '../../../application/state/state-manager'
import { Container } from '../../../container'
import { customElement, LitElement } from 'lit-element'

@customElement('x-article')
export class XArticle extends LitElement {
  article: Article | null = null

  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  @Inject(TYPES.WINDOW)
  readonly window!: Window

  @Watch('stateManage.state.locale')
  async onLocaleChange() {
    this.article = await Container.instance()
      .get<GetArticleUseCase>(TYPES.GET_ARTICLE_USE_CASE)
      .execute({
        id: Id.fromValue(this.$route.params.id)
      })
  }

  get date() {
    return this.article!.date.format(
      this.translationService.toString(this.stateManager.state.locale)
    )
  }

  get minutes() {
    return this.translate('_minutes')
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

      .article ::v-deep p {
        margin-bottom: var(--medium-size);
      }
    `
  }

  render() {
    return html` <article v-if="article" class="article">
      <x-hero :image="article.image" class="hero">
        <h1 class="title">{{ article.title }}</h1>
      </x-hero>
      <x-page>
        <header class="header">
          <span class="date">{{ date }}</span>
          <span class="dash">—</span>
          <span class="time">{{ article.getReadingTime().minutes }} {{ minutes }}</span>
          <x-tag class="locale">{{ articleLocale }}</x-tag>
        </header>
        <x-markdown class="article" :body="body"></x-markdown>
        <x-social-links class="social-links" :body="article.getSummary()" />
      </x-page>
    </article>`
  }
}

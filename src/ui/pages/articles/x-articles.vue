<template>
  <div>
    <h1>{{ title }}</h1>
    <x-article-excerpt
      v-for="article in articles"
      :key="article.id.slug"
      :excerpt="article.getExcerpt()"
      @on-action="navigateToArticle"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { TranslationService } from '../../../domain/translation-service'
import { Translate } from '../../components/translate'
import XArticleExcerpt from '../../components/x-article-excerpt.vue'
import { NavigateToArticle } from '../../actions/navigate-to-article'
import { TYPES } from '../../../types'
import { GetAllArticlesUseCase } from '../../../application/use-cases/get-all-articles-use-case'
import { Article } from '../../../domain/articles/article'
import { Id } from '../../../domain/id'
import { Inject } from '../../../inject'
import { Container } from '../../../container'
import { StateManager } from '../../../application/state/state-manager'

@Component<XArticles>({
  async beforeRouteEnter(_to, _from, next) {
    const articles = await Container.instance()
      .get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .execute()
    next(vm => {
      vm.articles = articles
    })
  },
  components: {
    XArticleExcerpt
  }
})
export default class XArticles extends Vue {
  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  articles: Article[] = []

  @Watch('state.locale')
  async onLocaleChange() {
    this.articles = await Container.instance()
      .get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .execute()
  }

  navigateToArticle(id: Id) {
    NavigateToArticle.create({
      router: this.$router,
      id,
      translationService: this.translationService,
      locale: this.stateManager.state.locale
    }).execute()
  }

  get title() {
    return this.translate('article_title')
  }
}
</script>

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
import { TranslationService } from '../../../domain/TranslationService'
import { Translate } from '../../components/Translate'
import XArticleExcerpt from '../../components/XArticleExcerpt.vue'
import { NavigateToArticle } from '../../actions/NavigateToArticle'
import { TYPES } from '../../../types'
import { GetAllArticlesUseCase } from '../../../application/useCases/GetAllArticlesUseCase'
import { State } from '../../../application/state/State'
import { Article } from '../../../domain/articles/Article'
import { Id } from '../../../domain/Id'
import { VueStateManager } from '../../state/VueStateManager'
import { Inject } from '../../../inject'
import { Container } from '../../../Container'

@Component<XArticles>({
  async beforeRouteEnter(_to, _from, next) {
    const articles = await Container.instance()
      .get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .execute({
        locale: VueStateManager.instance.state.locale
      })
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

  @Inject(TYPES.STATE)
  readonly state!: State

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  articles: Article[] = []

  @Watch('state.locale')
  async onLocaleChange() {
    this.articles = await Container.instance()
      .get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .execute({
        locale: VueStateManager.instance.state.locale
      })
  }

  navigateToArticle(id: Id) {
    NavigateToArticle.create({
      router: this.$router,
      id,
      translationService: this.translationService,
      locale: this.state.locale
    }).execute()
  }

  get title() {
    return this.translate('article_title')
  }
}
</script>

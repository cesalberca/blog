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
import { Component, Inject, Vue, Watch } from 'vue-property-decorator'
import { GetAllArticlesUseCase } from '../../../application/useCases'
import { TranslationService } from '../../../domain/TranslationService'
import { State } from '../../../application/state'
import { Article, Id } from '../../../domain/articles'
import { Translate } from '../../commons/Translate'
import { VueStateManager } from '../../state'
import XArticleExcerpt from '../../commons/XArticleExcerpt.vue'
import { NavigateToArticle } from '../../actions/NavigateToArticle'

@Component<XArticles>({
  async beforeRouteEnter(_to, _from, next) {
    const articles = await GetAllArticlesUseCase.create({
      locale: VueStateManager.instance.state.locale
    }).execute()
    next(vm => {
      vm.articles = articles
    })
  },
  components: {
    XArticleExcerpt
  }
})
export default class XArticles extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  @Inject()
  readonly translate!: Translate

  articles: Article[] = []

  @Watch('state.locale')
  async onLocaleChange() {
    this.articles = await GetAllArticlesUseCase.create({
      locale: VueStateManager.instance.state.locale
    }).execute()
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

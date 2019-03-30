<template>
  <div>
    <h1>{{ recentArticlesTitle }}</h1>
    <ArticleExcerpt
      v-for="article in articles"
      :key="article.id.slug"
      :excerpt="article.getExcerpt()"
      @on-click="navigateToArticle"
    />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue, Watch } from 'vue-property-decorator'
import { TranslationService, UseCaseFactory } from '../../application'
import { Article, Id } from '../../domain/articles'
import { ArticleExcerpt } from '../commons'
import { State, VueStateManager } from '../state'
import { ActionsFactory } from '../actions/ActionsFactory'

@Component<Home>({
  async beforeRouteEnter(_to, _from, next) {
    const articles = await UseCaseFactory.get<Article[]>('GetAllArticles', {
      locale: VueStateManager.instance.state.locale
    }).execute()
    next(vm => {
      vm.articles = articles
    })
  },
  components: {
    ArticleExcerpt
  }
})
export default class Home extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  articles: Article[] = []

  @Watch('state.locale')
  async onLocaleChange() {
    this.articles = await UseCaseFactory.get<Article[]>('GetAllArticles', {
      locale: VueStateManager.instance.state.locale
    }).execute()
  }

  navigateToArticle(id: Id) {
    ActionsFactory.get('NavigateToArticle', {
      router: this.$router,
      id,
      translationService: this.translationService,
      locale: this.state.locale
    }).execute()
  }

  get recentArticlesTitle() {
    return this.translationService.translate(this.state.locale, 'home_recentArticles')
  }
}
</script>

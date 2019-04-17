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
import { UseCase } from '../../application/useCases/UseCase'
import { GetAllArticlesType } from '../../application/useCases/GetAllArticles'
import { Translate } from '../commons/Translate'

@Component<Home>({
  async beforeRouteEnter(_to, _from, next) {
    const articles = (await UseCaseFactory.get(UseCase.GET_ALL_ARTICLES, {
      locale: VueStateManager.instance.state.locale
    }).execute()) as GetAllArticlesType
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

  @Inject()
  readonly translate!: Translate

  articles: Article[] = []

  @Watch('state.locale')
  async onLocaleChange() {
    this.articles = (await UseCaseFactory.get(UseCase.GET_ALL_ARTICLES, {
      locale: VueStateManager.instance.state.locale
    }).execute()) as GetAllArticlesType
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
    return this.translate('home_recentArticles')
  }
}
</script>

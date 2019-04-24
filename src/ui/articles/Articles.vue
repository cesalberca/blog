<template>
  <div>
    <h1>{{ title }}</h1>
    <ArticleExcerpt
      v-for="article in articles"
      :key="article.id.slug"
      :excerpt="article.getExcerpt()"
      @on-action="navigateToArticle"
    />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue, Watch } from 'vue-property-decorator'
import { TranslationService, UseCaseFactory } from '../../application'
import { ArticleExcerpt } from '../commons'
import { Article } from '../../domain/articles'
import { State, VueStateManager } from '../state'
import { Id } from '../../domain'
import { ActionsFactory } from '../actions/ActionsFactory'
import { UseCase } from '../../application/useCases/UseCase'
import { GetAllArticlesType } from '../../application/useCases/GetAllArticles'
import { Translate } from '../commons/Translate'

@Component<Articles>({
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
export default class Articles extends Vue {
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

  get title() {
    return this.translate('article_title')
  }
}
</script>

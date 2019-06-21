<template>
  <x-page>
    <h1>{{ recentArticlesTitle }}</h1>
    <x-article-excerpt
      v-for="article in articles"
      :key="article.id.slug"
      :excerpt="article.getExcerpt()"
      @on-action="navigateToArticle"
    />
  </x-page>
</template>

<script lang="ts">
import { Component, Inject, Vue, Watch } from 'vue-property-decorator'
import { GetAllArticles } from '../../../application/useCases'
import { TranslationService } from '../../../domain/TranslationService'
import { State } from '../../../application/state'
import { Article, Id } from '../../../domain/articles'
import { Translate } from '../../commons/Translate'
import { VueStateManager } from '../../state'
import { ActionsFactory } from '../../actions/ActionsFactory'
import XArticleExcerpt from '../../commons/XArticleExcerpt.vue'
import XPage from '../../commons/XPage.vue'

@Component<XHome>({
  name: 'XHome',
  async beforeRouteEnter(_to, _from, next) {
    const articles = await GetAllArticles.create({
      locale: VueStateManager.instance.state.locale
    }).execute()

    next(vm => {
      vm.articles = articles
    })
  },
  components: {
    XPage,
    XArticleExcerpt
  }
})
export default class XHome extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  @Inject()
  readonly translate!: Translate

  articles: Article[] = []

  @Watch('state.locale')
  async onLocaleChange() {
    this.articles = await GetAllArticles.create({
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
    return this.translate('home_recentArticles')
  }
}
</script>

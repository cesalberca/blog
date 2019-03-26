<template>
  <Page>
    <h1>{{ recentArticlesTitle }}</h1>
    <ArticleExcerpt
      v-for="article in recentArticles"
      :key="article.id.value"
      :excerpt="article.getExcerpt()"
    />
  </Page>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { GetRecentArticles, TranslationService } from '../../application'
import { Article } from '../../domain/articles/Article'
import { ArticleExcerpt, Page } from '../commons'
import { State } from '../state/State'

@Component<Home>({
  async beforeRouteEnter(_to, _options, next) {
    const recentArticles = await new GetRecentArticles().execute()
    next(vm => {
      vm.recentArticles = recentArticles
    })
  },
  components: {
    Page,
    ArticleExcerpt
  }
})
export default class Home extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  recentArticles: Article[] = []

  get recentArticlesTitle() {
    return this.translationService.translate(this.state.locale, 'home_recentArticles')
  }
}
</script>

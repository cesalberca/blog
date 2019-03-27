<template>
  <div>
    <h1>{{ recentArticlesTitle }}</h1>
    <ArticleExcerpt
      v-for="article in recentArticles"
      :key="article.id.slug"
      :excerpt="article.getExcerpt()"
      @on-click="navigateToArticle"
    />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { GetRecentArticles, TranslationService } from '../../application'
import { Article, Id } from '../../domain/articles'
import { ArticleExcerpt } from '../commons'
import { State } from '../state'
import { NavigateToArticle } from '../NavigateToArticle'

@Component<Home>({
  async beforeRouteEnter(_to, _options, next) {
    const recentArticles = await new GetRecentArticles().execute()
    next(vm => {
      vm.recentArticles = recentArticles
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

  recentArticles: Article[] = []

  navigateToArticle(id: Id) {
    new NavigateToArticle(this.$router, id).execute()
  }

  get recentArticlesTitle() {
    return this.translationService.translate(this.state.locale, 'home_recentArticles')
  }
}
</script>

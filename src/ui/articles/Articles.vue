<template>
  <div>
    <h1>{{ title }}</h1>
    <ArticleExcerpt
      v-for="article in articles"
      :key="article.id.slug"
      :excerpt="article.getExcerpt()"
      @on-click="navigateToArticle(article.id)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { TranslationService, UseCaseFactory } from '../../application'
import { ArticleExcerpt } from '../commons'
import { Article } from '../../domain/articles'
import { State } from '../state'
import { Id } from '../../domain'
import { NavigateToArticle } from '../NavigateToArticle'

@Component<Articles>({
  async beforeRouteEnter(_to, _options, next) {
    const articles = await UseCaseFactory.get<Article[]>('GetArticles').execute()
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

  articles: Article[] = []

  navigateToArticle(id: Id) {
    new NavigateToArticle(this.$router, id, this.state.locale).execute()
  }

  get title() {
    return this.translationService.translate(this.state.locale, 'article_title')
  }
}
</script>

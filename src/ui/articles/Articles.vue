<template>
  <Page>
    <h1>{{ title }}</h1>
    <ArticleExcerpt
      v-for="article in articles"
      :key="article.id.value"
      :excerpt="article.getExcerpt()"
    />
  </Page>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { GetArticles, TranslationService } from '../../application'
import { ArticleExcerpt, Page } from '../commons'
import { Article } from '../../domain/articles/Article'
import { State } from '../state/State'

@Component<Articles>({
  async beforeRouteEnter(_to, _options, next) {
    const articles = await new GetArticles().execute()
    next(vm => {
      vm.articles = articles
    })
  },
  components: {
    Page,
    ArticleExcerpt
  }
})
export default class Articles extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  articles: Article[] = []

  get title() {
    return this.translationService.translate(this.state.locale, 'article_title')
  }
}
</script>

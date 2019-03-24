<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ this.article }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { GetArticleCommand } from '../../application/GetArticleCommand'
import { TranslationService } from '../../application/TranslationService'

@Component
export default class Articles extends Vue {
  @Inject()
  readonly getArticle!: GetArticleCommand

  @Inject()
  readonly translationService!: TranslationService

  article: string = ''

  mounted() {
    this.getArticle.execute().then(article => {
      this.article = article
    })
  }

  get title() {
    return this.translationService.translate('article_title')
  }
}
</script>

<style scoped></style>

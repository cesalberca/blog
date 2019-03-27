<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <div v-html="body"></div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { UseCaseFactory } from '../../application'
import { Article, Id } from '../../domain'
import { State } from '../state'

@Component<ArticleComponent>({
  async beforeRouteEnter(to, _from, next) {
    if (to.name === undefined) {
      return
    }

    const article = await UseCaseFactory.get<Article>('GetArticle', {
      id: Id.fromValue(to.params.id),
      locale: to.params.locale || 'en'
    }).execute()

    next(vm => {
      vm.article = article
    })
  }
})
export default class ArticleComponent extends Vue {
  article: Article | null = null

  @Inject()
  readonly state!: State

  get title() {
    return this.article!.title
  }

  get body() {
    return this.article!.body.toHtml()
  }
}
</script>

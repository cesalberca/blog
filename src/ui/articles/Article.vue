<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <div v-html="body"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UseCaseFactory } from '../../application'
import { Article, Id } from '../../domain'

@Component<ArticleComponent>({
  async beforeRouteEnter(to, _options, next) {
    if (to.name === undefined) {
      this.$router.push({ name: 'Error' })
      return
    }

    const article = await UseCaseFactory.get<Article>('GetArticle', {
      id: Id.fromValue(to.name)
    }).execute()

    next(vm => {
      vm.article = article
    })
  }
})
export default class ArticleComponent extends Vue {
  article: Article | null = null

  get title() {
    return this.article!.title
  }

  get body() {
    return this.article!.body.toHtml()
  }
}
</script>

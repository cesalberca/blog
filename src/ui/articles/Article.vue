<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <div class="article" v-html="body"></div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { UseCaseFactory } from '../../application'
import { Article, Id } from '../../domain'
import { State, VueStateManager } from '../state'

@Component<ArticleComponent>({
  async beforeRouteEnter(to, _from, next) {
    if (to.name === undefined) {
      return
    }

    const article = await UseCaseFactory.get<Article>('GetArticle', {
      id: Id.fromValue(to.params.id),
      locale: VueStateManager.instance.state.locale
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
<style>
.article code,
.article pre {
  border-radius: 5px;
}

.article pre {
  width: calc(var(--body-width) * 1.2);
  margin-left: calc(var(--body-width) * -0.2 / 2);
  background-color: var(--code-background);
  overflow-x: scroll;
  padding: var(--medium-size);
}

.article code {
  background-color: var(--code-background);
  padding: var(--base);
}

.article pre code {
  padding: 0;
  background-color: transparent;
}
</style>

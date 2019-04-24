<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <header>
      <span class="date">{{ article.date.format() }}</span>
      <span class="locale">{{ articleLocale }}</span>
    </header>
    <div class="article" v-html="body"></div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue, Watch } from 'vue-property-decorator'
import { Article, Id } from '../../domain'
import { VueStateManager } from '../state'
import Prism from 'prismjs'
import { GetArticle } from '../../application/useCases'
import { TranslationService } from '../../domain/TranslationService'
import { State } from '../../application/state'

@Component<ArticleComponent>({
  async beforeRouteEnter(to, _from, next) {
    if (to.name === undefined) {
      return
    }

    const article = await GetArticle.create({
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

  @Inject()
  readonly translationService!: TranslationService

  @Watch('state.locale')
  async onLocaleChange() {
    this.article = await GetArticle.create({
      id: Id.fromValue(this.$route.params.id),
      locale: VueStateManager.instance.state.locale
    }).execute()
  }

  mounted() {
    Prism.highlightAll()
  }

  get articleLocale() {
    return this.translationService.toString(this.article!.locale)
  }

  get title() {
    return this.article!.title
  }

  get body() {
    return this.article!.body.toHtml()
  }
}
</script>
<style>
header {
  display: flex;
}

.date {
  font-style: italic;
}

.locale {
  margin-left: var(--small-size);
  background-color: var(--code-background);
  padding: var(--base);
  border-radius: 5px;
  line-height: 1;
}

.article code,
.article pre {
  border-radius: 5px;
}

.article pre {
  width: calc(var(--body-width) * 1.2);
  margin-left: calc(var(--body-width) * -0.2 / 2);
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

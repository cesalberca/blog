<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <header>
      <span class="date">{{ article.date.format() }}</span>
      <span class="locale">{{ articleLocale }}</span>
    </header>
    <div class="article" v-html="body"></div>
    <SocialLinks :body="article.getSummary()" />
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
import SocialLinks from './SocialLinks.vue'

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
      vm.highlight()
    })
  },
  components: {
    SocialLinks
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
    this.highlight()
  }

  highlight() {
    this.$nextTick(() => {
      Prism.highlightAll()
    })
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
<style scoped>
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
</style>
<style>
.article p {
  margin-top: var(--medium-size);
}
</style>

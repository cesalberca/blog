<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <header>
      <span class="date">{{ article.date.format() }}</span>
      <x-tag class="locale">{{ articleLocale }}</x-tag>
    </header>
    <x-markdown class="article" :body="body"></x-markdown>
    <x-social-links class="social-links" :body="article.getSummary()" />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue, Watch } from 'vue-property-decorator'
import { Article, Id } from '../../domain'
import { VueStateManager } from '../state'
import { GetArticle } from '../../application/useCases'
import { TranslationService } from '../../domain/TranslationService'
import { State } from '../../application/state'
import XSocialLinks from './XSocialLinks.vue'
import XMarkdown from '../commons/XMarkdown.vue'
import XTag from '../commons/XTag.vue'

@Component<ArticleComponent>({
  name: 'XArticle',
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
  },
  components: {
    XTag,
    XMarkdown,
    XSocialLinks
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

  get articleLocale() {
    return this.translationService.toString(this.article!.locale)
  }

  get title() {
    return this.article!.title
  }

  get body() {
    return this.article!.body
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
}

.social-links {
  margin-bottom: var(--big-size);
}

.article ::v-deep p {
  margin-top: var(--medium-size);
}
</style>

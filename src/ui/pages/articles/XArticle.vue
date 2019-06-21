<template>
  <article v-if="article">
    <x-hero :image="article.image" class="hero">
      <h1 class="title">{{ article.title }}</h1>
    </x-hero>
    <x-page>
      <header>
        <span class="date">{{ article.date.format() }}</span>
        <x-tag class="locale">{{ articleLocale }}</x-tag>
      </header>
      <x-markdown class="article" :body="body"></x-markdown>
      <x-social-links class="social-links" :body="article.getSummary()" />
    </x-page>
  </article>
</template>

<script lang="ts">
import { Component, Inject, Vue, Watch } from 'vue-property-decorator'
import XSocialLinks from './XSocialLinks.vue'
import { TranslationService } from '../../../domain/TranslationService'
import { State } from '../../../application/state'
import { GetArticle } from '../../../application/useCases'
import { Article, Id } from '../../../domain/articles'
import { VueStateManager } from '../../state'
import XMarkdown from '../../commons/XMarkdown.vue'
import XTag from '../../commons/XTag.vue'
import XHero from '../../commons/XHero.vue'
import XPage from '../../commons/XPage.vue'

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
    XPage,
    XHero,
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

.hero {
  margin-bottom: var(--medium-size);
}

.title {
  filter: invert(1);
  text-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.5);
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

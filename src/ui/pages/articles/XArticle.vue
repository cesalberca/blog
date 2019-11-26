<template>
  <article v-if="article" class="article">
    <x-hero :image="article.image" class="hero">
      <h1 class="title">{{ article.title }}</h1>
    </x-hero>
    <x-page>
      <header class="header">
        <span class="date">{{ date }}</span>
        <span class="dash">—</span>
        <span class="time">{{ article.getReadingTime().minutes }} {{ minutes }}</span>
        <x-tag class="locale">{{ articleLocale }}</x-tag>
      </header>
      <x-markdown class="article" :body="body"></x-markdown>
      <x-social-links class="social-links" :body="article.getSummary()" />
    </x-page>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import XSocialLinks from './XSocialLinks.vue'
import { TranslationService } from '../../../domain/TranslationService'
import XMarkdown from '../../components/XMarkdown.vue'
import XTag from '../../components/XTag.vue'
import XHero from '../../components/XHero.vue'
import XPage from '../../components/XPage.vue'
import { Translate } from '../../components/Translate'
import { TYPES } from '../../../types'
import { GetArticleUseCase } from '../../../application/useCases/GetArticleUseCase'
import { State } from '../../../application/state/State'
import { Article } from '../../../domain/articles/Article'
import { Id } from '../../../domain/Id'
import { VueStateManager } from '../../state/VueStateManager'
import { Inject } from '../../../inject'
import { ContainerFactory } from '../../../ContainerFactory'

@Component<ArticleComponent>({
  name: 'XArticle',
  async beforeRouteEnter(to, _from, next) {
    if (to.name === undefined) {
      return
    }

    const article = await ContainerFactory.instance()
      .get<GetArticleUseCase>(TYPES.GET_ARTICLE_USE_CASE)
      .execute({
        id: Id.fromValue(to.params.id),
        locale: VueStateManager.instance.state.locale
      })

    next(vm => {
      vm.article = article
      vm.window.document.documentElement.style.setProperty('--navbar-background', 'transparent')
      vm.window.document.documentElement.style.setProperty('--navbar-position', 'absolute')
      vm.window.document.documentElement.style.setProperty('--navbar-text-shadow', '0 0 10px black')
    })
  },
  components: {
    XPage,
    XHero,
    XTag,
    XMarkdown,
    XSocialLinks
  },
  async beforeRouteLeave(_to, _from, next) {
    this.window.document.documentElement.style.removeProperty('--navbar-background')
    this.window.document.documentElement.style.removeProperty('--navbar-position')
    this.window.document.documentElement.style.removeProperty('--navbar-text-shadow')
    next()
  }
})
export default class ArticleComponent extends Vue {
  article: Article | null = null

  @Inject(TYPES.STATE)
  readonly state!: State

  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  @Inject(TYPES.WINDOW)
  readonly window!: Window

  @Watch('state.locale')
  async onLocaleChange() {
    this.article = await ContainerFactory.instance()
      .get<GetArticleUseCase>(TYPES.GET_ARTICLE_USE_CASE)
      .execute({
        id: Id.fromValue(this.$route.params.id),
        locale: VueStateManager.instance.state.locale
      })
  }

  get date() {
    return this.article!.date.format(this.translationService.toString(this.state.locale))
  }

  get minutes() {
    return this.translate('_minutes')
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
.header {
  display: flex;
}

.hero {
  margin-bottom: var(--medium-size);
}

.title {
  filter: invert(1);
  text-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.5);
}

.header > * {
  margin-right: var(--small-size);
}

.date {
  font-style: italic;
}

.dash {
  color: var(--primary-color);
}

.time {
  font-style: italic;
}

.locale {
  margin-left: var(--small-size);
}

.social-links {
  margin-bottom: var(--big-size);
}

.article ::v-deep p {
  margin-bottom: var(--medium-size);
}
</style>

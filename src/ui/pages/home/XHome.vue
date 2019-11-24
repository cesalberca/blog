<template>
  <main>
    <div class="hero">
      <div class="wrapper">
        <header>
          <h1 class="title" v-html="heroTitle"></h1>
          <small class="caption" v-html="heroCaption"></small>
        </header>
        <img class="photo" :src="me" alt="César Alberca" />
      </div>
    </div>
    <x-page>
      <h2 class="articles">{{ articlesTitle }}</h2>
      <x-article-excerpt
        v-for="article in articles"
        :key="article.id.slug"
        :excerpt="article.getExcerpt()"
        @on-action="navigateToArticle"
      />
    </x-page>
  </main>
</template>

<script lang="ts">
import { Component, Inject, Vue, Watch } from 'vue-property-decorator'
import { GetAllArticlesUseCase } from '../../../application/useCases'
import { TranslationService } from '../../../domain/TranslationService'
import { State } from '../../../application/state'
import { Article, Id } from '../../../domain/articles'
import { Translate } from '../../commons/Translate'
import { VueStateManager } from '../../state'
import XArticleExcerpt from '../../commons/XArticleExcerpt.vue'
import XPage from '../../commons/XPage.vue'
import XHero from '../../commons/XHero.vue'
import me from './../../assets/images/me.png'
import { NavigateToArticle } from '../../actions/NavigateToArticle'

@Component<XHome>({
  name: 'XHome',
  async beforeRouteEnter(_to, _from, next) {
    const articles = await GetAllArticlesUseCase.create({
      locale: VueStateManager.instance.state.locale
    }).execute()

    next(vm => {
      vm.articles = articles
    })
  },
  components: {
    XHero,
    XPage,
    XArticleExcerpt
  }
})
export default class XHome extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  @Inject()
  readonly translate!: Translate

  articles: Article[] = []
  me = me

  @Watch('state.locale')
  async onLocaleChange() {
    this.articles = await GetAllArticlesUseCase.create({
      locale: VueStateManager.instance.state.locale
    }).execute()
  }

  navigateToArticle(id: Id) {
    NavigateToArticle.create({
      router: this.$router,
      id,
      translationService: this.translationService,
      locale: this.state.locale
    }).execute()
  }

  get articlesTitle() {
    return this.translate('home_articles')
  }

  get heroTitle() {
    return this.translate('home_heroTitle')
  }

  get heroCaption() {
    return this.translate('home_heroCaption')
  }
}
</script>

<style scoped>
.hero {
  background-color: var(--primary-color);
}

.wrapper {
  display: flex;
  margin: 0 auto;
  max-width: var(--body-width);
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--medium-size);
}

.title {
  color: var(--white-color);
  font-size: var(--title-text);
}

.articles {
  margin-top: 0;
}

.caption {
  --bold-color: var(--white-color);
  font-size: var(--body-text);
  color: var(--white-color);
}

.photo {
  transform: scale(-1, 1);
  mix-blend-mode: soft-light;
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>

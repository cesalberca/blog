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
import { Component, Vue, Watch } from 'vue-property-decorator'
import { TranslationService } from '../../../domain/translation-service'
import { Translate } from '../../components/translate'
import XArticleExcerpt from '../../components/x-article-excerpt.vue'
import XPage from '../../components/x-page.vue'
import XHero from '../../components/x-hero.vue'
import me from './../../assets/images/me.png'
import { NavigateToArticle } from '../../actions/navigate-to-article'
import { TYPES } from '../../../types'
import { GetAllArticlesUseCase } from '../../../application/use-cases/get-all-articles-use-case'
import { State } from '../../../application/state/state'
import { Article } from '../../../domain/articles/article'
import { Id } from '../../../domain/id'
import { Inject } from '../../../inject'
import { Container } from '../../../container'
import { StateManager } from '../../../application/state/state-manager'

@Component<XHome>({
  name: 'x-home',
  async beforeRouteEnter(_to, _from, next) {
    const articles = await Container.instance()
      .get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .execute()

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
  @Inject(TYPES.TRANSLATION_SERVICE)
  readonly translationService!: TranslationService

  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  articles: Article[] = []
  me = me

  @Watch('state.locale')
  async onLocaleChange() {
    this.articles = await Container.instance()
      .get<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .execute()
  }

  navigateToArticle(id: Id) {
    NavigateToArticle.create({
      router: this.$router,
      id,
      translationService: this.translationService,
      locale: this.stateManager.state.locale
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
  max-width: 500px;
  transform: scale(-1, 1);
  mix-blend-mode: soft-light;
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>

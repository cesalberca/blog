<template>
  <nav class="navbar">
    <router-link class="link" to="/">{{ translations.home }}</router-link>
    <router-link class="link" to="/articles">{{ translations.articles }}</router-link>
    <router-link class="link" to="/talks">{{ translations.talks }}</router-link>
    <router-link class="link" to="/about">{{ translations.about }}</router-link>
  </nav>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { TranslationService } from '../../application'
import { State } from '../state/State'

@Component
export default class Navbar extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  get translations() {
    return {
      home: this.translationService.translate(this.state.locale, 'home_title'),
      about: this.translationService.translate(this.state.locale, 'about_title'),
      talks: this.translationService.translate(this.state.locale, 'talks_title'),
      articles: this.translationService.translate(this.state.locale, 'article_title')
    }
  }
}
</script>
<style scoped>
.navbar {
  max-width: var(--body-width);
  margin: 0 auto;
  display: flex;
}
.link {
  margin-right: calc(var(--base) * 2);
}
</style>

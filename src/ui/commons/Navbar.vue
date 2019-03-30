<template>
  <nav class="navbar">
    <div class="links">
      <router-link to="/">{{ translations.home }}</router-link>
      <router-link to="/articles">{{ translations.articles }}</router-link>
      <router-link to="/talks">{{ translations.talks }}</router-link>
      <router-link to="/about">{{ translations.about }}</router-link>
    </div>
    <Options class="options" />
  </nav>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { TranslationService } from '../../application'
import { State } from '../state'
import { Options } from './index'

@Component({
  components: {
    Options
  }
})
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
  margin: 0 auto var(--medium-size);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.links > * {
  font-size: var(--title-size);
  margin-right: var(--medium-size);
}

.options {
}
</style>

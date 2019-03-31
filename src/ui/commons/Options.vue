<template>
  <div>
    <label>
      {{ languageLabel }}
      <select v-model="locale" @change="changeLocale(locale)">
        <option v-for="locale in locales" :key="locale.value" :value="locale.value">{{
          locale.text
        }}</option>
      </select>
    </label>
    <label>
      {{ themeLabel }}
      <select v-model="theme" @change="changeTheme(theme)">
        <option v-for="theme in themes" :key="theme.value" :value="theme.value">{{
          theme.text
        }}</option>
      </select>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { State } from '../state'
import { TranslationService } from '../../application'
import { Theme } from '../theme/Theme'
import { Locale } from '../../infraestructure/language'

@Component
export default class Options extends Vue {
  @Inject()
  state!: State

  @Inject()
  translationService!: TranslationService

  theme = Theme.DEFAULT
  themes = [{ text: this.light, value: Theme.LIGHT }, { text: this.dark, value: Theme.DARK }]

  locale = Locale.DEFAULT
  locales = [{ text: this.en, value: Locale.EN }, { text: this.es, value: Locale.ES }]

  get en() {
    return this.translationService.translate(this.state.locale, '_en')
  }

  get es() {
    return this.translationService.translate(this.state.locale, '_es')
  }

  get light() {
    return this.translationService.translate(this.state.locale, '_light')
  }

  get dark() {
    return this.translationService.translate(this.state.locale, '_dark')
  }

  get themeLabel() {
    return this.translationService.translate(this.state.locale, '_theme')
  }

  get languageLabel() {
    return this.translationService.translate(this.state.locale, '_language')
  }

  changeLocale(locale: Locale) {
    this.state.locale = locale
  }

  changeTheme(theme: Theme) {
    this.state.theme = theme
  }
}
</script>

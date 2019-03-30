<template>
  <div>
    <label>
      {{ languageLabel }}
      <select v-model="locale" @change="changeLocale">
        <option value="es">es</option>
        <option value="en">en</option>
      </select>
    </label>
    <label>
      {{ themeLabel }}
      <select v-model="theme" @change="changeTheme">
        <option value="light">{{ light }}</option>
        <option value="dark">{{ dark }}</option>
      </select>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { State } from '../state'
import { TranslationService } from '../../application'
import { ThemeService } from '../theme/ThemeService'

@Component
export default class Options extends Vue {
  @Inject()
  state!: State

  @Inject()
  translationService!: TranslationService

  @Inject()
  themeService!: ThemeService

  locale: string = this.translationService.toString(this.state.locale)

  theme: string = this.themeService.toString(this.state.theme)

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

  changeLocale() {
    this.state.locale = this.translationService.toLocale(this.locale)
  }

  changeTheme() {
    this.state.theme = this.themeService.toTheme(this.theme)
  }
}
</script>

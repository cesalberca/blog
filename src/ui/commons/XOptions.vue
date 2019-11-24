<template>
  <div class="options">
    <label>
      <select v-model="locale" @change="changeLocale(locale)">
        <option v-for="locale in locales" :key="locale.value" :value="locale.value">{{
          locale.text
        }}</option>
      </select>
    </label>
    <label>
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
import { Theme } from '../theme/Theme'
import { Locale } from '../../domain/language'
import { Translate } from './Translate'
import { State } from '../../application/state'

@Component({ name: 'XOptions' })
export default class XOptions extends Vue {
  @Inject()
  readonly translate!: Translate

  @Inject()
  readonly state!: State

  theme = Theme.DEFAULT
  themes = [
    { text: this.light, value: Theme.LIGHT },
    { text: this.dark, value: Theme.DARK }
  ]

  locale = Locale.DEFAULT
  locales = [
    { text: this.en, value: Locale.EN },
    { text: this.es, value: Locale.ES }
  ]

  get en() {
    return this.translate('_en')
  }

  get es() {
    return this.translate('_es')
  }

  get light() {
    return this.translate('_light')
  }

  get dark() {
    return this.translate('_dark')
  }

  changeLocale(locale: Locale) {
    this.state.locale = locale
  }

  changeTheme(theme: Theme) {
    this.state.theme = theme
  }
}
</script>
<style scoped>
.options {
  display: flex;
  flex-direction: row;
}

select {
  margin-right: var(--small-size);
  background: var(--blue-dark-color-1);
  color: var(--white-color);
  -webkit-appearance: none;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  padding: var(--small-size);
  border-radius: 0;
}
</style>

<template>
  <div>
    <label>
      <select v-model="locale" @change="changeLocale">
        <option value="es">es</option>
        <option value="en">en</option>
      </select>
    </label>
    <label>
      <select v-model="theme" @change="changeTheme">
        <option value="dark">Dark</option>
        <option value="ligth">Light</option>
      </select>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { State } from '../state'
import { TranslationService } from '../../application'

@Component
export default class Options extends Vue {
  @Inject()
  state!: State

  @Inject()
  translationService!: TranslationService

  locale: string = this.translationService.toString(this.state.locale)
  theme = this.state.theme

  changeLocale() {
    this.state.locale = this.translationService.toLocale(this.locale)
  }

  changeTheme() {
    this.state.theme = this.theme
  }
}
</script>

<template>
  <div>
    <label>
      <select v-model="locale" @change="changeLocale">
        <option value="es">es</option>
        <option value="en">en</option>
      </select>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { State } from '../state'

@Component
export default class Options extends Vue {
  @Inject()
  state!: State

  locale = this.state.locale

  changeLocale() {
    this.state.locale = this.locale
  }
}
</script>

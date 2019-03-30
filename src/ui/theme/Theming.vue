<template>
  <div :class="{ [theme]: true }">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { State } from '../state'
import { Theme } from './Theme'

@Component
export default class Theming extends Vue {
  @Inject()
  state!: State

  get theme(): string {
    switch (this.state.theme) {
      case Theme.DARK:
        return 'dark'
      case Theme.LIGHT:
      default:
        return 'light'
    }
  }
}
</script>

<style scoped>
body {
  background-color: var(--background-color);
}

.dark {
  --foreground-color: var(--white-color);
  --background-color: var(--black-color);
  --link-color: var(--white-color);
}

.light {
  --foreground-color: var(--black-color);
  --background-color: var(--white-color);
}

.dark,
.light {
  height: 100%;
  color: var(--foreground-color);
  background-color: var(--background-color);
}
</style>

<template>
  <div class="wrapper" :class="{ [theme]: true }">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { Theme } from './Theme'
import { State } from '../../application/state/State'

@Component({ name: 'XTheming' })
export default class XTheming extends Vue {
  @Inject()
  readonly state!: State

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
* {
  --transition-duration: 0.25s;
  transition: var(--transition-duration) ease-in-out background-color,
    var(--transition-duration) ease-in-out color;
}

body {
  background-color: var(--background-color);
}

.wrapper {
  height: 100%;
}

.dark,
.light {
  color: var(--foreground-color);
  background-color: var(--background-color);
}
</style>

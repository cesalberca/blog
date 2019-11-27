<template>
  <div class="wrapper" :class="{ [theme]: true }">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Theme } from './theme'
import { Inject } from '../../inject'
import { TYPES } from '../../types'
import { StateManager } from '../../application/state/state-manager'

@Component({ name: 'x-theming' })
export default class XTheming extends Vue {
  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  get theme(): string {
    switch (this.stateManager.state.theme) {
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

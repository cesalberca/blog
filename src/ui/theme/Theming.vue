<template>
  <div :class="{ [theme]: true }">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { Theme } from './Theme'
import { State } from '../../application/state'

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
* {
  --transition-duration: 0.25s;
  transition: var(--transition-duration) ease-in-out background-color,
    var(--transition-duration) ease-in-out color;
}
body {
  background-color: var(--background-color);
}

.dark {
  --foreground-color: var(--white-color);
  --background-color: var(--dark-blue);
  --link-color: var(--white-color);
  --primary-color: var(--blue-light-color);
}

.light {
  --foreground-color: var(--black-color);
  --background-color: var(--white-color);
  --title-color: var(--foreground-color);
}

.dark,
.light {
  height: 100%;
  color: var(--foreground-color);
  background-color: var(--background-color);
}
</style>

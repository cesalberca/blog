<template>
  <div class="page">
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Page extends Vue {}
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  max-width: var(--body-width);
}
</style>

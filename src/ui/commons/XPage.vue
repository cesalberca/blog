<template>
  <div class="page">
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ name: 'XPage' })
export default class XPage extends Vue {}
</script>

<style scoped>
.page {
  padding: var(--medium-size);
}

.wrapper {
  margin: 0 auto;
  max-width: var(--body-width);
}
</style>

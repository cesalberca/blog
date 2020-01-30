<template>
  <span class="tag"><slot></slot></span>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ name: 'x-tag' })
export default class XTag extends Vue {}
</script>

<style scoped>
.tag {
  color: var(--white-color);
  background-color: var(--dark-blue);
  padding: var(--base);
  border-radius: 5px;
  line-height: 1;
}
</style>

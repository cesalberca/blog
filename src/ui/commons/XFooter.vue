<template>
  <footer class="footer">
    <div class="wrapper">
      <x-links :direction="direction" class="links" />
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import XLinks from './XLinks.vue'
import { Direction } from './Direction'

@Component({ name: 'XFooter', components: { XLinks } })
export default class XFooter extends Vue {
  direction = Direction.VERTICAL
}
</script>

<style scoped>
.footer {
  padding: calc(var(--base) * 6) 0;
  background-color: var(--blue-dark-color);
}

.wrapper {
  max-width: var(--body-width);
  margin: 0 auto;
}

.links {
  --primary-color: white;
  --title-size: var(--body-size);
}
</style>

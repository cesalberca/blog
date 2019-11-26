<template>
  <main>
    <x-theming class="full-height">
      <x-navbar />
      <router-view />
    </x-theming>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import XTheming from './theme/x-theming.vue'
import XNavbar from './components/x-navbar.vue'

@Component({
  name: 'x-app',
  components: {
    XTheming,
    XNavbar
  }
})
export default class XApp extends Vue {}
</script>
<style scoped>
.full-height {
  min-height: 100vh;
}
</style>

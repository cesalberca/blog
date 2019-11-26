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
import XTheming from './theme/XTheming.vue'
import XNavbar from './components/XNavbar.vue'

@Component({
  name: 'XApp',
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

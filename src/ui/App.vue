<template>
  <main>
    <Injector>
      <Navbar />
      <router-view />
    </Injector>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Navbar } from './commons'
import Injector from './Injector.vue'

@Component({
  components: {
    Injector,
    Navbar
  }
})
export default class App extends Vue {}
</script>

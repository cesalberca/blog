<template>
  <main>
    <Injector>
      <Navbar />
      <Options />
      <router-view />
    </Injector>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Navbar, Options } from './commons'
import { Injector } from './'

@Component({
  components: {
    Options,
    Injector,
    Navbar
  }
})
export default class App extends Vue {}
</script>

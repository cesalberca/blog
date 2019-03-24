<template>
  <nav>
    <router-link to="/">Home</router-link> |<router-link to="/articles">Articles</router-link>
    |<router-link to="/about">About</router-link>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {}
</script>

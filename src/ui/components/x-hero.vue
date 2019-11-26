<template>
  <div class="image" :style="style">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ name: 'x-hero' })
export default class XHero extends Vue {
  @Prop({ type: String, required: true })
  image!: string

  get style() {
    return { 'background-image': `url(${this.image})` }
  }
}
</script>

<style scoped>
.image {
  --title-color: var(--black-color);
  height: 45vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 8px 20px 0 hsla(0, 0%, 0%, 0.5);
}

.wrapper {
  mix-blend-mode: difference;
}
</style>

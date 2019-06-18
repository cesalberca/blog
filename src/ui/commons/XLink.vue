<template>
  <a :href="to" v-on="$listeners"><slot></slot></a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'XLink'
})
export default class XLink extends Vue {
  @Prop({ type: String })
  to?: string
}
</script>

<style scoped>
a {
  color: var(--link-color);
  text-decoration: none;
  transition: ease color 0.5s;
  transform-style: preserve-3d;
  position: relative;
}

a:after {
  --link-offset: 3px;
  content: '';
  transform: translateZ(-1px);
  width: calc(100% + var(--link-offset) * 2);
  height: 1px;
  position: absolute;
  background-color: var(--link-color);
  bottom: calc(var(--link-offset) * -1);
  transition: ease height 0.25s;
  left: calc(var(--link-offset) * -1);
  right: calc(100% + var(--link-offset));
  z-index: -1;
  display: inline-block;
}

a:hover:after {
  height: calc(100% + 2px);
}

a:hover {
  color: var(--link-hover-color);
}
</style>

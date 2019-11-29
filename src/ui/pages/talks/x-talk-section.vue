<template>
  <section>
    <h3 class="title">
      <strong>{{ title }}</strong>
    </h3>
    <slot>
      <p>{{ description }}</p>
    </slot>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({ name: 'x-talk-section' })
export default class XTalkSection extends Vue {
  @Prop()
  title!: string

  @Prop()
  description!: string
}
</script>

<style scoped>
.talk > section {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.title {
  margin-top: var(--small-size);
  margin-bottom: 0;
}
</style>

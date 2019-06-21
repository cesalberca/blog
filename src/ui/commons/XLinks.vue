<template>
  <div :class="[links]" class="links">
    <router-link to="/" exact>{{ translations.home }}</router-link>
    <!--<router-link to="/articles">{{ translations.articles }}</router-link>-->
    <router-link to="/talks">{{ translations.talks }}</router-link>
    <router-link to="/about">{{ translations.about }}</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'
import { Translate } from './Translate'
import { Direction } from './Direction'

@Component({ name: 'XLinks' })
export default class XLinks extends Vue {
  @Inject()
  readonly translate!: Translate

  @Prop({ default: Direction.HORIZONTAL })
  direction!: Direction

  get links() {
    switch (this.direction) {
      case Direction.HORIZONTAL:
        return 'horizontal'
      case Direction.VERTICAL:
        return 'vertical'
      default:
        return ''
    }
  }

  get translations() {
    return {
      home: this.translate('home_title'),
      about: this.translate('about_title'),
      talks: this.translate('talks_title'),
      articles: this.translate('article_title')
    }
  }
}
</script>

<style scoped>
.horizontal,
.vertical {
  display: flex;
}

.horizontal {
  flex-direction: row;
}

.vertical {
  flex-direction: column;
}

.links > * {
  font-size: var(--title-text);
  color: var(--primary-color);
  margin-right: var(--medium-size);
  transition: 0.25s ease opacity;
  text-decoration: none;
  width: max-content;
}

.links > *:hover {
  opacity: var(--active-opacity);
}

.links > *:after {
  content: none;
}

.router-link-active {
  color: var(--primary-color);
}
</style>

import './assets/variables-typograghy.css'
import './assets/variables-color.css'
import './assets/variables-size.css'
import './assets/base.css'
import './assets/theme.css'
import './assets/dark-theme.css'
import './assets/light-theme.css'
import './assets/code-theme.css'
import { VueConstructor } from 'vue'
import { Router } from './Router'
import VueRouter from 'vue-router'
import { ServiceWorkerRegisterer } from './ServiceWorkerRegisterer'
import VueAnalytics from 'vue-analytics'

export class Application {
  constructor(
    private readonly vue: VueConstructor,
    private readonly router: Router,
    private readonly analytics: typeof VueAnalytics
  ) {}

  create(app: VueConstructor) {
    this.vue.use(VueRouter)
    this.vue.config.productionTip = false
    this.vue.use(this.analytics, { id: 'UA-66392350-1' })
    ServiceWorkerRegisterer.create()

    new this.vue({
      router: this.router.value,
      render: h => h(app)
    }).$mount('#app')
  }
}

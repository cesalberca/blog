import './assets/variables-typograghy.css'
import './assets/variables-color.css'
import './assets/variables-size.css'
import './assets/base.css'
import './assets/theme.css'
import './assets/dark-theme.css'
import './assets/light-theme.css'
import './assets/code-theme.css'
import { VueConstructor } from 'vue'
import VueRouter from 'vue-router'
import { ServiceWorkerRegisterer } from './service-worker-registerer'
import VueAnalytics from 'vue-analytics'
import { Injectable } from '../injectable'
import { Inject } from '../inject'
import { TYPES } from '../types'
import { Router } from './router'

@Injectable()
export class Application {
  constructor(
    @Inject(TYPES.VUE) private readonly vue: VueConstructor,
    @Inject(TYPES.ROUTER) private readonly router: Router,
    @Inject(TYPES.VUE_ROUTER) private readonly vueRouter: typeof VueRouter,
    @Inject(TYPES.VUE_ANALYTICS) private readonly analytics: typeof VueAnalytics,
    @Inject(TYPES.SERVICE_WORKER_REGISTERER)
    private readonly serviceWorkerRegisterer: ServiceWorkerRegisterer
  ) {}

  create(app: VueConstructor) {
    this.vue.use(this.vueRouter)
    this.vue.config.productionTip = false
    this.vue.use(this.analytics, { id: 'UA-66392350-1' })
    this.serviceWorkerRegisterer.register()

    return new this.vue({
      router: this.router.value,
      render: create => create(app)
    }).$mount('#app')
  }
}

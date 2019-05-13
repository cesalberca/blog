import './assets/variables-typograghy.css'
import './assets/variables-color.css'
import './assets/variables-size.css'
import './assets/base.css'
import './assets/theme.css'
import './assets/dark-theme.css'
import './assets/light-theme.css'
import './assets/code-theme.css'
import './assets/scrollbar.css'
import { VueConstructor } from 'vue'
import { ServiceWorkerRegisterer } from './ServiceWorkerRegisterer'
import { Router } from './Router'
import VueRouter from 'vue-router'

export class Application {
  public constructor(
    private readonly vue: VueConstructor,
    private readonly router: Router,
    private readonly serviceWorker: ServiceWorkerRegisterer
  ) {}

  public bootstrap(app: VueConstructor) {
    this.vue.use(VueRouter)
    this.vue.config.productionTip = false
    this.serviceWorker.register()

    new this.vue({
      router: this.router.value,
      render: h => h(app)
    }).$mount('#app')
  }
}

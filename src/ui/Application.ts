import { VueConstructor } from 'vue'
import './ServiceWorkerRegisterer'
import Router from 'vue-router'
import './assets/base.css'
import './assets/variables-color.css'
import './assets/theme.css'
import { ServiceWorkerRegisterer } from './ServiceWorkerRegisterer'

export class Application {
  public constructor(
    private readonly vue: VueConstructor,
    private readonly router: Router,
    private readonly serviceWorker: ServiceWorkerRegisterer
  ) {}

  public bootstrap(app: VueConstructor) {
    this.vue.use(Router)
    this.vue.config.productionTip = false
    this.serviceWorker.register()

    new this.vue({
      router: this.router,
      render: h => h(app)
    }).$mount('#app')
  }
}

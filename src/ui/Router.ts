import { VueRouter } from 'vue-router/types/router'

export class Router {
  private readonly _value: VueRouter

  private constructor(private readonly vueRouter: typeof VueRouter) {
    this._value = new this.vueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './home/Home.vue')
        },
        {
          path: '/articles',
          name: 'articles',
          component: () => import(/* webpackChunkName: "articles" */ './articles/Articles.vue')
        },
        {
          path: '/article/:id',
          name: 'article',
          component: () => import(/* webpackChunkName: "article" */ './articles/Article.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ './about/About.vue')
        },
        {
          path: '/talks',
          name: 'talks',
          component: () => import(/* webpackChunkName: "talks" */ './talks/Talks.vue')
        }
      ]
    })
  }

  get value(): VueRouter {
    return this._value
  }

  public static create(vueRouter: typeof VueRouter) {
    return new Router(vueRouter)
  }
}

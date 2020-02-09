import { Inject } from '../domain/types/inject'
import { TYPES } from '../types'
import VueRouter from 'vue-router'
import { Injectable } from '../domain/types/injectable'

@Injectable()
export class Router {
  readonly value: VueRouter

  constructor(@Inject(TYPES.VUE_ROUTER) private readonly vueRouter: typeof VueRouter) {
    this.value = new this.vueRouter()
  }
}

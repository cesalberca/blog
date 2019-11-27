import Vue from 'vue'
import { Observer } from '../../domain/observer'
import { State } from '../../application/state/state'
import { BaseStateManager } from '../../application/state/base-state-manager'
import { Injectable } from '../../injectable'

@Injectable()
export class VueStateManager extends BaseStateManager implements Observer {
  private readonly stateManager = new BaseStateManager()
  private _state: State

  constructor() {
    super()
    this._state = Vue.observable(new State())
    this.stateManager.register(this)
  }

  get state(): State {
    return this._state
  }

  set state(value: State) {
    this._state = value
    this.notifyAll()
  }

  notify() {
    this._state.shouldReload = true
  }
}

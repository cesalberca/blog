import { VueConstructor } from 'vue'
import { Observer } from '../../infraestructure/Observer'
import { State } from '../../application/state/State'
import { StateManager } from '../../application/state/StateManager'
import { Subject } from '../../infraestructure/Subject'

export class VueStateManager implements Observer {
  private static _instance: VueStateManager | null = null
  private _state: State = new State()
  private readonly stateManager: StateManager = new StateManager()

  static get instance(): VueStateManager {
    if (this._instance === null) {
      this._instance = new VueStateManager()
    }
    return this._instance
  }

  create(vue: VueConstructor, subject: Subject) {
    const state = this.stateManager.state
    this._state = vue.observable(state)
    subject.register(this)
    return this
  }

  register(observer: Observer) {
    this.stateManager.register(observer)
  }

  get state(): State {
    return this._state
  }

  notify() {
    this._state.shouldReload = true
  }
}

import { VueConstructor } from 'vue'
import { StateManager, State } from '../../application/state'
import { Observer, Subject } from '../../infraestructure'

export class VueStateManager implements Observer {
  private static _instance: VueStateManager | null = null
  private _state: State = new State()
  private readonly stateManager: StateManager = new StateManager()

  public static get instance(): VueStateManager {
    if (this._instance === null) {
      this._instance = new VueStateManager()
    }
    return this._instance
  }

  public create(vue: VueConstructor, serviceWorker: Subject) {
    const state = this.stateManager.state
    this._state = vue.observable(state)
    serviceWorker.register(this)
    return this
  }

  public register(observer: Observer) {
    this.stateManager.register(observer)
  }

  public get state(): State {
    return this._state
  }

  public notify() {
    this._state.shouldReload = true
  }
}

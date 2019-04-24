import { VueConstructor } from 'vue'
import { StateManager } from '../../application/state/StateManager'
import { State } from '../../application/state/State'

export class VueStateManager {
  private static _instance: VueStateManager | null = null
  private _state: State = new State()

  public static get instance(): VueStateManager {
    if (this._instance === null) {
      this._instance = new VueStateManager()
    }
    return this._instance
  }

  public create(vue: VueConstructor) {
    const stateManager = new StateManager()
    const state = stateManager.state
    this._state = vue.observable(state)
    return this
  }

  get state(): State {
    return this._state
  }
}

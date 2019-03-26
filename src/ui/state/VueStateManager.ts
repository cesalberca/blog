import { VueConstructor } from 'vue'
import { StateManager } from './StateManager'
import { State } from './State'

export class VueStateManager {
  private readonly _state: State

  constructor(private readonly vue: VueConstructor) {
    const stateManager = new StateManager()
    const state = stateManager.state
    this._state = this.vue.observable(state)
  }

  get state(): State {
    return this._state
  }
}

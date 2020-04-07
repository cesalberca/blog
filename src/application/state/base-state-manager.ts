import { State } from './state.js'
import { Observer } from '../../domain/types/observer.js'
import { StateManager } from './state-manager.js'
import { Injectable } from '../../domain/types/injectable.js'

@Injectable()
export class BaseStateManager implements StateManager {
  private readonly observers: Observer[] = []

  state = new State()

  notifyAll() {
    this.observers.forEach(observer => observer.notify())
  }

  register(observer: Observer) {
    this.observers.push(observer)
  }
}

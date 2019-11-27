import { State } from './state'
import { Observer } from '../../domain/observer'
import { StateManager } from './state-manager'
import { Injectable } from '../../injectable'

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

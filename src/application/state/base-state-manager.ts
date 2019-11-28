import { State } from './state'
import { Observer } from '../../domain/types/observer'
import { StateManager } from './state-manager'
import { Injectable } from '../../domain/types/injectable'

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

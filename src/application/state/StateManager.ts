import { State } from './State'
import { Observer } from '../../infraestructure/Observer'
import { Subject } from '../../infraestructure/Subject'

export class StateManager implements Subject {
  private readonly observers: Observer[] = []

  state: State

  constructor() {
    this.state = new Proxy(new State(), {
      set: (target: State, p: PropertyKey, value: any, receiver: any): boolean => {
        Reflect.set(target, p, value, receiver)
        this.notifyAll()
        return true
      }
    })
  }

  notifyAll() {
    this.observers.forEach(observer => observer.notify())
  }

  register(observer: Observer) {
    this.observers.push(observer)
  }
}

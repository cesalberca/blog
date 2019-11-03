import { State } from './'
import { Observer, Subject } from '../../infraestructure'

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

import { State } from './'
import { Observer, Subject } from '../../infraestructure'

export class StateManager implements Subject {
  private readonly observers: Observer[] = []

  public state: State

  public constructor() {
    this.state = new Proxy(new State(), {
      set: (target: State, p: PropertyKey, value: any, receiver: any): boolean => {
        Reflect.set(target, p, value, receiver)
        this.notifyAll()
        return true
      }
    })
  }

  public notifyAll() {
    this.observers.forEach(observer => observer.notify())
  }

  public register(observer: Observer) {
    this.observers.push(observer)
  }
}

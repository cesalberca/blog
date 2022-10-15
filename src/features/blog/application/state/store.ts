import { Injectable } from '../../domain/types/injectable'
import { BehaviorSubject, Observable } from 'rxjs'
import { Theme } from './theme'
import type { State } from './state'

@Injectable()
export class Store {
  private readonly behaviorSubject = new BehaviorSubject<State>({
    theme: Theme.DEFAULT,
  })

  observable(): Observable<State> {
    return this.behaviorSubject.asObservable()
  }

  value() {
    return this.behaviorSubject.value
  }

  patch(state: Partial<State>) {
    this.behaviorSubject.next({
      ...this.behaviorSubject.value,
      ...state,
    })
  }
}

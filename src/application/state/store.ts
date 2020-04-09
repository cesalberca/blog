import { Injectable } from '../../domain/types/injectable.js'
import { BehaviorSubject, Observable } from '/web_modules/rxjs.js'
import { Theme } from './theme.js'
import { Locale } from '../../domain/language/locale.js'
import { State } from './state.js'

@Injectable()
export class Store {
  private readonly behaviorSubject = new BehaviorSubject<State>({
    theme: Theme.DEFAULT,
    locale: Locale.DEFAULT
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
      ...state
    })
  }
}

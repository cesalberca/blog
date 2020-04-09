import { Injectable } from '../../domain/types/injectable.js'
import { BehaviorSubject, Observable } from '/web_modules/rxjs.js'
import { Theme } from '../../ui/theme/theme.js'
import { Locale } from '../../domain/language/locale.js'

type Store = { theme: Theme; locale: Locale }

@Injectable()
export class State {
  private readonly behaviorSubject = new BehaviorSubject<Store>({
    theme: Theme.DEFAULT,
    locale: Locale.DEFAULT
  })

  observable(): Observable<Store> {
    return this.behaviorSubject.asObservable()
  }

  value() {
    return this.behaviorSubject.value
  }

  patch(state: Partial<Store>) {
    this.behaviorSubject.next({
      ...this.behaviorSubject.value,
      ...state
    })
  }
}

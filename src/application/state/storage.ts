import { Injectable } from '../../domain/types/injectable.js'
import { Store } from './store.js'
import { Inject } from '../../domain/types/inject.js'
import { tap } from '/web_modules/rxjs/operators.js'
import { TYPES } from '../../types.js'

@Injectable()
export class Storage {
  constructor(@Inject(TYPES.STORE) private readonly store: Store) {}

  setFirstValue() {
    const item = localStorage.getItem('state')

    if (item !== null) {
      this.store.patch(JSON.parse(item))
    }
  }

  start() {
    return this.store.observable().pipe(
      tap(x => {
        localStorage.setItem('state', JSON.stringify(x))
      })
    )
  }
}

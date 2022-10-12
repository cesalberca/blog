import { Injectable } from '../../domain/types/injectable'
import { Store } from './store'
import { Inject } from '../../domain/types/inject'
import { tap } from 'rxjs/operators'
import { TYPES } from '../../../../types'

@Injectable()
export class Persistence {
  private static readonly STATE_KEY = 'state'

  constructor(
    @Inject(TYPES.STORE) private readonly store: Store,
    @Inject(TYPES.STORAGE) private readonly storage: Storage,
  ) {}

  setFirstValue() {
    const item = this.storage.getItem(Persistence.STATE_KEY)

    if (item !== null) {
      this.store.patch(JSON.parse(item))
    }
  }

  start() {
    return this.store.observable().pipe(
      tap(x => {
        this.storage.setItem(Persistence.STATE_KEY, JSON.stringify(x))
      }),
    )
  }
}

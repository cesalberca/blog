import { UseCase } from '../../domain/types/use-case.js'
import { TalksRepository } from '../../domain/talks/talks-repository.js'
import { TYPES } from '../../types.js'
import { Talk } from '../../domain/talks/talk.js'
import { Injectable } from '../../domain/types/injectable.js'
import { Inject } from '../../domain/types/inject.js'
import { Store } from '../state/store.js'
import { Observable } from '/web_modules/rxjs.js'
import { switchMap } from '/web_modules/rxjs/operators.js'

@Injectable()
export class GetTalksGivenUseCase implements UseCase<Talk[]> {
  constructor(
    @Inject(TYPES.TALKS_REPOSITORY) private readonly talksRepository: TalksRepository,
    @Inject(TYPES.STORE) private readonly store: Store
  ) {}

  execute(): Observable<Talk[]> {
    return this.store
      .observable()
      .pipe(switchMap(x => this.talksRepository.findAllByLocale(x.locale)))
  }
}

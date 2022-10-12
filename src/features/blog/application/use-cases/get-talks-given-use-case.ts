import type { UseCase } from '../../domain/types/use-case'
import type { TalksRepository } from '../../domain/talks/talks-repository'
import { Injectable } from '../../domain/types/injectable'
import { Inject } from '../../domain/types/inject'
import type { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { TYPES } from '../../../../types'
import type { Talk } from '../../domain/talks/talk'
import { Store } from '../state/store'

@Injectable()
export class GetTalksGivenUseCase implements UseCase<Talk[]> {
  constructor(
    @Inject(TYPES.TALKS_REPOSITORY) private readonly talksRepository: TalksRepository,
    private readonly store: Store,
  ) {}

  execute(): Observable<Talk[]> {
    return this.store.observable().pipe(switchMap(x => this.talksRepository.findAllByLocale(x.locale)))
  }
}

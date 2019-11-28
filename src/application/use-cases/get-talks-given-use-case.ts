import { Command } from '../../domain/types/command'
import { TalksRepository } from '../../domain/talks/talks-repository'
import { TYPES } from '../../types'
import { Talk } from '../../domain/talks/talk'
import { Injectable } from '../../domain/types/injectable'
import { Inject } from '../../domain/types/inject'
import { StateManager } from '../state/state-manager'

@Injectable()
export class GetTalksGivenUseCase implements Command<Talk[]> {
  constructor(
    @Inject(TYPES.TALKS_REPOSITORY) private readonly talksRepository: TalksRepository,
    @Inject(TYPES.STATE_MANAGER) private readonly stateManager: StateManager
  ) {}

  async execute(): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(this.stateManager.state.locale)
  }
}

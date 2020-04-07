import { Command } from '../../domain/types/command.js'
import { TalksRepository } from '../../domain/talks/talks-repository.js'
import { TYPES } from '../../types.js'
import { Talk } from '../../domain/talks/talk.js'
import { Injectable } from '../../domain/types/injectable.js'
import { Inject } from '../../domain/types/inject.js'
import { StateManager } from '../state/state-manager.js'

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

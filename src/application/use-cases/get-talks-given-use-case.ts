import { Command } from '../../domain/command'
import { TalksRepository } from '../../domain/talks/TalksRepository'
import { TYPES } from '../../types'
import { Talk } from '../../domain/talks/Talk'
import { Injectable } from '../../injectable'
import { Inject } from '../../inject'
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

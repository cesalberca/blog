import { Command } from '../../domain/types/command'
import { TranslationService } from '../../domain/translation-service'
import { Id } from '../../domain/id'
import { Injectable } from '../../domain/types/injectable'
import { StateManager } from '../../application/state/state-manager'
import { TYPES } from '../../types'
import { Inject } from '../../domain/types/inject'
import { Router } from '../router'
import { EncoderService } from '../../domain/encoder-service'

@Injectable()
export class NavigateToArticle implements Command<void, Id> {
  constructor(
    @Inject(TYPES.ROUTER) private readonly router: Router,
    @Inject(TYPES.TRANSLATION_SERVICE) private readonly translationService: TranslationService,
    @Inject(TYPES.STATE_MANAGER) private readonly stateManager: StateManager,
    @Inject(TYPES.ENCODER_SERVICE) private readonly encoderService: EncoderService
  ) {}

  async execute(id: Id): Promise<void> {
    this.router.value.push({
      name: 'article',
      params: {
        id: this.encoderService.slug(id.value),
        locale: this.translationService.toString(this.stateManager.state.locale)
      }
    })
  }
}

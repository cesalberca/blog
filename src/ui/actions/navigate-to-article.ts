import { Command } from '../../domain/types/command.js'
import { TranslationService } from '../../domain/translation-service.js'
import { Id } from '../../domain/id.js'
import { Injectable } from '../../domain/types/injectable.js'
import { Store } from '../../application/state/store.js'
import { TYPES } from '../../types.js'
import { Inject } from '../../domain/types/inject.js'
import { EncoderService } from '../../domain/encoder-service.js'

@Injectable()
export class NavigateToArticle implements Command<void, Id> {
  constructor(
    @Inject(TYPES.TRANSLATION_SERVICE) private readonly translationService: TranslationService,
    @Inject(TYPES.STORE) private readonly store: Store,
    @Inject(TYPES.ENCODER_SERVICE) private readonly encoderService: EncoderService
  ) {}

  async execute(id: Id): Promise<void> {
    history.pushState(
      {
        id: this.encoderService.slug(id.value),
        locale: this.translationService.toString(this.store.value().locale)
      },
      '',
      '/article'
    )
  }
}

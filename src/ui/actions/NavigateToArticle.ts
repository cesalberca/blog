import { Command } from '../../infraestructure/Command'
import { Id } from '../../domain'
import { VueRouter } from 'vue-router/types/router'
import { Locale } from '../../domain/language'
import { TranslationService } from '../../domain/TranslationService'

export class NavigateToArticle implements Command<void> {
  constructor(
    private readonly router: VueRouter,
    private readonly id: Id,
    private readonly translationService: TranslationService,
    private readonly locale: Locale
  ) {}

  async execute(): Promise<void> {
    this.router.push({
      name: 'article',
      params: { id: this.id.slug, locale: this.translationService.toString(this.locale) }
    })
  }

  static create(context: {
    router: VueRouter
    id: Id
    translationService: TranslationService
    locale: Locale
  }) {
    return new NavigateToArticle(
      context.router,
      context.id,
      context.translationService,
      context.locale
    )
  }
}

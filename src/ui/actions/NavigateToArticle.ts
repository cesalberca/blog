import { Command } from '../../infraestructure/Command'
import { Id } from '../../domain'
import { VueRouter } from 'vue-router/types/router'
import { Locale } from '../../infraestructure/language'
import { TranslationService } from '../../application'

export class NavigateToArticle implements Command<void> {
  public constructor(
    private readonly router: VueRouter,
    private readonly id: Id,
    private readonly translationService: TranslationService,
    private readonly locale: Locale
  ) {}

  public async execute(): Promise<void> {
    this.router.push({
      name: 'article',
      params: { id: this.id.slug, locale: this.translationService.toString(this.locale) }
    })
  }
}

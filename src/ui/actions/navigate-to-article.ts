import { Command } from '../../domain/command'
import VueRouter from 'vue-router'
import { TranslationService } from '../../domain/translation-service'
import { Id } from '../../domain/id'
import { Locale } from '../../domain/language/locale'
import { Injectable } from '../../injectable'

@Injectable()
export class NavigateToArticle implements Command {
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

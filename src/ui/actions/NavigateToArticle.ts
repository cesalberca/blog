import { Command } from '../../domain/Command'
import VueRouter from 'vue-router'
import { TranslationService } from '../../domain/TranslationService'
import { Id } from '../../domain/Id'
import { Locale } from '../../domain/language/Locale'
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

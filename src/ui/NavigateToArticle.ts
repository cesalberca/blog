import { Command } from '../infraestructure/Command'
import { Id } from '../domain'
import { VueRouter } from 'vue-router/types/router'
import { Locale } from '../infraestructure/language'

export class NavigateToArticle implements Command<void> {
  public constructor(
    private readonly router: VueRouter,
    private readonly id: Id,
    private readonly locale: Locale = 'en'
  ) {}

  public async execute(): Promise<void> {
    this.router.push({ name: 'article', params: { id: this.id.slug, locale: this.locale } })
  }
}

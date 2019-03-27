import { Command } from '../application/Command'
import { Id } from '../domain'
import { VueRouter } from 'vue-router/types/router'

export class NavigateToArticle implements Command<void> {
  public constructor(private readonly router: VueRouter, private readonly id: Id) {}

  public async execute(): Promise<void> {
    this.router.push({ name: 'article', params: { id: this.id.slug } })
  }
}

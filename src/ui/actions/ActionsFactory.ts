import { Actions } from './Actions'
import { NavigateToArticle } from './NavigateToArticle'

export class ActionsFactory {
  public static get(action: Actions, context?: any) {
    switch (action) {
      case 'NavigateToArticle':
        return new NavigateToArticle(
          context.router,
          context.id,
          context.translationService,
          context.locale
        )
    }
  }
}

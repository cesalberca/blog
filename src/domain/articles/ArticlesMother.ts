import { Article } from './Article'
import { Id } from '../Id'
import { Markdown } from '../Markdown'

export class ArticlesMother {
  static getFakeArticles() {
    return [
      new Article(
        Id.fromValue('Haciendo (Vue)n frontend'),
        'Haciendo (Vue)n frontend',
        new Date(),
        Markdown.fromValue(
          '¿SOLID, testing, separación por capas y patrones de diseño en el frontend con Vue y TypeScript? ¿Estamos locos? No, se puede hacer y además te lo enseño en este tutorial.'
        )
      ),
      new Article(
        Id.fromValue('Patrones de Diseño'),
        'Patrones de Diseño',
        new Date(),
        Markdown.fromValue(
          'El mundo frontend es conocido por su gran _volatilidad_, sin embargo poco hacemos para que esta volatilidad no afecte a nuestros desarrollos. Nos importa últimamente estar más __a la última del framework del momento que de aprender a hacer nuestro código más mantenible__. Así que este tutorial irá en pos de hacer una aplicación lo más _"Frameworkless"_ posible.'
        )
      )
    ]
  }

  static getFakeArticle() {
    return ArticlesMother.getFakeArticles()[0]
  }
}

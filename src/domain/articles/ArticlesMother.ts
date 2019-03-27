import { Article } from './Article'
import { Id } from '../Id'
import { Markdown } from '../Markdown'

export class ArticlesMother {
  static getFakeArticles() {
    return [
      Article.create({
        id: Id.fromValue('haciendo-vuen-frontend'),
        title: 'Haciendo (Vue)n frontend',
        date: new Date(),
        body: Markdown.fromValue(
          '¿SOLID, testing, separación por capas y patrones de diseño en el frontend con Vue y TypeScript? ¿Estamos locos? No, se puede hacer y además te lo enseño en este tutorial.'
        )
      }),
      Article.create({
        id: Id.fromValue('patrones-de-diseno'),
        title: 'Patrones de Diseño',
        date: new Date(),
        body: Markdown.fromValue(
          'El mundo frontend es conocido por su gran _volatilidad_, sin embargo poco hacemos para que esta volatilidad no afecte a nuestros desarrollos. Nos importa últimamente estar más __a la última del framework del momento que de aprender a hacer nuestro código más mantenible__. Así que este tutorial irá en pos de hacer una aplicación lo más _"Frameworkless"_ posible.'
        )
      })
    ]
  }

  static getFakeArticle() {
    return ArticlesMother.getFakeArticles()[0]
  }
}

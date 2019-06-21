---
title: Casos de Uso y el patrón Comando
date: 2019-04-17
locale: es
image: art-background-black-and-white.jpg
---

Casos de Uso y comandos. Cómo.

<!--more-->

El [patrón comando](https://sourcemaking.com/design_patterns/command) nos ayuda a encapsular peticiones para realizar ciertas operaciones como logs, colas y filtrado.

Comenzamos con la interfaz:

```typescript
export interface Command<T> {
    execute(): Promise<T>
}
```

Ahora podremos ver un comando específico, por ejemplo el que se usa para cargar este mismo artículo.

```typescript
import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Id } from '../../domain'
import { Locale, Translator } from '../../domain/language'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { FileLoader } from '../../infraestructure/FileLoader'
import { TranslationService } from '../../domain/TranslationService'

export class GetArticle implements Command<Article> {
    private constructor(
        private readonly articlesRepository: ArticlesRepository,
        private readonly id: Id,
        private readonly locale: Locale
    ) {}

    public async execute(): Promise<Article> {
        return this.articlesRepository.findOneByLocale(this.id, this.locale)
    }

    public static create(context: { id: Id; locale: Locale }) {
        return new GetArticle(
            new ArticlesFileRepository(
                FileLoader.create(),
                TranslationService.create(Translator.create())
            ),
            context.id,
            context.locale
        )
    }
}
```

Este comando es responsable de obtener cierto artículo usando un [repositorio](http://shawnmc.cool/the-repository-pattern), dónde y cómo lo haga es algo que no nos acontece a nosotros, ya que es responsabilidad de otra clase.

El comando representa un [Caso de Uso](https://en.wikipedia.org/wiki/Use_case) de mi aplicación. Ahora mismo solamente necesito recoger el artículo del repositorio pero podría desarrollar una nueva funcionalidad donde se podría gestionar el si el usuario ha leído el artículo ya o si el usuario es PRO y por tanto puede leer todos los artículos en vez de unos pocos.

¿Quién construye el comando? Pues quien lo use:

```typescript
const article = await GetArticle.create({
    id: 'use-cases-and-commands',
    locale: Locale.EN
}).execute()
```

Estoy usando [inversion de control](https://en.wikipedia.org/wiki/Inversion_of_control) para proveer de las dependencias necesarias para que el case de uso GetArticle funcione. Esto lo hago mediante un función constructura (si fuese muy complejo construir este caso de uso nos crearíamos una [factoría](https://sourcemaking.com/design_patterns/factory_method)):

```typescript
public static create(context: { id: Id; locale: Locale }) {
    return new GetArticle(
        new ArticlesFileRepository(
          FileLoader.create(),
          TranslationService.create(Translator.create())
        ),
        context.id,
        context.locale
    )
}
```

En este caso estoy pasando de una abstracción (ArticlesRepository) a una concreción (ArticlesFileRepository). Si mañana decido que mis artículos vendrán via API únicamente tendré que cambiar el método factoría.

Lo que también es interesante de los comando es que son fáciles de extender. Por ejemplo podemos dejar una traza cada vez que un comando sea ejecutado usando el [patrón decorador](https://sourcemaking.com/design_patterns/decorator):

```typescript
import { Command } from './Command'
import { Logger } from './Logger'

export class LoggerCommandDecorator<T> implements Command<T> {
    public constructor(
        private readonly decoratedCommand: Command<T>,
        private readonly logger: Logger
    ) {}

    public execute(): Promise<T> {
        this.logger.log(
            (this.decoratedCommand as Object).constructor.name +
                ' - ' +
                Object.getOwnPropertyNames(this.decoratedCommand)
        )
        return this.decoratedCommand.execute()
    }
}
```

Después, usando un `UserCaseDecorator` especifico qué decoradores quiero aplicar para **todos mis casos de uso**:

```typescript
import { Command } from '../../infraestructure/Command'
import { LoggerCommandDecorator } from '../../infraestructure/LoggerCommandDecorator'
import { Logger } from '../../infraestructure/Logger'

export class UseCaseDecorator {
    private static readonly logger = Logger.create({
        // eslint-disable-next-line
        stdout: { error: console.error, info: console.log, warn: console.warn }
    })

    public static decorate<T>(command: Command<T>) {
        return new LoggerCommandDecorator<T>(command, UseCaseDecorator.logger)
    }
}
```

Y después en cada Caso de Uso usamos el `UseCaseDecorator` de esta forma:

```typescript
import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Id } from '../../domain'
import { Locale, Translator } from '../../domain/language'
import { UseCaseDecorator } from './UseCaseDecorator'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { FileLoader } from '../../infraestructure/FileLoader'
import { TranslationService } from '../../domain/TranslationService'

export class GetArticle implements Command<Article> {
    private constructor(
        private readonly articlesRepository: ArticlesRepository,
        private readonly id: Id,
        private readonly locale: Locale
    ) {}

    public async execute(): Promise<Article> {
        return this.articlesRepository.findOneByLocale(this.id, this.locale)
    }

    public static create(context: { id: Id; locale: Locale }) {
        return UseCaseDecorator.decorate(
            new GetArticle(
                new ArticlesFileRepository(
                    FileLoader.create(),
                    TranslationService.create(Translator.create())
                ),
                context.id,
                context.locale
            )
        )
    }
}
```

Y podríamos crear todos los decaradores que se nos ocurran y usando composición podemos dar más y más comportamiento a nuestros comandos.

---
title: Welcome
date: 2019-04-17
locale: en
---

Use cases and commands. How to.

<!--more-->

The [command pattern](https://sourcemaking.com/design_patterns/command) helps us encapsulate requests in order to perform certain operations, like logging, queuing and filtering.

We start with the interface:

```typescript
export interface Command<T> {
    execute(): Promise<T>
}
```

And then we can look at a specific command, for example the one used to retrieve this article:

```typescript
import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Id } from '../../domain'
import { Locale } from '../../infraestructure/language'
import { CommandType } from '../../infraestructure/types/CommandType'

export type GetArticleType = CommandType<GetArticle>

export class GetArticle implements Command<Article> {
    public constructor(
        private readonly articlesRepository: ArticlesRepository,
        private readonly id: Id,
        private readonly locale: Locale
    ) {}

    public async execute(): Promise<Article> {
        return this.articlesRepository.findOneByLocale(this.id, this.locale)
    }
}
```

This command is responsible for obtaining a certain article using a [repository](http://shawnmc.cool/the-repository-pattern), where and how do we get this data we neither know or care, that's responsibility of another class.

This command represents a [Use Case](https://en.wikipedia.org/wiki/Use_case) of my application. Right now it only needs to get the article from the repository but in the feature it could handle if a use has read the article, or if the user is a PRO user and then can read all articles instead of a subset of articles or anything we'd like.

Who builds the command? A factory:

```typescript
import { UseCase } from './UseCase'
import { GetArticle } from './index'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { FileLoader } from '../../infraestructure/FileLoader'
import { TranslationService } from '../TranslationService'
import { Translator } from '../../infraestructure/language'

export class UseCaseFactory {
    public static get<T extends UseCase>(useCase: T, context?: any) {
        switch (useCase) {
            case UseCase.GET_ARTICLE:
                new GetArticle(
                    new ArticlesFileRepository(
                        FileLoader.create(),
                        TranslationService.create(Translator.create())
                    ),
                    context.id,
                    context.locale
                )
            default:
                throw new Error(`Use case "${useCase}" not found`)
        }
    }
}
```

How do we call it? Like this:

```typescript
const article = await UseCaseFactory.get(UseCase.GET_ARTICLE, {
    id: 'use-cases-and-commands',
    locale: Locale.EN
}).execute()
```

I'm using [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control) to provide the dependencies needed for the GetArticle use case to work. In this case I'm going from an abstracion (ArticlesRepository) to a concreation (ArticlesFileRepository). If tomorrow I decide to serve the articles via API I would only need to change the factory.

What is also interesting about commands is that they are easily augmented. For example we can log when a command is executed without touching any commands using the [Decorator Pattern](https://sourcemaking.com/design_patterns/decorator):

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

Then, in the factory we create an instance:

```typescript
import { UseCase } from './UseCase'
import { GetArticle } from './index'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { FileLoader } from '../../infraestructure/FileLoader'
import { TranslationService } from '../TranslationService'
import { Translator } from '../../infraestructure/language'
import { LoggerCommandDecorator } from '../../infraestructure/LoggerCommandDecorator'
import { Logger } from '../../infraestructure/Logger'

export class UseCaseFactory {
    private static readonly logger = Logger.create({
        // eslint-disable-next-line
        stdout: { error: console.error, info: console.log, warn: console.warn }
    })

    public static get<T extends UseCase>(useCase: T, context?: any) {
        switch (useCase) {
            case UseCase.GET_ARTICLE:
                return new LoggerCommandDecorator(
                    new GetArticle(
                        new ArticlesFileRepository(
                            FileLoader.create(),
                            TranslationService.create(Translator.create())
                        ),
                        context.id,
                        context.locale
                    ),
                    UseCaseFactory.logger
                )
            default:
                throw new Error(`Use case "${useCase}" not found`)
        }
    }
}
```

And we could create as many decorators as we want and use composition to give more behaviour to our commands.

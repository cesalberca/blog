---
title: Use Cases and Command Pattern
date: 2019-04-17
locale: en
image: abstract-dark-design.jpg
---

Use cases and commands. How to.

<!-- more -->

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
import { Locale, Translator } from '../../domain/language'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { FileLoader } from '../../infraestructure/FileLoader'
import { TranslationService } from '../../domain/TranslationService'

export class GetArticle implements Command<Article> {
    public constructor(
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

This command is responsible for obtaining a certain article using a [repository](http://shawnmc.cool/the-repository-pattern), where and how do we get this data we neither know nor care, that's responsibility of another class.

This command represents a [Use Case](https://en.wikipedia.org/wiki/Use_case) of my application. Right now it only needs to get the article from the repository but in the feature it could handle if a user has read the article, or if the user is a PRO user and then can read all articles instead of a subset of articles or anything we'd like.

Who builds the command? Whoever uses it:

```typescript
const article = await GetArticle.create({
    id: 'use-cases-and-commands',
    locale: Locale.EN
}).execute()
```

I'm using [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control) to provide the dependencies needed for the GetArticle use case to work. In this case I'm going from an abstraction (ArticlesRepository) to a concreation (ArticlesFileRepository). If tomorrow I decide to serve the articles via API I would only need to change the factory.

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

Then, using a `UserCaseDecorator` I specify which decorators I want for **all my use cases**:

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

And then in each use case we use the `UseCaseDecorator` like so:

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
    public constructor(
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

And we could create as many decorators as we want and use composition to give more behaviour to our commands.

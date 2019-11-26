import { LoggerCommandDecorator } from '../../domain/LoggerCommandDecorator'
import { Logger } from '../../domain/Logger'
import { Command } from '../../domain/Command'
import { Injectable } from '../../injectable'

@Injectable()
export class UseCaseDecorator {
  constructor(private readonly logger: Logger) {}

  decorate<T>(commandToBeDecorated: Command<unknown, unknown>): T {
    return (new LoggerCommandDecorator(commandToBeDecorated, this.logger) as unknown) as T
  }
}

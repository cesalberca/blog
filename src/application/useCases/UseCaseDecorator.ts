import { LoggerCommandDecorator } from '../../infraestructure/LoggerCommandDecorator'
import { Logger } from '../../infraestructure/Logger'
import { Command } from '../../infraestructure/Command'
import { Injectable } from '../../Injectable'

@Injectable()
export class UseCaseDecorator {
  constructor(private readonly logger: Logger) {}

  decorate<T>(commandToBeDecorated: Command<unknown, unknown>): T {
    return (new LoggerCommandDecorator(commandToBeDecorated, this.logger) as unknown) as T
  }
}

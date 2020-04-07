import { LoggerCommandDecorator } from '../../domain/logger-command-decorator.js'
import { Logger } from '../../domain/logger.js'
import { Command } from '../../domain/types/command.js'
import { Injectable } from '../../domain/types/injectable.js'

@Injectable()
export class UseCaseDecorator {
  constructor(private readonly logger: Logger) {}

  decorate<T>(commandToBeDecorated: Command<unknown, unknown>): T {
    return (new LoggerCommandDecorator(commandToBeDecorated, this.logger) as unknown) as T
  }
}

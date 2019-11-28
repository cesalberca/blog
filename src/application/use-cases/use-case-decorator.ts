import { LoggerCommandDecorator } from '../../domain/logger-command-decorator'
import { Logger } from '../../domain/logger'
import { Command } from '../../domain/types/command'
import { Injectable } from '../../domain/types/injectable'

@Injectable()
export class UseCaseDecorator {
  constructor(private readonly logger: Logger) {}

  decorate<T>(commandToBeDecorated: Command<unknown, unknown>): T {
    return (new LoggerCommandDecorator(commandToBeDecorated, this.logger) as unknown) as T
  }
}

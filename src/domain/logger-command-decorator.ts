import { Command } from './types/command'
import { Logger } from './logger'
import { Injectable } from './types/injectable'

@Injectable()
export class LoggerCommandDecorator implements Command<unknown, unknown> {
  constructor(
    private readonly decoratedCommand: Command<unknown, unknown>,
    private readonly logger: Logger
  ) {}

  execute(param: unknown): Promise<unknown> {
    this.logger.log(
      (this.decoratedCommand as Object).constructor.name +
        ' - ' +
        Object.getOwnPropertyNames(this.decoratedCommand)
    )
    return this.decoratedCommand.execute(param)
  }
}

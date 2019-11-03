import { Command } from '../../../infraestructure/Command'

export class UseCaseDecorator {
  static decorate<T>(command: Command<T>) {
    return command
  }
}

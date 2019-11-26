import { Datetime } from './Datetime'
import { TYPES } from '../types'
import { Message, Stdout } from './Stdout'
import { injectable, inject } from 'inversify'

type Level = 'warning' | 'error' | 'info'

@injectable()
export class Logger {
  constructor(@inject(TYPES.STDOUT_TYPE) private readonly stdout: Stdout) {}

  log(message: Message, _options: { level: Level } = { level: 'info' }) {
    this.stdout.info(`[${Datetime.fromNow()}] ${message}`)
  }
}

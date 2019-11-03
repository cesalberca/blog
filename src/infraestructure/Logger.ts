import { Datetime } from './Datetime'

type Message = string | number
type Level = 'warning' | 'error' | 'info'
type Log = (message: Message) => void
type Stdout = {
  error: Log
  info: Log
  warn: Log
}

export class Logger {
  constructor(private readonly stdout: Stdout) {}

  log(message: Message, _options: { level: Level } = { level: 'info' }) {
    this.stdout.info(`[${Datetime.fromNow()}] ${message}`)
  }

  static create(options: { stdout: Stdout }) {
    return new Logger(options.stdout)
  }
}

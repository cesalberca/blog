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
  private constructor(private readonly stdout: Stdout) {}

  public log(message: Message, _options: { level: Level } = { level: 'info' }) {
    this.stdout.info(`[${Datetime.fromNow()}] ${message}`)
  }

  public static create(options: { stdout: Stdout }) {
    return new Logger(options.stdout)
  }
}

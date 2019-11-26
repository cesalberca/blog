export type Message = string | number
type Log = (message: Message) => void

export interface Stdout {
  error: Log
  info: Log
  warn: Log
}

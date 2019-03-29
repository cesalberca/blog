export interface Command<T = unknown> {
  execute(): Promise<T>
}

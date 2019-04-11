export interface Command<T> {
  execute(): Promise<T>
}

export interface UseCase<T = void, P = void> {
  execute(param: P): Promise<T>
}

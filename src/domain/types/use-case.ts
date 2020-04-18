import { Observable } from '/web_modules/rxjs.js'

export interface UseCase<T = void, P = void> {
  execute(param: P): Observable<T>
}

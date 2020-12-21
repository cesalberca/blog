import { Observable } from 'rxjs'

export interface UseCase<T = void, P = void> {
  execute(param: P): Observable<T>
}

import { Observable } from "rxjs";

export interface ServiceInterface<T> {
  findAll(): Observable<T[]>;
  find(id: string): Observable<T>;
  update(object: T): Observable<T>;
}

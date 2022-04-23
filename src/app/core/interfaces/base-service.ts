import {Observable} from "rxjs";

export interface IBaseService {
  create(data: Record<string | number, any>): Observable<unknown>;
  update(id: string | number, data: Record<string, unknown>): Observable<unknown>;
  delete(id: string | number): Observable<unknown>;

  updatePhoto?(file: unknown): Observable<unknown>;
}

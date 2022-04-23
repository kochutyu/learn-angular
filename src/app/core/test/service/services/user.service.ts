import {Injectable} from '@angular/core';
import {IBaseUserService} from "../interfaces/service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService implements IBaseUserService {

  users$ = new BehaviorSubject<User[]>([]);

  create(data: Record<string, any>): Observable<User> {
    const user = new User({id: this.users$.value.length, ...data});
    this.users$.value.push(user);
    return of(user);
  }

  delete(id: string | number): Observable<boolean> {
    const users = this.users$.value.filter(user => user.id !== id);
    this.users$.next(users);
    return of(true);
  }

  update(id: string | number, data: Record<string, unknown>): Observable<User> {
    const userIndex = this.users$.value.findIndex(user => user.id === id);
    const user = new User({id: id as number, ...data});
    this.users$.value.splice(userIndex, 1, user);
    return of(user);
  }

  updatePhoto(file: unknown): Observable<null> {
    return of(null);
  }

}

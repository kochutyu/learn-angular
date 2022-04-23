import { Injectable } from '@angular/core';
import {IBaseService} from "./base-service";
import {Observable, of} from "rxjs";

interface IUserResponse {
  id?: number;
  firstName?: string;
  lastName?: string;
}

interface IUserBase extends IUserResponse {
  getFullName(): string;
}

export class User implements IUserBase {
  id: number;
  firstName: string;
  lastName: string;

  constructor(params: IUserResponse) {
    this.id = params.id || 0;
    this.firstName = params.firstName || '';
    this.lastName = params.lastName || '';
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService implements IBaseService {

  users: User[] = [];

  constructor() { }

  create(data: Record<string, any>): Observable<User> {
    const user = new User({id: new Date().getTime(), ...data});
    this.users.push(user);
    return of(user);
  }

  delete(id: string | number): Observable<boolean> {
    this.users = this.users.filter(user => user.id !== id as number);
    return of(true);
  }

  update(id: string | number, data: Record<string, unknown>): Observable<User> {
    const userIndex = this.users.findIndex(user => user.id === id);
    const user = new User({id: id as number, ...data});
    this.users.splice(userIndex, 1, user);
    return of(user);
  }

  updatePhoto(file: unknown): Observable<null> {
    return of(null);
  }


}

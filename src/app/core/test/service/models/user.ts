import {IUserBase, IUserResponse} from "../interfaces/user";

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

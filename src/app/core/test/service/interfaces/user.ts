export interface IUserResponse {
  id?: number;
  firstName?: string;
  lastName?: string;
}

export interface IUserBase extends IUserResponse {
  getFullName(): string;
}

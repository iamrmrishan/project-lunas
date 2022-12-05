export interface ICreateUser {
  userName: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  userName: string;
  email: string;
  password: string;
  points: string;
}
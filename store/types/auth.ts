export interface IAuthState {
  auth: boolean;
  name: string;
  email: string;
  password: string | number;
}

export enum AuthEnam {
  SET_AUTH = "SET_AUTH",
  SET_NAME = "SET_NAME",
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
}

interface setAuthAc {
  type: AuthEnam.SET_AUTH;
  payload: boolean;
}
interface setName {
  type: AuthEnam.SET_NAME;
  payload: string;
}
interface setEmail {
  type: AuthEnam.SET_EMAIL;
  payload: string;
}
interface setPassword {
  type: AuthEnam.SET_PASSWORD;
  payload: string | number;
}

export type IAuthAction = setAuthAc | setEmail | setName | setPassword;

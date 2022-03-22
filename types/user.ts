export interface IUser {
  name: string;
  email: string;
  kurs: string | undefined;
  from: string | undefined | null;
}

export enum UserActionTypes {
  SET_NAME = "SET_NAME",
  SET_EMAIL = "SET_EMAIL",
}

interface setNameActions {
  type: UserActionTypes.SET_NAME;
  payload: string;
}
interface setEmailActions {
  type: UserActionTypes.SET_EMAIL;
  payload: string;
}

export type UserAction = setNameActions | setEmailActions;

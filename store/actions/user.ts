import { UserAction, UserActionTypes } from "../../types/user";

export const nameAction = (payload: string): UserAction => {
  return { type: UserActionTypes.SET_NAME, payload };
};
export const emailAction = (payload: string): UserAction => {
  return { type: UserActionTypes.SET_EMAIL, payload };
};

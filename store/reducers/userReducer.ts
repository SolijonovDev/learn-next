import { IUser, UserAction, UserActionTypes } from "./../../types/user";

const initialState: IUser = {
  name: "Solijonov Qodirjon",
  email: "solijonov@gmail.com",
  kurs:"4",
  from:"Fergana"
};

export const userReducer = (
  state = initialState,
  action: UserAction
): IUser => {
  switch (action.type) {
    case UserActionTypes.SET_NAME:
      return { ...state, name: action.payload };
    case UserActionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    default: {
      return state;
    }
  }
};

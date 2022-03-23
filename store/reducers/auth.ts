import { AuthEnam, IAuthAction, IAuthState } from "./../types/auth";

const initialState: IAuthState = {
  auth: false,
  name: "",
  email: "",
  password: "",
};

export const authReducer = (
  state = initialState,
  action: IAuthAction
): IAuthState => {
  switch (action.type) {
    case AuthEnam.SET_AUTH:
      return { ...state, auth: action.payload };
    case AuthEnam.SET_NAME:
      return { ...state, name: action.payload };
    case AuthEnam.SET_EMAIL:
      return { ...state, email: action.payload };
    case AuthEnam.SET_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

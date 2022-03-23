import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { userReducer } from "./userReducer";
import { authReducer } from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;

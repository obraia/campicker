import { createActions, createReducer } from 'reduxsauce';
import { IAuthState } from "../../interfaces";


const INITIAL_STATE: IAuthState = {
  isAuthenticated: false,
  token: "",
}

const authenticate = (state: IAuthState = INITIAL_STATE, action: any) => {
  state.isAuthenticated = true;
  state.token = action.token

  return { ...state };
}

const logoff = (state: IAuthState = INITIAL_STATE, action: any) => {
  state.isAuthenticated = false;
  state.token = "";

  return { ...state };
}

// Making Types and Creators
export const { Types, Creators } = createActions({
  authenticate: null,
  logoff: null,
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.AUTHENTICATE]: authenticate,
  [Types.LOGOFF]: logoff,
});

const utils = {

}

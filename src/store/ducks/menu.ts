import { createActions, createReducer } from 'reduxsauce';
import { IMenuState } from "../../interfaces";

const INITIAL_STATE: IMenuState = {
  isOpen: false
}

const toggle = (state: IMenuState = INITIAL_STATE, action: any) => {
  utils.toogleMenu(state);
  return { ...state };
} 

// Making Types and Creators
export const { Types, Creators } = createActions({
  toggleMenu: []
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_MENU]: toggle
});

const utils = {
  toogleMenu: (state: IMenuState) => {
    state.isOpen = !state.isOpen;
  }
}

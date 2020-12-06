import { createActions, createReducer } from 'reduxsauce';
import { IThemeState } from "../../interfaces";

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

const INITIAL_STATE: IThemeState = {
  theme: { ...light }
}

const toggle = (state: IThemeState = INITIAL_STATE, action: any) => {
  state.theme = state.theme.title === 'light' ? dark : light;
  return { ...state };
}

// Making Types and Creators
export const { Types, Creators } = createActions({
  toggleTheme: [],
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_THEME]: toggle,
});

const utils = {

}

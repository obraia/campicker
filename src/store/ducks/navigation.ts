import { createActions, createReducer } from 'reduxsauce';
import { INavigationState } from "../../interfaces";

const INITIAL_STATE: INavigationState = {
    page: 'Paletas'
}

const goTo = (state: INavigationState = INITIAL_STATE, action: any) => {
    state.page = action.value;
    return { ...state };
}

// Making Types and Creators
export const { Types, Creators } = createActions({
    goTo: ['value']
});

// Making reducer
export default createReducer(INITIAL_STATE, {
    [Types.GO_TO]: goTo
});

const utils = {
    
}

import { combineReducers } from 'redux';

import themeReducers from './theme';
import menuReducers from './menu';
import paletteReducers from './palette';
import navigationReducers from './navigation';
import authReducers from './auth';

const reducers = combineReducers({
    themeReducers,
    menuReducers,
    paletteReducers,
    navigationReducers,
    authReducers
});

export { reducers };
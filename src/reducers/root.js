import { combineReducers } from 'redux';
import boxShadowReducer from './boxShadow';
import colorReducer from './color'

const rootReducer = combineReducers({
    boxShadow: boxShadowReducer,
    color: colorReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import boxShadowReducer from './boxShadow';

const rootReducer = combineReducers({
    boxShadow: boxShadowReducer
});

export default rootReducer;
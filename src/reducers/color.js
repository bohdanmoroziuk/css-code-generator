import ACTION_TYPES from '../constants/actions';

const initialState = {
    value: '#000',
    scale: 'hex'
};

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_COLOR_PARAMETER:
            return {
                ...state,
                ...action.parameter
            };
        default:
            return {
                ...state
            };
    }
}; 

export default colorReducer;